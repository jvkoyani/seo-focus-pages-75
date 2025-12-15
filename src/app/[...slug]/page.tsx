import { notFound } from 'next/navigation';
import CountryCities from '@/components/CountryCities';
import LocationService from '@/components/LocationService';
import State from '@/components/State';
import County from '@/components/County';
import LocationPageTemplate from '@/components/LocationPageTemplate';
import { allAustralianCities } from '@/lib/locationData';

const services = [
    { title: "Local SEO", slug: "local-seo" },
    { title: "Technical SEO", slug: "technical-seo" },
    { title: "E-commerce SEO", slug: "ecommerce-seo" },
    { title: "Content Marketing", slug: "content-marketing" },
    { title: "Link Building", slug: "link-building" },
    { title: "SEO Audits", slug: "seo-audits" },
    { title: "Digital PR", slug: "digital-pr" },
    { title: "Analytics & Reporting", slug: "analytics-reporting" }
];

export default async function CatchAllPage({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug } = await params;

    // Case 1: Country/State/County routes
    if (slug[0].toLowerCase() === 'australia') {
        if (slug.length === 1) {
            return <CountryCities />;
        } else if (slug.length === 2) {
            return <State countrySlug={slug[0]} stateSlug={slug[1]} />;
        } else if (slug.length === 3) {
            return <County countrySlug={slug[0]} stateSlug={slug[1]} countySlug={slug[2]} />;
        }
    }

    // Case 2: Single segment routes (Location or Service-Location)
    if (slug.length === 1) {
        const fullSlug = slug[0];

        // 2a. Check if slug matches a location directly (e.g. /sydney)
        const locationMatch = allAustralianCities.find(loc => loc.slug === fullSlug);
        if (locationMatch) {
            return <LocationPageTemplate locationData={locationMatch} />;
        }

        // 2b. Check if slug matches a service-location (e.g. /seo-sydney)
        let matchedService = null;
        let matchedLocation = null;

        // Try matching service first
        for (const service of services) {
            if (fullSlug.startsWith(service.slug + '-')) {
                const potentialLocationSlug = fullSlug.substring(service.slug.length + 1);
                const location = allAustralianCities.find(loc => loc.slug === potentialLocationSlug);

                if (location) {
                    matchedService = service;
                    matchedLocation = location;
                    break;
                }
            }
        }

        // Try matching location at the end
        if (!matchedService || !matchedLocation) {
            for (const location of allAustralianCities) {
                if (fullSlug.endsWith('-' + location.slug)) {
                    const potentialServiceSlug = fullSlug.substring(0, fullSlug.length - location.slug.length - 1);
                    const service = services.find(s => s.slug === potentialServiceSlug);

                    if (service) {
                        matchedService = service;
                        matchedLocation = location;
                        break;
                    }
                }
            }
        }

        if (matchedService && matchedLocation) {
            return <LocationService locationSlug={matchedLocation.slug} serviceSlug={matchedService.slug} />;
        }
    }

    return notFound();
}
