'use client';

import { useState } from 'react';
import { Check, ArrowRight, Shield, Clock, Zap, Users, Send } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { toast } from "@/components/ui/use-toast";

interface ContactFormProps {
  location?: string;
}

const challengeOptions = [
  "Not ranking on Google",
  "Low website traffic",
  "Competitors outranking me",
  "No leads from website",
  "Poor local visibility",
  "Other / Not sure"
];

const ContactForm = ({ location }: ContactFormProps) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    challenge: '',
    message: '',
    loading: false,
    submitted: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, loading: true }));

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          website: formState.website,
          challenge: formState.challenge,
          message: formState.message,
          location: location
        }),
      });

      if (response.ok) {
        setFormState(prev => ({ ...prev, loading: false, submitted: true }));
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        });

        // Reset form after 3 seconds
        setTimeout(() => {
          setFormState({
            name: '',
            email: '',
            phone: '',
            website: '',
            challenge: '',
            message: '',
            loading: false,
            submitted: false
          });
        }, 3000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormState(prev => ({ ...prev, loading: false }));
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden" id="contact">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <AnimatedSection animation="fade-in-left">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-seo-blue/10 to-blue-500/10 text-seo-blue border border-seo-blue/20 mb-6">
                <Send className="w-4 h-4" />
                Get Started
              </span>

              <h2 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6 leading-tight">
                {location
                  ? <>Ready to Dominate <span className="text-seo-blue">{location}</span> Search?</>
                  : <>Ready to Get <span className="text-seo-blue">More Customers?</span></>}
              </h2>

              <p className="text-xl text-seo-gray-dark mb-10">
                {location
                  ? `Take the first step towards improving your ${location} business's online visibility.`
                  : 'Fill out the form and get a free, personalized SEO strategy within 48 hours.'}
              </p>

              {/* Benefits */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-seo-dark text-lg mb-1">Free SEO Audit</h3>
                    <p className="text-seo-gray-dark">Comprehensive analysis of your website's current performance</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-seo-dark text-lg mb-1">48-Hour Response</h3>
                    <p className="text-seo-gray-dark">Get your personalized strategy delivered fast</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-seo-dark text-lg mb-1">No Obligation</h3>
                    <p className="text-seo-gray-dark">Completely free consultation with zero pressure</p>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="mt-10 flex items-center gap-4 text-sm text-seo-gray-dark">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-seo-blue" />
                  <span><strong>47</strong> people requested an audit this month</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Column - Form */}
            <AnimatedSection animation="fade-in-right">
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
                {formState.submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/30">
                      <Check className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-seo-dark mb-3">Thank You!</h3>
                    <p className="text-seo-gray-dark text-lg">
                      We've received your message and will get back to you within 48 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-seo-dark mb-2">
                        Get Your Free SEO Audit
                      </h3>
                      <p className="text-seo-gray-dark">
                        Fill out the form below and we'll analyze your website
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-seo-dark mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-seo-blue focus:ring-2 focus:ring-seo-blue/20 outline-none transition-all bg-gray-50 focus:bg-white"
                            placeholder="John Smith"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-seo-dark mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-seo-blue focus:ring-2 focus:ring-seo-blue/20 outline-none transition-all bg-gray-50 focus:bg-white"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-seo-dark mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-seo-blue focus:ring-2 focus:ring-seo-blue/20 outline-none transition-all bg-gray-50 focus:bg-white"
                            placeholder="(04) 1234 5678"
                          />
                        </div>

                        <div>
                          <label htmlFor="website" className="block text-sm font-semibold text-seo-dark mb-2">
                            Website URL *
                          </label>
                          <input
                            type="url"
                            id="website"
                            name="website"
                            value={formState.website}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-seo-blue focus:ring-2 focus:ring-seo-blue/20 outline-none transition-all bg-gray-50 focus:bg-white"
                            placeholder="https://yourwebsite.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="challenge" className="block text-sm font-semibold text-seo-dark mb-2">
                          What's your biggest challenge? *
                        </label>
                        <select
                          id="challenge"
                          name="challenge"
                          value={formState.challenge}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-seo-blue focus:ring-2 focus:ring-seo-blue/20 outline-none transition-all bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                        >
                          <option value="">Select your challenge...</option>
                          {challengeOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-seo-dark mb-2">
                          Tell us more (optional)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          rows={3}
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-seo-blue focus:ring-2 focus:ring-seo-blue/20 outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                          placeholder="Any specific goals or questions?"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={formState.loading}
                        className={`w-full bg-gradient-to-r from-seo-blue to-blue-600 hover:from-blue-600 hover:to-seo-blue text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 group ${formState.loading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02]'
                          }`}
                      >
                        {formState.loading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Get My Free SEO Audit</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>

                      {/* Trust badges */}
                      <div className="flex items-center justify-center gap-4 pt-4 text-xs text-seo-gray-medium">
                        <div className="flex items-center gap-1">
                          <Shield className="w-3 h-3" />
                          <span>SSL Secure</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Check className="w-3 h-3" />
                          <span>No Spam</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>48hr Response</span>
                        </div>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
