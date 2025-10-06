import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";

const ClientLogos = () => {
  const clients = [
    { name: "Samsung", logo: "/clientsLogo/cheilx.png" },
    { name: "Bharti AXA", logo: "/clientsLogo/bhartiAxa.jpeg" },
    { name: "HCL", logo: "/clientsLogo/HCL.png" },
    { name: "JLL", logo: "/clientsLogo/jll.png" },
    { name: "Qualitest", logo: "/clientsLogo/qualitest.png" },
    { name: "Savills", logo: "/clientsLogo/savills.png" },
    { name: "NBCC", logo: "/clientsLogo/nbcc.png" },
    { name: "Xebia", logo: "/clientsLogo/xebia.webp" },
    { name: "Lifelong", logo: "/clientsLogo/lifelong.png" },
    { name: "Vidyagyan", logo: "/clientsLogo/vidyagyan.jpg" },
    { name: "PM Inter", logo: "/clientsLogo/PM inter.webp" },
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

  return (
    <section className="">
      <div className="">
        <div className="relative">
          {/* Gradient overlays for seamless infinite effect */}
          <div className="absolute left-0 top-0 bottom-0 w-44 bg-gradient-to-r from-white to-transparent   z-10 pointer-events-none"></div>

          <div className="absolute right-0 top-0 bottom-0 w-44 bg-gradient-to-l from-white to-transparent  z-10 pointer-events-none"></div>
          
          <div className="bg-white px-0 overflow-hidden">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-3" style={{color: '#1C1C1C'}}>Trusted by Leading Brands</h3>
              <p className="text-gray-600">Join 200+ satisfied clients who chose Makewood for their interior transformations</p>
            </div>
            
            <div className="embla relative" ref={emblaRef}>
              <div className="embla__container flex">
                {infiniteClients.map((client, index) => (
                  <div 
                    key={`${client.name}-${index}`} 
                    className="embla__slide flex-none w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 px-4"
                  >
                    <div className="group cursor-pointer h-24 flex items-center justify-center">
                      <div className="transition-all duration-500 hover:shadow-lg hover:-translate-y-2 w-full h-full flex items-center justify-center group-hover:scale-105">
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
    </section>
  );
};

export default ClientLogos;