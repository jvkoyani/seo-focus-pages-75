
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react'; // Correct import for useEffect
import { ArrowRight, Check, CheckCircle, Star, Building, Award, ShoppingBag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import { industries, testimonials } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import IndustrySeoServices from '@/components/IndustrySeoServices';

const IndustryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = industries.find(i => i.slug === slug);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const handleIndustryLinkClick = (industrySlug: string) => {
    navigate(`/industry/${industrySlug}`);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!industry) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Industry Not Found</h1>
            <p className="mb-6">Sorry, the industry you're looking for doesn't exist.</p>
            <Link 
              to="/industries" 
              className="inline-flex items-center text-seo-blue font-medium"
            >
              <span>View all industries</span>
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
      <section className="pt-32 pb-20 bg-gradient-to-b from-seo-blue-light/20 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -right-24 -top-24 w-96 h-96 bg-seo-blue rounded-full"></div>
          <div className="absolute right-1/4 top-1/3 w-64 h-64 bg-green-400 rounded-full"></div>
          <div className="absolute left-1/4 bottom-1/2 w-48 h-48 bg-purple-400 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <AnimatedSection className="max-w-2xl" animation="fade-in">
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mr-2">
                  <Building className="h-4 w-4 mr-1" />
                  Industry Solutions
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                  <Star className="h-4 w-4 mr-1" />
                  Specialized Approach
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6 leading-tight">
                {industry.title}
              </h1>
              
              <p className="text-xl text-seo-gray-dark mb-8">
                {industry.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-seo-blue hover:bg-seo-blue-light text-white">
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
                        {industry.title} Audit
                      </h3>
                      <p className="text-white/90 mb-4">
                        Get specialized insights for your {industry.title.replace(' SEO', '')} business
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
                      <span>Industry-specific analysis</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Competitor benchmarking</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Tailored recommendations</span>
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
      
      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-12" animation="fade-in">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
                Our Approach
              </span>
              <h2 className="text-3xl font-display font-bold text-seo-dark mb-4">
                Why Choose Our {industry.title} Service?
              </h2>
              <p className="text-lg text-seo-gray-dark">
                In the competitive {industry.title.toLowerCase().replace(' seo', '')} industry, having a strong online presence is essential for attracting new clients.
              </p>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              {industry.features.map((feature, index) => (
                <AnimatedSection 
                  key={index} 
                  className="bg-gradient-to-br from-white to-seo-blue/5 border border-seo-blue/10 p-6 rounded-lg shadow-sm"
                  animation="fade-in"
                  delay={index * 100}
                >
                  <div className="flex items-start">
                    <div className="bg-seo-blue/10 rounded-full p-2 mr-4 flex-shrink-0">
                      <Check className="h-5 w-5 text-seo-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold text-seo-dark mb-2">{feature}</h3>
                      <p className="text-seo-gray-dark">
                        We implement effective strategies tailored specifically for {industry.title.toLowerCase().replace(' seo', '')} professionals.
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-br from-seo-blue/5 to-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-green-100 text-green-700 mb-4">
              Proven Results
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
              What Our {industry.title.replace(' SEO', '')} Clients Achieve
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Our specialized approach delivers measurable results for {industry.title.toLowerCase().replace(' seo', '')} businesses
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { stat: '156%', label: 'Average Increase in Organic Traffic', icon: 'trending-up' },
              { stat: '187%', label: 'More Qualified Leads', icon: 'users' },
              { stat: '93%', label: 'Client Retention Rate', icon: 'award' }
            ].map((item, index) => (
              <AnimatedSection
                key={index}
                className="bg-white rounded-lg p-8 text-center shadow-md border border-gray-100"
                animation="fade-in"
                delay={index * 100}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-seo-blue to-purple-600 text-white mb-6">
                  <ShoppingBag className="h-8 w-8" />
                </div>
                <h3 className="text-4xl font-bold text-seo-dark mb-2">{item.stat}</h3>
                <p className="text-seo-gray-dark">{item.label}</p>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="max-w-4xl mx-auto mt-16" animation="fade-in">
            <div className="bg-gradient-to-r from-seo-blue to-purple-600 p-1 rounded-lg shadow-lg">
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-seo-dark mb-6">
                  Benefits of {industry.title}
                </h3>
                
                <div className="space-y-4">
                  {industry.benefits.map((benefit, index) => (
                    <AnimatedSection 
                      key={index} 
                      className="flex items-center"
                      animation="fade-in-left"
                      delay={index * 100}
                    >
                      <div className="bg-seo-blue text-white rounded-full p-1 mr-4 flex-shrink-0">
                        <Check className="h-4 w-4" />
                      </div>
                      <p className="text-seo-gray-dark">{benefit}</p>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-700 mb-4">
              Client Success
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
              What Our {industry.title.replace(' SEO', '')} Clients Say
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Hear directly from other {industry.title.replace(' SEO', '')} businesses about their experience
            </p>
          </AnimatedSection>
          
          <div className="max-w-5xl mx-auto">
            <AnimatedSection className="bg-gradient-to-br from-white to-seo-gray-light p-8 rounded-xl border border-gray-100 shadow-md" animation="fade-in">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="relative w-48 h-48 mx-auto">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-seo-blue to-purple-600 blur-lg opacity-30"></div>
                    <img 
                      src={testimonials[0].image} 
                      alt={testimonials[0].name} 
                      className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <blockquote className="text-xl italic text-seo-gray-dark mb-6">
                    "Since implementing their {industry.title} strategy, our practice has seen a significant increase in new client inquiries and conversion rates. The team truly understands the unique challenges in our industry."
                  </blockquote>
                  <div className="flex items-center">
                    <div>
                      <p className="font-bold text-seo-dark">{testimonials[0].name}</p>
                      <p className="text-seo-gray-medium">{testimonials[0].company}</p>
                    </div>
                    <div className="ml-auto flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400" fill="#FBBF24" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Related Industries Section */}
      <section className="py-20 bg-gradient-to-br from-seo-blue/5 to-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Industry Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
              Explore Other Industry Solutions
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Discover our specialized SEO services for other industries
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {industries
              .filter(i => i.id !== industry.id)
              .slice(0, 3)
              .map((item, index) => (
                <AnimatedSection
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                  animation="fade-in"
                  delay={index * 100}
                  onClick={() => handleIndustryLinkClick(item.slug)}
                >
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-seo-dark">{item.title}</h3>
                    <p className="text-seo-gray-dark mb-4 line-clamp-2">{item.description}</p>
                    <div className="flex items-center text-seo-blue font-medium">
                      <span>Learn more</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </AnimatedSection>
              ))}
          </div>
          
          <div className="text-center mt-10">
            <Button variant="outline" className="border-seo-blue text-seo-blue hover:bg-seo-blue/5" asChild>
              <Link to="/industries">
                View All Industries
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-seo-blue to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto" animation="fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Grow Your {industry.title.replace(' SEO', '')} Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today for a free consultation and discover how our {industry.title.toLowerCase()} service can help your business attract more clients.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-seo-blue hover:bg-gray-100">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Case Studies
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default IndustryPage;
