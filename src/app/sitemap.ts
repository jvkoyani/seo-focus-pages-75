import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.seofocus.com.au';

type SitemapEntry = MetadataRoute.Sitemap[number];

function entry(path: string, changeFrequency: SitemapEntry['changeFrequency'], priority: number): SitemapEntry {
    return {
        url: `${BASE_URL}${path}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
    };
}

export default function sitemap(): MetadataRoute.Sitemap {
    // Core static pages that are always available
    const staticRoutes: SitemapEntry[] = [
        entry('/', 'daily', 1.0),
        entry('/about', 'monthly', 0.6),
        entry('/contact', 'monthly', 0.6),
        entry('/services', 'weekly', 0.9),
        entry('/industries', 'weekly', 0.8),
        entry('/blogs', 'weekly', 0.7),
        entry('/case-studies', 'weekly', 0.7),
        entry('/glossary', 'weekly', 0.7),
        entry('/html-sitemap', 'weekly', 0.5),
        entry('/seo-audit', 'monthly', 0.6),
        entry('/free-consultation', 'monthly', 0.6),
        entry('/terms', 'yearly', 0.2),
        entry('/privacy', 'yearly', 0.2),
    ];

    return staticRoutes;
}
