
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { ChevronRight } from 'lucide-react';
import SitemapClient from '@/components/SitemapClient';

export const metadata = {
    title: 'Sitemap | Navigate Our Website',
    description: 'Find all our SEO services, location pages, blog posts and resources in one place. Complete directory of our website.',
};

export default function SitemapPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <AnimatedSection animation="fade-in">
                        <div className="inline-flex items-center text-sm text-seo-gray-dark mb-6">
                            <Link href="/" className="hover:text-seo-blue transition-colors">Home</Link>
                            <ChevronRight className="h-4 w-4 mx-2" />
                            <span>Sitemap</span>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animation="fade-in">
                        <h1 className="text-4xl font-display font-bold text-seo-dark mb-8 text-center">
                            Complete Site Map
                        </h1>
                        <p className="text-lg text-center text-seo-gray-dark max-w-3xl mx-auto mb-12">
                            Browse our comprehensive sitemap to find all pages and services available across Australia.
                        </p>
                    </AnimatedSection>

                    <SitemapClient />

                    <section>
                        <div className="bg-seo-blue-light/10 rounded-xl p-8 text-center">
                            <h2 className="text-2xl font-bold mb-4">Looking for Something Specific?</h2>
                            <p className="mb-6 text-seo-gray-dark">
                                If you can't find what you're looking for, feel free to contact us directly.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-seo-blue text-white px-6 py-3 rounded-md hover:bg-seo-blue-light transition-colors"
                                >
                                    Contact Us
                                </Link>
                                <Link
                                    href="/free-consultation"
                                    className="bg-white border border-seo-blue text-seo-blue px-6 py-3 rounded-md hover:bg-seo-blue/5 transition-colors"
                                >
                                    Get a Free Consultation
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
