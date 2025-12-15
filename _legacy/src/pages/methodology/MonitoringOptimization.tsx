
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, LineChart, RefreshCw, BarChart, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import AnimatedSection from '@/components/AnimatedSection';
import Hero from '@/components/Hero';

const MonitoringOptimization = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <Hero 
        title="Monitoring & Optimization Methodology"
        subtitle="How we continuously improve your SEO performance for sustained results"
        backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto" animation="fade-in">
            <h2 className="text-3xl font-display font-bold text-seo-dark mb-6">
              Our Monitoring & Optimization Process
            </h2>
            <p className="text-lg text-seo-gray-dark mb-8">
              SEO is not a one-time project but an ongoing process. Our monitoring and optimization phase ensures we continuously refine your strategy based on performance data and emerging opportunities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-seo-gray-light p-8 rounded-xl">
                <LineChart className="h-10 w-10 text-seo-blue mb-4" />
                <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                  Performance Tracking
                </h3>
                <p className="text-seo-gray-dark">
                  We continuously monitor key metrics including rankings, organic traffic, conversion rates, and engagement metrics to measure progress toward your goals.
                </p>
              </div>
              
              <div className="bg-seo-gray-light p-8 rounded-xl">
                <BarChart className="h-10 w-10 text-seo-blue mb-4" />
                <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                  Data Analysis
                </h3>
                <p className="text-seo-gray-dark">
                  We analyze performance data to identify patterns, opportunities, and areas needing improvement, generating actionable insights to refine your strategy.
                </p>
              </div>
              
              <div className="bg-seo-gray-light p-8 rounded-xl">
                <RefreshCw className="h-10 w-10 text-seo-blue mb-4" />
                <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                  Iterative Optimization
                </h3>
                <p className="text-seo-gray-dark">
                  Based on performance data, we continuously refine and improve your SEO strategy, making adjustments to maximize results and ROI.
                </p>
              </div>
              
              <div className="bg-seo-gray-light p-8 rounded-xl">
                <TrendingUp className="h-10 w-10 text-seo-blue mb-4" />
                <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                  Reporting & Communication
                </h3>
                <p className="text-seo-gray-dark">
                  We provide regular, transparent reports on performance, insights, and next steps, ensuring you understand the impact of our work and future opportunities.
                </p>
              </div>
            </div>
            
            <div className="bg-seo-blue/10 p-8 rounded-xl mb-12">
              <h3 className="text-xl font-display font-bold text-seo-dark mb-4">
                The Outcome
              </h3>
              <p className="text-seo-gray-dark mb-4">
                Our monitoring and optimization phase delivers:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Regular performance reports with actionable insights",
                  "Continuous improvement in search visibility and rankings",
                  "Adaptability to algorithm changes and market shifts",
                  "Maximized ROI from your SEO investment",
                  "Long-term, sustainable growth in organic traffic and conversions"
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
                <span>Get a Free Performance Review</span>
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

export default MonitoringOptimization;
