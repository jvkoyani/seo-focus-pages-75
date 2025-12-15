
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PlaneLanding, Target, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import AnimatedSection from '@/components/AnimatedSection';
import Hero from '@/components/Hero';

const StrategicPlanning = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <Hero 
        title="Strategic Planning Methodology"
        subtitle="How we develop customized SEO roadmaps to achieve your business goals"
        backgroundImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2000&auto=format&fit=crop"
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto" animation="fade-in">
            <h2 className="text-3xl font-display font-bold text-seo-dark mb-6">
              Our Strategic Planning Process
            </h2>
            <p className="text-lg text-seo-gray-dark mb-8">
              After thorough research and analysis, we develop a comprehensive, customized SEO strategy tailored to your specific business goals, audience needs, and competitive landscape.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-seo-gray-light p-8 rounded-xl">
                <Target className="h-10 w-10 text-seo-blue mb-4" />
                <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                  Goal Setting
                </h3>
                <p className="text-seo-gray-dark">
                  We establish clear, measurable objectives aligned with your business goals, whether that's increasing organic traffic, generating leads, boosting e-commerce sales, or enhancing brand visibility.
                </p>
              </div>
              
              <div className="bg-seo-gray-light p-8 rounded-xl">
                <PlaneLanding className="h-10 w-10 text-seo-blue mb-4" />
                <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                  Strategy Development
                </h3>
                <p className="text-seo-gray-dark">
                  We create a comprehensive SEO roadmap covering technical optimizations, content strategy, on-page enhancements, off-page initiatives, and local SEO tactics (if applicable).
                </p>
              </div>
              
              <div className="bg-seo-gray-light p-8 rounded-xl">
                <Calendar className="h-10 w-10 text-seo-blue mb-4" />
                <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                  Action Planning
                </h3>
                <p className="text-seo-gray-dark">
                  We develop a detailed implementation schedule with prioritized tasks, responsible parties, and expected outcomes to ensure efficient execution.
                </p>
              </div>
              
              <div className="bg-seo-gray-light p-8 rounded-xl">
                <Target className="h-10 w-10 text-seo-blue mb-4" />
                <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                  KPI Definition
                </h3>
                <p className="text-seo-gray-dark">
                  We establish key performance indicators (KPIs) and tracking mechanisms to measure progress, demonstrate ROI, and ensure accountability.
                </p>
              </div>
            </div>
            
            <div className="bg-seo-blue/10 p-8 rounded-xl mb-12">
              <h3 className="text-xl font-display font-bold text-seo-dark mb-4">
                The Outcome
              </h3>
              <p className="text-seo-gray-dark mb-4">
                Our strategic planning phase delivers:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "A comprehensive SEO strategy document aligned with your business goals",
                  "A detailed action plan with prioritized tasks and timelines",
                  "Clearly defined KPIs and success metrics",
                  "Resource allocation recommendations",
                  "Projected outcomes and ROI expectations"
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
                <span>Get a Free Strategy Consultation</span>
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

export default StrategicPlanning;
