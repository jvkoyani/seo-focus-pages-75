
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Clock, ChevronRight, FileText, FileJson } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-seo-dark to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Your SEO Partner</h3>
            <p className="mb-4 text-gray-300">
              We help businesses grow through strategic SEO solutions tailored to their unique needs.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mt-1 mr-3 text-seo-blue" />
                <span className="text-gray-300">
                  123 SEO Street, Sydney<br />
                  NSW 2000, Australia
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-seo-blue" />
                <a href="tel:1300123456" className="text-gray-300 hover:text-white">
                  1300 123 456
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-seo-blue" />
                <a href="mailto:info@example.com" className="text-gray-300 hover:text-white">
                  info@example.com
                </a>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-seo-blue" />
                <span className="text-gray-300">Mon-Fri: 9am-5pm</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-gray-300 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Blog</span>
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Case Studies</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Contact</span>
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-gray-300 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Sitemap</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/service/local-seo" className="text-gray-300 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Local SEO</span>
                </Link>
              </li>
              <li>
                <Link to="/service/technical-seo" className="text-gray-300 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Technical SEO</span>
                </Link>
              </li>
              <li>
                <Link to="/service/ecommerce-seo" className="text-gray-300 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>E-commerce SEO</span>
                </Link>
              </li>
              <li>
                <Link to="/service/content-marketing" className="text-gray-300 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Content Marketing</span>
                </Link>
              </li>
              <li>
                <Link to="/service/link-building" className="text-gray-300 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Link Building</span>
                </Link>
              </li>
              <li>
                <Link to="/service/seo-audits" className="text-gray-300 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>SEO Audits</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/free-consultation" className="text-gray-300 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Free Consultation</span>
                </Link>
              </li>
              <li>
                <Link to="/seo-audit" className="text-gray-300 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Free SEO Audit</span>
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-gray-300 hover:text-white flex items-center">
                  <FileText className="h-4 w-4 mr-1" />
                  <span>SEO Guides</span>
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-gray-300 hover:text-white flex items-center">
                  <FileJson className="h-4 w-4 mr-1" />
                  <span>Sitemap</span>
                </Link>
              </li>
              <li>
                <Link to="/sitemap.xml" className="text-gray-300 hover:text-white flex items-center">
                  <FileText className="h-4 w-4 mr-1" />
                  <span>XML Sitemap</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">
              Serving all major Australian cities including Sydney, Melbourne, Brisbane, Perth, Adelaide and more.
            </p>
            <Link to="/sitemap" className="text-seo-blue hover:underline">
              View all service locations
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Your SEO Partner. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
