import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getCity, isValidCity } from '@/lib/masterCities';
import { services } from '@/lib/data';
import LocationService from '@/components/LocationService';

type Props = {
    params: Promise<{ city: string; service: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { city, service } = await params;
    const cityData = getCity(city);
    const serviceData = services.find(s => s.slug === service);

    if (!cityData || !serviceData) {
        return { title: 'Page Not Found' };
    }

    return {
        title: `${serviceData.title} ${cityData.name} | #1 Rated Agency`,
        description: `Expert ${serviceData.title} services in ${cityData.name}. Boost your rankings, drive more local traffic, and grow your business. Book your free consultation now.`,
    };
}

import JsonLd from '@/components/JsonLd';
import ServiceLocationPageTemplate from '@/components/ServiceLocationPageTemplate';
import { generateServiceSchema, generateLocalBusinessSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';
import { masterCities } from '@/lib/masterCities';

export async function generateStaticParams() {
    // Limit to top 20 cities for now to prevent build timeout
    const topCities = masterCities.slice(0, 20);
    const params = [];
    for (const city of topCities) {
        for (const service of services) {
            params.push({
                city: city.slug,
                service: service.slug,
            });
        }
    }
    return params;
}

export default async function CityServicePage({ params }: Props) {

    const { city, service } = await params;

    if (!isValidCity(city)) {
        notFound();
    }

    const cityData = getCity(city);
    const serviceData = services.find(s => s.slug === service);

    if (!cityData || !serviceData) {
        notFound();
    }

    const locationData = {
        id: cityData.slug,
        name: cityData.name,
        slug: cityData.slug,
        state: "Australia",
        country: "Australia",
        image: "/placeholder.svg",
        description: `${serviceData.title} in ${cityData.name}`,
        metaTitle: `${serviceData.title} in ${cityData.name}`,
        metaDescription: `Professional ${serviceData.title} services in ${cityData.name}.`
    };

    const serviceSchema = generateServiceSchema(serviceData);
    const localBusinessSchema = generateLocalBusinessSchema(locationData, serviceData);
    const faqSchema = serviceData.faqs ? generateFAQSchema(serviceData.faqs) : null;
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Locations', url: '/locations' },
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
