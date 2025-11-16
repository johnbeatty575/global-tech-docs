# Developer Guide — Local setup and common tasks

Short checklist to get started locally and to perform common operations.

Prerequisites
- Java 17+ (Temurin recommended). Ensure `java -version` reports 17 or higher.
- Node.js 18+ for developer utilities (only required to run the OpenAPI→DITA generator or local pa11y install).

Clone and initial build
```bash
git clone https://github.com/johnbeatty575/global-tech-docs.git
cd global-tech-docs
```

Run a quick validation of the map and topics:
```bash
./dita-ot/bin/dita --validate --input=maps/service_manual.ditamap
```

Build HTML and PDF outputs locally
```bash
./dita-ot/bin/dita --input=maps/service_manual.ditamap --format=html5 --output=out/html5
./dita-ot/bin/dita --input=maps/service_manual.ditamap --format=pdf --output=out/pdf
```

Preview HTML locally
```bash
# Serve the generated HTML (install http-server if needed)
npm install -g http-server
http-server ./out/html5 -p 8000
# then open http://localhost:8000 in a browser
```

Run accessibility checks locally (pa11y)
```bash
npm install -g pa11y
pa11y http://localhost:8000/index.html --reporter html > pa11y-report.html
```

Generate API topics from OpenAPI
```bash
cd tools
npm install
# If openapi.yaml is at repo root use:
npm run generate-dita
# Or pass a path: npm run generate-dita ../path/to/openapi.yaml

# After generation you will see files in:
# topics/examples/generated_openapi/ and a map at maps/generated_api.ditamap

# Add and commit generated topics if you want them versioned, then run a build
```

Contributing and PRs
- Make small changes, run local validation, and attach HTML/PDF artifacts/screenshots to the PR when relevant.
- Assign at least one technical writer and one engineer as reviewers for doc changes that ship with code.

Troubleshooting
- If `dita` isn't executable on Unix: `chmod +x ./dita-ot/bin/dita`.
- If DITA reports missing plugin errors, run `./dita-ot/bin/dita --install` or check `dita-ot/plugins/`.
