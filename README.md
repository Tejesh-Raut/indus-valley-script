# Indus Valley Script

[![Website](https://img.shields.io/website?label=indus-valley-script&style=for-the-badge&url=https%3A%2F%2FTejesh-Raut.github.io/indus-valley-script)](https://tejesh-raut.github.io/indus-valley-script/)

Interactive explorer for the undeciphered Indus (Harappan) script. This repository hosts a browser-based app for browsing inscriptions, exploring sign glyphs, and analyzing the corpus through charts and maps.

## What’s in this project

The app is a static single-page website with no build step required. It includes:

- a searchable inscriptions view for browsing texts and metadata
- a sign browser with SVG and ICIT glyph options
- modal detail views for individual texts and signs
- analysis views for frequency, positions, sequences, similarity, maps, and site-level summaries
- a light/dark theme toggle

## Project structure

- index.html — page layout, views, and UI structure
- app.js — data loading, filtering, rendering, and interactive behavior
- styles.css — visual styling and layout
- data/ — corpus data and metadata files
  - texts.js — inscription records
  - signs.js — sign catalog
  - icit.js — ICIT reference data
  - geo.js — geographic metadata
  - sites_geo.js — site location data
- signs/ — SVG glyph images for signs
- icit/ — ICIT reference images in full and small sizes
- build/ — static deployment assets

## Running locally

Because this is a static site, you can view it directly in a browser or serve the folder locally.

### Option 1: open directly

Open index.html in your browser.

### Option 2: serve locally

From the repository root, run:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Data and content notes

The app is driven by the bundled data files in the data/ directory. The corpus includes a large set of inscription records and sign data, and the interface renders this content client-side in the browser.

## Deployment

This project is intended for static hosting, such as GitHub Pages. The live site is available at https://tejesh-raut.github.io/indus-valley-script/.
