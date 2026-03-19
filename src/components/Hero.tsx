/**
 * Hero — Server Component
 * 
 * 100% server-rendered. Zero JavaScript required for layout or initial animations.
 * Provides critical title and subtitle content directly in the SSR HTML.
 */

import React from 'react';
import { ArrowRight, Play, CheckCircle2, Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import HeroDashboardPreview from './HeroDashboardPreview';

interface HeroProps {
  title?: string;
  subtitle?: string;
  location?: string;
  backgroundImage?: string;
  rightContent?: React.ReactNode;
}

const Hero = ({
  title,
  subtitle,
  location,
  rightContent,
}: HeroProps) => {
  // Default problem-focused content for homepage
  const defaultTitle = location
    ? `Dominate ${location} Search Results`
    : "Your Competitors Are Stealing Your Customers";

  const defaultSubtitle = location
    ? `Data-driven SEO strategies tailored for ${location} businesses`
    : "Stop losing revenue. We help Australian businesses rank #1, drive qualified traffic, and turn clicks into customers.";

  const displayTitle = title || defaultTitle;
  const displaySubtitle = subtitle || defaultSubtitle;

  return (
    <div className="relative min-h-[75vh] md:min-h-screen flex items-center pt-12 md:pt-20 pb-4 md:pb-0 overflow-hidden bg-slate-950">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Spotlights */}
        <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent blur-3xl" />
        <div aria-hidden="true" className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div aria-hidden="true" className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 items-center">

          {/* Left Column: Text Content */}
          <div className="max-w-2xl">
            <AnimatedSection animation="fade-in">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-4 md:mb-8 hover:bg-white/10 transition-colors cursor-default">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border-2 border-slate-950 flex items-center justify-center text-[10px] text-white font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-sm text-slate-300 pl-2">
                  <span className="text-yellow-400 flex items-center">
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                  </span>
                  <span className="font-medium">Trusted by 250+ Founders</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={100}>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-2 md:mb-6 text-white">
                {displayTitle.split(' ').slice(0, -2).join(' ')}{' '}
                <span className="relative whitespace-nowrap">
                  <span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {displayTitle.split(' ').slice(-2).join(' ')}
                  </span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-500/20 -rotate-1 -z-10 blur-sm"></span>
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={200}>
              <p className="text-sm sm:text-lg md:text-xl text-slate-400 leading-relaxed mb-3 md:mb-8 max-w-lg line-clamp-3 sm:line-clamp-none">
                {displaySubtitle}
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={300}>
              <div className="flex flex-col sm:flex-row gap-3 mb-6 md:mb-12">
                <a
                  href="/seo-audit"
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-950 rounded-full font-bold text-base sm:text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] flex items-center justify-center w-full sm:w-auto"
                >
                  Get Free Audit
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/case-studies"
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg text-white border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center group w-full sm:w-auto"
                >
                  <Play className="w-4 h-4 mr-2 fill-current group-hover:scale-110 transition-transform" />
                  View Case Studies
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={400}>
              <div className="flex items-center gap-4 sm:gap-8 text-xs sm:text-sm font-medium text-slate-500 border-t border-white/5 pt-4 sm:pt-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Results in 90 Days</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>No Lock-in Contracts</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: 3D Dashboard Preview */}
          <div className="hidden lg:block perspective-1000">
            {rightContent || <HeroDashboardPreview />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
