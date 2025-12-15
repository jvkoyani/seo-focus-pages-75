
import { MetadataRoute } from 'next';
import { services } from '@/lib/data';
import { allAustralianCities } from '@/lib/locationData';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://yourwebsite.com'; // Replace with your actual domain
    const today = new Date();

    // Main pages
    const mainPages = [
        { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
        { url: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
        { url: '/industries', priority: 0.9, changeFrequency: 'weekly' as const },
        { url: '/blogs', priority: 0.8, changeFrequency: 'weekly' as const },
        { url: '/case-studies', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
        { url: '/free-consultation', priority: 0.9, changeFrequency: 'monthly' as const },
    ];

    const routes: MetadataRoute.Sitemap = mainPages.map((page) => ({
        url: `${baseUrl}${page.url}`,
        lastModified: today,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
    }));

    // Service pages
    const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
        url: `${baseUrl}/service/${service.slug}`,
        lastModified: today,
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    // Location pages and Service-Location combinations
    const locationRoutes: MetadataRoute.Sitemap = [];

    allAustralianCities.forEach((city) => {
        // Handle both object-based city data and string-based city data
        const cityName = typeof city === 'string' ? city : city.name;
        const citySlug = typeof city === 'string'
            ? cityName.toLowerCase().replace(/[\s(),'&-]+/g, '-').replace(/--+/g, '-')
            : city.slug;

        // Location page
        locationRoutes.push({
            url: `${baseUrl}/location/${citySlug}`,
            lastModified: today,
            changeFrequency: 'monthly',
            priority: 0.7,
        });

        // Service-Location combinations
        services.forEach((service) => {
            // /location/city/service
            locationRoutes.push({
                url: `${baseUrl}/location/${citySlug}/${service.slug}`,
                lastModified: today,
                changeFrequency: 'monthly',
                priority: 0.6,
            });

            // /service-city (SEO friendly)
            locationRoutes.push({
                url: `${baseUrl}/${service.slug}-${citySlug}`,
                lastModified: today,
                changeFrequency: 'monthly',
                priority: 0.6,
            });
        });
    });

    // Methodology pages
    const methodologyPages = [
        'research-analysis',
        'strategic-planning',
        'implementation',
        'monitoring-optimization',
    ];

    const methodologyRoutes: MetadataRoute.Sitemap = methodologyPages.map((page) => ({
        url: `${baseUrl}/methodology/${page}`,
        lastModified: today,
        changeFrequency: 'monthly',
        priority: 0.6,
    }));

    // State pages
    const states = [...new Set(allAustralianCities
        .filter(city => typeof city === 'object')
        .map(city => (city as any).state))]
        .filter(Boolean);

    const stateRoutes: MetadataRoute.Sitemap = [];
    states.forEach((state) => {
        if (state && state !== "Various") {
            const stateSlug = (state as string).toLowerCase().replace(/\s+/g, '-');
            stateRoutes.push({
                url: `${baseUrl}/australia/${stateSlug}`,
                lastModified: today,
                changeFrequency: 'monthly',
                priority: 0.7,
            });
        }
    });

    return [
        ...routes,
        ...serviceRoutes,
        ...locationRoutes,
        ...methodologyRoutes,
        ...stateRoutes,
    ];
}
