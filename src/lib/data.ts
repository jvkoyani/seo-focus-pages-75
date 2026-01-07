import {
  MapPin,
  Settings,
  FileText,
  Link as LinkIcon,
  ShoppingCart,
  BarChart,
  Briefcase,
  Building,
  Stethoscope,
  Scale,
  Activity,
  Home,
  Calculator,
  Search,
  Star,
  Wrench
} from 'lucide-react';

// Re-export locations from locationData
export { allAustralianCities as locations, australianCities, additionalCities } from './locationData';

export interface LocationData {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  state: string;
  county?: string;
  country: string;
  relatedLocations?: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ComparisonPoint {
  feature: string;
  us: string;
  others: string;
  diy: string;
}

export interface ServiceData {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  features: string[];
  content?: string;
  longFormContent?: {
    title: string;
    sections: { title: string; content: string }[];
  };
  process?: ProcessStep[];
  pricing?: PricingTier[];
  faqs?: FAQItem[];
  comparison?: ComparisonPoint[];
}

export interface TestimonialData {
  id: string;
  name: string;
  company: string;
  location: string;
  quote: string;
  image: string;
}

export interface IndustryData {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  benefits: string[];
  pricing?: PricingTier[];
  entityName?: string; // e.g., "Dental Practices", "Law Firms"
  faqs?: FAQItem[];
  whyNeedSeo?: {
    title: string;
    description: string;
    icon: 'Target' | 'Shield' | 'TrendingUp' | 'Users' | 'Search' | 'Map';
  }[];
}

export interface BlogPostData {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
}

export interface CaseStudyData {
  id: string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: string;
  image: string;
  serviceType?: string;
  location?: string;
  stats?: { label: string; value: string; prefix?: string; suffix?: string }[];
  strategy?: { title: string; description: string }[];
  implementation?: { title: string; description: string; duration: string }[];
}

export const services: ServiceData[] = [
  {
    id: '1',
    title: 'Local SEO',
    slug: 'local-seo',
    description: 'Dominate local search results and attract nearby customers with targeted local SEO strategies.',
    icon: 'map-pin',
    features: [
      'Google Business Profile optimization',
      'Local citation building',
      'Location-specific keyword targeting',
      'Local link building strategies',
      'Review management system'
    ],
    content: `<p>Your Google Business Profile is one of the most powerful tools for local SEO. It helps you establish your brand, drive traffic, and improve your search engine rankings.</p>`,
    longFormContent: {
      title: "The Ultimate Guide to Local SEO Dominance",
      sections: [
        {
          title: "Google Business Profile: Your Foundation",
          content: `
            <p>Your <strong>Google Business Profile (GBP)</strong> is the single most critical factor for ranking in the "Map Pack" (the top 3 map results). It's not enough to just claim it; you must optimize it aggressively.</p>
            <ul>
              <li><strong>Complete Every Field:</strong> Don't leave anything blank. Add your services, products, opening hours, and attributes (e.g., "Wheelchair accessible").</li>
              <li><strong>Primary Category:</strong> Choose the most specific category for your business (e.g., "Cosmetic Dentist" instead of just "Dentist").</li>
              <li><strong>Photos & Videos:</strong> Upload high-quality photos of your team, office, and work weekly. Google favors active profiles.</li>
              <li><strong>Q&A Section:</strong> Pre-populate the Q&A section with common customer questions and answer them yourself.</li>
            </ul>
            <p><em>Pro Tip: Enable messaging to let customers text you directly from Google Maps. Speed to lead is everything.</em></p>
          `
        },
        {
          title: "Local Citations & NAP Consistency",
          content: `
            <p>Citations are mentions of your business name, address, and phone number (NAP) on other websites. They act as "votes of confidence" for your location's validity.</p>
            <ul>
              <li><strong>The Big Aggregators:</strong> Ensure your data is correct on Foursquare, Data Axle, and Neustar Localeze.</li>
              <li><strong>Industry Directories:</strong> Get listed on niche-specific sites (e.g., Avvo for lawyers, Houzz for contractors).</li>
              <li><strong>Consistency is Key:</strong> "123 Main St" and "123 Main Street" are different to a bot. Use a tool like BrightLocal to fix discrepancies.</li>
            </ul>
          `
        },
        {
          title: "On-Page Signals for Local Ranking",
          content: `
            <p>Your website tells Google what you do and where you do it. Optimize your pages to reinforce your local relevance.</p>
            <ul>
              <li><strong>Localized Content:</strong> Don't just stuff keywords. Write about local events, news, or projects in your city.</li>
              <li><strong>Location Pages:</strong> If you serve multiple cities, create a unique, high-quality page for each one (like this one!).</li>
              <li><strong>Schema Markup:</strong> Implement <strong>LocalBusiness Schema</strong> JSON-LD code to explicitly tell search engines your address, hours, and service area.</li>
              <li><strong>Embed a Map:</strong> Embed your Google Map on your contact page to connect your site to your GBP.</li>
            </ul>
          `
        },
        {
          title: "The Power of Reviews",
          content: `
            <p>Reviews are a major ranking factor and the biggest conversion driver. A 4.9-star rating with 100 reviews beats a 5.0 rating with 2 reviews every time.</p>
            <ul>
              <li><strong>Velocity Matters:</strong> Getting 10 reviews in one month is better than 10 reviews over a year. Consistent flow signals an active business.</li>
              <li><strong>Keywords in Reviews:</strong> Encourage clients to mention the service they received (e.g., "Best <strong>root canal</strong> in Melbourne").</li>
              <li><strong>Respond to Everything:</strong> Reply to every review, good or bad. It shows you care and gives you a chance to use keywords naturally.</li>
            </ul>
          `
        },
        {
          title: "Local Link Building",
          content: `
            <p>Backlinks from local sources are incredibly powerful. They prove to Google that you are a trusted member of the local community.</p>
            <ul>
              <li><strong>Sponsorships:</strong> Sponsor a local little league team or charity event.</li>
              <li><strong>Local News:</strong> Get featured in local blogs or newspapers for a new launch or community initiative.</li>
              <li><strong>Chamber of Commerce:</strong> Join your local chamber and get a high-authority backlink from their directory.</li>
            </ul>
            <p><strong>The Bottom Line:</strong> Local SEO is a game of trust. Prove to Google that you are real, active, and loved by your community, and you will win.</p>
          `
        }
      ]
    },
    process: [
      {
        title: "Audit & Strategy",
        description: "We perform a deep-dive audit of your current local presence, identifying NAP inconsistencies, GMB errors, and competitor gaps.",
        icon: "search"
      },
      {
        title: "Foundation & Optimization",
        description: "We optimize your Google Business Profile, fix citations, and implement local schema markup on your website.",
        icon: "settings"
      },
      {
        title: "Authority Building",
        description: "We build high-quality local citations and earn backlinks from reputable local directories and niche-relevant sites.",
        icon: "link"
      },
      {
        title: "Review & Reputation",
        description: "We implement a system to generate consistent 5-star reviews and manage your online reputation to build trust.",
        icon: "star"
      }
    ],
    pricing: [
      {
        name: "Local Starter",
        price: "$997/mo",
        description: "Perfect for small businesses targeting a single location.",
        features: [
          "Google Business Profile Optimization",
          "Local Citation Building (50+)",
          "Review Management System",
          "Monthly Performance Report",
          "1 Location"
        ]
      },
      {
        name: "Local Growth",
        price: "$1,997/mo",
        description: "Ideal for growing businesses in competitive markets.",
        features: [
          "Everything in Starter",
          "Advanced On-Page Local SEO",
          "Content Creation (2 Blogs/mo)",
          "Local Link Building",
          "Competitor Analysis",
          "Up to 3 Locations",
          "Priority Support"
        ],
        recommended: true
      },
      {
        name: "Market Dominance",
        price: "$3,497/mo",
        description: "For businesses that want to own their local market.",
        features: [
          "Everything in Growth",
          "Aggressive Link Building",
          "Digital PR Campaigns",
          "Weekly Strategy Calls",
          "Unlimited Locations",
          "Dedicated Account Manager",
          "24/7 Support"
        ]
      }
    ],
    faqs: [
      {
        question: "How long does it take to see results from Local SEO?",
        answer: "Typically, you can expect to see initial movements within 30-60 days. However, significant results and top 3 rankings usually take 3-6 months depending on the competitiveness of your market and your starting point."
      },
      {
        question: "Do I really need Local SEO if I have a website?",
        answer: "Yes. Traditional SEO helps you rank globally or nationally, but Local SEO specifically helps you rank for 'near me' searches and in the Google Map Pack, which is where 70% of local clicks happen."
      },
      {
        question: "What is the Google Map Pack?",
        answer: "The Google Map Pack (or Local Pack) is the section of Google search results that shows the top 3 local businesses on a map. Ranking here is the #1 goal of Local SEO as it generates the highest visibility and click-through rates."
      },
      {
        question: "How do you handle bad reviews?",
        answer: "We have a proactive reputation management strategy. We help you generate more positive reviews to drown out the negative ones, and we provide templates and guidance on how to respond to negative reviews professionally to turn them into opportunities."
      }
    ],
    comparison: [
      {
        feature: "Strategy",
        us: "Custom-tailored to your city & niche",
        others: "Generic 'one-size-fits-all'",
        diy: "Trial and error"
      },
      {
        feature: "Reporting",
        us: "Live dashboard + Video walkthroughs",
        others: "Automated PDF exports",
        diy: "Manual checking"
      },
      {
        feature: "Focus",
        us: "ROI & Revenue",
        others: "Vanity metrics (traffic)",
        diy: "Saving money"
      },
      {
        feature: "Communication",
        us: "Dedicated Slack channel",
        others: "Support tickets",
        diy: "N/A"
      }
    ]
  },
  {
    id: '2',
    title: 'Technical SEO',
    slug: 'technical-seo',
    description: 'Improve your website\'s foundation with comprehensive technical SEO audits and optimizations.',
    icon: 'settings',
    features: [
      'Site speed optimization',
      'Mobile-friendly improvements',
      'Schema markup implementation',
      'Crawlability & indexation fixes',
      'SSL & security enhancements'
    ],
    content: `<p>While content and backlinks often take the spotlight in SEO discussions, technical SEO forms the foundation. It includes elements like site speed, mobile optimization, and schema markup.</p>`,
    longFormContent: {
      title: "The Technical SEO Audit Checklist",
      sections: [
        {
          title: "Core Web Vitals & Page Experience",
          content: `
            <p>Google's <strong>Core Web Vitals</strong> are a set of metrics that measure real-world user experience for loading performance, interactivity, and visual stability.</p>
            <ul>
              <li><strong>Largest Contentful Paint (LCP):</strong> Measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.</li>
              <li><strong>First Input Delay (FID):</strong> Measures interactivity. To provide a good user experience, pages should have a FID of 100 milliseconds or less.</li>
              <li><strong>Cumulative Layout Shift (CLS):</strong> Measures visual stability. To provide a good user experience, pages should maintain a CLS of 0.1. or less.</li>
            </ul>
          `
        },
        {
          title: "Crawlability & Indexation",
          content: `
            <p>If Google can't find your pages, they can't rank. We ensure your site's architecture is healthy and accessible.</p>
            <ul>
              <li><strong>Robots.txt:</strong> Ensure you aren't accidentally blocking important resources.</li>
              <li><strong>XML Sitemaps:</strong> Submit a clean, updated sitemap to Google Search Console.</li>
              <li><strong>Canonical Tags:</strong> Prevent duplicate content issues by correctly implementing canonical tags on all pages.</li>
            </ul>
          `
        },
        {
          title: "Mobile Usability",
          content: `
            <p>With Google's <strong>Mobile-First Indexing</strong>, the mobile version of your site is the one that counts. It must be flawless.</p>
            <ul>
              <li><strong>Responsive Design:</strong> Your site should adapt seamlessly to any screen size.</li>
              <li><strong>Touch Targets:</strong> Buttons and links must be large enough to be tapped easily.</li>
              <li><strong>Viewport Configuration:</strong> Ensure the viewport meta tag is set correctly.</li>
            </ul>
          `
        },
        {
          title: "Structured Data (Schema Markup)",
          content: `
            <p>Schema markup helps search engines understand your content and provides rich snippets in search results.</p>
            <ul>
              <li><strong>Organization Schema:</strong> Define your logo, social profiles, and contact info.</li>
              <li><strong>BreadcrumbList:</strong> Help users and bots understand your site structure.</li>
              <li><strong>Article/BlogPosting:</strong> enhance the appearance of your news and blog content.</li>
            </ul>
          `
        }
      ]
    },
    pricing: [
      {
        name: "Audit Only",
        price: "$1,497",
        description: "A one-time deep dive into your site's technical health.",
        features: [
          "Comprehensive Technical Audit",
          "Core Web Vitals Analysis",
          "Crawlability Check",
          "Prioritized Action Plan",
          "1 Hour Strategy Call"
        ]
      },
      {
        name: "Fix & Optimize",
        price: "$2,997/mo",
        description: "We identify issues and fix them for you.",
        features: [
          "Everything in Audit",
          "Implementation of Fixes",
          "Schema Markup Deployment",
          "Speed Optimization",
          "Monthly Health Checks",
          "Developer Coordination"
        ],
        recommended: true
      },
      {
        name: "Enterprise Tech",
        price: "$4,997/mo",
        description: "For large sites with complex technical needs.",
        features: [
          "Everything in Fix & Optimize",
          "Log File Analysis",
          "JS Rendering Optimization",
          "International SEO (Hreflang)",
          "Migration Support",
          "24/7 Monitoring"
        ]
      }
    ],
    faqs: [
      {
        question: "How long does a technical audit take?",
        answer: "A comprehensive audit typically takes 5-7 business days. We manually review your site alongside automated scans to ensure nothing is missed."
      },
      {
        question: "Do you fix the issues you find?",
        answer: "Yes! Unlike many agencies that just hand you a PDF of errors, our 'Fix & Optimize' plan includes the actual implementation of fixes by our technical team."
      },
      {
        question: "Will technical SEO fix my traffic drop?",
        answer: "If the drop was caused by a technical error (like a noindex tag or crawl issue), yes. Technical SEO removes the handbrake from your site so your content can rank."
      }
    ],
    comparison: [
      {
        feature: "Methodology",
        us: "Manual Code Review + Tools",
        others: "Automated Tool Export",
        diy: "Google Search Console"
      },
      {
        feature: "Implementation",
        us: "We Fix It For You",
        others: "They Send a List",
        diy: "You Fix It"
      },
      {
        feature: "Focus",
        us: "User Experience & Indexing",
        others: "Arbitrary Scores",
        diy: "Guesswork"
      }
    ]
  },
  {
    id: '3',
    title: 'Content Strategy',
    slug: 'content-strategy',
    description: 'Create content that ranks and engages your target audience to drive qualified traffic.',
    icon: 'file-text',
    features: [
      'Keyword research & planning',
      'Content gap analysis',
      'Blog strategy development',
      'Content optimization',
      'Topic cluster creation'
    ],
    content: `<p>E-commerce websites face unique content challenges. While product pages are your conversion workhorses, content is equally important. It includes blog posts, product descriptions, and other types of content that help your website rank higher in search results.</p>`,
    longFormContent: {
      title: "Content That Ranks & Converts",
      sections: [
        {
          title: "Keyword Research & Intent Matching",
          content: `
            <p>Keywords are the foundation, but <strong>Search Intent</strong> is the key. We analyze <em>why</em> a user is searching, not just <em>what</em> they are searching for.</p>
            <ul>
              <li><strong>Informational:</strong> "How to fix a leaky tap" (Blog posts, guides).</li>
              <li><strong>Commercial:</strong> "Best plumber near me" (Service pages, reviews).</li>
              <li><strong>Transactional:</strong> "Book emergency plumber" (Booking pages).</li>
            </ul>
          `
        },
        {
          title: "Topic Clusters & Pillar Pages",
          content: `
            <p>Don't just write random blog posts. Build <strong>Topic Clusters</strong> to establish topical authority.</p>
            <ul>
              <li><strong>Pillar Page:</strong> A comprehensive guide covering a broad topic (e.g., "Complete Guide to Plumbing").</li>
              <li><strong>Cluster Content:</strong> Specific articles linking back to the pillar (e.g., "How to unclog a drain", "Fixing low water pressure").</li>
              <li><strong>Internal Linking:</strong> Connect all these pieces to signal authority to Google.</li>
            </ul>
          `
        },
        {
          title: "On-Page Content Optimization",
          content: `
            <p>Great content needs to be structured for both readers and search engines.</p>
            <ul>
              <li><strong>Header Tags (H1, H2, H3):</strong> Use a logical hierarchy to break up text.</li>
              <li><strong>Meta Tags:</strong> Write compelling Title Tags and Meta Descriptions to improve CTR.</li>
              <li><strong>Readability:</strong> Use short paragraphs, bullet points, and images to keep users engaged.</li>
            </ul>
          `
        }
      ]
    },
    pricing: [
      {
        name: "Strategy Only",
        price: "$1,997",
        description: "A roadmap for your team to execute.",
        features: [
          "Keyword Research & Mapping",
          "Content Gap Analysis",
          "Topic Cluster Strategy",
          "Content Calendar (6 Months)",
          "Brief Templates"
        ]
      },
      {
        name: "Content Growth",
        price: "$3,997/mo",
        description: "Consistent, high-quality content production.",
        features: [
          "Everything in Strategy",
          "4 High-Quality Blog Posts/mo",
          "On-Page Optimization",
          "Internal Linking",
          "Monthly Performance Report",
          "Quarterly Strategy Refresh"
        ],
        recommended: true
      },
      {
        name: "Market Dominance",
        price: "$6,997/mo",
        description: "Aggressive content scaling for rapid growth.",
        features: [
          "Everything in Growth",
          "8 High-Quality Blog Posts/mo",
          "2 Power Pages / Lead Magnets",
          "Content Updates (Refresh Old Posts)",
          "Dedicated Editor",
          "Subject Matter Expert Interviews"
        ]
      }
    ],
    faqs: [
      {
        question: "Who writes the content?",
        answer: "Our content is written by niche-specific writers, not generic freelancers or AI. We match you with a writer who understands your industry."
      },
      {
        question: "How long are the articles?",
        answer: "We don't focus on word count; we focus on depth. However, most ranking articles are between 1,500 and 2,500 words depending on the topic's complexity."
      },
      {
        question: "Do you use AI?",
        answer: "We use AI for research and outlining, but the drafting is 100% human. Google values helpful, expert content, and that requires a human touch."
      }
    ],
    comparison: [
      {
        feature: "Approach",
        us: "Search Intent & Clusters",
        others: "Keyword Stuffing",
        diy: "Random Topics"
      },
      {
        feature: "Quality",
        us: "Expert Written & Edited",
        others: "Cheap Outsourced",
        diy: "Inconsistent"
      },
      {
        feature: "Goal",
        us: "Leads & Authority",
        others: "Word Count",
        diy: "Traffic"
      }
    ]
  },
  {
    id: '4',
    title: 'Link Building',
    slug: 'link-building',
    description: 'Build high-quality backlinks that improve authority and boost search rankings.',
    icon: 'link',
    features: [
      'Authority backlink acquisition',
      'Content-driven link building',
      'Competitor link analysis',
      'Guest posting campaigns',
      'Digital PR strategies'
    ],
    content: `<p>Backlinks are one of the most important factors in SEO. They help establish your website's authority and improve your search engine rankings. We can help you acquire high-quality backlinks through various methods like guest posting, content marketing, and digital PR.</p>`,
    longFormContent: {
      title: "The Authority Building Playbook",
      sections: [
        {
          title: "Quality vs. Quantity",
          content: `
            <p>One link from a high-authority, relevant site (like <em>Forbes</em> or a major industry blog) is worth more than 1,000 links from low-quality directories.</p>
            <ul>
              <li><strong>Domain Authority (DA/DR):</strong> We target sites with high trust metrics.</li>
              <li><strong>Relevance:</strong> Links must come from sites in your industry or niche.</li>
              <li><strong>Traffic:</strong> A link from a site with zero traffic is worthless.</li>
            </ul>
          `
        },
        {
          title: "Digital PR & Outreach",
          content: `
            <p>We earn links by creating newsworthy stories and pitching them to journalists and bloggers.</p>
            <ul>
              <li><strong>Data Studies:</strong> We analyze industry data to create unique reports that people want to cite.</li>
              <li><strong>Expert Commentary:</strong> We position you as a thought leader to get quoted in articles.</li>
              <li><strong>Newsjacking:</strong> We monitor trends to insert your brand into breaking news stories.</li>
            </ul>
          `
        },
        {
          title: "Toxic Link Cleanup",
          content: `
            <p>Bad links can hurt your rankings. We regularly audit your backlink profile to protect your site.</p>
            <ul>
              <li><strong>Audit:</strong> Identify spammy, irrelevant, or malicious links.</li>
              <li><strong>Disavow:</strong> Submit a disavow file to Google to tell them to ignore these bad links.</li>
              <li><strong>Monitor:</strong> Set up alerts for new lost or gained backlinks.</li>
            </ul>
          `
        }
      ]
    },
    pricing: [
      {
        name: "Starter Links",
        price: "$2,497/mo",
        description: "Safe, steady authority building.",
        features: [
          "5 High-Quality Backlinks",
          "DR 30+ Guaranteed",
          "Niche Relevant Sites",
          "Manual Outreach",
          "Anchor Text Strategy"
        ]
      },
      {
        name: "Growth Links",
        price: "$4,497/mo",
        description: "Accelerate your rankings with more power.",
        features: [
          "10 High-Quality Backlinks",
          "DR 40+ Guaranteed",
          "Includes 2 DR 60+ Links",
          "Competitor Link Acquisition",
          "Content Marketing Assets",
          "Toxic Link Monitoring"
        ],
        recommended: true
      },
      {
        name: "Enterprise Authority",
        price: "$7,997/mo",
        description: "Dominate the most competitive niches.",
        features: [
          "20 High-Quality Backlinks",
          "DR 50+ Guaranteed",
          "Digital PR Campaigns",
          "Unlinked Brand Mentions",
          "Dedicated Outreach Team",
          "White Label Reporting"
        ]
      }
    ],
    faqs: [
      {
        question: "Are these links safe?",
        answer: "100%. We strictly adhere to Google's Webmaster Guidelines. We do not use PBNs, link farms, or automated software. Every link is earned through manual outreach."
      },
      {
        question: "What is Domain Rating (DR)?",
        answer: "DR is a metric by Ahrefs that predicts how authoritative a website is. A higher DR means the link carries more weight and power for your SEO."
      },
      {
        question: "Do you guarantee rankings?",
        answer: "No ethical SEO agency can guarantee specific rankings, but we do guarantee the quality and quantity of the links we build, which are the primary driver of rankings."
      }
    ],
    comparison: [
      {
        feature: "Source",
        us: "Real Sites with Traffic",
        others: "PBNs / Link Farms",
        diy: "Directories"
      },
      {
        feature: "Method",
        us: "Manual Outreach",
        others: "Automated Spam",
        diy: "Begging"
      },
      {
        feature: "Risk",
        us: "Zero (White Hat)",
        others: "High (Penalties)",
        diy: "Low"
      }
    ]
  },
  {
    id: '5',
    title: 'E-commerce SEO',
    slug: 'ecommerce-seo',
    description: 'Specialized optimization for online stores to increase product visibility and sales.',
    icon: 'shopping-cart',
    features: [
      'Product page optimization',
      'Category page structuring',
      'Review schema implementation',
      'Conversion rate optimization',
      'Shopping feed management'
    ],
    content: `<p>E-commerce websites face unique content challenges. While product pages are your conversion workhorses, content is equally important. It includes blog posts, product descriptions, and other types of content that help your website rank higher in search results.</p>`,
    longFormContent: {
      title: "Scaling E-commerce Revenue",
      sections: [
        {
          title: "Product Page Optimization",
          content: `
            <p>Your product pages are where the money is made. They need to rank for high-intent keywords.</p>
            <ul>
              <li><strong>Unique Descriptions:</strong> Never use the manufacturer's default description. Write unique, persuasive copy.</li>
              <li><strong>High-Quality Images:</strong> Use multiple angles, zoom, and alt tags.</li>
              <li><strong>User Reviews:</strong> Enable reviews to add fresh content and social proof.</li>
            </ul>
          `
        },
        {
          title: "Site Architecture & Navigation",
          content: `
            <p>A logical structure helps users find products and helps bots crawl your site.</p>
            <ul>
              <li><strong>Breadcrumbs:</strong> Implement breadcrumb navigation (Home > Men > Shoes > Running).</li>
              <li><strong>URL Structure:</strong> Keep URLs clean and descriptive (/category/product-name).</li>
              <li><strong>Internal Linking:</strong> Link to related products and top-selling items.</li>
            </ul>
          `
        },
        {
          title: "Handling Faceted Navigation",
          content: `
            <p>Filters (size, color, price) can create thousands of duplicate pages. We fix this technically.</p>
            <ul>
              <li><strong>Canonical Tags:</strong> Point all variations to the main category page.</li>
              <li><strong>Robots Directives:</strong> Block bots from crawling low-value filter combinations.</li>
              <li><strong>Pagination:</strong> Ensure page 2, 3, etc., are handled correctly with rel="next/prev".</li>
            </ul>
          `
        }
      ]
    },
    pricing: [
      {
        name: "Store Starter",
        price: "$1,997/mo",
        description: "Essential SEO for small e-commerce sites.",
        features: [
          "Technical Audit & Fixes",
          "Category Page Optimization",
          "Product Schema Markup",
          "1 Blog Post/mo",
          "Monthly Reporting"
        ]
      },
      {
        name: "Store Growth",
        price: "$3,997/mo",
        description: "Scale your revenue and organic traffic.",
        features: [
          "Everything in Starter",
          "Advanced Product SEO",
          "Faceted Nav Optimization",
          "3 Blog Posts/mo",
          "Link Building (5 Links)",
          "Conversion Rate Optimization"
        ],
        recommended: true
      },
      {
        name: "Market Leader",
        price: "$7,997/mo",
        description: "For brands ready to dominate their niche.",
        features: [
          "Everything in Growth",
          "Digital PR for E-commerce",
          "Influencer Outreach",
          "International SEO",
          "Custom Development Support",
          "Weekly Strategy Calls"
        ]
      }
    ],
    faqs: [
      {
        question: "Do you work with Shopify/Magento/WooCommerce?",
        answer: "Yes, we are experts in all major e-commerce platforms including Shopify, Magento, WooCommerce, and BigCommerce."
      },
      {
        question: "How do you handle out-of-stock products?",
        answer: "We implement strategies to keep the page value alive, such as suggesting related products or offering a 'notify me' email capture, rather than just 404ing the page."
      },
      {
        question: "Can you track sales from SEO?",
        answer: "Absolutely. We set up Enhanced E-commerce tracking in Google Analytics to attribute revenue directly to organic search traffic."
      }
    ],
    comparison: [
      {
        feature: "Focus",
        us: "Revenue & ROAS",
        others: "Traffic & Rankings",
        diy: "Sales"
      },
      {
        feature: "Technical",
        us: "Platform Experts",
        others: "Generic SEO",
        diy: "Plugin Reliance"
      },
      {
        feature: "Content",
        us: "Buyer Guides",
        others: "Thin Content",
        diy: "Product Descriptions"
      }
    ]
  },
  {
    id: '6',
    title: 'Analytics & Reporting',
    slug: 'analytics-reporting',
    description: 'Transparent reporting with actionable insights to track and improve your SEO performance.',
    icon: 'bar-chart',
    features: [
      'Custom dashboard creation',
      'Monthly performance reports',
      'Conversion tracking setup',
      'Traffic analysis',
      'ROI measurement'
    ],
    content: `<p>Transparent reporting with actionable insights to track and improve your SEO performance. It includes monthly performance reports, conversion tracking setup, traffic analysis, and ROI measurement.</p>`,
    longFormContent: {
      title: "Data-Driven Growth",
      sections: [
        {
          title: "Setting the Right KPIs",
          content: `
            <p>Traffic is vanity; revenue is sanity. We focus on the metrics that actually matter to your bottom line.</p>
            <ul>
              <li><strong>Organic Revenue:</strong> How much money is SEO actually making you?</li>
              <li><strong>Conversion Rate:</strong> What percentage of visitors turn into leads or customers?</li>
              <li><strong>Cost Per Acquisition (CPA):</strong> How much does it cost to get a new customer via SEO?</li>
            </ul>
          `
        },
        {
          title: "Advanced Tracking Setup",
          content: `
            <p>We go beyond basic pageviews. We set up advanced tracking to capture every interaction.</p>
            <ul>
              <li><strong>GA4 Events:</strong> Track clicks, scrolls, video views, and form submissions.</li>
              <li><strong>Call Tracking:</strong> See exactly which keywords drove phone calls.</li>
              <li><strong>E-commerce Tracking:</strong> Visualize the entire funnel from view to purchase.</li>
            </ul>
          `
        },
        {
          title: "Custom Dashboards",
          content: `
            <p>Stop drowning in spreadsheets. We build live, interactive dashboards (Looker Studio) that show you exactly what's happening.</p>
            <ul>
              <li><strong>Real-Time Data:</strong> See performance as it happens.</li>
              <li><strong>Competitor Benchmarking:</strong> See how you stack up against the competition.</li>
              <li><strong>Executive Summaries:</strong> High-level views for stakeholders.</li>
            </ul>
          `
        }
      ]
    },
    pricing: [
      {
        name: "Setup Only",
        price: "$997",
        description: "Get your tracking fixed and accurate.",
        features: [
          "GA4 Configuration",
          "GTM Container Setup",
          "Conversion Event Tracking",
          "Basic Looker Studio Dashboard",
          "Data Integrity Audit"
        ]
      },
      {
        name: "Monthly Analysis",
        price: "$1,997/mo",
        description: "Ongoing insights to drive strategy.",
        features: [
          "Everything in Setup",
          "Monthly Deep Dive Report",
          "Attribution Modeling",
          "User Journey Analysis",
          "CRO Suggestions",
          "Strategy Call"
        ],
        recommended: true
      },
      {
        name: "Fractional CDO",
        price: "$4,997/mo",
        description: "Executive-level data leadership.",
        features: [
          "Everything in Analysis",
          "Data Warehousing (BigQuery)",
          "Predictive Analytics",
          "Multi-Channel Attribution",
          "Board-Level Reporting",
          "Weekly Consulting"
        ]
      }
    ],
    faqs: [
      {
        question: "Do I own the data?",
        answer: "Yes, 100%. You own your Google Analytics, Tag Manager, and Looker Studio accounts. We just manage them for you."
      },
      {
        question: "Can you track offline sales?",
        answer: "Yes, we can implement offline conversion tracking by uploading CRM data back into Google Ads and Analytics to close the loop."
      },
      {
        question: "What tools do you use?",
        answer: "We primarily use the Google Marketing Platform (GA4, GTM, Looker Studio) but also work with tools like Mixpanel, Heap, and various CRM systems."
      }
    ],
    comparison: [
      {
        feature: "Output",
        us: "Actionable Insights",
        others: "Data Dumps",
        diy: "Confusion"
      },
      {
        feature: "Setup",
        us: "Custom Event Tracking",
        others: "Default Settings",
        diy: "Broken Tags"
      },
      {
        feature: "Goal",
        us: "Profitability",
        others: "Reporting",
        diy: "Awareness"
      }
    ]
  }
];

export const testimonials: TestimonialData[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    company: 'Metro Retail Solutions',
    location: 'Sydney',
    quote: 'Our organic traffic increased by 156% in just 6 months after implementing their SEO strategy. The team is incredibly knowledgeable and responsive.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Michael Chen',
    company: 'Tech Innovations Inc',
    location: 'Melbourne',
    quote: 'We were struggling to rank for competitive keywords in our industry. Their technical SEO audit identified critical issues that, once fixed, helped us reach page one.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Emma Wilson',
    company: 'Coastal Properties',
    location: 'Brisbane',
    quote: 'The local SEO campaign they developed for our real estate agency has been transformative. We\'re now the top result for our target keywords in Brisbane.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop'
  }
];

export const industries: IndustryData[] = [
  {
    id: '1',
    title: 'Accountant SEO',
    slug: 'accountant-seo',
    entityName: 'Accounting Firms',
    description: 'Specialized SEO strategies to help accounting firms attract more qualified leads and grow their client base.',
    icon: Calculator,
    features: [
      'Local SEO for accounting practices',
      'Content strategy for financial topics',
      'Reputation management',
      'Conversion optimization for client acquisition',
      'Competitor analysis'
    ],
    benefits: [
      'Attract more qualified leads looking for accounting services',
      'Establish authority in specialized financial niches',
      'Increase visibility for high-value keywords',
      'Improve conversion rates for consultation requests',
      'Gain competitive advantage in local search results'
    ],
    pricing: [
      {
        name: "Practice Starter",
        price: "$1,497/mo",
        description: "Essential local visibility for solo practitioners.",
        features: [
          "Local SEO Audit",
          "Google Business Profile Optimization",
          "5 Service Page Optimizations",
          "Monthly Reporting",
          "Review Management"
        ]
      },
      {
        name: "Firm Growth",
        price: "$2,997/mo",
        description: "Aggressive growth for established firms.",
        features: [
          "Everything in Starter",
          "Content Marketing (2 Blogs/mo)",
          "Link Building (5 Links/mo)",
          "Competitor Analysis",
          "Conversion Rate Optimization",
          "Priority Support"
        ],
        recommended: true
      },
      {
        name: "Market Leader",
        price: "$5,497/mo",
        description: "Dominate your local market and practice areas.",
        features: [
          "Everything in Growth",
          "Digital PR Campaigns",
          "Advanced Schema Implementation",
          "Weekly Strategy Calls",
          "Dedicated Account Manager",
          "Unlimited Keywords"
        ]
      }
    ],
    faqs: [
      {
        question: "Why do accounting firms need specialized SEO?",
        answer: "Accounting is a trust-based profession. Potential clients search for local experts they can rely on. Specialized SEO ensures you appear for high-intent keywords like 'tax accountant near me' or 'small business CPA', positioning your firm as the trusted authority in your area."
      },
      {
        question: "How can SEO help my accounting firm during tax season?",
        answer: "By optimizing for tax-related keywords well in advance, we ensure your firm is visible when search volume peaks. We also create content that answers common tax questions, driving traffic and capturing leads right when they need you most."
      },
      {
        question: "Can you help us rank for specific services like 'forensic accounting'?",
        answer: "Absolutely. We build dedicated service pages for each of your practice areas. This allows us to target specific, high-value keywords and attract clients looking for exactly what you offer, rather than just general accounting inquiries."
      }
    ],
    whyNeedSeo: [
      {
        title: "Build Trust & Credibility",
        description: "Clients trust accountants who appear at the top of search results. High rankings signal authority and reliability in financial matters.",
        icon: "Shield"
      },
      {
        title: "Attract High-Value Clients",
        description: "Target specific services like 'business tax planning' or 'audit services' to attract clients with higher lifetime value.",
        icon: "Target"
      },
      {
        title: "Dominate Local Search",
        description: "Be the first firm potential clients see when searching for accountants in your area, before they find your competitors.",
        icon: "Map"
      }
    ]
  },
  {
    id: '2',
    title: 'Chiropractor SEO',
    slug: 'chiropractor-seo',
    entityName: 'Chiropractic Clinics',
    description: 'Custom SEO solutions for chiropractors to increase patient acquisition and boost local visibility.',
    icon: Activity,
    features: [
      'Local SEO for chiropractic clinics',
      'Patient testimonial optimization',
      'Google Business Profile management',
      'Content marketing for patient education',
      'Review generation strategies'
    ],
    benefits: [
      'Attract more patients searching for chiropractic care',
      'Build trust through optimized reviews and testimonials',
      'Increase visibility in local map pack results',
      'Educate potential patients about your services',
      'Differentiate your practice from competitors'
    ],
    pricing: [
      {
        name: "Clinic Starter",
        price: "$1,297/mo",
        description: "Get found by local patients needing care.",
        features: [
          "Local Map Pack Optimization",
          "Google Business Profile Management",
          "Citation Building",
          "Basic On-Page SEO",
          "Monthly Performance Report"
        ]
      },
      {
        name: "Patient Growth",
        price: "$2,497/mo",
        description: "Drive consistent new patient inquiries.",
        features: [
          "Everything in Starter",
          "Condition-Specific Content (2/mo)",
          "Local Link Building",
          "Review Generation System",
          "Website Speed Optimization",
          "Quarterly Strategy Review"
        ],
        recommended: true
      },
      {
        name: "Practice Dominance",
        price: "$4,497/mo",
        description: "Become the #1 chiropractor in your city.",
        features: [
          "Everything in Growth",
          "High-Authority Link Building",
          "Video SEO Optimization",
          "Advanced Analytics Setup",
          "Competitor Displacement Strategy",
          "24/7 Support Access"
        ]
      }
    ],
    faqs: [
      {
        question: "How does SEO help chiropractors get more patients?",
        answer: "Most patients look for a chiropractor when they are in pain and need immediate help. Local SEO ensures your clinic appears at the top of Google Maps and search results when they search for 'chiropractor near me' or specific conditions like 'back pain relief'."
      },
      {
        question: "Do I need a blog for my chiropractic website?",
        answer: "Yes, a blog is crucial for educating patients and building authority. We create content around common conditions you treat (e.g., sciatica, migraines). This answers patient questions and helps you rank for those specific symptom-related searches."
      },
      {
        question: "How do reviews affect my chiropractic SEO?",
        answer: "Reviews are a major ranking factor for local businesses. Positive reviews build trust with potential patients and signal to Google that you are a reputable clinic. Our strategy includes a system to help you generate more 5-star reviews from happy patients."
      }
    ],
    whyNeedSeo: [
      {
        title: "Capture Urgent Patients",
        description: "Patients in pain search for immediate relief. Ranking for 'chiropractor near me' connects you with patients ready to book now.",
        icon: "Target"
      },
      {
        title: "Educate & Convert",
        description: "Rank for symptom-related searches like 'sciatica treatment' to educate patients and position your clinic as the solution.",
        icon: "Search"
      },
      {
        title: "Boost Local Visibility",
        description: "Stand out in the Google Map Pack to ensure local patients find your clinic first when searching on their mobile devices.",
        icon: "Map"
      }
    ]
  },
  {
    id: '3',
    title: 'Dental SEO',
    slug: 'dental-seo',
    entityName: 'Dental Practices',
    description: 'Results-driven SEO for dental practices focused on patient acquisition and practice growth.',
    icon: Stethoscope,
    features: [
      'Local SEO for dental practices',
      'Service page optimization',
      'Patient journey mapping',
      'Content strategy for oral health topics',
      'Competitive analysis against other local dentists'
    ],
    benefits: [
      'Increase new patient inquiries through organic search',
      'Rank higher for profitable treatment keywords',
      'Improve visibility in Google Maps and local results',
      'Build authority through educational dental content',
      'Track and improve ROI from your digital marketing'
    ],
    pricing: [
      {
        name: "Dental Essentials",
        price: "$1,997/mo",
        description: "Foundation for attracting new patients.",
        features: [
          "Local SEO for Main Location",
          "Google Business Profile Optimization",
          "Service Page Optimization",
          "Review Widget Installation",
          "Monthly Reporting"
        ]
      },
      {
        name: "Practice Growth",
        price: "$3,497/mo",
        description: "Fill your chair with high-value patients.",
        features: [
          "Everything in Essentials",
          "Treatment-Specific Content (Implants, Invisalign)",
          "Local Link Building",
          "Conversion Optimization",
          "Call Tracking Setup",
          "Competitor Analysis"
        ],
        recommended: true
      },
      {
        name: "Market Authority",
        price: "$6,997/mo",
        description: "Dominate search for cosmetic and restorative dentistry.",
        features: [
          "Everything in Growth",
          "Premium Link Acquisition",
          "Digital PR & Media Mentions",
          "Video Content Strategy",
          "Multi-Location Support",
          "Dedicated Success Manager"
        ]
      }
    ],
    faqs: [
      {
        question: "Why is local SEO critical for dental practices?",
        answer: "Dentistry is a hyper-local business. Patients rarely travel far for a dentist. Local SEO ensures you dominate the search results in your specific suburb and surrounding areas, capturing the patients who are most likely to book an appointment."
      },
      {
        question: "Can SEO help me get more high-value patients (e.g., implants, Invisalign)?",
        answer: "Yes. We move beyond generic 'dentist' keywords and target high-value terms like 'dental implants', 'Invisalign provider', and 'cosmetic dentistry'. We build specific pages for these services to attract patients looking for these profitable treatments."
      },
      {
        question: "How long does it take for a dental practice to rank #1?",
        answer: "It depends on the competition in your area. Typically, you can see significant improvements in traffic and inquiries within 3-6 months. However, SEO is an ongoing process of building authority and maintaining your top position against competitors."
      }
    ],
    whyNeedSeo: [
      {
        title: "Attract High-Value Patients",
        description: "Don't just rank for 'dentist'. Dominate searches for high-margin services like 'dental implants', 'Invisalign', and 'veneers'.",
        icon: "Target"
      },
      {
        title: "Build Practice Authority",
        description: "Become the most trusted dental practice in your area by answering common patient questions and showcasing your expertise.",
        icon: "Shield"
      },
      {
        title: "Fill Your Appointment Book",
        description: "Ensure your practice is the first choice for local patients searching for dental care, keeping your chairs full year-round.",
        icon: "TrendingUp"
      }
    ]
  },
  {
    id: '4',
    title: 'Healthcare SEO',
    slug: 'healthcare-seo',
    entityName: 'Healthcare Providers',
    description: 'Comprehensive SEO strategies for healthcare providers to improve online visibility and patient acquisition.',
    icon: Stethoscope,
    features: [
      'HIPAA-compliant content strategy',
      'Medical service page optimization',
      'Provider profile enhancement',
      'Healthcare schema implementation',
      'Medical content authority building'
    ],
    benefits: [
      'Establish your practice as an authority in your specialty',
      'Increase visibility for symptom and treatment searches',
      'Improve patient education through optimized content',
      'Enhance credibility through structured medical data',
      'Outrank competing healthcare providers'
    ],
    pricing: [
      {
        name: "Clinic Growth",
        price: "$2,497/mo",
        description: "Essential visibility for medical practices.",
        features: [
          "Local SEO for Main Location",
          "Provider Profile Optimization",
          "Medical Content Strategy",
          "Review Management",
          "HIPAA Compliant Reporting"
        ]
      },
      {
        name: "Market Authority",
        price: "$4,997/mo",
        description: "Dominate your medical specialty.",
        features: [
          "Everything in Growth",
          "Advanced Medical Schema",
          "Symptom-Based Content Hubs",
          "High-Authority Backlinks",
          "Video SEO for Providers",
          "Quarterly Strategy Workshops"
        ],
        recommended: true
      },
      {
        name: "Enterprise Health",
        price: "$9,997/mo",
        description: "For hospitals and multi-location groups.",
        features: [
          "Everything in Authority",
          "Multi-Location Management",
          "Custom API Integrations",
          "Crisis Reputation Management",
          "Dedicated SEO Team",
          "24/7 Priority Support"
        ]
      }
    ],
    faqs: [
      {
        question: "What makes healthcare SEO different from regular SEO?",
        answer: "Healthcare SEO requires a higher standard of trust and accuracy, known as E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness). We ensure all content is medically accurate, HIPAA-compliant (where applicable), and builds the credibility of your providers."
      },
      {
        question: "How do we handle patient privacy with SEO?",
        answer: "Our SEO strategies focus on your public-facing website content and technical structure. We never access patient data. Any tracking or analytics we implement is anonymized and compliant with privacy regulations."
      },
      {
        question: "Can you help multi-location medical centers?",
        answer: "Yes, we specialize in multi-location SEO. We create a scalable structure that optimizes each location individually while building the overall authority of your medical brand. This ensures each clinic ranks well in its specific local area."
      }
    ],
    whyNeedSeo: [
      {
        title: "Build Patient Trust (E-E-A-T)",
        description: "In healthcare, trust is everything. We optimize your content to demonstrate Experience, Expertise, Authoritativeness, and Trustworthiness.",
        icon: "Shield"
      },
      {
        title: "Connect with Patients",
        description: "Ensure your medical practice appears when patients are searching for specific treatments, specialists, or clinics in your area.",
        icon: "Users"
      },
      {
        title: "Grow Your Practice",
        description: "Increase new patient inquiries and referrals by establishing a dominant online presence for your medical specialty.",
        icon: "TrendingUp"
      }
    ]
  },
  {
    id: '5',
    title: 'Lawyer SEO',
    slug: 'lawyer-seo',
    entityName: 'Law Firms',
    description: 'Specialized SEO for law firms to increase case inquiries and establish authority in specific practice areas.',
    icon: Scale,
    features: [
      'Practice area page optimization',
      'Local SEO for law firms',
      'Legal content strategy development',
      'Attorney profile enhancement',
      'Case study and result highlighting'
    ],
    benefits: [
      'Attract more qualified case inquiries through search',
      'Build authority in specific legal practice areas',
      'Outrank competing law firms for valuable keywords',
      'Improve conversion rates for consultation requests',
      'Expand your firm\'s digital footprint'
    ],
    pricing: [
      {
        name: "Firm Starter",
        price: "$2,997/mo",
        description: "Establish a strong local presence.",
        features: [
          "Local SEO for Law Firms",
          "Practice Area Page Optimization",
          "Attorney Profile Enhancement",
          "Legal Directory Citations",
          "Monthly Performance Report"
        ]
      },
      {
        name: "Case Growth",
        price: "$5,997/mo",
        description: "Drive high-value case inquiries.",
        features: [
          "Everything in Starter",
          "Content Marketing (4 Articles/mo)",
          "Niche Link Building",
          "Competitor Analysis",
          "Conversion Optimization",
          "Bi-Weekly Strategy Calls"
        ],
        recommended: true
      },
      {
        name: "Market Dominance",
        price: "$11,997/mo",
        description: "Own your practice area in your city.",
        features: [
          "Everything in Growth",
          "Digital PR & News Features",
          "Advanced Technical SEO",
          "Video Content Production",
          "Dedicated Account Director",
          "Exclusive Territory Lock"
        ]
      }
    ],
    faqs: [
      {
        question: "Why is SEO so competitive for law firms?",
        answer: "Legal keywords are among the most expensive and competitive because the value of a single client is high. To win, you need a specialized strategy that combines technical excellence, authoritative content, and high-quality backlinks. Generalist SEO often fails in this niche."
      },
      {
        question: "Can I rank for specific practice areas like 'family law' or 'personal injury'?",
        answer: "Yes, that is our primary focus. We build authoritative 'power pages' for each of your practice areas. This ensures you attract clients who specifically need your expertise, rather than just general legal inquiries."
      },
      {
        question: "How important is my Google Business Profile for my law firm?",
        answer: "Crucial. For many potential clients, your Google Business Profile is their first impression. We optimize it to showcase your reviews, practice areas, and attorneys, making it easy for local clients to choose you over competitors."
      }
    ],
    whyNeedSeo: [
      {
        title: "Sign High-Value Cases",
        description: "Target specific case types like 'personal injury' or 'family law' to attract clients who need your specific legal expertise.",
        icon: "Target"
      },
      {
        title: "Establish Legal Authority",
        description: "Position your firm as the thought leader in your practice areas with authoritative content that answers complex legal questions.",
        icon: "Shield"
      },
      {
        title: "Outrank Competitors",
        description: "Legal SEO is competitive. We help you rise above other firms in your area to capture the lion's share of local search traffic.",
        icon: "TrendingUp"
      }
    ]
  },
  {
    id: '6',
    title: 'Physio SEO',
    slug: 'physio-seo',
    entityName: 'Physiotherapy Clinics',
    description: 'Tailored SEO strategies for physiotherapy clinics to increase patient bookings and local visibility.',
    icon: Activity,
    features: [
      'Local SEO for physiotherapy clinics',
      'Treatment page optimization',
      'Patient success story highlighting',
      'Condition-specific content development',
      'Online booking optimization'
    ],
    benefits: [
      'Increase new patient inquiries through organic search',
      'Rank higher for treatment and condition keywords',
      'Improve visibility in Google Maps results',
      'Build authority with educational physiotherapy content',
      'Convert more visitors into booked appointments'
    ],
    pricing: [
      {
        name: "Clinic Essentials",
        price: "$1,497/mo",
        description: "Get found by patients in pain.",
        features: [
          "Local Map Pack Optimization",
          "Google Business Profile Setup",
          "Service Page Optimization",
          "Review Widget",
          "Monthly Reporting"
        ]
      },
      {
        name: "Patient Flow",
        price: "$2,997/mo",
        description: "Consistent bookings for your clinic.",
        features: [
          "Everything in Essentials",
          "Condition-Specific Content",
          "Local Link Building",
          "Online Booking Optimization",
          "Speed Optimization",
          "Quarterly Strategy Review"
        ],
        recommended: true
      },
      {
        name: "Multi-Location",
        price: "$5,497/mo",
        description: "Scale across multiple clinics.",
        features: [
          "Everything in Patient Flow",
          "Multi-Location Strategy",
          "Advanced Analytics",
          "Video SEO",
          "Competitor Displacement",
          "Priority Support"
        ]
      }
    ],
    faqs: [
      {
        question: "How can SEO help my physiotherapy clinic?",
        answer: "SEO connects you with patients who are actively searching for relief from pain or injury. By ranking for terms like 'physio near me' or 'sports injury clinic', you become the immediate solution to their problem, driving consistent bookings."
      },
      {
        question: "Do you create content about specific conditions?",
        answer: "Yes. We create detailed, medically accurate content about conditions you treat (e.g., 'rotator cuff injury', 'lower back pain'). This builds trust with patients researching their symptoms and positions you as the expert who can help them."
      },
      {
        question: "How do we compete with large physio franchises?",
        answer: "We focus on your local advantage. By deeply optimizing for your specific suburb and community, and highlighting your unique practitioner expertise and patient care, we can often outrank larger, more impersonal national chains in your local area."
      }
    ],
    whyNeedSeo: [
      {
        title: "Fill Your Clinic",
        description: "Ensure your physiotherapy clinic is the top choice for local patients searching for pain relief and rehabilitation services.",
        icon: "Users"
      },
      {
        title: "Target Specific Conditions",
        description: "Rank for condition-specific terms like 'back pain physio' or 'sports injury rehab' to attract patients who need your help now.",
        icon: "Target"
      },
      {
        title: "Build Local Reputation",
        description: "Showcase your expertise and patient success stories to build a strong local reputation that drives referrals and bookings.",
        icon: "Shield"
      }
    ]
  },
  {
    id: '7',
    title: 'Real Estate SEO',
    slug: 'real-estate-seo',
    entityName: 'Real Estate Agencies',
    description: 'Strategic SEO solutions for real estate agencies and agents to generate more leads and property inquiries.',
    icon: Home,
    features: [
      'Local real estate SEO',
      'Property listing optimization',
      'Area guide content development',
      'Agent profile enhancement',
      'Real estate schema implementation'
    ],
    benefits: [
      'Attract more qualified property seekers through search',
      'Improve visibility for location-based property searches',
      'Establish authority in specific neighborhoods and markets',
      'Increase lead generation through optimized content',
      'Outrank competing agents and agencies'
    ],
    pricing: [
      {
        name: "Agent Starter",
        price: "$1,497/mo",
        description: "Personal branding for solo agents.",
        features: [
          "Agent Profile Optimization",
          "Local SEO for Target Suburbs",
          "Review Management",
          "Social Media Integration",
          "Monthly Reporting"
        ]
      },
      {
        name: "Agency Growth",
        price: "$3,497/mo",
        description: "Dominate your local property market.",
        features: [
          "Everything in Starter",
          "Suburb Profile Content",
          "Listing Optimization Strategy",
          "Local Link Building",
          "Video Walkthrough SEO",
          "Lead Tracking Setup"
        ],
        recommended: true
      },
      {
        name: "Market Leader",
        price: "$6,997/mo",
        description: "For top-tier agencies and groups.",
        features: [
          "Everything in Growth",
          "Digital PR Campaigns",
          "Advanced Schema Markup",
          "Competitor Analysis",
          "Dedicated Account Manager",
          "Weekly Strategy Calls"
        ]
      }
    ],
    faqs: [
      {
        question: "Why do real estate agents need SEO?",
        answer: "Most property journeys start online. SEO ensures that when vendors look for an agent to sell their home, or buyers look for properties in your area, your agency appears first. It builds your personal brand and agency authority in your specific farm area."
      },
      {
        question: "Can I rank for specific suburbs?",
        answer: "Yes, 'suburb profiling' is a key part of our strategy. We create detailed guides and landing pages for each suburb you serve. This signals to Google that you are the local expert for that specific area, helping you rank for 'real estate agent [suburb]' searches."
      },
      {
        question: "How does SEO help with lead generation?",
        answer: "SEO drives high-intent traffic. Someone searching for 'sell my house [suburb]' is ready to act. By ranking for these keywords and having a conversion-optimized website, we turn that traffic into appraisal requests and listing presentations."
      }
    ],
    whyNeedSeo: [
      {
        title: "Dominate Your Farm Area",
        description: "Become the digital mayor of your target suburbs. Ensure every seller in your area sees your brand when researching agents.",
        icon: "Map"
      },
      {
        title: "Generate Seller Leads",
        description: "Rank for high-intent keywords like 'sell my house [suburb]' and 'real estate appraisal [suburb]' to capture vendor leads.",
        icon: "Target"
      },
      {
        title: "Build Personal Brand",
        description: "Elevate your profile above other agents. Showcase your sold listings and market knowledge to build trust with potential vendors.",
        icon: "Shield"
      }
    ]
  }
];

export const blogPosts: BlogPostData[] = [
  {
    id: '1',
    title: 'How to Optimize Your Google Business Profile for Local SEO',
    slug: 'optimize-google-business-profile-local-seo',
    excerpt: 'Learn the essential strategies to optimize your Google Business Profile and improve your local search visibility.',
    content: `<p>Your Google Business Profile is one of the most powerful tools for local SEO. It helps you establish your brand, drive traffic, and improve your search engine rankings.</p>
    <p>When optimizing your Google Business Profile, focus on these key areas:</p>
    <ol>
      <li><strong>Complete All Information</strong>: Fill out every possible field with accurate, detailed information.</li>
      <li><strong>Choose the Right Categories</strong>: Select the most relevant primary and secondary categories for your business.</li>
      <li><strong>Add High-Quality Photos</strong>: Upload professional images of your business, products, team, and interior/exterior.</li>
      <li><strong>Maintain Consistent NAP</strong>: Ensure your Name, Address, and Phone number match across all online platforms.</li>
      <li><strong>Collect and Respond to Reviews</strong>: Actively encourage reviews and respond to all of them promptly and professionally.</li>
      <li><strong>Post Regular Updates</strong>: Share news, offers, events, and other updates to keep your profile active.</li>
      <li><strong>Use Google Posts</strong>: Create Google Posts to highlight promotions, events, and new content.</li>
      <li><strong>Answer Q&A</strong>: Monitor and respond to questions in the Q&A section.</li>
      <li><strong>Add Products and Services</strong>: List your key products and services with descriptions and pricing if applicable.</li>
      <li><strong>Use Attributes</strong>: Add relevant business attributes to provide more information about your offerings.</li>
    </ol>
    <p>By optimizing these elements of your Google Business Profile, you'll improve your visibility in local search results and attract more customers to your business.</p>`,
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=1000&auto=format&fit=crop',
    date: '2023-09-15',
    author: 'Sarah Johnson',
    category: 'Local SEO',
    tags: ['Local SEO', 'Google Business Profile', 'GMB', 'Local Search']
  },
  {
    id: '2',
    title: 'Technical SEO Checklist: 10 Critical Elements for Better Rankings',
    slug: 'technical-seo-checklist',
    excerpt: 'Discover the essential technical SEO elements that can significantly improve your website\'s search engine rankings.',
    content: `<p>While content and backlinks often take the spotlight in SEO discussions, technical SEO forms the foundation. It includes elements like site speed, mobile optimization, and schema markup.</p>`,
    image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1000&auto=format&fit=crop',
    date: '2023-10-22',
    author: 'Michael Chen',
    category: 'Technical SEO',
    tags: ['Technical SEO', 'Website Speed', 'Core Web Vitals', 'Mobile Optimization']
  },
  {
    id: '3',
    title: 'Content Strategy for E-commerce: Driving Traffic and Sales Through SEO',
    slug: 'content-strategy-ecommerce-seo',
    excerpt: 'Learn how to create an effective content strategy for your e-commerce site that drives targeted traffic and increases conversions.',
    content: `<p>E-commerce websites face unique content challenges. While product pages are your conversion workhorses, content is equally important. It includes blog posts, product descriptions, and other types of content that help your website rank higher in search results.</p>`,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop',
    date: '2023-11-05',
    author: 'Emma Wilson',
    category: 'Content Strategy',
    tags: ['E-commerce SEO', 'Content Strategy', 'Product Descriptions', 'Conversion Optimization']
  }
];

export const caseStudies: CaseStudyData[] = [
  {
    id: '1',
    title: 'Local SEO Strategy Triples Leads for Sydney Dental Practice',
    slug: 'local-seo-sydney-dental-practice',
    client: 'Smile Bright Dental',
    industry: 'Dental',
    challenge: 'Smile Bright Dental, a multi-location dental practice in Sydney, was struggling to attract new patients despite offering exceptional service. Their website had minimal visibility in local search results.',
    solution: 'We implemented a comprehensive local SEO strategy that included Google Business Profile optimization, local citation building, and location-specific content.',
    results: [
      '312% increase in organic traffic from local searches within 6 months',
      '287% increase in appointment requests through the website',
      'First page rankings for 45+ high-value local keywords'
    ],
    testimonial: 'The SEO campaign exceeded our expectations in every way. We\'re now booked out weeks in advance.',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1000&auto=format&fit=crop',
    serviceType: 'local-seo',
    location: 'sydney',
    stats: [
      { label: 'Organic Traffic', value: '312', suffix: '%' },
      { label: 'New Leads', value: '287', suffix: '%' },
      { label: 'Keywords Ranked', value: '45', suffix: '+' }
    ],
    strategy: [
      {
        title: 'Local Keyword Dominance',
        description: 'We identified high-intent keywords like "emergency dentist Sydney" and "cosmetic dentistry near me" to capture ready-to-book patients.'
      },
      {
        title: 'Google Business Profile Optimization',
        description: 'We completely overhauled their GBP with high-quality photos, Q&A seeding, and a review generation campaign.'
      },
      {
        title: 'Location-Specific Content',
        description: 'We created dedicated pages for each suburb they serve, establishing them as the local authority in each neighborhood.'
      }
    ],
    implementation: [
      {
        title: 'Month 1: Technical Audit & Foundation',
        description: 'Fixed site speed issues, optimized mobile experience, and set up accurate tracking.',
        duration: '4 Weeks'
      },
      {
        title: 'Month 2: Local Content Expansion',
        description: 'Published 10+ suburb-specific service pages and optimized existing core service pages.',
        duration: '4 Weeks'
      },
      {
        title: 'Month 3: Authority Building',
        description: 'Launched local citation campaign and acquired backlinks from local health directories.',
        duration: 'Ongoing'
      }
    ]
  },
  {
    id: '2',
    title: 'E-commerce SEO Drives 215% Revenue Growth for Australian Fashion Retailer',
    slug: 'ecommerce-seo-australian-fashion-retailer',
    client: 'Urban Style Co.',
    industry: 'E-commerce / Fashion',
    challenge: 'Urban Style Co., an online fashion retailer based in Melbourne, was struggling with declining organic traffic and sales despite having high-quality products.',
    solution: 'We developed a comprehensive e-commerce SEO strategy including technical fixes, enhanced product descriptions, and content marketing.',
    results: [
      '215% increase in organic search revenue within 12 months',
      '187% increase in organic traffic from non-branded searches',
      'First page rankings for 200+ high-value commercial keywords'
    ],
    testimonial: 'Working with the SEO team has transformed our business. We\'ve gone from struggling to stay profitable to experiencing month-over-month growth.',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000&auto=format&fit=crop',
    serviceType: 'ecommerce-seo',
    location: 'melbourne'
  },
  {
    id: '3',
    title: 'Content Strategy Establishes Legal Firm as Industry Authority',
    slug: 'content-strategy-legal-firm-authority',
    client: 'Brisbane Legal Partners',
    industry: 'Legal',
    challenge: 'Brisbane Legal Partners, a mid-sized law firm specializing in corporate and family law, wanted to establish themselves as a thought leader in their practice areas.',
    solution: 'We developed a comprehensive content strategy focused on establishing topical authority through in-depth practice area guides and regular blog content.',
    results: [
      '427% increase in organic traffic within 12 months',
      '185% increase in qualified lead generation through the website',
      'First page rankings for 170+ high-value legal keywords'
    ],
    testimonial: 'The content strategy has completely transformed our digital presence. We\'re now seen as the go-to resource for our practice areas.',
    image: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=1000&auto=format&fit=crop',
    serviceType: 'content-strategy',
    location: 'brisbane'
  },
  {
    id: '4',
    title: 'Technical SEO Revamp Boosts Perth Engineering Firm\'s Rankings',
    slug: 'technical-seo-perth-engineering',
    client: 'Precision Engineering Solutions',
    industry: 'Engineering',
    challenge: 'Precision Engineering Solutions had a well-established Perth-based business but their website was plagued with technical issues preventing proper indexing and ranking.',
    solution: 'We performed a comprehensive technical SEO audit and implemented fixes for site structure, mobile usability, page speed, and indexation issues.',
    results: [
      '156% increase in organic traffic within 4 months after technical fixes',
      '78% improvement in page load speed',
      '94% increase in mobile organic traffic',
      'Doubled the number of indexed pages in Google'
    ],
    testimonial: 'The technical improvements made to our website have completely transformed our online presence. We\'re now ranking for keywords we never appeared for previously.',
    image: '/images/case-studies/technical-seo-perth-engineering.png',
    serviceType: 'technical-seo',
    location: 'perth'
  },
  {
    id: '5',
    title: 'Link Building Campaign Elevates Adelaide Financial Advisor',
    slug: 'link-building-adelaide-financial',
    client: 'Secure Wealth Advisors',
    industry: 'Financial Services',
    challenge: 'Secure Wealth Advisors in Adelaide had quality content but lacked the domain authority to rank competitively for valuable financial planning keywords.',
    solution: 'We implemented a strategic link building campaign focusing on quality guest posts, digital PR, and industry partnerships to boost their domain authority.',
    results: [
      '73% increase in domain authority over 9 months',
      '94 high-quality backlinks acquired from relevant financial websites',
      '189% increase in organic search visibility',
      'First page rankings for 35+ competitive financial planning keywords'
    ],
    testimonial: 'The link building strategy has significantly elevated our online authority. We\'re now ranking above competitors who have been in business much longer than us.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop',
    serviceType: 'link-building',
    location: 'adelaide'
  },
  {
    id: '6',
    title: 'Analytics Implementation Optimizes Gold Coast Tourism Website',
    slug: 'analytics-gold-coast-tourism',
    client: 'Gold Coast Adventures',
    industry: 'Tourism',
    challenge: 'Gold Coast Adventures was investing in SEO and content marketing but had no way to accurately track performance or optimize based on user behavior.',
    solution: 'We implemented enhanced analytics tracking, set up conversion goals, created custom dashboards, and established regular reporting processes.',
    results: [
      'Identified underperforming content leading to a 45% improvement after optimization',
      'Discovered mobile conversion issues resulting in 67% higher booking rates after fixes',
      '38% reduction in cost per acquisition through data-driven optimization',
      'Established ROI tracking showing 312% return on SEO investment'
    ],
    testimonial: 'Having proper analytics in place has been eye-opening. We now make decisions based on data rather than gut feeling, and the results speak for themselves.',
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1000&auto=format&fit=crop',
    serviceType: 'analytics-reporting',
    location: 'gold-coast'
  },
  {
    id: '7',
    title: 'Local SEO Campaign Boosts Parramatta Medical Practice',
    slug: 'local-seo-parramatta-medical',
    client: 'Parramatta Health Center',
    industry: 'Healthcare',
    challenge: 'A growing medical practice in Parramatta struggled to attract new patients despite offering specialized services. Their online presence was minimal and they weren\'t visible in local searches.',
    solution: 'We implemented a comprehensive local SEO strategy focusing on Google Business Profile optimization, local content creation, and review management.',
    results: [
      '256% increase in Google Business Profile views within 3 months',
      '189% increase in appointment requests through the website',
      'First page rankings for 28 high-value local medical keywords'
    ],
    testimonial: 'The results exceeded our expectations. We\'re now the go-to medical center in Parramatta for many new patients finding us online.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop',
    serviceType: 'local-seo',
    location: 'parramatta'
  },
  {
    id: '8',
    title: 'Technical SEO Overhaul for St Kilda Restaurant Group',
    slug: 'technical-seo-st-kilda-restaurants',
    client: 'Bayside Dining Group',
    industry: 'Hospitality',
    challenge: 'A popular St Kilda restaurant group with multiple venues was experiencing poor website performance, mobile issues, and declining search visibility.',
    solution: 'We conducted a comprehensive technical SEO audit and implemented fixes for site structure, speed optimization, and mobile usability issues.',
    results: [
      '167% improvement in mobile page speed scores',
      '93% increase in mobile organic traffic within 2 months',
      '45% reduction in bounce rate across all restaurant location pages'
    ],
    testimonial: 'The technical improvements transformed our online presence. Our mobile bookings have increased dramatically since the optimization.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop',
    serviceType: 'technical-seo',
    location: 'st-kilda'
  },
  {
    id: '9',
    title: 'E-commerce SEO Success for Fremantle Artisan Marketplace',
    slug: 'ecommerce-seo-fremantle-artisan',
    client: 'Fremantle Makers',
    industry: 'E-commerce / Retail',
    challenge: 'A Fremantle-based online marketplace for local artisans struggled with poor visibility, low traffic, and conversion issues for their product pages.',
    solution: 'We implemented an e-commerce SEO strategy focusing on product page optimization, enhanced category structure, and local content marketing.',
    results: [
      '312% increase in organic product page traffic within 6 months',
      '187% increase in e-commerce conversion rate',
      '234% growth in organic revenue from local Fremantle searches'
    ],
    testimonial: 'Our artisan marketplace has flourished online since implementing these SEO strategies. Local customers now find us online.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop',
    serviceType: 'ecommerce-seo',
    location: 'fremantle'
  },
  {
    id: '10',
    title: 'Local SEO Dominance for Melbourne Real Estate Agency',
    slug: 'local-seo-melbourne-real-estate',
    client: 'Elite Property Group',
    industry: 'Real Estate',
    challenge: 'Elite Property Group was struggling to stand out in the highly competitive Melbourne real estate market. Despite having a strong local presence, they were invisible in search results for key suburb-specific terms.',
    solution: 'We implemented a hyper-local SEO strategy, creating dedicated suburb profile pages, optimizing their Google Business Profile, and building local citations.',
    results: [
      '245% increase in organic traffic from local suburb searches',
      'Top 3 rankings for "Real Estate Agent [Suburb]" in 12 target suburbs',
      '150% increase in appraisal requests via the website'
    ],
    testimonial: 'The local SEO campaign has been a game-changer. We are now the first agency people see when searching in our target suburbs.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
    serviceType: 'local-seo',
    location: 'melbourne'
  },
  {
    id: '11',
    title: 'Core Web Vitals Optimization for National Logistics Company',
    slug: 'technical-seo-logistics-core-web-vitals',
    client: 'Swift Logistics',
    industry: 'Logistics',
    challenge: 'Swift Logistics was experiencing a significant drop in rankings and user engagement due to poor Core Web Vitals scores, particularly LCP and CLS.',
    solution: 'We conducted a comprehensive technical audit and implemented code splitting, advanced image optimization, and server-side rendering improvements.',
    results: [
      'Achieved 90+ scores on all Core Web Vitals metrics',
      '40% increase in organic traffic within 3 months',
      '25% reduction in bounce rate across key landing pages'
    ],
    testimonial: 'The technical team is world-class. They fixed issues our previous agency didn\'t even know existed.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
    serviceType: 'technical-seo',
    location: 'brisbane'
  },
  {
    id: '12',
    title: 'Migration SEO Strategy for Luxury Beauty Brand',
    slug: 'ecommerce-seo-beauty-migration',
    client: 'Glow & Co.',
    industry: 'Beauty & Cosmetics',
    challenge: 'Glow & Co. needed to replatform from Magento to Shopify Plus but was terrified of losing their hard-earned organic rankings and traffic during the move.',
    solution: 'We executed a meticulous migration strategy including comprehensive 301 redirect mapping, schema implementation, and immediate post-launch technical auditing.',
    results: [
      'Zero traffic loss during the migration period',
      '150% increase in organic revenue within 3 months post-launch',
      'Successfully indexed 5,000+ new product URLs within 48 hours'
    ],
    testimonial: 'We were so nervous about the migration, but the team made it seamless. Our traffic actually went up!',
    image: '/images/case-studies/ecommerce-seo-beauty-migration.png',
    serviceType: 'ecommerce-seo',
    location: 'sydney'
  },
  {
    id: '13',
    title: 'SaaS Blog Strategy Drives 500% Traffic Growth',
    slug: 'content-strategy-saas-blog-growth',
    client: 'TechFlow Solutions',
    industry: 'SaaS',
    challenge: 'TechFlow Solutions had a great product but their blog was a ghost town. They were publishing sporadic company news that no one was searching for.',
    solution: 'We pivoted their strategy to focus on high-intent "problem-aware" topics, created a content calendar, and produced comprehensive guides.',
    results: [
      '500% increase in organic blog traffic within 12 months',
      'Generated 150+ qualified demo requests directly from blog posts',
      'Established topical authority for "enterprise workflow automation"'
    ],
    testimonial: 'Our blog is now our biggest lead generator. The strategy was spot on and the execution was flawless.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    serviceType: 'content-strategy',
    location: 'sydney'
  },
  {
    id: '14',
    title: 'Medical Content Strategy for Specialist Clinic',
    slug: 'content-strategy-medical-specialist',
    client: 'Sydney Heart Centre',
    industry: 'Healthcare',
    challenge: 'Sydney Heart Centre needed to educate patients about complex procedures while adhering to strict medical advertising guidelines.',
    solution: 'We developed a medically accurate, patient-friendly content hub covering symptoms, treatments, and recovery, all reviewed by their specialists.',
    results: [
      'Ranked #1 for 25+ condition-specific keywords in Sydney',
      'Reduced patient anxiety reported during consultations',
      'Doubled the time-on-site for service pages'
    ],
    testimonial: 'The content team navigated the medical regulations perfectly. We are proud to share these resources with our patients.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop',
    serviceType: 'content-strategy',
    location: 'sydney'
  },
  {
    id: '15',
    title: 'Digital PR Campaign for Fashion Retailer',
    slug: 'link-building-fashion-digital-pr',
    client: 'Moda Australia',
    industry: 'Fashion',
    challenge: 'Moda Australia was struggling to compete with established giants. They needed high-authority backlinks to boost their domain rating.',
    solution: 'We launched a Digital PR campaign featuring a "State of Aussie Fashion" report that was picked up by major news outlets and fashion blogs.',
    results: [
      'Earned backlinks from 12 major news publications (DR 70+)',
      'Increased Domain Rating (DR) from 15 to 42 in 6 months',
      'Organic traffic to the homepage increased by 200%'
    ],
    testimonial: 'Getting featured in major newspapers was a dream come true. The impact on our SEO has been massive.',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop',
    serviceType: 'link-building',
    location: 'melbourne'
  },
  {
    id: '16',
    title: 'Link Acquisition for Boutique Law Firm',
    slug: 'link-building-boutique-law-firm',
    client: 'Perth Family Law',
    industry: 'Legal',
    challenge: 'Perth Family Law had excellent content but was being outranked by firms with stronger backlink profiles.',
    solution: 'We executed a niche-specific guest posting campaign, securing placements on reputable legal and family advice websites.',
    results: [
      'Acquired 45 relevant backlinks from legal industry sites',
      'Moved from page 3 to page 1 for "Family Lawyer Perth"',
      'Referral traffic from guest posts generated 10 direct leads'
    ],
    testimonial: 'We finally have the authority to match our expertise. The quality of the links built is impressive.',
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1000&auto=format&fit=crop',
    serviceType: 'link-building',
    location: 'perth'
  },
  {
    id: '17',
    title: 'Enhanced E-commerce Tracking for Retail Chain',
    slug: 'analytics-retail-chain-tracking',
    client: 'OzRetail Group',
    industry: 'Retail',
    challenge: 'OzRetail Group had no visibility into which products were being viewed but not purchased, and their attribution data was a mess.',
    solution: 'We implemented Enhanced E-commerce tracking in GA4, set up custom funnels, and fixed their cross-domain tracking issues.',
    results: [
      'Recovered 15% of lost revenue through data-driven cart abandonment emails',
      'Identified and fixed a checkout bug costing $50k/month',
      'Achieved 99% data accuracy between GA4 and backend sales'
    ],
    testimonial: 'We were flying blind before. Now we can see exactly where we are losing money and fix it.',
    image: '/images/case-studies/analytics-retail-chain-tracking.png',
    serviceType: 'analytics-reporting',
    location: 'brisbane'
  },
  {
    id: '18',
    title: 'Custom Attribution Dashboard for B2B Service',
    slug: 'analytics-b2b-attribution-dashboard',
    client: 'Corporate Cleaners',
    industry: 'B2B Services',
    challenge: 'Corporate Cleaners struggled to understand which marketing channels were driving their high-value contracts.',
    solution: 'We built a custom Looker Studio dashboard blending CRM data with Google Ads and Analytics to show true ROI.',
    results: [
      'Cut wasted ad spend by 30% by identifying low-quality channels',
      'Proved SEO was driving the highest lifetime value clients',
      'Saved the marketing team 10 hours/week on manual reporting'
    ],
    testimonial: 'This dashboard is the first thing I look at every Monday morning. It gives us total clarity.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop',
    serviceType: 'analytics-reporting',
    location: 'sydney'
  }
];

// Dynamic Case Study Templates
export const caseStudyTemplates: CaseStudyData[] = [
  {
    id: 'template-1',
    title: 'Tripling New Patients for {City} Dental Clinic',
    slug: 'dental-seo',
    client: '{City} Family Dental',
    industry: 'Dental',
    challenge: 'A well-established dental clinic in {City} was facing stiff competition and struggling to attract new patients from online searches. They needed a way to stand out in the crowded {City} market.',
    solution: 'We implemented a hyper-local SEO strategy targeting {City} suburbs, optimized their Google Business Profile for "Dentist {City}", and created educational content around common dental procedures.',
    results: [
      '300% increase in new patient inquiries from {City} residents',
      'Ranked #1 for "Dentist {City}" and related terms',
      'Generated 50+ new 5-star reviews from happy patients'
    ],
    testimonial: 'We have never been this busy! The SEO team really understood the {City} market and helped us become the top choice for local families.',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1000&auto=format&fit=crop',
    serviceType: 'local-seo'
  },
  {
    id: 'template-2',
    title: 'Dominating the {City} Property Market',
    slug: 'real-estate-seo',
    client: 'Elite {City} Real Estate',
    industry: 'Real Estate',
    challenge: 'A boutique real estate agency in {City} wanted to capture more high-value listings but was being overshadowed by major national franchises in search results.',
    solution: 'We focused on "hyper-local" content, creating detailed suburb guides for {City} and optimizing property listings to capture long-tail search traffic.',
    results: [
      '250% increase in appraisal requests from {City} homeowners',
      'Outranked major portals for "{City} real estate agents"',
      'Record-breaking sales month attributed to organic leads'
    ],
    testimonial: 'The quality of leads we get from our website now is incredible. We are connecting with genuine sellers in {City} who found us through Google.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
    serviceType: 'local-seo'
  },
  {
    id: 'template-3',
    title: 'From Invisible to #1 Plumber in {City}',
    slug: 'trades-seo',
    client: '{City} Premier Plumbing',
    industry: 'Trades & Services',
    challenge: 'A reliable local plumber in {City} had a great reputation offline but zero presence online, relying entirely on word-of-mouth which was becoming inconsistent.',
    solution: 'We built a conversion-focused website and launched a local SEO campaign targeting emergency plumbing keywords in {City} and surrounding areas.',
    results: [
      'Went from 0 to 150+ organic visits per month',
      'Consistently ranking in the top 3 for "Emergency Plumber {City}"',
      'Phone rings daily with new jobs from Google Maps'
    ],
    testimonial: 'I used to worry about where my next job was coming from. Now I have to hire more staff to keep up with the work coming in from Google!',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a782?q=80&w=1000&auto=format&fit=crop',
    serviceType: 'local-seo'
  }
];
