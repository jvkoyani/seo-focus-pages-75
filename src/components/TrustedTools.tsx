"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Search, Database, Globe, Zap, Layers, Cpu } from 'lucide-react';

const tools = [
    { name: 'Ahrefs', icon: <BarChart className="w-5 h-5" />, color: 'text-orange-500' },
    { name: 'SEMrush', icon: <Database className="w-5 h-5" />, color: 'text-orange-600' },
    { name: 'Google Analytics', icon: <Layers className="w-5 h-5" />, color: 'text-yellow-500' },
    { name: 'BrightLocal', icon: <Globe className="w-5 h-5" />, color: 'text-green-500' },
    { name: 'Screaming Frog', icon: <Zap className="w-5 h-5" />, color: 'text-purple-500' },
    { name: 'Moz', icon: <BarChart className="w-5 h-5" />, color: 'text-blue-400' },
    { name: 'Majestic', icon: <Database className="w-5 h-5" />, color: 'text-red-500' },
];

const TrustedTools = () => {
    return (
        <section className="py-20 bg-slate-50 border-b border-gray-100 overflow-hidden">
            <div className="container mx-auto px-4 mb-16 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-600/10 to-indigo-500/10 text-blue-600 border border-blue-600/20 mb-6">
                    <Cpu className="w-4 h-4" />
                    Our Tech Stack
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark">
                    Powered by Industry-Leading <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Technology</span>
                </h2>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="flex animate-marquee whitespace-nowrap" style={{ animationDuration: '60s' }}>
                    {[...tools, ...tools, ...tools].map((tool, index) => (
                        <div key={index} className="mx-4">
                            <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 hover:border-blue-100 transition-all duration-300 cursor-default group/item">
                                <div className={`p-2 rounded-lg bg-slate-50 ${tool.color} group-hover/item:bg-blue-50 transition-colors`}>
                                    {tool.icon}
                                </div>
                                <span className="text-lg font-bold text-slate-700 group-hover/item:text-seo-dark transition-colors">{tool.name}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap" style={{ animationDuration: '60s' }}>
                    {[...tools, ...tools, ...tools].map((tool, index) => (
                        <div key={index} className="mx-4">
                            <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 hover:border-blue-100 transition-all duration-300 cursor-default group/item">
                                <div className={`p-2 rounded-lg bg-slate-50 ${tool.color} group-hover/item:bg-blue-50 transition-colors`}>
                                    {tool.icon}
                                </div>
                                <span className="text-lg font-bold text-slate-700 group-hover/item:text-seo-dark transition-colors">{tool.name}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Fade edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
            </div>
        </section>
    );
};

export default TrustedTools;
