# Global Technical Documentation Framework

A DITA-based project demonstrating structured authoring, localization, and automated publishing.

## Features
- ✅ Topic-based authoring (concepts, tasks, references)
- 🌐 Localization-ready content
- 🔄 Content reuse via DITA conrefs and keys
- 🤖 GitHub Actions automation

## Setup
1. Clone this repo.
2. Install [Java 17+](https://adoptium.net/).
3. Run builds using the embedded DITA-OT:
   ```powershell
   .\dita-ot\bin\dita --input=path/to/your.dita --format=html5 --output=out

## Project Demo
- **HTML Output**: [View Sample](https://johnbeatty575.github.io/global-tech-docs/) (hosted via GitHub Pages)
- **PDF Output**: [Download Latest Build](./out/pdf/service_manual.pdf)

## Skills Demonstrated
- **XML/DITA**: Topic-based authoring, maps, profiling, reuse.
- **Localization**: Region-aware content via DITA profiling.
- **DevOps**: CI/CD with GitHub Actions, automated publishing.
- **Technical Depth**: API documentation, safety-critical content.

## Setup (For Contributors)
```bash
git clone https://github.com/johnbeatty575/global-tech-docs.git
cd global-tech-docs
./dita-ot/bin/dita --input=maps/service_manual.ditamap --format=html5 --output=out