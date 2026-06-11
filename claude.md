# CLAUDE.md — RentePerMaand.nl Masterplan

## Project overzicht

**Doel:** Evergreen SEO-website met gratis financiële calculators gericht op de Nederlandse markt. Inkomsten via advertenties (Google AdSense). Volledig client-side, geen backend nodig.

**Domein:** rentepermaand.nl  
**Repo:** https://github.com/VincentBeee/rentepermaand  
**Hosting:** GitHub Pages  
**Stack:** Puur statisch HTML/CSS/JS (geen framework) + Chart.js via CDN

---

## Technische architectuur

### Bestandsstructuur
```
/
├── index.html                      # Homepage — tooloverzicht
├── annuiteitencalculator.html      # ✅ Gereed
├── extra-aflossen.html             # ✅ Gereed
├── spaardoel-calculator.html       # ✅ Gereed
├── compound-interest.html          # ✅ Gereed
├── inflatie-calculator.html        # ✅ Gereed
├── leningvergelijker.html          # ✅ Gereed
├── rente-omrekenaar.html           # ✅ Gereed
├── hypotheek-verloop.html          # 🔲 Gepland (Fase 4)
├── schenking-calculator.html       # 🔲 Gepland (Fase 4)
├── lening-amortisatie.html         # 🔲 Gepland (Fase 4)
├── css/
│   └── style.css                   # Gedeeld design systeem
├── sitemap.xml                     # ✅ Gereed (7 URLs)
├── robots.txt                      # ✅ Gereed
└── CLAUDE.md                       # Dit bestand
```

### Design systeem (style.css)
- **Kleuren:** Navy `#0F1F3D`, Gold `#E8A020`, Cream `#F7F6F2`
- **Fonts:** Playfair Display (display/h1/h2) + DM Sans (body/UI)
- **Componenten:** `.calc-card`, `.results-panel`, `.split-bar`, `.field-group`, `.site-header`, `.site-footer`, `.sidebar-card`
- **Altijd** `style.css` hergebruiken, nooit inline stijlen in nieuwe tools

### Chart.js
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js" defer></script>
```
Altijd dezelfde versie gebruiken.

---

## SEO-strategie

### Per pagina verplicht
```html
<meta charset="UTF-8">
<!-- Google tag (gtag.js) — altijd direct na <meta charset>, vóór viewport -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-F179VKF42F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-F179VKF42F');
</script>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>[Tool naam] — [Keyword] | RentePerMaand.nl</title>
<meta name="description" content="...max 155 tekens...">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://rentepermaand.nl/[slug]">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:url" content="https://rentepermaand.nl/[slug]">
<meta property="og:locale" content="nl_NL">
```

**Google Analytics tracking ID:** `G-F179VKF42F`

### Schema.org markup (altijd twee blokken)
1. `SoftwareApplication` met `"price": "0"` en `"priceCurrency": "EUR"`
2. `FAQPage` met minimaal 3 relevante vragen

### SEO content onderaan elke tool
- Minimaal 600 woorden
- H2-structuur: Wat is X? / Hoe werkt de berekening? / Vergelijking / Veelgestelde vragen
- Interne links naar gerelateerde tools
- Formulebox met wiskundige formule (zie `annuiteitencalculator.html` als voorbeeld)

### Doelzoekwoorden per tool
| Tool | Primair keyword | Secundair |
|------|----------------|-----------|
| Annuïteiten Calculator | annuïteitencalculator | maandlast berekenen hypotheek |
| Extra Aflossen | extra aflossen hypotheek berekenen | rentebesparing aflossen |
| Spaardoel Calculator | spaardoel calculator | hoeveel sparen per maand |
| Compound Interest | samengestelde rente berekenen | rente op rente calculator |
| Inflatie Calculator | inflatie calculator vermogen | koopkracht berekenen |
| Leningvergelijker | leningen vergelijken | goedkoopste lening berekenen |
| Rente-omrekenaar | nominale rente effectieve rente | rente omrekenen |
| Hypotheek Verloop | hypotheek verloop grafiek | hypotheek aflossingsschema |
| Schenking Calculator | schenking calculator | vermogensoverdracht berekenen |
| Amortisatie Tool | amortisatie schema | aflossingstabel exporteren |

---

## Tools — Prioriteit & Status

### ✅ Fase 1 — Gereed
1. **Annuïteiten Calculator** (`annuiteitencalculator.html`)
   - Sliders voor leenbedrag/rente/looptijd
   - Gestapeld staafdiagram + restschuld lijn (Chart.js)
   - Uitklapbare amortisatietabel
   - CSV-export

2. **Extra Aflossen Calculator** (`extra-aflossen.html`)
   - Vergelijking zonder/met extra aflossing
   - Groene "Totale besparing" hero
   - Lijndiagram restschuld beide scenario's

### ✅ Fase 2 — Gereed
3. **Spaardoel Calculator** (`spaardoel-calculator.html`)
   - PMT-formule: benodigde maandelijkse inleg berekenen
   - Gestapeld staafdiagram: inleg vs rendement per jaar

4. **Compound Interest Calculator** (`compound-interest.html`)
   - FV-formule: eindvermogen + groeifactor
   - Gestapeld staafdiagram: exponentiële groeicurve

### ✅ Fase 3 — Gereed
5. **Inflatie Calculator** (`inflatie-calculator.html`)
   - Reële koopkracht vs. nominale waarde vs. belegd vermogen
   - Lijndiagram met 3 scenario's

6. **Leningvergelijker** (`leningvergelijker.html`)
   - Twee leningen naast elkaar: maandlast, totale rente, totaal
   - Staafdiagram kostenvergelijking

7. **Rente-omrekenaar** (`rente-omrekenaar.html`)
   - EAR-formule: nominaal → effectief per frequentie
   - Vergelijkingstabel + staafdiagram alle frequenties

### 🔲 Fase 4
8. **Hypotheek-verloop Grafiek** (interactief, meest visueel complex)
9. **Schenking/Erfenis Calculator**
10. **Lening Amortisatie Tool** (uitgebreide versie met meer exportopties)

---

## Template voor nieuwe tool

Gebruik altijd dit patroon bij het bouwen van een nieuwe tool:

```html
<!-- HEAD: title, description, canonical, og-tags, style.css, Chart.js -->
<!-- HEADER: .site-header met nav (active class op huidige pagina) -->
<!-- .page-hero met eyebrow + h1 + beschrijving -->
<!-- .main-wrap (grid: tool links, sidebar rechts) -->
<!--   .calc-card > .calc-header + .calc-body -->
<!--     .field-group per input (label + input-wrap + slider-wrap) -->
<!--     .results-panel (aria-live="polite") -->
<!--     Chart canvas -->
<!--   .sidebar > .sidebar-card (gerelateerde tools + tips) -->
<!-- .seo-content (artikel onderaan) -->
<!-- .site-footer -->
<!-- <script> IIFE met calculate() functie -->
```

### JavaScript patroon
```javascript
(function() {
  'use strict';
  // 1. Sync slider ↔ input paren
  // 2. calculate() functie — herberekent bij elke input
  // 3. buildChart() — vernietigt en herbouwt Chart.js instantie
  // 4. calculate() aanroepen bij init
})();
```

---

## IndexNow — verplicht na elke nieuwe pagina

IndexNow zorgt dat Bing, Yandex en andere deelnemende zoekmachines nieuwe pagina's direct indexeren.

**API key:** `98c0f160d5404e209c2e7e7f11707176`  
**Key-bestand:** `98c0f160d5404e209c2e7e7f11707176.txt` (staat in de root van de repo)

### Stappen na toevoeging van een nieuwe tool

1. **Voeg de URL toe aan `sitemap.xml`**
2. **Voeg de URL toe aan `submit-indexnow.sh`** (in de `urlList`)
3. **Voer het script uit:**

```bash
bash submit-indexnow.sh
```

Een HTTP 200 of 202 response betekent succes. Bij 422 is de URL ongeldig; bij 429 is het rate limit bereikt (wacht een uur).

Voor een enkelvoudige URL zonder het script:
```bash
curl "https://api.indexnow.org/indexnow?url=https://rentepermaand.nl/[slug]&key=98c0f160d5404e209c2e7e7f11707176&keyLocation=https://rentepermaand.nl/98c0f160d5404e209c2e7e7f11707176.txt"
```

---

## Nog te doen (infra)

### sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://rentepermaand.nl/</loc><priority>1.0</priority></url>
  <url><loc>https://rentepermaand.nl/annuiteitencalculator</loc><priority>0.9</priority></url>
  <url><loc>https://rentepermaand.nl/extra-aflossen</loc><priority>0.9</priority></url>
</urlset>
```
*(uitbreiden bij elke nieuwe tool)*

### robots.txt
```
User-agent: *
Allow: /
Sitemap: https://rentepermaand.nl/sitemap.xml
```

### Google Search Console
- Site toevoegen op https://search.google.com/search-console
- Sitemap indienen
- Indexering aanvragen voor beide tools

### Google AdSense
- Account aanvragen zodra site live is en content heeft
- Auto-ads inschakelen (minste gedoe)
- AdSense snippet toevoegen aan `<head>` van alle pagina's

---

## DNS-configuratie (GitHub Pages)

A-records bij domeinregistrar voor `rentepermaand.nl`:
```
Type: A    @    185.199.108.153
Type: A    @    185.199.109.153
Type: A    @    185.199.110.153
Type: A    @    185.199.111.153
```
CNAME voor www:
```
Type: CNAME    www    vincentbeee.github.io
```
GitHub Pages instelling: custom domain `www.rentepermaand.nl`, "Enforce HTTPS" aan.

---

## Kwaliteitsregels

- Alle berekeningen zijn **client-side** — geen API-calls, geen cookies, geen tracking (behalve AdSense/Analytics)
- **Disclaimer** altijd aanwezig in footer: "Alle berekeningen zijn indicatief en dienen niet als financieel advies."
- Elke tool werkt op **mobiel** (grid breekt naar 1 kolom onder 860px)
- `aria-live="polite"` op results-panel voor toegankelijkheid
- `prefers-reduced-motion` wordt gerespecteerd via CSS
- Nooit `update_post_meta` gebruiken (n.v.t. hier, maar gewoonte van andere projecten)