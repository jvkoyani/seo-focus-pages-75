import { MetadataRoute } from 'next';
import { services, industries, blogPosts, caseStudies } from '@/lib/data';
import { masterCities } from '@/lib/masterCities';
import { serviceBlogContents } from '@/lib/service-blog-data';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://cambayindustries.co.in';
const SITEMAP_LIMIT = 45000; // Safe limit below 50k

export const dynamic = 'force-static';

function isValidSlug(slug: unknown): slug is string {
    return typeof slug === 'string' && slug.length > 0 && slug !== 'undefined';
}

export async function generateSitemaps() {
    const validServices = services.filter(s => isValidSlug(s?.slug));
    const validIndustries = industries.filter(i => isValidSlug(i?.slug));
    const validCities = masterCities.filter(c => isValidSlug(c?.slug));
    const validBlogServices = Object.keys(serviceBlogContents).filter(isValidSlug);

    const sitemaps = [{ id: 'main' }];

    // City Services chunks: cities * services
    const cityServicesCount = validCities.length * validServices.length;
    const cityServicesChunks = Math.ceil(cityServicesCount / SITEMAP_LIMIT);
    for (let i = 0; i < cityServicesChunks; i++) {
        sitemaps.push({ id: `city-services-${i}` });
    }

    // City Service Industries chunks: cities * services * industries
    const cityServiceIndCount = validCities.length * validServices.length * validIndustries.length;
    const cityServiceIndChunks = Math.ceil(cityServiceIndCount / SITEMAP_LIMIT);
    for (let i = 0; i < cityServiceIndChunks; i++) {
        sitemaps.push({ id: `city-service-ind-${i}` });
    }

    // Service Blogs Location chunks: cities * blog services
    const serviceBlogCount = validCities.length * validBlogServices.length;
    const serviceBlogChunks = Math.ceil(serviceBlogCount / SITEMAP_LIMIT);
    for (let i = 0; i < serviceBlogChunks; i++) {
        sitemaps.push({ id: `service-blogs-${i}` });
    }

    return sitemaps;
}

export default async function sitemap({ id }: { id: string }): Promise<MetadataRoute.Sitemap> {
    const siteUrl = typeof BASE_URL === 'string' && BASE_URL.trim() ? BASE_URL : 'https://cambayindustries.co.in';

    // Filter and validate all data sources
    const validServices = services.filter(s => isValidSlug(s?.slug));
    const validIndustries = industries.filter(i => isValidSlug(i?.slug));
    const validBlogPosts = blogPosts.filter(p => isValidSlug(p?.slug));
    const validCaseStudies = caseStudies.filter(s => isValidSlug(s?.slug));
    const validCities = masterCities.filter(c => isValidSlug(c?.slug));
    const validBlogServices = Object.keys(serviceBlogContents).filter(isValidSlug);

    // 1. Main page + static pages + dynamic singles
    if (id === 'main') {
        const entries: MetadataRoute.Sitemap = [];

        // Static pages
        const staticPages = [
            { url: '', freq: 'weekly' as const, priority: 1.0 },
            { url: '/about', freq: 'monthly' as const, priority: 0.8 },
            { url: '/services', freq: 'weekly' as const, priority: 0.9 },
            { url: '/industries', freq: 'weekly' as const, priority: 0.9 },
            { url: '/blogs', freq: 'weekly' as const, priority: 0.8 },
            { url: '/case-studies', freq: 'monthly' as const, priority: 0.8 },
            { url: '/contact', freq: 'monthly' as const, priority: 0.8 },
            { url: '/free-consultation', freq: 'monthly' as const, priority: 0.7 },
            { url: '/seo-audit', freq: 'monthly' as const, priority: 0.7 },
            { url: '/html-sitemap', freq: 'monthly' as const, priority: 0.6 },
        ];

        for (const page of staticPages) {
            entries.push({
                url: `${siteUrl}${page.url}`,
                lastModified: new Date(),
                changeFrequency: page.freq,
                priority: page.priority,
            });
        }

        // Services
        for (const service of validServices) {
            entries.push({
                url: `${siteUrl}/service/${service.slug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.9,
            });
        }

        // Industries
        for (const industry of validIndustries) {
            entries.push({
                url: `${siteUrl}/industries/${industry.slug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.9,
            });
        }

        // Blog posts
        for (const post of validBlogPosts) {
            entries.push({
                url: `${siteUrl}/blogs/${post.slug}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.8,
            });
        }

        // Case studies
        for (const study of validCaseStudies) {
            entries.push({
                url: `${siteUrl}/case-studies/${study.slug}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.8,
            });
        }

        // Service blogs (main pages)
        for (const serviceSlug of validBlogServices) {
            entries.push({
                url: `${siteUrl}/service/${serviceSlug}/blog`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.8,
            });
        }

        return entries;
    }

    // 2. City Services
    if (id.startsWith('city-services-')) {
        const chunkIndex = parseInt(id.split('-')[2], 10);
        const itemsPerCity = validServices.length;
        const citiesPerChunk = Math.floor(SITEMAP_LIMIT / itemsPerCity);

        const startIdx = chunkIndex * citiesPerChunk;
        const endIdx = Math.min(startIdx + citiesPerChunk, validCities.length);

        const entries: MetadataRoute.Sitemap = [];

        for (let i = startIdx; i < endIdx; i++) {
            const city = validCities[i];
            for (const service of validServices) {
                entries.push({
                    url: `${siteUrl}/location/${city.slug}/${service.slug}`,
                    lastModified: new Date(),
                    changeFrequency: 'monthly',
                    priority: 0.5,
                });
            }
        }

        return entries;
    }

    // 3. City Service Industries
    if (id.startsWith('city-service-ind-')) {
        const chunkIndex = parseInt(id.split('-')[3], 10);
        const itemsPerCity = validServices.length * validIndustries.length;
        const citiesPerChunk = Math.floor(SITEMAP_LIMIT / itemsPerCity);

        const startIdx = chunkIndex * citiesPerChunk;
        const endIdx = Math.min(startIdx + citiesPerChunk, validCities.length);

        const entries: MetadataRoute.Sitemap = [];

        for (let i = startIdx; i < endIdx; i++) {
            const city = validCities[i];
            for (const service of validServices) {
                for (const industry of validIndustries) {
                    entries.push({
                        url: `${siteUrl}/${service.slug}-for-${industry.slug}-in-${city.slug}`,
                        lastModified: new Date(),
                        changeFrequency: 'monthly',
                        priority: 0.4,
                    });
                }
            }
        }

        return entries;
    }

    // 4. Service Blogs by Location
    if (id.startsWith('service-blogs-')) {
        const chunkIndex = parseInt(id.split('-')[2], 10);
        const itemsPerCity = validBlogServices.length;
        const citiesPerChunk = Math.floor(SITEMAP_LIMIT / itemsPerCity);

        const startIdx = chunkIndex * citiesPerChunk;
        const endIdx = Math.min(startIdx + citiesPerChunk, validCities.length);

        const entries: MetadataRoute.Sitemap = [];

        for (let i = startIdx; i < endIdx; i++) {
            const city = validCities[i];
            for (const serviceSlug of validBlogServices) {
                entries.push({
                    url: `${siteUrl}/service/${serviceSlug}/blog/${city.slug}`,
                    lastModified: new Date(),
                    changeFrequency: 'monthly',
                    priority: 0.5,
                });
            }
        }

        return entries;
    }

    return [];
}
