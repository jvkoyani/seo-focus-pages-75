"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Building, TrendingUp, BarChart3, Target } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { CaseStudyData } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface CaseStudyPreviewProps {
  caseStudy: CaseStudyData;
  delay?: number;
}

const CaseStudyPreview = ({ caseStudy, delay = 0 }: CaseStudyPreviewProps) => {
  return (
    <AnimatedSection
      className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-seo-blue/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
      animation="slide-up"
      delay={delay}
    >
      {/* Image Section */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={caseStudy.image}
          alt={caseStudy.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60"></div>

        {/* Industry Badge */}
        <div className="absolute top-4 left-4">
          <Badge className="bg-white/90 text-seo-dark hover:bg-white backdrop-blur-sm shadow-sm border-0 px-3 py-1.5 text-xs font-bold uppercase tracking-wide">
            <Building className="w-3 h-3 mr-1.5 text-seo-blue" />
            {caseStudy.industry}
          </Badge>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-display font-bold text-seo-dark mb-3 group-hover:text-seo-blue transition-colors line-clamp-2">
          {caseStudy.title}
        </h3>

        <p className="text-seo-gray-dark text-sm mb-6 line-clamp-2 flex-grow">
          {caseStudy.challenge}
        </p>

        {/* Key Results Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {caseStudy.results.slice(0, 2).map((result, index) => (
            <div key={index} className="bg-slate-50 rounded-lg p-3 border border-slate-100 group-hover:bg-seo-blue/5 group-hover:border-seo-blue/10 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                {index === 0 ? (
                  <TrendingUp className="w-4 h-4 text-green-500" />
                ) : (
                  <Target className="w-4 h-4 text-blue-500" />
                )}
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Result</span>
              </div>
              <p className="text-sm font-bold text-seo-dark leading-tight">
                {result}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-auto pt-4 border-t border-slate-100">
          <Link href={`/case-study/${caseStudy.slug}`} className="w-full">
            <Button
              variant="ghost"
              className="w-full justify-between hover:bg-seo-blue hover:text-white group/btn transition-all duration-300"
            >
              <span className="font-medium">Read Case Study</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CaseStudyPreview;
