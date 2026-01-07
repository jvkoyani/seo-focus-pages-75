import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getCity, isValidCity } from '@/lib/masterCities';
import LocationPageTemplate from '@/components/LocationPageTemplate';

type Props = {
    params: Promise<{ city: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { city } = await params;
    const cityData = getCity(city);

    if (!cityData) {
        return { title: 'Page Not Found' };
    }

    return {
        title: `SEO Agency ${cityData.name} | #1 Rated Local SEO`,
        description: `Looking for the best SEO agency in ${cityData.name}? We help local businesses dominate search results and grow revenue. Get your free local SEO audit today.`,
    };
}

import { services } from '@/lib/data';
import JsonLd from '@/components/JsonLd';
import { generateLocalBusinessSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';
import { masterCities } from '@/lib/masterCities';

export async function generateStaticParams() {
    // Limit to top 20 cities for now to prevent build timeout
    return masterCities.slice(0, 20).map((city) => ({
        city: city.slug,
    }));
}

export default async function CityPage({ params }: Props) {

    const { city } = await params;

    if (!isValidCity(city)) {
        notFound();
    }

    const cityData = getCity(city);

    if (!cityData) {
        notFound();
    }

    const locationData = {
        id: cityData.slug,
        name: cityData.name,
        slug: cityData.slug,
        state: "Australia", // Default or fetch if available
        country: "Australia",
        image: "/placeholder.svg",
        description: `SEO services in ${cityData.name}`,
    };

    const localSeoService = services.find(s => s.slug === 'local-seo');

    const localBusinessSchema = generateLocalBusinessSchema(locationData);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Locations', url: '/locations' }, // Assuming /locations exists or just use Home
        { name: cityData.name, url: `/location/${cityData.slug}` }
    ]);
    const faqSchema = localSeoService?.faqs ? generateFAQSchema(localSeoService.faqs) : null;

    return (
        <>
            <JsonLd data={[localBusinessSchema, breadcrumbSchema, faqSchema].filter(Boolean)} />
            <LocationPageTemplate locationData={locationData} />
        </>
    );
}
