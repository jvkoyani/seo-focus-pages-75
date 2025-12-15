'use client';

import { useState, useEffect } from 'react';
import { Zap, Clock, ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

const UrgencyBanner = () => {
    const [spotsRemaining, setSpotsRemaining] = useState(3);
    const [currentMonth, setCurrentMonth] = useState('');

    useEffect(() => {
        // Get current month name
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];
        const now = new Date();
        setCurrentMonth(monthNames[now.getMonth()]);

        // Simulate dynamic spots (in production, this would come from your backend)
        const dayOfMonth = now.getDate();
        const calculatedSpots = Math.max(1, 5 - Math.floor(dayOfMonth / 7));
        setSpotsRemaining(calculatedSpots);
    }, []);

    return (
        <section className="relative py-16 overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-seo-blue via-blue-600 to-purple-600 animate-gradient-x"></div>

            {/* Overlay pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '32px 32px'
                }}></div>
            </div>

            {/* Glowing orbs */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>

            <div className="container mx-auto px-4 relative z-10">
                <AnimatedSection animation="fade-in">
                    <div className="max-w-5xl mx-auto text-center">
                        {/* Urgency Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6 animate-pulse">
                            <Zap className="w-4 h-4 text-yellow-300" />
                            <span className="text-white font-semibold text-sm">Limited Availability for {currentMonth}</span>
                        </div>

                        {/* Main Headline */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
                            We Only Accept{' '}
                            <span className="relative inline-block">
                                <span className="relative z-10">5 New Clients</span>
                                <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-400/40 -rotate-1"></span>
                            </span>
                            {' '}Per Month
                        </h2>

                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            To ensure exceptional results, we limit our client intake.
                            <br className="hidden md:block" />
                            <span className="font-semibold text-yellow-300">
                                {spotsRemaining} spot{spotsRemaining !== 1 ? 's' : ''} remaining for {currentMonth}.
                            </span>
                        </p>

                        {/* Spots Indicator */}
                        <div className="flex justify-center gap-3 mb-10">
                            {[1, 2, 3, 4, 5].map((spot) => (
                                <div
                                    key={spot}
                                    className={`w-4 h-4 rounded-full transition-all duration-300 ${spot <= spotsRemaining
                                            ? 'bg-green-400 shadow-lg shadow-green-400/50 animate-pulse'
                                            : 'bg-white/30'
                                        }`}
                                    style={{ animationDelay: `${spot * 0.1}s` }}
                                ></div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/seo-audit"
                                className="group inline-flex items-center gap-3 bg-white text-seo-blue font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30 hover:scale-105"
                            >
                                <Zap className="w-5 h-5" />
                                <span>Claim Your Spot Now</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                href="/free-consultation"
                                className="group inline-flex items-center gap-3 bg-transparent text-white font-semibold py-4 px-8 rounded-full border-2 border-white/50 hover:bg-white/10 hover:border-white transition-all duration-300"
                            >
                                <Phone className="w-5 h-5" />
                                <span>Schedule Strategy Call</span>
                            </Link>
                        </div>

                        {/* Trust note */}
                        <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/70 text-sm">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>Free 30-min consultation</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-400">✓</span>
                                <span>No obligation</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-400">✓</span>
                                <span>Custom strategy included</span>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>

            {/* Bottom wave decoration */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 35C840 40 960 50 1080 52.5C1200 55 1320 50 1380 47.5L1440 45V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="white" />
                </svg>
            </div>
        </section>
    );
};

export default UrgencyBanner;
