
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

interface HeroProps {
  title?: string;
  subtitle?: string;
  location?: string;
  backgroundImage?: string;
}

const Hero = ({
  title = "Boost Your Search Rankings & Drive More Qualified Traffic",
  subtitle = "Data-driven SEO strategies tailored to your business goals",
  location,
  backgroundImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
}: HeroProps) => {
  return (
    <div className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Animated background with parallax effect */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed transform transition-transform duration-10000 hover:scale-105"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-seo-dark/90 to-seo-dark/50" />
        
        {/* Animated dots overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 2px, transparent 2px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-16 md:py-20">
        <div className="max-w-3xl">
          <AnimatedSection 
            className="mb-2" 
            animation="fade-in"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white backdrop-blur-sm border border-white/20">
              {location ? `${location} SEO Services` : 'Data-Driven SEO Agency'}
            </span>
          </AnimatedSection>
          
          <AnimatedSection 
            className="mb-6" 
            animation="fade-in-left" 
            delay={200}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
              {title}
            </h1>
          </AnimatedSection>
          
          <AnimatedSection 
            className="mb-10" 
            animation="fade-in" 
            delay={400}
          >
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              {subtitle}
            </p>
          </AnimatedSection>
          
          <AnimatedSection 
            className="flex flex-col sm:flex-row gap-4" 
            animation="fade-in" 
            delay={600}
          >
            <Link
              to="/seo-audit"
              className="bg-seo-blue hover:bg-seo-blue-light text-white px-8 py-4 rounded-md font-medium text-lg transition-all duration-300 flex items-center justify-center relative overflow-hidden group"
            >
              <span className="relative z-10">Get Free SEO Audit</span>
              <ArrowRight className="ml-2 h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-seo-blue-light to-seo-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              to="/services"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-md font-medium text-lg transition-all duration-300 flex items-center justify-center border border-white/20 hover:border-white/30"
            >
              Our Services
            </Link>
          </AnimatedSection>

          {/* Stats with improved visuals */}
          <AnimatedSection 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8" 
            animation="slide-up" 
            delay={800}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center relative overflow-hidden group hover:bg-white/15 transition-all duration-300 border border-white/10 hover:border-white/20">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full"></div>
              <p className="text-4xl font-bold text-white mb-2 relative z-10">98%</p>
              <p className="text-white/80 text-sm relative z-10">Client Retention Rate</p>
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-400 to-green-300 w-0 group-hover:w-full transition-all duration-700"></div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center relative overflow-hidden group hover:bg-white/15 transition-all duration-300 border border-white/10 hover:border-white/20">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full"></div>
              <p className="text-4xl font-bold text-white mb-2 relative z-10">250+</p>
              <p className="text-white/80 text-sm relative z-10">Businesses Helped</p>
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-blue-300 w-0 group-hover:w-full transition-all duration-700"></div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center relative overflow-hidden group hover:bg-white/15 transition-all duration-300 border border-white/10 hover:border-white/20">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full"></div>
              <p className="text-4xl font-bold text-white mb-2 relative z-10">175%</p>
              <p className="text-white/80 text-sm relative z-10">Average Traffic Increase</p>
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-400 to-purple-300 w-0 group-hover:w-full transition-all duration-700"></div>
            </div>
          </AnimatedSection>
          
          {/* Scroll indicator */}
          <AnimatedSection 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2" 
            animation="bounce-in" 
            delay={1500}
          >
            <div className="flex flex-col items-center">
              <span className="text-white/60 text-sm mb-2">Scroll to explore</span>
              <ChevronDown className="h-6 w-6 text-white/60 animate-bounce" />
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </div>
  );
};

export default Hero;
