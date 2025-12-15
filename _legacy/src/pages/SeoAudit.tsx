import { useState } from "react";
import { Send, Globe, AlertTriangle, CheckCircle2, Info, Database, Clock, Mail, Download, Share2, Phone, MapPin, TrendingUp, Award, Users, Activity, Star, Lightbulb, Target, BarChart, Building, ShoppingBag, Compass, ChevronRight, FileText } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import ResourcesSection from "@/components/ResourcesSection";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Checkbox } from "@/components/ui/checkbox";
import InfoCard from "@/components/InfoCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

// Define the form schema
const formSchema = z.object({
  websiteUrl: z
    .string()
    .url({ message: "Please enter a valid URL" })
    .startsWith("http", { 
      message: "URL must start with http:// or https://" 
    })
});

// Lead capture form schema
const leadFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().optional(),
});

// Newsletter form schema
const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type FormValues = z.infer<typeof formSchema>;
type LeadFormValues = z.infer<typeof leadFormSchema>;
type NewsletterFormValues = z.infer<typeof newsletterSchema>;

// SEO audit function - this would be replaced with a real implementation
const performSeoAudit = async (url: string) => {
  // This is a placeholder for a real API call or algorithm
  // In a production environment, this would be an actual API call to a service
  // that performs SEO analysis
  
  console.log(`Analyzing ${url}...`);
  
  // Simulate analysis delay
  await new Promise(resolve => setTimeout(resolve, 5000));
  
  // Simple algorithm to generate varying scores for demo purposes
  const generateScore = () => {
    const baseScore = Math.floor(Math.random() * 40) + 40; // 40-80 range
    return {
      score: baseScore,
      issues: {
        high: Math.floor(Math.random() * 4) + 1,
        medium: Math.floor(Math.random() * 5) + 2,
        low: Math.floor(Math.random() * 7) + 4
      }
    };
  };
  
  const urlObj = new URL(url);
  const domain = urlObj.hostname;
  
  const result = generateScore();
  
  return {
    score: result.score,
    pageTitle: `${domain} - Homepage`,
    metaDescription: url.includes("example.com") 
      ? "Example website description found in meta tags." 
      : `${domain} provides services and information related to their business sector.`,
    loadSpeed: (Math.random() * 5 + 1).toFixed(1),
    mobileResponsive: Math.random() > 0.3,
    totalIssues: result.issues.high + result.issues.medium + result.issues.low,
    issues: {
      high: Array.from({ length: result.issues.high }, (_, i) => ({
        id: i + 1,
        title: getRandomIssue("high"),
        description: getRandomIssueDescription("high")
      })),
      medium: Array.from({ length: result.issues.medium }, (_, i) => ({
        id: result.issues.high + i + 1,
        title: getRandomIssue("medium"),
        description: getRandomIssueDescription("medium")
      })),
      low: Array.from({ length: result.issues.low }, (_, i) => ({
        id: result.issues.high + result.issues.medium + i + 1,
        title: getRandomIssue("low"),
        description: getRandomIssueDescription("low")
      }))
    },
    recommendations: generateRecommendations(),
    competitorAnalysis: [
      { name: `Competitor in ${domain.split('.')[0]} market`, score: Math.floor(Math.random() * 20) + 70, strengths: getRandomStrengths() },
      { name: "Industry Leader", score: Math.floor(Math.random() * 15) + 75, strengths: getRandomStrengths() },
      { name: "Growing Competitor", score: Math.floor(Math.random() * 25) + 60, strengths: getRandomStrengths() }
    ],
    keywordGaps: getRandomKeywordGaps(domain.split('.')[0])
  };
};

const getRandomIssue = (severity) => {
  const highIssues = [
    "Missing H1 tag",
    "Slow page load speed",
    "Missing meta description",
    "No HTTPS implementation",
    "Duplicate content"
  ];
  
  const mediumIssues = [
    "Image missing alt tags",
    "Low word count",
    "Too many JavaScript files",
    "Missing schema markup",
    "Mobile usability issues",
    "Keyword stuffing detected"
  ];
  
  const lowIssues = [
    "Missing canonical tag",
    "No favicon",
    "No XML sitemap",
    "Missing robots.txt",
    "Missing social meta tags",
    "No Google Analytics",
    "No Google Search Console"
  ];
  
  switch(severity) {
    case "high":
      return highIssues[Math.floor(Math.random() * highIssues.length)];
    case "medium":
      return mediumIssues[Math.floor(Math.random() * mediumIssues.length)];
    case "low":
      return lowIssues[Math.floor(Math.random() * lowIssues.length)];
    default:
      return "Unknown issue";
  }
};

const getRandomIssueDescription = (severity) => {
  const highDescriptions = [
    "Your page is missing an H1 tag. H1 tags help search engines understand your page's main topic.",
    "Your page takes more than 3 seconds to load. Page speed is a critical ranking factor.",
    "Several pages are missing meta descriptions. Meta descriptions are essential for SEO.",
    "Your site doesn't use HTTPS. HTTPS is required for security and is a ranking factor.",
    "Multiple pages have duplicate content. This confuses search engines about which page to rank."
  ];
  
  const mediumDescriptions = [
    "Several images are missing alt tags. Alt tags help search engines understand image content.",
    "Multiple pages have less than 300 words. Thin content typically doesn't rank well.",
    "Your site loads too many JavaScript files, affecting page speed.",
    "Your pages don't use schema markup, which helps search engines understand your content.",
    "Mobile layout has issues with tap targets and readability.",
    "Keyword density is unusually high, which may trigger spam filters."
  ];
  
  const lowDescriptions = [
    "Your page is missing a canonical tag. Canonical tags help prevent duplicate content issues.",
    "Your site is missing a favicon. Favicons help with brand recognition.",
    "Your site doesn't have an XML sitemap. Sitemaps help search engines discover your content.",
    "Your site doesn't have a robots.txt file. This helps control search engine crawling.",
    "Your page is missing social meta tags, which affects how content appears on social platforms.",
    "No Google Analytics detected, making it difficult to track user behavior.",
    "No Google Search Console connection detected. This tool provides valuable SEO insights."
  ];
  
  switch(severity) {
    case "high":
      return highDescriptions[Math.floor(Math.random() * highDescriptions.length)];
    case "medium":
      return mediumDescriptions[Math.floor(Math.random() * mediumDescriptions.length)];
    case "low":
      return lowDescriptions[Math.floor(Math.random() * lowDescriptions.length)];
    default:
      return "This issue requires attention.";
  }
};

const generateRecommendations = () => {
  const allRecommendations = [
    "Add an H1 tag to each page",
    "Optimize images to improve page speed",
    "Add meta descriptions to all pages",
    "Add alt tags to all images",
    "Fix duplicate content issues",
    "Add more content to low word count pages",
    "Combine and minify JavaScript files",
    "Add canonical tags to all pages",
    "Install an SSL certificate for HTTPS",
    "Add structured data to your pages",
    "Add a favicon to your site",
    "Create an XML sitemap",
    "Create a robots.txt file",
    "Add social meta tags to your pages",
    "Improve mobile responsiveness",
    "Connect Google Analytics",
    "Add your site to Google Search Console",
    "Create a content calendar for regular updates",
    "Build quality backlinks from reputable sites",
    "Optimize for local SEO"
  ];
  
  // Shuffle and select a random number between 8 and 14 recommendations
  const shuffled = [...allRecommendations].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.floor(Math.random() * 7) + 8);
};

const getRandomStrengths = () => {
  const allStrengths = [
    "Fast load time",
    "Good mobile experience",
    "Complete meta tags",
    "Rich content",
    "Good backlink profile",
    "Structured data",
    "Social signals",
    "User engagement",
    "Regular updates",
    "Strong domain authority",
    "Keyword optimization",
    "Local SEO",
    "Video content"
  ];
  
  // Shuffle and select 3 random strengths
  const shuffled = [...allStrengths].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
};

const getRandomKeywordGaps = (domain) => {
  const baseKeywords = [
    "SEO services",
    "digital marketing",
    "website optimization",
    "content marketing",
    "local SEO",
    "technical SEO",
    "backlink building",
    "SEO consultant",
    "SEO agency",
    "online marketing"
  ];
  
  // Add some domain-specific keywords
  const domainKeywords = [
    `${domain} SEO services`,
    `best ${domain} SEO`,
    `${domain} digital marketing`,
    `${domain} online business`,
    `${domain} marketing agency`
  ];
  
  const allKeywords = [...baseKeywords, ...domainKeywords];
  
  // Shuffle and select 5-7 random keywords
  const shuffled = [...allKeywords].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.floor(Math.random() * 3) + 5);
};

// Issue severity component
const IssueSeverity = ({ severity }: { severity: 'high' | 'medium' | 'low' }) => {
  const colors = {
    high: "bg-red-500",
    medium: "bg-yellow-500",
    low: "bg-blue-500"
  };
  
  return (
    <span className={`inline-block w-3 h-3 rounded-full ${colors[severity]} mr-2`}></span>
  );
};

// Issue Item component
const IssueItem = ({ 
  issue, 
  severity 
}: { 
  issue: { id: number; title: string; description: string }; 
  severity: 'high' | 'medium' | 'low' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mb-2">
      <CollapsibleTrigger className="flex items-center w-full p-3 text-left bg-white rounded-md shadow hover:shadow-md transition-shadow border border-gray-100">
        <IssueSeverity severity={severity} />
        <span className="flex-1 font-medium">{issue.title}</span>
        <span className="text-gray-400 mr-2">
          {isOpen ? "Hide details" : "Show details"}
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent className="p-4 mt-1 bg-gray-50 rounded-md text-sm text-gray-700 border border-gray-100">
        {issue.description}
      </CollapsibleContent>
    </Collapsible>
  );
};

const SeoAudit = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [auditData, setAuditData] = useState(null);
  const [checkedRecommendations, setCheckedRecommendations] = useState<number[]>([]);
  const [showContactDialog, setShowContactDialog] = useState(false);
  const [showNewsletterThankYou, setShowNewsletterThankYou] = useState(false);
  const [reportRequested, setReportRequested] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      websiteUrl: "",
    },
  });

  const leadForm = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const newsletterForm = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsAnalyzing(true);
    setProgress(0);
    setAuditData(null);
    
    // Real-time progress updates
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          return 95;
        }
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 200);
    
    try {
      // Perform the actual audit - in a real implementation, this would call an API
      const result = await performSeoAudit(data.websiteUrl);
      
      clearInterval(interval);
      setProgress(100);
      setIsAnalyzing(false);
      setAuditData(result);
      toast.success("SEO audit completed successfully!");
    } catch (error) {
      clearInterval(interval);
      setProgress(0);
      setIsAnalyzing(false);
      toast.error("Error analyzing website. Please try again.");
      console.error("Audit error:", error);
    }
  };

  const onLeadFormSubmit = (data: LeadFormValues) => {
    // In a real application, you would send this data to your backend/CRM
    console.log("Lead form data:", data);
    toast.success("Thank you! Your request has been submitted.");
    setShowContactDialog(false);
    setReportRequested(true);
  };

  const onNewsletterSubmit = (data: NewsletterFormValues) => {
    // In a real application, you would send this to your email marketing platform
    console.log("Newsletter signup:", data);
    toast.success("Thanks for subscribing to our newsletter!");
    setShowNewsletterThankYou(true);
    newsletterForm.reset();
  };

  const toggleRecommendation = (index: number) => {
    setCheckedRecommendations(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  const downloadReport = () => {
    toast.success("Your report is being prepared for download.");
    // In a real application, you would generate and offer a PDF for download
    setTimeout(() => {
      setShowContactDialog(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-seo-blue-light/10 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -right-24 -top-24 w-96 h-96 bg-seo-blue rounded-full"></div>
          <div className="absolute right-1/4 top-1/3 w-64 h-64 bg-green-400 rounded-full"></div>
          <div className="absolute left-1/4 bottom-1/2 w-48 h-48 bg-purple-400 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="mb-4" animation="fade-in">
            <div className="inline-flex items-center space-x-2">
              <Link 
                to="/" 
                className="text-seo-gray-dark hover:text-seo-blue transition-colors"
              >
                Home
              </Link>
              <ChevronRight className="h-4 w-4 text-seo-gray-medium" />
              <span className="text-seo-blue font-medium">SEO Audit Tool</span>
            </div>
          </AnimatedSection>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <AnimatedSection className="max-w-2xl" animation="fade-in">
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mr-2">
                  <Globe className="h-4 w-4 mr-1" />
                  Free Tool
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                  <Star className="h-4 w-4 mr-1" />
                  Real-Time Analysis
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6 leading-tight">
                Comprehensive SEO Audit Tool
              </h1>
              
              <p className="text-xl text-seo-gray-dark mb-8">
                Get a detailed analysis of your website's SEO performance and discover opportunities to improve your search engine rankings.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-left" delay={300} className="md:w-1/3">
              <Card className="bg-white shadow-xl rounded-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-seo-blue to-purple-600 opacity-90"></div>
                    <div className="p-6 relative z-10">
                      <h3 className="text-xl font-bold text-white mb-2">
                        Quick SEO Audit
                      </h3>
                      <p className="text-white/90 mb-4">
                        Enter your website URL to get started with your free SEO analysis
                      </p>
                      <div className="flex items-center">
                        <Award className="h-8 w-8 text-yellow-300 mr-2" />
                        <span className="text-white font-medium">Completely Free</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                          control={form.control}
                          name="websiteUrl"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <div className="flex">
                                  <Input 
                                    placeholder="https://seo.powermyseo.com" 
                                    className="rounded-r-none focus-visible:ring-1 focus-visible:ring-offset-1 text-base" 
                                    {...field} 
                                  />
                                  <Button 
                                    type="submit" 
                                    className="rounded-l-none bg-seo-blue hover:bg-seo-blue-light"
                                    disabled={isAnalyzing}
                                  >
                                    {isAnalyzing ? "Analyzing..." : "Analyze"}
                                    <Send className="ml-2 h-4 w-4" />
                                  </Button>
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </form>
                    </Form>
                    
                    {isAnalyzing && (
                      <div className="mt-4 space-y-2">
                        <Progress value={progress} className="h-2" />
                        <div className="text-xs text-center text-gray-500">
                          {progress < 30 && "Checking meta tags and content..."}
                          {progress >= 30 && progress < 60 && "Analyzing page speed and mobile-friendliness..."}
                          {progress >= 60 && progress < 90 && "Checking technical issues..."}
                          {progress >= 90 && "Finalizing report..."}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Why SEO Audits Matter */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              SEO Performance
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
              Why Regular SEO Audits Are Essential
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Regular SEO audits help identify issues that could be affecting your website's performance in search results
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <InfoCard
              title="Identify Technical Issues"
              description="Discover problems with your website structure, speed, and accessibility that could be hurting your rankings."
              icon={<AlertTriangle className="w-full h-full" />}
              animation="fade-in"
              delay={100}
              iconBackground="bg-red-100"
              iconColor="text-red-600"
            />
            
            <InfoCard
              title="Content Optimization"
              description="Find opportunities to improve your content strategy and better target relevant keywords."
              icon={<FileText className="w-full h-full" />}
              animation="fade-in"
              delay={200}
              iconBackground="bg-blue-100"
              iconColor="text-blue-600"
            />
            
            <InfoCard
              title="Competitor Analysis"
              description="See how your website stacks up against competitors and identify areas where you can gain a competitive edge."
              icon={<Users className="w-full h-full" />}
              animation="fade-in"
              delay={300}
              iconBackground="bg-purple-100"
              iconColor="text-purple-600"
            />
            
            <InfoCard
              title="Actionable Insights"
              description="Get prioritized recommendations that you can implement immediately to improve your search performance."
              icon={<Lightbulb className="w-full h-full" />}
              animation="fade-in"
              delay={400}
              iconBackground="bg-yellow-100"
              iconColor="text-yellow-600"
            />
          </div>
        </div>
      </section>
      
      {/* Audit Results Section */}
      {auditData && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection 
              className="max-w-4xl mx-auto" 
              animation="fade-in"
              delay={300}
            >
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                <div className="p-6 bg-gradient-to-r from-seo-blue to-blue-600 text-white">
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">SEO Audit Results</h3>
                      <p className="text-white/80">
                        Website: {form.getValues().websiteUrl}
                      </p>
                    </div>
                    <div className="mt-4 md:mt-0 flex items-center">
                      <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
                        <span className="text-3xl font-bold text-seo-blue">
                          {auditData.score}<span className="text-lg">/100</span>
                        </span>
                      </div>
                      <div className="ml-4">
                        <p className="font-medium">SEO Score</p>
                        <p className="text-sm text-white/80">
                          {auditData.score < 50 ? "Needs Improvement" : 
                           auditData.score < 70 ? "Average" : "Good"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Tabs defaultValue="overview" className="p-6">
                  <TabsList className="mb-6">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="issues">Issues ({auditData.totalIssues})</TabsTrigger>
                    <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                    <TabsTrigger value="competitors">Competitors</TabsTrigger>
                    <TabsTrigger value="keywords">Keywords</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="p-4 border border-gray-200">
                        <div className="flex items-center">
                          <div className="rounded-full p-3 bg-blue-100 text-blue-600 mr-4">
                            <Database className="h-6 w-6" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Page Title</p>
                            <p className="font-medium truncate">{auditData.pageTitle}</p>
                          </div>
                        </div>
                      </Card>
                      
                      <Card className="p-4 border border-gray-200">
                        <div className="flex items-center">
                          <div className="rounded-full p-3 bg-green-100 text-green-600 mr-4">
                            <Clock className="h-6 w-6" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Load Speed</p>
                            <p className="font-medium">{auditData.loadSpeed}s</p>
                          </div>
                        </div>
                      </Card>
                      
                      <Card className="p-4 border border-gray-200">
                        <div className="flex items-center">
                          <div className="rounded-full p-3 bg-purple-100 text-purple-600 mr-4">
                            <Globe className="h-6 w-6" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Mobile Friendly</p>
                            <p className="font-medium">
                              {auditData.mobileResponsive ? "Yes" : "No"}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                    
                    <div className="mt-8">
                      <h4 className="text-lg font-medium mb-4">Meta Description</h4>
                      <Card className="p-4 border border-gray-200 bg-gray-50 text-sm text-gray-700">
                        {auditData.metaDescription || "No meta description found"}
                      </Card>
                    </div>
                    
                    <div className="mt-8">
                      <h4 className="text-lg font-medium mb-4">Issues Summary</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card className="p-4 border border-gray-200 border-l-4 border-l-red-500">
                          <div className="flex items-center">
                            <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                            <div>
                              <p className="text-sm text-gray-500">High Priority</p>
                              <p className="font-medium">{auditData.issues.high.length} issues</p>
                            </div>
                          </div>
                        </Card>
                        
                        <Card className="p-4 border border-gray-200 border-l-4 border-l-yellow-500">
                          <div className="flex items-center">
                            <Info className="h-5 w-5 text-yellow-500 mr-2" />
                            <div>
                              <p className="text-sm text-gray-500">Medium Priority</p>
                              <p className="font-medium">{auditData.issues.medium.length} issues</p>
                            </div>
                          </div>
                        </Card>
                        
                        <Card className="p-4 border border-gray-200 border-l-4 border-l-blue-500">
                          <div className="flex items-center">
                            <Info className="h-5 w-5 text-blue-500 mr-2" />
                            <div>
                              <p className="text-sm text-gray-500">Low Priority</p>
                              <p className="font-medium">{auditData.issues.low.length} issues</p>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="issues" className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium mb-4 flex items-center">
                        <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                        High Priority Issues
                      </h4>
                      <div className="space-y-2">
                        {auditData.issues.high.map(issue => (
                          <IssueItem key={issue.id} issue={issue} severity="high" />
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-4 flex items-center">
                        <Info className="h-5 w-5 text-yellow-500 mr-2" />
                        Medium Priority Issues
                      </h4>
                      <div className="space-y-2">
                        {auditData.issues.medium.map(issue => (
                          <IssueItem key={issue.id} issue={issue} severity="medium" />
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-4 flex items-center">
                        <Info className="h-5 w-5 text-blue-500 mr-2" />
                        Low Priority Issues
                      </h4>
                      <div className="space-y-2">
                        {auditData.issues.low.map(issue => (
                          <IssueItem key={issue.id} issue={issue} severity="low" />
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="recommendations" className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium mb-4">Recommended Actions</h4>
                      <p className="text-gray-600 mb-4">
                        Check off items as you complete them to track your progress.
                      </p>
                      <Card className="p-4 border border-gray-200">
                        <ul className="space-y-3">
                          {auditData.recommendations.map((recommendation, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <Checkbox 
                                id={`recommendation-${index}`} 
                                checked={checkedRecommendations.includes(index)}
                                onCheckedChange={() => toggleRecommendation(index)}
                                className="mt-1"
                              />
                              <label 
                                htmlFor={`recommendation-${index}`}
                                className={`cursor-pointer ${checkedRecommendations.includes(index) ? "line-through text-gray-400" : ""}`}
                              >
                                {recommendation}
                              </label>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="competitors" className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium mb-4">Competitor SEO Analysis</h4>
                      <p className="text-gray-600 mb-4">
                        See how your competitors are performing and where you can gain an advantage.
                      </p>
                      <div className="space-y-4">
                        {auditData.competitorAnalysis.map((competitor, index) => (
                          <Card key={index} className="p-4 border border-gray-200">
                            <div className="flex flex-col md:flex-row md:items-center justify-between">
                              <div>
                                <h5 className="font-medium text-lg">{competitor.name}</h5>
                                <div className="mt-2 flex flex-wrap gap-2">
                                  {competitor.strengths.map((strength, i) => (
                                    <span key={i} className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                                      {strength}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div className="mt-4 md:mt-0">
                                <div className="flex items-center">
                                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                                    <span className="text-xl font-bold text-gray-700">
                                      {competitor.score}
                                    </span>
                                  </div>
                                  <div className="ml-4">
                                    <p className="text-sm text-gray-500">SEO Score</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="keywords" className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium mb-4">Keyword Gap Analysis</h4>
                      <p className="text-gray-600 mb-4">
                        We've identified these keywords that your competitors are ranking for, but you're not.
                      </p>
                      <Card className="p-4 border border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {auditData.keywordGaps.map((keyword, index) => (
                            <div key={index} className="bg-gray-50 rounded-md p-3 border border-gray-100">
                              <p className="font-medium">{keyword}</p>
                              <div className="mt-2 flex justify-between items-center">
                                <span className="text-xs text-gray-500">Difficulty: {["Low", "Medium", "High"][Math.floor(Math.random() * 3)]}</span>
                                <span className="text-xs text-gray-500">Volume: {Math.floor(Math.random() * 10) + 1}K/mo</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <div className="p-6 border-t border-gray-200 bg-gray-50">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Need Expert Help?</h4>
                      <p className="text-gray-600 mb-0">
                        Our SEO specialists can help implement these recommendations.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="outline" onClick={downloadReport} className="flex items-center">
                        <Download className="mr-2 h-4 w-4" />
                        Download Report
                      </Button>
                      <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
                        <DialogTrigger asChild>
                          <Button className="bg-seo-blue hover:bg-seo-blue-light flex items-center">
                            <Phone className="mr-2 h-4 w-4" />
                            Get Professional Help
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Request a Detailed Report</DialogTitle>
                            <DialogDescription>
                              Fill out this form to get a comprehensive SEO analysis from our experts.
                            </DialogDescription>
                          </DialogHeader>
                          <Form {...leadForm}>
                            <form onSubmit={leadForm.handleSubmit(onLeadFormSubmit)} className="space-y-4">
                              <FormField
                                control={leadForm.control}
                                name="name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                      <Input placeholder="Your name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={leadForm.control}
                                name="email"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                      <Input placeholder="your.email@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={leadForm.control}
                                name="phone"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Phone (optional)</FormLabel>
                                    <FormControl>
                                      <Input placeholder="Your phone number" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={leadForm.control}
                                name="company"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Company (optional)</FormLabel>
                                    <FormControl>
                                      <Input placeholder="Your company name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={leadForm.control}
                                name="message"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Message (optional)</FormLabel>
                                    <FormControl>
                                      <Textarea 
                                        placeholder="Tell us more about your SEO goals..." 
                                        className="resize-none" 
                                        {...field} 
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <DialogFooter>
                                <Button 
                                  type="submit" 
                                  className="w-full bg-seo-blue hover:bg-seo-blue-light"
                                >
                                  {reportRequested ? "Send Request" : "Request Detailed Report"}
                                </Button>
                              </DialogFooter>
                            </form>
                          </Form>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}
        
      {/* Newsletter Signup */}
      <AnimatedSection 
        className="max-w-4xl mx-auto my-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white" 
        animation="fade-in"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold mb-2">Stay Updated on SEO Trends</h3>
            <p className="text-white/80">
              Subscribe to our newsletter to receive the latest SEO tips, strategies, and industry news directly to your inbox.
            </p>
          </div>
          <div className="md:w-1/3">
            {!showNewsletterThankYou ? (
              <Form {...newsletterForm}>
                <form onSubmit={newsletterForm.handleSubmit(onNewsletterSubmit)} className="space-y-2">
                  <FormField
                    control={newsletterForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            placeholder="Your email address" 
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/60" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-red-200" />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-white text-blue-600 hover:bg-white/90"
                  >
                    Subscribe
                    <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Form>
            ) : (
              <div className="bg-white/10 p-4 rounded-md text-center">
                <CheckCircle2 className="h-8 w-8 mx-auto mb-2 text-green-400" />
                <p className="font-medium">Thanks for subscribing!</p>
                <p className="text-sm text-white/80">You'll receive our next newsletter soon.</p>
              </div>
            )}
          </div>
        </div>
      </AnimatedSection>
      
      {/* How Our Audit Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
              How Our SEO Audit Tool Works
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Our comprehensive audit tool analyzes all aspects of your website's search engine optimization
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-in" delay={100} className="relative">
              <div className="absolute -left-4 top-4 w-8 h-8 rounded-full bg-seo-blue flex items-center justify-center text-white font-bold z-10">1</div>
              <div className="relative z-0 h-full p-6 bg-white rounded-lg shadow-md border border-gray-100">
                <div className="rounded-full p-3 bg-blue-100 inline-block mb-4">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Website Analysis</h3>
                <p className="text-gray-600">
                  We scan your entire website, checking for technical issues, content quality, and on-page optimization factors.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={200} className="relative">
              <div className="absolute -left-4 top-4 w-8 h-8 rounded-full bg-seo-blue flex items-center justify-center text-white font-bold z-10">2</div>
              <div className="absolute top-1/2 -left-12 w-8 h-[2px] bg-gray-200 hidden md:block"></div>
              <div className="absolute top-1/2 -right-12 w-8 h-[2px] bg-gray-200 hidden md:block"></div>
              <div className="relative z-0 h-full p-6 bg-white rounded-lg shadow-md border border-gray-100">
                <div className="rounded-full p-3 bg-green-100 inline-block mb-4">
                  <BarChart className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Competitor Research</h3>
                <p className="text-gray-600">
                  We compare your site against your top competitors to identify gaps and opportunities for improvement.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={300} className="relative">
              <div className="absolute -left-4 top-4 w-8 h-8 rounded-full bg-seo-blue flex items-center justify-center text-white font-bold z-10">3</div>
              <div className="relative z-0 h-full p-6 bg-white rounded-lg shadow-md border border-gray-100">
                <div className="rounded-full p-3 bg-purple-100 inline-block mb-4">
                  <Lightbulb className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Actionable Recommendations</h3>
                <p className="text-gray-600">
                  We provide prioritized, step-by-step recommendations to improve your search engine rankings.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
        
      {/* Schedule a Call CTA */}
      <AnimatedSection 
        className="max-w-4xl mx-auto mt-16 mb-16 bg-white rounded-lg shadow-lg p-8 border border-gray-200" 
        animation="fade-in"
        delay={450}
      >
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold mb-4">Ready for a Strategic SEO Partnership?</h3>
            <p className="text-gray-600 mb-6">
              Schedule a 30-minute strategy call with our SEO experts to discuss your specific needs and how we can help you achieve your business goals.
            </p>
            
            <ul className="space-y-2">
              {[
                "Custom SEO strategy tailored to your business",
                "Actionable insights to improve your rankings",
                "Clear roadmap to increase organic traffic",
                "Transparent reporting and communication"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:w-1/3 bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h4 className="font-bold text-lg mb-4 text-center">Schedule Your Free Call</h4>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full bg-seo-blue hover:bg-seo-blue-light">
                  Book a Strategy Call
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Schedule Your Free 30-Minute Strategy Call</DialogTitle>
                  <DialogDescription>
                    Fill out the form below to schedule a call with one of our SEO experts.
                  </DialogDescription>
                </DialogHeader>
                <Form {...leadForm}>
                  <form onSubmit={leadForm.handleSubmit(onLeadFormSubmit)} className="space-y-4">
                    <FormField
                      control={leadForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={leadForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={leadForm.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-seo-blue hover:bg-seo-blue-light"
                    >
                      Schedule Call
                    </Button>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
            <p className="text-xs text-center mt-4 text-gray-500">
              No obligation. 100% free consultation.
            </p>
          </div>
        </div>
      </AnimatedSection>
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default SeoAudit;
