
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';
import { CheckCircle } from 'lucide-react';

interface InfoCardProps {
  title: string;
  description?: string;
  items?: string[];
  icon?: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-left' | 'fade-in-right' | 'slide-up' | 'zoom-in' | 'bounce-in';
  delay?: number;
  iconBackground?: string;
  iconColor?: string;
  highlightText?: string;
  ctaText?: string;
  ctaLink?: string;
  hoverEffect?: boolean;
}

const InfoCard = ({
  title,
  description,
  items,
  icon,
  className,
  animation = 'fade-in',
  delay = 0,
  iconBackground = 'bg-seo-blue/10',
  iconColor = 'text-seo-blue',
  highlightText,
  ctaText,
  ctaLink,
  hoverEffect = true
}: InfoCardProps) => {
  return (
    <AnimatedSection
      className={cn(
        "bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100",
        hoverEffect && "hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
        className
      )}
      animation={animation}
      delay={delay}
    >
      <div className="p-6 relative">
        {/* Enhanced decorator element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-seo-blue/5 to-seo-blue/20 rounded-bl-full -z-0"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-seo-blue/5 to-transparent rounded-tr-full -z-0"></div>
        
        {icon && (
          <div className={cn("rounded-full w-16 h-16 flex items-center justify-center mb-4 relative z-10", iconBackground)}>
            <div className={cn("w-8 h-8", iconColor)}>
              {icon}
            </div>
          </div>
        )}
        
        <h3 className="text-xl font-display font-bold text-seo-dark mb-3 relative z-10">
          {title}
        </h3>
        
        {highlightText && (
          <div className="bg-amber-50 border-l-2 border-amber-400 p-3 mb-4 text-amber-800 text-sm rounded-r">
            {highlightText}
          </div>
        )}
        
        {description && (
          <p className="text-seo-gray-dark mb-4 relative z-10">
            {description}
          </p>
        )}
        
        {items && items.length > 0 && (
          <ul className="space-y-2 mb-4 relative z-10">
            {items.map((item, index) => (
              <li key={index} className="flex items-start group">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0 group-hover:text-green-600 transition-colors" />
                <span className="text-seo-gray-dark group-hover:text-seo-dark transition-colors">{item}</span>
              </li>
            ))}
          </ul>
        )}
        
        {ctaText && ctaLink && (
          <a 
            href={ctaLink} 
            className="inline-flex mt-2 items-center justify-center px-4 py-2 bg-seo-blue text-white rounded-md hover:bg-seo-blue-light transition-colors w-full relative z-10"
          >
            {ctaText}
          </a>
        )}
      </div>
    </AnimatedSection>
  );
};

export default InfoCard;
