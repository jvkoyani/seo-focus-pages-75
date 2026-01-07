
import React from 'react';

import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import ServiceBlogTemplate from '@/components/ServiceBlogTemplate';
import LocationBreadcrumbs from '@/components/LocationBreadcrumbs';
import { services, locations } from '@/lib/data';
import { serviceBlogContents } from '@/lib/service-blog-data';
import { australianCities } from '@/lib/locationData';

interface PageProps {
    params: Promise<{
        slug: string;
        locationSlug: string;
    }>;
}

export async function generateStaticParams() {
    const params = [];
    for (const city of australianCities) {
        for (const service of services) {
            params.push({
                slug: service.slug,
                locationSlug: city.slug,
            });
        }
    }
    return params;
}

export default async function ServiceLocationBlogPage({ params }: PageProps) {

    const { slug, locationSlug } = await params;

    // Find the service based on slug
    const service = services.find(s => s.slug === slug);

    // Get blog content based on service type
    const blogContent = serviceBlogContents[slug as keyof typeof serviceBlogContents];

    // Find location
    const location = locations.find(loc => loc.slug === locationSlug);

    if (!service || !blogContent || !location) {
        return notFound();
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <div className="mb-6">
                        <LocationBreadcrumbs locationSlug={locationSlug} serviceSlug={slug} />
                    </div>

                    <ServiceBlogTemplate
                        title={blogContent.title}
                        locationName={location.name}
                        content={blogContent.content}
                        publishDate={blogContent.publishDate}
                        author={blogContent.author}
                        tags={blogContent.tags}
                        serviceSlug={slug}
                        locationSlug={locationSlug}
                    />
                </div>
            </main>

            <ContactForm />
            <Footer />
        </div>
    );
}
