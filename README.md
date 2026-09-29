# SAL: A Graph on Iceberg

Slides for a ~12-minute talk on [SAL](https://cgs-earth.github.io/sal/) (the Semantic
Accessibility Layer) at the [2026 CGA Conference](https://gis.harvard.edu/call-papers-2026-cga-conference)
— *Celebrating Geographic Analysis: Past, Present & Future* — Harvard Center for
Geographic Analysis, Oct 2–3, 2026.

Built with [Slidev](https://sli.dev).

## Running the deck

- `npm install`
- `npm run dev`
- visit <http://localhost:3030>

`npm run build` produces a static build in `dist/`; `npm run export` exports to PDF/PNG.

A `pre-push` git hook (`.githooks/`, wired up automatically by `npm install` via the
`prepare` script) re-runs the export before every push, so `slides-export.pdf`
(gitignored, local-only) stays current. The push aborts if the export fails.

## Structure

1. Why graphs are useful for GIS
2. Historical issues with graph databases (vendor lock-in, RDF tooling that didn't scale, engine/store coupling)
3. How Apache Iceberg solves this (open format, time travel, native geo, many engines, easy deployment)
4. How SAL builds a graph on Iceberg — the triples schema and querying it via DuckDB
5. Sample SPARQL queries using GeoSPARQL
6. Future takeaways

Branding follows CGS guidelines (`style.css`); brand assets live in `public/`.
