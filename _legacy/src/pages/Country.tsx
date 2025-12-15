
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Globe } from 'lucide-react';
import { allAustralianCities } from '@/lib/locationData';
import CountryCities from '@/components/CountryCities';
import { services } from '@/lib/data';

const Country = () => {
  const { country } = useParams<{ country: string }>();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [country]);
  
  // Only showing Australia for now
  if (country?.toLowerCase() !== 'australia') {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Country Not Found</h1>
            <p className="mb-6">Sorry, we currently only serve Australia.</p>
            <Link 
              to="/australia" 
              className="inline-flex items-center text-seo-blue font-medium"
            >
              <span>Go to Australia</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Group cities by state
  const cityCountByState = allAustralianCities.reduce((acc, city) => {
    if (!acc[city.state]) {
      acc[city.state] = 0;
    }
    acc[city.state]++;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-seo-blue-light/10 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -right-24 -top-24 w-96 h-96 bg-seo-blue rounded-full"></div>
          <div className="absolute right-1/4 top-1/3 w-64 h-64 bg-green-400 rounded-full"></div>
          <div className="absolute left-1/4 bottom-1/2 w-48 h-48 bg-purple-400 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="mb-4" animation="fade-in">
            <div className="inline-flex items-center space-x-2">
              <Link 
                to="/" 
                className="text-seo-gray-dark hover:text-seo-blue transition-colors"
              >
                Home
              </Link>
              <ArrowRight className="h-4 w-4 text-seo-gray-medium" />
              <span className="text-seo-blue font-medium">Australia</span>
            </div>
          </AnimatedSection>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <AnimatedSection className="max-w-2xl" animation="fade-in">
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mr-2">
                  <Globe className="h-4 w-4 mr-1" />
                  Australia
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                  317 Supported Cities
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6 leading-tight">
                SEO Services Across Australia
              </h1>
              
              <p className="text-xl text-seo-gray-dark mb-8">
                Our specialized SEO services are designed to help Australian businesses stand out from the competition and attract more qualified leads through search engines.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-seo-blue hover:bg-seo-blue-light text-white button-hover-effect">
                  <Link to="/free-consultation">
                    Get a Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-seo-blue text-seo-blue hover:bg-seo-blue/5">
                  <Link to="/case-studies">
                    View Case Studies
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-left" delay={300} className="md:w-1/3">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-seo-dark mb-4 border-b pb-3">
                  Australian States & Territories
                </h3>
                <ul className="space-y-3">
                  {Object.entries(cityCountByState).map(([state, count]) => (
                    <li key={state}>
                      <Link 
                        to={`/australia/${state.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-seo-blue/5 transition-colors group"
                      >
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-seo-gray-medium group-hover:text-seo-blue transition-colors mr-2" />
                          <span className="text-seo-gray-dark group-hover:text-seo-blue transition-colors">
                            {state}
                          </span>
                        </div>
                        <span className="bg-seo-blue/10 text-seo-blue text-xs px-2 py-1 rounded-full">
                          {count} cities
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Australian Cities Section */}
      <CountryCities />
      
      {/* Services Section */}
      <section className="py-16 bg-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
              SEO Services Available Nationwide
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Our comprehensive SEO solutions are available to businesses across all of Australia
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.id}
                className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all"
                animation="fade-in"
                delay={index * 100}
              >
                <div className="bg-seo-blue/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {/* This would ideally use your icon mapping from Services.tsx */}
                  <div className="text-seo-blue">
                    <Globe className="h-6 w-6" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-seo-dark mb-2">{service.title}</h3>
                <p className="text-seo-gray-dark mb-4">{service.description}</p>
                
                <Link
                  to={`/service/${service.slug}`}
                  className="inline-flex items-center text-seo-blue font-medium group"
                >
                  <span className="border-b border-seo-blue/30 group-hover:border-seo-blue transition-colors">
                    Learn more
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Country;
