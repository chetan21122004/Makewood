import React, { useState, useEffect, useCallback } from "react";
import { MapPin, Calendar, ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useEmblaCarousel from 'embla-carousel-react';
import AutoPlay from 'embla-carousel-autoplay';

const ProjectCard = ({ project, navigate }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm h-full">
    <div className="relative overflow-hidden">
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div className="absolute bottom-3 left-3 right-3 text-white">
        <div className="flex items-center text-xs">
          <MapPin className="w-3 h-3 mr-1" />
          {project.location}
        </div>
      </div>
    </div>
    
    <div className="p-4">
      <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-1">{project.title}</h3>
      <p className="text-gray-600 text-xs mb-3 leading-relaxed line-clamp-2">{project.description}</p>
      
      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
        <div className="flex items-center">
          <div className="w-1.5 h-1.5 rounded-full mr-1.5" style={{backgroundColor: '#7A2E1D'}}></div>
          {project.area}
        </div>
        <div className="flex items-center">
          <Calendar className="w-3 h-3 mr-1" />
          {project.completedOn}
        </div>
      </div>
      
      <button 
        onClick={() => navigate(`/project/${project.slug}`)}
        className="w-full flex items-center justify-center px-3 py-2 border border-gray-200 rounded-lg text-gray-700 transition-all duration-300 text-xs"
        style={{ borderColor: '#E5E7EB' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#7A2E1D';
          e.currentTarget.style.color = 'white';
          e.currentTarget.style.borderColor = '#7A2E1D';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = '#374151';
          e.currentTarget.style.borderColor = '#E5E7EB';
        }}>
        View Details
        <ExternalLink className="ml-1.5 w-3 h-3 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  </div>
);

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const navigate = useNavigate();
  
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
  
  const projects = [
    {
      id: 1,
      title: "Samsung Innovation Center",
      location: "Vasant Kunj, Delhi",
      area: "1,500 sqft",
      completedOn: "April 2024",
      category: "commercial",
      image: "/projects/India/samsung/1.png",
      description: "Innovation center supporting engineering agility, reflecting Samsung's sleek and future-ready identity with matte black ceilings and frosted acoustic glass partitions.",
      slug: "samsung-innovation-center"
    },
    {
      id: 2,
      title: "Allianz Corporate Office",
      location: "Gurgaon",
      area: "22,500 sqft",
      completedOn: "February 2024",
      category: "commercial",
      image: "/projects/India/allianz/1.png",
      description: "Modern corporate space designed to reflect ALLIANZ Group's legacy of innovation—balancing executive presence with collaborative openness.",
      slug: "allianz-corporate-office"
    },
    {
      id: 3,
      title: "Furjan Villa",
      location: "Furjan, Dubai",
      area: "6,500 sqft",
      completedOn: "March 2024",
      category: "residential",
      image: "/projects/Dubai/furjanDubai/1.png",
      description: "Designing for lifestyle, comfort & belonging with premium finishes and modern aesthetics creating warm and elegant living spaces.",
      slug: "furjan-villa"
    },
    {
      id: 4,
      title: "Michael Page Office",
      location: "Bengaluru",
      area: "6,500 sqft",
      completedOn: "January 2023",
      category: "commercial",
      image: "/projects/India/michaelPg/1.png",
      description: "Designed for quiet focus and discreet collaboration, reflecting hospitality-grade aesthetics for high-stakes interactions.",
      slug: "michael-page-office"
    },
    {
      id: 5,
      title: "Dubai Hills Residence",
      location: "Dubai Hills, Dubai",
      area: "5,500 sqft",
      completedOn: "January 2024",
      category: "residential",
      image: "/projects/Dubai/dubaiHills/1.png",
      description: "Luxury residential project combining comfort with sophisticated design elements and contemporary living solutions.",
      slug: "dubai-hills-residence"
    },
    {
      id: 6,
      title: "City Walk Apartment",
      location: "City Walk, Dubai",
      area: "2,200 sqft",
      completedOn: "December 2023",
      category: "residential",
      image: "/projects/Dubai/cityWalkDubai/1.png",
      description: "Modern apartment design with emphasis on natural light and contemporary living with premium interior finishing.",
      slug: "city-walk-apartment"
    }
  ];
  
  const filters = [
    { key: "all", label: "All Projects" },
    { key: "residential", label: "Residential" },
    { key: "commercial", label: "Commercial" },
    { key: "hospitality", label: "Hospitality" }
  ];
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="w-full py-6 sm:py-10 bg-white" id="portfolio">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 animate-on-scroll px-4 sm:px-0">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gray-100 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <span className="inline-flex items-center justify-center w-5 sm:w-6 h-5 sm:h-6 rounded-full text-[10px] sm:text-xs font-bold mr-2 sm:mr-3" style={{backgroundColor: '#7A2E1D', color: 'white'}}>04</span>
              <span style={{color: '#1C1C1C'}}>Our Portfolio</span>
            </div>
            
       
            
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8">
              Explore our portfolio of exceptional interior projects across Dubai, India, and beyond. 
              Each space tells a unique story of design excellence and precision execution.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300`}
                  style={{
                    backgroundColor: activeFilter === filter.key ? '#7A2E1D' : 'white',
                    color: activeFilter === filter.key ? 'white' : '#6B7280'
                  }}
                  onMouseEnter={(e) => {
                    if (activeFilter !== filter.key) {
                      e.currentTarget.style.backgroundColor = '#F3F4F6';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeFilter !== filter.key) {
                      e.currentTarget.style.backgroundColor = 'white';
                    }
                  }}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Mobile Carousel */}
          <div className="sm:hidden relative px-4">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {filteredProjects.map((project, index) => (
                  <div key={project.id} className="flex-[0_0_100%] min-w-0 pl-4 first:pl-0">
                    <ProjectCard project={project} navigate={navigate} />
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
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="animate-on-scroll group">
                <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-elegant border  transition-all duration-500 hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center text-xs sm:text-sm">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {project.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-1">{project.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-2">{project.description}</p>
                    
                    <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                      <div className="flex items-center">
                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full mr-1.5 sm:mr-2" style={{backgroundColor: '#7A2E1D'}}></div>
                        {project.area}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {project.completedOn}
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => navigate(`/project/${project.slug}`)}
                      className="w-full flex items-center justify-center px-3 sm:px-4 py-2 border border-gray-200 rounded-lg text-gray-700 transition-all duration-300 text-xs sm:text-sm group"
                      style={{
                        borderColor: '#E5E7EB'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#7A2E1D';
                        e.currentTarget.style.color = 'white';
                        e.currentTarget.style.borderColor = '#7A2E1D';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#374151';
                        e.currentTarget.style.borderColor = '#E5E7EB';
                      }}>
                      View Details
                      <ExternalLink className="ml-1.5 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12 animate-on-scroll px-4 sm:px-0">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-white rounded-full font-medium transition-colors duration-300 group text-sm sm:text-base w-full sm:w-auto"
              style={{backgroundColor: '#7A2E1D'}}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5A1E0D'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#7A2E1D'}
            >
              Start Your Project
              <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;