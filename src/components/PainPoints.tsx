'use client';

import { useState } from 'react';
import { TrendingDown, UserX, Trophy, DollarSign, ArrowRight, Search, Clock, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

const painPoints = [
  {
    id: 1,
    problem: "Stuck on Page 2+",
    description: "Your website is invisible to 95% of potential customers",
    solution: "First Page Rankings",
    solutionDesc: "We'll get you ranking where customers actually look",
    icon: TrendingDown,
    solutionIcon: Trophy,
    color: "from-red-500 to-orange-500",
    solutionColor: "from-green-500 to-emerald-500"
  },
  {
    id: 2,
    problem: "No Leads From Website",
    description: "Traffic means nothing without conversions",
    solution: "Qualified Lead Generation",
    solutionDesc: "Turn visitors into paying customers",
    icon: UserX,
    solutionIcon: Search,
    color: "from-orange-500 to-amber-500",
    solutionColor: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    problem: "Competitors Winning",
    description: "They're stealing your customers online",
    solution: "Market Domination",
    solutionDesc: "Outrank and outperform your competition",
    icon: AlertTriangle,
    solutionIcon: Trophy,
    color: "from-amber-500 to-yellow-500",
    solutionColor: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    problem: "Wasted Ad Spend",
    description: "Paying for clicks that don't convert",
    solution: "Organic Growth",
    solutionDesc: "Free, sustainable traffic that converts",
    icon: DollarSign,
    solutionIcon: Clock,
    color: "from-pink-500 to-rose-500",
    solutionColor: "from-teal-500 to-green-500"
  }
];

const PainPoints = () => {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const toggleFlip = (id: number) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection
          className="text-center mb-16 max-w-3xl mx-auto"
          animation="fade-in"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-red-500/20 to-orange-500/20 text-red-400 border border-red-500/30 mb-6">
            Sound Familiar?
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
            Tired of Being{' '}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Invisible Online?
            </span>
          </h2>
          <p className="text-xl text-slate-400">
            These problems cost Australian businesses millions in lost revenue every year.
            <br />
            <span className="text-white font-medium">Tap a card to see your solution.</span>
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {painPoints.map((point, index) => (
            <AnimatedSection
              key={point.id}
              animation="slide-up"
              delay={index * 100}
            >
              <div
                className="relative h-72 cursor-pointer group perspective-1000"
                onClick={() => toggleFlip(point.id)}
              >
                {/* Card Container */}
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                    flippedCards[point.id] ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* Front - Problem */}
                  <div className="absolute inset-0 backface-hidden">
                    <div className={`h-full rounded-2xl bg-gradient-to-br ${point.color} p-[2px] group-hover:shadow-2xl group-hover:shadow-red-500/20 transition-all duration-300`}>
                      <div className="h-full bg-slate-900/95 rounded-2xl p-6 flex flex-col items-center justify-center text-center backdrop-blur-xl">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${point.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <point.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{point.problem}</h3>
                        <p className="text-slate-400 text-sm">{point.description}</p>
                        <div className="mt-4 text-xs text-slate-500 flex items-center gap-1">
                          <span>Tap to see solution</span>
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back - Solution */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div className={`h-full rounded-2xl bg-gradient-to-br ${point.solutionColor} p-[2px] shadow-2xl shadow-green-500/20`}>
                      <div className="h-full bg-slate-900/95 rounded-2xl p-6 flex flex-col items-center justify-center text-center backdrop-blur-xl">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${point.solutionColor} flex items-center justify-center mb-4`}>
                          <point.solutionIcon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{point.solution}</h3>
                        <p className="text-slate-400 text-sm">{point.solutionDesc}</p>
                        <div className="mt-4 text-xs text-green-400 flex items-center gap-1">
                          <span>✓ We can help</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection
          className="text-center"
          animation="fade-in"
          delay={500}
        >
          <Link
            href="/seo-audit"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-seo-blue to-blue-600 hover:from-blue-600 hover:to-seo-blue text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 group"
          >
            <span>Get Your Free SEO Roadmap</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="mt-4 text-slate-500 text-sm">No credit card required • Results in 48 hours</p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PainPoints;
