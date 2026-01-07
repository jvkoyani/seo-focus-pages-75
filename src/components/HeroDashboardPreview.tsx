'use client';

import { TrendingUp, Users, MousePointerClick, ArrowUpRight, Search, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroDashboardPreview = () => {
    return (
        <div className="relative w-full max-w-[600px] mx-auto perspective-1000">
            {/* Main Dashboard Card - Tilted & Floating */}
            <motion.div
                initial={{ rotateX: 20, rotateY: -20, opacity: 0, y: 50 }}
                animate={{ rotateX: 10, rotateY: -10, opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-20 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden transform-style-3d"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
                    <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 border border-white/5 text-xs text-slate-400">
                        <Search className="w-3 h-3" />
                        <span>seo-performance.analytics</span>
                    </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 space-y-6">
                    {/* Top Stats Row */}
                    <div className="grid grid-cols-3 gap-4">
                        {[
                            { label: 'Organic Traffic', value: '+127%', icon: Users, color: 'text-blue-400', bg: 'bg-blue-500/10' },
                            { label: 'Keyword Rankings', value: '#1', icon: TrendingUp, color: 'text-green-400', bg: 'bg-green-500/10' },
                            { label: 'Conversion Rate', value: '4.8%', icon: MousePointerClick, color: 'text-purple-400', bg: 'bg-purple-500/10' },
                        ].map((stat, i) => (
                            <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                <div className={`w-8 h-8 rounded-lg ${stat.bg} flex items-center justify-center mb-3`}>
                                    <stat.icon className={`w-4 h-4 ${stat.color}`} />
                                </div>
                                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-xs text-slate-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Main Chart Area */}
                    <div className="p-5 rounded-xl bg-white/5 border border-white/5 relative overflow-hidden">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-sm font-medium text-white">Traffic Growth</h3>
                                <p className="text-xs text-slate-400">Last 30 Days</p>
                            </div>
                            <div className="flex items-center gap-2 text-green-400 text-sm font-medium bg-green-500/10 px-2 py-1 rounded-lg">
                                <ArrowUpRight className="w-4 h-4" />
                                <span>+24.5%</span>
                            </div>
                        </div>

                        {/* Simulated Graph */}
                        <div className="h-32 flex items-end justify-between gap-2">
                            {[30, 45, 35, 55, 45, 60, 50, 75, 65, 85, 70, 95].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ duration: 0.5, delay: i * 0.05 }}
                                    className="w-full bg-gradient-to-t from-blue-600/20 to-blue-500 rounded-t-sm"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Active Keywords List */}
                    <div className="space-y-3">
                        <h3 className="text-xs font-medium text-slate-400 uppercase tracking-wider">Top Performing Keywords</h3>
                        {[
                            { keyword: 'seo agency sydney', rank: 1, vol: '2.4k' },
                            { keyword: 'local seo services', rank: 2, vol: '1.8k' },
                            { keyword: 'digital marketing', rank: 3, vol: '5.1k' },
                        ].map((kw, i) => (
                            <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-xs font-bold text-white">
                                        {kw.rank}
                                    </div>
                                    <span className="text-sm text-slate-200">{kw.keyword}</span>
                                </div>
                                <span className="text-xs text-slate-500">{kw.vol} vol</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Floating Elements for Depth */}
            <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-12 top-20 z-30 p-4 rounded-xl bg-slate-800/90 backdrop-blur-md border border-green-500/30 shadow-xl"
            >
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                        <div className="text-xs text-slate-400">ROI</div>
                        <div className="text-lg font-bold text-white">+450%</div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-8 bottom-20 z-30 p-4 rounded-xl bg-slate-800/90 backdrop-blur-md border border-blue-500/30 shadow-xl"
            >
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                        <div className="text-xs text-slate-400">Leads</div>
                        <div className="text-lg font-bold text-white">245</div>
                    </div>
                </div>
            </motion.div>

            {/* Glow Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 blur-[100px] -z-10 rounded-full" />
        </div>
    );
};

export default HeroDashboardPreview;
