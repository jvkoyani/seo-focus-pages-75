import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { industries } from '@/lib/data';
import Link from 'next/link';
import { ArrowRight, Building2 } from 'lucide-react';

interface IndustriesSectionProps {
    locationName: string;
    locationSlug: string;
}

const IndustriesSection = ({ locationName, locationSlug }: IndustriesSectionProps) => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-500 border border-blue-500/20 mb-4">
                        <Building2 className="w-3 h-3 mr-2" />
                        Industries We Serve
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
                        Specialized SEO for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{locationName} Industries</span>
                    </h2>
                    <p className="text-lg text-seo-gray-dark">
                        We understand that every industry is unique. Our SEO strategies are tailored to the specific needs of your business sector in {locationName}.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {industries.map((industry, index) => {
                        const Icon = industry.icon;
                        return (
                            <AnimatedSection
                                key={index}
                                className="h-full"
                                animation="slide-up"
                                delay={index * 50}
                            >
                                <Link
                                    href={`/${industry.slug}-in-${locationSlug}`}
                                    className="block h-full bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-seo-blue/30 transition-all group"
                                >
                                    <div className="mb-4 p-3 bg-gray-50 rounded-lg w-fit group-hover:bg-seo-blue/5 transition-colors">
                                        <Icon className="w-8 h-8 text-seo-blue group-hover:scale-110 transition-transform" />
                                    </div>
                                    <h3 className="text-xl font-bold text-seo-dark mb-2 group-hover:text-seo-blue transition-colors">
                                        {industry.title}
                                    </h3>
                                    <p className="text-sm text-seo-gray-dark mb-4">
                                        {industry.description}
                                    </p>
                                    <div className="flex items-center text-sm font-semibold text-seo-blue opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                        View Strategy <ArrowRight className="ml-1 w-4 h-4" />
                                    </div>
                                </Link>
                            </AnimatedSection>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;
