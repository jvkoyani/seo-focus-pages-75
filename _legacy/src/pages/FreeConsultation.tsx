
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Check, Calendar, Clock, Phone, Users, FileText } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  website: z.string().url({ message: 'Please enter a valid URL.' }).optional().or(z.literal('')),
  company: z.string().min(2, { message: 'Company name must be at least 2 characters.' }),
  service: z.string({ required_error: 'Please select a service.' }),
  budget: z.string({ required_error: 'Please select a budget range.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

const FreeConsultation = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      website: '',
      company: '',
      service: '',
      budget: '',
      message: '',
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Consultation Request Received!",
        description: "Thank you for your interest. One of our SEO specialists will contact you within 24 hours.",
      });
      form.reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Free Consultation
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6">
              Book Your Free SEO Strategy Session
            </h1>
            <p className="text-xl text-seo-gray-dark">
              Get personalized insights and recommendations from our SEO experts to improve your search rankings and drive more qualified traffic.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection className="order-2 lg:order-1" animation="fade-in-left">
              <div className="bg-seo-gray-light p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-display font-bold text-seo-dark mb-4">
                  What to Expect
                </h2>
                <ul className="space-y-4">
                  {[
                    {
                      icon: <Clock className="h-5 w-5 text-seo-blue" />,
                      title: "30-Minute Session",
                      description: "A focused consultation with one of our senior SEO strategists."
                    },
                    {
                      icon: <FileText className="h-5 w-5 text-seo-blue" />,
                      title: "Website Evaluation",
                      description: "Quick analysis of your current website and SEO performance."
                    },
                    {
                      icon: <Users className="h-5 w-5 text-seo-blue" />,
                      title: "Competitor Insights",
                      description: "Brief overview of your competitive landscape and opportunities."
                    },
                    {
                      icon: <Check className="h-5 w-5 text-seo-blue" />,
                      title: "Custom Recommendations",
                      description: "Tailored strategies to improve your search visibility and traffic."
                    },
                    {
                      icon: <Calendar className="h-5 w-5 text-seo-blue" />,
                      title: "Next Steps Plan",
                      description: "Clear roadmap for implementing SEO improvements."
                    }
                  ].map((item, index) => (
                    <li key={index} className="flex">
                      <div className="mr-4 mt-1">{item.icon}</div>
                      <div>
                        <h3 className="font-bold text-seo-dark">{item.title}</h3>
                        <p className="text-seo-gray-dark">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-seo-blue text-white p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <Phone className="h-5 w-5 mr-2" />
                  <h3 className="font-bold">Prefer to call?</h3>
                </div>
                <p className="mb-4">
                  If you'd prefer to speak directly with an SEO specialist, give us a call:
                </p>
                <a href="tel:1300123456" className="text-xl font-bold hover:underline">
                  1300 123 456
                </a>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="order-1 lg:order-2" animation="fade-in-right">
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
                <h2 className="text-2xl font-display font-bold text-seo-dark mb-6">
                  Request Your Free Consultation
                </h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
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
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
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
                      
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company</FormLabel>
                            <FormControl>
                              <Input placeholder="Your company name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="website"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Website URL</FormLabel>
                          <FormControl>
                            <Input placeholder="https://yourwebsite.com" {...field} />
                          </FormControl>
                          <FormDescription>
                            Optional if you don't have a website yet
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service of Interest</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="local-seo">Local SEO</SelectItem>
                                <SelectItem value="technical-seo">Technical SEO</SelectItem>
                                <SelectItem value="content-strategy">Content Strategy</SelectItem>
                                <SelectItem value="link-building">Link Building</SelectItem>
                                <SelectItem value="ecommerce-seo">E-commerce SEO</SelectItem>
                                <SelectItem value="analytics-reporting">Analytics & Reporting</SelectItem>
                                <SelectItem value="full-service">Full-Service SEO</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Monthly Budget</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select budget range" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
                                <SelectItem value="2000-5000">$2,000 - $5,000</SelectItem>
                                <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                                <SelectItem value="10000+">$10,000+</SelectItem>
                                <SelectItem value="not-sure">Not sure yet</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tell us about your goals</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="What are you hoping to achieve with SEO? Any specific challenges you're facing?"
                              rows={4}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full bg-seo-blue hover:bg-seo-blue-light py-6">
                      Book My Free Consultation
                    </Button>
                  </form>
                </Form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FreeConsultation;
