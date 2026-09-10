import { MetadataRoute } from 'next';
import { services, industries, blogPosts, caseStudies } from '@/lib/data';

export const dynamic = 'force-static';

// Dynamic domain detection - uses deployment URL if available, falls back to env var or default
const getBaseURL = () => {
  // Vercel automatically sets VERCEL_URL for each deployment
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  // Use explicit environment variable if set (for custom domains)
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  // Fallback to production domain
  return 'https://www.seofocus.com.au';
};

const BASE_URL = getBaseURL();

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
    try {
        // Core static pages
        const staticRoutes: SitemapEntry[] = [
            entry('/', 'daily', 1.0),
            entry('/about', 'monthly', 0.6),
            entry('/contact', 'monthly', 0.6),
            entry('/services', 'weekly', 0.9),
            entry('/industries', 'weekly', 0.8),
            entry('/blogs', 'weekly', 0.7),
            entry('/case-studies', 'weekly', 0.7),
            entry('/html-sitemap', 'weekly', 0.5),
            entry('/seo-audit', 'monthly', 0.6),
            entry('/free-consultation', 'monthly', 0.6),
            entry('/terms', 'yearly', 0.2),
            entry('/privacy', 'yearly', 0.2),
        ];

        // Dynamic routes from data
        const serviceRoutes = (services || []).map(s => entry(`/service/${s.slug}`, 'monthly', 0.8));
        const industryRoutes = (industries || []).map(i => entry(`/industry/${i.slug}`, 'monthly', 0.8));
        const blogRoutes = (blogPosts || []).map(p => entry(`/blog/${p.slug}`, 'monthly', 0.6));
        const caseStudyRoutes = (caseStudies || []).map(s => entry(`/case-study/${s.slug}`, 'monthly', 0.6));

        return [
            ...staticRoutes,
            ...serviceRoutes,
            ...industryRoutes,
            ...blogRoutes,
            ...caseStudyRoutes,
        ];
    } catch (error) {
        console.error('Error generating sitemap:', error);
        // Return just static pages if dynamic generation fails
        return [
            entry('/', 'daily', 1.0),
            entry('/about', 'monthly', 0.6),
            entry('/contact', 'monthly', 0.6),
            entry('/services', 'weekly', 0.9),
            entry('/industries', 'weekly', 0.8),
            entry('/blogs', 'weekly', 0.7),
            entry('/case-studies', 'weekly', 0.7),
            entry('/html-sitemap', 'weekly', 0.5),
            entry('/seo-audit', 'monthly', 0.6),
            entry('/free-consultation', 'monthly', 0.6),
            entry('/terms', 'yearly', 0.2),
            entry('/privacy', 'yearly', 0.2),
        ];
    }
}
