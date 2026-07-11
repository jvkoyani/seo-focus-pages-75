import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getCityPageSlugs, getLocationData } from '@/lib/cityLocationData';
import LocationPageTemplate from '@/components/LocationPageTemplate';

type Props = {
    params: Promise<{ city: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { city } = await params;
    const cityData = getLocationData(city);

    if (!cityData) {
        return { title: 'Page Not Found' };
    }

    const localContext = cityData.description ? `${cityData.description} ` : '';

    return {
        title: `SEO Agency ${cityData.name} | #1 Rated Local SEO`,
        description: `${localContext}Looking for the best SEO agency in ${cityData.name}? We help local businesses dominate search results and grow revenue.`,
        alternates: {
            canonical: `/location/${cityData.slug}`,
        },
    };
}

import { services } from '@/lib/data';
import JsonLd from '@/components/JsonLd';
import { generateLocalBusinessSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';

export async function generateStaticParams() {
    return getCityPageSlugs().map((city) => ({ city }));
}

export default async function CityPage({ params }: Props) {

    const { city } = await params;

    const locationData = getLocationData(city);

    if (!locationData) {
        notFound();
    }

    const localSeoService = services.find(s => s.slug === 'local-seo');

    const localBusinessSchema = generateLocalBusinessSchema(locationData);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Locations', url: '/html-sitemap' },
        { name: locationData.name, url: `/location/${locationData.slug}` }
    ]);
    const faqSchema = localSeoService?.faqs ? generateFAQSchema(localSeoService.faqs) : null;

    return (
        <>
            <JsonLd data={[localBusinessSchema, breadcrumbSchema, faqSchema].filter(Boolean)} />
            <LocationPageTemplate locationData={locationData} />
        </>
    );
}
