
'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { MapPin, ExternalLink, Layers, ChevronRight, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { allAustralianCities } from '@/lib/locationData';
import { services } from '@/lib/data';

export default function SitemapClient() {
    const [searchTerm, setSearchTerm] = useState('');

    // Group cities by state for better organization
    const stateGroups = useMemo(() => {
        const groups: Record<string, typeof allAustralianCities> = {};

        allAustralianCities.forEach(city => {
            // Include all cities, even those with "Various" state
            const state = city.state === "Various" ? "Other Locations" : city.state;

            if (!groups[state]) {
                groups[state] = [];
            }
            groups[state].push(city);
        });

        return groups;
    }, []);

    const states = useMemo(() => Object.keys(stateGroups).sort(), [stateGroups]);

    // Filter locations based on search term
    const filterLocations = (locations: typeof allAustralianCities) => {
        if (!searchTerm) return locations;
        return locations.filter(location =>
            location.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    // Used to track which state sections are expanded
    const [expandedStates, setExpandedStates] = useState<Record<string, boolean>>({});

    const toggleStateExpansion = (state: string) => {
        setExpandedStates(prev => ({
            ...prev,
            [state]: !prev[state]
        }));
    };

    // Get major cities for popular combinations
    const majorCities = useMemo(() => {
        // Return the first 15 cities with full metadata (excluding "Various" state)
        return allAustralianCities
            .filter(city => city.description && city.state !== "Various")
            .slice(0, 15);
    }, []);

    return (
        <>
            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 border-b pb-2">Main Sections</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <Link href="/" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow flex items-center">
                        <Layers className="h-5 w-5 mr-3 text-seo-blue" />
                        <span>Home</span>
                    </Link>
                    <Link href="/about" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow flex items-center">
                        <Layers className="h-5 w-5 mr-3 text-seo-blue" />
                        <span>About Us</span>
                    </Link>
                    <Link href="/services" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow flex items-center">
                        <Layers className="h-5 w-5 mr-3 text-seo-blue" />
                        <span>Services</span>
                    </Link>
                    <Link href="/industries" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow flex items-center">
                        <Layers className="h-5 w-5 mr-3 text-seo-blue" />
                        <span>Industries</span>
                    </Link>
                    <Link href="/blogs" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow flex items-center">
                        <Layers className="h-5 w-5 mr-3 text-seo-blue" />
                        <span>Blogs</span>
                    </Link>
                    <Link href="/case-studies" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow flex items-center">
                        <Layers className="h-5 w-5 mr-3 text-seo-blue" />
                        <span>Case Studies</span>
                    </Link>
                    <Link href="/contact" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow flex items-center">
                        <Layers className="h-5 w-5 mr-3 text-seo-blue" />
                        <span>Contact</span>
                    </Link>
                    <Link href="/free-consultation" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow flex items-center">
                        <Layers className="h-5 w-5 mr-3 text-seo-blue" />
                        <span>Free Consultation</span>
                    </Link>
                    <Link href="/sitemap.xml" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow flex items-center">
                        <Layers className="h-5 w-5 mr-3 text-seo-blue" />
                        <span>XML Sitemap</span>
                    </Link>
                    <Link href="/location-sitemap" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow flex items-center">
                        <Layers className="h-5 w-5 mr-3 text-seo-blue" />
                        <span>Location Directory</span>
                    </Link>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 border-b pb-2">Our Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {services.map(service => (
                        <Link
                            key={service.id}
                            href={`/service/${service.slug}`}
                            className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                            <p className="text-sm text-seo-gray-dark">{service.description}</p>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 border-b pb-2">Our Methodology</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <Link href="/methodology/research-analysis" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-semibold text-lg mb-2">Research & Analysis</h3>
                    </Link>
                    <Link href="/methodology/strategic-planning" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-semibold text-lg mb-2">Strategic Planning</h3>
                    </Link>
                    <Link href="/methodology/implementation" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-semibold text-lg mb-2">Implementation</h3>
                    </Link>
                    <Link href="/methodology/monitoring-optimization" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-semibold text-lg mb-2">Monitoring & Optimization</h3>
                    </Link>
                </div>
            </section>

            <section className="mb-8">
                <div className="flex items-center gap-4 max-w-md mx-auto">
                    <Input
                        type="text"
                        placeholder="Search for a location..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-1"
                    />
                    <Button
                        variant="ghost"
                        className="px-3"
                        onClick={() => setSearchTerm('')}
                        disabled={!searchTerm}
                    >
                        Clear
                    </Button>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 border-b pb-2">Locations We Serve</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {states.map(state => {
                        const filteredLocations = filterLocations(stateGroups[state]);
                        if (filteredLocations.length === 0) return null;

                        const isExpanded = expandedStates[state] || false;
                        const displayLocations = isExpanded ? filteredLocations : filteredLocations.slice(0, 50);
                        const hasMore = filteredLocations.length > 50;

                        return (
                            <div key={state} className="bg-white rounded-lg shadow-sm p-6">
                                <h3 className="text-xl font-semibold mb-4 border-b pb-2">
                                    <Link href={state !== "Other Locations" ?
                                        `/australia/${state.toLowerCase().replace(/\s+/g, '-')}` :
                                        "#"}
                                        className={state !== "Other Locations" ? "hover:text-seo-blue" : ""}
                                    >
                                        {state}
                                    </Link>
                                    <span className="text-sm text-seo-gray-dark ml-2">({filteredLocations.length})</span>
                                </h3>

                                <div className="h-[300px] overflow-y-auto pr-2">
                                    <div className="grid grid-cols-1 gap-2">
                                        {displayLocations.map(city => (
                                            <Link
                                                key={city.id}
                                                href={`/location/${city.slug}`}
                                                className="flex items-center p-2 hover:bg-seo-gray-light rounded transition-colors"
                                            >
                                                <MapPin className="h-4 w-4 mr-2 text-seo-blue flex-shrink-0" />
                                                <span className="truncate">{city.name}</span>
                                            </Link>
                                        ))}
                                    </div>

                                    {hasMore && (
                                        <div className="mt-3 text-center">
                                            <Button
                                                variant="link"
                                                onClick={() => toggleStateExpansion(state)}
                                                className="text-seo-blue"
                                            >
                                                {isExpanded ? "Show less" : `Show all ${filteredLocations.length} locations`}
                                            </Button>
                                        </div>
                                    )}
                                </div>

                                {state !== "Other Locations" && (
                                    <div className="mt-4 text-right">
                                        <Link href={`/australia/${state.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-seo-blue hover:underline">
                                            All {state} locations
                                        </Link>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 border-b pb-2">Popular Service-Location Combinations</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.slice(0, 6).map(service => (
                        <div key={service.id} className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                            <div className="h-[200px] overflow-y-auto pr-2">
                                <div className="grid grid-cols-1 gap-2">
                                    {majorCities.map(city => {
                                        return (
                                            <Link
                                                key={`${service.slug}-${city.slug}`}
                                                href={`/location/${city.slug}/${service.slug}`}
                                                className="flex items-center text-sm hover:text-seo-blue"
                                            >
                                                <ExternalLink className="h-3 w-3 mr-2 flex-shrink-0" />
                                                <span className="truncate">{service.title} in {city.name}</span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="mt-4 pt-2 border-t text-center">
                                <Link href={`/service/${service.slug}`} className="text-sm text-seo-blue hover:underline">
                                    View all {service.title} services
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-4">All Service-Location Combinations</h3>
                    <p className="text-seo-gray-dark mb-4">
                        We provide specialized SEO services for all {allAustralianCities.length} locations across Australia.
                        Each of our {services.length} services is available in every location, creating a total of {services.length * allAustralianCities.length} unique service-location combinations.
                    </p>
                    <div className="bg-seo-gray-light p-3 rounded mb-4 font-mono text-sm">
                        /location/{"{location-slug}"}/{"{service-slug}"}
                    </div>
                    <p className="text-seo-gray-dark mb-6">
                        For example, to access our services in major Australian cities:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                        {majorCities.slice(0, 6).map(city => (
                            <Link
                                key={city.id}
                                href={`/location/${city.slug}/local-seo`}
                                className="p-2 bg-seo-gray-light rounded hover:bg-seo-gray/20 transition-colors flex items-center"
                            >
                                <ExternalLink className="h-4 w-4 mr-2 text-seo-blue" />
                                <span>/location/{city.slug}/local-seo</span>
                            </Link>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                        {services.slice(0, 6).map(service => {
                            return (
                                <Link
                                    key={service.id}
                                    href={`/location/sydney/${service.slug}`}
                                    className="p-2 bg-seo-gray-light rounded hover:bg-seo-gray/20 transition-colors flex items-center"
                                >
                                    <ExternalLink className="h-4 w-4 mr-2 text-seo-blue" />
                                    <span>/location/sydney/{service.slug}</span>
                                </Link>
                            );
                        })}
                    </div>

                    <Button asChild className="w-full md:w-auto">
                        <Link href="/location-sitemap">
                            View Complete Location Directory
                        </Link>
                    </Button>
                </div>
            </section>
        </>
    );
}
