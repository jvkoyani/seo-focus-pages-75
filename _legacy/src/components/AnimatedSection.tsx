
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-in' | 'fade-in-left' | 'fade-in-right' | 'slide-up' | 'zoom-in' | 'bounce-in';
  threshold?: number;
  duration?: number;
  onClick?: () => void; // Added onClick handler prop
}

const AnimatedSection = ({
  children,
  className,
  delay = 0,
  animation = 'fade-in',
  threshold = 0.2,
  duration = 500,
  onClick, // Added to props
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay, threshold]);

  const getAnimationClass = () => {
    if (!isVisible) return '';
    
    switch (animation) {
      case 'fade-in':
        return 'animate-fade-in';
      case 'fade-in-left':
        return 'animate-fade-in-left';
      case 'fade-in-right':
        return 'animate-fade-in-right';
      case 'slide-up':
        return 'animate-slide-up';
      case 'zoom-in':
        return 'animate-[zoom-in_0.5s_ease-out_forwards]';
      case 'bounce-in':
        return 'animate-[bounce-in_0.6s_cubic-bezier(0.17,0.67,0.83,0.67)_forwards]';
      default:
        return 'animate-fade-in';
    }
  };

  return (
    <div
      ref={sectionRef}
      className={cn(
        'opacity-0',
        getAnimationClass(),
        className
      )}
      style={{ 
        willChange: 'opacity, transform',
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards',
        animationDuration: `${duration}ms`
      }}
      onClick={onClick} // Added onClick handler
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
