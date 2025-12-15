
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Briefcase } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import BlogPreview from './BlogPreview';
import CaseStudyPreview from './CaseStudyPreview';
import { blogPosts, caseStudies } from '@/lib/data';

interface ResourcesSectionProps {
  filterTag?: string;
  className?: string;
}

const ResourcesSection = ({ filterTag, className = '' }: ResourcesSectionProps) => {
  // Filter blog posts if a tag is provided
  const filteredBlogs = filterTag 
    ? blogPosts.filter(post => 
        post.tags.some(tag => tag.toLowerCase().includes(filterTag.toLowerCase())) ||
        post.category.toLowerCase().includes(filterTag.toLowerCase())
      ).slice(0, 3)
    : blogPosts.slice(0, 3);

  // Filter case studies if a tag is provided
  const filteredCaseStudies = filterTag
    ? caseStudies.filter(study => 
        study.industry.toLowerCase().includes(filterTag.toLowerCase()) ||
        study.solution.toLowerCase().includes(filterTag.toLowerCase())
      ).slice(0, 2)
    : caseStudies.slice(0, 2);

  return (
    <div className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <AnimatedSection 
          className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12"
          animation="fade-in"
        >
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-3">
              <div className="flex space-x-2">
                <span className="flex items-center bg-seo-blue/10 text-seo-blue px-3 py-1 rounded-full text-sm font-medium">
                  <FileText className="h-4 w-4 mr-1" />
                  Blog Articles
                </span>
                <span className="flex items-center bg-seo-blue/10 text-seo-blue px-3 py-1 rounded-full text-sm font-medium">
                  <Briefcase className="h-4 w-4 mr-1" />
                  Case Studies
                </span>
              </div>
            </div>
            <h2 className="text-3xl font-display font-bold text-seo-dark mb-2">
              Resources & Insights
            </h2>
            <p className="text-lg text-seo-gray-dark max-w-xl">
              Stay updated with our latest SEO guides, success stories, and industry insights
            </p>
          </div>
          <div className="flex space-x-4">
            <Link 
              to="/blogs" 
              className="flex items-center text-seo-blue hover:text-seo-blue-light font-medium group"
            >
              <span className="border-b border-seo-blue/30 group-hover:border-seo-blue-light transition-colors">
                All Articles
              </span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link 
              to="/case-studies" 
              className="flex items-center text-seo-blue hover:text-seo-blue-light font-medium group"
            >
              <span className="border-b border-seo-blue/30 group-hover:border-seo-blue-light transition-colors">
                All Case Studies
              </span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </AnimatedSection>
        
        {/* Case Studies Section */}
        {filteredCaseStudies.length > 0 && (
          <div className="mb-12">
            <AnimatedSection 
              className="mb-6 flex items-center"
              animation="fade-in"
            >
              <Briefcase className="h-5 w-5 text-seo-blue mr-2" />
              <h3 className="text-xl font-display font-bold text-seo-dark">
                Featured Success Stories
              </h3>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredCaseStudies.map((study, index) => (
                <CaseStudyPreview key={study.id} caseStudy={study} delay={index * 100} />
              ))}
            </div>
          </div>
        )}
        
        {/* Blog Posts Section */}
        {filteredBlogs.length > 0 && (
          <div>
            <AnimatedSection 
              className="mb-6 flex items-center"
              animation="fade-in"
            >
              <FileText className="h-5 w-5 text-seo-blue mr-2" />
              <h3 className="text-xl font-display font-bold text-seo-dark">
                Latest Insights & Guides
              </h3>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredBlogs.map((post, index) => (
                <BlogPreview key={post.id} post={post} delay={index * 100} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcesSection;
