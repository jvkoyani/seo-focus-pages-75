import { BlogPostData, CaseStudyData, FAQItem, PricingTier, ServiceData } from './data';
import { Location } from './locationData';

const SITE_URL = 'https://www.example.com'; // Replace with actual domain
const ORGANIZATION_NAME = 'SEO Agency'; // Replace with actual name
const ORGANIZATION_LOGO = `${SITE_URL}/logo.png`; // Replace with actual logo path

interface ServiceLike {
    title: string;
    description: string;
    pricing?: PricingTier[];
}

export const generateOrganizationSchema = () => {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: ORGANIZATION_NAME,
        url: SITE_URL,
        logo: ORGANIZATION_LOGO,
        sameAs: [
            'https://www.facebook.com/example',
            'https://twitter.com/example',
            'https://www.linkedin.com/company/example',
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+61-123-456-789',
            contactType: 'customer service',
            areaServed: 'AU',
            availableLanguage: 'en',
        },
    };
};

export const generateWebSiteSchema = () => {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: ORGANIZATION_NAME,
        url: SITE_URL,
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
        },
    };
};

export const generateServiceSchema = (service: ServiceLike) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.description,
        provider: {
            '@type': 'Organization',
            name: ORGANIZATION_NAME,
            url: SITE_URL,
        },
        areaServed: {
            '@type': 'Country',
            name: 'Australia',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `${service.title} Packages`,
            itemListElement: service.pricing?.map((tier) => ({
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: tier.name,
                    description: tier.description,
                },
                priceSpecification: {
                    '@type': 'PriceSpecification',
                    price: tier.price.replace(/[^0-9.]/g, ''),
                    priceCurrency: 'AUD',
                },
            })),
        },
    };
};

export const generateLocalBusinessSchema = (location: Location, service?: ServiceData) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: service ? `${service.title} in ${location.name}` : `SEO Services in ${location.name}`,
        image: location.image ? (location.image.startsWith('http') ? location.image : `${SITE_URL}${location.image}`) : `${SITE_URL}/placeholder.svg`,
        '@id': `${SITE_URL}/location/${location.slug}`,
        url: `${SITE_URL}/location/${location.slug}`,
        telephone: '+61-123-456-789',
        address: {
            '@type': 'PostalAddress',
            addressLocality: location.name,
            addressRegion: location.state,
            addressCountry: 'AU',
        },
        geo: {
            '@type': 'GeoCoordinates',
            // Placeholder coordinates - in a real app these would be in locationData
            latitude: -37.8136,
            longitude: 144.9631,
        },
        areaServed: {
            '@type': 'City',
            name: location.name,
        },
        priceRange: '$$',
    };
};

export const generateFAQSchema = (faqs: FAQItem[]) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
};

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
        })),
    };
};

export const generateArticleSchema = (post: BlogPostData) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        image: post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`,
        author: {
            '@type': 'Person',
            name: post.author,
        },
        publisher: {
            '@type': 'Organization',
            name: ORGANIZATION_NAME,
            logo: {
                '@type': 'ImageObject',
                url: ORGANIZATION_LOGO,
            },
        },
        datePublished: post.date,
        description: post.excerpt,
    };
};

export const generateCaseStudySchema = (study: CaseStudyData) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: study.title,
        image: study.image.startsWith('http') ? study.image : `${SITE_URL}${study.image}`,
        author: {
            '@type': 'Organization',
            name: ORGANIZATION_NAME,
        },
        publisher: {
            '@type': 'Organization',
            name: ORGANIZATION_NAME,
            logo: {
                '@type': 'ImageObject',
                url: ORGANIZATION_LOGO,
            },
        },
        description: study.challenge,
        articleBody: `Challenge: ${study.challenge} Solution: ${study.solution}`,
    };
};
