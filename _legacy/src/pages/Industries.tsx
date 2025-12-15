
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, BarChart, CheckCircle, Award, 
  Users, Target, Star, ShoppingBag, Phone, 
  Lightbulb, ChevronRight, TrendingUp, Building
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IndustrySeoServices from '@/components/IndustrySeoServices';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import ResourcesSection from '@/components/ResourcesSection';
import InfoCard from '@/components/InfoCard';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Industries = () => {
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
              <Link to="/" className="text-seo-gray-dark hover:text-seo-blue transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4 text-seo-gray-medium" />
              <span className="text-seo-blue font-medium">Industries</span>
            </div>
          </AnimatedSection>
          
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
                Specialized SEO for Your Industry
              </h1>
              
              <p className="text-xl text-seo-gray-dark mb-8">
                We understand that different industries have unique challenges and opportunities. 
                Our industry-specific SEO solutions are designed to address the particular needs of your business sector.
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
                        Industry-Specific SEO Audit
                      </h3>
                      <p className="text-white/90 mb-4">
                        Get specialized insights for your industry's unique SEO challenges
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
      
      {/* Industry Services Grid */}
      <IndustrySeoServices 
        title="Tailored SEO Strategies by Industry" 
        description="Our specialized approach is customized for the unique requirements and competitive landscape of your specific industry."
      />
      
      {/* Why Industry-Specific SEO Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
              Why Choose Industry-Specific SEO?
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Generic SEO strategies often miss the mark. Industry-specific SEO delivers better results by addressing your unique market challenges.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Specialized Keyword Targeting",
                description: "We research and target industry-specific keywords that your ideal clients are actually using to search for your services.",
                icon: <Target className="w-full h-full" />,
                iconBackground: "bg-blue-100",
                iconColor: "text-blue-600"
              },
              {
                title: "Competitor Intelligence",
                description: "We analyze your top-performing industry competitors to identify opportunities and develop strategies to outrank them.",
                icon: <Users className="w-full h-full" />,
                iconBackground: "bg-purple-100",
                iconColor: "text-purple-600"
              },
              {
                title: "Industry-Specific Content",
                description: "Our content strategies address the specific questions, concerns, and interests of your target audience.",
                icon: <Lightbulb className="w-full h-full" />,
                iconBackground: "bg-yellow-100",
                iconColor: "text-yellow-600"
              },
              {
                title: "Tailored Local SEO",
                description: "We optimize your local presence with industry-specific citations and directory listings that matter most for your sector.",
                icon: <Building className="w-full h-full" />,
                iconBackground: "bg-green-100",
                iconColor: "text-green-600"
              },
              {
                title: "Conversion Optimization",
                description: "Our strategies focus on converting industry-specific traffic into leads and customers, not just increasing general traffic.",
                icon: <TrendingUp className="w-full h-full" />,
                iconBackground: "bg-orange-100",
                iconColor: "text-orange-600"
              },
              {
                title: "Regulatory Compliance",
                description: "We ensure your SEO strategy complies with any industry-specific regulations and best practices.",
                icon: <CheckCircle className="w-full h-full" />,
                iconBackground: "bg-red-100",
                iconColor: "text-red-600"
              }
            ].map((item, index) => (
              <InfoCard
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
                animation="fade-in"
                delay={index * 100}
                iconBackground={item.iconBackground}
                iconColor={item.iconColor}
              />
            ))}
          </div>
        </div>
      </section>
      
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
                    Why Choose Our Industry-Specific SEO
                  </h2>
                  <p className="text-lg text-seo-gray-dark mb-8">
                    When you partner with us for your industry-specific SEO needs, you benefit from:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <Building className="w-5 h-5 text-green-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-seo-dark mb-2">Industry Expertise</h3>
                        <p className="text-seo-gray-dark">
                          Our team has specialized knowledge in various industries, understanding the unique challenges and opportunities.
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
                          We have a track record of success across multiple industries, helping businesses improve their search visibility.
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
                          We develop industry-tailored strategies based on your specific business goals and competitive landscape.
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
                          We continuously refine our approach based on industry trends, performance data, and changing market conditions.
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
                    Ready to Dominate Your Industry's Search Results?
                  </h3>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-green-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-seo-dark">Increase Industry Visibility</h4>
                        <p className="text-sm text-seo-gray-dark">Rank higher for industry-specific searches</p>
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
                        <p className="text-sm text-seo-gray-dark">Attract customers looking specifically for your industry services</p>
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
                        <p className="text-sm text-seo-gray-dark">Turn industry-specific visitors into paying customers</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Button className="w-full bg-seo-blue hover:bg-seo-blue-light text-white py-6 text-lg">
                      Get Your Free Industry Audit
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
        filterTag="Industry" 
        className="bg-white"
      />
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Industries;
