import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import LocationPageTemplate from '@/components/LocationPageTemplate';
import { isValidCity, getCity, masterCities } from '@/lib/masterCities';

type Props = {
    params: Promise<{ slug: string }>;
};

// export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const city = getCity(slug);

    if (city) {
        return {
            title: `SEO Services ${city.name} | #1 Rated Agency`,
            description: `Top-rated SEO services in ${city.name}. We help local businesses rank #1 on Google and drive more revenue. Get your free SEO audit today.`,
        };
    }

    return { title: 'Page Not Found' };
}

// export const dynamicParams = false;

export async function generateStaticParams() {
    const { getBuildCities } = await import('@/lib/route-utils');
    const cities = getBuildCities();
    return cities.map((city) => ({
        slug: city.slug,
    }));
}

export default async function AreaWeServePage({ params }: Props) {
    const { slug } = await params;

    if (!isValidCity(slug)) {
        return notFound();
    }

    const city = getCity(slug);
    if (!city) return notFound();

    return (
        <LocationPageTemplate
            locationData={{
                id: city.slug,
                name: city.name,
                slug: city.slug,
                state: 'Australia',
                country: 'Australia',
                image: '/placeholder.svg',
                metaTitle: `SEO Services in ${city.name}`,
                metaDescription: `Professional SEO services in ${city.name}`
            }}
        />
    );
}
