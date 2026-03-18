import React from 'react';

import {
    ArrowRight, MapPin, TrendingUp, BarChart,
    CheckCircle, Award, Users, Target, Star,
    Compass, Building, ShoppingBag,
    Phone, ChevronRight, Globe, Lightbulb, Zap, Trophy
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
import TrustIndicators from '@/components/TrustIndicators';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Location } from '@/lib/locationData';
import ServicePricing from '@/components/service/ServicePricing';
import { services, caseStudyTemplates } from '@/lib/data';
import {
    generatePageClasses, generateSectionClasses, generateHeadingClass,
    generateCTAClass, generateSectionId, generateDivClass
} from '@/lib/classNames';

interface LocationPageTemplateProps {
    locationData: Location;
    injectedCaseStudies?: any[];
    schemaString?: string;
    /** Pre-generated class strings from server component */
    pageClasses?: string;
    heroSectionClasses?: string;
    heroSectionId?: string;
    h1Class?: string;
    primaryCtaClass?: string;
}

const LocationPageTemplate = ({ locationData, injectedCaseStudies, schemaString, pageClasses, heroSectionClasses, heroSectionId, h1Class, primaryCtaClass }: LocationPageTemplateProps) => {
    const localSeoPricing = services.find(s => s.slug === 'local-seo')?.pricing || [];

    // Derive fallback classes if not pre-computed server-side
    const resolvedPageClasses = pageClasses || generatePageClasses({ pageType: 'location-hub', location: locationData.slug });
    const resolvedHeroId = heroSectionId || generateSectionId({ sectionType: 'hero', location: locationData.slug });
    const resolvedHeroClasses = heroSectionClasses || generateSectionClasses({ sectionType: 'hero', location: locationData.slug });
    const resolvedH1Class = h1Class || generateHeadingClass({ level: 1, location: locationData.slug });
    const resolvedPrimaryCtaClass = primaryCtaClass || generateCTAClass({ type: 'primary', location: locationData.slug });

    return (
        <main
            id={`page-seo-${locationData.slug}`}
            className={resolvedPageClasses}
            data-page-type="location-hub"
            data-location={locationData.slug}
        >
            {schemaString && (
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaString }} />
            )}
            <Navbar />

            {/* Hero Section */}
            <section
                id={resolvedHeroId}
                className={`${resolvedHeroClasses} pt-32 pb-24 bg-slate-900 relative overflow-hidden`}
                aria-label={`SEO services in ${locationData.name}`}
                data-section="hero"
            >
                {/* Dynamic Background Elements */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-seo-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

                <div className={`${generateDivClass({ role: 'section-container', section: 'hero', location: locationData.slug })} container mx-auto px-4 relative z-10`}>
                    <AnimatedSection className="mb-8" animation="fade-in">
                        <div className={`${generateDivClass({ role: 'breadcrumb', section: 'hero', location: locationData.slug })} inline-flex items-center space-x-2 text-sm text-slate-400 bg-slate-800/50 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-700`}>
                            <a href="/" className="hover:text-white transition-colors">Home</a>
                            <ChevronRight className="h-3 w-3" />
                            <span className="text-seo-blue font-medium">{locationData.name}</span>
                        </div>
                    </AnimatedSection>

                    <div className={`${generateDivClass({ role: 'hero-content', section: 'hero', location: locationData.slug })} flex flex-col lg:flex-row items-center gap-12 lg:gap-20`}>
                        <AnimatedSection className="lg:w-3/5" animation="fade-in-right">
                            <div className={`${generateDivClass({ role: 'badge-row', section: 'hero', location: locationData.slug })} flex items-center gap-3 mb-6`}>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-500/20 text-green-400 border border-green-500/30">
                                    <Zap className="h-3 w-3 mr-1" />
                                    #1 SEO Agency in {locationData.name}
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">
                                    <Star className="h-3 w-3 mr-1" />
                                    5-Star Rated
                                </span>
                            </div>

                            <h1
                                className={`${resolvedH1Class} text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight tracking-tight`}
                                data-keyword={`SEO ${locationData.name}`}
                            >
                                Dominate <span className="text-transparent bg-clip-text bg-gradient-to-r from-seo-blue to-purple-400">{locationData.name}</span> Search Results
                            </h1>

                            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                                Stop losing customers to competitors. We implement high-impact SEO strategies tailored for the {locationData.name} market to drive traffic, leads, and revenue.
                            </p>

                            <div className={`${generateDivClass({ role: 'cta-group', section: 'hero', location: locationData.slug })} flex flex-col sm:flex-row gap-4`}>
                                <Button size="lg" className="bg-seo-blue hover:bg-seo-blue-light text-white h-14 px-8 text-lg rounded-full shadow-lg shadow-seo-blue/25 transition-all hover:scale-105">
                                    <a
                                        href="/free-consultation"
                                        className={`${resolvedPrimaryCtaClass} flex items-center`}
                                        data-action="get-free-audit"
                                        data-goal="conversion"
                                    >
                                        Get Your Free Audit
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </a>
                                </Button>
                                <Button size="lg" variant="outline" className="bg-transparent border-slate-600 text-white hover:bg-white/10 h-14 px-8 text-lg rounded-full backdrop-blur-sm">
                                    <a href="/case-studies">
                                        View Our Results
                                    </a>
                                </Button>
                            </div>

                            <div className="mt-10 flex items-center gap-6 text-sm text-slate-400">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span>No Lock-in Contracts</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span>Data-Driven Strategy</span>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-in-left" delay={200} className="lg:w-2/5 w-full">
                            <div className={`${generateDivClass({ role: 'hero-card', section: 'hero', location: locationData.slug })} relative`}>
                                <div className="absolute -inset-1 bg-gradient-to-r from-seo-blue to-purple-600 rounded-2xl blur opacity-75 animate-pulse"></div>
                                <Card className="bg-slate-900 border-slate-800 relative rounded-2xl overflow-hidden shadow-2xl">
                                    <CardContent className="p-8">
                                        <div className="flex items-center justify-between mb-8">
                                            <div>
                                                <h3 className="text-2xl font-bold text-white">Free SEO Audit</h3>
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
                                                    <p className="text-slate-400 text-sm">See what your rivals are ranking for</p>
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
                                            <a href="/seo-audit">
                                                Claim Your Free Audit Now
                                            </a>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Trust Indicators Section */}
            <section
                id={`${locationData.slug}-trust-indicators`}
                className={`page-section section-trust-indicators ${locationData.slug}-trust`}
                aria-label={`Why trust Power My SEO in ${locationData.name}`}
                data-section="trust-indicators"
            >
                <TrustIndicators />
            </section>

            {/* Why Businesses Need SEO in Location - Dark Theme */}
            <section
                id={`${locationData.slug}-why-seo`}
                className={`page-section section-why-seo ${locationData.slug}-why-seo py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden`}
                aria-label={`Why ${locationData.name} businesses need SEO`}
                data-section="why-seo"
            >
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
                            Local Market Insights
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            Why {locationData.name} Businesses <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Need SEO</span>
                        </h2>
                        <p className="text-xl text-slate-400">
                            The {locationData.name} digital landscape is evolving. Here's why you can't afford to be invisible.
                        </p>
                    </AnimatedSection>

                    <div className={`${generateDivClass({ role: 'features-grid', section: 'why-seo', location: locationData.slug })} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`}>
                        {[
                            {
                                title: "High Competition",
                                description: `The ${locationData.name} market is saturated. SEO is your only way to stand out without burning cash on ads.`,
                                icon: Building,
                                color: "from-purple-500 to-pink-500"
                            },
                            {
                                title: "Smart Consumers",
                                description: `${locationData.name} locals research online before buying. If you're not there, you don't exist to them.`,
                                icon: Users,
                                color: "from-blue-500 to-cyan-500"
                            },
                            {
                                title: "Hyper-Local Targeting",
                                description: `Capture customers in specific ${locationData.name} suburbs who are ready to purchase right now.`,
                                icon: Globe,
                                color: "from-green-500 to-emerald-500"
                            },
                            {
                                title: "Long-Term Asset",
                                description: `Unlike ads that stop when you stop paying, SEO builds a permanent digital asset for your ${locationData.name} business.`,
                                icon: TrendingUp,
                                color: "from-orange-500 to-amber-500"
                            }
                        ].map((item, index) => (
                            <AnimatedSection key={index} animation="slide-up" delay={index * 100}>
                                <div className="h-full group relative">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                                    <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                            <item.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                        <p className="text-slate-400 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section
                id={`${locationData.slug}-seo-process`}
                className={`page-section section-process ${locationData.slug}-process`}
                aria-label={`Our SEO process for ${locationData.name} businesses`}
                data-section="process"
            >
                <ProcessSection />
            </section>

            {/* Local SEO Guide Section */}
            <section
                id={`${locationData.slug}-local-seo-guide`}
                className={`page-section section-local-guide ${locationData.slug}-guide`}
                aria-label={`Local SEO guide for ${locationData.name}`}
                data-section="local-seo-guide"
            >
                <LocalSEOGuideSection locationName={locationData.name} />
            </section>

            {/* Our Services Section */}
            <section
                id={`${locationData.slug}-services`}
                className={`page-section section-services ${locationData.slug}-services`}
                aria-label={`SEO services in ${locationData.name}`}
                data-section="services"
            >
            <Services
                location={locationData.name}
                locationSlug={locationData.slug}
                title={<>Specialised service we serve in <span className="text-seo-blue">{locationData.name}</span></>}
            />
            </section>

            {/* Industries Section */}
            <section
                id={`${locationData.slug}-industries`}
                className={`page-section section-industries ${locationData.slug}-industries`}
                aria-label={`Industries we serve in ${locationData.name}`}
                data-section="industries"
            >
                <IndustriesSection locationName={locationData.name} locationSlug={locationData.slug} />
            </section>

            {/* Dynamic Case Studies Section */}
            <section
                id={`${locationData.slug}-case-studies`}
                className={`page-section section-case-studies ${locationData.slug}-results py-24 bg-white`}
                aria-label={`SEO success stories from ${locationData.name} businesses`}
                data-section="case-studies"
            >
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20 mb-4">
                            <Trophy className="w-3 h-3 mr-2" />
                            Real Results
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
                            Success Stories from <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">{locationData.name} Businesses</span>
                        </h2>
                        <p className="text-lg text-seo-gray-dark">
                            See how we've helped local businesses in {locationData.name} dominate their market.
                        </p>
                    </AnimatedSection>

                    <div className={`${generateDivClass({ role: 'case-studies-grid', section: 'case-studies', location: locationData.slug })} grid grid-cols-1 md:grid-cols-3 gap-8`}>
                        {(injectedCaseStudies || []).map((template, index) => {
                            return (
                                <CaseStudyPreview
                                    key={template.id}
                                    caseStudy={template}
                                    delay={index * 100}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section
                id={`${locationData.slug}-why-choose-us`}
                className={`page-section section-why-choose-us ${locationData.slug}-why-us py-24 bg-slate-50`}
                aria-label={`Why choose Power My SEO for ${locationData.name}`}
                data-section="why-choose-us"
            >
                <div className="container mx-auto px-4">
                    <div className={`${generateDivClass({ role: 'why-us-grid', section: 'why-choose-us', location: locationData.slug })} flex flex-col lg:flex-row gap-16 items-center`}>
                        <AnimatedSection className="lg:w-1/2" animation="fade-in-right">
                            <div className="relative">
                                <div className="absolute -left-10 -top-10 w-72 h-72 bg-seo-blue/5 rounded-full blur-3xl"></div>
                                <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-purple-100 rounded-full blur-3xl"></div>

                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 mb-4 relative z-10">
                                    <Award className="w-3 h-3 mr-2" />
                                    Why Choose Us
                                </span>
                                <h2 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-8 relative z-10">
                                    Why We're the Best Choice for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">{locationData.name}</span>
                                </h2>
                                <p className="text-lg text-seo-gray-dark mb-10 relative z-10">
                                    We don't just do "SEO". We build revenue-generating engines for {locationData.name} businesses.
                                </p>

                                <div className={`${generateDivClass({ role: 'why-us-features', section: 'why-choose-us', location: locationData.slug })} space-y-8 relative z-10`}>
                                    <div className="flex group">
                                        <div className="flex-shrink-0 mr-6">
                                            <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                                                <MapPin className="w-7 h-7 text-seo-blue" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-seo-dark mb-2">Deep Local Knowledge</h3>
                                            <p className="text-seo-gray-dark">
                                                We know {locationData.name} inside out. We know what locals search for and how to convert them.
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
                            <div className={`${generateDivClass({ role: 'why-us-cta-card', section: 'why-choose-us', location: locationData.slug })} bg-white p-2 rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500`}>
                                <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-seo-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                                    <h3 className="text-3xl font-display font-bold text-white mb-6 relative z-10">
                                        Ready to Dominate?
                                    </h3>
                                    <p className="text-slate-300 mb-8 relative z-10">
                                        Your competitors in {locationData.name} are already investing in SEO. Don't get left behind.
                                    </p>

                                    <div className="space-y-4 relative z-10">
                                        <Button className="w-full bg-seo-blue hover:bg-seo-blue-light text-white py-6 text-lg rounded-xl shadow-lg shadow-seo-blue/20">
                                            <a href="/seo-audit" className="w-full h-full flex items-center justify-center">
                                                Get Your Free Audit
                                            </a>
                                        </Button>
                                        <Button variant="outline" className="w-full border-slate-700 text-white hover:bg-white/10 py-6 text-lg rounded-xl bg-transparent">
                                            <a href="/contact" className="w-full h-full flex items-center justify-center">
                                                <Phone className="mr-2 h-5 w-5" />
                                                Talk to an Expert
                                            </a>
                                        </Button>
                                    </div>

                                    <p className="text-xs text-slate-500 mt-6">
                                        Limited spots available for new clients in {locationData.name}.
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section
                id={`${locationData.slug}-seo-pricing`}
                className={`page-section section-pricing ${locationData.slug}-pricing`}
                aria-label={`SEO pricing plans for ${locationData.name}`}
                data-section="pricing"
            >
                <ServicePricing tiers={localSeoPricing} />
            </section>

            {/* FAQ Section */}
            <section
                id={`${locationData.slug}-faq`}
                className={`page-section section-faq ${locationData.slug}-faq`}
                aria-label={`Frequently asked questions about SEO in ${locationData.name}`}
                data-section="faq"
            >
                <FAQSection locationName={locationData.name} />
            </section>

            {/* Resources Section */}
            <section
                id={`${locationData.slug}-resources`}
                className={`page-section section-resources ${locationData.slug}-resources`}
                aria-label={`SEO resources and guides for ${locationData.name}`}
                data-section="resources"
            >
                <ResourcesSection
                    filterTag={locationData.name}
                    className="bg-white"
                />
            </section>

            <section
                id={`${locationData.slug}-contact`}
                className={`page-section section-contact ${locationData.slug}-contact`}
                aria-label={`Contact Power My SEO for ${locationData.name}`}
                data-section="contact"
            >
                <ContactForm />
            </section>
            <Footer />
        </main>
    );
};

export default LocationPageTemplate;
