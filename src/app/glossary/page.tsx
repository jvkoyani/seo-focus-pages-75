"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ArrowRight, BookOpen } from 'lucide-react';
import { glossaryTerms } from '@/lib/glossaryData';
import AnimatedSection from '@/components/AnimatedSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function GlossaryIndexPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredTerms = glossaryTerms.filter(term =>
        term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.definition.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Group terms by first letter for a structured view if needed, 
    // but for now we'll stick to a clean grid as per "premium" aesthetic.

    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <AnimatedSection animation="fade-in">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
                            Knowledge Base
                        </span>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                            SEO <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Glossary</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
                            Master the language of search engine optimization. Your comprehensive guide to industry terms, definitions, and concepts.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto relative">
                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-slate-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search for a term..."
                                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm transition-all"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Terms Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    {filteredTerms.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredTerms.map((term, index) => (
                                <AnimatedSection key={term.slug} animation="slide-up" delay={index * 50}>
                                    <Link href={`/glossary/${term.slug}`} className="block h-full group">
                                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-110"></div>

                                            <div className="relative z-10">
                                                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                    <BookOpen className="w-5 h-5" />
                                                </div>

                                                <div className="flex items-center gap-2 mb-3">
                                                    <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 px-2 py-1 rounded-md">
                                                        {term.category}
                                                    </span>
                                                </div>

                                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                                    {term.term}
                                                </h3>

                                                <p className="text-slate-500 line-clamp-3 mb-6 text-sm leading-relaxed">
                                                    {term.definition}
                                                </p>

                                                <div className="flex items-center text-blue-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                                                    Read full definition <ArrowRight className="ml-1 w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </AnimatedSection>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="w-8 h-8 text-slate-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">No terms found</h3>
                            <p className="text-slate-500">Try adjusting your search query.</p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}
