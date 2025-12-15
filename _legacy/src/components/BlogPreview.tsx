
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { BlogPostData } from '@/lib/data';

interface BlogPreviewProps {
  post: BlogPostData;
  delay?: number;
}

const BlogPreview = ({ post, delay = 0 }: BlogPreviewProps) => {
  return (
    <AnimatedSection
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
      animation="fade-in"
      delay={delay}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center text-sm text-seo-gray-dark mb-3">
          <span className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {post.date}
          </span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            {post.author}
          </span>
        </div>
        <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
          {post.title}
        </h3>
        <p className="text-seo-gray-dark mb-4 flex-1">
          {post.excerpt}
        </p>
        <Link 
          to={`/blog/${post.slug}`} 
          className="inline-flex items-center text-seo-blue font-medium group mt-auto"
        >
          <span className="border-b border-seo-blue/30 group-hover:border-seo-blue transition-colors">
            Read more
          </span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </AnimatedSection>
  );
};

export default BlogPreview;
