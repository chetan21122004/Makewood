import React, { useState, useEffect, useCallback } from "react";
import { ArrowRight, Users, Award, Globe, Clock, Eye, Target, Heart, Building2, Zap, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import AutoPlay from 'embla-carousel-autoplay';

const VisionCard = ({ title, description, icon: Icon, image }) => (
  <div 
    className="relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 text-white transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl h-full"
    style={{
      background: 'linear-gradient(135deg, #7A2E1D 0%, #5A1E0D 100%)',
      backgroundImage: `url("${image}")`,
      backgroundBlendMode: 'overlay',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent"></div>
    <div className="relative z-10">
      <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-sm mb-4 sm:mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
      </div>
      <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{title}</h4>
      <p className="text-white/90 leading-relaxed text-sm sm:text-base">{description}</p>
      <div className="mt-4 sm:mt-6 w-10 sm:w-12 h-1 bg-white/40 rounded-full group-hover:w-16 sm:group-hover:w-20 transition-all duration-300"></div>
    </div>
  </div>
);

const AboutUs = () => {
  const autoplayOptions = {
    delay: 3000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      slidesToScroll: 1,
    },
    [AutoPlay(autoplayOptions)]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const visionCards = [
    {
      title: "Vision",
      description: "To be the pioneers and most preferred partners in interior fit-out and furniture manufacturing industry, setting new standards for excellence and innovation.",
      icon: Eye,
      image: "/projects/Dubai/furjanDubai/2.png"
    },
    {
      title: "Mission",
      description: "To provide value-added interior build expertise by creating inspiring and innovative workplaces, residential, and commercial spaces that exceed expectations.",
      icon: Target,
      image: "/projects/India/samsung/2.png"
    },
    {
      title: "Values",
      description: "Customer First, Respect, Safety, Commitment, Excellence, and our dedication to exceptional service and teamwork in everything we do.",
      icon: Heart,
      image: "/projects/India/allianz/3.png"
    }
  ];
  return (
    <section className="w-full py-16 sm:py-14 bg-white" id="about">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-7xl mx-auto">
          
          {/* About Us Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium mb-6">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold mr-3" style={{backgroundColor: '#7A2E1D', color: 'white'}}>02</span>
              <span style={{color: '#1C1C1C'}}>About Makewood</span>
            </div>
          
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Crafting exceptional spaces with precision, innovation, and two decades of unwavering commitment to excellence.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
            
            {/* Content Side */}
            <div className="animate-on-scroll">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" style={{color: '#1C1C1C'}}>
                Transforming Spaces, Elevating Lives
              </h3>
              
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                At MakeWood, we provide turnkey interior solutions that seamlessly integrate civil works, interior 
                finishing, and MEP services under one executional vision. Our advanced factories in India and 
                Dubai enable us to manufacture both bespoke furniture and modular systems with precision.
              </p>
              
              <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                For residences, our interiors are designed with empathy and personalization—balancing 
                ergonomics, comfort, and timeless aesthetics. In commercial projects, we focus on 
                high-performance environments that optimize productivity and long-term value.
              </p>

              <a 
                href="#portfolio" 
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-white rounded-full font-semibold transition-all duration-300 group shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"
                style={{backgroundColor: '#7A2E1D'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5A1E0D'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#7A2E1D'}
              >
                Explore Our Projects
                <ArrowRight className="ml-2 sm:ml-3 w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            
            {/* Images Side */}
            <div className="animate-on-scroll mt-6 lg:mt-0">
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
                  <img 
                    src="/bgimgs/1.JPG" 
                    alt="Makewood luxury interior design" 
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                {/* Floating Cards */}
                <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl border-2 border-gray-100">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Building2 className="w-5 sm:w-6 h-5 sm:h-6" style={{color: '#7A2E1D'}} />
                    <div>
                      <div className="text-xs sm:text-sm font-bold" style={{color: '#1C1C1C'}}>Dubai & India</div>
                      <div className="text-[10px] sm:text-xs text-gray-600">Manufacturing Hubs</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl border-2 border-gray-100">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Globe className="w-5 sm:w-6 h-5 sm:h-6" style={{color: '#7A2E1D'}} />
                    <div>
                      <div className="text-xs sm:text-sm font-bold" style={{color: '#1C1C1C'}}>Global Reach</div>
                      <div className="text-[10px] sm:text-xs text-gray-600">Premium Quality</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Vision, Mission, Values - Redesigned */}
          <div className="relative mb-12 sm:mb-16">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, #7A2E1D 0%, transparent 50%), 
                                 radial-gradient(circle at 75% 75%, #1C1C1C 0%, transparent 50%)`,
                backgroundSize: '300px 300px, 200px 200px'
              }}></div>
            </div>

            <div className="relative">
              <div className="text-center mb-10 sm:mb-16">
              
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" style={{color: '#1C1C1C'}}>
                  Built on Excellence,<br />
                  <span style={{color: '#7A2E1D'}}>Driven by Purpose</span>
                </h3>
                <p className="text-gray-600 max-w-4xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-4">
                  Three pillars that define our commitment to crafting exceptional spaces and delivering 
                  unparalleled service to clients across the globe.
                </p>
              </div>
              
              {/* Mobile Carousel */}
              <div className="md:hidden relative px-4">
                <div className="overflow-hidden" ref={emblaRef}>
                  <div className="flex">
                    {visionCards.map((card) => (
                      <div key={card.title} className="flex-[0_0_100%] min-w-0 pl-4 first:pl-0">
                        <div className="animate-on-scroll group">
                          <VisionCard {...card} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Carousel Controls */}
                <button 
                  onClick={scrollPrev}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-gray-700 shadow-lg z-10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={scrollNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-gray-700 shadow-lg z-10"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Desktop Grid */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {visionCards.map((card) => (
                  <div key={card.title} className="animate-on-scroll group">
                    <VisionCard {...card} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="text-center px-4 sm:px-0">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12" style={{color: '#1C1C1C'}}>Why Choose Makewood?</h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl border-2 border-gray-100 hover:border-gray-200 transition-colors duration-300 group">
                <Zap className="w-8 sm:w-10 h-8 sm:h-10 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" style={{color: '#7A2E1D'}} />
                <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3" style={{color: '#1C1C1C'}}>Turnkey Excellence</h4>
                <p className="text-gray-600 text-sm sm:text-base">Complete interior solutions from concept to completion under one roof with unmatched quality.</p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl border-2 border-gray-100 hover:border-gray-200 transition-colors duration-300 group">
                <Building2 className="w-8 sm:w-10 h-8 sm:h-10 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" style={{color: '#7A2E1D'}} />
                <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3" style={{color: '#1C1C1C'}}>Global Manufacturing</h4>
                <p className="text-gray-600 text-sm sm:text-base">Advanced manufacturing facilities in both India and Dubai ensuring premium quality at scale.</p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl border-2 border-gray-100 hover:border-gray-200 transition-colors duration-300 group">
                <Shield className="w-8 sm:w-10 h-8 sm:h-10 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" style={{color: '#7A2E1D'}} />
                <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3" style={{color: '#1C1C1C'}}>Proven Track Record</h4>
                <p className="text-gray-600 text-sm sm:text-base">Two decades of excellence with 500+ successful projects and satisfied clients worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;