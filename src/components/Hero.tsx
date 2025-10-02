
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LottieAnimation from "./LottieAnimation";
import useGSAP from "../hooks/useGSAP";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [lottieData, setLottieData] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  const navigate = useNavigate();
  const { fadeInUp, fadeInLeft, fadeInRight, staggerAnimation, createScrollTrigger } = useGSAP();

  // Featured Projects Data
  const featuredProjects = [
    {
      id: 1,
      title: "Dubai Hills Estate",
      subtitle: "Luxury Residential Interior",
      area: "5,500 sqft",
      year: "2024",
      image: "/projects/Dubai/dubaiHills/2.png",
      description: "Premium residential design with contemporary elegance",
      slug: "dubai-hills-residence"
    },
    {
      id: 2,
      title: "Allianz Corporate Office",
      subtitle: "Modern Corporate Excellence",
      area: "22,500 sqft",
      year: "2024",
      image: "/projects/India/allianz/1.png",
      description: "Executive presence with collaborative openness",
      slug: "allianz-corporate-office"
    },
    {
      id: 3,
      title: "Samsung Innovation Center",
      subtitle: "Tech-Forward Design",
      area: "1,500 sqft",
      year: "2024",
      image: "/projects/India/samsung/1.png",
      description: "Engineering agility with future-ready identity",
      slug: "samsung-innovation-center"
    },
    {
      id: 4,
      title: "Furjan Villa",
      subtitle: "Sophisticated Living",
      area: "6,500 sqft",
      year: "2024",
      image: "/projects/Dubai/furjanDubai/1.png",
      description: "Lifestyle, comfort & belonging redefined",
      slug: "furjan-villa"
    }
  ];

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-slider functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % featuredProjects.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [featuredProjects.length]);

  // Navigation functions
  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const goToProject = (index: number) => {
    setCurrentProject(index);
  };

  useEffect(() => {
    fetch('/loop-header.lottie')
      .then(response => response.json())
      .then(data => setLottieData(data))
      .catch(error => console.error("Error loading Lottie animation:", error));

    // GSAP Animations
    fadeInUp(".hero-badge", { delay: 0.2 });
    fadeInUp(".hero-description", { delay: 0.4 });
    fadeInUp(".hero-buttons", { delay: 0.6 });
    fadeInRight(".hero-slider", { delay: 0.8 });
    fadeInUp(".hero-scroll", { delay: 1.2 });
  }, []);

  useEffect(() => {
    // Skip effect on mobile
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !imageRef.current) return;
      
      const {
        left,
        top,
        width,
        height
      } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 2.5}deg) rotateX(${-y * 2.5}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    
    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile]);
  
  useEffect(() => {
    // Skip parallax on mobile
    if (isMobile) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);
  
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden" 
      id="hero" 
    >
      {/* Multi-Image Background Layout */}
      <div className="absolute inset-0 ">
        {/* Dynamic Image Mosaic Background */}
        <div className="absolute inset-0 ">
          {/* Mobile: 2 images side by side */}
          <div className="lg:hidden grid grid-cols-2 h-full gap-1">
            <div 
              className="relative bg-cover bg-center"
              style={{
                backgroundImage: 'url("/bgimgs/1.JPG")',
              }}
            />
            <div 
              className="relative bg-cover bg-center"
              style={{
                backgroundImage: 'url("/bgimgs/2.jpg")',
              }}
            />
          </div>
          
          {/* Laptop/Desktop: 3 images side by side */}
          <div className="hidden lg:grid lg:grid-cols-3 h-full gap-2">
            <div 
              className="relative bg-cover bg-center"
              style={{
                backgroundImage: 'url("/bgimgs/1.JPG")',
              }}
            />
            <div 
              className="relative bg-cover bg-center"
              style={{
                backgroundImage: 'url("/bgimgs/3.jpg")',
              }}
            />
            <div 
              className="relative bg-cover bg-center"
              style={{
                backgroundImage: 'url("/bgimgs/4.jpg")',
              }}
            />
          </div>
          
          {/* Alternative: 5-column layout for ultrawide screens */}
          <div className="hidden 2xl:grid  2xl:grid-cols-5 h-full  lg:hidden">
            <div 
              className="relative bg-cover  bg-center"
              style={{
                backgroundImage: 'url("/bgimgs/1.JPG")',
              }}
            />
            <div 
              className="relative bg-cover bg-center"
              style={{
                backgroundImage: 'url("/bgimgs/2.jpg")',
              }}
            />
            <div 
              className="relative bg-cover bg-center"
              style={{
                backgroundImage: 'url("/bgimgs/3.jpg")',
              }}
            />
            <div 
              className="relative bg-cover bg-center"
              style={{
                backgroundImage: 'url("/bgimgs/4.jpg")',
              }}
            />
            <div 
              className="relative bg-cover bg-center"
              style={{
                backgroundImage: 'url("/bgimgs/5.JPG")',
              }}
            />
          </div>
        </div>
        
        {/* Professional Overlay */}
        <div className="absolute inset-0 bg-gradient  bg-black/60"></div>
        
        {/* Subtle brand color overlay */}
        <div className="absolute inset-0 bg-gray-900/15 mix-blend-multiply"></div>
        
        {/* Sophisticated pattern overlay for texture */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, rgba(254,92,2,0.1) 0%, transparent 50%)`,
            backgroundSize: '300px 300px, 400px 400px'
          }}></div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-pulse-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center min-h-[calc(100vh-80px)] py-12 sm:py-16 lg:py-20">
          
          {/* Content Section */}
          <div className="text-white space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div 
              className="hero-badge inline-flex items-center px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs sm:text-sm font-medium text-white opacity-0"
              >
              <span className="inline-flex items-center justify-center w-4 sm:w-5 h-4 sm:h-5 rounded-full text-white mr-2 sm:mr-3 text-[10px] sm:text-xs" style={{backgroundColor: '#7A2E1D'}}>01</span>
              Interior Design & Fitout Excellence
              </div>
            
            <p 
              className="hero-description text-base sm:text-lg lg:text-2xl text-gray-200 leading-relaxed max-w-2xl opacity-0"
            >
              Transforming visions into reality with precision engineering and innovative design. 
                  <span className="block mt-2 font-medium text-sm sm:text-base" style={{color: 'rgba(255, 180, 120, 0.9)'}}>20+ Years | Dubai & India | 500+ Projects</span>
            </p>
            
            <div 
              className="hero-buttons flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 opacity-0 w-full sm:w-auto"
            >
              <a 
                href="#contact" 
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-white text-sm sm:text-base font-semibold rounded-full transition-all duration-300 shadow-2xl hover:scale-105 transform w-full sm:w-auto"
                style={{backgroundColor: '#7A2E1D'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#5A1E0D';
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(122, 46, 29, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#7A2E1D';
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                }}
              >
                Get Your Quote
                <ArrowRight className="ml-2 sm:ml-3 w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a 
                href="#portfolio" 
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-sm sm:text-base font-semibold rounded-full border-2 border-white/30 hover:border-white/50 transition-all duration-300 w-full sm:w-auto"
              >
                View Projects
                <ArrowRight className="ml-2 sm:ml-3 w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

           
          </div>
          
           {/* Sophisticated Project Slider */}
            <div className="relative order-1 lg:order-2 opacity-0 animate-fade-in mt-8 lg:mt-0" style={{ animationDelay: "0.8s" }}>
              <div className="relative group">
                {/* Main Slider Container */}
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl w-[95%] sm:w-[90%] lg:w-[80%] mx-auto">
                 {/* Slider Track */}
                 <div 
                   className="flex transition-transform duration-700 ease-in-out"
                   style={{ transform: `translateX(-${currentProject * 100}%)` }}
                 >
                   {featuredProjects.map((project, index) => (
                     <div key={project.id} className="min-w-full relative">
                       <img 
                         src={project.image}
                         alt={project.title}
                         className="w-full h-48 sm:h-60 lg:h-72 object-cover transition-transform duration-700"
                         style={{ transformStyle: 'preserve-3d' }} 
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                       
                       {/* Project Info Card */}
                       <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                         <div 
                           className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-xl transform transition-all duration-500 cursor-pointer hover:bg-white"
                           onClick={() => navigate(`/project/${project.slug}`)}
                         >
                           <div className="flex items-center justify-between mb-1 sm:mb-1.5">
                             <h3 className="font-bold text-gray-900 text-sm sm:text-base line-clamp-1">{project.title}</h3>
                             <span className="text-[10px] sm:text-[12px] font-semibold" style={{color: '#7A2E1D'}}>{project.year}</span>
                           </div>
                           <p className="text-gray-600 text-[11px] sm:text-[13px] mb-1 sm:mb-1.5 line-clamp-1">{project.subtitle}</p>
                           <div className="flex items-center justify-between">
                             <span className="text-[10px] sm:text-[12px] font-medium" style={{color: '#7A2E1D'}}>{project.area}</span>
                             <div className="hidden sm:flex items-center space-x-1">
                               <div className="w-1 h-1 rounded-full" style={{backgroundColor: '#7A2E1D'}}></div>
                               <span className="text-[10px] sm:text-[12px] text-gray-500 line-clamp-1">{project.description}</span>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   ))}
                 </div>

                 {/* Navigation Controls */}
                 <button 
                   onClick={prevProject}
                   className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 sm:w-10 h-8 sm:h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 sm:opacity-0 sm:group-hover:opacity-100"
                 >
                   <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5" />
                 </button>
                 <button 
                   onClick={nextProject}
                   className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 sm:w-10 h-8 sm:h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 sm:opacity-0 sm:group-hover:opacity-100"
                 >
                   <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
                 </button>
               </div>


               {/* Elegant Floating Elements */}
               <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 sm:w-20 h-16 sm:h-20 rounded-full blur-xl animate-pulse" style={{background: 'linear-gradient(135deg, rgba(122, 46, 29, 0.2), transparent)'}}></div>
               <div className="absolute -bottom-6 sm:-bottom-8 -left-6 sm:-left-8 w-20 sm:w-28 h-20 sm:h-28 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-2xl"></div>
               
             </div>
           </div>
        </div>

        {/* Sophisticated Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.3s" }}>
          <div className="flex flex-col items-center text-white/60 hover:text-white transition-all duration-300 cursor-pointer group">
            <span className="text-xs sm:text-sm font-medium mb-2 sm:mb-3 group-hover:mb-3 sm:group-hover:mb-4 transition-all duration-300">Discover Excellence</span>
            <div className="relative">
              <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-white/20 group-hover:border-white/40 rounded-full flex justify-center transition-all duration-300">
                <div className="w-1 h-2 sm:h-3 rounded-full mt-2 animate-bounce" style={{backgroundColor: '#7A2E1D'}}></div>
              </div>
              <div className="absolute -inset-1.5 sm:-inset-2 border border-white/10 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
