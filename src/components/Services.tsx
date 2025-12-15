
import {
  MapPin,
  Settings,
  FileText,
  Link as LinkIcon,
  ShoppingCart,
  BarChart,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';
import { services } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  'map-pin': <MapPin className="h-7 w-7" />,
  'settings': <Settings className="h-7 w-7" />,
  'file-text': <FileText className="h-7 w-7" />,
  'link': <LinkIcon className="h-7 w-7" />,
  'shopping-cart': <ShoppingCart className="h-7 w-7" />,
  'bar-chart': <BarChart className="h-7 w-7" />
};

// Gradient colors for each service
const gradientMap: Record<string, string> = {
  'local-seo': 'from-blue-500 to-cyan-500',
  'technical-seo': 'from-purple-500 to-pink-500',
  'ecommerce-seo': 'from-orange-500 to-red-500',
  'content-marketing': 'from-green-500 to-emerald-500',
  'link-building': 'from-indigo-500 to-purple-500',
  'seo-audits': 'from-amber-500 to-orange-500',
  'digital-pr': 'from-pink-500 to-rose-500',
  'analytics-reporting': 'from-teal-500 to-cyan-500'
};

interface ServicesProps {
  location?: string;
  locationSlug?: string;
}

const Services = ({ location, locationSlug }: ServicesProps) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection
          className="text-center mb-16 max-w-3xl mx-auto"
          animation="fade-in"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-seo-blue/10 to-purple-100 mb-6">
            <Sparkles className="w-4 h-4 text-seo-blue" />
            <span className="text-sm font-semibold text-seo-blue">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6">
            {location
              ? <>SEO Services in <span className="text-seo-blue">{location}</span></>
              : <>Comprehensive <span className="text-seo-blue">SEO Solutions</span></>}
          </h2>
          <p className="text-xl text-seo-gray-dark">
            {location
              ? `We help businesses in ${location} improve their search visibility and drive more qualified traffic.`
              : 'Tailored strategies to improve your online visibility and drive sustainable growth'}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const gradient = gradientMap[service.slug] || 'from-blue-500 to-cyan-500';

            return (
              <AnimatedSection
                key={service.id}
                className="group relative"
                animation="slide-up"
                delay={100 * index}
              >
                {/* Card */}
                <div className="relative h-full bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden">
                  {/* Gradient border on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                  <div className="absolute inset-[2px] bg-white rounded-2xl"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${gradient} flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                      {iconMap[service.icon]}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-display font-bold text-seo-dark mb-3 group-hover:text-seo-blue transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-seo-gray-dark mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 12 12">
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                          </div>
                          <span className="text-sm text-seo-gray-dark">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Link */}
                    <Link
                      href={locationSlug
                        ? `/location/${locationSlug}/${service.slug}`
                        : `/service/${service.slug}`}
                      className={`inline-flex items-center gap-2 font-semibold text-transparent bg-gradient-to-r ${gradient} bg-clip-text group/link`}
                    >
                      <span className="group-hover/link:underline">
                        {locationSlug ? `${service.title} in ${location}` : 'Learn more'}
                      </span>
                      <ArrowRight className={`h-4 w-4 text-seo-blue transition-transform group-hover/link:translate-x-1`} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection
          className="text-center mt-16"
          animation="fade-in"
          delay={600}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-3 bg-seo-dark hover:bg-slate-800 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;

