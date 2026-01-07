'use client';

import { useEffect, useState, useRef } from 'react';
import { TrendingUp, Users, Award, DollarSign, Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const stats = [
    {
        id: 1,
        value: 175,
        suffix: '%',
        label: 'Average Traffic Increase',
        icon: TrendingUp,
        color: 'from-blue-500 to-cyan-400',
        description: 'organic traffic growth'
    },
    {
        id: 2,
        value: 250,
        suffix: '+',
        label: 'Businesses Transformed',
        icon: Users,
        color: 'from-purple-500 to-pink-400',
        description: 'across Australia'
    },
    {
        id: 3,
        value: 98,
        suffix: '%',
        label: 'Client Retention Rate',
        icon: Award,
        color: 'from-green-500 to-emerald-400',
        description: 'year over year'
    },
    {
        id: 4,
        value: 2.5,
        suffix: 'M+',
        prefix: '$',
        label: 'Revenue Generated',
        icon: DollarSign,
        color: 'from-amber-500 to-orange-400',
        description: 'for our clients'
    }
];

const logos = [
    { name: 'Google Partner', icon: '🏆' },
    { name: 'SEMrush Certified', icon: '📊' },
    { name: 'HubSpot Partner', icon: '🔶' },
    { name: 'Meta Business', icon: '📱' },
    { name: 'Shopify Partner', icon: '🛒' }
];

function useCountUp(end: number, duration: number = 2000, startOnView: boolean = true) {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!startOnView || hasStarted) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [startOnView, hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(easeOutQuart * end);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, hasStarted]);

    return { count, ref };
}

const StatCard = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
    const { count, ref } = useCountUp(stat.value, 2500);

    return (
        <AnimatedSection
            animation="slide-up"
            delay={index * 150}
        >
            <div
                ref={ref}
                className="relative group"
            >
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:border-white/20">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <stat.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex items-baseline gap-1 mb-2">
                        {stat.prefix && (
                            <span className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                {stat.prefix}
                            </span>
                        )}
                        <span className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                            {stat.value === 2.5 ? count.toFixed(1) : Math.round(count)}
                        </span>
                        <span className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                            {stat.suffix}
                        </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-1">{stat.label}</h3>
                    <p className="text-slate-400 text-sm">{stat.description}</p>
                </div>
            </div>
        </AnimatedSection>
    );
};

const TrustIndicators = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <AnimatedSection
                    className="text-center mb-16 max-w-3xl mx-auto"
                    animation="fade-in"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 border border-amber-500/30 mb-6">
                        <Star className="w-4 h-4" />
                        Proven Results
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        Numbers That{' '}
                        <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                            Speak Volumes
                        </span>
                    </h2>
                    <p className="text-xl text-slate-400">
                        Real results from real Australian businesses. No fluff, just growth.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {stats.map((stat, index) => (
                        <StatCard key={stat.id} stat={stat} index={index} />
                    ))}
                </div>

                {/* Logo Carousel */}
                <AnimatedSection animation="fade-in" delay={600}>
                    <div className="text-center mb-8">
                        <p className="text-slate-500 text-sm uppercase tracking-wider font-medium">Trusted & Certified</p>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        {logos.map((logo) => (
                            <div
                                key={logo.name}
                                className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                            >
                                <span className="text-2xl">{logo.icon}</span>
                                <span className="text-slate-300 font-medium">{logo.name}</span>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default TrustIndicators;
