
import React from 'react';
import {
    Target, MapPin, Building, FileText, Zap, Globe, Phone,
    ShoppingBag, TrendingUp, Lightbulb, Share2, BarChart
} from 'lucide-react';

export const getLocationServiceInfo = (serviceSlug: string, locationName: string, serviceTitle: string) => {
    const serviceInfo: Record<string, any> = {
        "local-seo": {
            title: `Local SEO Services in ${locationName}`,
            description: `Boost your business visibility in ${locationName} with our specialized local SEO services designed to attract customers in your area.`,
            benefits: [
                "Higher rankings in local search results",
                "Increased visibility in Google Maps",
                "More phone calls and direction requests",
                "Better targeting of local customers",
                "Improved Google Business Profile performance"
            ],
            features: [
                {
                    title: "Local Keyword Research",
                    description: `We identify the most valuable keywords that ${locationName} residents are using to find businesses like yours.`,
                    icon: <Target className="w-full h-full" />
                },
                {
                    title: "Google Business Profile Optimization",
                    description: "We optimize your GBP to improve your visibility in local searches and Google Maps.",
                    icon: <MapPin className="w-full h-full" />
                },
                {
                    title: "Local Citation Building",
                    description: `We ensure your business information is consistent across all local directories relevant to ${locationName}.`,
                    icon: <Building className="w-full h-full" />
                },
                {
                    title: "Local Content Creation",
                    description: `We develop content specifically targeted to the ${locationName} market and community.`,
                    icon: <FileText className="w-full h-full" />
                }
            ]
        },
        "technical-seo": {
            title: `Technical SEO Services in ${locationName}`,
            description: `Enhance your website's technical foundation with our specialized technical SEO services for ${locationName} businesses.`,
            benefits: [
                "Improved website crawlability and indexing",
                "Faster page load speeds",
                "Enhanced mobile user experience",
                "Fixed technical errors and issues",
                "Better overall search performance"
            ],
            features: [
                {
                    title: "Technical SEO Audit",
                    description: "We perform a comprehensive audit to identify all technical issues affecting your site's performance.",
                    icon: <Zap className="w-full h-full" />
                },
                {
                    title: "Site Speed Optimization",
                    description: "We improve your website's loading speed to enhance user experience and meet Google's Core Web Vitals.",
                    icon: <Globe className="w-full h-full" />
                },
                {
                    title: "Mobile Optimization",
                    description: "We ensure your website provides an excellent experience on all devices, especially mobile.",
                    icon: <Phone className="w-full h-full" />
                },
                {
                    title: "Schema Markup Implementation",
                    description: "We implement structured data to help search engines better understand your content.",
                    icon: <FileText className="w-full h-full" />
                }
            ]
        },
        "ecommerce-seo": {
            title: `E-commerce SEO Services in ${locationName}`,
            description: `Drive more sales and revenue with our specialized e-commerce SEO strategies for ${locationName} online retailers.`,
            benefits: [
                "Higher product and category page rankings",
                "Increased organic traffic to your online store",
                "Better conversion rates from search visitors",
                "Improved product visibility in search results",
                "Enhanced online shopping experience"
            ],
            features: [
                {
                    title: "Product Page Optimization",
                    description: "We optimize your product pages to rank higher in search results and convert more visitors.",
                    icon: <ShoppingBag className="w-full h-full" />
                },
                {
                    title: "Category Page SEO",
                    description: "We structure and optimize your category pages to improve crawlability and user experience.",
                    icon: <Globe className="w-full h-full" />
                },
                {
                    title: "E-commerce Technical SEO",
                    description: "We address technical issues specific to e-commerce sites, such as duplicate content and URL structure.",
                    icon: <Zap className="w-full h-full" />
                },
                {
                    title: "Conversion Rate Optimization",
                    description: "We improve your site's conversion path to turn more visitors into customers.",
                    icon: <TrendingUp className="w-full h-full" />
                }
            ]
        },
        "content-marketing": {
            title: `Content Marketing Services in ${locationName}`,
            description: `Attract and engage your target audience with our strategic content marketing services tailored for ${locationName} businesses.`,
            benefits: [
                "More engaging content that resonates with your audience",
                "Higher rankings for informational keywords",
                "Increased brand authority and trust",
                "More social shares and backlinks",
                "Better audience engagement and retention"
            ],
            features: [
                {
                    title: "Content Strategy Development",
                    description: `We create a comprehensive content strategy aligned with your ${locationName} business goals.`,
                    icon: <Lightbulb className="w-full h-full" />
                },
                {
                    title: "Blog Content Creation",
                    description: "We produce high-quality blog posts that engage your audience and drive organic traffic.",
                    icon: <FileText className="w-full h-full" />
                },
                {
                    title: "Content Optimization",
                    description: "We optimize existing content to improve search visibility and user engagement.",
                    icon: <Target className="w-full h-full" />
                },
                {
                    title: "Content Distribution",
                    description: `We help distribute your content across channels relevant to your ${locationName} audience.`,
                    icon: <Share2 className="w-full h-full" />
                }
            ]
        },
        "default": {
            title: `${serviceTitle} Services in ${locationName}`,
            description: `Boost your online presence with our specialized ${serviceTitle} services designed for businesses in ${locationName}.`,
            benefits: [
                "Higher search engine rankings",
                "Increased organic website traffic",
                "Better ROI compared to paid advertising",
                "Enhanced brand visibility and awareness",
                "Long-term sustainable results"
            ],
            features: [
                {
                    title: "Customized Strategy",
                    description: `We develop a tailored ${serviceTitle} strategy specific to your ${locationName} business needs.`,
                    icon: <Target className="w-full h-full" />
                },
                {
                    title: "Comprehensive Analysis",
                    description: "We perform in-depth analysis to identify opportunities and areas for improvement.",
                    icon: <BarChart className="w-full h-full" />
                },
                {
                    title: "Implementation",
                    description: `We execute all necessary ${serviceTitle} tactics to improve your online presence.`,
                    icon: <Zap className="w-full h-full" />
                },
                {
                    title: "Monitoring and Reporting",
                    description: "We provide regular updates and reports on your campaign's performance.",
                    icon: <FileText className="w-full h-full" />
                }
            ]
        }
    };

    return serviceInfo[serviceSlug] || serviceInfo.default;
};
