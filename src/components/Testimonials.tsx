'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { testimonials } from '@/lib/data';

interface TestimonialsProps {
  location?: string;
}

const Testimonials = ({ location }: TestimonialsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
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
            Don't Take Our Word For It
          </h2>
          <p className="text-xl text-slate-400">
            {location
              ? `Hear from ${location} businesses we've helped achieve SEO success`
              : 'Real feedback from businesses we\'ve helped grow'}
          </p>
        </AnimatedSection>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial Card */}
          <AnimatedSection
            key={activeIndex}
            className="relative"
            animation="fade-in"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
              {/* Quote Icon */}
              <div className="absolute -top-6 left-8 md:left-12">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 items-center pt-4">
                {/* Photo */}
                <div className="relative">
                  <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden ring-4 ring-white/10">
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Rating Badge */}
                  <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl px-3 py-1.5 shadow-lg">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-3 h-3 text-white fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 leading-relaxed italic">
                    "{testimonials[activeIndex].quote}"
                  </p>

                  <div>
                    <h4 className="text-xl font-display font-bold text-white mb-1">
                      {testimonials[activeIndex].name}
                    </h4>
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-400">
                      <span>{testimonials[activeIndex].company}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                      <span>{testimonials[activeIndex].location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Badge (if applicable) */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <div className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                    <span className="text-green-400 font-semibold text-sm">↑ 180% Traffic Increase</span>
                  </div>
                  <div className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                    <span className="text-blue-400 font-semibold text-sm">🎯 Page 1 Rankings</span>
                  </div>
                  <div className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
                    <span className="text-purple-400 font-semibold text-sm">💰 3x ROI</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            {/* Prev Button */}
            <button
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 border border-white/10"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex
                      ? 'w-8 bg-gradient-to-r from-amber-500 to-orange-500'
                      : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setActiveIndex(index);
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 border border-white/10"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
