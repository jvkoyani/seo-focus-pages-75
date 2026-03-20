import React from 'react';

import Image from 'next/image';
import { ArrowRight, Building, TrendingUp, Target } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { CaseStudyData } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

interface CaseStudyPreviewProps {
  caseStudy: CaseStudyData;
  delay?: number;
}

const CaseStudyPreview = ({ caseStudy, delay = 0 }: CaseStudyPreviewProps) => {
  return (
    <AnimatedSection
      className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-[400px] sm:h-[480px] w-full"
      animation="slide-up"
      delay={delay}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={caseStudy.image}
          alt={caseStudy.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-seo-navy/95 via-seo-navy/40 to-black/20 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-seo-navy via-transparent to-transparent opacity-90"></div>
        {/* Supple style glowing border overlay */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-seo-blue/50 rounded-2xl transition-colors duration-500 z-20 pointer-events-none"></div>
      </div>

      <div className="absolute top-4 left-4 z-10 flex gap-2">
         {/* Industry Badge */}
         <Badge className="bg-seo-navy text-white border border-white/20 px-3 py-1.5 text-xs font-bold uppercase tracking-wide backdrop-blur-md">
           <Building className="w-3 h-3 mr-1.5 text-seo-peach" />
           {caseStudy.industry}
         </Badge>
      </div>

      <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white w-full">
          <p className="text-xs sm:text-sm text-seo-peach font-bold uppercase tracking-wider mb-2 drop-shadow-md">
            Success Story
          </p>
          <h3 className="text-2xl sm:text-3xl font-display font-black mb-6 drop-shadow-md leading-tight text-white line-clamp-3">
            {caseStudy.title}
          </h3>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            {caseStudy.results.slice(0, 2).map((result, index) => {
               // Extract large numerical stats to mimic the Web Story massive overlay numbers
               const firstSpace = result.indexOf(' ');
               const stat = firstSpace > -1 ? result.substring(0, firstSpace) : result;
               const label = firstSpace > -1 ? result.substring(firstSpace + 1) : "Increase";
               
               return (
                 <div key={index} className="flex flex-col">
                   <div className="flex items-center gap-1 mb-1">
                     {index === 0 ? <TrendingUp className="w-4 h-4 text-seo-peach" /> : <Target className="w-4 h-4 text-seo-blue" />}
                     <span className="text-3xl sm:text-4xl font-display font-black text-white drop-shadow-lg tracking-tighter">{stat}</span>
                   </div>
                   <span className="text-[10px] sm:text-xs font-medium text-slate-200 uppercase leading-snug drop-shadow-md">{label}</span>
                 </div>
               )
            })}
          </div>

          <a href={`/case-study/${caseStudy.slug}`} className="w-full mt-auto block">
            <button
              className="w-full flex items-center justify-between px-6 py-4 bg-white/10 hover:bg-seo-peach hover:text-seo-navy text-white backdrop-blur-md border border-white/20 font-bold uppercase tracking-wider text-sm transition-all duration-300 rounded-md group/btn"
            >
              <span>Read Story</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </a>
      </div>
    </AnimatedSection>
  );
};

export default CaseStudyPreview;
