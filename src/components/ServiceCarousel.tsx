'use client';

import React from 'react';
import Link from 'next/link';
import { services } from '@/lib/data';
import {
    MapPin,
    Settings,
    FileText,
    Link as LinkIcon,
    ShoppingCart,
    BarChart,
    Zap,
    Search
} from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
    'map-pin': MapPin,
    'settings': Settings,
    'file-text': FileText,
    'link': LinkIcon,
    'shopping-cart': ShoppingCart,
    'bar-chart': BarChart,
    'zap': Zap,
    'search': Search
};

const ServiceCarousel = () => {
    // Duplicate services for infinite scroll effect
    const carouselItems = [...services, ...services];

    return (
        <div className="relative w-full h-[600px] overflow-hidden mask-gradient-y">
            {/* Gradient Overlays for smooth fade in/out */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-slate-950 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-950 to-transparent z-10"></div>

            <div className="grid grid-cols-2 gap-4 animate-scroll-vertical">
                {carouselItems.map((service, index) => (
                    <ServiceCard key={`${service.id}-${index}`} service={service} />
                ))}
            </div>
        </div>
    );
};

const ServiceCard = ({ service }: { service: typeof services[0] }) => {
    const Icon = iconMap[service.icon] || Search;

    return (
        <Link
            href={`/service/${service.slug}`}
            className="group relative flex flex-col items-center justify-center bg-[#111] rounded-2xl p-6 aspect-square overflow-hidden transition-all duration-300 hover:-translate-y-1"
        >
            {/* Green Gradient Border Effect */}
            <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-green-400/20 to-emerald-600/20 group-hover:from-green-400 group-hover:to-emerald-500 transition-colors duration-300">
                <div className="absolute inset-0 bg-[#111] rounded-2xl m-[1px]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-green-500 group-hover:text-green-400 transition-colors" />
                </div>

                <span className="text-white font-medium text-sm md:text-base group-hover:text-green-400 transition-colors">
                    {service.title}
                </span>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </Link>
    );
};

export default ServiceCarousel;
