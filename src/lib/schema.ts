import { BlogPostData, CaseStudyData, FAQItem, PricingTier, ServiceData } from './data';
import { Location } from './locationData';

const SITE_URL = 'https://www.seofocus.com.au';
const ORGANIZATION_NAME = 'SEOfocus';
const ORGANIZATION_LOGO = `${SITE_URL}/logo.png`;

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
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '1300 123 456',
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
        telephone: '1300 123 456',
        address: {
            '@type': 'PostalAddress',
            addressLocality: location.name,
            addressRegion: location.state,
            addressCountry: 'AU',
        },
        ...(location.coordinates && {
            geo: {
                '@type': 'GeoCoordinates',
                latitude: location.coordinates.lat,
                longitude: location.coordinates.lng,
            },
        }),
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

export const generateArticleSchema = (post: BlogPostData, dateModified?: string) => {
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
        dateModified: dateModified || post.date,
        description: post.excerpt,
    };
};

export const generateDefinedTermSchema = (term: {
    term: string;
    definition: string;
    slug: string;
    lastUpdated: string;
    author: { name: string; role: string };
}) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'DefinedTerm',
        name: term.term,
        description: term.definition,
        url: `${SITE_URL}/glossary/${term.slug}`,
        dateModified: term.lastUpdated,
        author: {
            '@type': 'Person',
            name: term.author.name,
            jobTitle: term.author.role,
        },
        inDefinedTermSet: `${SITE_URL}/glossary`,
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
