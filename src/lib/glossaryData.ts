import { coreSeoTerms } from './glossary/core-seo';
import { coreWebVitalsTerms } from './glossary/core-web-vitals';
import { onPageTerms } from './glossary/on-page';
import { aiGeoTerms } from './glossary/ai-geo';
import { offPageTerms } from './glossary/off-page';
import { localTerms } from './glossary/local-location';
import { ecommerceTerms } from './glossary/ecommerce';
import { analyticsTerms } from './glossary/analytics';
import { automationTerms } from './glossary/automation';
import { riskComplianceTerms } from './glossary/risk-compliance';
import { futureConceptsTerms } from './glossary/future-concepts';

export interface GlossaryTerm {
    slug: string;
    term: string;
    definition: string;
    category: string;
    lastUpdated: string;
    author: {
        name: string;
        role: string;
        image?: string;
    };
    content: string; // HTML or Markdown content
    relatedTerms: string[];
}

export const glossaryTerms: GlossaryTerm[] = [
    ...coreSeoTerms,
    ...coreWebVitalsTerms,
    ...onPageTerms,
    ...aiGeoTerms,
    ...offPageTerms,
    ...localTerms,
    ...ecommerceTerms,
    ...analyticsTerms,
    ...automationTerms,
    ...riskComplianceTerms,
    ...futureConceptsTerms
];
