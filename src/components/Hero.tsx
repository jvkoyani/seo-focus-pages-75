
import { ArrowRight, ChevronDown, Play, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';
import FatJoeCarousel from './FatJoeCarousel';

interface HeroProps {
  title?: string;
  subtitle?: string;
  location?: string;
  backgroundImage?: string;
}

const Hero = ({
  title,
  subtitle,
  location,
  backgroundImage,
}: HeroProps) => {
  // Default problem-focused content for homepage
  const defaultTitle = location
    ? `Dominate ${location} Search Results`
    : "Your Competitors Are Stealing Your Customers Right Now";

  const defaultSubtitle = location
    ? `Data-driven SEO strategies tailored for ${location} businesses`
    : "While you're reading this, they're ranking higher and capturing leads that should be yours";

  const displayTitle = title || defaultTitle;
  const displaySubtitle = subtitle || defaultSubtitle;

  return (
    <div className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>

        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>

        {/* Radial gradient spotlight */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-radial from-blue-500/20 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="max-w-2xl">
            <AnimatedSection
              className="mb-4"
              animation="fade-in"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-slate-300">
                  {location ? `${location} SEO Experts` : 'Australia\'s #1 SEO Agency'}
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection
              className="mb-6"
              animation="fade-in-left"
              delay={200}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                <span className="text-white">{displayTitle.split(' ').slice(0, -3).join(' ')} </span>
                <span className="bg-gradient-to-r from-seo-blue via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {displayTitle.split(' ').slice(-3).join(' ')}
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection
              className="mb-8"
              animation="fade-in"
              delay={400}
            >
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
                {displaySubtitle}
              </p>
            </AnimatedSection>

            {/* Trust Points */}
            <AnimatedSection
              className="mb-10"
              animation="fade-in"
              delay={500}
            >
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>No lock-in contracts</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Results in 90 days</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>250+ businesses helped</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection
              className="flex flex-col sm:flex-row gap-4"
              animation="fade-in"
              delay={600}
            >
              <Link
                href="/seo-audit"
                className="group relative bg-gradient-to-r from-seo-blue to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-[1.02] overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Free SEO Audit
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-seo-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/case-studies"
                className="group bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center border border-white/10 hover:border-white/20"
              >
                <Play className="h-5 w-5 mr-2" />
                <span>See Our Results</span>
              </Link>
            </AnimatedSection>
          </div>

          {/* Right Column - Service Carousel */}
          <AnimatedSection
            className="hidden lg:block relative z-10"
            animation="fade-in-right"
            delay={400}
          >
            <FatJoeCarousel />
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <AnimatedSection
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animation="fade-in"
          delay={1200}
        >
          <div className="flex flex-col items-center group cursor-pointer">
            <span className="text-slate-500 text-sm mb-2 group-hover:text-slate-300 transition-colors">Discover more</span>
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center group-hover:border-white/40 transition-colors">
              <div className="w-1.5 h-3 bg-white/40 rounded-full mt-2 animate-bounce group-hover:bg-white/60"></div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent z-10" />
    </div>
  );
};

export default Hero;

