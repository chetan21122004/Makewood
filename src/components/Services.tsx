import React, { useState, useEffect } from "react";
import { Building, Hammer, Layers, Sofa, Settings, Download, ArrowRight, CheckCircle, Play } from "lucide-react";

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      id: "01",
      icon: Building,
      title: "Design & Build",
      subtitle: "End-to-End Turnkey Solutions",
      description: "At MakeWood, we offer comprehensive turnkey Civil, Interior (C&I), and MEP works. Our approach ensures a cohesive transformation of spaces, from initial concept to final execution, tailored to meet the unique needs of each client.",
      detailedDescription: "Our integrated approach combines architectural vision with engineering precision, delivering spaces that exceed expectations while maintaining the highest standards of quality and efficiency.",
      features: ["Civil Works Integration", "Interior Finishing Excellence", "MEP System Coordination", "Complete Project Management"],
      image: "/projects/India/allianz/1.png",
      stats: { projects: "150+", timeline: "6-12 months", satisfaction: "98%" }
    },
    {
      id: "02",
      icon: Hammer,
      title: "Build",
      subtitle: "Precision in Execution",
      description: "With over 20 years of experience in general contracting, our in-house team excels in delivering projects with precision and efficiency. We manage every aspect of the build process, ensuring timely delivery and adherence to the highest quality standards.",
      detailedDescription: "Our master craftsmen and project managers work in seamless coordination, utilizing advanced construction methodologies and quality control systems to deliver exceptional results.",
      features: ["Expert General Contracting", "Quality Assurance Standards", "On-time Project Delivery", "Skilled Craftsmanship Team"],
      image: "/projects/Dubai/furjanDubai/1.png",
      stats: { projects: "200+", timeline: "4-8 months", satisfaction: "97%" }
    },
    {
      id: "03",
      icon: Layers,
      title: "Modular",
      subtitle: "Flexible & Scalable Designs",
      description: "Understanding the evolving needs of modern spaces, we specialize in modular solutions that offer flexibility and scalability. Our modular designs are crafted to adapt to various settings, ensuring optimal space utilization and ease of reconfiguration.",
      detailedDescription: "Future-ready designs that adapt to changing business needs, incorporating smart systems and sustainable materials for maximum versatility and longevity.",
      features: ["Flexible Design Systems", "Scalable Solutions", "Optimal Space Utilization", "Easy Reconfiguration"],
      image: "/projects/India/samsung/1.png",
      stats: { projects: "100+", timeline: "3-6 months", satisfaction: "96%" }
    },
    {
      id: "04",
      icon: Sofa,
      title: "Furniture",
      subtitle: "Custom & Modular Solutions",
      description: "Our manufacturing facility in DIP, Dubai, enables us to produce bespoke custom and modular furniture. Utilizing advanced machinery and skilled craftsmanship, we create furniture that blends functionality with aesthetic appeal, catering to diverse client requirements.",
      detailedDescription: "From concept sketches to final installation, our furniture division creates pieces that reflect your brand identity while providing uncompromising comfort and durability.",
      features: ["Bespoke Custom Furniture", "Modular Furniture Systems", "Advanced Manufacturing", "Premium Quality Materials"],
      image: "/projects/Dubai/dubaiHills/2.png",
      stats: { projects: "50+", timeline: "2-4 months", satisfaction: "99%" }
    }
  ];

  return (
    <section className="w-full py-1 pb-0 sm:py-2 bg-white relative overflow-hidden" id="services">
   

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Sophisticated Services Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-6 py-3 bg-gray-50 rounded-full text-sm font-medium mb-8 shadow-sm border border-gray-100">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold mr-4" style={{backgroundColor: '#7A2E1D', color: 'white'}}>03</span>
              <span style={{color: '#1C1C1C'}} className="font-semibold">Expertise & Solutions</span>
            </div>
            
           
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4">
              From architectural vision to final execution, we deliver integrated solutions that redefine spaces 
              across residential, commercial, and hospitality environments.
            </p>
            <div className="w-24 h-1 mx-auto rounded-full" style={{backgroundColor: '#7A2E1D'}}></div>
          </div>
          
          {/* Interactive Services Showcase */}
          <div className="mb-20">
            {/* Service Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`group relative px-8 py-4 rounded-full font-semibold transition-all duration-500 ${
                    activeService === index 
                      ? 'text-white shadow-xl transform scale-105' 
                      : 'text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-200'
                  }`}
                  style={{
                    backgroundColor: activeService === index ? '#7A2E1D' : undefined
                  }}
                >
                  <div className="flex items-center">
                    <span className="mr-3 text-sm font-bold opacity-60">{service.id}</span>
{React.createElement(service.icon, { className: "w-5 h-5 mr-3" })}
                    {service.title}
                  </div>
                  {activeService === index && (
                    <div className="absolute inset-0 rounded-full animate-pulse" style={{backgroundColor: 'rgba(122, 46, 29, 0.3)'}}></div>
                  )}
                </button>
              ))}
            </div>

            {/* Active Service Display */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="grid lg:grid-cols-2 gap-0 min-h-[600px]">
                {/* Service Image */}
                <div className="relative h-full min-h-[600px] overflow-hidden">
                  <img 
                    key={activeService} // Force re-render on change
                    src={services[activeService].image} 
                    alt={services[activeService].title}
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Floating Service Badge */}
                  <div className="absolute top-8 left-8">
                    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30">
                      <div className="flex items-center text-white">
{React.createElement(services[activeService].icon, { className: "w-8 h-8 mr-3" })}
                        <div>
                          <div className="font-bold text-lg">{services[activeService].title}</div>
                          <div className="text-sm opacity-90">{services[activeService].subtitle}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Professional Stats Overlay */}
                  <div className="absolute bottom-8 right-8">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="font-bold text-lg" style={{color: '#7A2E1D'}}>{services[activeService].stats.projects}</div>
                          <div className="text-xs text-gray-600">Projects</div>
                        </div>
                        <div>
                          <div className="font-bold text-lg" style={{color: '#7A2E1D'}}>{services[activeService].stats.timeline}</div>
                          <div className="text-xs text-gray-600">Timeline</div>
                        </div>
                        <div>
                          <div className="font-bold text-lg" style={{color: '#7A2E1D'}}>{services[activeService].stats.satisfaction}</div>
                          <div className="text-xs text-gray-600">Satisfaction</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Service Content */}
                <div className="p-12 flex flex-col justify-center">
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <span className="text-2xl font-bold mr-4 opacity-30" style={{color: '#7A2E1D'}}>{services[activeService].id}</span>
                      <div>
                        <h3 className="text-3xl font-bold mb-2" style={{color: '#1C1C1C'}}>{services[activeService].title}</h3>
                        <p className="text-lg font-semibold" style={{color: '#7A2E1D'}}>{services[activeService].subtitle}</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    {services[activeService].description}
                  </p>

                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {services[activeService].detailedDescription}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {services[activeService].features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 rounded-full mr-3 flex-shrink-0" style={{backgroundColor: '#7A2E1D'}}></div>
                        <span className="font-medium text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <button 
                      className="inline-flex items-center text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                      style={{backgroundColor: '#7A2E1D'}}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5A1E0D'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#7A2E1D'}
                    >
                      Explore Details
                      <ArrowRight className="ml-3 w-5 h-5" />
                    </button>
                    <button className="inline-flex items-center text-gray-700 px-6 py-4 rounded-full font-medium border-2 border-gray-200 hover:border-gray-300 transition-all duration-300">
                      <Play className="mr-2 w-4 h-4" />
                      View Process
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Premium Call to Action Section */}
        
        </div>
      </div>
    </section>
  );
};

export default Services;