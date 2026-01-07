import { notFound, redirect } from 'next/navigation';
import { Metadata } from 'next';
import CountryCities from '@/components/CountryCities';
import LocationService from '@/components/LocationService';
import State from '@/components/State';
import County from '@/components/County';
import LocationPageTemplate from '@/components/LocationPageTemplate';
import { isValidCity, getCity } from '@/lib/masterCities';
import { services, industries } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, MapPin, Briefcase } from 'lucide-react';
import Link from 'next/link';

type Props = {
    params: Promise<{ slug: string[] }>;
};

// Parse service-for-industry-in-city pattern
function parseServiceIndustryCity(slug: string): { service: typeof services[0], industry: typeof industries[0], citySlug: string } | null {
    // Pattern: {service-slug}-for-{industry-slug}-in-{city-slug}
    const forIndex = slug.indexOf('-for-');
    const inIndex = slug.lastIndexOf('-in-');

    if (forIndex === -1 || inIndex === -1 || inIndex <= forIndex) return null;

    const serviceSlug = slug.substring(0, forIndex);
    const industrySlug = slug.substring(forIndex + 5, inIndex);
    const citySlug = slug.substring(inIndex + 4);

    const service = services.find(s => s.slug === serviceSlug);
    const industry = industries.find(i => i.slug === industrySlug);

    if (!service || !industry || !isValidCity(citySlug)) return null;

    return { service, industry, citySlug };
}

// Parse industry-in-city pattern (defaults to local-seo service)
function parseIndustryInCity(slug: string): { service: typeof services[0], industry: typeof industries[0], citySlug: string } | null {
    // Pattern: {industry-slug}-in-{city-slug}
    const inIndex = slug.lastIndexOf('-in-');

    if (inIndex === -1) return null;

    const industrySlug = slug.substring(0, inIndex);
    const citySlug = slug.substring(inIndex + 4);

    const industry = industries.find(i => i.slug === industrySlug);
    // Default to local-seo service for this pattern
    const service = services.find(s => s.slug === 'local-seo');

    if (!service || !industry || !isValidCity(citySlug)) return null;

    return { service, industry, citySlug };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;

    if (slug.length !== 1) return { title: 'Page Not Found' };

    // Check for service-for-industry-in-city pattern
    const parsed = parseServiceIndustryCity(slug[0]);
    if (parsed) {
        const city = getCity(parsed.citySlug);
        return {
            title: `${parsed.service.title} for ${parsed.industry.title} in ${city?.name} | Expert SEO`,
            description: `Specialized ${parsed.service.title} for ${parsed.industry.title} businesses in ${city?.name}. Tailored strategies to help you outrank competitors and get more clients. Free audit.`,
        };
    }

    // Check for industry-in-city pattern
    const parsedIndustry = parseIndustryInCity(slug[0]);
    if (parsedIndustry) {
        const city = getCity(parsedIndustry.citySlug);
        return {
            title: `${parsedIndustry.industry.title} SEO ${city?.name} | Specialized Agency`,
            description: `Dominate the ${city?.name} market with our specialized SEO for ${parsedIndustry.industry.title}. We understand your niche and deliver measurable growth. Get a free proposal.`,
        };
    }

    // City page metadata
    const city = getCity(slug[0]);
    if (city) {
        return {
            title: `SEO Services ${city.name} | #1 Rated Agency`,
            description: `Top-rated SEO services in ${city.name}. We help local businesses rank #1 on Google and drive more revenue. Get your free SEO audit today.`,
        };
    }

    return { title: 'Page Not Found' };
}

// Service-Industry-City Page Component
import ServiceIndustryLocation from '@/components/ServiceIndustryLocation';
import IndustryLocationPageTemplate from '@/components/IndustryLocationPageTemplate';

function ServiceIndustryCityPage({ service, industry, citySlug }: { service: typeof services[0], industry: typeof industries[0], citySlug: string }) {
    const city = getCity(citySlug);
    if (!city) return notFound();

    // Remove icon component to avoid serialization error
    const { icon, ...serializedIndustry } = industry;

    return (
        <ServiceIndustryLocation
            service={service}
            industry={serializedIndustry}
            cityName={city.name}
            locationSlug={citySlug}
        />
    );
}

export async function generateStaticParams() {
    const params = [];

    // 1. Australia route
    params.push({ slug: ['australia'] });

    // 2. Major cities and their combinations
    const majorCities = ['melbourne', 'sydney', 'brisbane', 'gold-coast', 'perth', 'adelaide', 'canberra', 'hobart'];

    for (const city of majorCities) {
        // City page
        params.push({ slug: [city] });

        // Industry in City
        for (const industry of industries) {
            params.push({ slug: [`${industry.slug}-in-${city}`] });

            // Service for Industry in City
            for (const service of services) {
                params.push({ slug: [`${service.slug}-for-${industry.slug}-in-${city}`] });
            }
        }
    }

    return params;
}

export default async function CatchAllPage({ params }: Props) {

    const { slug } = await params;

    // Case 1: Country/State/County routes (australia/...)
    if (slug[0].toLowerCase() === 'australia') {
        if (slug.length === 1) return <CountryCities />;
        if (slug.length === 2) return <State countrySlug={slug[0]} stateSlug={slug[1]} />;
        if (slug.length === 3) return <County countrySlug={slug[0]} stateSlug={slug[1]} countySlug={slug[2]} />;
    }

    // Case 2: Single segment routes
    if (slug.length === 1) {
        const singleSlug = slug[0];

        // 2a. Check for service-for-industry-in-city pattern
        const parsed = parseServiceIndustryCity(singleSlug);
        if (parsed) {
            return <ServiceIndustryCityPage service={parsed.service} industry={parsed.industry} citySlug={parsed.citySlug} />;
        }

        // 2b. Check for industry-in-city pattern
        const parsedIndustry = parseIndustryInCity(singleSlug);
        if (parsedIndustry) {
            // Remove icon component to avoid serialization error
            const { icon, ...serializedIndustry } = parsedIndustry.industry;

            return <IndustryLocationPageTemplate industryData={serializedIndustry} locationData={{
                id: parsedIndustry.citySlug,
                name: getCity(parsedIndustry.citySlug)?.name || parsedIndustry.citySlug,
                slug: parsedIndustry.citySlug,
                state: 'Australia',
                country: 'Australia',
                image: '/placeholder.svg',
                description: `Specialized ${parsedIndustry.industry.title} services in ${getCity(parsedIndustry.citySlug)?.name}`,
                metaTitle: `${parsedIndustry.industry.title} in ${getCity(parsedIndustry.citySlug)?.name}`,
                metaDescription: `Specialized ${parsedIndustry.industry.title} services in ${getCity(parsedIndustry.citySlug)?.name}`
            }} />;
        }

        // 2c. Check if slug is a city (e.g., /sydney)
        if (isValidCity(singleSlug)) {
            const city = getCity(singleSlug);
            if (city) {
                return <LocationPageTemplate locationData={{
                    id: city.slug,
                    name: city.name,
                    slug: city.slug,
                    state: 'Australia',
                    country: 'Australia',
                    image: '/placeholder.svg',
                    metaTitle: `SEO Services in ${city.name}`,
                    metaDescription: `Professional SEO services in ${city.name}`
                }} />;
            }
        }

        // 2d. Check for service-city pattern (e.g., /local-seo-sydney) and redirect to new structure
        for (const service of services) {
            if (singleSlug.startsWith(service.slug + '-')) {
                const citySlug = singleSlug.substring(service.slug.length + 1);
                if (isValidCity(citySlug)) {
                    redirect(`/location/${citySlug}/${service.slug}`);
                }
            }
            if (singleSlug.endsWith('-' + service.slug)) {
                const citySlug = singleSlug.substring(0, singleSlug.length - service.slug.length - 1);
                if (isValidCity(citySlug)) {
                    redirect(`/location/${citySlug}/${service.slug}`);
                }
            }
        }
    }

    return notFound();
}
