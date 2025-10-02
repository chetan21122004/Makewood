import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, MapPin, Ruler, Users, Clock, Star, X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectImage {
  id: number;
  url: string;
  alt: string;
  category: string;
}

interface ProjectData {
  id: number;
  title: string;
  location: string;
  area: string;
  completedOn: string;
  category: string;
  client: string;
  duration: string;
  team: string;
  description: string;
  challenge: string;
  solution: string;
  features: string[];
  images: ProjectImage[];
  mainImage: string;
}

const projectsData: { [key: string]: ProjectData } = {
  "samsung-innovation-center": {
    id: 1,
    title: "Samsung Innovation Center",
    location: "Vasant Kunj, Delhi",
    area: "1,500 sqft",
    completedOn: "April 2024",
    category: "Commercial",
    client: "Samsung India",
    duration: "3 months",
    team: "8 specialists",
    description: "A cutting-edge innovation center designed to foster creativity and technological advancement. The space reflects Samsung's sleek and future-ready identity with sophisticated design elements.",
    challenge: "Creating a space that embodies Samsung's innovative spirit while maintaining functionality for engineering teams and collaborative work.",
    solution: "We implemented a modern design with matte black ceilings, frosted acoustic glass partitions, and flexible workspaces that can adapt to different project needs.",
    features: [
      "Matte black suspended ceilings",
      "Frosted acoustic glass partitions",
      "Flexible collaborative spaces",
      "Advanced lighting systems",
      "Ergonomic workstations",
      "Technology integration zones"
    ],
    images: [
      { id: 1, url: "/projects/India/samsung/1.png", alt: "Samsung Innovation Center Main View", category: "overview" },
      { id: 2, url: "/projects/India/samsung/2.png", alt: "Samsung Innovation Center Workspace", category: "workspace" },
      { id: 3, url: "/projects/India/samsung/3.png", alt: "Samsung Innovation Center Meeting Room", category: "meeting" },
      { id: 4, url: "/projects/India/samsung/4.png", alt: "Samsung Innovation Center Reception", category: "reception" }
    ],
    mainImage: "/projects/India/samsung/1.png"
  },
  "allianz-corporate-office": {
    id: 2,
    title: "Allianz Corporate Office",
    location: "Gurgaon",
    area: "22,500 sqft",
    completedOn: "February 2024",
    category: "Commercial",
    client: "Allianz Group",
    duration: "6 months",
    team: "15 specialists",
    description: "A sophisticated corporate headquarters designed to reflect ALLIANZ Group's legacy of innovation while balancing executive presence with collaborative openness.",
    challenge: "Designing a large-scale corporate space that maintains brand identity while promoting collaboration and productivity across different departments.",
    solution: "We created distinct zones for different functions while maintaining visual connectivity through strategic use of glass, lighting, and open planning concepts.",
    features: [
      "Executive boardrooms",
      "Open collaborative spaces",
      "Private offices with glass partitions",
      "Modern reception area",
      "Employee break areas",
      "Advanced AV systems"
    ],
    images: [
      { id: 1, url: "/projects/India/allianz/1.png", alt: "Allianz Office Main View", category: "overview" },
      { id: 2, url: "/projects/India/allianz/2.png", alt: "Allianz Office Workspace", category: "workspace" },
      { id: 3, url: "/projects/India/allianz/3.png", alt: "Allianz Office Meeting Room", category: "meeting" },
      { id: 4, url: "/projects/India/allianz/4.png", alt: "Allianz Office Reception", category: "reception" }
    ],
    mainImage: "/projects/India/allianz/1.png"
  },
  "dubai-hills-residence": {
    id: 3,
    title: "Dubai Hills Residence",
    location: "Dubai Hills, Dubai",
    area: "5,500 sqft",
    completedOn: "January 2024",
    category: "Residential",
    client: "Private Client",
    duration: "4 months",
    team: "10 specialists",
    description: "A luxury residential project that combines comfort with sophisticated design elements and contemporary living solutions for modern family life.",
    challenge: "Creating a warm, family-friendly environment while maintaining the luxury aesthetic expected in Dubai Hills Estate.",
    solution: "We balanced premium materials with comfortable, livable spaces, incorporating smart home technology and flexible living areas.",
    features: [
      "Smart home integration",
      "Premium material finishes",
      "Open-plan living areas",
      "Master suite with walk-in closet",
      "Modern kitchen with island",
      "Outdoor entertainment area"
    ],
    images: [
      { id: 1, url: "/projects/Dubai/dubaiHills/1.png", alt: "Dubai Hills Living Room", category: "living" },
      { id: 2, url: "/projects/Dubai/dubaiHills/2.png", alt: "Dubai Hills Kitchen", category: "kitchen" },
      { id: 3, url: "/projects/Dubai/dubaiHills/3.png", alt: "Dubai Hills Master Bedroom", category: "bedroom" },
      { id: 4, url: "/projects/Dubai/dubaiHills/4.png", alt: "Dubai Hills Dining Area", category: "dining" }
    ],
    mainImage: "/projects/Dubai/dubaiHills/1.png"
  },
  "furjan-villa": {
    id: 4,
    title: "Furjan Villa",
    location: "Furjan, Dubai",
    area: "6,500 sqft",
    completedOn: "March 2024",
    category: "Residential",
    client: "Private Client",
    duration: "5 months",
    team: "12 specialists",
    description: "A sophisticated villa design that redefines lifestyle, comfort, and belonging with premium finishes and modern aesthetics creating warm and elegant living spaces.",
    challenge: "Designing a large villa that feels intimate and welcoming while showcasing luxury and sophistication throughout.",
    solution: "We created distinct zones for family life, entertainment, and relaxation, using warm materials and sophisticated lighting to create ambiance.",
    features: [
      "Grand entrance foyer",
      "Formal and informal living areas",
      "Gourmet kitchen with butler's pantry",
      "Master suite with spa-like bathroom",
      "Home office and library",
      "Outdoor pool and entertainment area"
    ],
    images: [
      { id: 1, url: "/projects/Dubai/furjanDubai/1.png", alt: "Furjan Villa Exterior", category: "exterior" },
      { id: 2, url: "/projects/Dubai/furjanDubai/2.png", alt: "Furjan Villa Living Room", category: "living" },
      { id: 3, url: "/projects/Dubai/furjanDubai/3.png", alt: "Furjan Villa Kitchen", category: "kitchen" },
      { id: 4, url: "/projects/Dubai/furjanDubai/4.png", alt: "Furjan Villa Master Bedroom", category: "bedroom" }
    ],
    mainImage: "/projects/Dubai/furjanDubai/1.png"
  },
  "michael-page-office": {
    id: 5,
    title: "Michael Page Office",
    location: "Bengaluru",
    area: "6,500 sqft",
    completedOn: "January 2023",
    category: "Commercial",
    client: "Michael Page",
    duration: "4 months",
    team: "10 specialists",
    description: "Designed for quiet focus and discreet collaboration, reflecting hospitality-grade aesthetics for high-stakes interactions in the recruitment industry.",
    challenge: "Creating an environment that supports both confidential client meetings and collaborative team work while maintaining professional elegance.",
    solution: "We incorporated acoustic solutions, private meeting rooms, and flexible spaces with hospitality-inspired design elements.",
    features: [
      "Acoustic treatment throughout",
      "Private consultation rooms",
      "Open collaboration areas",
      "Executive meeting rooms",
      "Reception and waiting area",
      "Hospitality-grade finishes"
    ],
    images: [
      { id: 1, url: "/projects/India/michaelPg/1.png", alt: "Michael Page Office Overview", category: "overview" },
      { id: 2, url: "/projects/India/michaelPg/2.png", alt: "Michael Page Office Meeting Room", category: "meeting" },
      { id: 3, url: "/projects/India/michaelPg/3.png", alt: "Michael Page Office Workspace", category: "workspace" },
      { id: 4, url: "/projects/India/michaelPg/4.png", alt: "Michael Page Office Reception", category: "reception" }
    ],
    mainImage: "/projects/India/michaelPg/1.png"
  },
  "city-walk-apartment": {
    id: 6,
    title: "City Walk Apartment",
    location: "City Walk, Dubai",
    area: "2,200 sqft",
    completedOn: "December 2023",
    category: "Residential",
    client: "Private Client",
    duration: "3 months",
    team: "8 specialists",
    description: "Modern apartment design with emphasis on natural light and contemporary living with premium interior finishing in Dubai's vibrant City Walk district.",
    challenge: "Maximizing natural light and creating spacious feel in an urban apartment while maintaining privacy and comfort.",
    solution: "We used light colors, strategic mirror placement, and open-plan design to enhance the sense of space while incorporating smart storage solutions.",
    features: [
      "Open-plan living design",
      "Floor-to-ceiling windows",
      "Smart storage solutions",
      "Modern kitchen with breakfast bar",
      "Luxurious master bathroom",
      "Balcony with city views"
    ],
    images: [
      { id: 1, url: "/projects/Dubai/cityWalkDubai/1.png", alt: "City Walk Apartment Living Area", category: "living" },
      { id: 2, url: "/projects/Dubai/cityWalkDubai/2.png", alt: "City Walk Apartment Kitchen", category: "kitchen" },
      { id: 3, url: "/projects/Dubai/cityWalkDubai/3.png", alt: "City Walk Apartment Bedroom", category: "bedroom" },
      { id: 4, url: "/projects/Dubai/cityWalkDubai/4.png", alt: "City Walk Apartment Bathroom", category: "bathroom" }
    ],
    mainImage: "/projects/Dubai/cityWalkDubai/1.png"
  }
};

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const project = slug ? projectsData[slug] : null;

  useEffect(() => {
    if (!project) {
      navigate('/404');
    }
  }, [project, navigate]);

  if (!project) {
    return null;
  }

  const categories = ["all", ...Array.from(new Set(project.images.map(img => img.category)))];
  const filteredImages = selectedCategory === "all" 
    ? project.images 
    : project.images.filter(img => img.category === selectedCategory);

  const openGallery = (index: number) => {
    setSelectedImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Professional Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-7xl mx-auto py-8">
            {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 mb-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Portfolio
            </button>

            {/* Project Header */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium mb-6">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold mr-3" style={{backgroundColor: '#7A2E1D', color: 'white'}}>
                    {project.id.toString().padStart(2, '0')}
                  </span>
                  <span style={{color: '#1C1C1C'}}>{project.category}</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight" style={{color: '#1C1C1C'}}>
                  {project.title}
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Project Quick Info */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-5 h-5 mr-3" style={{color: '#7A2E1D'}} />
                    <div>
                      <div className="text-sm text-gray-500">Location</div>
                      <div className="font-medium">{project.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Ruler className="w-5 h-5 mr-3" style={{color: '#7A2E1D'}} />
                    <div>
                      <div className="text-sm text-gray-500">Area</div>
                      <div className="font-medium">{project.area}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Calendar className="w-5 h-5 mr-3" style={{color: '#7A2E1D'}} />
                    <div>
                      <div className="text-sm text-gray-500">Completed</div>
                      <div className="font-medium">{project.completedOn}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="w-5 h-5 mr-3" style={{color: '#7A2E1D'}} />
                    <div>
                      <div className="text-sm text-gray-500">Duration</div>
                      <div className="font-medium">{project.duration}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Project Image */}
              <div className="relative">
                <img 
                  src={project.mainImage} 
                  alt={project.title}
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details Section */}
      <div className="py-16 lg:py-24">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-7xl mx-auto">
            
            {/* Project Stats */}
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <Users className="w-8 h-8 mx-auto mb-4" style={{color: '#7A2E1D'}} />
                <div className="text-2xl font-bold mb-2" style={{color: '#1C1C1C'}}>{project.team}</div>
                <div className="text-sm text-gray-600">Team Size</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <Ruler className="w-8 h-8 mx-auto mb-4" style={{color: '#7A2E1D'}} />
                <div className="text-2xl font-bold mb-2" style={{color: '#1C1C1C'}}>{project.area}</div>
                <div className="text-sm text-gray-600">Total Area</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <Clock className="w-8 h-8 mx-auto mb-4" style={{color: '#7A2E1D'}} />
                <div className="text-2xl font-bold mb-2" style={{color: '#1C1C1C'}}>{project.duration}</div>
                <div className="text-sm text-gray-600">Duration</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <Star className="w-8 h-8 mx-auto mb-4" style={{color: '#7A2E1D'}} />
                <div className="text-2xl font-bold mb-2" style={{color: '#1C1C1C'}}>{project.client}</div>
                <div className="text-sm text-gray-600">Client</div>
              </div>
            </div>

            {/* Project Story */}
            <div className="grid lg:grid-cols-2 gap-16 mb-20">
              <div>
                <h2 className="text-3xl font-bold mb-8" style={{color: '#1C1C1C'}}>The Challenge</h2>
                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                  {project.challenge}
                </p>
                
                <h3 className="text-2xl font-bold mb-6" style={{color: '#1C1C1C'}}>Our Solution</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {project.solution}
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-8" style={{color: '#1C1C1C'}}>Key Features</h3>
                <div className="space-y-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" style={{backgroundColor: '#7A2E1D'}}></div>
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-6" style={{color: '#1C1C1C'}}>Project Gallery</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                  Explore the detailed views of this project showcasing our craftsmanship and attention to detail.
                </p>
                
                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-6 py-2 rounded-full font-medium transition-all duration-300 capitalize`}
                      style={{
                        backgroundColor: selectedCategory === category ? '#7A2E1D' : 'white',
                        color: selectedCategory === category ? 'white' : '#6B7280',
                        border: selectedCategory === category ? 'none' : '1px solid #E5E7EB'
                      }}
                    >
                      {category === 'all' ? 'All Images' : category}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Gallery Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredImages.map((image, index) => (
                  <div 
                    key={image.id} 
                    className="relative group cursor-pointer overflow-hidden rounded-2xl"
                    onClick={() => openGallery(index)}
                  >
                    <img 
                      src={image.url} 
                      alt={image.alt}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm font-medium capitalize">{image.category}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gray-50 rounded-3xl p-12">
              <h3 className="text-3xl font-bold mb-6" style={{color: '#1C1C1C'}}>
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can bring your vision to life with the same attention to detail and excellence.
              </p>
              <button 
                onClick={() => navigate('/contact')}
                className="inline-flex items-center px-8 py-4 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                style={{backgroundColor: '#7A2E1D'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5A1E0D'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#7A2E1D'}
              >
                Get Your Free Consultation
                <ArrowRight className="ml-3 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeGallery}
            className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-8 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-8 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          
          <div className="max-w-5xl max-h-[90vh] mx-8">
            <img 
              src={filteredImages[selectedImageIndex]?.url} 
              alt={filteredImages[selectedImageIndex]?.alt}
              className="w-full h-full object-contain"
            />
            <div className="text-center mt-4">
              <p className="text-white text-lg font-medium">
                {filteredImages[selectedImageIndex]?.alt}
              </p>
              <p className="text-gray-400 text-sm mt-2">
                {selectedImageIndex + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
