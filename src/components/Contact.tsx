import React, { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send, Clock, ArrowRight, Building2, Globe, Award, Users, Star } from "lucide-react";

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
    <section className="w-full py-16 sm:py-24 bg-white" id="contact">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-7xl mx-auto">
          
          {/* Contact Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gray-50 rounded-full text-sm font-medium mb-8 shadow-sm border border-gray-100">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold mr-4" style={{backgroundColor: '#7A2E1D', color: 'white'}}>06</span>
              <span style={{color: '#1C1C1C'}} className="font-semibold">Let's Connect</span>
            </div>
          
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4">
              Partner with Dubai and India's premier interior design specialists. From initial consultation 
              to final installation, we deliver excellence that exceeds expectations.
            </p>
            <div className="w-24 h-1 mx-auto rounded-full" style={{backgroundColor: '#7A2E1D'}}></div>
          </div>
          
          {/* Professional Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 group-hover:-translate-y-2">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center" style={{backgroundColor: 'rgba(122, 46, 29, 0.1)'}}>
                    <stat.icon className="w-8 h-8" style={{color: '#7A2E1D'}} />
                  </div>
                  <div className="text-3xl font-bold mb-2" style={{color: '#1C1C1C'}}>{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Main Contact Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            
            {/* Contact Form - Takes 2 columns */}
            <div className="lg:col-span-2 animate-on-scroll">
              <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold mb-4" style={{color: '#1C1C1C'}}>Start Your Project</h3>
                  <p className="text-gray-600 leading-relaxed">Ready to bring your vision to life? Fill out the form below and our expert team will get back to you within 24 hours with a personalized consultation.</p>
                </div>
                
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-2 focus:border-transparent transition-colors duration-300"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-2 focus:border-transparent transition-colors duration-300"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-2 focus:border-transparent transition-colors duration-300"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-2 focus:border-transparent transition-colors duration-300"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-2 focus:border-transparent transition-colors duration-300"
                      placeholder="Tell us about your project requirements, timeline, and budget..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-8 py-4 text-white rounded-full font-semibold transition-all duration-300 group shadow-lg hover:shadow-xl hover:scale-105 transform"
                    style={{backgroundColor: '#7A2E1D'}}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5A1E0D'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#7A2E1D'}
                  >
                    {isSubmitting ? 'Sending...' : 'Get Your Free Consultation'}
                    {!isSubmitting && <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />}
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
                    <div className="p-3 rounded-lg mr-4" style={{backgroundColor: 'rgba(122, 46, 29, 0.1)'}}>
                      <MapPin className="w-6 h-6" style={{color: '#7A2E1D'}} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Dubai Office</h4>
                      <p className="text-gray-600">2102, BB2, Mazaya Business Avenue</p>
                      <p className="text-gray-600">JLT, Dubai, UAE</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 rounded-lg mr-4" style={{backgroundColor: 'rgba(122, 46, 29, 0.1)'}}>
                      <MapPin className="w-6 h-6" style={{color: '#7A2E1D'}} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Dubai Factory</h4>
                      <p className="text-gray-600">Warehouse Number 9</p>
                      <p className="text-gray-600">Dubai Investment Park 2, Dubai</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 rounded-lg mr-4" style={{backgroundColor: 'rgba(122, 46, 29, 0.1)'}}>
                      <MapPin className="w-6 h-6" style={{color: '#7A2E1D'}} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">India Factory</h4>
                      <p className="text-gray-600">Plot no. B-236, 1st & 2nd floor</p>
                      <p className="text-gray-600">Okhla Phase - 1, New Delhi, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="p-3 rounded-lg mr-4" style={{backgroundColor: 'rgba(122, 46, 29, 0.1)'}}>
                      <Phone className="w-6 h-6" style={{color: '#7A2E1D'}} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">+971 4 000 0000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="p-3 rounded-lg mr-4" style={{backgroundColor: 'rgba(122, 46, 29, 0.1)'}}>
                      <Mail className="w-6 h-6" style={{color: '#7A2E1D'}} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">info@makewood.ae</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="p-3 rounded-lg mr-4" style={{backgroundColor: 'rgba(122, 46, 29, 0.1)'}}>
                      <Clock className="w-6 h-6" style={{color: '#7A2E1D'}} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Business Hours</h4>
                      <p className="text-gray-600">Sunday - Thursday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Friday - Saturday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
           
            </div>
          </div>
          {/* Google Maps Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4" style={{color: '#1C1C1C'}}>Find Us in Dubai</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Visit our state-of-the-art showroom and office located in the heart of Dubai's business district.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.9916520050106!2d55.14249077537762!3d25.06827207779417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6cb1eae47e79%3A0xe4a7d94a7d2a22ac!2sMazaya%20Business%20Avenue%20JLT%20-%20Tower%20AA1!5e0!3m2!1sen!2sin!4v1758882524223!5m2!1sen!2sin" 
                  width="100%" 
                  height="450" 
                  style={{border: 0, borderRadius: '16px'}} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-96 lg:h-[450px]"
                ></iframe>
              </div>
              
              {/* Map Footer Info */}
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-2xl mr-4" style={{backgroundColor: 'rgba(122, 46, 29, 0.1)'}}>
                    <MapPin className="w-6 h-6" style={{color: '#7A2E1D'}} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Dubai Headquarters</h4>
                    <p className="text-gray-600 text-sm">BB2, Mazaya Business Avenue, JLT</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="p-3 rounded-2xl mr-4" style={{backgroundColor: 'rgba(122, 46, 29, 0.1)'}}>
                    <Clock className="w-6 h-6" style={{color: '#7A2E1D'}} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Business Hours</h4>
                    <p className="text-gray-600 text-sm">Sun-Thu: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="p-3 rounded-2xl mr-4" style={{backgroundColor: 'rgba(122, 46, 29, 0.1)'}}>
                    <Star className="w-6 h-6" style={{color: '#7A2E1D'}} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Rating</h4>
                    <p className="text-gray-600 text-sm">4.9/5 ★★★★★ (200+ reviews)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Global Offices Section */}
          <div className="bg-gray-50 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4" style={{color: '#1C1C1C'}}>Our Global Presence</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                With manufacturing facilities and offices across Dubai and India, we're positioned to serve clients globally with local expertise.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="p-4 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: 'rgba(122, 46, 29, 0.1)'}}>
                      <Building2 className="w-8 h-8" style={{color: '#7A2E1D'}} />
                    </div>
                    <h4 className="text-xl font-bold" style={{color: '#1C1C1C'}}>{office.title}</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-gray-700 font-medium">{office.address}</p>
                    <p className="text-gray-600">{office.city}</p>
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-sm text-gray-500 flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        {office.phone}
                      </p>
                      <p className="text-sm text-gray-500 flex items-center mt-2">
                        <Mail className="w-4 h-4 mr-2" />
                        {office.email}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;