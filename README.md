# Global Technical Documentation Framework

A DITA-based project demonstrating structured authoring, localization, and automated publishing.

## Features
- ✅ Topic-based authoring (concepts, tasks, references)
- 🌐 Localization-ready content
- 🔄 Content reuse via DITA conrefs and keys
- 🤖 GitHub Actions automation

## Setup
1. Clone this repo.
2. Install [Java 11+](https://adoptium.net/).
3. Run builds using the embedded DITA-OT:
   ```powershell
   .\dita-ot\bin\dita --input=path/to/your.dita --format=html5 --output=out