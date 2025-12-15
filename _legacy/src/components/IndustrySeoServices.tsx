
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { industries } from '@/lib/data';

interface IndustrySeoServicesProps {
  title?: string;
  description?: string;
  showAll?: boolean;
}

const IndustrySeoServices = ({ 
  title = "Industry-Specific SEO Solutions", 
  description = "Tailored SEO strategies for your specific industry needs",
  showAll = true
}: IndustrySeoServicesProps) => {
  const displayIndustries = showAll ? industries : industries.slice(0, 3);
  
  return (
    <section className="py-24 bg-seo-gray-light relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-seo-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-seo-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection 
          className="text-center mb-16 max-w-3xl mx-auto"
          animation="fade-in"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4 shadow-sm">
            Industry Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
            {title}
          </h2>
          <p className="text-lg text-seo-gray-dark">
            {description}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayIndustries.map((industry, index) => (
            <AnimatedSection 
              key={industry.id}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 group"
              animation="fade-in"
              delay={100 * index}
            >
              <div className="p-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-seo-blue/5 to-transparent rounded-bl-full"></div>
                
                <div className="bg-seo-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="h-8 w-8 text-seo-blue" />
                </div>
                
                <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                  {industry.title}
                </h3>
                
                <p className="text-seo-gray-dark mb-6">
                  {industry.description}
                </p>
                
                <div className="mb-6 p-3 rounded-lg bg-gradient-to-r from-seo-blue/5 to-transparent border-l-2 border-seo-blue">
                  <h4 className="font-medium text-seo-dark mb-2">Key benefits:</h4>
                  <ul className="space-y-1">
                    {industry.benefits.slice(0, 2).map((benefit, i) => (
                      <li key={i} className="text-sm text-seo-gray-dark flex items-start">
                        <span className="text-seo-blue mr-2">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  to={`/industry/${industry.slug}`} 
                  className="inline-flex items-center text-seo-blue font-medium group mt-2 relative"
                >
                  <span className="border-b border-seo-blue/30 group-hover:border-seo-blue transition-colors">
                    Learn more
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-seo-blue/5 scale-0 group-hover:scale-100 rounded-md transition-transform duration-300 -z-10"></div>
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        {!showAll && (
          <AnimatedSection 
            className="text-center mt-12"
            animation="slide-up"
            delay={300}
          >
            <Link 
              to="/industries" 
              className="inline-flex items-center bg-seo-blue hover:bg-seo-blue-light text-white font-medium py-3 px-8 rounded-md transition-colors relative overflow-hidden group"
            >
              <span className="relative z-10">View All Industry Solutions</span>
              <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-seo-blue-light to-seo-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

export default IndustrySeoServices;
