import { MetadataRoute } from 'next';
import { services, industries, blogPosts, caseStudies, caseStudyTemplates } from '@/lib/data';
import { glossaryTerms } from '@/lib/glossaryData';
import { methodologies } from '@/lib/methodology-data';
import { australianCities } from '@/lib/locationData';
import { getCityPageSlugs } from '@/lib/cityLocationData';
import { getCityServicePages } from '@/lib/cityServicePages';

export const dynamic = 'force-static';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.seofocus.com.au';

type SitemapEntry = MetadataRoute.Sitemap[number];

// Fallback for content with no tracked modification date (build time).
const BUILD_DATE = new Date();

function entry(
    path: string,
    changeFrequency: SitemapEntry['changeFrequency'],
    priority: number,
    lastModified: Date = BUILD_DATE
): SitemapEntry {
    return {
        url: `${BASE_URL}${path}`,
        lastModified,
        changeFrequency,
        priority,
    };
}

export default function sitemap(): MetadataRoute.Sitemap {
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

    const serviceRoutes = services.map(service => entry(`/service/${service.slug}`, 'monthly', 0.8));
    const industryRoutes = industries.map(industry => entry(`/industry/${industry.slug}`, 'monthly', 0.8));
    const blogRoutes = blogPosts.map(post =>
        entry(`/blog/${post.slug}`, 'monthly', 0.6, new Date(post.date))
    );
    const methodologyRoutes = methodologies.map(m => entry(`/methodology/${m.slug}`, 'yearly', 0.4));
    const glossaryRoutes = glossaryTerms.map(term =>
        entry(`/glossary/${term.slug}`, 'monthly', 0.6, new Date(term.lastUpdated))
    );

    const caseStudyRoutes = caseStudies.map(study => entry(`/case-study/${study.slug}`, 'monthly', 0.6));
    const caseStudyComboRoutes: SitemapEntry[] = [];
    for (const template of caseStudyTemplates) {
        for (const city of australianCities) {
            caseStudyComboRoutes.push(entry(`/case-study/${template.slug}-${city.slug}`, 'monthly', 0.5));
        }
    }

    const cityRoutes = getCityPageSlugs().map(citySlug => entry(`/location/${citySlug}`, 'monthly', 0.7));
    const cityServiceRoutes = getCityServicePages().map(row =>
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
}
