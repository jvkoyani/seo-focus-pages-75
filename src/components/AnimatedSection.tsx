/**
 * AnimatedSection — Server Component (no 'use client')
 *
 * Renders children fully visible in the initial HTML for SSR/SSG.
 * Animations are CSS-only (keyframes), triggered immediately on load —
 * no JavaScript, no IntersectionObserver, no opacity-0 flash.
 *
 * Google and LLM crawlers see 100% rendered content from first byte.
 */

import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-in' | 'fade-in-left' | 'fade-in-right' | 'slide-up' | 'zoom-in' | 'bounce-in';
  threshold?: number;  // kept for API compat, unused server-side
  duration?: number;
  onClick?: never;     // not supported in Server Component
}

const animationClassMap: Record<string, string> = {
  'fade-in':       'ssr-fade-in',
  'fade-in-left':  'ssr-fade-in-left',
  'fade-in-right': 'ssr-fade-in-right',
  'slide-up':      'ssr-slide-up',
  'zoom-in':       'ssr-zoom-in',
  'bounce-in':     'ssr-fade-in',
};

const AnimatedSection = ({
  children,
  className,
  delay = 0,
  animation = 'fade-in',
  duration = 500,
}: AnimatedSectionProps) => {
  const animClass = animationClassMap[animation] ?? 'ssr-fade-in';

  return (
    <div
      className={cn(animClass, className)}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        animationFillMode: 'both',
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
