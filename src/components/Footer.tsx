
import React from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight, Building2, Globe, Award, Linkedin, Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white" id="footer">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <img 
                  src="/logo.png" 
                  alt="Makewood Logo" 
                  className="h-12 object-contain mb-4 filter brightness-0 invert"
                />
                <p className="text-gray-300 leading-relaxed text-sm">
                  Transforming spaces across Dubai and India with precision engineering, 
                  innovative design, and two decades of interior excellence.
                </p>
              </div>
              
              {/* Social Media */}
              <div>
                <h4 className="text-lg font-semibold mb-4" style={{color: '#FFB478'}}>Follow Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-orange-300 hover:text-orange-300 transition-colors duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-orange-300 hover:text-orange-300 transition-colors duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-orange-300 hover:text-orange-300 transition-colors duration-300"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6" style={{color: '#FFB478'}}>Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6" style={{color: '#FFB478'}}>Our Services</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#services" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Design & Build
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Interior Finishing
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Custom Furniture
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Modular Solutions
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    MEP Integration
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6" style={{color: '#FFB478'}}>Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="p-2 rounded-lg mr-4 mt-1" style={{backgroundColor: 'rgba(255, 180, 120, 0.1)'}}>
                    <MapPin className="w-4 h-4" style={{color: '#FFB478'}} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white text-sm mb-1">Dubai Office</h5>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      BB2, Mazaya Business Avenue<br />
                      JLT, Dubai, UAE
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="p-2 rounded-lg mr-4" style={{backgroundColor: 'rgba(255, 180, 120, 0.1)'}}>
                    <Phone className="w-4 h-4" style={{color: '#FFB478'}} />
                  </div>
                  <div>
                    <a href="tel:+97140000000" className="text-gray-300 hover:text-white text-sm transition-colors">
                      +971 4 000 0000
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="p-2 rounded-lg mr-4" style={{backgroundColor: 'rgba(255, 180, 120, 0.1)'}}>
                    <Mail className="w-4 h-4" style={{color: '#FFB478'}} />
                  </div>
                  <div>
                    <a href="mailto:info@makewood.ae" className="text-gray-300 hover:text-white text-sm transition-colors">
              info@makewood.ae
            </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 rounded-lg mr-4 mt-1" style={{backgroundColor: 'rgba(255, 180, 120, 0.1)'}}>
                    <Clock className="w-4 h-4" style={{color: '#FFB478'}} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white text-sm mb-1">Business Hours</h5>
                    <p className="text-gray-300 text-sm">
                      Sun-Thu: 9:00 AM - 6:00 PM<br />
                      Fri-Sat: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

       

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Make Wood Decoration Design & Implementation L.L.C. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Support</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
