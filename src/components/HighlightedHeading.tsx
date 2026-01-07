import React from 'react';
import { cn } from '@/lib/utils';

interface HighlightedHeadingProps {
    text: string;
    highlight: string;
    className?: string;
    align?: 'left' | 'center' | 'right';
}

const HighlightedHeading = ({ text, highlight, className, align = 'left' }: HighlightedHeadingProps) => {
    // Split the text by the highlight phrase, keeping the delimiter
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));

    return (
        <h2 className={cn(
            "text-3xl md:text-4xl font-display font-bold text-seo-dark leading-tight mb-6",
            align === 'center' && "text-center",
            align === 'right' && "text-right",
            className
        )}>
            {parts.map((part, index) => (
                part.toLowerCase() === highlight.toLowerCase() ? (
                    <span key={index} className="relative inline-block mx-1">
                        <span className="absolute inset-0 bg-cyan-200/50 -rotate-1 transform skew-x-12 rounded-sm" aria-hidden="true"></span>
                        <span className="relative z-10">{part}</span>
                    </span>
                ) : (
                    <span key={index}>{part}</span>
                )
            ))}
        </h2>
    );
};

export default HighlightedHeading;
