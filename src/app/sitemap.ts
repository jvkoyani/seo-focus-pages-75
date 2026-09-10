import { MetadataRoute } from 'next';
import { services, industries, blogPosts, caseStudies } from '@/lib/data';
import { masterCities } from '@/lib/masterCities';
import { serviceBlogContents } from '@/lib/service-blog-data';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://cambayindustries.co.in';

// Constants for chunking
const SITEMAP_LIMIT = 45000; // Safe limit below 50k

export async function generateSitemaps() {
    const sitemaps = [
        { id: 'main' },
        { id: 'cities' },
    ];

    // City Services chunks
    // Total: cities * services
    const cityServicesCount = masterCities.length * services.length;
    const cityServicesChunks = Math.ceil(cityServicesCount / SITEMAP_LIMIT);
    for (let i = 0; i < cityServicesChunks; i++) {
        sitemaps.push({ id: `city-services-${i}` });
    }

    // City Service Industries chunks
    // Total: cities * services * industries
    const cityServiceIndCount = masterCities.length * services.length * industries.length;
    const cityServiceIndChunks = Math.ceil(cityServiceIndCount / SITEMAP_LIMIT);
    for (let i = 0; i < cityServiceIndChunks; i++) {
        sitemaps.push({ id: `city-service-industries-${i}` });
    }

    // Service Blog Location chunks
    // Total: cities * valid_blog_services
    const validBlogServices = Object.keys(serviceBlogContents);
    const serviceBlogCount = masterCities.length * validBlogServices.length;
    const serviceBlogChunks = Math.ceil(serviceBlogCount / SITEMAP_LIMIT);
    for (let i = 0; i < serviceBlogChunks; i++) {
        sitemaps.push({ id: `service-blogs-location-${i}` });
    }

    return sitemaps;
}

export default async function sitemap({ id }: { id: string }): Promise<MetadataRoute.Sitemap> {
    const today = new Date();

    // Helper to create sitemap entry
    const createEntry = (url: string, changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never', priority: number): MetadataRoute.Sitemap[0] => ({
        url: `${BASE_URL}${url}`,
        lastModified: today,
        changeFrequency,
        priority,
    });

    // 1. Main Pages & Simple Dynamic
    if (id === 'main') {
        const staticRoutes = [
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
            // '/methodology' // Excluded as it seems to be dynamic only or missing page.tsx
        ].map(route => createEntry(route, 'weekly', 1.0));

        const serviceRoutes = services.map(service =>
            createEntry(`/service/${service.slug}`, 'weekly', 0.9)
        );

        const industryRoutes = industries.map(industry =>
            createEntry(`/industries/${industry.slug}`, 'weekly', 0.9)
        );

        const blogRoutes = blogPosts.map(post =>
            createEntry(`/blogs/${post.slug}`, 'monthly', 0.8)
        );

        const caseStudyRoutes = caseStudies.map(study =>
            createEntry(`/case-studies/${study.slug}`, 'monthly', 0.8)
        );

        // Service Blogs (Main)
        const validBlogServices = Object.keys(serviceBlogContents);
        const serviceBlogRoutes = validBlogServices.map(slug =>
            createEntry(`/service/${slug}/blog`, 'weekly', 0.8)
        );

        return [
            ...staticRoutes,
            ...serviceRoutes,
            ...industryRoutes,
            ...blogRoutes,
            ...caseStudyRoutes,
            ...serviceBlogRoutes
        ];
    }

    // 2. Cities
    if (id === 'cities') {
        // masterCities is ~16k, fits in one sitemap
        return masterCities.map(city =>
            createEntry(`/${city.slug}`, 'monthly', 0.6)
        );
    }

    // 3. City Services
    if (id.startsWith('city-services-')) {
        const chunkIndex = parseInt(id.split('-')[2]);
        const itemsPerCity = services.length;
        const citiesPerChunk = Math.floor(SITEMAP_LIMIT / itemsPerCity);

        const startCityIdx = chunkIndex * citiesPerChunk;
        const endCityIdx = Math.min(startCityIdx + citiesPerChunk, masterCities.length);

        const routes: MetadataRoute.Sitemap = [];

        for (let i = startCityIdx; i < endCityIdx; i++) {
            const city = masterCities[i];
            for (const service of services) {
                routes.push(createEntry(`/location/${city.slug}/${service.slug}`, 'monthly', 0.5));
            }
        }
        return routes;
    }

    // 4. City Service Industries
    if (id.startsWith('city-service-industries-')) {
        const chunkIndex = parseInt(id.split('-')[3]);
        const itemsPerCity = services.length * industries.length;
        const citiesPerChunk = Math.floor(SITEMAP_LIMIT / itemsPerCity);

        const startCityIdx = chunkIndex * citiesPerChunk;
        const endCityIdx = Math.min(startCityIdx + citiesPerChunk, masterCities.length);

        const routes: MetadataRoute.Sitemap = [];

        for (let i = startCityIdx; i < endCityIdx; i++) {
            const city = masterCities[i];
            for (const service of services) {
                for (const industry of industries) {
                    routes.push(createEntry(`/${service.slug}-for-${industry.slug}-in-${city.slug}`, 'monthly', 0.4));
                }
            }
        }
        return routes;
    }

    // 5. Service Blogs Location
    if (id.startsWith('service-blogs-location-')) {
        const chunkIndex = parseInt(id.split('-')[3]);
        const validBlogServices = Object.keys(serviceBlogContents);
        const itemsPerCity = validBlogServices.length;
        const citiesPerChunk = Math.floor(SITEMAP_LIMIT / itemsPerCity);

        const startCityIdx = chunkIndex * citiesPerChunk;
        const endCityIdx = Math.min(startCityIdx + citiesPerChunk, masterCities.length);

        const routes: MetadataRoute.Sitemap = [];

        for (let i = startCityIdx; i < endCityIdx; i++) {
            const city = masterCities[i];
            for (const serviceSlug of validBlogServices) {
                routes.push(createEntry(`/service/${serviceSlug}/blog/${city.slug}`, 'monthly', 0.5));
            }
        }
        return routes;
    }

    return [];
}
