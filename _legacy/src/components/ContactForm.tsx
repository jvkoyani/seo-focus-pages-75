
import { useState } from 'react';
import { Check } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { toast } from "@/components/ui/use-toast";

interface ContactFormProps {
  location?: string;
}

const ContactForm = ({ location }: ContactFormProps) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: '',
    loading: false,
    submitted: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, loading: true }));
    
    // Simulate form submission
    setTimeout(() => {
      setFormState(prev => ({ ...prev, loading: false, submitted: true }));
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      // Reset form after 2 seconds
      setTimeout(() => {
        setFormState({
          name: '',
          email: '',
          phone: '',
          website: '',
          message: '',
          loading: false,
          submitted: false
        });
      }, 2000);
    }, 1500);
  };

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
          <AnimatedSection className="flex-1" animation="fade-in-left">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
              {location 
                ? `Ready to Dominate ${location} Search Results?`
                : 'Ready to Improve Your Search Rankings?'}
            </h2>
            <p className="text-lg text-seo-gray-dark mb-8">
              {location 
                ? `Take the first step towards improving your ${location} business\'s online visibility. Fill out the form and we\'ll get back to you with a personalized SEO strategy.`
                : 'Take the first step towards improving your website\'s online visibility. Fill out the form and we\'ll get back to you with a personalized SEO strategy.'}
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-seo-blue/10 rounded-full p-2 mt-1 mr-4">
                  <Check className="h-5 w-5 text-seo-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-seo-dark text-lg mb-1">Free SEO Audit</h3>
                  <p className="text-seo-gray-dark">
                    Get a comprehensive analysis of your website&#39;s current SEO performance.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-seo-blue/10 rounded-full p-2 mt-1 mr-4">
                  <Check className="h-5 w-5 text-seo-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-seo-dark text-lg mb-1">Custom Strategy</h3>
                  <p className="text-seo-gray-dark">
                    Receive a tailored SEO plan designed specifically for your business goals.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-seo-blue/10 rounded-full p-2 mt-1 mr-4">
                  <Check className="h-5 w-5 text-seo-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-seo-dark text-lg mb-1">Transparent Pricing</h3>
                  <p className="text-seo-gray-dark">
                    No hidden fees or long-term contracts. Pay only for what you need.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="flex-1" animation="fade-in-right">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-display font-bold text-seo-dark mb-6">
                {formState.submitted ? 'Message Sent!' : 'Contact Us'}
              </h3>
              
              {formState.submitted ? (
                <div className="text-center py-8">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <p className="text-lg text-seo-dark mb-2">Thank you for reaching out!</p>
                  <p className="text-seo-gray-dark">
                    We&#39;ve received your message and will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-seo-dark mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-seo-blue focus:ring-1 focus:ring-seo-blue outline-none transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-seo-dark mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-seo-blue focus:ring-1 focus:ring-seo-blue outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-seo-dark mb-1">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-seo-blue focus:ring-1 focus:ring-seo-blue outline-none transition-colors"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-seo-dark mb-1">
                        Website URL
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formState.website}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-seo-blue focus:ring-1 focus:ring-seo-blue outline-none transition-colors"
                        placeholder="https://yourwebsite.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-seo-dark mb-1">
                      How can we help you?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-seo-blue focus:ring-1 focus:ring-seo-blue outline-none transition-colors"
                      placeholder="Tell us about your SEO goals..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formState.loading}
                    className={`w-full bg-seo-blue hover:bg-seo-blue-light text-white font-medium py-3 px-6 rounded-md transition-colors button-hover-effect ${
                      formState.loading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {formState.loading ? 'Sending...' : 'Send Message'}
                  </button>
                  
                  <p className="text-xs text-seo-gray-medium text-center mt-4">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
