
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, FileText, Link as LinkIcon, Settings } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import AnimatedSection from '@/components/AnimatedSection';
import Hero from '@/components/Hero';

const Implementation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <Hero 
        title="Implementation Methodology"
        subtitle="How we execute SEO strategies with precision and expertise"
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop"
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto" animation="fade-in">
            <h2 className="text-3xl font-display font-bold text-seo-dark mb-6">
              Our Implementation Process
            </h2>
            <p className="text-lg text-seo-gray-dark mb-8">
              After developing a comprehensive strategy, we move to the implementation phase where our team of specialists executes each component of the plan with precision and expertise.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-seo-gray-light p-8 rounded-xl">
                <Settings className="h-10 w-10 text-seo-blue mb-4" />
                <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                  Technical SEO
                </h3>
                <p className="text-seo-gray-dark">
                  We implement technical improvements to enhance crawlability, indexability, site speed, mobile-friendliness, structured data, and other foundational SEO elements.
                </p>
              </div>
              
              <div className="bg-seo-gray-light p-8 rounded-xl">
                <FileText className="h-10 w-10 text-seo-blue mb-4" />
                <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                  Content Optimization
                </h3>
                <p className="text-seo-gray-dark">
                  We create and optimize content to target strategic keywords, fulfill user intent, and establish topical authority while enhancing existing content for better performance.
                </p>
              </div>
              
              <div className="bg-seo-gray-light p-8 rounded-xl">
                <LinkIcon className="h-10 w-10 text-seo-blue mb-4" />
                <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                  Off-Page Optimization
                </h3>
                <p className="text-seo-gray-dark">
                  We build high-quality backlinks, enhance online reputation, and improve brand mentions across the web to boost domain authority and search rankings.
                </p>
              </div>
              
              <div className="bg-seo-gray-light p-8 rounded-xl">
                <Code className="h-10 w-10 text-seo-blue mb-4" />
                <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                  Local SEO (if applicable)
                </h3>
                <p className="text-seo-gray-dark">
                  We optimize Google Business Profiles, build local citations, and implement location-specific optimizations to improve visibility in local search results.
                </p>
              </div>
            </div>
            
            <div className="bg-seo-blue/10 p-8 rounded-xl mb-12">
              <h3 className="text-xl font-display font-bold text-seo-dark mb-4">
                The Outcome
              </h3>
              <p className="text-seo-gray-dark mb-4">
                Our implementation phase delivers:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "A technically sound website optimized for search engines",
                  "High-quality, optimized content targeted to your audience",
                  "A growing profile of authoritative backlinks",
                  "Enhanced local presence (for local businesses)",
                  "Improved user experience and conversion paths"
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
                <span>Get a Free Implementation Assessment</span>
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

export default Implementation;
