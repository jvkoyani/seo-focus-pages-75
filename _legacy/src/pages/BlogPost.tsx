
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag, ChevronLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import BlogPreview from '@/components/BlogPreview';
import { blogPosts } from '@/lib/data';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="mb-6">Sorry, the blog post you're looking for doesn't exist.</p>
            <Link 
              to="/blogs" 
              className="inline-flex items-center text-seo-blue font-medium"
            >
              <span>View all blog posts</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Find related posts
  const relatedPosts = blogPosts
    .filter(p => 
      p.id !== post.id && 
      (p.category === post.category || 
       p.tags.some(tag => post.tags.includes(tag)))
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto" animation="fade-in">
            <Link 
              to="/blogs" 
              className="inline-flex items-center text-seo-blue font-medium mb-6"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              <span>Back to all blog posts</span>
            </Link>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center text-seo-gray-dark mb-8">
              <span className="flex items-center mx-2 mb-2">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </span>
              <span className="mx-2 mb-2">•</span>
              <span className="flex items-center mx-2 mb-2">
                <User className="h-4 w-4 mr-1" />
                {post.author}
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="prose prose-lg max-w-none" animation="fade-in">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </AnimatedSection>
            
            {/* Tags */}
            <div className="mt-12 flex flex-wrap items-center">
              <Tag className="h-5 w-5 text-seo-blue mr-3" />
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-seo-gray-light text-seo-gray-dark rounded-full text-sm mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-seo-gray-light">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
              <h2 className="text-3xl font-display font-bold text-seo-dark mb-4">
                Related Articles
              </h2>
              <p className="text-lg text-seo-gray-dark">
                Discover more insights on this topic
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <BlogPreview key={relatedPost.id} post={relatedPost} delay={index * 100} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                to="/blogs" 
                className="inline-flex items-center bg-seo-blue hover:bg-seo-blue-light text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                <span>View All Articles</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default BlogPost;
