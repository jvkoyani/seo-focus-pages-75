import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { services } from '@/lib/data';
import { getCityServicePage, getCityServicePages } from '@/lib/cityServicePages';
import { getLocationData } from '@/lib/cityLocationData';

type Props = {
    params: Promise<{ city: string; service: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { city, service } = await params;
    const cityData = getLocationData(city);
    const serviceData = services.find(s => s.slug === service);

    if (!cityData || !serviceData) {
        return { title: 'Page Not Found' };
    }

    const row = getCityServicePage(city, service);

    return {
        title: row?.metaTitle || `${serviceData.title} ${cityData.name} | #1 Rated Agency`,
        description: row?.metaDescription || `Expert ${serviceData.title} services in ${cityData.name}. Boost your rankings, drive more local traffic, and grow your business. Book your free consultation now.`,
        alternates: {
            canonical: `/location/${cityData.slug}/${serviceData.slug}`,
        },
    };
}

import JsonLd from '@/components/JsonLd';
import ServiceLocationPageTemplate from '@/components/ServiceLocationPageTemplate';
import { generateServiceSchema, generateLocalBusinessSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export async function generateStaticParams() {
    // City+service combinations to build are driven by data/city-service-pages.csv,
    // so pages can be added/removed by editing the CSV instead of this code.
    return getCityServicePages().map(row => ({
        city: row.citySlug,
        service: row.serviceSlug,
    }));
}

export default async function CityServicePage({ params }: Props) {

    const { city, service } = await params;

    const cityData = getLocationData(city);
    const serviceData = services.find(s => s.slug === service);

    if (!cityData || !serviceData) {
        notFound();
    }

    const row = getCityServicePage(city, service);

    const locationData = {
        id: cityData.slug,
        name: cityData.name,
        slug: cityData.slug,
        state: cityData.state,
        country: cityData.country,
        image: cityData.image || "/placeholder.svg",
        description: row?.intro || cityData.description || `${serviceData.title} in ${cityData.name}`,
        metaTitle: row?.metaTitle || `${serviceData.title} in ${cityData.name}`,
        metaDescription: row?.metaDescription || `Professional ${serviceData.title} services in ${cityData.name}.`
    };

    const serviceSchema = generateServiceSchema(serviceData);
    const localBusinessSchema = generateLocalBusinessSchema(locationData, serviceData);
    const faqSchema = serviceData.faqs ? generateFAQSchema(serviceData.faqs) : null;
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Locations', url: '/html-sitemap' },
        { name: cityData.name, url: `/location/${cityData.slug}` },
        { name: serviceData.title, url: `/location/${cityData.slug}/${serviceData.slug}` }
    ]);

    return (
        <>
            <JsonLd data={[serviceSchema, localBusinessSchema, faqSchema, breadcrumbSchema].filter(Boolean)} />
            <ServiceLocationPageTemplate
                locationData={locationData}
                serviceData={serviceData}
            />
        </>
    );
}
