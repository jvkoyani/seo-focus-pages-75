
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6">
              Let's Talk About Your SEO Goals
            </h1>
            <p className="text-xl text-seo-gray-dark mb-8">
              Have questions about our services or want to discuss your specific SEO needs? 
              We're here to help you achieve better search rankings and drive more qualified traffic.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
