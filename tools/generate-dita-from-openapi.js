#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const repoRoot = path.resolve(__dirname, '..');
// Allow overriding the OpenAPI path via CLI arg or env var. Fall back to repo root,
// then sibling WeatherBand-API-Docs repo if present (common local layout).
const cliPath = process.argv[2];
const envPath = process.env.OPENAPI_PATH;
const candidatePaths = [];
if (cliPath) candidatePaths.push(path.resolve(cliPath));
if (envPath) candidatePaths.push(path.resolve(envPath));
candidatePaths.push(path.join(repoRoot, 'openapi.yaml'));
candidatePaths.push(path.join(repoRoot, '..', 'WeatherBand-API-Docs', 'openapi.yaml'));

let openapiPath = null;
for (const p of candidatePaths) {
  if (fs.existsSync(p)) {
    openapiPath = p;
    break;
  }
}
const outDir = path.join(repoRoot, 'topics', 'examples', 'generated_openapi');
const mapsDir = path.join(repoRoot, 'maps');

if (!openapiPath) {
  console.error('openapi.yaml not found. Tried the following paths:');
  for (const p of candidatePaths) console.error('  -', p);
  console.error('\nProvide the path as the first argument or set OPENAPI_PATH env var.');
  process.exit(1);
}

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const doc = yaml.load(fs.readFileSync(openapiPath, 'utf8'));
const paths = doc.paths || {};
const created = [];

for (const [p, methods] of Object.entries(paths)) {
  for (const [method, op] of Object.entries(methods)) {
    const id = `api_${method}_${p.replace(/[^a-z0-9]/gi, '_').replace(/^_+|_+$/g, '')}`;
    const fname = `${id}.dita`;
    const filePath = path.join(outDir, fname);
    const title = `${method.toUpperCase()} ${p}`;
    const description = op.description || (op.summary || 'API endpoint');
    const params = op.parameters || [];

    let paramTable = '';
    if (params.length) {
      paramTable += '<table>\n<tr><th>Name</th><th>In</th><th>Required</th><th>Description</th></tr>\n';
      for (const param of params) {
        paramTable += `<tr><td>${param.name}</td><td>${param.in}</td><td>${param.required? 'Yes':'No'}</td><td>${param.description||''}</td></tr>\n`;
      }
      paramTable += '</table>\n';
    }

    const sampleResponse = (op.responses && op.responses['200'] && op.responses['200'].content && op.responses['200'].content['application/json'] && op.responses['200'].content['application/json'].example) || null;
    const responseBlock = sampleResponse ? `<codeblock outputclass="json">${JSON.stringify(sampleResponse, null, 2)}</codeblock>` : '';

    const content = `<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE reference PUBLIC "-//OASIS//DTD DITA Reference//EN" "reference.dtd">\n<reference id="${id}">\n  <title>${title}</title>\n  <refbody>\n    <section>\n      <p>${description}</p>\n    </section>\n    <section>\n      <title>Parameters</title>\n      ${paramTable}\n    </section>\n    <section>\n      <title>Responses</title>\n      ${responseBlock}\n    </section>\n  </refbody>\n</reference>\n`;

    fs.writeFileSync(filePath, content, 'utf8');
    created.push({ id, file: `topics/examples/generated_openapi/${fname}` });
  }
}

// Create generated map
const genMapPath = path.join(mapsDir, 'generated_api.ditamap');
let mapContent = `<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE map PUBLIC "-//OASIS//DTD DITA Map//EN" "map.dtd">\n<map id="generated_api">\n  <title>Generated API Reference</title>\n`;
for (const c of created) {
  mapContent += `  <topicref href="../${c.file}"/>\n`;
}
mapContent += '</map>\n';
fs.writeFileSync(genMapPath, mapContent, 'utf8');

console.log('Generated', created.length, 'DITA topics in', outDir);
console.log('Generated map at', genMapPath);
