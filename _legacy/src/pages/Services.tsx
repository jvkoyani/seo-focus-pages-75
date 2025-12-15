
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import ServicesComponent from '@/components/Services';
import BlogPreview from '@/components/BlogPreview';
import CaseStudyPreview from '@/components/CaseStudyPreview';
import Hero from '@/components/Hero';
import ResourcesSection from '@/components/ResourcesSection';
import { services, blogPosts, caseStudies } from '@/lib/data';

const Services = () => {
  // Find related blog posts and case studies about SEO services
  const relatedBlogs = blogPosts.slice(0, 3);
  const relatedCaseStudies = caseStudies.slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        title="Comprehensive SEO Solutions for Your Business"
        subtitle="Data-driven strategies designed to increase visibility, drive qualified traffic, and boost conversions"
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
      />
      
      {/* Main Services Grid */}
      <ServicesComponent />
      
      {/* Our Methodology Section */}
      <section className="py-20 bg-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Our Methodology
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
              A Proven Process That Delivers Results
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Our systematic approach ensures consistent, measurable SEO results for your business
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                title: "Research & Analysis", 
                desc: "We analyze your website, competitors, and target market to identify opportunities.", 
                icon: "🔍",
                link: "/methodology/research-analysis" 
              },
              { 
                title: "Strategic Planning", 
                desc: "We create a customized SEO strategy tailored to your business goals.", 
                icon: "📊",
                link: "/methodology/strategic-planning" 
              },
              { 
                title: "Implementation", 
                desc: "We execute the strategy with technical expertise and proven tactics.", 
                icon: "🛠️",
                link: "/methodology/implementation" 
              },
              { 
                title: "Monitoring & Optimization", 
                desc: "We continuously track, report, and refine for maximum impact.", 
                icon: "📈",
                link: "/methodology/monitoring-optimization" 
              }
            ].map((step, index) => (
              <AnimatedSection 
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
                animation="fade-in"
                delay={index * 100}
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-seo-gray-dark mb-6 flex-grow">
                  {step.desc}
                </p>
                <Link to={step.link} className="inline-flex items-center text-seo-blue font-medium group mt-auto">
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
      
      {/* Local SEO Services in Australia Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Local Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
              Local SEO Services in Australia
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Customized SEO solutions for businesses across major Australian cities
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                city: "Sydney",
                desc: "Dominate local search results in Australia's largest city",
                image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1000&auto=format&fit=crop",
                link: "/location/sydney"
              },
              {
                city: "Melbourne",
                desc: "Boost your visibility in Melbourne's competitive market",
                image: "https://images.unsplash.com/photo-1545044846-351ba102b6d5?q=80&w=1000&auto=format&fit=crop",
                link: "/location/melbourne"
              },
              {
                city: "Brisbane",
                desc: "Targeted strategies for Brisbane's growing business landscape",
                image: "https://images.unsplash.com/photo-1566734904496-9309bb1798b3?q=80&w=1000&auto=format&fit=crop",
                link: "/location/brisbane"
              },
              {
                city: "Perth",
                desc: "Custom SEO solutions for Perth's unique market dynamics",
                image: "https://images.unsplash.com/photo-1573935448851-4b07c29ee181?q=80&w=1000&auto=format&fit=crop",
                link: "/location/perth"
              },
              {
                city: "Adelaide",
                desc: "Specialized local SEO tactics for Adelaide businesses",
                image: "https://images.unsplash.com/photo-1566208541068-ffdb5471e9bf?q=80&w=1000&auto=format&fit=crop",
                link: "/location/adelaide"
              },
              {
                city: "Gold Coast",
                desc: "Strategic SEO for Queensland's tourist hotspot",
                image: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?q=80&w=1000&auto=format&fit=crop",
                link: "/location/gold-coast"
              }
            ].map((location, index) => (
              <AnimatedSection
                key={index}
                className="group relative rounded-xl overflow-hidden shadow-md h-64"
                animation="fade-in"
                delay={index * 100}
              >
                <img
                  src={location.image}
                  alt={`SEO services in ${location.city}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-seo-dark/90 to-seo-dark/20 flex flex-col justify-end p-6 transition-opacity duration-300">
                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    {location.city}
                  </h3>
                  <p className="text-white/80 mb-4 text-sm">
                    {location.desc}
                  </p>
                  <Link
                    to={location.link}
                    className="inline-flex items-center text-white font-medium group"
                  >
                    <span className="border-b border-white/30 group-hover:border-white transition-colors">
                      Explore Services
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="py-20 bg-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl font-display font-bold text-seo-dark mb-4">
              Case Studies & Results
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Real results for businesses like yours
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
      
      {/* Resources & Insights Section */}
      <ResourcesSection />
      
      {/* CTA Section */}
      <section className="py-24 bg-seo-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M39.9,-65.7C50.3,-59.6,56.4,-45.7,64.1,-31.9C71.8,-18,81,-4.1,79.9,8.7C78.8,21.5,67.4,33.1,56.4,43.9C45.4,54.6,35,64.5,22.1,70.2C9.2,75.9,-6.1,77.5,-18.6,72.2C-31.1,66.9,-40.8,54.6,-49.9,42.5C-59,30.4,-67.6,18.5,-70.9,4.8C-74.2,-8.9,-72.3,-24.3,-64.5,-36.3C-56.7,-48.3,-43.1,-56.7,-29.9,-61.6C-16.8,-66.5,-4.2,-67.8,8.4,-66.7C21,-65.5,29.4,-71.8,39.9,-65.7Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection 
            className="max-w-3xl mx-auto text-center" 
            animation="fade-in"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white mb-6">
              Get Started Today
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Ready to Dominate Search Results?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Partner with us for a customized SEO strategy that drives real business growth. Let's take your online presence to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/free-consultation"
                className="bg-seo-blue hover:bg-seo-blue-light text-white px-8 py-4 rounded-md font-medium transition-colors"
              >
                Get a Free Consultation
              </Link>
              <Link
                to="/seo-audit"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-md font-medium transition-colors border border-white/20"
              >
                Request Free Audit
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

export default Services;
