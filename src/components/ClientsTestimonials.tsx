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
    <section className="w-full py-12 sm:py-20 bg-white" id="testimonials">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="pulse-chip mb-6 inline-flex">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">05</span>
              <span>Client Success</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              Trusted by Leading Brands
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're proud to have partnered with industry leaders across Dubai and India, 
              delivering exceptional results that exceed expectations.
            </p>
          </div>
          
          {/* Client Logos - Infinite Slider */}
          <div className="mb-16 animate-on-scroll">
            <div className="bg-gray-50 rounded-2xl p-8 overflow-hidden">
              <div className="embla relative" ref={emblaRef}>
                <div className="embla__container flex">
                  {infiniteClients.map((client, index) => (
                    <div 
                      key={`${client.name}-${index}`} 
                      className="embla__slide flex-none w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-3"
                    >
                      <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 h-20 flex items-center justify-center group cursor-pointer">
                        <img 
                          src={client.logo} 
                          alt={`${client.name} logo`}
                          className="max-h-12 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Progress indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {clients.map((_, index) => (
                  <div 
                    key={index}
                    className="w-2 h-2 rounded-full bg-gray-300 animate-pulse"
                    style={{ 
                      animationDelay: `${index * 0.5}s`,
                      animationDuration: '2s'
                    }}
                  />
                ))}
              </div>
            </div>
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
                  
                  <Quote className="w-8 h-8 text-pulse-500 mb-4" />
                  
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 bg-pulse-100 rounded-full flex items-center justify-center mr-4">
                      <div className="w-8 h-8 bg-pulse-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.position}</div>
                      <div className="text-sm text-pulse-600 font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center animate-on-scroll">
            <div className="bg-gradient-to-r from-pulse-50 to-pulse-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Join Our Satisfied Clients
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Experience the Makewood difference. Let us transform your space with the same 
                precision and excellence that our clients have come to trust.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-pulse-500 text-white rounded-full font-medium hover:bg-pulse-600 transition-colors duration-300"
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