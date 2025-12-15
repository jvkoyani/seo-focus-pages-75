'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    MapPin, Settings, FileText, Link2, ShoppingCart, BarChart,
    ArrowRight
} from 'lucide-react';

const services = [
    {
        title: 'Local SEO',
        description: 'Dominate local search results',
        icon: MapPin,
        color: 'from-blue-500 to-cyan-400',
        slug: 'local-seo'
    },
    {
        title: 'Technical SEO',
        description: 'Optimize site performance',
        icon: Settings,
        color: 'from-purple-500 to-pink-400',
        slug: 'technical-seo'
    },
    {
        title: 'Content Strategy',
        description: 'Engaging content that ranks',
        icon: FileText,
        color: 'from-amber-500 to-orange-400',
        slug: 'content-strategy'
    },
    {
        title: 'Link Building',
        description: 'Authority-boosting backlinks',
        icon: Link2,
        color: 'from-green-500 to-emerald-400',
        slug: 'link-building'
    },
    {
        title: 'E-commerce SEO',
        description: 'Scale online store traffic',
        icon: ShoppingCart,
        color: 'from-rose-500 to-red-400',
        slug: 'ecommerce-seo'
    },
    {
        title: 'Analytics & Reporting',
        description: 'Data-driven insights',
        icon: BarChart,
        color: 'from-indigo-500 to-violet-400',
        slug: 'analytics-reporting'
    },
];

const ServiceCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-rotate when not hovered
    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % services.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [isHovered]);

    const getCardStyle = (index: number) => {
        const diff = (index - activeIndex + services.length) % services.length;

        // Create stacked/fan effect
        const configs: Record<number, {
            translateX: string;
            translateY: string;
            rotate: string;
            scale: number;
            zIndex: number;
            opacity: number
        }> = {
            0: { translateX: '0px', translateY: '0px', rotate: '0deg', scale: 1, zIndex: 60, opacity: 1 },
            1: { translateX: '40px', translateY: '-30px', rotate: '8deg', scale: 0.95, zIndex: 50, opacity: 0.9 },
            2: { translateX: '70px', translateY: '-55px', rotate: '15deg', scale: 0.9, zIndex: 40, opacity: 0.8 },
            3: { translateX: '85px', translateY: '-75px', rotate: '20deg', scale: 0.85, zIndex: 30, opacity: 0.6 },
            4: { translateX: '-40px', translateY: '-30px', rotate: '-8deg', scale: 0.95, zIndex: 20, opacity: 0.7 },
            5: { translateX: '-70px', translateY: '-55px', rotate: '-15deg', scale: 0.9, zIndex: 10, opacity: 0.5 },
        };

        const config = configs[diff] || { translateX: '0px', translateY: '-100px', rotate: '25deg', scale: 0.8, zIndex: 0, opacity: 0 };

        return {
            transform: `translateX(${config.translateX}) translateY(${config.translateY}) rotate(${config.rotate}) scale(${config.scale})`,
            zIndex: config.zIndex,
            opacity: config.opacity,
        };
    };

    return (
        <div
            className="relative h-[400px] w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Service Cards Stack */}
            <div className="absolute inset-0 flex items-center justify-center">
                {services.map((service, index) => {
                    const Icon = service.icon;
                    const style = getCardStyle(index);
                    const isActive = index === activeIndex;

                    return (
                        <Link
                            key={service.slug}
                            href={`/service/${service.slug}`}
                            className={`absolute w-64 transition-all duration-500 ease-out cursor-pointer group`}
                            style={style}
                            onClick={(e) => {
                                if (!isActive) {
                                    e.preventDefault();
                                    setActiveIndex(index);
                                }
                            }}
                        >
                            <div className={`
                bg-white rounded-2xl p-6 shadow-2xl border border-gray-100
                ${isActive ? 'shadow-blue-500/20' : ''}
                group-hover:shadow-xl transition-shadow duration-300
              `}>
                                {/* Icon */}
                                <div className={`
                  w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} 
                  flex items-center justify-center mb-4
                  group-hover:scale-110 transition-transform duration-300
                `}>
                                    <Icon className="w-7 h-7 text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-slate-900 mb-1">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-slate-500 mb-4">
                                    {service.description}
                                </p>

                                {/* CTA - only show on active card */}
                                {isActive && (
                                    <div className="flex items-center text-seo-blue font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span>Learn more</span>
                                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                )}
                            </div>
                        </Link>
                    );
                })}
            </div>

            {/* Navigation Dots */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {services.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${index === activeIndex
                                ? 'w-6 bg-seo-blue'
                                : 'bg-white/30 hover:bg-white/50'
                            }
            `}
                        aria-label={`Go to service ${index + 1}`}
                    />
                ))}
            </div>

            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none" />
        </div>
    );
};

export default ServiceCarousel;
