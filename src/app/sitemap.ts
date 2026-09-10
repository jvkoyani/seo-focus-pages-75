import { MetadataRoute } from 'next';
import { services, industries, blogPosts, caseStudies, caseStudyTemplates } from '@/lib/data';
import { glossaryTerms } from '@/lib/glossaryData';
import { methodologies } from '@/lib/methodology-data';
import { australianCities } from '@/lib/locationData';
import { getCityPageSlugs } from '@/lib/cityLocationData';
import { getCityServicePages } from '@/lib/cityServicePages';

export const dynamic = 'force-static';

<<<<<<< HEAD
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
=======
// Dynamic domain detection
const getBaseURL = () => {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
>>>>>>> c67d826 (Expand main branch sitemap with full dynamic routes)
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
            entry('/glossary', 'weekly', 0.7),
            entry('/html-sitemap', 'weekly', 0.5),
            entry('/seo-audit', 'monthly', 0.6),
            entry('/free-consultation', 'monthly', 0.6),
            entry('/terms', 'yearly', 0.2),
            entry('/privacy', 'yearly', 0.2),
        ];

<<<<<<< HEAD
        // Dynamic routes from data
=======
        // Dynamic routes
>>>>>>> c67d826 (Expand main branch sitemap with full dynamic routes)
        const serviceRoutes = (services || []).map(s => entry(`/service/${s.slug}`, 'monthly', 0.8));
        const industryRoutes = (industries || []).map(i => entry(`/industry/${i.slug}`, 'monthly', 0.8));
        const blogRoutes = (blogPosts || []).map(p => entry(`/blog/${p.slug}`, 'monthly', 0.6));
        const methodologyRoutes = (methodologies || []).map(m => entry(`/methodology/${m.slug}`, 'yearly', 0.4));
        const glossaryRoutes = (glossaryTerms || []).map(t => entry(`/glossary/${t.slug}`, 'monthly', 0.6));
        const caseStudyRoutes = (caseStudies || []).map(s => entry(`/case-study/${s.slug}`, 'monthly', 0.6));

        // Case study combinations
        const caseStudyComboRoutes: SitemapEntry[] = [];
        for (const template of (caseStudyTemplates || [])) {
            for (const city of (australianCities || [])) {
                caseStudyComboRoutes.push(entry(`/case-study/${template.slug}-${city.slug}`, 'monthly', 0.5));
            }
        }

        // Location routes
        const cityRoutes = (getCityPageSlugs?.() || []).map((slug: string) => entry(`/location/${slug}`, 'monthly', 0.7));
        const cityServiceRoutes = (getCityServicePages?.() || []).map((row: any) =>
            entry(`/location/${row.citySlug}/${row.serviceSlug}`, 'monthly', 0.7)
        );

        return [
            ...staticRoutes,
            ...serviceRoutes,
            ...industryRoutes,
            ...blogRoutes,
            ...methodologyRoutes,
            ...glossaryRoutes,
            ...caseStudyRoutes,
            ...caseStudyComboRoutes,
            ...cityRoutes,
            ...cityServiceRoutes,
        ];
    } catch (error) {
        console.error('Error generating sitemap:', error);
<<<<<<< HEAD
        // Return just static pages if dynamic generation fails
=======
        // Fallback to static pages
>>>>>>> c67d826 (Expand main branch sitemap with full dynamic routes)
        return [
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
    }
}
