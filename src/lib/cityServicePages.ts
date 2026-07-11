import fs from 'fs';
import path from 'path';
import { parseCsv } from './csv';
import { getCity } from './masterCities';
import { services } from './data';

export interface CityServicePageRow {
    citySlug: string;
    serviceSlug: string;
    metaTitle?: string;
    metaDescription?: string;
    intro?: string;
}

const CSV_PATH = path.join(process.cwd(), 'data', 'city-service-pages.csv');

let cache: CityServicePageRow[] | null = null;

/**
 * Loads the /location/[city]/[service] page list from data/city-service-pages.csv.
 * This CSV is the single source of truth for which city+service combinations get
 * built as static pages, so new pages can be added/removed by editing a spreadsheet
 * instead of code. Rows referencing an unknown city or service are skipped with a
 * build-time warning rather than breaking the build.
 */
export function getCityServicePages(): CityServicePageRow[] {
    if (cache) return cache;

    const raw = fs.readFileSync(CSV_PATH, 'utf8');
    const rows = parseCsv(raw);

    const seen = new Set<string>();
    const valid: CityServicePageRow[] = [];

    for (const row of rows) {
        const citySlug = row.city_slug;
        const serviceSlug = row.service_slug;

        if (!citySlug || !serviceSlug) continue;

        if (!getCity(citySlug)) {
            console.warn(`[city-service-pages.csv] Unknown city_slug "${citySlug}" - skipping row.`);
            continue;
        }

        if (!services.some(s => s.slug === serviceSlug)) {
            console.warn(`[city-service-pages.csv] Unknown service_slug "${serviceSlug}" - skipping row.`);
            continue;
        }

        const key = `${citySlug}/${serviceSlug}`;
        if (seen.has(key)) {
            console.warn(`[city-service-pages.csv] Duplicate row for "${key}" - keeping first occurrence.`);
            continue;
        }
        seen.add(key);

        valid.push({
            citySlug,
            serviceSlug,
            metaTitle: row.meta_title || undefined,
            metaDescription: row.meta_description || undefined,
            intro: row.intro || undefined,
        });
    }

    cache = valid;
    return valid;
}

export function getCityServicePage(citySlug: string, serviceSlug: string): CityServicePageRow | undefined {
    return getCityServicePages().find(
        row => row.citySlug === citySlug && row.serviceSlug === serviceSlug
    );
}
