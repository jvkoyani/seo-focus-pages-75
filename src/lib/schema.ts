export function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Power My SEO",
        "url": "https://powermyseo.com",
        "logo": "https://powermyseo.com/logo.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+61 1800 123 456",
            "contactType": "Customer Service",
            "areaServed": "AU",
            "availableLanguage": "English"
        },
        "sameAs": [
            "https://twitter.com/powermyseo",
            "https://linkedin.com/company/powermyseo"
        ]
    };
}

export function generateWebSiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Power My SEO",
        "url": "https://powermyseo.com",
        "description": "#1 Rated SEO Agency in Australia. Helping businesses rank higher and grow revenue.",
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://powermyseo.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        }
    };
}

export function generateCaseStudySchema(caseStudy: any) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": caseStudy?.title || "Case Study",
        "description": caseStudy?.challenge || "A real-world SEO success story.",
        "image": caseStudy?.image || "https://powermyseo.com/default-case-study.jpg",
        "author": {
            "@type": "Organization",
            "name": "Power My SEO"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Power My SEO",
            "logo": {
                "@type": "ImageObject",
                "url": "https://powermyseo.com/logo.webp"
            }
        }
    };
}

export function generateServiceSchema(service: any, industry: any, cityName: string, citySlug: string) {
    // Strip '-seo' from industry slug for standard URL paths
    const industryPath = industry?.slug ? industry.slug.replace('-seo', '') : '';
    const url = `https://powermyseo.com/areas-we-serve/${citySlug}/${industryPath}/${service?.slug || ''}`;

    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `${service?.title || 'SEO Services'} for ${industry?.title || 'Businesses'} in ${cityName}`,
        "serviceType": service?.title || "SEO Service",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Power My SEO",
            "image": "https://powermyseo.com/logo.png"
        },
        "areaServed": {
            "@type": "City",
            "name": cityName
        },
        "audience": {
            "@type": "Audience",
            "audienceType": industry?.title || "Business Owners"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "AUD",
            "price": "500", // Baseline starting price
            "url": url.replace(/\/$/, '')
        }
    };
}

export function generateLocalBusinessSchema(cityName: string, stateShort: string = "NSW") {
    return {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Power My SEO",
        "image": "https://powermyseo.com/logo.png",
        "url": "https://powermyseo.com",
        "telephone": "+61 1800 123 456",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": cityName,
            "addressRegion": stateShort,
            "addressCountry": "AU"
        },
        "areaServed": {
            "@type": "City",
            "name": cityName
        }
    };
}

export function generateFAQSchema(faqs: Array<{question: string, answer: string}>) {
    if (!faqs || faqs.length === 0) return null;
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };
}

export function generateBreadcrumbSchema(crumbs: Array<{label: string, href: string | null}>) {
    if (!crumbs || crumbs.length === 0) return null;
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": crumbs.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.label,
            "item": crumb.href ? `https://powermyseo.com${crumb.href}` : undefined
        }))
    };
}

export function generateArticleSchema(post: any, cityName?: string) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post?.title || "Blog Post",
        "description": post?.excerpt || post?.description || "An expert guide on SEO and digital marketing.",
        "image": post?.image || "https://powermyseo.com/default-blog.jpg",
        "datePublished": post?.date || new Date().toISOString(),
        "author": {
            "@type": "Organization",
            "name": "Power My SEO"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Power My SEO",
            "logo": {
                "@type": "ImageObject",
                "url": "https://powermyseo.com/logo.webp"
            }
        },
        ...(cityName ? {
            "contentLocation": {
                "@type": "City",
                "name": cityName
            }
        } : {})
    };
}

export function serializeSchemas(schemas: any | any[]): string {
    const validSchemas = Array.isArray(schemas) ? schemas.filter(Boolean) : [schemas].filter(Boolean);
    if (validSchemas.length === 0) return "";
    
    if (validSchemas.length === 1) {
        return JSON.stringify(validSchemas[0]);
    }
    
    return JSON.stringify(validSchemas);
}
