"use client";

import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { Search, BarChart, Settings, TrendingUp, FileText, Share2 } from 'lucide-react';

const steps = [
    {
        icon: <Search className="w-8 h-8 text-seo-blue" />,
        title: "Comprehensive Audit",
        description: "We start with a deep dive into your current website performance, identifying technical issues and opportunities."
    },
    {
        icon: <BarChart className="w-8 h-8 text-purple-500" />,
        title: "Strategy Development",
        description: "We create a custom roadmap tailored to your business goals and local market competition."
    },
    {
        icon: <Settings className="w-8 h-8 text-green-500" />,
        title: "On-Page Optimization",
        description: "Optimizing your content, meta tags, and structure to make your site loved by search engines."
    },
    {
        icon: <FileText className="w-8 h-8 text-orange-500" />,
        title: "Content Creation",
        description: "Developing high-quality, relevant content that establishes your authority and engages visitors."
    },
    {
        icon: <Share2 className="w-8 h-8 text-pink-500" />,
        title: "Link Building",
        description: "Acquiring high-quality backlinks to boost your domain authority and search rankings."
    },
    {
        icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
        title: "Reporting & Analysis",
        description: "Regular updates and transparent reporting so you can see exactly how your traffic is growing."
    }
];

const ProcessSection = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
                    <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
                        Our Methodology
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                        Our Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SEO Process</span>
                    </h2>
                    <p className="text-lg text-slate-400">
                        A data-driven approach to dominating local search results
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -z-10 transform -translate-y-1/2"></div>

                    {steps.map((step, index) => (
                        <AnimatedSection
                            key={index}
                            className="group relative"
                            animation="slide-up"
                            delay={index * 100}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-lg shadow-black/20 mx-auto md:mx-0 group-hover:scale-110 transition-transform duration-300">
                                    {React.cloneElement(step.icon as React.ReactElement<{ className?: string }>, { className: "w-8 h-8 text-blue-400" })}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 text-center md:text-left">{step.title}</h3>
                                <p className="text-slate-400 text-center md:text-left leading-relaxed">
                                    {step.description}
                                </p>
                                <div className="absolute top-4 right-4 text-6xl font-bold text-white/5 -z-10 select-none font-display">
                                    {index + 1}
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
