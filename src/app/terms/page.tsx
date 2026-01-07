import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms and Conditions | SEO Agency Australia',
    description: 'Terms and Conditions for using our SEO Agency services and website.',
};

export default function TermsPage() {
    return (
        <main className="flex min-h-screen flex-col bg-white">
            <Navbar />

            <div className="pt-32 pb-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    <AnimatedSection animation="fade-in">
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6">
                            Terms and Conditions
                        </h1>
                        <p className="text-seo-gray-dark mb-12">
                            Last Updated: January 5, 2026
                        </p>

                        <div className="prose prose-lg max-w-none text-seo-gray-dark">
                            <p>
                                Welcome to SEO Agency Australia. By accessing or using our website and services, you agree to be bound by these Terms and Conditions. Please read them carefully.
                            </p>

                            <h2 className="text-2xl font-bold text-seo-dark mt-12 mb-6">1. Acceptance of Terms</h2>
                            <p>
                                By accessing this website, you agree to these Terms and Conditions, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                            </p>

                            <h2 className="text-2xl font-bold text-seo-dark mt-12 mb-6">2. Use License</h2>
                            <p>
                                Permission is granted to temporarily download one copy of the materials (information or software) on SEO Agency Australia's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2">
                                <li>Modify or copy the materials;</li>
                                <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                                <li>Attempt to decompile or reverse engineer any software contained on SEO Agency Australia's website;</li>
                                <li>Remove any copyright or other proprietary notations from the materials; or</li>
                                <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-seo-dark mt-12 mb-6">3. Disclaimer</h2>
                            <p>
                                The materials on SEO Agency Australia's website are provided on an 'as is' basis. SEO Agency Australia makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                            </p>

                            <h2 className="text-2xl font-bold text-seo-dark mt-12 mb-6">4. Limitations</h2>
                            <p>
                                In no event shall SEO Agency Australia or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on SEO Agency Australia's website, even if SEO Agency Australia or a SEO Agency Australia authorized representative has been notified orally or in writing of the possibility of such damage.
                            </p>

                            <h2 className="text-2xl font-bold text-seo-dark mt-12 mb-6">5. Accuracy of Materials</h2>
                            <p>
                                The materials appearing on SEO Agency Australia's website could include technical, typographical, or photographic errors. SEO Agency Australia does not warrant that any of the materials on its website are accurate, complete or current. SEO Agency Australia may make changes to the materials contained on its website at any time without notice. However SEO Agency Australia does not make any commitment to update the materials.
                            </p>

                            <h2 className="text-2xl font-bold text-seo-dark mt-12 mb-6">6. Links</h2>
                            <p>
                                SEO Agency Australia has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by SEO Agency Australia of the site. Use of any such linked website is at the user's own risk.
                            </p>

                            <h2 className="text-2xl font-bold text-seo-dark mt-12 mb-6">7. Modifications</h2>
                            <p>
                                SEO Agency Australia may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                            </p>

                            <h2 className="text-2xl font-bold text-seo-dark mt-12 mb-6">8. Governing Law</h2>
                            <p>
                                These terms and conditions are governed by and construed in accordance with the laws of Australia and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </div>

            <Footer />
        </main>
    );
}
