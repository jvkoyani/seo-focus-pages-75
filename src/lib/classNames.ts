/**
 * src/lib/classNames.ts
 *
 * Programmatic SEO class name generators.
 * ALL functions are pure — same inputs → same output.
 * ALL calls must happen server-side (in generateStaticParams / page.tsx).
 * NEVER call these inside component render().
 */

// --------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------

/** Normalise any slug: lower-case, replace spaces with hyphens, strip specials */
function slugify(value: string | null | undefined): string {
    if (!value) return '';
    return value
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
}

/** Join non-empty class tokens with a single space */
function cx(...tokens: (string | null | undefined | false)[]): string {
    return tokens.filter(Boolean).join(' ');
}

// --------------------------------------------------------------------------
// 1. Page-level class
// --------------------------------------------------------------------------

export interface PageClassOptions {
    pageType: 'money-page' | 'location-hub' | 'service-location' | 'blog-post' | 'case-study' | 'industry-page' | 'home';
    service?: string | null;
    industry?: string | null;
    location?: string | null;
}

/**
 * generatePageClasses({ pageType:'money-page', service:'local-seo', industry:'plumbing', location:'sydney' })
 * → "pseo-page money-page service-local-seo industry-plumbing location-sydney"
 */
export function generatePageClasses({ pageType, service, industry, location }: PageClassOptions): string {
    const s = slugify(service);
    const i = slugify(industry);
    const l = slugify(location);
    return cx(
        'pseo-page',
        pageType,
        s && `service-${s}`,
        i && `industry-${i}`,
        l && `location-${l}`,
        s && l && `${s}-${l}-page`,
        i && l && `${i}-${l}-page`,
    );
}

// --------------------------------------------------------------------------
// 2. Section-level class
// --------------------------------------------------------------------------

export type SectionType =
    | 'hero'
    | 'why-seo'
    | 'process'
    | 'case-studies'
    | 'why-choose-us'
    | 'features'
    | 'pricing'
    | 'faq'
    | 'resources'
    | 'cta'
    | 'trust'
    | 'industries'
    | 'services'
    | 'guide';

export interface SectionClassOptions {
    sectionType: SectionType;
    service?: string | null;
    location?: string | null;
    extra?: string | null;
}

/**
 * generateSectionClasses({ sectionType:'hero', service:'local-seo', location:'sydney' })
 * → "page-section section-hero local-seo-hero sydney-hero"
 */
export function generateSectionClasses({ sectionType, service, location, extra }: SectionClassOptions): string {
    const s = slugify(service);
    const l = slugify(location);
    return cx(
        'page-section',
        `section-${sectionType}`,
        s && `${s}-${sectionType}`,
        l && `${l}-${sectionType}`,
        s && l && `${s}-${l}-${sectionType}`,
        extra && slugify(extra),
    );
}

// --------------------------------------------------------------------------
// 3. Heading class
// --------------------------------------------------------------------------

export interface HeadingClassOptions {
    level: 1 | 2 | 3;
    service?: string | null;
    industry?: string | null;
    location?: string | null;
    headingType?: string | null;
}

/**
 * generateHeadingClass({ level:1, service:'local-seo', industry:'plumbing', location:'sydney' })
 * → "page-title local-seo-plumbing-sydney-title"
 *
 * generateHeadingClass({ level:2, service:'local-seo', headingType:'features' })
 * → "section-heading local-seo-section-heading features-heading"
 */
export function generateHeadingClass({ level, service, industry, location, headingType }: HeadingClassOptions): string {
    const s = slugify(service);
    const i = slugify(industry);
    const l = slugify(location);
    const ht = slugify(headingType);

    if (level === 1) {
        const parts = [s, i, l].filter(Boolean);
        const compound = parts.length > 0 ? `${parts.join('-')}-title` : '';
        return cx('page-title', compound || 'primary-title');
    }

    if (level === 2) {
        return cx(
            'section-heading',
            s && `${s}-section-heading`,
            ht && `${ht}-heading`,
        );
    }

    // Level 3
    return cx(
        'subsection-heading',
        s && `${s}-subsection`,
        ht && `${ht}-subheading`,
    );
}

// --------------------------------------------------------------------------
// 4. CTA class
// --------------------------------------------------------------------------

export type CTAType = 'primary' | 'secondary' | 'ghost' | 'inline';

export interface CTAClassOptions {
    type: CTAType;
    service?: string | null;
    location?: string | null;
}

/**
 * generateCTAClass({ type:'primary', service:'local-seo', location:'sydney' })
 * → "cta-button cta-primary local-seo-cta sydney-cta cta-conversion-goal"
 */
export function generateCTAClass({ type, service, location }: CTAClassOptions): string {
    const s = slugify(service);
    const l = slugify(location);
    return cx(
        'cta-button',
        `cta-${type}`,
        s && `${s}-cta`,
        l && `${l}-cta`,
        (type === 'primary') && 'cta-conversion-goal',
    );
}

// --------------------------------------------------------------------------
// 5. Link class
// --------------------------------------------------------------------------

export type LinkType = 'internal-nav' | 'breadcrumb' | 'related-location' | 'related-service' | 'related-industry' | 'cta-link';

export interface LinkClassOptions {
    linkType: LinkType;
    service?: string | null;
    destination?: string | null;
}

/**
 * generateLinkClass({ linkType:'related-location', service:'local-seo', destination:'melbourne' })
 * → "related-location-link local-seo-melbourne-link"
 */
export function generateLinkClass({ linkType, service, destination }: LinkClassOptions): string {
    const s = slugify(service);
    const d = slugify(destination);
    return cx(
        `${linkType}-link`,
        s && d && `${s}-${d}-link`,
        (!s && d) && `${d}-link`,
        (s && !d) && `${s}-link`,
    );
}

// --------------------------------------------------------------------------
// 6. Section ID generator (for id="" and data-section="" attributes)
// --------------------------------------------------------------------------

/**
 * generateSectionId({ service:'local-seo', industry:'plumbing', location:'sydney', sectionType:'hero' })
 * → "local-seo-plumbing-sydney-hero"
 */
export function generateSectionId({
    sectionType,
    service,
    industry,
    location,
}: {
    sectionType: SectionType;
    service?: string | null;
    industry?: string | null;
    location?: string | null;
}): string {
    const parts = [slugify(service), slugify(industry), slugify(location), sectionType].filter(Boolean);
    return parts.join('-');
}

// --------------------------------------------------------------------------
// 7. Div / container class generator
// --------------------------------------------------------------------------

export type DivRole =
    | 'page-container'        // outermost layout wrapper
    | 'section-container'     // inner container inside a <section>
    | 'content-wrapper'       // text / copy column
    | 'visual-wrapper'        // image / card / media column
    | 'hero-content'          // hero text block
    | 'hero-card'             // hero right-side conversion card
    | 'stats-grid'            // grid of stat/metric cards
    | 'stat-card'             // individual stat card
    | 'features-grid'         // grid of feature / info cards
    | 'feature-card'          // individual feature card
    | 'process-grid'          // grid of process steps
    | 'process-step'          // individual process step
    | 'case-studies-grid'     // grid of case study preview cards
    | 'case-study-card'       // individual case study card
    | 'why-us-grid'           // why-choose-us two-column layout
    | 'why-us-features'       // list of USP items
    | 'why-us-cta-card'       // dark CTA card on why-us section
    | 'industries-grid'       // grid of industry cards
    | 'industry-card'         // individual industry card
    | 'faq-layout'            // sticky sidebar + accordion layout
    | 'faq-sidebar'           // FAQ left sticky sidebar
    | 'faq-accordion'         // FAQ right accordion list
    | 'contact-layout'        // two-column contact section
    | 'contact-info'          // left info column
    | 'contact-form-wrapper'  // right form card
    | 'breadcrumb'            // breadcrumb nav strip
    | 'badge-row'             // inline badge/pill strip
    | 'cta-group'             // CTA button row
    | 'trust-strip'           // logo / cert row
    | 'resource-grid';        // knowledge/blog cards grid

export interface DivClassOptions {
    role: DivRole;
    section?: SectionType | null;
    service?: string | null;
    industry?: string | null;
    location?: string | null;
}

/**
 * generateDivClass({ role:'hero-content', section:'hero', service:'local-seo', location:'sydney' })
 * → "hero-content hero-local-seo-content sydney-hero-content"
 *
 * Pure function — same inputs → same output. Always call server-side.
 */
export function generateDivClass({ role, section, service, industry, location }: DivClassOptions): string {
    const s = slugify(service);
    const i = slugify(industry);
    const l = slugify(location);
    const sec = section ?? null;

    return cx(
        role,                                               // base role class e.g. "hero-content"
        sec && `${sec}-${role}`,                           // scoped to section e.g. "hero-hero-content"
        s && `${s}-${role}`,                               // scoped to service
        l && `${l}-${role}`,                               // scoped to location
        i && s && l && `${s}-${i}-${l}-${role}`,           // fully-qualified compound
    );
}
