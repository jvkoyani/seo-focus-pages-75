"use client";

import React, { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircleQuestion } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    locationName?: string;
    serviceName?: string;
    industryName?: string;
    customFaqs?: FAQItem[];
    title?: React.ReactNode;
    description?: string;
}

const FAQSection = ({ locationName = "Your Area", serviceName = "SEO", industryName = "Business", customFaqs, title, description }: FAQSectionProps) => {
    const defaultFaqs: FAQItem[] = [
        {
            question: `Why is ${serviceName} important for ${industryName} businesses in ${locationName}?`,
            answer: `Local SEO helps your ${industryName} business appear in search results when people in ${locationName} look for your services. It targets customers who are ready to buy and are located nearby, resulting in higher conversion rates.`
        },
        {
            question: "How long does it take to see results?",
            answer: "SEO is a long-term strategy. While some technical fixes can show immediate improvements, significant ranking changes typically take 3-6 months. We provide monthly reports so you can track the progress and see the value we're delivering."
        },
        {
            question: "Do you offer a guarantee for #1 ranking?",
            answer: "No reputable agency can guarantee a #1 ranking because Google's algorithms are constantly changing. However, we have a proven track record of significantly improving rankings and traffic for our clients through ethical strategies."
        },
        {
            question: `What is included in your ${serviceName} services?`,
            answer: `Our comprehensive packages include keyword research, on-page optimization, technical audits, content creation, and local business listing management. We tailor our strategy to the specific needs of the ${industryName} industry.`
        },
        {
            question: `How much does ${serviceName} cost in ${locationName}?`,
            answer: "The cost varies depending on your competition and goals. We offer flexible packages designed to provide maximum ROI. Contact us for a free consultation and a custom quote."
        }
    ];

    const faqs = customFaqs || defaultFaqs;

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-seo-gray-light">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12">
                    <AnimatedSection className="lg:w-1/3" animation="fade-in-right">
                        <div className="sticky top-32">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 mb-4">
                                <MessageCircleQuestion className="w-3 h-3 mr-2" />
                                FAQ
                            </span>
                            {title ? (
                                typeof title === 'string' ? (
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">{title}</h2>
                                ) : (
                                    title
                                )
                            ) : (
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
                                    Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Questions</span>
                                </h2>
                            )}
                            <p className="text-lg text-seo-gray-dark mb-8">
                                {description || `Got questions about SEO in ${locationName}? We've got answers.`}
                            </p>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="bg-seo-blue/10 p-3 rounded-full">
                                        <HelpCircle className="w-6 h-6 text-seo-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-seo-dark mb-1">Still have questions?</h4>
                                        <p className="text-sm text-seo-gray-dark mb-4">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                                        <a href="/contact" className="text-seo-blue font-medium hover:underline">Get in touch &rarr;</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    <div className="lg:w-2/3">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <AnimatedSection
                                    key={index}
                                    animation="slide-up"
                                    delay={index * 100}
                                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                    >
                                        <span className={`font-bold text-lg ${openIndex === index ? 'text-seo-blue' : 'text-seo-dark'}`}>
                                            {faq.question}
                                        </span>
                                        {openIndex === index ? (
                                            <ChevronUp className="w-5 h-5 text-seo-blue flex-shrink-0" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                        )}
                                    </button>
                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="px-6 pb-6 text-seo-gray-dark border-t border-gray-50 pt-4">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
