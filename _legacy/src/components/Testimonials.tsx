
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { testimonials } from '@/lib/data';

interface TestimonialsProps {
  location?: string;
}

const Testimonials = ({ location }: TestimonialsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-24 bg-seo-gray-light relative overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedSection 
          className="text-center mb-16 max-w-3xl mx-auto"
          animation="fade-in"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
            Client Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
            {location 
              ? `What Our ${location} Clients Say`
              : 'What Our Clients Say'}
          </h2>
          <p className="text-lg text-seo-gray-dark">
            Real results and feedback from businesses we've helped achieve SEO success
          </p>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection 
            key={activeIndex}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
            animation="fade-in"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <Quote className="h-12 w-12 text-seo-blue/20 mb-4" />
                <p className="text-lg md:text-xl text-seo-dark mb-6 italic">
                  "{testimonials[activeIndex].quote}"
                </p>
                <div>
                  <h4 className="text-xl font-display font-semibold text-seo-dark">
                    {testimonials[activeIndex].name}
                  </h4>
                  <div className="flex items-center text-seo-gray-medium text-sm">
                    <span>{testimonials[activeIndex].company}</span>
                    <span className="mx-2">•</span>
                    <span>{testimonials[activeIndex].location}</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? 'bg-seo-blue' : 'bg-seo-gray-medium/30'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button 
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-12 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-seo-dark hover:text-seo-blue transition-colors hidden md:flex"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button 
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-12 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-seo-dark hover:text-seo-blue transition-colors hidden md:flex"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile navigation buttons */}
      <div className="flex justify-center mt-6 space-x-4 md:hidden">
        <button 
          className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-seo-dark hover:text-seo-blue transition-colors"
          onClick={handlePrev}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        
        <button 
          className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-seo-dark hover:text-seo-blue transition-colors"
          onClick={handleNext}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
