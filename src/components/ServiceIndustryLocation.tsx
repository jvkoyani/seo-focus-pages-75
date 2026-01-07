"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import {
    ArrowRight, MapPin, TrendingUp, BarChart,
    CheckCircle, Award, Users, Target, Star,
    Building, Globe, Phone, ChevronRight, Zap
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import ResourcesSection from '@/components/ResourcesSection';
import Services from '@/components/Services';
import InfoCard from '@/components/InfoCard';
import ProcessSection from '@/components/ProcessSection';
import FAQSection from '@/components/FAQSection';
import LocalSEOGuideSection from '@/components/LocalSEOGuideSection';
import IndustriesSection from '@/components/IndustriesSection';
import CaseStudyPreview from '@/components/CaseStudyPreview';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { caseStudyTemplates } from '@/lib/data';
import TrustIndicators from '@/components/TrustIndicators';
import ServicePricing from '@/components/service/ServicePricing';

interface ServiceData {
    id: string;
    title: string;
    slug: string;
    description: string;
    features: string[];
    benefits?: string[];
}

interface IndustryData {
    title: string;
    slug: string;
    description: string;
    benefits: string[];
    icon?: any;
    pricing?: any[];
}

interface ServiceIndustryLocationProps {
    service: ServiceData;
    industry: IndustryData;
    cityName: string;
    locationSlug: string;
}

const ServiceIndustryLocation = ({ service, industry, cityName, locationSlug }: ServiceIndustryLocationProps) => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [service, industry, cityName]);

    // Helper to pluralize industry title if needed (e.g. "Lawyer" -> "Lawyers")
    const pluralIndustry = industry.title.endsWith('s') ? industry.title : `${industry.title}s`;

    // Helper to get industry name without "SEO" (e.g. "Real Estate SEO" -> "Real Estate")
    const industryName = industry.title.replace(/ SEO$/i, '');
    const industryBusiness = `${industryName} Business`;

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />

            {/* Hero Section - Energetic & Slick */}
            <section className="pt-32 pb-24 bg-slate-900 relative overflow-hidden">
                {/* Dynamic Background Elements */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-seo-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <AnimatedSection className="mb-8" animation="fade-in">
                        <div className="inline-flex items-center space-x-2 text-sm text-slate-400 bg-slate-800/50 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-700">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <ChevronRight className="h-3 w-3" />
                            <Link href={`/${locationSlug}`} className="hover:text-white transition-colors">{cityName}</Link>
                            <ChevronRight className="h-3 w-3" />
                            <span className="text-seo-blue font-medium">{service.title} for {industryBusiness}</span>
                        </div>
                    </AnimatedSection>

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <AnimatedSection className="lg:w-3/5" animation="fade-in-right">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-500/20 text-green-400 border border-green-500/30">
                                    <Zap className="h-3 w-3 mr-1" />
                                    #1 {service.title} for {pluralIndustry}
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">
                                    <Star className="h-3 w-3 mr-1" />
                                    Top Rated in {cityName}
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight tracking-tight">
                                {service.title} for <span className="text-transparent bg-clip-text bg-gradient-to-r from-seo-blue to-purple-400">{industryBusiness}</span> in <span className="text-transparent bg-clip-text bg-gradient-to-r from-seo-blue to-purple-400">{cityName}</span>
                            </h1>

                            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                                Specialized {service.title.toLowerCase()} strategies designed specifically for {pluralIndustry.toLowerCase()} in {cityName}. Drive more qualified leads and grow your practice.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-seo-blue hover:bg-seo-blue-light text-white h-14 px-8 text-lg rounded-full shadow-lg shadow-seo-blue/25 transition-all hover:scale-105">
                                    <Link href="/free-consultation" className="flex items-center">
                                        Get Your Free Audit
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 h-14 px-8 text-lg rounded-full backdrop-blur-sm transition-all duration-300">
                                    <Link href="/case-studies">
                                        View Our Results
                                    </Link>
                                </Button>
                            </div>

                            <div className="mt-10 flex items-center gap-6 text-sm text-slate-400">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span>Specialized for {pluralIndustry}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span>Proven {cityName} Results</span>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-in-left" delay={200} className="lg:w-2/5 w-full">
                            <div className="relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-seo-blue to-purple-600 rounded-2xl blur opacity-75 animate-pulse"></div>
                                <Card className="bg-slate-900 border-slate-800 relative rounded-2xl overflow-hidden shadow-2xl">
                                    <CardContent className="p-8">
                                        <div className="flex items-center justify-between mb-8">
                                            <div>
                                                <h3 className="text-2xl font-bold text-white">Free {industry.title} Audit</h3>
                                                <p className="text-slate-400 text-sm">Value $500 • Limited Time</p>
                                            </div>
                                            <div className="h-12 w-12 bg-seo-blue/20 rounded-full flex items-center justify-center">
                                                <BarChart className="h-6 w-6 text-seo-blue" />
                                            </div>
                                        </div>

                                        <div className="space-y-4 mb-8">
                                            <div className="flex items-start gap-3">
                                                <div className="mt-1 bg-green-500/20 p-1 rounded-full">
                                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                                </div>
                                                <div>
                                                    <h4 className="text-white font-medium">Technical Analysis</h4>
                                                    <p className="text-slate-400 text-sm">Identify site speed & crawl issues</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="mt-1 bg-green-500/20 p-1 rounded-full">
                                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                                </div>
                                                <div>
                                                    <h4 className="text-white font-medium">Competitor Spy</h4>
                                                    <p className="text-slate-400 text-sm">See what other {cityName} {pluralIndustry.toLowerCase()} are doing</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="mt-1 bg-green-500/20 p-1 rounded-full">
                                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                                </div>
                                                <div>
                                                    <h4 className="text-white font-medium">Growth Roadmap</h4>
                                                    <p className="text-slate-400 text-sm">Step-by-step plan to rank #1</p>
                                                </div>
                                            </div>
                                        </div>

                                        <Button className="w-full bg-white text-slate-900 hover:bg-gray-100 font-bold h-12 text-lg">
                                            <Link href="/seo-audit">
                                                Claim Your Free Audit Now
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Stats / Trust Strip */}
            <TrustIndicators />

            {/* Why Industry Needs Service in City */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
                            Local Market Insights
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6">
                            Why {pluralIndustry} in {cityName} Need <span className="text-transparent bg-clip-text bg-gradient-to-r from-seo-blue to-purple-500">{service.title}</span>
                        </h2>
                        <p className="text-xl text-seo-gray-dark">
                            The {industry.title.toLowerCase()} market in {cityName} is competitive. Here is why you can't afford to be invisible.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <InfoCard
                            title="High Competition"
                            description={`The ${cityName} ${industry.title.toLowerCase()} market is saturated. SEO is your only way to stand out without burning cash on ads.`}
                            icon={<Building className="w-full h-full" />}
                            animation="fade-in"
                            delay={100}
                            iconBackground="bg-purple-100"
                            iconColor="text-purple-600"
                        />

                        <InfoCard
                            title="Smart Consumers"
                            description={`${cityName} locals research ${pluralIndustry.toLowerCase()} online before booking. If you're not there, you don't exist to them.`}
                            icon={<Users className="w-full h-full" />}
                            animation="fade-in"
                            delay={200}
                            iconBackground="bg-blue-100"
                            iconColor="text-blue-600"
                        />

                        <InfoCard
                            title="Hyper-Local Targeting"
                            description={`Capture clients in specific ${cityName} suburbs who are looking for ${pluralIndustry.toLowerCase()} right now.`}
                            icon={<Globe className="w-full h-full" />}
                            animation="fade-in"
                            delay={300}
                            iconBackground="bg-green-100"
                            iconColor="text-green-600"
                        />

                        <InfoCard
                            title="Long-Term Asset"
                            description={`Unlike ads that stop when you stop paying, SEO builds a permanent digital asset for your ${industry.title} practice.`}
                            icon={<TrendingUp className="w-full h-full" />}
                            animation="fade-in"
                            delay={400}
                            iconBackground="bg-orange-100"
                            iconColor="text-orange-600"
                        />
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <ProcessSection />

            {/* Local SEO Guide Section */}
            <LocalSEOGuideSection locationName={cityName} />

            {/* Our Services Section */}
            <Services
                location={cityName}
                locationSlug={locationSlug}
                title={<>Specialised service we serve in <span className="text-seo-blue">{cityName}</span></>}
            />

            {/* Industries Section */}
            <IndustriesSection locationName={cityName} locationSlug={locationSlug} />

            {/* Dynamic Case Studies Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-green-100 text-green-700 mb-4">
                            Real Results
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
                            Success Stories from <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">{cityName} Businesses</span>
                        </h2>
                        <p className="text-lg text-seo-gray-dark">
                            See how we've helped local businesses in {cityName} dominate their market.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {caseStudyTemplates.map((template, index) => {
                            // Create a localized copy of the template
                            const localizedCaseStudy = {
                                ...template,
                                title: template.title.replace(/{City}/g, cityName),
                                client: template.client.replace(/{City}/g, cityName),
                                challenge: template.challenge.replace(/{City}/g, cityName),
                                solution: template.solution.replace(/{City}/g, cityName),
                                results: template.results.map(r => r.replace(/{City}/g, cityName)),
                                // Create a dynamic slug: template-slug + location-slug
                                slug: `${template.slug}-${locationSlug}`
                            };

                            return (
                                <CaseStudyPreview
                                    key={template.id}
                                    caseStudy={localizedCaseStudy}
                                    delay={index * 100}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <AnimatedSection className="lg:w-1/2" animation="fade-in-right">
                            <div className="relative">
                                <div className="absolute -left-10 -top-10 w-72 h-72 bg-seo-blue/5 rounded-full blur-3xl"></div>
                                <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-purple-100 rounded-full blur-3xl"></div>

                                <h2 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-8 relative z-10">
                                    Why We're the Best Choice for <span className="text-transparent bg-clip-text bg-gradient-to-r from-seo-blue to-purple-600">{pluralIndustry}</span> in {cityName}
                                </h2>
                                <p className="text-lg text-seo-gray-dark mb-10 relative z-10">
                                    We don't just do "SEO". We build revenue-generating engines for {industry.title.toLowerCase()} businesses.
                                </p>

                                <div className="space-y-8 relative z-10">
                                    <div className="flex group">
                                        <div className="flex-shrink-0 mr-6">
                                            <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                                                <MapPin className="w-7 h-7 text-seo-blue" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-seo-dark mb-2">Deep Local Knowledge</h3>
                                            <p className="text-seo-gray-dark">
                                                We know {cityName} inside out. We know what locals search for and how to convert them.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex group">
                                        <div className="flex-shrink-0 mr-6">
                                            <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                                                <BarChart className="w-7 h-7 text-purple-600" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-seo-dark mb-2">Transparent ROI Reporting</h3>
                                            <p className="text-seo-gray-dark">
                                                No fluff. Just clear reports showing traffic, rankings, and most importantly, leads generated.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex group">
                                        <div className="flex-shrink-0 mr-6">
                                            <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                                                <Target className="w-7 h-7 text-green-600" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-seo-dark mb-2">Sniper-Focused Strategy</h3>
                                            <p className="text-seo-gray-dark">
                                                We don't guess. We use advanced tools to identify the highest-value keywords for your specific niche.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection className="lg:w-1/2" animation="fade-in-left">
                            <div className="bg-white p-2 rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-seo-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                                    <h3 className="text-3xl font-display font-bold text-white mb-6 relative z-10">
                                        Ready to Dominate?
                                    </h3>
                                    <p className="text-slate-300 mb-8 relative z-10">
                                        Your competitors in {cityName} are already investing in SEO. Don't get left behind.
                                    </p>

                                    <div className="space-y-4 relative z-10">
                                        <Button className="w-full bg-seo-blue hover:bg-seo-blue-light text-white py-6 text-lg rounded-xl shadow-lg shadow-seo-blue/20">
                                            <Link href="/seo-audit" className="w-full h-full flex items-center justify-center">
                                                Get Your Free Audit
                                            </Link>
                                        </Button>
                                        <Button variant="outline" className="w-full border-slate-700 text-white hover:bg-white/10 py-6 text-lg rounded-xl">
                                            <Link href="/contact" className="w-full h-full flex items-center justify-center">
                                                <Phone className="mr-2 h-5 w-5" />
                                                Talk to an Expert
                                            </Link>
                                        </Button>
                                    </div>

                                    <p className="text-xs text-slate-500 mt-6">
                                        Limited spots available for new clients in {cityName}.
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            {industry.pricing && <ServicePricing tiers={industry.pricing} />}

            {/* FAQ Section */}
            <FAQSection locationName={cityName} serviceName={service.title} industryName={industryName} />

            <ContactForm />
            <Footer />
        </div>
    );
};

export default ServiceIndustryLocation;
