import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { 
  ArrowRight, MapPin, TrendingUp, BarChart, 
  CheckCircle, Award, Users, Target, Star, 
  Zap, Globe, Compass, Building, ShoppingBag, 
  Phone, Lightbulb, ChevronRight
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import ResourcesSection from '@/components/ResourcesSection';
import Services from '@/components/Services';
import { allAustralianCities } from '@/lib/locationData';
import InfoCard from '@/components/InfoCard';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import LocationBreadcrumbs from '@/components/LocationBreadcrumbs';

const Location = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);
  
  const locationData = allAustralianCities.find(loc => loc.slug === slug);
  
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  if (!locationData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Location Not Found</h1>
            <p className="mb-6">Sorry, the location you're looking for doesn't exist.</p>
            <Link 
              to="/" 
              className="inline-flex items-center text-seo-blue font-medium"
              onClick={handleLinkClick}
            >
              <span>Return to home</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

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
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <ChevronRight className="h-4 w-4 text-seo-gray-medium" />
              <span className="text-seo-blue font-medium">{locationData.name}</span>
            </div>
          </AnimatedSection>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <AnimatedSection className="max-w-2xl" animation="fade-in">
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mr-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {locationData.name}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                  <Star className="h-4 w-4 mr-1" />
                  Experienced Team
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6 leading-tight">
                SEO Services in {locationData.name}
              </h1>
              
              <p className="text-xl text-seo-gray-dark mb-8">
                Our specialized SEO services are designed to help {locationData.name} businesses stand out from the competition and attract more qualified leads through search engines.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-seo-blue hover:bg-seo-blue-light text-white button-hover-effect">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-seo-blue text-seo-blue hover:bg-seo-blue/5">
                  View Case Studies
                </Button>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-left" delay={300} className="md:w-1/3">
              <Card className="bg-white shadow-xl rounded-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-seo-blue to-purple-600 opacity-90"></div>
                    <div className="p-6 relative z-10">
                      <h3 className="text-xl font-bold text-white mb-2">
                        Free SEO Audit
                      </h3>
                      <p className="text-white/90 mb-4">
                        See how your business stacks up against competitors in {locationData.name}
                      </p>
                      <div className="flex items-center">
                        <Award className="h-8 w-8 text-yellow-300 mr-2" />
                        <span className="text-white font-medium">Free for limited time</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Complete SEO analysis</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Competitor benchmarking</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Actionable recommendations</span>
                    </div>
                    <div className="mt-6">
                      <Button className="w-full bg-seo-blue hover:bg-seo-blue-light">
                        Request Free Audit
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Why Businesses Need SEO in Location */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Business Growth
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
              Why {locationData.name} Businesses Need Professional SEO
            </h2>
            <p className="text-lg text-seo-gray-dark">
              The {locationData.name} market presents unique challenges and opportunities for businesses looking to improve their online visibility
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <InfoCard
              title="Local Competition"
              description={`The ${locationData.name} market is highly competitive, with many businesses vying for visibility in local search results.`}
              icon={<Building className="w-full h-full" />}
              animation="fade-in"
              delay={100}
              iconBackground="bg-purple-100"
              iconColor="text-purple-600"
            />
            
            <InfoCard
              title="Consumer Behavior"
              description={`${locationData.name} consumers have specific search patterns and preferences that require targeted optimization strategies.`}
              icon={<Users className="w-full h-full" />}
              animation="fade-in"
              delay={200}
              iconBackground="bg-blue-100"
              iconColor="text-blue-600"
            />
            
            <InfoCard
              title="Geographic Considerations"
              description={`Effective SEO in ${locationData.name} requires optimization for specific neighborhoods, suburbs, and landmarks.`}
              icon={<Globe className="w-full h-full" />}
              animation="fade-in"
              delay={300}
              iconBackground="bg-green-100"
              iconColor="text-green-600"
            />
            
            <InfoCard
              title="Local Business Ecosystem"
              description={`Building relationships with other ${locationData.name} businesses and organizations can significantly impact your search visibility.`}
              icon={<Compass className="w-full h-full" />}
              animation="fade-in"
              delay={400}
              iconBackground="bg-orange-100"
              iconColor="text-orange-600"
            />
          </div>
        </div>
      </section>
      
      {/* Our Services Section */}
      <Services location={locationData.name} locationSlug={locationData.slug} />
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-seo-gray-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <AnimatedSection className="lg:w-1/2" animation="fade-in-right">
              <div className="relative">
                <div className="absolute -left-6 -top-6 w-64 h-64 bg-seo-blue/5 rounded-full"></div>
                <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-purple-100 rounded-full"></div>
                <div className="relative z-10 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6 pb-6 border-b border-gray-100">
                    Why Choose Us for SEO in {locationData.name}
                  </h2>
                  <p className="text-lg text-seo-gray-dark mb-8">
                    When you partner with us for your {locationData.name} SEO needs, you benefit from:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-green-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-seo-dark mb-2">Local Expertise</h3>
                        <p className="text-seo-gray-dark">
                          Our team has extensive experience in the {locationData.name} market and understands the local business landscape.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <BarChart className="w-5 h-5 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-seo-dark mb-2">Proven Results</h3>
                        <p className="text-seo-gray-dark">
                          We have a track record of success, helping numerous {locationData.name} businesses improve their search visibility and drive growth.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                          <Target className="w-5 h-5 text-purple-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-seo-dark mb-2">Customized Strategies</h3>
                        <p className="text-seo-gray-dark">
                          We develop tailored strategies based on your specific business goals, target audience, and competition.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                          <Lightbulb className="w-5 h-5 text-yellow-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-seo-dark mb-2">Ongoing Optimization</h3>
                        <p className="text-seo-gray-dark">
                          We continuously refine our approach based on performance data and changing market conditions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="lg:w-1/2" animation="fade-in-left">
              <div className="bg-gradient-to-br from-seo-blue to-purple-600 p-1 rounded-xl shadow-lg">
                <div className="bg-white p-8 rounded-lg">
                  <h3 className="text-2xl font-display font-bold text-seo-dark mb-6 text-center">
                    Ready to Dominate {locationData.name} Search Results?
                  </h3>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-green-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-seo-dark">Increase Local Visibility</h4>
                        <p className="text-sm text-seo-gray-dark">Rank higher in {locationData.name} searches</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Users className="w-5 h-5 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-seo-dark">Drive More Qualified Traffic</h4>
                        <p className="text-sm text-seo-gray-dark">Attract customers actively looking for your services</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                          <ShoppingBag className="w-5 h-5 text-purple-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-seo-dark">Increase Conversions</h4>
                        <p className="text-sm text-seo-gray-dark">Turn visitors into paying customers</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Button className="w-full bg-seo-blue hover:bg-seo-blue-light text-white py-6 text-lg">
                      Get Your Free SEO Audit
                    </Button>
                    <Button variant="outline" className="w-full border-seo-blue text-seo-blue hover:bg-seo-blue/5 py-6 text-lg">
                      <Phone className="mr-2 h-5 w-5" />
                      Schedule a Call
                    </Button>
                  </div>
                  
                  <p className="text-center text-sm text-seo-gray-dark mt-4">
                    No contracts or commitments required
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Resources Section */}
      <ResourcesSection 
        filterTag={locationData.name} 
        className="bg-white"
      />
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Location;
