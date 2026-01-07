import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | SEO Agency Australia',
    description: 'Privacy Policy for our SEO Agency. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
    return (
        <main className="flex min-h-screen flex-col bg-white">
            <Navbar />

            <div className="pt-32 pb-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    <AnimatedSection animation="fade-in">
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6">
                            Privacy Policy
                        </h1>
                        <p className="text-seo-gray-dark mb-12">
                            Last Updated: January 5, 2026
                        </p>

                        <div className="prose prose-lg max-w-none text-seo-gray-dark">
                            <p>
                                At SEO Agency Australia, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or use our services.
                            </p>

                            <h2 className="text-2xl font-bold text-seo-dark mt-12 mb-6">1. Information We Collect</h2>
                            <p>
                                We may collect personal information that you voluntarily provide to us when you:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2">
                                <li>Fill out a contact form or request a quote.</li>
                                <li>Subscribe to our newsletter.</li>
                                <li>Download a resource (e.g., e-book, case study).</li>
                                <li>Communicate with us via email or phone.</li>
                            </ul>
                            <p>
                                The types of personal information we may collect include:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2">
                                <li>Name</li>
                                <li>Email address</li>
                                <li>Phone number</li>
                                <li>Company name</li>
                                <li>Website URL</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-seo-dark mt-12 mb-6">2. How We Use Your Information</h2>
                            <p>
                                We use the information we collect for the following purposes:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2">
                                <li>To provide and improve our SEO services.</li>
                                <li>To communicate with you regarding your inquiries or projects.</li>
                                <li>To send you marketing communications, newsletters, and updates (you can opt-out at any time).</li>
                                <li>To analyze website traffic and user behavior to enhance our website's performance.</li>
                                <li>To comply with legal obligations.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-seo-dark mt-12 mb-6">3. Cookies and Tracking Technologies</h2>
                            <p>
                                We use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files stored on your device that help us remember your preferences and understand how you interact with our website. You can control cookie preferences through your browser settings.
                            </p>

                            <h2 className="text-2xl font-bold text-seo-dark mt-12 mb-6">4. Data Security</h2>
                            <p>
                                We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
                            </p>

                            <h2 className="text-2xl font-bold text-seo-dark mt-12 mb-6">5. Third-Party Links</h2>
                            <p>
                                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
                            </p>

                            <h2 className="text-2xl font-bold text-seo-dark mt-12 mb-6">6. Changes to This Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically.
                            </p>

                            <h2 className="text-2xl font-bold text-seo-dark mt-12 mb-6">7. Contact Us</h2>
                            <p>
                                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                            </p>
                            <p className="mt-4">
                                <strong>Email:</strong> privacy@example.com<br />
                                <strong>Address:</strong> 123 SEO Street, Melbourne, VIC 3000, Australia
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </div>

            <Footer />
        </main>
    );
}
