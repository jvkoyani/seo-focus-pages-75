// Master cities list - pruned to 5 cities for testing

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

// Priority cities list (pruned to 5 for testing)
const priorityCities: SimpleLocation[] = [
    { name: 'Sydney', slug: 'sydney' },
    { name: 'Melbourne', slug: 'melbourne' },
    { name: 'Brisbane', slug: 'brisbane' },
    { name: 'Perth', slug: 'perth' },
    { name: 'Adelaide', slug: 'adelaide' },
];

export const masterCities: SimpleLocation[] = [...priorityCities];

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
