import { MetadataRoute } from 'next';
import { services, industries, blogPosts, caseStudies } from '@/lib/data';
import { masterCities } from '@/lib/masterCities';
import { serviceBlogContents } from '@/lib/service-blog-data';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://cambayindustries.co.in';

// Constants for chunking
const SITEMAP_LIMIT = 45000; // Safe limit below 50k

// Validate slug is a non-empty string
function isValidSlug(slug: unknown): slug is string {
    return typeof slug === 'string' && slug.length > 0 && slug !== 'undefined';
}

// Create sitemap entry with validation
function createSitemapEntry(
    path: string,
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never',
    priority: number
): MetadataRoute.Sitemap[0] {
    if (!path || typeof path !== 'string' || path.includes('undefined')) {
        throw new Error(`Invalid sitemap path: ${path}`);
    }
    return {
        url: `${BASE_URL}${path}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
    };
}

export async function generateSitemaps() {
    const sitemaps = [
        { id: 'main' },
        { id: 'cities' },
    ];

    // Filter valid items first
    const validServices = services.filter(s => isValidSlug(s?.slug));
    const validIndustries = industries.filter(i => isValidSlug(i?.slug));
    const validCities = masterCities.filter(c => isValidSlug(c?.slug));
    const validBlogServices = Object.keys(serviceBlogContents).filter(isValidSlug);

    // City Services chunks
    const cityServicesCount = validCities.length * validServices.length;
    const cityServicesChunks = Math.ceil(cityServicesCount / SITEMAP_LIMIT);
    for (let i = 0; i < cityServicesChunks; i++) {
        sitemaps.push({ id: `city-services-${i}` });
    }

    // City Service Industries chunks
    const cityServiceIndCount = validCities.length * validServices.length * validIndustries.length;
    const cityServiceIndChunks = Math.ceil(cityServiceIndCount / SITEMAP_LIMIT);
    for (let i = 0; i < cityServiceIndChunks; i++) {
        sitemaps.push({ id: `city-service-industries-${i}` });
    }

    // Service Blog Location chunks
    const serviceBlogCount = validCities.length * validBlogServices.length;
    const serviceBlogChunks = Math.ceil(serviceBlogCount / SITEMAP_LIMIT);
    for (let i = 0; i < serviceBlogChunks; i++) {
        sitemaps.push({ id: `service-blogs-location-${i}` });
    }

    return sitemaps;
}

export default async function sitemap({ id }: { id: string }): Promise<MetadataRoute.Sitemap> {
    const validServices = services.filter(s => isValidSlug(s?.slug));
    const validIndustries = industries.filter(i => isValidSlug(i?.slug));
    const validCities = masterCities.filter(c => isValidSlug(c?.slug));
    const validBlogPosts = blogPosts.filter(p => isValidSlug(p?.slug));
    const validCaseStudies = caseStudies.filter(s => isValidSlug(s?.slug));
    const validBlogServices = Object.keys(serviceBlogContents).filter(isValidSlug);

    // 1. Main Pages & Simple Dynamic
    if (id === 'main') {
        const entries: MetadataRoute.Sitemap = [];

        // Static routes
        const staticPaths = [
            '',
            '/about',
            '/services',
            '/industries',
            '/blogs',
            '/case-studies',
            '/contact',
            '/free-consultation',
            '/html-sitemap',
            '/seo-audit',
        ];

        for (const path of staticPaths) {
            entries.push(createSitemapEntry(path, 'weekly', 1.0));
        }

        // Services
        for (const service of validServices) {
            entries.push(createSitemapEntry(`/service/${service.slug}`, 'weekly', 0.9));
        }

        // Industries
        for (const industry of validIndustries) {
            entries.push(createSitemapEntry(`/industries/${industry.slug}`, 'weekly', 0.9));
        }

        // Blog posts
        for (const post of validBlogPosts) {
            entries.push(createSitemapEntry(`/blogs/${post.slug}`, 'monthly', 0.8));
        }

        // Case studies
        for (const study of validCaseStudies) {
            entries.push(createSitemapEntry(`/case-studies/${study.slug}`, 'monthly', 0.8));
        }

        // Service blogs main
        for (const serviceSlug of validBlogServices) {
            entries.push(createSitemapEntry(`/service/${serviceSlug}/blog`, 'weekly', 0.8));
        }

        return entries;
    }

    // 2. Cities
    if (id === 'cities') {
        const entries: MetadataRoute.Sitemap = [];
        for (const city of validCities) {
            entries.push(createSitemapEntry(`/${city.slug}`, 'monthly', 0.6));
        }
        return entries;
    }

    // 3. City Services
    if (id.startsWith('city-services-')) {
        const chunkIndex = parseInt(id.split('-')[2], 10);
        const itemsPerCity = validServices.length;
        const citiesPerChunk = Math.floor(SITEMAP_LIMIT / itemsPerCity);

        const startCityIdx = chunkIndex * citiesPerChunk;
        const endCityIdx = Math.min(startCityIdx + citiesPerChunk, validCities.length);

        const entries: MetadataRoute.Sitemap = [];

        for (let i = startCityIdx; i < endCityIdx; i++) {
            const city = validCities[i];
            for (const service of validServices) {
                entries.push(createSitemapEntry(`/location/${city.slug}/${service.slug}`, 'monthly', 0.5));
            }
        }
        return entries;
    }

    // 4. City Service Industries
    if (id.startsWith('city-service-industries-')) {
        const chunkIndex = parseInt(id.split('-')[3], 10);
        const itemsPerCity = validServices.length * validIndustries.length;
        const citiesPerChunk = Math.floor(SITEMAP_LIMIT / itemsPerCity);

        const startCityIdx = chunkIndex * citiesPerChunk;
        const endCityIdx = Math.min(startCityIdx + citiesPerChunk, validCities.length);

        const entries: MetadataRoute.Sitemap = [];

        for (let i = startCityIdx; i < endCityIdx; i++) {
            const city = validCities[i];
            for (const service of validServices) {
                for (const industry of validIndustries) {
                    entries.push(createSitemapEntry(`/${service.slug}-for-${industry.slug}-in-${city.slug}`, 'monthly', 0.4));
                }
            }
        }
        return entries;
    }

    // 5. Service Blogs Location
    if (id.startsWith('service-blogs-location-')) {
        const chunkIndex = parseInt(id.split('-')[3], 10);
        const itemsPerCity = validBlogServices.length;
        const citiesPerChunk = Math.floor(SITEMAP_LIMIT / itemsPerCity);

        const startCityIdx = chunkIndex * citiesPerChunk;
        const endCityIdx = Math.min(startCityIdx + citiesPerChunk, validCities.length);

        const entries: MetadataRoute.Sitemap = [];

        for (let i = startCityIdx; i < endCityIdx; i++) {
            const city = validCities[i];
            for (const serviceSlug of validBlogServices) {
                entries.push(createSitemapEntry(`/service/${serviceSlug}/blog/${city.slug}`, 'monthly', 0.5));
            }
        }
        return entries;
    }

    return [];
}
