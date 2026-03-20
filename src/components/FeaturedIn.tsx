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
        <div className="w-full bg-white border-y border-slate-100 py-12 md:py-20 relative overflow-hidden">
            {/* Soft background glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-seo-blue/5 rounded-full blur-3xl -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl translate-y-1/2"></div>

            <div className="container mx-auto px-4 mb-10 md:mb-16 text-center relative z-10">
                <span className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest text-seo-blue uppercase px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-6">
                    <span className="w-2 h-2 rounded-full bg-seo-blue animate-pulse"></span>
                    <span>Industry Recognition</span>
                </span>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-seo-navy">
                    Proudly Featured In
                </h2>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
                    {logos.map((logo, index) => (
                        <div 
                            key={`logo-${index}`} 
                            className="group relative h-24 md:h-32 bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 flex items-center justify-center p-6 transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-seo-blue/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <Image
                                src={logo.url}
                                alt={logo.name}
                                width={logo.width}
                                height={logo.height}
                                className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300 relative z-10 group-hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedIn;
