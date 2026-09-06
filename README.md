# Financial Simulators

**Four planning simulators a financial advisor runs in front of a client — on an iPad, offline, with no laptop involved.**

<!-- SCREENSHOT: accumulation simulator on iPad -->

## Why it exists

An advisor sits across a table from a family and gets asked concrete questions. *If we put aside 300 a month, what will our daughter have when she starts university?* *If we retire at 64 instead of 67, how long does the capital last?* *What actually happens to the estate if I die first?*

Those answers used to be worked out afterwards, back at the office, and emailed the following week — by which point the conversation had moved on. These simulators answer them at the table, while the question is still live.

## The four

| | |
|---|---|
| **Accumulation** | Contribution plans against a target — funding a child's education, building capital over a horizon. Regular contributions, lump sums, expected return, inflation-adjusted results. |
| **Decumulation** | The other direction: drawing an income from capital, and how long it survives at a given withdrawal rate. |
| **Mortgage** | Instalments, total interest, amortisation over the life of the loan. |
| **Succession** | What happens to an estate on death, given the holdings and the family structure. |

Simulations can be saved, reopened and compared side by side, so a client sees two futures next to each other rather than one at a time.

<!-- SCREENSHOT: comparison of two saved simulations -->

## How it is built

**One HTML file, no dependencies.** No framework, no bundler, nothing loaded from a CDN, no build step. It opens on any device that has a browser and keeps working with no network. That is not minimalism for its own sake: the advisor's machine is locked down and the client's kitchen table has no reliable Wi-Fi.

**Saved work stays on the device.** Simulations live in `localStorage`. Nothing is uploaded, which matters when the inputs are a real family's income and assets.

**Market data without leaking the key.** Live instrument data comes from a paid provider, and a browser cannot call it directly without exposing the API key to anyone who opens the network tab. `worker-proxy.js` is a Cloudflare Worker that sits in between:

- the API key lives in a Worker secret — never in the repository, never in the client
- only `GET` requests are forwarded, and only to a closed allow-list of read-only paths
- `/export` is blocked outright, because it burns the monthly data allowance
- CORS answers only this project's own origins, so the proxy cannot be used as free API access by anyone who finds the URL
- the instrument catalogue and the ISIN lookup are cached in memory with a TTL, to stay well inside the quota

## Running it

Open `index.html`. That is the whole procedure.

To deploy the price proxy, publish `worker-proxy.js` as a Cloudflare Worker and set the `LSE_API_KEYY` secret. Without it the simulators still work — only live instrument lookup is unavailable.

## Status

In use. Built alongside a [wealth advisor platform](https://github.com/mattsecurity/advisor-platform) that shares the same modelling approach.
