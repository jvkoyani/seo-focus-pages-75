'use client';

import React from 'react';
import { ComparisonPoint } from '@/lib/data';
import AnimatedSection from '@/components/AnimatedSection';
import { Check, X, Minus } from 'lucide-react';

interface ServiceComparisonProps {
    points: ComparisonPoint[];
}

const ServiceComparison = ({ points }: ServiceComparisonProps) => {
    if (!points || points.length === 0) return null;

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
                        Why We're Different
                    </h2>
                    <p className="text-lg text-seo-gray-dark">
                        Most agencies sell "packages". We sell outcomes. See how we stack up against the alternatives.
                    </p>
                </AnimatedSection>

                <AnimatedSection animation="fade-in-up">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[800px] bg-white rounded-2xl shadow-xl overflow-hidden">
                            <thead>
                                <tr className="bg-slate-900 text-white">
                                    <th className="py-6 px-8 text-left text-lg font-bold w-1/4">Feature</th>
                                    <th className="py-6 px-8 text-center text-xl font-bold bg-seo-blue w-1/4 relative">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-white/20"></div>
                                        Us (SEO Focus)
                                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-seo-blue rotate-45"></div>
                                    </th>
                                    <th className="py-6 px-8 text-center text-lg font-medium text-slate-400 w-1/4">Cheap Agencies</th>
                                    <th className="py-6 px-8 text-center text-lg font-medium text-slate-400 w-1/4">DIY / In-House</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {points.map((point, index) => (
                                    <tr key={index} className="hover:bg-slate-50 transition-colors">
                                        <td className="py-6 px-8 font-bold text-slate-700">{point.feature}</td>

                                        {/* Us */}
                                        <td className="py-6 px-8 text-center bg-blue-50/30 border-x border-blue-100">
                                            <div className="flex items-center justify-center gap-2 font-bold text-seo-blue">
                                                <Check className="w-5 h-5" />
                                                {point.us}
                                            </div>
                                        </td>

                                        {/* Others */}
                                        <td className="py-6 px-8 text-center text-slate-500">
                                            <div className="flex items-center justify-center gap-2">
                                                <Minus className="w-5 h-5 text-slate-300" />
                                                {point.others}
                                            </div>
                                        </td>

                                        {/* DIY */}
                                        <td className="py-6 px-8 text-center text-slate-500">
                                            <div className="flex items-center justify-center gap-2">
                                                <X className="w-5 h-5 text-red-400" />
                                                {point.diy}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default ServiceComparison;
