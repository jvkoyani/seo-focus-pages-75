
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6">
              Your Trusted SEO Partner
            </h1>
            <p className="text-xl text-seo-gray-dark mb-8">
              We're a team of SEO specialists passionate about helping businesses succeed online
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <AnimatedSection className="lg:w-1/2" animation="fade-in-left">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
                  alt="SEO team meeting" 
                  className="w-full h-auto"
                />
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="lg:w-1/2" animation="fade-in-right">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
                From Small Beginnings to Industry Leaders
              </h2>
              <p className="text-lg text-seo-gray-dark mb-6">
                Founded in 2010, SEOfocus started as a small team of digital marketing enthusiasts with a vision: to make effective SEO accessible to businesses of all sizes. We believed that search engine optimization shouldn't be shrouded in mystery or filled with empty promises.
              </p>
              <p className="text-lg text-seo-gray-dark mb-6">
                Over the years, we've grown into a full-service SEO agency with offices across Australia, helping hundreds of businesses improve their online visibility and achieve sustainable growth through search. Our approach combines technical expertise, creative content strategies, and data-driven insights to deliver measurable results.
              </p>
              <p className="text-lg text-seo-gray-dark">
                Today, we're proud to be recognized as industry leaders, but we've never lost sight of our original mission: providing transparent, effective SEO services that truly help our clients succeed.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-20 bg-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
              What Drives Us
            </h2>
            <p className="text-lg text-seo-gray-dark">
              These core principles guide everything we do
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Transparency",
                desc: "We believe in complete honesty about our methods, expectations, and results. No black boxes or hidden tactics."
              },
              {
                title: "Excellence",
                desc: "We strive for the highest standards in everything we do, from research and strategy to implementation and reporting."
              },
              {
                title: "Innovation",
                desc: "We continuously learn, adapt, and evolve our approaches to stay ahead of search engine algorithm changes and industry trends."
              },
              {
                title: "Collaboration",
                desc: "We work closely with our clients, treating their business goals as our own and becoming true extensions of their teams."
              },
              {
                title: "Data-Driven",
                desc: "We base our decisions on solid data and evidence, not assumptions or outdated SEO practices."
              },
              {
                title: "Client Success",
                desc: "We measure our success by our clients' outcomes. If they're not succeeding, neither are we."
              }
            ].map((value, index) => (
              <AnimatedSection
                key={index}
                className="bg-white rounded-xl shadow-md p-8 border border-gray-100"
                animation="fade-in"
                delay={index * 100}
              >
                <div className="bg-seo-blue/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <svg className="h-7 w-7 text-seo-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-seo-gray-dark">
                  {value.desc}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
              Meet The Experts
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Our diverse team brings together decades of combined experience in SEO and digital marketing
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Emma Thompson",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
              },
              {
                name: "Michael Zhang",
                role: "Technical SEO Director",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop"
              },
              {
                name: "Sarah Williams",
                role: "Content Strategy Lead",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop"
              },
              {
                name: "David Chen",
                role: "Analytics Manager",
                image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop"
              }
            ].map((member, index) => (
              <AnimatedSection
                key={index}
                className="text-center"
                animation="fade-in"
                delay={index * 100}
              >
                <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-5">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-display font-bold text-seo-dark mb-1">
                  {member.name}
                </h3>
                <p className="text-seo-blue">
                  {member.role}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default About;
