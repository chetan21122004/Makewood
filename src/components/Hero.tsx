
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LottieAnimation from "./LottieAnimation";
import useGSAP from "../hooks/useGSAP";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

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
      className="relative min-h-screen  overflow-hidden"
      id="hero"
    >
      {/* Swiper Carousel Background */}
      <div className="absolute inset-0">
        {/* Mobile: Single image carousel */}
        <div className="lg:hidden h-full">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            speed={800}
            navigation={{
              nextEl: '.swiper-button-next-mobile',
              prevEl: '.swiper-button-prev-mobile',
            }}
            className="h-full w-full"
          >
            <SwiperSlide>
              <div className="w-full h-full min-h-screen relative">
                <img src="/bgimgs/1.JPG" alt="" className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full min-h-screen relative">
                <img src="/bgimgs/2.jpg" alt="" className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full min-h-screen relative">
                <img src="/bgimgs/3.jpg" alt="" className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full min-h-screen relative">
                <img src="/bgimgs/4.jpg" alt="" className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full min-h-screen relative">
                <img src="/bgimgs/5.JPG" alt="" className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
          </Swiper>
          
          {/* Mobile Navigation Buttons */}
          <button className="swiper-button-prev-mobile absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="swiper-button-next-mobile absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Desktop: Two images side by side carousel */}
        <div className="hidden lg:block h-full">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={1000}
            navigation={{
              nextEl: '.swiper-button-next-desktop',
              prevEl: '.swiper-button-prev-desktop',
            }}
            style={{
              filter: 'brightness(1.1) contrast(1.1)',
            }}
            className="h-full w-full"
          >
            <SwiperSlide>
              <div className="flex w-full h-full min-h-screen">
                <div className="w-1/2 h-full relative">
                  <img src="/bgimgs/1.JPG" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="w-1/2 h-full relative">
                  <img src="/bgimgs/2.jpg" alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex w-full h-full min-h-screen">
                <div className="w-1/2 h-full relative">
                  <img src="/bgimgs/3.jpg" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="w-1/2 h-full relative">
                  <img src="/bgimgs/4.jpg" alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex w-full h-full min-h-screen">
                <div className="w-1/2 h-full relative">
                  <img src="/bgimgs/5.JPG" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="w-1/2 h-full relative">
                  <img src="/bgimgs/6.jpg" alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex w-full h-full min-h-screen">
                <div className="w-1/2 h-full relative">
                  <img src="/bgimgs/7.jpg" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="w-1/2 h-full relative">
                  <img src="/bgimgs/8.jpg" alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          
          {/* Desktop Navigation Buttons */}
          <button className="swiper-button-prev-desktop absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-4 rounded-full transition-all duration-300">
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button className="swiper-button-next-desktop absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-4 rounded-full transition-all duration-300">
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Professional Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Subtle brand color overlay */}
        <div className="absolute inset-0 bg-gray-900/10 mix-blend-multiply"></div>

        {/* Sophisticated pattern overlay for texture */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, rgba(254,92,2,0.1) 0%, transparent 50%)`,
            backgroundSize: '300px 300px, 400px 400px'
          }}></div>
        </div>
      </div>


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative sm:top-5 sm:right-14 z-10 flex items-end min-h-screen" ref={containerRef}>
        <div className=" w-fit  gap-8 lg:gap-20 items-center  p-2 sm:pb-6 lg:pb-10">

          {/* Content Section */}
          <div className="text-white  space-y-6 sm:space-y-8 order-2 lg:order-1 bg-black/40 p-4  rounded-2xl  ">
            <div
              className="hero-badge inline-flex items-center px-3 sm:px-4 py-2 bg-white/10s backdrop-blur-sm border border-white/20 rounded-full text-xs sm:text-sm font-medium text-white opacity-0"
            >
              <span className="inline-flex items-center justify-center w-4 sm:w-5 h-4 sm:h-5 rounded-full text-white mr-2 sm:mr-3 text-[10px] sm:text-xs" style={{ backgroundColor: '#7A2E1D' }}>01</span>
              Interior Design & Fitout Excellence
            </div>

            <p
              className="hero-description text-lg sm:text-2xl lg:text-4xl text-gray-200 leading-relaxed   w-full opacity-0"
            >
              Crafting dreams with innovative design.
              <span className="block mt-2 font-medium text-base sm:text-2xl" style={{ color: 'rgba(255, 180, 120, 0.9)' }}>20+ Years | Dubai & India | 500+ Projects</span>
            </p>

            <div
              className="hero-buttons flex flex-col sm:flex-row gap-3 sm:gap-4 opacity-0 w-full sm:w-auto"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-white text-sm sm:text-base font-semibold rounded-full transition-all duration-300 shadow-2xl hover:scale-105 transform w-full sm:w-auto"
                style={{ backgroundColor: '#7A2E1D' }}
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


        </div>


      </div>
    </section>
  );
};

export default Hero;
