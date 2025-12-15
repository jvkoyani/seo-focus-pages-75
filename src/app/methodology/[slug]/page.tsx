
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
    ArrowRight, Search, BarChart, Users, Target, PlaneLanding, Calendar,
    Settings, FileText, Link as LinkIcon, Code, LineChart, RefreshCw, TrendingUp, CheckCircle
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import AnimatedSection from '@/components/AnimatedSection';
import Hero from '@/components/Hero';
import { methodologies } from '@/lib/methodology-data';

// Map icon names to components
const iconMap: Record<string, React.ElementType> = {
    Search,
    BarChart,
    Users,
    Target,
    PlaneLanding,
    Calendar,
    Settings,
    FileText,
    LinkIcon,
    Code,
    LineChart,
    RefreshCw,
    TrendingUp
};

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const methodology = methodologies.find(m => m.slug === slug);

    if (!methodology) {
        return {
            title: 'Methodology Not Found',
        };
    }

    return {
        title: `${methodology.title} | Cambay Industries`,
        description: methodology.subtitle,
    };
}

export default async function MethodologyPage({ params }: PageProps) {
    const { slug } = await params;
    const methodology = methodologies.find(m => m.slug === slug);

    if (!methodology) {
        return notFound();
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <Hero
                title={methodology.title}
                subtitle={methodology.subtitle}
                backgroundImage={methodology.heroImage}
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="max-w-4xl mx-auto" animation="fade-in">
                        <h2 className="text-3xl font-display font-bold text-seo-dark mb-6">
                            {methodology.processTitle}
                        </h2>
                        <p className="text-lg text-seo-gray-dark mb-8">
                            {methodology.processDescription}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            {methodology.steps.map((step, index) => {
                                const IconComponent = iconMap[step.icon] || Search;
                                return (
                                    <div key={index} className="bg-seo-gray-light p-8 rounded-xl">
                                        <IconComponent className="h-10 w-10 text-seo-blue mb-4" />
                                        <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-seo-gray-dark">
                                            {step.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="bg-seo-blue/10 p-8 rounded-xl mb-12">
                            <h3 className="text-xl font-display font-bold text-seo-dark mb-4">
                                The Outcome
                            </h3>
                            <p className="text-seo-gray-dark mb-4">
                                {methodology.outcome.description}
                            </p>
                            <ul className="space-y-2 mb-6">
                                {methodology.outcome.items.map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-seo-blue mt-0.5 mr-2 flex-shrink-0" />
                                        <span className="text-seo-gray-dark">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="text-center">
                            <Link
                                href="/free-consultation"
                                className="inline-flex items-center bg-seo-blue hover:bg-seo-blue-light text-white font-medium py-3 px-6 rounded-md transition-colors"
                            >
                                <span>{methodology.ctaText}</span>
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            <ContactForm />
            <Footer />
        </div>
    );
}
