import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { Search, BarChart, Settings, TrendingUp, FileText, Share2 } from 'lucide-react';

const steps = [
    {
        icon: <Search className="w-8 h-8 text-white" />,
        color: "bg-seo-blue",
        title: "COMPREHENSIVE AUDIT",
        description: "We dive deep into your site architecture to find technical SEO growth leaks."
    },
    {
        icon: <BarChart className="w-8 h-8 text-white" />,
        color: "bg-teal-500",
        title: "STRATEGY DEVELOPMENT",
        description: "A custom 12-month roadmap designed specifically to crush your local market competitors."
    },
    {
        icon: <Settings className="w-8 h-8 text-white" />,
        color: "bg-orange-500",
        title: "ON-PAGE OPTIMIZATION",
        description: "Executing granular title, schema, and structural upgrades for maximum rankability."
    },
    {
        icon: <FileText className="w-8 h-8 text-white" />,
        color: "bg-purple-500",
        title: "CONTENT CREATION",
        description: "Deploying high-quality, intent-matched content that establishes your domain authority."
    },
    {
        icon: <Share2 className="w-8 h-8 text-white" />,
        color: "bg-pink-500",
        title: "LINK BUILDING",
        description: "Acquiring safe, highly authoritative backlinks that serve as a moat around your rankings."
    },
    {
        icon: <TrendingUp className="w-8 h-8 text-white" />,
        color: "bg-seo-navy",
        title: "REPORTING & ANALYSIS",
        description: "Transparent, live dashboards so you see exactly how your revenue and traffic multiplies."
    }
];

const ProcessSection = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10 w-full max-w-7xl">
                <AnimatedSection className="text-center max-w-3xl mx-auto mb-10" animation="fade-in">
                    <h2 className="text-4xl md:text-5xl font-display font-black text-seo-navy mb-6">
                        OUR PROVEN <span className="text-seo-blue">PROCESS</span>
                    </h2>
                    <p className="text-lg text-slate-600 font-medium">
                        A data-driven SEO timeline designed strictly to generate a positive Return on Investment.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                    <div className="hidden lg:block absolute top-[40px] left-0 w-full h-[2px] bg-slate-100 -z-10"></div>

                    {steps.map((step, index) => (
                        <AnimatedSection
                            key={index}
                            className="group relative pt-4"
                            animation="slide-up"
                            delay={index * 100}
                        >
                            <div className="relative h-full bg-white border border-slate-100 shadow-sm rounded-2xl p-8 hover:shadow-xl hover:border-slate-200 transition-all duration-300 mt-6 md:mt-0">
                                <div className={`absolute -top-10 left-8 w-20 h-20 rounded-full ${step.color} flex items-center justify-center shadow-lg border-4 border-white transform group-hover:scale-110 transition-transform duration-300 z-20`}>
                                    {step.icon}
                                </div>
                                
                                <div className="absolute top-4 right-6 text-6xl font-display font-black text-slate-100 group-hover:text-slate-200 transition-colors pointer-events-none">
                                    0{index + 1}
                                </div>

                                <div className="pt-10">
                                    <h3 className="text-base font-black text-seo-navy mb-3 line-clamp-1">{step.title}</h3>
                                    <p className="text-slate-500 font-medium leading-relaxed">
                                        {step.description}
                                    </p>
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
