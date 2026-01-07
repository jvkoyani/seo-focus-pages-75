"use client";

import React from 'react';
import {
    Search, Globe, Share2, FileText,
    PenTool, Send, Users, MapPin,
    BarChart, Layout, Video, Image as ImageIcon,
    Mic, ShoppingBag, Newspaper, Megaphone,
    Target, Zap, Layers
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const services = [
    { title: "Infographic Design", icon: ImageIcon, desc: "Visual storytelling" },
    { title: "Media Placements", icon: BarChart, desc: "DR 50+ sites" },
    { title: "Social Video Ads", icon: Video, desc: "Engaging content" },
    { title: "Explainer Videos", icon: Video, desc: "Simplify complex ideas" },
    { title: "Blog 2 Video", icon: Layers, desc: "Repurpose content" },
    { title: "Blog Writing", icon: PenTool, desc: "SEO optimized" },
    { title: "Article Writing", icon: FileText, desc: "High quality content" },
    { title: "Product Descriptions", icon: ShoppingBag, desc: "Convert visitors" },
    { title: "Keyword Research", icon: Search, desc: "Find opportunities" },
    { title: "Multilingual Outreach", icon: Globe, desc: "Global reach" },
    { title: "Infographic Outreach", icon: Share2, desc: "Earn backlinks" },
    { title: "Content Syndication", icon: Share2, desc: "Amplify reach" },
    { title: "Website Copywriting", icon: Layout, desc: "Compelling copy" },
    { title: "Blogger Outreach", icon: Users, desc: "Build relationships" },
    { title: "Press Release Writing", icon: Newspaper, desc: "Newsworthy stories" },
    { title: "Local Citations", icon: MapPin, desc: "Local SEO boost" },
    { title: "Niche Edits", icon: Target, desc: "Curated links" },
    { title: "PR Distribution", icon: Send, desc: "Wide coverage" },
    { title: "Digital PR Campaigns", icon: Megaphone, desc: "Brand authority" },
];

const ServiceCard = ({ item }: { item: typeof services[0] }) => (
    <div
        className="relative group w-64 h-24 mx-3 flex-shrink-0 rounded-xl overflow-hidden bg-slate-900/60 backdrop-blur-md border border-white/5 hover:border-emerald-500/50 transition-colors duration-300 cursor-pointer"
    >
        {/* Hover Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Animated Border Gradient (Bottom) */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative h-full p-4 flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-emerald-400" />
            </div>

            <div className="flex flex-col">
                <h3 className="text-white font-semibold text-sm leading-tight mb-1 group-hover:text-emerald-300 transition-colors">
                    {item.title}
                </h3>
                <p className="text-slate-400 text-xs">
                    {item.desc}
                </p>
            </div>
        </div>
    </div>
);

const MarqueeRow = ({ items, direction = "left", speed = 40 }: { items: typeof services, direction?: "left" | "right", speed?: number }) => {
    return (
        <div className="flex overflow-hidden w-full py-2 mask-gradient-horizontal">
            <motion.div
                initial={{ x: direction === "left" ? 0 : "-50%" }}
                animate={{ x: direction === "left" ? "-50%" : 0 }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                }}
                className="flex flex-shrink-0 hover:pause-animation"
            >
                {[...items, ...items].map((item, idx) => (
                    <ServiceCard key={`${item.title}-${idx}`} item={item} />
                ))}
            </motion.div>
        </div>
    );
};

const ServiceGrid = () => {
    const row1 = services.slice(0, 10);
    const row2 = services.slice(10, 19);

    return (
        <div className="h-full w-full flex flex-col justify-center gap-6 py-8 overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full" />
            </div>

            <div className="relative z-10 space-y-6">
                <MarqueeRow items={row1} direction="left" speed={40} />
                <MarqueeRow items={row2} direction="right" speed={45} />
            </div>
        </div>
    );
};

export default ServiceGrid;
