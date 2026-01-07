// Auto-generated from masters/allCities.json
// This file contains all 15,930+ Australian cities

export interface SimpleLocation {
    name: string;
    slug: string;
}

// Helper to convert city name to slug
export function cityToSlug(name: string): string {
    return name.toLowerCase()
        .replace(/['\s(),&]+/g, '-')
        .replace(/--+/g, '-')
        .replace(/^-|-$/g, '');
}

// Import the master cities list
import allCitiesData from '@/../_legacy/masters/allCities.json';

// Generate location objects from master list
const generatedCities: SimpleLocation[] = allCitiesData.cities.map((name: string) => ({
    name,
    slug: cityToSlug(name),
}));

// Manual overrides for missing major cities
const manualCities: SimpleLocation[] = [
    { name: 'Melbourne', slug: 'melbourne' },
    { name: 'Brisbane', slug: 'brisbane' },
    { name: 'Gold Coast', slug: 'gold-coast' },
];

export const masterCities: SimpleLocation[] = [...generatedCities, ...manualCities];

// Create a lookup map for fast access
export const cityBySlug = new Map<string, SimpleLocation>(
    masterCities.map(city => [city.slug, city])
);

// Check if a slug is a valid city
export function isValidCity(slug: string): boolean {
    return cityBySlug.has(slug);
}

// Get city by slug
export function getCity(slug: string): SimpleLocation | undefined {
    return cityBySlug.get(slug);
}
