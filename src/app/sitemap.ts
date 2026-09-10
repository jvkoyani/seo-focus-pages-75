import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://cambayindustries.co.in';

export const dynamic = 'force-static';

export async function generateSitemaps() {
    return [{ id: 'main' }];
}

export default async function sitemap({ id }: { id: string }): Promise<MetadataRoute.Sitemap> {
    // Only generate the main sitemap for now
    if (id !== 'main') {
        return [];
    }

    try {
        // Ensure BASE_URL is a valid string
        const siteUrl = typeof BASE_URL === 'string' && BASE_URL.trim() ? BASE_URL : 'https://cambayindustries.co.in';

        const entries: MetadataRoute.Sitemap = [
            {
                url: siteUrl,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 1.0,
            },
            {
                url: `${siteUrl}/about`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.8,
            },
            {
                url: `${siteUrl}/services`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.9,
            },
            {
                url: `${siteUrl}/industries`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.9,
            },
            {
                url: `${siteUrl}/blogs`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.8,
            },
            {
                url: `${siteUrl}/case-studies`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.8,
            },
            {
                url: `${siteUrl}/contact`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.8,
            },
            {
                url: `${siteUrl}/free-consultation`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.7,
            },
            {
                url: `${siteUrl}/seo-audit`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.7,
            },
        ];

        return entries;
    } catch (error) {
        console.error('Sitemap generation error:', error);
        return [];
    }
}
