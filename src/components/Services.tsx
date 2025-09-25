import React from "react";
import { Building, Hammer, Layers, Sofa, Settings, Download } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Design & Build",
      subtitle: "End-to-End Turnkey Solutions",
      description: "Comprehensive turnkey Civil, Interior (C&I), and MEP works. Our approach ensures a cohesive transformation of spaces, from initial concept to final execution.",
      features: ["Civil Works", "Interior Finishing", "MEP Integration", "Project Management"]
    },
    {
      icon: Hammer,
      title: "Build",
      subtitle: "Precision in Execution",
      description: "With a decade of experience in general contracting, our in-house team excels in delivering projects with precision and efficiency.",
      features: ["General Contracting", "Quality Standards", "Timely Delivery", "Skilled Craftsmanship"]
    },
    {
      icon: Layers,
      title: "Modular",
      subtitle: "Flexible & Scalable Designs",
      description: "Specialized in modular solutions that offer flexibility and scalability. Our modular designs adapt to various settings with optimal space utilization.",
      features: ["Flexible Design", "Scalable Solutions", "Space Optimization", "Easy Reconfiguration"]
    },
    {
      icon: Sofa,
      title: "Furniture",
      subtitle: "Custom & Modular Solutions",
      description: "Our manufacturing facility in DIP, Dubai, enables us to produce bespoke custom and modular furniture with advanced machinery and skilled craftsmanship.",
      features: ["Custom Furniture", "Modular Systems", "Advanced Manufacturing", "Quality Materials"]
    }
  ];

  return (
    <section className="w-full py-12 sm:py-20 bg-white" id="services">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <div className="pulse-chip mb-6 inline-flex">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">03</span>
              <span>Our Services</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              What We Do
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we offer comprehensive interior solutions that transform spaces 
              into inspiring environments across residential, commercial, and hospitality sectors.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="animate-on-scroll">
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="bg-pulse-500 p-3 rounded-lg mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-pulse-600 font-medium">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-pulse-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-pulse-500 to-pulse-600 rounded-2xl p-8 text-center animate-on-scroll">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Space?
              </h3>
              <p className="text-pulse-100 mb-6">
                Download our detailed service brochure or get in touch for a personalized consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center px-6 py-3 bg-white text-pulse-600 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300">
                  <Download className="w-4 h-4 mr-2" />
                  Download Brochure
                </button>
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-pulse-600 transition-all duration-300"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Book Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;