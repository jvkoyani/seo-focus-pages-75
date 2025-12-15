
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServicePage from "./pages/ServicePage";
import Industries from "./pages/Industries";
import IndustryPage from "./pages/IndustryPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Location from "./pages/Location";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import CaseStudies from "./pages/CaseStudies";
import CaseStudy from "./pages/CaseStudy";
import LocationService from "./pages/LocationService";
import SeoAudit from "./pages/SeoAudit";
import NotFound from "./pages/NotFound";
import FreeConsultation from "./pages/FreeConsultation";
import ServiceBlog from "./pages/ServiceBlog";
import Sitemap from "./pages/Sitemap";
import XmlSitemap from "./pages/XmlSitemap";

// Country, State, County pages
import Country from "./pages/Country";
import State from "./pages/State";
import County from "./pages/County";

// Methodology pages
import ResearchAnalysis from "./pages/methodology/ResearchAnalysis";
import StrategicPlanning from "./pages/methodology/StrategicPlanning";
import Implementation from "./pages/methodology/Implementation";
import MonitoringOptimization from "./pages/methodology/MonitoringOptimization";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:slug" element={<ServicePage />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industry/:slug" element={<IndustryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/location/:slug" element={<Location />} />
          <Route path="/location/:locationSlug/:serviceSlug" element={<LocationService />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-study/:slug" element={<CaseStudy />} />
          <Route path="/seo-audit" element={<SeoAudit />} />
          <Route path="/free-consultation" element={<FreeConsultation />} />
          
          {/* Sitemap Routes */}
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/sitemap.xml" element={<XmlSitemap />} />
          
          {/* Service Blog pages */}
          <Route path="/service-blog/:slug" element={<ServiceBlog />} />
          <Route path="/service-blog/:slug/:locationSlug" element={<ServiceBlog />} />
          
          {/* Methodology pages */}
          <Route path="/methodology/research-analysis" element={<ResearchAnalysis />} />
          <Route path="/methodology/strategic-planning" element={<StrategicPlanning />} />
          <Route path="/methodology/implementation" element={<Implementation />} />
          <Route path="/methodology/monitoring-optimization" element={<MonitoringOptimization />} />
          
          {/* Hierarchy pages */}
          <Route path="/:country" element={<Country />} />
          <Route path="/:country/:state" element={<State />} />
          <Route path="/:country/:state/:county" element={<County />} />
          
          {/* SEO-friendly URL patterns for service-location combinations */}
          <Route path="/local-seo-:locationSlug" element={<LocationService />} />
          <Route path="/technical-seo-:locationSlug" element={<LocationService />} />
          <Route path="/ecommerce-seo-:locationSlug" element={<LocationService />} />
          <Route path="/content-marketing-:locationSlug" element={<LocationService />} />
          <Route path="/link-building-:locationSlug" element={<LocationService />} />
          <Route path="/seo-audits-:locationSlug" element={<LocationService />} />
          <Route path="/digital-pr-:locationSlug" element={<LocationService />} />
          <Route path="/analytics-reporting-:locationSlug" element={<LocationService />} />
          
          {/* Generic pattern for any service-location combination */}
          <Route path="/:serviceLocationSlug" element={<LocationService />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
