import React, { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send, Clock, ArrowRight, Building2, Globe, Award, Users } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Handle form submission here
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      budget: '',
      timeline: '',
      message: ''
    });
    
    setIsSubmitting(false);
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const offices = [
    {
      title: "Dubai Headquarters",
      address: "2102, BB2, Mazaya Business Avenue",
      city: "JLT, Dubai, UAE",
      phone: "+971 4 000 0000",
      email: "dubai@makewood.ae",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.8406341341847!2d55.13621!3d25.066964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f14d6e5b4c4b9%3A0x8e2b6d2a6f5c4d8c!2sJumeirah%20Lakes%20Towers%2C%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1635789012345!5m2!1sen!2s"
    },
    {
      title: "Dubai Factory",
      address: "Warehouse Number 9",
      city: "Dubai Investment Park 2, Dubai",
      phone: "+971 4 000 0001",
      email: "factory@makewood.ae",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.8406341341847!2d55.23621!3d24.996964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d6e5b4c4b9%3A0x8e2b6d2a6f5c4d8c!2sDubai%20Investment%20Park%2C%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1635789012345!5m2!1sen!2s"
    },
    {
      title: "India Manufacturing",
      address: "Plot no. B-236, 1st & 2nd floor",
      city: "Okhla Phase - 1, New Delhi, India",
      phone: "+91 11 0000 0000",
      email: "india@makewood.ae",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.8406341341847!2d77.26621!3d28.546964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3d6e5b4c4b9%3A0x8e2b6d2a6f5c4d8c!2sOkhla%20Phase%201%2C%20New%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2s!4v1635789012345!5m2!1sen!2s"
    }
  ];

  const stats = [
    { icon: Building2, label: "Projects Completed", value: "500+" },
    { icon: Users, label: "Happy Clients", value: "200+" },
    { icon: Globe, label: "Countries Served", value: "15+" },
    { icon: Award, label: "Awards Won", value: "25+" }
  ];

  return (
    <section className="w-full py-12 sm:py-20 bg-gray-50" id="contact">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <div className="pulse-chip mb-6 inline-flex">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">06</span>
              <span>Get In Touch</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              Let's Create Something Amazing
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to transform your space? Contact us today for a consultation and discover 
              how Makewood can bring your interior vision to life.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-on-scroll">
              <div className="bg-white rounded-2xl p-8 shadow-elegant">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Consultation</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-colors duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-colors duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-colors duration-300"
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-colors duration-300"
                      >
                        <option value="">Select project type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="hospitality">Hospitality</option>
                        <option value="retail">Retail</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-colors duration-300"
                      placeholder="Tell us about your project requirements, timeline, and budget..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-6 py-4 bg-pulse-500 text-white rounded-lg font-medium hover:bg-pulse-600 transition-colors duration-300 group"
                  >
                    Send Message
                    <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="animate-on-scroll space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-elegant">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-pulse-100 p-3 rounded-lg mr-4">
                      <MapPin className="w-6 h-6 text-pulse-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Dubai Office</h4>
                      <p className="text-gray-600">2102, BB2, Mazaya Business Avenue</p>
                      <p className="text-gray-600">JLT, Dubai, UAE</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-pulse-100 p-3 rounded-lg mr-4">
                      <MapPin className="w-6 h-6 text-pulse-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Dubai Factory</h4>
                      <p className="text-gray-600">Warehouse Number 9</p>
                      <p className="text-gray-600">Dubai Investment Park 2, Dubai</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-pulse-100 p-3 rounded-lg mr-4">
                      <MapPin className="w-6 h-6 text-pulse-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">India Factory</h4>
                      <p className="text-gray-600">Plot no. B-236, 1st & 2nd floor</p>
                      <p className="text-gray-600">Okhla Phase - 1, New Delhi, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-pulse-100 p-3 rounded-lg mr-4">
                      <Phone className="w-6 h-6 text-pulse-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">+971 4 000 0000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-pulse-100 p-3 rounded-lg mr-4">
                      <Mail className="w-6 h-6 text-pulse-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">info@makewood.ae</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-pulse-100 p-3 rounded-lg mr-4">
                      <Clock className="w-6 h-6 text-pulse-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Business Hours</h4>
                      <p className="text-gray-600">Sunday - Thursday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Friday - Saturday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-pulse-500 to-pulse-600 rounded-2xl p-8 text-white">
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-8 h-8 mr-3" />
                  <h3 className="text-xl font-bold">WhatsApp Chat</h3>
                </div>
                <p className="text-pulse-100 mb-6">
                  Get instant responses to your queries. Chat with our team on WhatsApp for quick assistance.
                </p>
                <a
                  href="https://wa.me/971XXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white text-pulse-600 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 group"
                >
                  Start WhatsApp Chat
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;