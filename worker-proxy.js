/* Proxy sicuro per l'API London Strategic Edge — versione 2 con ricerca.
   - La chiave API sta nel segreto LSE_API_KEYY (mai nel codice, mai nel browser).
   - Accetta solo richieste GET verso un elenco chiuso di percorsi di lettura.
   - /export è bloccato: consuma il monte-dati mensile, meglio non esporlo al pubblico.
   - /search?q=... : ricerca per simbolo, nome o ISIN sul catalogo (tenuto in memoria).
   - CORS: risponde solo al tuo sito (Pages) e ai test in locale. */

const API_BASE = 'https://api.londonstrategicedge.com/vault';
const PATH_OK = /^\/(catalog|meta|reference|usage|series|candles|ref\/[a-z_]+)$/;

let CAT = null, CAT_T = 0;      // catalogo in memoria (ricaricato ogni 6 ore)
let ISIN = null, ISIN_T = 0;    // mappa ISIN -> titolo (ricaricata ogni 24 ore)

function corsHeaders(origin) {
  const ok = origin && (
    origin === 'http://127.0.0.1:8746' ||
    origin === 'http://localhost:8746' ||
    origin.endsWith('.pages.dev') ||
    origin.endsWith('.netlify.app')
  );
  return {
    'Access-Control-Allow-Origin': ok ? origin : 'null',
    'Vary': 'Origin',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
}

function json(obj, status, origin, cacheSec) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=' + (cacheSec || 60),
      ...corsHeaders(origin)
    }
  });
}

async function api(env, path) {
  const r = await fetch(API_BASE + path, { headers: { 'x-api-key': env.LSE_API_KEYY } });
  if (!r.ok) throw new Error('upstream ' + r.status);
  return r.json();
}

async function catalogo(env) {
  if (CAT && Date.now() - CAT_T < 6 * 3600 * 1000) return CAT;
  CAT = await api(env, '/catalog');
  CAT_T = Date.now();
  return CAT;
}

async function mappaIsin(env) {
  if (ISIN && Date.now() - ISIN_T < 24 * 3600 * 1000) return ISIN;
  const rows = await api(env, '/ref/company_profiles?limit=5000');
  ISIN = {};
  for (const p of rows) {
    if (p.isin) ISIN[p.isin] = { symbol: p.symbol, name: p.company_name, country: p.country };
  }
  ISIN_T = Date.now();
  return ISIN;
}

async function ricerca(env, q) {
  const qU = q.toUpperCase(), ql = q.toLowerCase();

  // un ISIN è: 2 lettere + 9 alfanumerici + 1 cifra di controllo (es. US0378331005)
  if (/^[A-Z]{2}[A-Z0-9]{9}[0-9]$/.test(qU)) {
    const m = (await mappaIsin(env))[qU];
    return m ? [{ dataset: 'stocks', symbol: m.symbol, name: m.name, country: m.country, isin: qU }] : [];
  }

  const cat = await catalogo(env);
  const out = [];
  for (const r of cat) {
    if (r.dataset === 'options') continue;   // le opzioni si cercano dal sottostante
    const sym = (r.symbol || '').toUpperCase(), nm = (r.name || '').toLowerCase();
    let s = -1;
    if (sym === qU) s = 0;
    else if (sym.startsWith(qU)) s = 1;
    else if (nm.startsWith(ql)) s = 2;
    else if (nm.includes(ql)) s = 3;
    else if (sym.includes(qU)) s = 4;
    if (s >= 0) out.push([s, r]);
  }
  out.sort((a, b) => a[0] - b[0] || (b[1].ticks || 0) - (a[1].ticks || 0));
  return out.slice(0, 20).map(x => ({
    dataset: x[1].dataset, symbol: x[1].symbol, name: x[1].name,
    country: x[1].country_name || x[1].country,
    last_value: x[1].last_value, unit: x[1].unit,
    category: x[1].category, frequency: x[1].frequency
  }));
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin');

    if (request.method === 'OPTIONS')
      return new Response(null, { headers: corsHeaders(origin) });

    if (request.method !== 'GET')
      return json({ detail: 'method not allowed' }, 405, origin);

    if (url.pathname === '/search') {
      const q = (url.searchParams.get('q') || '').trim();
      if (q.length < 2) return json([], 200, origin);
      try { return json(await ricerca(env, q), 200, origin, 300); }
      catch (e) { return json({ detail: 'search failed' }, 502, origin); }
    }

    if (!PATH_OK.test(url.pathname))
      return json({ detail: 'path not allowed' }, 404, origin);

    const upstream = await fetch(API_BASE + url.pathname + url.search, {
      headers: { 'x-api-key': env.LSE_API_KEYY }
    });

    const out = new Response(upstream.body, upstream);
    const ch = corsHeaders(origin);
    for (const k in ch) out.headers.set(k, ch[k]);
    out.headers.set('Cache-Control', 'public, max-age=3600');
    return out;
  }
};
