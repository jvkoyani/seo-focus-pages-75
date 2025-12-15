'use client';

import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { BookOpen } from 'lucide-react';

interface ServiceContentProps {
    content: {
        title: string;
        sections: { title: string; content: string }[];
    };
}

const ServiceContent = ({ content }: ServiceContentProps) => {
    if (!content) return null;

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <AnimatedSection className="mb-12 text-center" animation="fade-in">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
                            <BookOpen className="w-4 h-4" />
                            <span>Deep Dive Guide</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark">
                            {content.title}
                        </h2>
                    </AnimatedSection>

                    <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-seo-blue prose-img:rounded-xl">
                        {content.sections.map((section, index) => (
                            <AnimatedSection key={index} animation="fade-in-up" delay={index * 100} className="mb-12">
                                <h3 className="text-2xl font-bold text-seo-dark mb-4 relative pl-6">
                                    <span className="absolute left-0 top-1 w-1 h-6 bg-seo-blue rounded-full"></span>
                                    {section.title}
                                </h3>
                                <div className="text-seo-gray-dark leading-relaxed bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                    {section.content}
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceContent;
