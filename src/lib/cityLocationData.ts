import { getCityServicePages } from './cityServicePages';
import { getCity } from './masterCities';
import { allAustralianCities, Location } from './locationData';

const richCityBySlug = new Map<string, Location>(
    allAustralianCities.map(city => [city.slug, city])
);

/**
 * Unique city slugs referenced by data/city-service-pages.csv. Used to build
 * /location/[city] hub pages so they match whatever /location/[city]/[service]
 * pages actually get built, instead of an unrelated alphabetical slice.
 */
export function getCityPageSlugs(): string[] {
    const slugs = new Set<string>();
    for (const row of getCityServicePages()) {
        slugs.add(row.citySlug);
    }
    return Array.from(slugs);
}

/**
 * Real location data (state, description, image, population) for a city, when we have it.
 * Falls back to a generic placeholder for the handful of CSV cities without a rich entry.
 */
export function getLocationData(citySlug: string): Location | undefined {
    const rich = richCityBySlug.get(citySlug);
    if (rich) return rich;

    const basic = getCity(citySlug);
    if (!basic) return undefined;

    return {
        id: basic.slug,
        name: basic.name,
        slug: basic.slug,
        state: 'Australia',
        country: 'Australia',
        image: '/placeholder.svg',
        description: `SEO services in ${basic.name}`,
    };
}

/**
 * Location data for every city that actually has a generated /location/[city] page.
 * Use this (instead of the full ~14k-entry allAustralianCities list) anywhere that
 * renders city links, so we never link to a city page that doesn't exist.
 */
export function getGeneratedLocations(): Location[] {
    return getCityPageSlugs()
        .map(getLocationData)
        .filter((location): location is Location => Boolean(location));
}
