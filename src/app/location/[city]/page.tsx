import { notFound, redirect } from 'next/navigation';
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

import { getLocationPaths } from '@/lib/route-utils';

export const dynamicParams = false; // Static Export requires false for ungenerated paths

export async function generateStaticParams() {
    return getLocationPaths();
}

export default async function CityPage({ params }: Props) {
    const { city } = await params;
    redirect(`/areas-we-serve/${city}`);
}
