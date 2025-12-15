
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building, TrendingUp } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { CaseStudyData } from '@/lib/data';

interface CaseStudyPreviewProps {
  caseStudy: CaseStudyData;
  delay?: number;
}

const CaseStudyPreview = ({ caseStudy, delay = 0 }: CaseStudyPreviewProps) => {
  return (
    <AnimatedSection
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row h-full"
      animation="fade-in"
      delay={delay}
    >
      <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
        <img 
          src={caseStudy.image} 
          alt={caseStudy.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6 md:w-3/5">
        <div className="flex items-center text-sm text-seo-gray-dark mb-3">
          <span className="flex items-center">
            <Building className="h-4 w-4 mr-1" />
            {caseStudy.industry}
          </span>
        </div>
        <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
          {caseStudy.title}
        </h3>
        <p className="text-seo-gray-dark mb-4">
          {caseStudy.challenge.split('.')[0]}.
        </p>
        <div className="mb-4">
          <div className="font-medium text-seo-dark mb-2">Key Results:</div>
          <div className="grid grid-cols-1 gap-2">
            {caseStudy.results.slice(0, 2).map((result, index) => (
              <div key={index} className="flex items-start">
                <TrendingUp className="h-4 w-4 text-seo-blue mt-1 mr-2 flex-shrink-0" />
                <span className="text-sm text-seo-gray-dark">{result}</span>
              </div>
            ))}
          </div>
        </div>
        <Link 
          to={`/case-study/${caseStudy.slug}`} 
          className="inline-flex items-center text-seo-blue font-medium group"
        >
          <span className="border-b border-seo-blue/30 group-hover:border-seo-blue transition-colors">
            Read full case study
          </span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </AnimatedSection>
  );
};

export default CaseStudyPreview;
