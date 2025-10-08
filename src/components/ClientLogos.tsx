import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const ClientLogos = () => {
  const clients = Array.from({ length: 35 }, (_, index) => ({
    name: `Client ${index + 1}`,
    logo: `/logos/${index + 1}.png`
  }));

  // Duplicate clients for infinite effect
  const infiniteClients = [...clients, ...clients];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      dragFree: false,
    },
    [
      AutoScroll({
        speed: 2, // Adjust speed (lower = slower)
        startDelay: 0,
        direction: 'forward',
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
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
                      <div className="transition-all duration-500 hover:shadow hover:-translate-y-1 w-full h-full flex items-center justify-center group-hover:scale-105">
                        <img 
                          src={client.logo} 
                          alt={`${client.name} logo`}
                          className="max-h-16 max-w-full object-contain transition-all duration-500 opacity-100"
                          style={{
                            filter: 'brightness(1) contrast(1)',
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