
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Building, ChevronLeft, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import CaseStudyPreview from '@/components/CaseStudyPreview';
import { caseStudies } from '@/lib/data';

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = caseStudies.find(c => c.slug === slug);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
            <p className="mb-6">Sorry, the case study you're looking for doesn't exist.</p>
            <Link 
              to="/case-studies" 
              className="inline-flex items-center text-seo-blue font-medium"
            >
              <span>View all case studies</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Find related case studies
  const relatedCaseStudies = caseStudies
    .filter(c => 
      c.id !== caseStudy.id && 
      (c.industry === caseStudy.industry || 
       c.solution.includes(caseStudy.industry) ||
       caseStudy.solution.includes(c.industry))
    )
    .slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto" animation="fade-in">
            <Link 
              to="/case-studies" 
              className="inline-flex items-center text-seo-blue font-medium mb-6"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              <span>Back to all case studies</span>
            </Link>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              <Building className="h-4 w-4 mr-2" />
              {caseStudy.industry}
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-seo-gray-dark mb-8">
              Client: {caseStudy.client}
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src={caseStudy.image} 
                alt={caseStudy.title} 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Study Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="prose prose-lg max-w-none" animation="fade-in">
              <h2>The Challenge</h2>
              <p>{caseStudy.challenge}</p>
              
              <h2>Our Solution</h2>
              <p>{caseStudy.solution}</p>
              
              <h2>The Results</h2>
              <div className="bg-seo-gray-light p-8 rounded-xl my-8">
                <ul className="space-y-4">
                  {caseStudy.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-seo-blue/10 rounded-full p-1 mt-1 mr-3 flex-shrink-0">
                        <Check className="h-4 w-4 text-seo-blue" />
                      </div>
                      <span className="text-seo-dark">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {caseStudy.testimonial && (
                <>
                  <h2>Client Testimonial</h2>
                  <blockquote className="italic border-l-4 border-seo-blue pl-4 py-2">
                    "{caseStudy.testimonial}"
                  </blockquote>
                </>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-20 bg-seo-gray-light">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
              <h2 className="text-3xl font-display font-bold text-seo-dark mb-4">
                Related Case Studies
              </h2>
              <p className="text-lg text-seo-gray-dark">
                Explore more success stories similar to this one
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedCaseStudies.map((study, index) => (
                <CaseStudyPreview key={study.id} caseStudy={study} delay={index * 100} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                to="/case-studies" 
                className="inline-flex items-center bg-seo-blue hover:bg-seo-blue-light text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                <span>View All Case Studies</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto" animation="fade-in">
            <h2 className="text-3xl font-display font-bold text-seo-dark mb-6">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-xl text-seo-gray-dark mb-8">
              Contact us today to discuss how our SEO services can drive growth for your business.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-seo-blue hover:bg-seo-blue-light text-white font-medium py-3 px-8 rounded-md transition-colors button-hover-effect"
            >
              Start Your Success Story
            </Link>
          </AnimatedSection>
        </div>
      </section>
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default CaseStudy;
