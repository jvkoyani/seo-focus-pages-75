import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
    ArrowRight, CheckCircle, Star, Building,
    BarChart, Users, Globe, TrendingUp, Zap,
    Phone, ChevronRight, Target
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import ProcessSection from '@/components/ProcessSection';
import FAQSection from '@/components/FAQSection';
import Services from '@/components/Services';
import InfoCard from '@/components/InfoCard';
import CaseStudyPreview from '@/components/CaseStudyPreview';
import { industries, caseStudies } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ServicePricing from '@/components/service/ServicePricing';
import TrustIndicators from '@/components/TrustIndicators';

import JsonLd from '@/components/JsonLd';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

export async function generateStaticParams() {
    return industries.map((industry) => ({
        slug: industry.slug,
    }));
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;
    const industry = industries.find(i => i.slug === slug);

    if (!industry) {
        notFound();
    }

    // Filter case studies for this industry
    const relevantCaseStudies = caseStudies.filter(
        cs => cs.industry === industry.title ||
            cs.industry.includes(industry.title) ||
            industry.title.includes(cs.industry)
    ).slice(0, 3);

    const serviceSchema = generateServiceSchema(industry);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Industries', url: '/industries' },
        { name: industry.title, url: `/industry/${industry.slug}` }
    ]);

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <JsonLd data={[serviceSchema, breadcrumbSchema]} />
            <Navbar />

            {/* Hero Section - Energetic & Slick (Matches LocationPageTemplate) */}
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
                            <Link href="/industries" className="hover:text-white transition-colors">Industries</Link>
                            <ChevronRight className="h-3 w-3" />
                            <span className="text-seo-blue font-medium">{industry.title}</span>
                        </div>
                    </AnimatedSection>

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <AnimatedSection className="lg:w-3/5" animation="fade-in-right">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-500/20 text-green-400 border border-green-500/30">
                                    <Zap className="h-3 w-3 mr-1" />
                                    #1 SEO Agency for {industry.title}
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">
                                    <Star className="h-3 w-3 mr-1" />
                                    5-Star Rated
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight tracking-tight">
                                Dominate <span className="text-transparent bg-clip-text bg-gradient-to-r from-seo-blue to-purple-400">{industry.title}</span> Search Results
                            </h1>

                            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                                Stop losing clients to competitors. We implement high-impact SEO strategies tailored specifically for {industry.title.toLowerCase()} to drive traffic, leads, and revenue.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-seo-blue hover:bg-seo-blue-light text-white h-14 px-8 text-lg rounded-full shadow-lg shadow-seo-blue/25 transition-all hover:scale-105" asChild>
                                    <Link href="/free-consultation" className="flex items-center">
                                        Get Your Free Audit
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" className="bg-transparent border-slate-600 text-white hover:bg-white hover:text-slate-900 h-14 px-8 text-lg rounded-full backdrop-blur-sm transition-colors" asChild>
                                    <Link href="/case-studies">
                                        View Our Results
                                    </Link>
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

            {/* Why Industry Needs SEO */}
            <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
                            Industry Insights
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            Why {industry.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Needs SEO</span>
                        </h2>
                        <p className="text-xl text-slate-400">
                            The {industry.title.toLowerCase()} landscape is evolving. Here&apos;s why you can&apos;t afford to be invisible.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "High Competition",
                                description: `The ${industry.title} market is saturated. SEO is your only way to stand out without burning cash on ads.`,
                                icon: Building,
                                color: "from-purple-500 to-pink-500"
                            },
                            {
                                title: "Smart Clients",
                                description: `Potential clients research online before hiring. If you're not there, you don't exist to them.`,
                                icon: Users,
                                color: "from-blue-500 to-cyan-500"
                            },
                            {
                                title: "Targeted Leads",
                                description: `Capture clients who are actively searching for ${industry.title.toLowerCase()} services right now.`,
                                icon: Globe,
                                color: "from-green-500 to-emerald-500"
                            },
                            {
                                title: "Long-Term Asset",
                                description: `Unlike ads that stop when you stop paying, SEO builds a permanent digital asset for your business.`,
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
            <ProcessSection />

            {/* Services Section */}
            <Services />

            {/* Industry Specific Features */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <AnimatedSection className="lg:w-1/2" animation="fade-in-right">
                            <div className="relative">
                                <div className="absolute -left-10 -top-10 w-72 h-72 bg-seo-blue/5 rounded-full blur-3xl"></div>
                                <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-purple-100 rounded-full blur-3xl"></div>

                                <h2 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-8 relative z-10">
                                    Specialized Strategies for {industry.title}
                                </h2>
                                <p className="text-lg text-seo-gray-dark mb-10 relative z-10">
                                    We don't use cookie-cutter approaches. We build revenue-generating engines tailored for {industry.title.toLowerCase()}.
                                </p>

                                <div className="space-y-8 relative z-10">
                                    {industry.features.slice(0, 3).map((feature, index) => (
                                        <div key={index} className="flex group">
                                            <div className="flex-shrink-0 mr-6">
                                                <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                                                    <CheckCircle className="w-7 h-7 text-seo-blue" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-seo-dark mb-2">{feature}</h3>
                                                <p className="text-seo-gray-dark">
                                                    Proven tactics that work specifically for your industry.
                                                </p>
                                            </div>
                                        </div>
                                    ))}
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
                                        Your competitors are already investing in SEO. Don't get left behind.
                                    </p>

                                    <div className="space-y-4 relative z-10">
                                        <Button className="w-full bg-seo-blue hover:bg-seo-blue-light text-white py-6 text-lg rounded-xl shadow-lg shadow-seo-blue/20" asChild>
                                            <Link href="/seo-audit" className="w-full h-full flex items-center justify-center">
                                                Get Your Free Audit
                                            </Link>
                                        </Button>
                                        <Button variant="outline" className="w-full bg-transparent border-slate-700 text-white hover:bg-white hover:text-slate-900 py-6 text-lg rounded-xl transition-colors" asChild>
                                            <Link href="/contact" className="w-full h-full flex items-center justify-center">
                                                <Phone className="mr-2 h-5 w-5" />
                                                Talk to an Expert
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Case Studies Section */}
            {relevantCaseStudies.length > 0 && (
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
                            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-green-100 text-green-700 mb-4">
                                Real Results
                            </span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
                                Success Stories from {industry.title} Clients
                            </h2>
                            <p className="text-lg text-seo-gray-dark">
                                See how we've helped businesses in your industry dominate their market.
                            </p>
                        </AnimatedSection>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relevantCaseStudies.map((study, index) => (
                                <CaseStudyPreview
                                    key={study.id}
                                    caseStudy={study}
                                    delay={index * 100}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Pricing Section */}
            {industry.pricing && <ServicePricing tiers={industry.pricing} />}

            {/* FAQ Section */}
            <FAQSection />

            <ContactForm />
            <Footer />
        </div>
    );
}
