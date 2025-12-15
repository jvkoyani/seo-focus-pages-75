'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
    { title: 'Infographic Design', image: 'https://cdn.fatjoe.com/wp-content/uploads/2023/08/infographic-design.png', link: '/infographic-design' },
    { title: 'Media Placements DR 50+', image: 'https://cdn.fatjoe.com/wp-content/uploads/2023/08/media-placement.png', link: '/media-placements' },
    { title: 'Social Video Ads', image: null, link: '/video-ads', isCanvas: true },
    { title: 'Explainer Videos', image: 'https://cdn.fatjoe.com/wp-content/uploads/2023/08/explainer-video.png', link: '/explainer-video' },
    { title: 'Blog 2 Video', image: null, link: '/blog-2-video', isCanvas: true },
    { title: 'Blog Writing Service', image: null, link: '/blog-writing', isCanvas: true },
    { title: 'Article Writing', image: 'https://cdn.fatjoe.com/wp-content/uploads/2023/08/article-writing.png', link: '/article-writing' },
    { title: 'Product Descriptions', image: 'https://cdn.fatjoe.com/wp-content/uploads/2023/08/product-description.png', link: '/product-descriptions' },
    { title: 'Keyword Research', image: null, link: '/keyword-research', isCanvas: true },
    { title: 'Multilingual Outreach', image: null, link: '/multilingual-outreach', isCanvas: true },
    { title: 'Infographic Outreach', image: 'https://cdn.fatjoe.com/wp-content/uploads/2023/08/infographic-outreach.png', link: '/infographic-outreach' },
    { title: 'Content Syndication', image: 'https://cdn.fatjoe.com/wp-content/uploads/2023/08/content-syndication.png', link: '/content-syndication' },
    { title: 'Website Copywriting', image: 'https://cdn.fatjoe.com/wp-content/uploads/2023/08/website-copywriting.png', link: '/website-copywriting' },
    { title: 'Blogger Outreach', image: null, link: '/blogger-outreach', isCanvas: true },
    { title: 'Press Release Writing', image: 'https://cdn.fatjoe.com/wp-content/uploads/2023/08/press-release-distribution.png', link: '/press-release-writing' },
    { title: 'Local Citation Building', image: 'https://cdn.fatjoe.com/wp-content/uploads/2023/08/local-citation-building.png', link: '/local-citation-building' },
    { title: 'Niche Edits', image: null, link: '/niche-edits', isCanvas: true },
    { title: 'Press Release Distribution', image: 'https://cdn.fatjoe.com/wp-content/uploads/2023/08/press-release-distribution.png', link: '/press-release-distribution' },
    { title: 'Digital PR Campaigns', image: null, link: '/pr-campaigns', isCanvas: true },
];

const FatJoeCarousel = () => {
    return (
        <div className="relative w-full h-[600px] overflow-hidden mask-gradient-y">
            {/* Gradient Overlays for smooth fade in/out */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-slate-950 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-950 to-transparent z-10"></div>

            <div className="grid grid-cols-2 gap-4 animate-scroll-vertical">
                {/* First copy of items */}
                {services.map((service, index) => (
                    <ServiceCard key={`s1-${index}`} service={service} />
                ))}
                {/* Second copy for infinite loop */}
                {services.map((service, index) => (
                    <ServiceCard key={`s2-${index}`} service={service} />
                ))}
            </div>
        </div>
    );
};

const ServiceCard = ({ service }: { service: typeof services[0] }) => (
    <Link
        href={service.link}
        className="group relative flex flex-col items-center justify-center bg-[#111] border border-white/10 rounded-2xl p-6 aspect-square hover:border-seo-blue/50 transition-colors duration-300 overflow-hidden"
    >
        <span className="relative z-10 text-white font-medium text-center mb-4 group-hover:text-seo-blue transition-colors">
            {service.title}
        </span>

        <div className="relative w-24 h-24 flex items-center justify-center">
            {service.image ? (
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
            ) : (
                // Placeholder for canvas/missing images - using a generic icon style
                <div className="w-full h-full bg-white/5 rounded-lg flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-seo-blue/20 to-purple-500/20 animate-pulse"></div>
                </div>
            )}
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-seo-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </Link>
);

export default FatJoeCarousel;
