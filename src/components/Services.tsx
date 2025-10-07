import React, { useState, useEffect } from "react";
import { Building, Hammer, Layers, Sofa, Settings, Download, ArrowRight, CheckCircle, Play } from "lucide-react";

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleServiceChange((activeService + 1) % services.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeService]);

  const handleServiceChange = (newIndex: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveService(newIndex);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 500);
  };

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
          <div className="text-center mb-12 sm:mb-16 md:mb-24">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gray-50 rounded-full text-sm font-medium mb-6 sm:mb-8 shadow-sm border border-gray-100">
              <span className="inline-flex items-center justify-center w-6 sm:w-7 h-6 sm:h-7 rounded-full text-xs font-bold mr-3 sm:mr-4" style={{backgroundColor: '#7A2E1D', color: 'white'}}>03</span>
              <span style={{color: '#1C1C1C'}} className="font-semibold">Expertise & Solutions</span>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4">
              From architectural vision to final execution, we deliver integrated solutions that redefine spaces 
              across residential, commercial, and hospitality environments.
            </p>
            <div className="w-16 sm:w-24 h-1 mx-auto rounded-full" style={{backgroundColor: '#7A2E1D'}}></div>
          </div>
          
          {/* Interactive Services Showcase */}
          <div className="mb-2">
            {/* Service Navigation */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => handleServiceChange(index)}
                  className={`group relative px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-500 text-sm sm:text-base ${
                    activeService === index 
                      ? 'text-white  ' 
                      : 'text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-200'
                  }`}
                  style={{
                    backgroundColor: activeService === index ? '#7A2E1D' : undefined
                  }}
                >
                  <div className="flex items-center">
                    <span className="mr-2 sm:mr-3 text-xs sm:text-sm font-bold opacity-60">{service.id}</span>
{React.createElement(service.icon, { className: "w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" })}
                    <span className="hidden sm:inline">{service.title}</span>
                    <span className="sm:hidden">{service.title.split(' ')[0]}</span>
                  </div>
                  {activeService === index && (
                    <div className="absolute inset-0 rounded-full animate-pulse" style={{backgroundColor: 'rgba(122, 46, 29, 0.3)'}}></div>
                  )}
                </button>
              ))}
            </div>

            {/* Active Service Display */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="grid lg:grid-cols-2 gap-0 min-h-[450px]">
                {/* Service Image with Smooth Transition */}
                <div className="relative h-full min-h-[450px] overflow-hidden">
                  <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                    style={{
                      opacity: 1,
                      zIndex: 1
                    }}
                  >
                    <img 
                      key={activeService}
                      src={services[activeService].image} 
                      alt={services[activeService].title}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>
                  
                  {/* Floating Service Badge with Animation */}
                  <div className="absolute top-6 left-6 z-10">
                    <div 
                      className="bg-white/20 backdrop-blur-md rounded-2xl p-3 border border-white/30 transform transition-all duration-700 ease-out"
                      style={{
                        opacity: 1,
                        transform: `translateY(0px)`,
                      }}
                    >
                      <div className="flex items-center text-white">
                        <div className="transform transition-transform duration-500 ease-out">
                          {React.createElement(services[activeService].icon, { 
                            className: "w-6 h-6 mr-2 transition-all duration-500" 
                          })}
                        </div>
                        <div className="transform transition-all duration-500 ease-out">
                          <div className="font-bold text-base">{services[activeService].title}</div>
                          <div className="text-xs opacity-90">{services[activeService].subtitle}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Professional Stats Overlay with Animation */}
                  <div className="absolute bottom-6 right-6 z-10">
                    <div 
                      className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg transform transition-all duration-700 ease-out"
                      style={{
                        opacity: 1,
                        transform: `translateY(0px)`,
                      }}
                    >
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div className="transform transition-all duration-500 ease-out">
                          <div className="font-bold text-base" style={{color: '#7A2E1D'}}>{services[activeService].stats.projects}</div>
                          <div className="text-xs text-gray-600">Projects</div>
                        </div>
                        <div className="transform transition-all duration-500 ease-out delay-100">
                          <div className="font-bold text-base" style={{color: '#7A2E1D'}}>{services[activeService].stats.timeline}</div>
                          <div className="text-xs text-gray-600">Timeline</div>
                        </div>
                        <div className="transform transition-all duration-500 ease-out delay-200">
                          <div className="font-bold text-base" style={{color: '#7A2E1D'}}>{services[activeService].stats.satisfaction}</div>
                          <div className="text-xs text-gray-600">Satisfaction</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Service Content with Smooth Transitions */}
                <div className="p-9 flex flex-col justify-center">
                  <div 
                    className="mb-6 transform transition-all duration-700 ease-out"
                    style={{
                      opacity: isTransitioning ? 0 : 1,
                      transform: isTransitioning ? 'translateY(20px)' : 'translateY(0px)'
                    }}
                  >
                    <div className="flex items-center mb-3">
                      <span 
                        className="text-xl font-bold mr-3 transition-all duration-500" 
                        style={{color: '#7A2E1D'}}
                      >
                        {services[activeService].id}
                      </span>
                      <div className="transform transition-all duration-500 ease-out">
                        <h3 
                          className="text-2xl font-bold mb-1 transition-all duration-500" 
                          style={{color: '#1C1C1C'}}
                        >
                          {services[activeService].title}
                        </h3>
                        <p 
                          className="text-base font-semibold transition-all duration-500" 
                          style={{color: '#7A2E1D'}}
                        >
                          {services[activeService].subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div 
                    className="transform transition-all duration-700 ease-out delay-100"
                    style={{
                      opacity: isTransitioning ? 0 : 1,
                      transform: isTransitioning ? 'translateY(20px)' : 'translateY(0px)'
                    }}
                  >
                    <p className="text-gray-700 mb-4 leading-relaxed text-base transition-all duration-500">
                      {services[activeService].description}
                    </p>

                    <p className="text-gray-600 mb-6 leading-relaxed transition-all duration-500">
                      {services[activeService].detailedDescription}
                    </p>
                  </div>
                  
                  <div 
                    className="grid grid-cols-2 gap-3 mb-6 transform transition-all duration-700 ease-out delay-200"
                    style={{
                      opacity: isTransitioning ? 0 : 1,
                      transform: isTransitioning ? 'translateY(20px)' : 'translateY(0px)'
                    }}
                  >
                    {services[activeService].features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className="flex items-center text-gray-600 transform transition-all duration-500 ease-out"
                        style={{
                          transitionDelay: `${featureIndex * 50}ms`
                        }}
                      >
                        <div 
                          className="w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0 transition-all duration-300" 
                          style={{backgroundColor: '#7A2E1D'}}
                        />
                        <span className="font-medium text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
               </div>
              </div>
            </div>
          </div>
          
        
        </div>
      </div>
    </section>
  );
};

export default Services;