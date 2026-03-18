import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getCity, isValidCity } from '@/lib/masterCities';
import { services, industries } from '@/lib/data';
import JsonLd from '@/components/JsonLd';
import ServiceLocationPageTemplate from '@/components/ServiceLocationPageTemplate';
import ServiceIndustryLocation from '@/components/ServiceIndustryLocation';
import { generateServiceSchema, generateLocalBusinessSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

type Props = {
    params: Promise<{ slug: string; rest: string[] }>;
};

// Helper to find industry by short slug (e.g., 'dental' -> 'dental-seo')
function getIndustryByShortSlug(shortSlug: string) {
    // Try exact match first
    let industry = industries.find(i => i.slug === shortSlug);
    if (industry) return industry;

    // Try appending -seo
    industry = industries.find(i => i.slug === `${shortSlug}-seo`);
    if (industry) return industry;

    return null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug, rest } = await params;
    const city = getCity(slug);

    if (!city) return { title: 'Page Not Found' };

    // Case 1: /areas-we-serve/[city]/[service]
    if (rest.length === 1) {
        const serviceSlug = rest[0];
        const serviceData = services.find(s => s.slug === serviceSlug);
        if (!serviceData) return { title: 'Page Not Found' };

        return {
            title: `${serviceData.title} ${city.name} | #1 Rated Agency`,
            description: `Expert ${serviceData.title} services in ${city.name}. Boost your rankings, drive more local traffic, and grow your business. Book your free consultation now.`,
        };
    }

    // Case 2: /areas-we-serve/[city]/[industry]/[service]
    if (rest.length === 2) {
        const industrySlug = rest[0];
        const serviceSlug = rest[1];
        const service = services.find(s => s.slug === serviceSlug);
        const industry = getIndustryByShortSlug(industrySlug);

        if (!service || !industry) return { title: 'Page Not Found' };

        return {
            title: `${service.title} for ${industry.title} in ${city.name} | Expert SEO`,
            description: `Specialized ${service.title} for ${industry.title} businesses in ${city.name}. Tailored strategies to help you outrank competitors and get more clients. Free audit.`,
        };
    }

    return { title: 'Page Not Found' };
}

export async function generateStaticParams() {
    const { getBuildCities } = await import('@/lib/route-utils');
    const cities = getBuildCities();
    const params = [];

    for (const city of cities) {
        // 1. Service Pages: /areas-we-serve/[city]/[service]
        for (const service of services) {
            params.push({
                slug: city.slug,
                rest: [service.slug]
            });
        }

        // 2. Industry Service Pages: /areas-we-serve/[city]/[industry]/[service]
        for (const industry of industries) {
            const shortIndustrySlug = industry.slug.replace('-seo', '');
            for (const service of services) {
                params.push({
                    slug: city.slug,
                    rest: [shortIndustrySlug, service.slug]
                });
            }
        }
    }
    return params;
}

export default async function AreaCatchAllPage({ params }: Props) {
    const { slug, rest } = await params;

    if (!isValidCity(slug)) {
        notFound();
    }

    const city = getCity(slug);
    if (!city) notFound();

    // Case 1: /areas-we-serve/[city]/[service]
    if (rest.length === 1) {
        const serviceSlug = rest[0];
        const serviceData = services.find(s => s.slug === serviceSlug);
        if (!serviceData) notFound();

        const locationData = {
            id: city.slug,
            name: city.name,
            slug: city.slug,
            state: "Australia",
            country: "Australia",
            image: "/placeholder.svg",
            description: `${serviceData.title} in ${city.name}`,
            metaTitle: `${serviceData.title} in ${city.name}`,
            metaDescription: `Professional ${serviceData.title} services in ${city.name}.`
        };

        const serviceSchema = generateServiceSchema(serviceData);
        const localBusinessSchema = generateLocalBusinessSchema(
            locationData,
            serviceData,
            `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.example.com'}/areas-we-serve/${city.slug}/${serviceData.slug}`
        );
        const faqSchema = serviceData.faqs ? generateFAQSchema(serviceData.faqs) : null;
        const breadcrumbSchema = generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Areas We Serve', url: '/areas-we-serve' },
            { name: city.name, url: `/areas-we-serve/${city.slug}` },
            { name: serviceData.title, url: `/areas-we-serve/${city.slug}/${serviceData.slug}` }
        ]);
        const schemaString = JSON.stringify([serviceSchema, localBusinessSchema, faqSchema, breadcrumbSchema].filter(Boolean));

        return (
            <>
                <JsonLd schemaString={schemaString} />
                <ServiceLocationPageTemplate
                    locationData={locationData}
                    serviceData={serviceData}
                />
            </>
        );
    }

    // Case 2: /areas-we-serve/[city]/[industry]/[service]
    if (rest.length === 2) {
        const industrySlug = rest[0];
        const serviceSlug = rest[1];
        const service = services.find(s => s.slug === serviceSlug);
        const industry = getIndustryByShortSlug(industrySlug);

        if (!service || !industry) notFound();

        // Remove icon component to avoid serialization error
        const { icon, ...serializedIndustry } = industry;

        const locationData = {
            id: city.slug,
            name: city.name,
            slug: city.slug,
            state: "Australia",
            country: "Australia",
            image: "/placeholder.svg",
            description: `${service.title} for ${industry.title} in ${city.name}`,
        };

        const serviceSchema = generateServiceSchema(service);
        const localBusinessSchema = generateLocalBusinessSchema(
            locationData,
            service,
            `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.example.com'}/areas-we-serve/${city.slug}/${industrySlug}/${service.slug}`
        );
        const faqSchema = service.faqs ? generateFAQSchema(service.faqs) : null;
        const breadcrumbSchema = generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Areas We Serve', url: '/areas-we-serve' },
            { name: city.name, url: `/areas-we-serve/${city.slug}` },
            { name: industry.title, url: `/areas-we-serve/${city.slug}/${industrySlug}` },
            { name: service.title, url: `/areas-we-serve/${city.slug}/${industrySlug}/${service.slug}` }
        ]);
        const schemaString = JSON.stringify([serviceSchema, localBusinessSchema, faqSchema, breadcrumbSchema].filter(Boolean));

        return (
            <>
                <JsonLd schemaString={schemaString} />
                <ServiceIndustryLocation
                    service={service}
                    industry={serializedIndustry}
                    cityName={city.name}
                    locationSlug={city.slug}
                />
            </>
        );
    }

    notFound();
}
