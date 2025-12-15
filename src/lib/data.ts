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
  Star
} from 'lucide-react';

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
  icon: React.ElementType;
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
          title: "What is Local SEO?",
          content: "Local SEO is a search engine optimization (SEO) strategy that helps your business be more visible in local search results on Google. Any business that has a physical location or serves a geographic area can benefit from local SEO. If you search Google for any important keywords related to your business and a map with 3 listings appears underneath it (known as a Map Pack), then local SEO can help you grow your business."
        },
        {
          title: "Why Local SEO is Critical for Your Business",
          content: "46% of all Google searches are looking for local information. If your business isn't optimized for local search, you could be missing out on potential customers who are ready to shop in your area. In short, local SEO is critical if you want your business to stay relevant."
        },
        {
          title: "Our Proven Ranking Factors",
          content: "We focus on the three core pillars of local ranking: Proximity (how close is the business to the searcher?), Relevance (how relevant to the search query are the products and services?), and Prominence (what do other consumers say about your products and services?)."
        }
      ]
    },
    process: [
      {
        title: "Audit & Strategy",
        description: "We perform a deep-dive audit of your current local presence, identifying NAP inconsistencies, GMB errors, and competitor gaps.",
        icon: Search
      },
      {
        title: "Foundation & Optimization",
        description: "We optimize your Google Business Profile, fix citations, and implement local schema markup on your website.",
        icon: Settings
      },
      {
        title: "Authority Building",
        description: "We build high-quality local citations and earn backlinks from reputable local directories and niche-relevant sites.",
        icon: LinkIcon
      },
      {
        title: "Review & Reputation",
        description: "We implement a system to generate consistent 5-star reviews and manage your online reputation to build trust.",
        icon: Star
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
    content: `<p>While content and backlinks often take the spotlight in SEO discussions, technical SEO forms the foundation. It includes elements like site speed, mobile optimization, and schema markup.</p>`
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
    content: `<p>E-commerce websites face unique content challenges. While product pages are your conversion workhorses, content is equally important. It includes blog posts, product descriptions, and other types of content that help your website rank higher in search results.</p>`
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
    content: `<p>Backlinks are one of the most important factors in SEO. They help establish your website's authority and improve your search engine rankings. We can help you acquire high-quality backlinks through various methods like guest posting, content marketing, and digital PR.</p>`
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
    content: `<p>E-commerce websites face unique content challenges. While product pages are your conversion workhorses, content is equally important. It includes blog posts, product descriptions, and other types of content that help your website rank higher in search results.</p>`
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
    content: `<p>Transparent reporting with actionable insights to track and improve your SEO performance. It includes monthly performance reports, conversion tracking setup, traffic analysis, and ROI measurement.</p>`
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
    ]
  },
  {
    id: '2',
    title: 'Chiropractor SEO',
    slug: 'chiropractor-seo',
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
    ]
  },
  {
    id: '3',
    title: 'Dental SEO',
    slug: 'dental-seo',
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
    ]
  },
  {
    id: '4',
    title: 'Healthcare SEO',
    slug: 'healthcare-seo',
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
    ]
  },
  {
    id: '5',
    title: 'Lawyer SEO',
    slug: 'lawyer-seo',
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
    ]
  },
  {
    id: '6',
    title: 'Physio SEO',
    slug: 'physio-seo',
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
    ]
  },
  {
    id: '7',
    title: 'Real Estate SEO',
    slug: 'real-estate-seo',
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
    location: 'sydney'
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
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a37ff4e?q=80&w=1000&auto=format&fit=crop',
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
    testimonial: 'Our artisan marketplace has flourished online since implementing these SEO strategies. Local customers now find us easily online.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop',
    serviceType: 'ecommerce-seo',
    location: 'fremantle'
  }
];
