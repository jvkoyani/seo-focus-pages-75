/**
 * HeroDashboardPreview — Server Component
 * 
 * Uses Pure CSS for 3D tilt, floating, and graph animations.
 * 100% server-rendered, zero JavaScript required.
 * Ensures the dashboard content is present in the initial HTML for LLMs/SEO.
 */

import React from 'react';
import { TrendingUp, Users, MousePointerClick, ArrowUpRight, Search, BarChart3 } from 'lucide-react';

const HeroDashboardPreview = () => {
    return (
        <div className="relative w-full max-w-[600px] mx-auto perspective-1000">
            {/* Main Dashboard Card - Tilted & Floating (CSS Animation) */}
            <div className="relative z-20 bg-white/90 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-2xl overflow-hidden animate-hero-tilt transform-style-3d">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                    <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs text-slate-500">
                        <Search className="w-3 h-3" />
                        <span className="font-medium">seo-performance.analytics</span>
                    </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 space-y-6">
                    {/* Top Stats Row */}
                    <div className="grid grid-cols-3 gap-4">
                        {[
                            { label: 'Organic Traffic', value: '+127%', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
                            { label: 'Keyword Rankings', value: '#1', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-100' },
                            { label: 'Conversion Rate', value: '4.8%', icon: MousePointerClick, color: 'text-purple-600', bg: 'bg-purple-100' },
                        ].map((stat, i) => (
                            <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-sm transition-colors">
                                <div className={`w-8 h-8 rounded-lg ${stat.bg} flex items-center justify-center mb-3`}>
                                    <stat.icon className={`w-4 h-4 ${stat.color}`} />
                                </div>
                                <div className="text-2xl font-black text-seo-navy mb-1">{stat.value}</div>
                                <div className="text-xs font-bold text-slate-500 uppercase">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Main Chart Area */}
                    <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 relative overflow-hidden">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-sm font-bold text-seo-navy">Traffic Growth</h3>
                                <p className="text-xs font-semibold text-slate-500">Last 30 Days</p>
                            </div>
                            <div className="flex items-center gap-2 text-green-700 text-sm font-bold bg-green-100 px-2 py-1 rounded-lg">
                                <ArrowUpRight className="w-4 h-4" />
                                <span>+24.5%</span>
                            </div>
                        </div>

                        {/* Simulated Graph (CSS Animated Height) */}
                        <div className="h-32 flex items-end justify-between gap-2">
                            {[30, 45, 35, 55, 45, 60, 50, 75, 65, 85, 70, 95].map((h, i) => (
                                <div
                                    key={i}
                                    style={{ height: `${h}%`, animationDelay: `${i * 0.05}s` }}
                                    className="w-full bg-gradient-to-t from-seo-blue/20 to-seo-blue rounded-t-sm animate-grow-up origin-bottom"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Active Keywords List */}
                    <div className="space-y-3">
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Top Performing Keywords</h3>
                        {[
                            { keyword: 'seo agency sydney', rank: 1, vol: '2.4k' },
                            { keyword: 'local seo services', rank: 2, vol: '1.8k' },
                            { keyword: 'digital marketing', rank: 3, vol: '5.1k' },
                        ].map((kw, i) => (
                            <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded bg-seo-navy flex items-center justify-center text-xs font-bold text-white">
                                        {kw.rank}
                                    </div>
                                    <span className="text-sm font-bold text-seo-navy">{kw.keyword}</span>
                                </div>
                                <span className="text-xs font-semibold text-slate-500">{kw.vol} vol</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Floating Elements for Depth (CSS Only) */}
            <div className="absolute right-0 md:-right-12 top-10 md:top-20 z-30 p-2 md:p-4 scale-75 md:scale-100 origin-right rounded-xl bg-white/95 backdrop-blur-md border border-green-200 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-slate-500 uppercase">ROI</div>
                        <div className="text-lg font-black text-seo-navy">+450%</div>
                    </div>
                </div>
            </div>

            <div className="absolute left-0 md:-left-8 bottom-10 md:bottom-20 z-30 p-2 md:p-4 scale-75 md:scale-100 origin-left rounded-xl bg-white/95 backdrop-blur-md border border-blue-200 shadow-xl animate-float-delayed">

                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-slate-500 uppercase">Leads</div>
                        <div className="text-lg font-black text-seo-navy">245</div>
                    </div>
                </div>
            </div>

            {/* Glow Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 blur-[100px] -z-10 rounded-full" />

            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes hero-tilt {
                    0% { transform: rotateX(20deg) rotateY(-20deg) translateY(50px); opacity: 0; }
                    100% { transform: rotateX(10deg) rotateY(-10deg) translateY(0); opacity: 1; }
                }
                .animate-hero-tilt {
                    animation: hero-tilt 1s ease-out forwards;
                }
                @keyframes grow-up {
                    from { transform: scaleY(0); }
                    to { transform: scaleY(1); }
                }
                .animate-grow-up {
                    animation: grow-up 0.5s ease-out both;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(-10px); }
                    50% { transform: translateY(10px); }
                }
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
                .animate-float-delayed {
                    animation: float 5s ease-in-out infinite 1s;
                }
            `}} />
        </div>
    );
};

export default HeroDashboardPreview;
