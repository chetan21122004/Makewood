import React, { useState } from "react";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const projects = [
    {
      id: 1,
      title: "Samsung Innovation Center",
      location: "Vasant Kunj, Delhi",
      area: "1,500 sqft",
      completedOn: "April 2024",
      category: "commercial",
      image: "/projects/India/samsung/1.png",
      description: "Innovation center supporting engineering agility, reflecting Samsung's sleek and future-ready identity with matte black ceilings and frosted acoustic glass partitions."
    },
    {
      id: 2,
      title: "Allianz Corporate Office",
      location: "Gurgaon",
      area: "22,500 sqft",
      completedOn: "February 2024",
      category: "commercial",
      image: "/projects/India/allianz/1.png",
      description: "Modern corporate space designed to reflect ALLIANZ Group's legacy of innovation—balancing executive presence with collaborative openness."
    },
    {
      id: 3,
      title: "Luxury Residential Villa",
      location: "Furjan, Dubai",
      area: "6,500 sqft",
      completedOn: "March 2024",
      category: "residential",
      image: "/projects/Dubai/furjanDubai/1.png",
      description: "Designing for lifestyle, comfort & belonging with premium finishes and modern aesthetics creating warm and elegant living spaces."
    },
    {
      id: 4,
      title: "Michael Page Office",
      location: "Bengaluru",
      area: "6,500 sqft",
      completedOn: "January 2023",
      category: "commercial",
      image: "/projects/India/michaelPg/1.png",
      description: "Designed for quiet focus and discreet collaboration, reflecting hospitality-grade aesthetics for high-stakes interactions."
    },
    {
      id: 5,
      title: "Dubai Hills Residence",
      location: "Dubai Hills, Dubai",
      area: "5,500 sqft",
      completedOn: "January 2024",
      category: "residential",
      image: "/projects/Dubai/dubaiHills/1.png",
      description: "Luxury residential project combining comfort with sophisticated design elements and contemporary living solutions."
    },
    {
      id: 6,
      title: "City Walk Apartment",
      location: "City Walk, Dubai",
      area: "2,200 sqft",
      completedOn: "December 2023",
      category: "residential",
      image: "/projects/Dubai/cityWalkDubai/1.png",
      description: "Modern apartment design with emphasis on natural light and contemporary living with premium interior finishing."
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
    <section className="w-full py-12 sm:py-20 bg-gray-50" id="portfolio">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium mb-6">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold mr-3" style={{backgroundColor: '#7A2E1D', color: 'white'}}>04</span>
              <span style={{color: '#1C1C1C'}}>Our Portfolio</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              Where Craft Breathes
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our portfolio of exceptional interior projects across Dubai, India, and beyond. 
              Each space tells a unique story of design excellence and precision execution.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300`}
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="animate-on-scroll group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-elegant transition-all duration-500 hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {project.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: '#7A2E1D'}}></div>
                        {project.area}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.completedOn}
                      </div>
                    </div>
                    
                    <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-200 rounded-lg text-gray-700 transition-all duration-300 group"
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
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-on-scroll">
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-4 text-white rounded-full font-medium transition-colors duration-300 group"
              style={{backgroundColor: '#7A2E1D'}}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5A1E0D'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#7A2E1D'}
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;