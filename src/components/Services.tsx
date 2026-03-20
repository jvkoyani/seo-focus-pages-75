'use client';

import React, { useState } from 'react';
import {
  MapPin, Settings, FileText, Link as LinkIcon, ShoppingCart, BarChart, ArrowRight, Sparkles
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { services } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  'map-pin': <MapPin className="h-6 w-6" />,
  'settings': <Settings className="h-6 w-6" />,
  'file-text': <FileText className="h-6 w-6" />,
  'link': <LinkIcon className="h-6 w-6" />,
  'shopping-cart': <ShoppingCart className="h-6 w-6" />,
  'bar-chart': <BarChart className="h-6 w-6" />
};

interface ServicesProps {
  location?: string;
  locationSlug?: string;
  title?: React.ReactNode;
}

const Services = ({ location, locationSlug, title }: ServicesProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-seo-clean via-sky-100 to-cyan-100">
      <div className="container mx-auto px-4 relative z-10 w-full max-w-7xl">
        <AnimatedSection className="mb-12 md:mb-16 max-w-3xl" animation="fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-black text-seo-navy mb-6 uppercase tracking-tight">
            {title ? title : (location
              ? <>SEO Services in <span className="text-seo-blue">{location}</span></>
              : <>Digital Marketing <span className="text-seo-blue">Services</span></>)}
          </h2>
          <p className="text-xl text-seo-navy/80 font-medium">
            {location
              ? `We help businesses in ${location} improve their search visibility and drive more qualified traffic.`
              : 'Our digital marketing campaigns are customised to meet your business and marketing goals.'}
          </p>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row gap-0 lg:gap-8 min-h-[500px]">
          {/* Left Column: Vertical Tabs */}
          <div className="w-full lg:w-1/3 flex flex-col relative z-20">
            {services.map((service, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative flex items-center w-full text-left py-4 sm:py-6 px-4 transition-all duration-300 border-l-4 ${isActive ? 'bg-transparent border-seo-navy' : 'border-transparent hover:bg-white/40'}`}
                >
                  <span className={`text-4xl sm:text-5xl font-display font-black mr-6 transition-colors duration-300 ${isActive ? 'text-seo-navy' : 'text-seo-navy/20 group-hover:text-seo-navy/40'}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={`text-lg sm:text-2xl font-bold transition-colors duration-300 ${isActive ? 'text-seo-navy' : 'text-seo-navy/60 group-hover:text-seo-navy'}`}>
                    {service.title}
                  </span>
                  
                  {/* Supple Pointer Triangle */}
                  {isActive && (
                    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-[40px] w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[20px] border-l-seo-clean z-30"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Content Card */}
          <div className="w-full lg:w-2/3 mt-8 lg:mt-0 relative z-10 transition-all duration-500 min-h-[400px]">
            <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-2xl border border-white/50 h-full flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-seo-blue/5">
                {iconMap[activeService.icon]}
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-display font-black text-seo-navy mb-6 relative z-10">
                {activeService.title}
              </h3>
              
              <p className="text-slate-600 text-lg sm:text-xl font-medium mb-8 leading-relaxed max-w-2xl relative z-10">
                {activeService.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10 relative z-10">
                {activeService.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 bg-seo-clean rounded-xl p-4 border border-blue-100 hover:scale-[1.02] transition-transform duration-300 group cursor-default">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-seo-blue group-hover:bg-seo-blue group-hover:text-white transition-colors duration-300 shadow-sm shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <span className="text-seo-navy font-bold text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto relative z-10">
                <a
                  href={locationSlug ? `/areas-we-serve/${locationSlug}/${activeService.slug}` : `/service/${activeService.slug}`}
                  className="inline-flex items-center justify-center gap-3 bg-seo-peach hover:bg-seo-navy text-seo-navy hover:text-white uppercase tracking-wider font-bold py-4 px-8 rounded-md transition-colors duration-300 shadow-lg w-full sm:w-auto"
                >
                  <span className="whitespace-nowrap">Explore {activeService.title}</span>
                  <ArrowRight className="w-5 h-5 flex-shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
