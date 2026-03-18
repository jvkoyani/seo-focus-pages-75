/**
 * Testimonials — Server Component
 * 
 * Optimized for SSR: all testimonials are rendered in the HTML.
 * Uses a CSS marquee effect for motion without JavaScript.
 * This ensures search engines and LLMs can read every success story.
 */

import React from 'react';
import { Quote, Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { testimonials } from '@/lib/data';

interface TestimonialsProps {
  location?: string;
}

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="w-80 md:w-96 flex-shrink-0 mx-4">
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10 shadow-xl h-full flex flex-col">
            <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-amber-500 fill-current" />
                ))}
            </div>
            
            <div className="relative mb-6 flex-grow">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-white/5" />
                <p className="text-white/90 leading-relaxed italic font-light relative z-10">
                    &quot;{testimonial.quote}&quot;
                </p>
            </div>

            <div className="pt-6 border-t border-white/10 mt-auto">
                <h4 className="text-white font-bold">{testimonial.name}</h4>
                <p className="text-slate-400 text-sm">{testimonial.company}</p>
                <p className="text-slate-500 text-xs mt-1">{testimonial.location}</p>
            </div>
        </div>
    </div>
);

const Testimonials = ({ location }: TestimonialsProps) => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection
          className="text-center mb-16 max-w-3xl mx-auto"
          animation="fade-in"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 border border-amber-500/30 mb-6">
            <Star className="w-4 h-4 fill-current" />
            Client Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Don&apos;t Take Our Word For It
          </h2>
          <p className="text-xl text-slate-400">
            {location
              ? `Hear from ${location} businesses we've helped achieve SEO success`
              : 'Real feedback from businesses we\'ve helped grow'}
          </p>
        </AnimatedSection>

        {/* CSS Marquee for Testimonials */}
        <div className="relative flex overflow-x-hidden group py-10">
            {/* First Row Marquee */}
            <div className="animate-marquee-slow whitespace-nowrap flex items-stretch">
                {testimonials.map((t, i) => (
                    <TestimonialCard key={`t1-${i}`} testimonial={t} />
                ))}
                {/* Clone for loop */}
                {testimonials.map((t, i) => (
                    <TestimonialCard key={`t1-clone-${i}`} testimonial={t} />
                ))}
            </div>
            
            {/* Second Row Marquee (Duplicate for seamlessness) */}
            <div className="absolute top-10 animate-marquee-slow-2 whitespace-nowrap flex items-stretch">
                {testimonials.map((t, i) => (
                    <TestimonialCard key={`t2-${i}`} testimonial={t} />
                ))}
                {/* Clone for loop */}
                {testimonials.map((t, i) => (
                    <TestimonialCard key={`t2-clone-${i}`} testimonial={t} />
                ))}
            </div>
        </div>

        <AnimatedSection
          className="text-center mt-12"
          animation="fade-in"
          delay={500}
        >
          <div className="inline-flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-left">
              <p className="text-white font-bold text-2xl">4.9/5</p>
              <p className="text-slate-400 text-sm">Average rating from 250+ clients</p>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-xs font-bold text-white">
                    {String.fromCharCode(64 + i)}
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-2 border-slate-900 bg-seo-blue flex items-center justify-center text-xs font-bold text-white">
                +246
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .animate-marquee-slow {
            animation: marquee 60s linear infinite;
        }
        .animate-marquee-slow-2 {
            animation: marquee2 60s linear infinite;
        }
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        @keyframes marquee2 {
            0% { transform: translateX(50%); }
            100% { transform: translateX(0); }
        }
      `}} />
    </section>
  );
};

export default Testimonials;
