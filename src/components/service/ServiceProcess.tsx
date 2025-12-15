'use client';

import React from 'react';
import { ProcessStep } from '@/lib/data';
import AnimatedSection from '@/components/AnimatedSection';
import { ArrowRight } from 'lucide-react';

interface ServiceProcessProps {
    steps: ProcessStep[];
}

const ServiceProcess = ({ steps }: ServiceProcessProps) => {
    if (!steps || steps.length === 0) return null;

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
                    <span className="text-seo-blue font-semibold tracking-wider uppercase text-sm">Our Process</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mt-2 mb-6">
                        The 4-Step Blueprint to Dominance
                    </h2>
                    <p className="text-lg text-seo-gray-dark">
                        We don't guess. We follow a battle-tested framework that has generated millions in revenue for our clients.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-seo-blue/0 via-seo-blue/20 to-seo-blue/0 z-0"></div>

                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <AnimatedSection
                                key={index}
                                className="relative z-10"
                                animation="fade-in-up"
                                delay={index * 100}
                            >
                                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-seo-blue to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 mb-6 mx-auto lg:mx-0">
                                        <Icon className="w-8 h-8" />
                                    </div>

                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs font-bold">
                                            {index + 1}
                                        </span>
                                        <h3 className="text-xl font-bold text-seo-dark">{step.title}</h3>
                                    </div>

                                    <p className="text-seo-gray-dark leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </AnimatedSection>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServiceProcess;
