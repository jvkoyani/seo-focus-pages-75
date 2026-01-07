import { GlossaryTerm } from '../glossaryData';

export const automationTerms: GlossaryTerm[] = [
    {
        slug: "programmatic-seo",
        term: "Programmatic SEO",
        definition: "Programmatic SEO is the creation of large-scale landing pages using code and datasets to target long-tail keywords (e.g., 'Best hiking trails in [City]').",
        category: "SEO Automation & Tools",
        lastUpdated: "December 18, 2025",
        author: { name: "Mike Chen", role: "Technical SEO Lead" },
        relatedTerms: ["Dynamic Pages", "Scalable Content", "Automation"],
        content: `
            <h2>Scale Your Traffic</h2>
            <p>Writing 1,000 pages manually is impossible. Programmatic SEO allows you to generate thousands of high-quality, unique pages by combining a database with a template. It's the secret behind sites like TripAdvisor and Yelp.</p>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Scale to Millions</h3>
                <p class="text-slate-600 mb-6">Build a programmatic SEO engine for your business.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Programmatic SEO Consulting</a>
            </div>
        `
    },
    {
        slug: "dynamic-seo-pages",
        term: "Dynamic SEO Pages",
        definition: "Dynamic SEO Pages are web pages where content is generated on the fly based on URL parameters or user data, often used in programmatic SEO.",
        category: "SEO Automation & Tools",
        lastUpdated: "December 18, 2025",
        author: { name: "Mike Chen", role: "Technical SEO Lead" },
        relatedTerms: ["Programmatic SEO", "SSR", "Parameters"],
        content: `
            <h2>Content on Demand</h2>
            <p>Dynamic pages allow you to serve relevant content without creating a static file for every variation. However, they must be handled carefully to ensure they are indexable by search engines.</p>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Dynamic & Indexable</h3>
                <p class="text-slate-600 mb-6">Ensure your dynamic pages are ranking.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Technical Audit</a>
            </div>
        `
    },
    {
        slug: "seo-automation",
        term: "SEO Automation",
        definition: "SEO Automation involves using software and scripts to perform repetitive SEO tasks (like rank tracking, auditing, and reporting) automatically.",
        category: "SEO Automation & Tools",
        lastUpdated: "December 18, 2025",
        author: { name: "Mike Chen", role: "Technical SEO Lead" },
        relatedTerms: ["Python for SEO", "APIs", "Scripts"],
        content: `
            <h2>Work Smarter</h2>
            <p>Automation frees up time for strategy. You can automate meta tag generation, broken link checking, and even content updates using tools like Python and APIs.</p>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Automate the Boring Stuff</h3>
                <p class="text-slate-600 mb-6">Custom scripts to streamline your SEO workflow.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Get Custom Automation</a>
            </div>
        `
    },
    {
        slug: "ai-content-audits",
        term: "AI Content Audits",
        definition: "AI Content Audits use machine learning to analyze thousands of pages instantly for quality, relevance, and optimization opportunities.",
        category: "SEO Automation & Tools",
        lastUpdated: "December 18, 2025",
        author: { name: "David Kim", role: "SEO Analyst" },
        relatedTerms: ["Content Pruning", "Quality Score", "NLP"],
        content: `
            <h2>Audit at Scale</h2>
            <p>Manual audits take weeks. AI audits take minutes. They can identify tone inconsistencies, missing entities, and outdated facts across your entire site.</p>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Instant Insights</h3>
                <p class="text-slate-600 mb-6">Audit your entire site with the power of AI.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Run an AI Audit</a>
            </div>
        `
    },
    {
        slug: "seo-apis",
        term: "SEO APIs",
        definition: "SEO APIs (Application Programming Interfaces) allow developers to access SEO data (like keywords, backlinks, and SERP results) programmatically to build custom tools.",
        category: "SEO Automation & Tools",
        lastUpdated: "December 18, 2025",
        author: { name: "Mike Chen", role: "Technical SEO Lead" },
        relatedTerms: ["Data For SEO", "Semrush API", "Ahrefs API"],
        content: `
            <h2>Build Your Own Tools</h2>
            <p>APIs allow you to integrate SEO data directly into your internal dashboards or products. This enables real-time monitoring and custom reporting.</p>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Integrate SEO Data</h3>
                <p class="text-slate-600 mb-6">Connect your systems with powerful SEO APIs.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">API Integration Services</a>
            </div>
        `
    },
    {
        slug: "headless-cms-seo",
        term: "Headless CMS SEO",
        definition: "Headless CMS SEO refers to the specific challenges and strategies involved in optimizing content managed in a headless system (like Contentful or Strapi) where the frontend is decoupled.",
        category: "SEO Automation & Tools",
        lastUpdated: "December 18, 2025",
        author: { name: "Mike Chen", role: "Technical SEO Lead" },
        relatedTerms: ["Jamstack", "Next.js", "Technical SEO"],
        content: `
            <h2>Decoupled Optimization</h2>
            <p>In a headless setup, SEO fields (meta tags, schema) must be explicitly modeled and rendered. It offers flexibility but requires careful technical implementation.</p>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Headless SEO Experts</h3>
                <p class="text-slate-600 mb-6">Ensure your headless stack is fully optimized.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Headless SEO Audit</a>
            </div>
        `
    }
];
