"use client";

import React from 'react';
import Link from 'next/link';
import {
    ArrowRight, MapPin, TrendingUp, BarChart,
    CheckCircle, Award, Users, Target, Star,
    Compass, Building, ShoppingBag,
    Phone, ChevronRight, Globe, Lightbulb, Zap, Trophy,
    Briefcase, Shield, Map as MapIcon, Search,
    Settings, FileText, Link as LinkIcon, ShoppingCart
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import ServicePricing from '@/components/service/ServicePricing';
import FAQSection from '@/components/FAQSection';
import CaseStudyPreview from '@/components/CaseStudyPreview';
import TrustIndicators from '@/components/TrustIndicators';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { LocationData, ServiceData, IndustryData, caseStudies, services } from '@/lib/data';

interface IndustryLocationPageTemplateProps {
    industryData: Omit<IndustryData, 'icon'>;
    locationData: LocationData;
}

const iconMap: Record<string, React.ReactNode> = {
    'map-pin': <MapPin className="w-7 h-7 text-seo-blue" />,
    'settings': <Settings className="w-7 h-7 text-seo-blue" />,
    'file-text': <FileText className="w-7 h-7 text-seo-blue" />,
    'link': <LinkIcon className="w-7 h-7 text-seo-blue" />,
    'shopping-cart': <ShoppingCart className="w-7 h-7 text-seo-blue" />,
    'bar-chart': <BarChart className="w-7 h-7 text-seo-blue" />
};

const IndustryLocationPageTemplate = ({ industryData, locationData }: IndustryLocationPageTemplateProps) => {
    // Filter case studies for this industry if available, otherwise generic
    const relevantCaseStudies = caseStudies
        .filter(cs => cs.industry === industryData.title || cs.location === locationData.name)
        .slice(0, 3);

    return (
        <div className="min-h-screen flex flex-col font-sans bg-slate-50">
            <Navbar />

            {/* Hero Section - Industry Focused */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-slate-950">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20">
                    <div className="aspect-square h-96 rounded-full bg-seo-blue"></div>
                </div>
                <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 blur-3xl opacity-20">
                    <div className="aspect-square h-96 rounded-full bg-purple-500"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <AnimatedSection className="mb-8" animation="fade-in">
                        <div className="inline-flex items-center space-x-2 text-sm text-slate-400 bg-slate-800/50 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-700">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <ChevronRight className="h-3 w-3" />
                            <Link href={`/location/${locationData.slug}`} className="hover:text-white transition-colors">{locationData.name}</Link>
                            <ChevronRight className="h-3 w-3" />
                            <span className="text-seo-blue font-medium">{industryData.title}</span>
                        </div>
                    </AnimatedSection>

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <AnimatedSection className="lg:w-3/5" animation="fade-in-right">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-seo-blue/10 text-seo-blue border border-seo-blue/20">
                                    <MapPin className="h-3 w-3 mr-1" />
                                    {locationData.name} {industryData.title} Experts
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-500/10 text-green-400 border border-green-500/20">
                                    <Star className="h-3 w-3 mr-1" />
                                    Specialized Strategy
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight tracking-tight">
                                Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-seo-blue to-purple-400">{industryData.title}</span> in {locationData.name}
                            </h1>

                            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                                {industryData.description} tailored specifically for the {locationData.name} market. We help {industryData.entityName?.toLowerCase() || industryData.title.toLowerCase()} dominate local search results.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-seo-blue hover:bg-seo-blue-light text-white h-14 px-8 text-lg rounded-full shadow-lg shadow-seo-blue/25 transition-all hover:scale-105">
                                    <Link href="/free-consultation" className="flex items-center">
                                        Get Free Consultation
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" className="bg-transparent border-slate-600 text-white hover:bg-white/10 h-14 px-8 text-lg rounded-full backdrop-blur-sm">
                                    <Link href="#services">
                                        View Our Services
                                    </Link>
                                </Button>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-in-left" delay={200} className="lg:w-2/5 w-full">
                            <Card className="bg-slate-900 border-slate-800 relative rounded-2xl overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-seo-blue/10 to-purple-500/10"></div>
                                <CardContent className="p-8 relative">
                                    <div className="flex items-center justify-between mb-8">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white">Grow Your Practice</h3>
                                            <p className="text-slate-400 text-sm">In {locationData.name}</p>
                                        </div>
                                        <div className="h-12 w-12 bg-seo-blue/20 rounded-full flex items-center justify-center">
                                            <TrendingUp className="h-6 w-6 text-seo-blue" />
                                        </div>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-start gap-3">
                                            <div className="mt-1 bg-green-500/20 p-1 rounded-full">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-medium">Targeted Local Traffic</h4>
                                                <p className="text-slate-400 text-sm">Reach customers in {locationData.name} actively looking for you.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="mt-1 bg-green-500/20 p-1 rounded-full">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-medium">Industry Expertise</h4>
                                                <p className="text-slate-400 text-sm">We understand the nuances of {industryData.title}.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="mt-1 bg-green-500/20 p-1 rounded-full">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-medium">Proven ROI</h4>
                                                <p className="text-slate-400 text-sm">Strategies focused on generating leads and revenue.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <Button className="w-full bg-white text-slate-900 hover:bg-gray-100 font-bold h-12 text-lg">
                                        <Link href="/seo-audit">
                                            Start Your Growth
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <TrustIndicators />

            {/* Services Grid - The Funnel */}
            <section id="services" className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-500 border border-blue-500/20 mb-4">
                            <Briefcase className="w-3 h-3 mr-2" />
                            Comprehensive Solutions
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
                            Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{industryData.title} Services</span> in {locationData.name}
                        </h2>
                        <p className="text-lg text-seo-gray-dark">
                            Everything you need to dominate the {locationData.name} market. Choose a service to learn more.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <AnimatedSection key={service.id} delay={index * 100} className="h-full">
                                <Link href={`/${service.slug}-for-${industryData.slug}-in-${locationData.slug}`} className="group block h-full">
                                    <Card className="h-full hover:shadow-xl transition-all duration-300 border-slate-200 group-hover:border-seo-blue/50 bg-slate-50 group-hover:bg-white overflow-hidden">
                                        <CardContent className="p-8 flex flex-col h-full">
                                            <div className="w-14 h-14 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-seo-blue/10">
                                                {iconMap[service.icon] || <Zap className="w-7 h-7 text-seo-blue" />}
                                            </div>
                                            <h3 className="text-xl font-bold text-seo-dark mb-3 group-hover:text-seo-blue transition-colors">
                                                {service.title} for {industryData.entityName || industryData.title}
                                            </h3>
                                            <p className="text-seo-gray-dark mb-6 flex-grow">
                                                {service.description} tailored for {industryData.entityName || industryData.title} in {locationData.name}.
                                            </p>
                                            <div className="mt-auto flex items-center text-sm font-bold text-seo-blue group-hover:translate-x-2 transition-transform">
                                                Learn More <ArrowRight className="w-4 h-4 ml-2" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>


            {/* Why Industry Needs SEO in Location */}
            < section className="py-20 bg-slate-50" >
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
                            Why {industryData.entityName || industryData.title} in {locationData.name} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Need SEO</span>
                        </h2>
                        <p className="text-lg text-seo-gray-dark">
                            The {industryData.entityName || industryData.title} market in {locationData.name} is competitive. To stand out, you need a strategy that understands your specific challenges.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {industryData.whyNeedSeo ? (
                            industryData.whyNeedSeo.map((item, index) => {
                                const Icon = item.icon === 'Target' ? Target :
                                    item.icon === 'Shield' ? Shield :
                                        item.icon === 'TrendingUp' ? TrendingUp :
                                            item.icon === 'Users' ? Users :
                                                item.icon === 'Search' ? Search :
                                                    item.icon === 'Map' ? MapIcon : Target;

                                const colorClass = index === 0 ? 'text-blue-600 bg-blue-100' :
                                    index === 1 ? 'text-purple-600 bg-purple-100' :
                                        'text-green-600 bg-green-100';

                                return (
                                    <AnimatedSection key={index} className="p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-lg transition-all" delay={index * 100}>
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${colorClass}`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-seo-dark mb-3">{item.title}</h3>
                                        <p className="text-seo-gray-dark">
                                            {item.description}
                                        </p>
                                    </AnimatedSection>
                                );
                            })
                        ) : (
                            <>
                                <AnimatedSection className="p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-lg transition-all" delay={0}>
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                                        <Target className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-seo-dark mb-3">High Intent Leads</h3>
                                    <p className="text-seo-gray-dark">
                                        Capture customers in {locationData.name} who are actively searching for {industryData.entityName || industryData.title} right now.
                                    </p>
                                </AnimatedSection>
                                <AnimatedSection className="p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-lg transition-all" delay={100}>
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                                        <Shield className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-seo-dark mb-3">Build Trust</h3>
                                    <p className="text-seo-gray-dark">
                                        Establish your brand as the go-to expert for {industryData.entityName || industryData.title} in the {locationData.name} area.
                                    </p>
                                </AnimatedSection>
                                <AnimatedSection className="p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-lg transition-all" delay={200}>
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6 text-green-600">
                                        <TrendingUp className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-seo-dark mb-3">Long-Term Growth</h3>
                                    <p className="text-seo-gray-dark">
                                        Build a sustainable flow of new clients for your {industryData.entityName || industryData.title} in {locationData.name}.
                                    </p>
                                </AnimatedSection>
                            </>
                        )}
                    </div>
                </div>
            </section >

            {/* Case Studies */}
            < section id="case-studies" className="py-20 bg-white" >
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20 mb-4">
                            <Trophy className="w-3 h-3 mr-2" />
                            Proven Results
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">See What We've Achieved</span>
                        </h2>
                        <p className="text-lg text-seo-gray-dark">
                            Real results for {industryData.entityName || industryData.title}.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relevantCaseStudies.length > 0 ? (
                            relevantCaseStudies.map((study, index) => (
                                <CaseStudyPreview key={study.id} caseStudy={study} delay={index * 100} />
                            ))
                        ) : (
                            // Fallback to featured case studies if no specific ones found
                            caseStudies.slice(0, 3).map((study, index) => (
                                <CaseStudyPreview key={study.id} caseStudy={study} delay={index * 100} />
                            ))
                        )}
                    </div>
                </div>
            </section >

            {/* Pricing */}
            {
                industryData.pricing && (
                    <ServicePricing
                        tiers={industryData.pricing}
                        serviceName={`${industryData.entityName || industryData.title} SEO`}
                    />
                )
            }

            {/* FAQs */}
            <FAQSection
                locationName={locationData.name}
                serviceName={`${industryData.title} SEO`}
                industryName={industryData.entityName || industryData.title}
                customFaqs={industryData.faqs}
            />

            <ContactForm />
            <Footer />
        </div >
    );
};

export default IndustryLocationPageTemplate;
