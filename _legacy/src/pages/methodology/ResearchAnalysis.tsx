
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, BarChart, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import AnimatedSection from '@/components/AnimatedSection';
import Hero from '@/components/Hero';

const ResearchAnalysis = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <Hero 
        title="Research & Analysis Methodology"
        subtitle="How we uncover actionable insights to drive your SEO strategy"
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto" animation="fade-in">
            <h2 className="text-3xl font-display font-bold text-seo-dark mb-6">
              Our Research & Analysis Process
            </h2>
            <p className="text-lg text-seo-gray-dark mb-8">
              Our comprehensive research and analysis phase forms the foundation of every successful SEO campaign. We dig deep to understand your business, audience, competition, and market opportunities before creating your strategy.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-seo-gray-light p-8 rounded-xl">
                <Search className="h-10 w-10 text-seo-blue mb-4" />
                <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                  Website Audit
                </h3>
                <p className="text-seo-gray-dark">
                  We conduct a thorough analysis of your current website performance, examining technical issues, content quality, user experience, and conversion paths to identify improvement opportunities.
                </p>
              </div>
              
              <div className="bg-seo-gray-light p-8 rounded-xl">
                <BarChart className="h-10 w-10 text-seo-blue mb-4" />
                <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                  Competitor Analysis
                </h3>
                <p className="text-seo-gray-dark">
                  We identify your top online competitors and analyze their SEO strategies, keywords, content, backlinks, and market positioning to benchmark and find competitive advantages.
                </p>
              </div>
              
              <div className="bg-seo-gray-light p-8 rounded-xl">
                <Users className="h-10 w-10 text-seo-blue mb-4" />
                <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                  Audience Research
                </h3>
                <p className="text-seo-gray-dark">
                  We develop detailed buyer personas and analyze search intent to understand what your ideal customers are looking for, how they search, and what content will resonate with them.
                </p>
              </div>
              
              <div className="bg-seo-gray-light p-8 rounded-xl">
                <Search className="h-10 w-10 text-seo-blue mb-4" />
                <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                  Keyword Research
                </h3>
                <p className="text-seo-gray-dark">
                  We identify high-value keywords with the perfect balance of search volume, competition, and commercial intent to target in your SEO campaign.
                </p>
              </div>
            </div>
            
            <div className="bg-seo-blue/10 p-8 rounded-xl mb-12">
              <h3 className="text-xl font-display font-bold text-seo-dark mb-4">
                The Outcome
              </h3>
              <p className="text-seo-gray-dark mb-4">
                Our research and analysis phase delivers:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "A comprehensive technical SEO audit with prioritized recommendations",
                  "A competitor analysis report with actionable insights",
                  "Detailed audience personas and search intent mapping",
                  "A prioritized keyword strategy targeting high-value opportunities",
                  "A gap analysis identifying your biggest growth opportunities"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="h-5 w-5 text-seo-blue mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-seo-gray-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-center">
              <Link
                to="/free-consultation"
                className="inline-flex items-center bg-seo-blue hover:bg-seo-blue-light text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                <span>Get a Free SEO Consultation</span>
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
};

export default ResearchAnalysis;
