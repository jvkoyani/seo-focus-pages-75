
import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, ExternalLink, Layers, ChevronRight, Search } from 'lucide-react';
import { allAustralianCities } from '@/lib/locationData';
import { services } from '@/lib/data';
import AnimatedSection from '@/components/AnimatedSection';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Sitemap = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Group cities by state for better organization
  const stateGroups = useMemo(() => {
    const groups: Record<string, typeof allAustralianCities> = {};
    
    allAustralianCities.forEach(city => {
      // Include all cities, even those with "Various" state
      const state = city.state === "Various" ? "Other Locations" : city.state;
      
      if (!groups[state]) {
        groups[state] = [];
      }
      groups[state].push(city);
    });
    
    return groups;
  }, []);
  
  const states = useMemo(() => Object.keys(stateGroups).sort(), [stateGroups]);
  
  // Filter locations based on search term
  const filterLocations = (locations: typeof allAustralianCities) => {
    if (!searchTerm) return locations;
    return locations.filter(location => 
      location.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Used to track which state sections are expanded
  const [expandedStates, setExpandedStates] = useState<Record<string, boolean>>({});

  const toggleStateExpansion = (state: string) => {
    setExpandedStates(prev => ({
      ...prev,
      [state]: !prev[state]
    }));
  };
  
  // Get major cities for popular combinations
  const majorCities = useMemo(() => {
    // Return the first 15 cities with full metadata (excluding "Various" state)
    return allAustralianCities
      .filter(city => city.description && city.state !== "Various")
      .slice(0, 15);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in">
            <div className="inline-flex items-center text-sm text-seo-gray-dark mb-6">
              <Link to="/" className="hover:text-seo-blue transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span>Sitemap</span>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in">
            <h1 className="text-4xl font-display font-bold text-seo-dark mb-8 text-center">
              Complete Site Map
            </h1>
            <p className="text-lg text-center text-seo-gray-dark max-w-3xl mx-auto mb-12">
              Browse our comprehensive sitemap to find all pages and services available across Australia.
            </p>
          </AnimatedSection>
          
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">Main Sections</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <Link to="/" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow flex items-center">
                <Layers className="h-5 w-5 mr-3 text-seo-blue" />
                <span>Home</span>
              </Link>
              <Link to="/about" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow flex items-center">
                <Layers className="h-5 w-5 mr-3 text-seo-blue" />
                <span>About Us</span>
              </Link>
              <Link to="/services" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow flex items-center">
                <Layers className="h-5 w-5 mr-3 text-seo-blue" />
                <span>Services</span>
              </Link>
              <Link to="/industries" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow flex items-center">
                <Layers className="h-5 w-5 mr-3 text-seo-blue" />
                <span>Industries</span>
              </Link>
              <Link to="/blogs" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow flex items-center">
                <Layers className="h-5 w-5 mr-3 text-seo-blue" />
                <span>Blogs</span>
              </Link>
              <Link to="/case-studies" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow flex items-center">
                <Layers className="h-5 w-5 mr-3 text-seo-blue" />
                <span>Case Studies</span>
              </Link>
              <Link to="/contact" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow flex items-center">
                <Layers className="h-5 w-5 mr-3 text-seo-blue" />
                <span>Contact</span>
              </Link>
              <Link to="/free-consultation" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow flex items-center">
                <Layers className="h-5 w-5 mr-3 text-seo-blue" />
                <span>Free Consultation</span>
              </Link>
              <Link to="/sitemap.xml" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow flex items-center">
                <Layers className="h-5 w-5 mr-3 text-seo-blue" />
                <span>XML Sitemap</span>
              </Link>
              <Link to="/location-sitemap" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow flex items-center">
                <Layers className="h-5 w-5 mr-3 text-seo-blue" />
                <span>Location Directory</span>
              </Link>
            </div>
          </section>
          
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {services.map(service => (
                <Link 
                  key={service.id}
                  to={`/service/${service.slug}`} 
                  className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-seo-gray-dark">{service.description}</p>
                </Link>
              ))}
            </div>
          </section>
          
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">Our Methodology</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="/methodology/research-analysis" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Research & Analysis</h3>
              </Link>
              <Link to="/methodology/strategic-planning" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Strategic Planning</h3>
              </Link>
              <Link to="/methodology/implementation" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Implementation</h3>
              </Link>
              <Link to="/methodology/monitoring-optimization" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Monitoring & Optimization</h3>
              </Link>
            </div>
          </section>
          
          <section className="mb-8">
            <div className="flex items-center gap-4 max-w-md mx-auto">
              <Input
                type="text"
                placeholder="Search for a location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1"
              />
              <Button 
                variant="ghost" 
                className="px-3"
                onClick={() => setSearchTerm('')}
                disabled={!searchTerm}
              >
                Clear
              </Button>
            </div>
          </section>
          
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">Locations We Serve</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {states.map(state => {
                const filteredLocations = filterLocations(stateGroups[state]);
                if (filteredLocations.length === 0) return null;
                
                const isExpanded = expandedStates[state] || false;
                const displayLocations = isExpanded ? filteredLocations : filteredLocations.slice(0, 50);
                const hasMore = filteredLocations.length > 50;
                
                return (
                  <div key={state} className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-xl font-semibold mb-4 border-b pb-2">
                      <Link to={state !== "Other Locations" ? 
                        `/australia/${state.toLowerCase().replace(/\s+/g, '-')}` : 
                        "#"} 
                        className={state !== "Other Locations" ? "hover:text-seo-blue" : ""}
                      >
                        {state}
                      </Link>
                      <span className="text-sm text-seo-gray-dark ml-2">({filteredLocations.length})</span>
                    </h3>
                    
                    <div className="h-[300px] overflow-y-auto pr-2">
                      <div className="grid grid-cols-1 gap-2">
                        {displayLocations.map(city => (
                          <Link 
                            key={city.id}
                            to={`/location/${city.slug}`}
                            className="flex items-center p-2 hover:bg-seo-gray-light rounded transition-colors"
                          >
                            <MapPin className="h-4 w-4 mr-2 text-seo-blue flex-shrink-0" />
                            <span className="truncate">{city.name}</span>
                          </Link>
                        ))}
                      </div>
                      
                      {hasMore && (
                        <div className="mt-3 text-center">
                          <Button 
                            variant="link" 
                            onClick={() => toggleStateExpansion(state)}
                            className="text-seo-blue"
                          >
                            {isExpanded ? "Show less" : `Show all ${filteredLocations.length} locations`}
                          </Button>
                        </div>
                      )}
                    </div>
                    
                    {state !== "Other Locations" && (
                      <div className="mt-4 text-right">
                        <Link to={`/australia/${state.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-seo-blue hover:underline">
                          All {state} locations
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
          
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">Popular Service-Location Combinations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.slice(0, 6).map(service => (
                <div key={service.id} className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <div className="h-[200px] overflow-y-auto pr-2">
                    <div className="grid grid-cols-1 gap-2">
                      {majorCities.map(city => {
                        return (
                          <Link 
                            key={`${service.slug}-${city.slug}`}
                            to={`/location/${city.slug}/${service.slug}`}
                            className="flex items-center text-sm hover:text-seo-blue"
                          >
                            <ExternalLink className="h-3 w-3 mr-2 flex-shrink-0" />
                            <span className="truncate">{service.title} in {city.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                  <div className="mt-4 pt-2 border-t text-center">
                    <Link to={`/service/${service.slug}`} className="text-sm text-seo-blue hover:underline">
                      View all {service.title} services
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">All Service-Location Combinations</h3>
              <p className="text-seo-gray-dark mb-4">
                We provide specialized SEO services for all {allAustralianCities.length} locations across Australia. 
                Each of our {services.length} services is available in every location, creating a total of {services.length * allAustralianCities.length} unique service-location combinations.
              </p>
              <div className="bg-seo-gray-light p-3 rounded mb-4 font-mono text-sm">
                /location/{"{location-slug}"}/{"{service-slug}"}
              </div>
              <p className="text-seo-gray-dark mb-6">
                For example, to access our services in major Australian cities:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {majorCities.slice(0, 6).map(city => (
                  <Link 
                    key={city.id} 
                    to={`/location/${city.slug}/local-seo`}
                    className="p-2 bg-seo-gray-light rounded hover:bg-seo-gray/20 transition-colors flex items-center"
                  >
                    <ExternalLink className="h-4 w-4 mr-2 text-seo-blue" />
                    <span>/location/{city.slug}/local-seo</span>
                  </Link>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {services.slice(0, 6).map(service => {
                  return (
                    <Link 
                      key={service.id} 
                      to={`/location/sydney/${service.slug}`}
                      className="p-2 bg-seo-gray-light rounded hover:bg-seo-gray/20 transition-colors flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-2 text-seo-blue" />
                      <span>/location/sydney/{service.slug}</span>
                    </Link>
                  );
                })}
              </div>
              
              <Button asChild className="w-full md:w-auto">
                <Link to="/location-sitemap">
                  View Complete Location Directory
                </Link>
              </Button>
            </div>
          </section>
          
          <section>
            <div className="bg-seo-blue-light/10 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Looking for Something Specific?</h2>
              <p className="mb-6 text-seo-gray-dark">
                If you can't find what you're looking for, feel free to contact us directly.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="bg-seo-blue text-white px-6 py-3 rounded-md hover:bg-seo-blue-light transition-colors"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/free-consultation" 
                  className="bg-white border border-seo-blue text-seo-blue px-6 py-3 rounded-md hover:bg-seo-blue/5 transition-colors"
                >
                  Get a Free Consultation
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sitemap;
