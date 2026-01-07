
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import ServiceBlogTemplate from '@/components/ServiceBlogTemplate';
import { ChevronRight } from 'lucide-react';
import { services } from '@/lib/data';
import { serviceBlogContents } from '@/lib/service-blog-data';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServiceBlogPage({ params }: PageProps) {

    const { slug } = await params;

    // Find the service based on slug
    const service = services.find(s => s.slug === slug);

    // Get blog content based on service type
    const blogContent = serviceBlogContents[slug as keyof typeof serviceBlogContents];

    if (!service || !blogContent) {
        return notFound();
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <div className="mb-6">
                        <div className="flex items-center text-sm text-seo-gray-dark">
                            <Link
                                href="/"
                                className="hover:text-seo-blue transition-colors"
                            >
                                Home
                            </Link>
                            <ChevronRight className="h-4 w-4 mx-1 text-seo-gray-medium" />
                            <Link
                                href="/blogs"
                                className="hover:text-seo-blue transition-colors"
                            >
                                Blogs
                            </Link>
                            <ChevronRight className="h-4 w-4 mx-1 text-seo-gray-medium" />
                            <span className="text-seo-blue font-medium">
                                {service.title} Blog
                            </span>
                        </div>
                    </div>

                    <ServiceBlogTemplate
                        title={blogContent.title}
                        content={blogContent.content}
                        publishDate={blogContent.publishDate}
                        author={blogContent.author}
                        tags={blogContent.tags}
                        serviceSlug={slug}
                    />
                </div>
            </main>

            <ContactForm />
            <Footer />
        </div>
    );
}
