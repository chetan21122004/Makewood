import React, { useEffect, useCallback } from "react";
import { Star, Quote } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import AutoPlay from 'embla-carousel-autoplay';

const ClientsTestimonials = () => {
  const clients = [
    { name: "Samsung", logo: "/clientsLogo/cheilx.png" },
    { name: "Bharti AXA", logo: "/clientsLogo/bhartiAxa.jpeg" },
    { name: "HCL", logo: "/clientsLogo/HCL.png" },
    { name: "JLL", logo: "/clientsLogo/jll.png" },
    { name: "Qualitest", logo: "/clientsLogo/qualitest.png" },
    { name: "Savills", logo: "/clientsLogo/savills.png" },
    { name: "NBCC", logo: "/clientsLogo/nbcc.png" },
    { name: "Xebia", logo: "/clientsLogo/xebia.webp" },
  ];

  // Duplicate clients for infinite effect
  const infiniteClients = [...clients, ...clients];

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
      containScroll: 'trimSnaps',
    },
    [AutoPlay(autoplayOptions)]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        // Optional: Add any callback logic here
      });
    }
  }, [emblaApi]);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Project Manager",
      company: "Allianz Group",
      rating: 5,
      text: "Makewood delivered exceptional quality on our 22,500 sqft corporate office. Their attention to detail and ability to meet tight deadlines while maintaining premium standards was impressive. The team's professionalism throughout the project was outstanding."
    },
    {
      id: 2,
      name: "Ahmed Al Rashid",
      position: "Property Developer",
      company: "Dubai Hills Estate",
      rating: 5,
      text: "The residential project in Dubai Hills exceeded our expectations. Makewood's ability to blend luxury with functionality while respecting our timeline and budget made them our preferred partner for subsequent projects."
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      position: "Facilities Head",
      company: "Samsung India",
      rating: 5,
      text: "The innovation center project showcased Makewood's technical expertise and design capabilities. They successfully created a space that reflects our brand identity while ensuring optimal functionality for our engineering teams."
    }
  ];

  return (
    <section className="w-full py-6 pb-0 sm:py-10 bg-white" id="testimonials">



   {/* Client Logos - Professional Infinite Slider */}
   <div className="mb-20 animate-on-scroll">
            <div className="relative">
              {/* Gradient overlays for seamless infinite effect */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
              
              <div className="bg-white border rounded-3xl p-10 overflow-hidden ">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-3" style={{color: '#1C1C1C'}}>Trusted by Leading Brands</h3>
                  <p className="text-gray-600">Join 200+ satisfied clients who chose Makewood for their interior transformations</p>
                </div>
                
                <div className="embla relative" ref={emblaRef}>
                  <div className="embla__container flex">
                    {infiniteClients.map((client, index) => (
                      <div 
                        key={`${client.name}-${index}`} 
                        className="embla__slide flex-none w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/7 px-4"
                      >
                        <div className="group cursor-pointer h-24 flex items-center justify-center">
                          <div className="  transition-all duration-500 hover:shadow-lg hover:-translate-y-2 w-full h-full flex items-center justify-center group-hover:scale-105">
                            <img 
                              src={client.logo} 
                              alt={`${client.name} logo`}
                              className="max-h-16 max-w-full object-contain transition-all duration-500 opacity-70 group-hover:opacity-100"
                              style={{
                                filter: 'brightness(0.8) contrast(1.1)',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.filter = 'brightness(1) contrast(1)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.filter = 'brightness(0.8) contrast(1.1)';
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Professional indicators */}
                <div className="flex justify-center mt-8 space-x-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <div className="w-3 h-3 rounded-full border-2 border-gray-300 animate-pulse" style={{borderColor: '#7A2E1D', animationDuration: '2s'}}></div>
                    <span className="font-medium">200+ Trusted Partners</span>
                  </div>
                  <div className="w-px h-4 bg-gray-300 mx-4"></div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <div className="w-3 h-3 rounded-full border-2 border-gray-300 animate-pulse" style={{borderColor: '#7A2E1D', animationDuration: '2.5s', animationDelay: '0.5s'}}></div>
                    <span className="font-medium">15+ Years Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          




      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium mb-6">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold mr-3" style={{backgroundColor: '#7A2E1D', color: 'white'}}>05</span>
              <span style={{color: '#1C1C1C'}}>Client Success</span>
            </div>
            
       
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're proud to have partnered with industry leaders across Dubai and India, 
              delivering exceptional results that exceed expectations.
            </p>
          </div>
          
       
          {/* Testimonials */}
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="animate-on-scroll">
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 mb-4" style={{color: '#7A2E1D'}} />
                  
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: 'rgba(122, 46, 29, 0.1)'}}>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{backgroundColor: '#7A2E1D'}}>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.position}</div>
                      <div className="text-sm font-medium" style={{color: '#7A2E1D'}}>{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center animate-on-scroll">
            <div className="rounded-2xl p-8 " style={{background: 'linear-gradient(to right, rgba(122, 46, 29, 0.05), rgba(122, 46, 29, 0.1))'}}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Join Our Satisfied Clients
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Experience the Makewood difference. Let us transform your space with the same 
                precision and excellence that our clients have come to trust.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 text-white rounded-full font-medium transition-colors duration-300"
                style={{backgroundColor: '#7A2E1D'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5A1E0D'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#7A2E1D'}
              >
                Get Your Quote Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsTestimonials;