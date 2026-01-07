'use client';

import Image from 'next/image';

const logos = [
    {
        name: 'Forbes',
        url: '/images/featured-in/forbs.svg',
        width: 100,
        height: 40
    },
    {
        name: 'Financial Times',
        url: '/images/featured-in/Financial-times.svg',
        width: 150,
        height: 40
    },
    {
        name: '2GB',
        url: '/images/featured-in/2gb.svg',
        width: 80,
        height: 40
    },
    {
        name: '3AW',
        url: '/images/featured-in/3aw.svg',
        width: 80,
        height: 40
    },
    {
        name: 'Semrush',
        url: '/images/featured-in/semrush.svg',
        width: 120,
        height: 40
    },
    {
        name: 'SEN',
        url: '/images/featured-in/sen.svg',
        width: 80,
        height: 40
    },
    {
        name: 'Daily Mail Australia',
        url: '/images/featured-in/daily-mail-australia.svg',
        width: 150,
        height: 40
    },
    {
        name: 'Moz',
        url: '/images/featured-in/moz.svg',
        width: 100,
        height: 40
    }
];

const FeaturedIn = () => {
    return (
        <div className="w-full bg-slate-900 border-b border-white/5 py-10 overflow-hidden">
            <div className="container mx-auto px-4 mb-8 text-center">
                <p className="text-2xl font-medium uppercase tracking-wider bg-gradient-to-r from-seo-blue via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    We are proudly featured in
                </p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex items-center gap-6 px-6">
                    {logos.map((logo, index) => (
                        <div key={`logo-1-${index}`} className="relative h-20 w-48 flex-shrink-0 bg-white rounded-xl shadow-md flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300">
                            <Image
                                src={logo.url}
                                alt={logo.name}
                                width={logo.width}
                                height={logo.height}
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                    ))}
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-6 px-6">
                    {logos.map((logo, index) => (
                        <div key={`logo-2-${index}`} className="relative h-20 w-48 flex-shrink-0 bg-white rounded-xl shadow-md flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300">
                            <Image
                                src={logo.url}
                                alt={logo.name}
                                width={logo.width}
                                height={logo.height}
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedIn;
