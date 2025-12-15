// scripts/generate-sitemaps.js
// ESM. Node 18+ (works with "type":"module").
// Generates gzipped chunked sitemaps following the mapping rules provided.
//
// Usage examples:
// node ./scripts/generate-sitemaps.js --baseUrl=https://seo.powermyseo.com
// node ./scripts/generate-sitemaps.js --baseUrl=https://seo.powermyseo.com --locations=src/lib/locationData.ts --services=src/data/services.json --industries=src/data/industries.json --per=40000

import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import process from 'process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const argv = process.argv.slice(2).reduce((acc, cur) => {
  const [k, v] = cur.split('=');
  acc[k.replace(/^--/, '')] = v ?? true;
  return acc;
}, {});

const BASE_URL = (argv.baseUrl || 'https://example.com').replace(/\/+$/, '');
const SRC_DIR = argv.src || path.resolve(process.cwd(), 'src');
const OUT_DIR = argv.out || path.resolve(process.cwd(), 'public', 'sitemaps');
const PER_SITEMAP = Number(argv.per || 40000);
const LASTMOD = new Date().toISOString().slice(0,10);

const LOCATIONS_FILE_ARG = argv.locations;
const SERVICES_FILE_ARG = argv.services;
const INDUSTRIES_FILE_ARG = argv.industries;

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

/* ---------- helpers ---------- */

function xmlEscape(s = '') {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function readTextSafe(p) {
  try { return fs.readFileSync(p, 'utf8'); } catch (e) { return ''; }
}

function slugify(s) {
  return String(s || '')
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')   // remove non-word chars
    .replace(/\s+/g, '-')      // space to dash
    .replace(/-+/g,'-')        // collapse dashes
    .replace(/^-|-$/g,'');     // trim dashes
}

function isLikelySlug(s) {
  return typeof s === 'string' && s.length >= 2 && s.length <= 80;
}

function extractQuotedStrings(text) {
  const regex = /['"`]([^'"`]+?)['"`]/g;
  const out = [];
  let m;
  while ((m = regex.exec(text)) !== null) out.push(m[1].trim());
  return out;
}

function extractSlugProps(text) {
  const regex = /slug\s*[:=]\s*['"`]([^'"`]+?)['"`]/g;
  const out = [];
  let m;
  while ((m = regex.exec(text)) !== null) out.push(m[1].trim());
  return out;
}

function collectFromJsonFile(p) {
  try {
    const obj = JSON.parse(fs.readFileSync(p, 'utf8'));
    if (Array.isArray(obj)) {
      return obj.flatMap(item => {
        if (typeof item === 'string') return [item];
        if (item && typeof item === 'object') {
          return [item.slug || item.id || item.name || item.city || item.label].filter(Boolean);
        }
        return [];
      });
    }
    if (obj && typeof obj === 'object') {
      return Object.values(obj).flatMap(v => (typeof v === 'string' ? [v] : Array.isArray(v) ? v : []));
    }
  } catch (e) {}
  return [];
}

/* scan folder heuristics to find lists */
function scanRepoForStrings(dir) {
  const exts = ['.ts', '.tsx', '.js', '.jsx', '.json'];
  const strings = new Set();
  const slugs = new Set();

  function walk(d) {
    for (const name of fs.readdirSync(d)) {
      const full = path.join(d, name);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) {
        if (name === 'node_modules' || name === '.git') continue;
        walk(full);
        continue;
      }
      const ext = path.extname(name).toLowerCase();
      if (!exts.includes(ext)) continue;

      const pLower = full.toLowerCase();
      const likely = pLower.includes('locat') || pLower.includes('city') || pLower.includes('place') || pLower.includes('service') || pLower.includes('industry') || pLower.includes('data') || pLower.includes('master') || pLower.includes('list');
      if (!likely && ext !== '.json') continue;

      const text = readTextSafe(full);
      if (!text) continue;

      if (ext === '.json') {
        const items = collectFromJsonFile(full);
        for (const it of items) if (isLikelySlug(it)) strings.add(slugify(it));
        continue;
      }

      const sprops = extractSlugProps(text);
      for (const s of sprops) if (isLikelySlug(s)) slugs.add(slugify(s));

      const quoted = extractQuotedStrings(text);
      for (const q of quoted) {
        if (isLikelySlug(q)) strings.add(slugify(q));
      }
    }
  }

  walk(dir);
  return Array.from(new Set([...slugs, ...strings]));
}

/* load list from explicit path */
function loadListFromPath(p) {
  if (!p) return [];
  const abs = path.isAbsolute(p) ? p : path.resolve(process.cwd(), p);
  if (!fs.existsSync(abs)) {
    console.warn('File not found:', abs);
    return [];
  }
  if (abs.endsWith('.json')) return collectFromJsonFile(abs).map(slugify).filter(Boolean);
  const text = readTextSafe(abs);
  const sprops = extractSlugProps(text);
  if (sprops.length) return sprops.map(slugify).filter(Boolean);
  const quoted = extractQuotedStrings(text).filter(isLikelySlug).map(slugify).filter(Boolean);
  if (quoted.length) return quoted;
  return [];
}

/* ---------- collect source lists ---------- */

let locations = [];
let services = [];
let industries = [];

if (LOCATIONS_FILE_ARG) locations = loadListFromPath(LOCATIONS_FILE_ARG);
else locations = scanRepoForStrings(SRC_DIR);

if (SERVICES_FILE_ARG) services = loadListFromPath(SERVICES_FILE_ARG);
else {
  // try common paths first
  const candidate = path.resolve(process.cwd(), 'src', 'lib', 'services.ts');
  services = fs.existsSync(candidate) ? loadListFromPath(candidate) : scanRepoForStrings(SRC_DIR).slice(0, 10000);
}

if (INDUSTRIES_FILE_ARG) industries = loadListFromPath(INDUSTRIES_FILE_ARG);
else {
  const candidate = path.resolve(process.cwd(), 'src', 'lib', 'industries.ts');
  industries = fs.existsSync(candidate) ? loadListFromPath(candidate) : scanRepoForStrings(SRC_DIR).slice(0, 10000);
}

// dedupe & validate
locations = Array.from(new Set(locations)).filter(Boolean);
services = Array.from(new Set(services)).filter(Boolean);
industries = Array.from(new Set(industries)).filter(Boolean);

// require locations (critical)
if (locations.length === 0) {
  console.error('No locations found. Provide --locations=path/to/file or ensure locationData exists in src.');
  process.exit(1);
}

// fallback services if none found
if (services.length === 0) {
  console.warn('No services found. Using fallback service list.');
  services = ['seo','ppc','web-design','local-seo','content-marketing','social-media','devops','cloud-services'];
}

console.log(`Locations: ${locations.length} items`);
console.log(`Services: ${services.length} items`);
console.log(`Industries: ${industries.length} items`);

/* ---------- URL patterns per mapping ---------- */
/*
for services:
  https://{{domain}}/service/{{service_name}}

for locations:
  https://{{domain}}/location/{{location_name}}

for Location + service:
  https://{{domain}}/location/{{location_name}}/{{service_name}}

for Industries:
  https://{{domain}}/industry/{{industry_name}

for Industries + location:
  https://{{domain}}/location/{{location_name}}/industry/{{industry_name}

for Industry + service + location:
  https://{{domain}}/{{service_name}}-for-{{industry_name}}-in-{{location_name}}

for Blog:
1) location + service + industry:
  https://{{domain}}/blog/why-seo-focus-best-{{service_name}}-{{industry_name}}-{{location_name}}

2) service + Location:
  https://{{domain}}/blog/why-seo-focus-best-{{service_name}}-{{location_name}}

3) service:
  https://{{domain}}/blog/why-seo-focus-best-{{service_name}}
*/

function* urlGenerator() {
  // 1) Services page single
  for (const svc of services) {
    yield `${BASE_URL}/service/${encodeURIComponent(svc)}`;
  }

  // 2) Locations page single
  for (const loc of locations) {
    yield `${BASE_URL}/location/${encodeURIComponent(loc)}`;
  }

  // 3) Location + service: /location/{location}/{service}
  for (const loc of locations) {
    for (const svc of services) {
      yield `${BASE_URL}/location/${encodeURIComponent(loc)}/${encodeURIComponent(svc)}`;
    }
  }

  // 4) Industries single
  for (const ind of industries) {
    yield `${BASE_URL}/industry/${encodeURIComponent(ind)}`;
  }

  // 5) Industry + location: /location/{location}/industry/{industry}
  for (const loc of locations) {
    for (const ind of industries) {
      yield `${BASE_URL}/location/${encodeURIComponent(loc)}/industry/${encodeURIComponent(ind)}`;
    }
  }

  // 6) Industry + service + location: /{service}-for-{industry}-in-{location}
  for (const svc of services) {
    for (const ind of industries) {
      for (const loc of locations) {
        // use slugified parts in this special combined pattern
        const s = slugify(svc);
        const i = slugify(ind);
        const l = slugify(loc);
        yield `${BASE_URL}/${encodeURIComponent(s)}-for-${encodeURIComponent(i)}-in-${encodeURIComponent(l)}`;
      }
    }
  }

  // 7) Blogs:
  // 7.1 location + service + industry:
  for (const svc of services) {
    for (const ind of industries) {
      for (const loc of locations) {
        const s = slugify(svc);
        const i = slugify(ind);
        const l = slugify(loc);
        yield `${BASE_URL}/blog/why-seo-focus-best-${encodeURIComponent(s)}-${encodeURIComponent(i)}-${encodeURIComponent(l)}`;
      }
    }
  }

  // 7.2 service + location:
  for (const svc of services) {
    for (const loc of locations) {
      const s = slugify(svc);
      const l = slugify(loc);
      yield `${BASE_URL}/blog/why-seo-focus-best-${encodeURIComponent(s)}-${encodeURIComponent(l)}`;
    }
  }

  // 7.3 service only
  for (const svc of services) {
    const s = slugify(svc);
    yield `${BASE_URL}/blog/why-seo-focus-best-${encodeURIComponent(s)}`;
  }

  // add homepage/static optionally
  const staticRoutes = ['/','/about','/contact','/blog'];
  for (const r of staticRoutes) yield `${BASE_URL}${r}`;
}

/* ---------- write sitemaps (streaming gzipped, chunked) ---------- */

async function writeSitemaps(iter) {
  let fileIndex = 1;
  let urlsInCurrent = 0;
  let totalUrls = 0;
  const sitemapFiles = [];

  const createWriter = (idx) => {
    const filename = `sitemap-${String(idx).padStart(4,'0')}.xml.gz`;
    const full = path.join(OUT_DIR, filename);
    const gzip = zlib.createGzip({ level: 6 });
    const out = fs.createWriteStream(full);
    gzip.pipe(out);
    gzip.write('<?xml version="1.0" encoding="UTF-8"?>\n');
    gzip.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n');
    return { gzip, filename, close: () => { gzip.write('</urlset>\n'); gzip.end(); } };
  };

  let writer = createWriter(fileIndex);

  for (const u of iter) {
    // write entry
    const entry = `  <url>\n    <loc>${xmlEscape(u)}</loc>\n    <lastmod>${LASTMOD}</lastmod>\n  </url>\n`;
    writer.gzip.write(entry);
    urlsInCurrent++;
    totalUrls++;

    if (urlsInCurrent >= PER_SITEMAP) {
      writer.close();
      sitemapFiles.push(writer.filename);
      fileIndex++;
      urlsInCurrent = 0;
      writer = createWriter(fileIndex);
    }
    if (totalUrls % 100000 === 0) console.log(`Processed ${totalUrls} URLs...`);
  }

  // close last writer
  writer.close();
  sitemapFiles.push(writer.filename);

  // sitemap-index (uncompressed)
  const indexPath = path.join(OUT_DIR, 'sitemap-index.xml');
  const now = new Date().toISOString();
  let indexXml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  indexXml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  for (const f of sitemapFiles) {
    indexXml += `  <sitemap>\n    <loc>${BASE_URL}/sitemaps/${f}</loc>\n    <lastmod>${now}</lastmod>\n  </sitemap>\n`;
  }
  indexXml += '</sitemapindex>\n';
  fs.writeFileSync(indexPath, indexXml, 'utf8');

  console.log(`Wrote ${sitemapFiles.length} sitemap files with ${totalUrls} URLs`);
  return { sitemapFiles, indexPath };
}

/* ---------- run ---------- */

(async () => {
  try {
    const iter = urlGenerator();
    await writeSitemaps(iter);
    console.log('Sitemap generation complete.');
    console.log(`Add to robots.txt: Sitemap: ${BASE_URL}/sitemap-index.xml`);
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
})();
