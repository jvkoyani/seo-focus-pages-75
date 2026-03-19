
import React from 'react';

import Image from 'next/image';
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
      <div className="h-32 sm:h-48 overflow-hidden relative">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-3 sm:p-6 flex-1 flex flex-col">
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
        <h3 className="text-sm sm:text-xl font-display font-bold text-seo-dark mb-2 sm:mb-3 line-clamp-2">
          {post.title}
        </h3>
        <p className="hidden sm:block text-seo-gray-dark mb-4 flex-1">
          {post.excerpt}
        </p>
        <a
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-seo-blue font-medium group mt-auto"
        >
          <span className="border-b border-seo-blue/30 group-hover:border-seo-blue transition-colors">
            Read more <span className="sr-only">about {post.title}</span>
          </span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </AnimatedSection>
  );
};

export default BlogPreview;

