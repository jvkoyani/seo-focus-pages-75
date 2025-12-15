
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import { caseStudies } from '@/lib/data';
import CaseStudyPreview from '@/components/CaseStudyPreview';

const CaseStudies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Case Studies
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6">
              Our Client Success Stories
            </h1>
            <p className="text-xl text-seo-gray-dark mb-8">
              See how we've helped businesses like yours achieve measurable results through strategic SEO solutions.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyPreview key={caseStudy.id} caseStudy={caseStudy} delay={index * 100} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-seo-dark text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white mb-4">
              Your Success Story
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Ready to Become Our Next Success Story?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Contact us today for a free consultation and discover how our SEO services can help your business grow.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-seo-blue hover:bg-seo-blue-light text-white font-medium py-3 px-8 rounded-md transition-colors button-hover-effect"
            >
              Get Started
            </Link>
          </AnimatedSection>
        </div>
      </section>
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default CaseStudies;
