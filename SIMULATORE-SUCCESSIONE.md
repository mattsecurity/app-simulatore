# Simulatore di Successione Ereditaria

Guida al funzionamento dello strumento «Successione» dell'app Simulatori Finanziari.
Normativa italiana in vigore nel 2026. Tutti i calcoli avvengono in locale sul dispositivo:
nessun dato viene inviato da nessuna parte.

---

## 1. A cosa serve

Il simulatore risponde a quattro domande, in tempo reale, mentre imposti i parametri
davanti al cliente:

1. **Chi eredita e quanto** — le quote di ciascun erede, in percentuale e in euro.
2. **La legittima è rispettata?** — quanto la legge riserva a coniuge, figli e ascendenti,
   se il testamento li lede e **come sistemare** se li lede.
3. **Quante imposte si pagano** — imposta di successione per ciascun erede, più ipotecaria
   e catastale sugli immobili (a carico di chi riceve l'immobile).
4. **Cosa va fuori successione** — polizze vita, temporanea caso morte e previdenza
   complementare, con il dettaglio di chi prende cosa.

Si apre da **Simulatori → Simulatore Successione** (scheda con l'albero genealogico, colore verde acqua).

---

## 2. Struttura della schermata

A sinistra il **pannello dei parametri**, a destra la **dashboard dei risultati** che si
aggiorna a ogni modifica. Su iPad in verticale le due parti vanno una sotto l'altra.

Le sezioni pesanti del pannello sono **richiudibili**: il titolo mostra sempre il totale
di quella sezione (per esempio «IMMOBILI · 2 · 700.000 €»), così vedi tutto a colpo
d'occhio senza aprire nulla.

---

## 3. Il pannello, sezione per sezione

### 3.1 Tipo di successione

| Scelta | Cosa cambia |
|---|---|
| **Senza testamento** | Le quote le stabilisce il codice civile in base alla famiglia. |
| **Con testamento** | Assegni tu i singoli beni e le quote del resto, e il simulatore controlla la legittima. |

### 3.2 Chi eredita

- **Coniuge o unito civilmente** — Sì / No
- **Figli** — da 0 a 8 (contano anche adottivi e nipoti che subentrano per rappresentazione)
- **Ascendenti in vita** — da 0 a 4 (genitori, nonni)
- **Fratelli e sorelle** — da 0 a 8

Accanto a ogni voce c'è la **percentuale che spetta a quel gruppo**, e sotto l'importo in
euro con il «a testa» quando sono più persone. Se una categoria è esclusa dalla legge
te lo dice: in presenza di figli, ascendenti e fratelli non ereditano.

### 3.3 Altri eredi o legatari

Chi riceve pur non essendo un familiare stretto: convivente, nipote, amico, ente.
Per ognuno indichi il nome e il **rapporto con il defunto**, che determina l'aliquota
dell'imposta (vedi § 5.1).

Senza testamento questi soggetti ereditano solo se non ci sono coniuge, figli,
ascendenti né fratelli.

### 3.4 Quote del testamento

Compare solo in modalità «Con testamento». Una riga per beneficiario con la percentuale
**del resto**, cioè di quello che rimane dopo i beni assegnati a una persona (§ 3.6).
Sotto ogni nome trovi la quota di legge, la riserva e — se ha ricevuto beni — quanto
riceve in tutto. Il comportamento è spiegato in dettaglio al § 6.

Il pulsante **«Riparti come per legge»** riporta tutte le quote a quelle della successione
legittima: utile come punto di partenza.

### 3.5 Patrimonio finanziario

- **Conti correnti**
- **Titoli e fondi** — capitale investito *e* montante alla data del decesso.
  Sotto compare la plusvalenza o la minusvalenza latente. Nell'asse entra il **montante**.
- **Titoli di Stato** — stessa coppia investito/montante. Entrano nell'asse per il calcolo
  delle quote ma sono **esenti dall'imposta di successione**.
- **Partecipazioni societarie** — con l'interruttore facoltativo *«Trasferimento esente
  (art. 3 c. 4-ter)»*: aziende e quote di controllo trasferite a discendenti o coniuge
  che si impegnano a proseguire l'attività per 5 anni non pagano imposta di successione.
- **Crediti verso terzi**

In fondo alla sezione i pulsanti **«+»** aggiungono le voci facoltative (§ 3.9).

### 3.6 I beni a elenco e «A chi va»

Tre elenchi, uno per tipo di bene. Ogni voce si aggiunge con un pulsante e si toglie
con il cestino:

| Elenco | Cosa contiene | Campi |
|---|---|---|
| **Immobili** | Appartamenti, case, box, negozi, uffici, capannoni, terreni | Nome, tipo, indirizzo, valore, **prima casa** |
| **Beni mobili registrati** *(facoltativo)* | Auto, moto, camper, barche, navi, aeromobili | Tipo, nota (modello, targa), valore di mercato alla data del decesso, **kW** (solo per i mezzi al PRA, per l'IPT) |
| **Altri beni di valore** *(facoltativo)* | Gioielli, orologi, arte, arredi, metalli, collezioni | Tipo, nota, valore |

Con il testamento ogni bene ha in fondo la tendina **«A chi va»**:

- *Nella massa: si divide con le quote* — il valore entra nel mucchio da dividere.
- *Una persona* — quel bene va a lei per intero (**legato**): esce dalla massa, e le
  quote del testamento dividono soltanto il **resto**.

Chi riceve un immobile ne paga anche **ipotecaria e catastale**; quelle degli immobili
rimasti nella massa si ripartiscono sulle quote del resto. Allo stesso modo chi riceve
un veicolo ne paga la **voltura** (IPT al PRA o trascrizione nel registro).

Sotto ogni bene mobile registrato compare una riga che dice se è **esente** o
**imponibile** per l'imposta di successione e quanto costa la voltura.

### 3.7 Polizze e previdenza

Tre prodotti indipendenti, ognuno con Sì / No:

| Prodotto | Importi richiesti |
|---|---|
| **Polizza vita caso morte** | Capitale liquidato |
| **Temporanea caso morte** | Capitale assicurato |
| **Previdenza complementare** | Capitale versato e montante maturato |

Per ciascuno scegli **a chi va**:

- **Indicati per nome** — elenco di beneficiari con nome e percentuale (Tizio 60%, Caio 40%…).
  Se le percentuali non sommano a 100 vengono riproporzionate, con un avviso.
- **Eredi legittimi** — si ripartisce secondo le quote di legge.
- **Eredi testamentari** — secondo le quote effettive del testamento (beni assegnati
  compresi). Se non c'è testamento, il capitale va agli eredi legittimi e il simulatore
  lo segnala.

Questi capitali **non entrano nell'asse ereditario** e **non pagano imposta di successione**
(vedi § 7).

### 3.8 Voci facoltative

Non appesantiscono la schermata: si aggiungono con **«+»** solo quando servono, e si
tolgono con la **✕** nel titolo della sezione.

| Voce | Dove | Effetto |
|---|---|---|
| Beni mobili registrati | Patrimonio → elenco a sé | Auto, moto, camper, barche, navi, aeromobili |
| Altri beni di valore | Patrimonio → elenco a sé | Gioielli, arte, arredi di pregio, metalli preziosi |
| Passività | Sezione a sé | Mutui ancora da pagare e altre passività: riducono l'asse |
| Handicap grave (L. 104) | Sezione a sé | Segnali quali eredi hanno la franchigia maggiorata |

---

## 4. Come si calcolano le quote

### 4.1 Senza testamento — successione legittima

Regole degli artt. 565-586 del codice civile. **I figli escludono ascendenti e fratelli.**

| Situazione | Coniuge | Figli | Ascendenti | Fratelli |
|---|---|---|---|---|
| Coniuge + 1 figlio | 1/2 | 1/2 | — | — |
| Coniuge + 2 o più figli | 1/3 | 2/3 | — | — |
| Solo figli | — | tutto, in parti uguali | — | — |
| Solo coniuge | tutto | — | — | — |
| Coniuge + ascendenti | 2/3 | — | 1/3 | — |
| Coniuge + fratelli | 2/3 | — | — | 1/3 |
| Coniuge + ascendenti + fratelli | 2/3 | — | 1/4 | 1/12 |
| Ascendenti + fratelli | — | — | per capi, mai meno di 1/2 | il resto |
| Solo ascendenti | — | — | tutto | — |
| Solo fratelli | — | — | — | tutto |

La quota di ciascun gruppo si divide in parti uguali fra i suoi componenti.
Nel concorso fra coniuge, ascendenti e fratelli, agli ascendenti è comunque riservato
**almeno 1/4** dell'eredità (art. 582); senza coniuge, **almeno la metà** (art. 571).

Senza nessun erede il patrimonio è devoluto allo Stato, e il simulatore lo segnala.

### 4.2 Le quote di legittima (riservate)

Sono il minimo che la legge garantisce ai **legittimari**: coniuge, figli e — solo in
mancanza di figli — ascendenti. **Fratelli e sorelle non sono legittimari.**

| Situazione | Coniuge | Figli | Ascendenti | Disponibile |
|---|---|---|---|---|
| Solo coniuge | 1/2 | — | — | 1/2 |
| Coniuge + 1 figlio | 1/3 | 1/3 | — | 1/3 |
| Coniuge + 2 o più figli | 1/4 | 1/2 | — | 1/4 |
| Coniuge + ascendenti | 1/2 | — | 1/4 | 1/4 |
| 1 figlio solo | — | 1/2 | — | 1/2 |
| 2 o più figli | — | 2/3 | — | 1/3 |
| Solo ascendenti | — | — | 1/3 | 2/3 |

La **quota disponibile** è ciò di cui il testatore può disporre liberamente.

La legittima si verifica su **tutto quello che ciascuno riceve**: beni assegnati per
testamento **più** la sua quota del resto.

---

## 5. Come si calcolano le imposte

### 5.1 Imposta di successione — aliquote e franchigie 2026

Si calcola **su ciascun erede separatamente**, sulla quota che riceve.

| Chi riceve | Aliquota | Franchigia |
|---|---|---|
| Coniuge e parenti in linea retta (figli, nipoti, genitori, nonni) | 4% | 1.000.000 € |
| Fratelli e sorelle | 6% | 100.000 € |
| Altri parenti fino al 4º grado e affini | 6% | nessuna |
| Altri soggetti (estranei, conviventi non uniti civilmente) | 8% | nessuna |
| Beneficiario con **handicap grave** (L. 104/1992) | quella della sua categoria | **1.500.000 €** |

La franchigia si applica **a ogni beneficiario**, non una volta sola. Per questo, in molte
famiglie con coniuge e figli, l'imposta di successione risulta **zero**: ciascuno resta
sotto il milione di franchigia.

### 5.2 Il calcolo, passo per passo

```
asse ereditario   = liquidità + titoli + titoli di Stato + immobili
                    + partecipazioni + crediti + beni mobili + altri beni
                    − passività (se inserite)

beni assegnati    = somma dei beni con «A chi va» su una persona   (solo con testamento)
resto             = asse ereditario − beni assegnati

base imponibile   = asse ereditario − titoli di Stato
                    − partecipazioni esenti (se hai attivato l'art. 3 c. 4-ter)
                    − auto, moto e camper (esenti da imposta di successione)

per ogni erede:
  quota ricevuta  = beni a lui assegnati + sua % del resto
  imponibile      = base imponibile × (quota ricevuta / asse)
  imposta         = max(0, imponibile − franchigia) × aliquota
```

### 5.3 Imposte ipotecaria e catastale sugli immobili

| Caso | Ipotecaria | Catastale | Totale |
|---|---|---|---|
| Immobile ordinario | 2% del valore | 1% del valore | **3%** |
| Con agevolazione **prima casa** | 200 € fissi | 200 € fissi | **400 €** |

Si pagano sempre, anche quando l'imposta di successione è zero per effetto della franchigia.
Spesso sono l'unica imposta effettivamente dovuta. Le paga **chi riceve l'immobile**: se è
assegnato a una persona, sono tutte sue; se resta nella massa, si ripartiscono sulle quote.

### 5.3 bis Beni mobili registrati: esenzione e voltura

| Tipo | Registro | Imposta di successione | Voltura all'erede |
|---|---|---|---|
| Auto, moto, camper | PRA | **Esenti**: entrano nell'asse (contano per quote e legittima) ma non nella base imponibile | **IPT**: 150,81 € fino a 53 kW, poi 3,5119 €/kW (moto fino a 11 kW: 25,82 €), con la maggiorazione provinciale del 30% applicata da quasi tutte le province |
| Imbarcazioni da diporto | RID | Imponibili come gli altri beni | importo medio indicativo (200 €) |
| Navi | Registro navale | Imponibili | importo medio indicativo (500 €) |
| Aeromobili | Registro aeronautico | Imponibili | importo medio indicativo (300 €) |
| Altro mezzo registrato | — | Imponibile | importo medio indicativo (200 €) |

Se non si indicano i kW, l'IPT è stimata su una potenza media per tipologia (auto 85 kW,
moto 35 kW, camper 100 kW) e la riga sotto il veicolo invita a inserire quelli reali.
La voltura la paga **chi riceve il mezzo**: se è assegnato a una persona, è tutta sua;
se resta nella massa, si ripartisce sulle quote del resto. I valori sono stime di
mercato alla data del decesso: per una valutazione precisa servono listini o un perito.

### 5.4 Totale

```
totale imposte = imposta di successione + ipotecaria + catastale + voltura veicoli
netto agli eredi = asse ereditario − totale imposte
```

---

## 6. Le quote del testamento e il vincolo della legittima

Questa è la parte che richiede più attenzione. Il simulatore **non ti lascia scrivere un
testamento che lede la legittima**, ma invece di bloccarti secco ti aiuta a trovare spazio.

Sotto ogni quota c'è sempre scritto il margine di manovra, per esempio
*«Riserva 25% · puoi salire fino a 50% riducendo le altre quote»*. Se la persona ha già
ricevuto dei beni, la riserva risulta in parte o del tutto coperta e il minimo sul resto
scende di conseguenza.

### Cosa succede quando alzi una quota

**Caso 1 — c'è ancora spazio legale.**
Mentre digiti il campo diventa **arancione** e ti dice da chi prenderà:

> Servono altri 11,66%: alla conferma li tolgo da Figlio 1, Figlio 2 in proporzione

Quando confermi (esci dal campo o premi invio), le altre quote **scendono da sole in
proporzione**, mai sotto la loro riserva di legge, e il totale torna esattamente a 100%.
Un messaggio riassume cosa è stato ridotto.

**Caso 2 — il limite di legge è stato raggiunto.**
Se gli altri sono già tutti al minimo riservato, il campo diventa **rosso**:

> Massimo 50%: la legittima riservata agli altri non si può toccare
> (Figlio 1 25%, Figlio 2 25%)

Alla conferma la quota si ferma al massimo consentito.

**Caso 3 — quota troppo bassa per un legittimario.**
Il campo diventa rosso con *«Riserva di legge: minimo 25%»*, e alla conferma risale
automaticamente al minimo.

**Caso 4 — i beni assegnati rendono impossibile rispettare la legittima.**
Se quello che è già stato assegnato a persone non legittimarie non lascia abbastanza
resto per coprire le riserve, le quote restano **libere** (nessun minimo imposto) e la
dashboard mostra la lesione con la scheda **«Come sistemare»**.

### Quota non assegnata

Se le quote sommano a **meno** di 100%, il simulatore non rialza nulla: mostra la
**«Quota non assegnata»** con l'importo. È corretto — quella parte di patrimonio si
devolve secondo le regole della successione legittima, e nel calcolo è già distribuita così.

### «Come sistemare»

Quando la legittima è lesa, sotto la tabella della verifica compare un riquadro arancione
con consigli concreti, uno per legittimario sotto la riserva:

- *porta la sua quota del resto ad almeno X%* — quando basta muovere le percentuali;
- *assegna «Villa al mare» (300.000 €) a Coniuge invece che a Marta* — quando serve
  spostare un bene da chi ha margine sopra la propria riserva;
- *oppure rimetti nella massa «…»* — quando conviene togliere l'assegnazione e lasciare
  che il bene si divida con le quote.

---

## 7. Polizze e previdenza: perché stanno fuori

| Aspetto | Trattamento |
|---|---|
| Asse ereditario | **Non ci entrano** |
| Quote di legittima | **Non rilevano** |
| Imposta di successione | **Esenti** |
| Chi le riceve | I beneficiari designati, per diritto proprio |

Riferimenti: art. 1920 c.c. e art. 12 D.Lgs. 346/1990 per le polizze caso morte,
art. 14 D.Lgs. 252/2005 per la previdenza complementare.

**Attenzione**: se la designazione è fatta in frode ai legittimari, i **premi versati**
possono essere aggrediti con l'azione di riduzione. Il capitale liquidato invece no.

Nella dashboard la scheda «Polizze e previdenza: a chi vanno» mostra, prodotto per
prodotto, ogni beneficiario con la sua percentuale e il suo importo.

---

## 8. La dashboard dei risultati

| Elemento | Cosa mostra |
|---|---|
| **Riquadro grande** | Totale imposte, con l'incidenza percentuale sull'asse e il riepilogo discorsivo |
| **Avvisi** | Legittima lesa, quote oltre il 100%, quota non assegnata, beni assegnati senza testamento, problemi sui beneficiari |
| **Riquadri numerici** | Asse ereditario · Imposta di successione · Ipotecaria e catastale · Voltura veicoli (solo se ci sono veicoli) · Netto agli eredi · Fuori successione |
| **Quote ereditarie** | Barra di ripartizione per gruppo familiare, grafico a barre per erede (in verde acqua il netto, in rosso le imposte) e tabella con quota, valore, imposta, ipotecaria + catastale + voltura, netto |
| **Verifica della legittima** | Riservato per legge · assegnato · esito, con il dettaglio per persona, l'importo della lesione e la scheda **«Come sistemare»** |
| **Beni assegnati per testamento** | Bene, a chi va, valore, percentuale dell'asse, con il resto da dividere |
| **Composizione del patrimonio** | Barra a colori per categoria di bene e riepilogo della massa |
| **Immobili** | Elenco con tipo, indirizzo, assegnatario, valore, ipotecaria, catastale e totale |
| **Beni mobili registrati** | Elenco con tipo, registro, assegnatario, valore, esente/imponibile e imposta di voltura |
| **Dettaglio del calcolo** | Tabella richiudibile: classe, quota, ricevuto, di cui esente, franchigia, imponibile, aliquota, imposta |
| **Limiti da conoscere** | I sei limiti del § 10, sempre sotto gli occhi |

---

## 9. Funzioni di lavoro

- **Blocca scenario per confronto** — fotografa la situazione attuale; muovendo i parametri
  compare una tabella *Bloccato / Adesso / Differenza* con verde e rosso a indicare
  miglioramento o peggioramento (asse, beni assegnati, imposte, netto, legittima).
- **Salva simulazione** — la ritrovi in «Salvate» con tutti i parametri, riapribile e
  duplicabile. Puoi aggiungere note per il cliente.
- **Modalità presentazione** — nasconde menu e parametri e ingrandisce i risultati:
  per girare l'iPad verso il cliente.
- **Stampa o PDF** — apre le tabelle di dettaglio e compone un documento con l'intestazione.
- **Condividi** — riepilogo testuale completo (beni assegnati compresi) tramite il menu
  di condivisione di iPad.

---

## 10. Limiti da conoscere

Da dire al cliente, perché in una successione reale possono spostare i numeri:

1. **Non considera le donazioni fatte in vita.** La legittima si calcola per legge sul
   patrimonio al netto dei debiti **aumentato delle donazioni** (riunione fittizia).
   Se il defunto ha donato in vita, le quote reali cambiano.
2. **Non considera le spese funerarie** (deducibili fino a 1.032,91 €) né altre deduzioni minori.
3. **Non valorizza il diritto di abitazione del coniuge** sulla casa familiare e l'uso dei
   mobili (art. 540 c.c.), che spettano in aggiunta alla quota.
4. **Non gestisce l'usufrutto** né la separazione fra nuda proprietà e usufrutto.
5. **I valori degli immobili** vanno inseriti a mano: il simulatore non calcola la rendita
   catastale rivalutata.
6. **L'azione di riduzione** per lesione di legittima si prescrive in **10 anni**
   dall'apertura della successione.

Lo strumento è una stima di orientamento: **non sostituisce il parere di un notaio o di un
commercialista**.

---

## 11. Note tecniche

Il simulatore vive dentro `index.html`, in un blocco `<script>` dedicato che inizia con
`/* ================= SIMULATORE DI SUCCESSIONE EREDITARIA =================`.
Tutte le funzioni hanno prefisso `suc`.

**Costanti principali**

| Nome | Contenuto |
|---|---|
| `SUC_CLASSI` | Aliquote e franchigie per categoria di beneficiario |
| `SUC_FRANCHIGIA_DISABILE` | 1.500.000 € |
| `SUC_ALIQ_IPOTECARIA` / `SUC_ALIQ_CATASTALE` | 0,02 e 0,01 |
| `SUC_FISSA_PRIMA_CASA` | 200 € |
| `SUC_IPT` | Tariffe IPT per la voltura al PRA (fissa, soglia kW, €/kW, moto, maggiorazione) |
| `SUC_VOLTURA_FISSA` | Importi medi di trascrizione per barche, navi, aeromobili |
| `SUC_CAT` | Categorie di bene e colori della barra di composizione |
| `SUC_LISTE_BENI` | Le tre liste assegnabili: immobili, beni mobili, altri beni |
| `SUC_TIPI_IMMOBILE` / `SUC_TIPI_MOBILE` / `SUC_TIPI_VALORE` | Tipologie dei beni; per i mobili registrati anche `esente`, `registro` e `kwStima` |
| `SUC_RAPPORTI` | Rapporto con il defunto degli altri eredi → classe fiscale |
| `SUC_PRODOTTI` | Polizza, temporanea caso morte, previdenza |
| `SUC_DESIGNAZIONI` | Nominativi, eredi legittimi, eredi testamentari |
| `SUC_OPZIONI` | Voci facoltative aggiungibili con «+» |
| `SUC_LIMITI` | I sei limiti mostrati in dashboard |

**Funzioni chiave**

| Funzione | Ruolo |
|---|---|
| `sucQuoteLegge()` | Quote della successione legittima, per gruppo e per erede |
| `sucQuoteRiservate()` | Quote di legittima riservate e quota disponibile |
| `sucAsse()` / `sucMassa()` | Patrimonio, passività, beni assegnati (legati) e resto |
| `sucMinimi()` | Minimo assegnabile a ciascuno sul resto, al netto dei beni ricevuti |
| `sucLimitiQuote()` | Minimo e massimo di una singola quota, con i nomi di chi blocca |
| `sucQuotaAnteprima()` | Messaggio arancione/rosso mentre si scrive |
| `sucQuotaConfermaCalc()` | Riequilibrio proporzionale delle quote alla conferma |
| `sucQuoteEffettive()` | Quote effettive: beni assegnati + quota del resto |
| `sucRipartoFuori()` | Ripartizione di polizze e previdenza fra i beneficiari |
| `sucVoltura()` | IPT o imposta di trascrizione del singolo veicolo |
| `sucCalcola()` | Motore: quote, imposte, immobili, veicoli, legittima, fuori successione, avvisi |
| `sucConsigli()` | I consigli della scheda «Come sistemare» |
| `sucAggiorna()` | Ridisegna tutta la dashboard |
| `sucNormalizzaStato()` | Rilegge i salvataggi, anche in formato precedente |

**Se cambiano le aliquote**: si modificano solo `SUC_CLASSI`, le costanti delle imposte
immobiliari e `SUC_IPT` / `SUC_VOLTURA_FISSA`. Il resto del calcolo si adegua da sé.

**Salvataggi**: stanno in `localStorage`, chiave `simfin_db`, insieme a quelli degli altri
simulatori. `sucNormalizzaStato()` gestisce anche i salvataggi creati con versioni
precedenti dello strumento (beni mobili e altri beni come importo unico, altri eredi con
la sola classe fiscale, immobili senza assegnatario), quindi restano apribili.
