'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Sparkles } from 'lucide-react';

export default function ScrollPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        // Check if already dismissed in this session
        const dismissed = sessionStorage.getItem('auditPopupDismissed');
        if (dismissed) {
            setIsDismissed(true);
            return;
        }

        const handleScroll = () => {
            const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

            if (scrollPercentage >= 25 && !isDismissed) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isDismissed]);

    const handleDismiss = () => {
        setIsVisible(false);
        setIsDismissed(true);
        sessionStorage.setItem('auditPopupDismissed', 'true');
    };

    if (!isVisible || isDismissed) return null;

    return (
        <div className="fixed right-4 bottom-24 z-50 animate-in slide-in-from-right duration-500">
            <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-6 max-w-xs text-white">
                {/* Close button */}
                <button
                    onClick={handleDismiss}
                    className="absolute top-2 right-2 p-1 rounded-full hover:bg-white/20 transition-colors"
                    aria-label="Close popup"
                >
                    <X className="h-5 w-5" />
                </button>

                {/* Content */}
                <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="h-5 w-5 text-yellow-300" />
                    <span className="text-sm font-medium text-blue-100">Limited Time Offer</span>
                </div>

                <h3 className="text-xl font-bold mb-2">Get Free SEO Audit</h3>
                <p className="text-sm text-blue-100 mb-4">
                    Discover what's holding your website back. Get a comprehensive SEO analysis worth $500 - absolutely free!
                </p>

                <Link
                    href="/seo-audit"
                    onClick={handleDismiss}
                    className="block w-full bg-white text-blue-600 font-semibold py-3 px-4 rounded-xl text-center hover:bg-blue-50 transition-colors shadow-lg"
                >
                    Get Free SEO Audit
                </Link>

                {/* Decorative elements */}
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full opacity-80 blur-sm"></div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-pink-400 rounded-full opacity-60 blur-sm"></div>
            </div>
        </div>
    );
}
