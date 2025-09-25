import React from "react";
import { ArrowRight, Users, Award, Globe, Clock, Eye, Target, Heart, Building2, Zap, Shield } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="w-full py-16 sm:py-24 bg-white" id="about">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero About Section */}
          <div className="relative mb-20">
            <div 
              className="relative py-20 rounded-3xl overflow-hidden"
              style={{
                backgroundImage: 'linear-gradient(135deg, rgba(122, 46, 29, 0.95) 0%, rgba(28, 28, 28, 0.85) 100%), url("/projects/Dubai/dubaiHills/3.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="relative z-10 text-center text-white">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium mb-8">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold mr-3" style={{backgroundColor: '#7A2E1D'}}>02</span>
                  About Makewood
                </div>
                
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="block">Precision in Design.</span>
                  <span className="block" style={{color: '#7A2E1D'}}>Power in Execution.</span>
                </h2>
                
                <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                  Crafting exceptional spaces with two decades of expertise, advanced manufacturing facilities, 
                  and an unwavering commitment to excellence across Dubai and India.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            
            {/* Content Side */}
            <div className="animate-on-scroll">
              <h3 className="text-3xl font-bold mb-6" style={{color: '#1C1C1C'}}>
                Transforming Spaces, Elevating Lives
              </h3>
              
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                At MakeWood, we provide turnkey interior solutions that seamlessly integrate civil works, interior 
                finishing, and MEP services under one executional vision. Our advanced factories in India and 
                Dubai enable us to manufacture both bespoke furniture and modular systems with precision.
              </p>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                For residences, our interiors are designed with empathy and personalization—balancing 
                ergonomics, comfort, and timeless aesthetics. In commercial projects, we focus on 
                high-performance environments that optimize productivity and long-term value.
              </p>

              {/* Professional Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-2xl border-l-4" style={{borderColor: '#7A2E1D'}}>
                  <Clock className="w-8 h-8 mb-3" style={{color: '#7A2E1D'}} />
                  <div className="text-3xl font-bold mb-1" style={{color: '#1C1C1C'}}>20+</div>
                  <div className="text-sm text-gray-600 font-medium">Years of Excellence</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border-l-4" style={{borderColor: '#7A2E1D'}}>
                  <Award className="w-8 h-8 mb-3" style={{color: '#7A2E1D'}} />
                  <div className="text-3xl font-bold mb-1" style={{color: '#1C1C1C'}}>500+</div>
                  <div className="text-sm text-gray-600 font-medium">Projects Delivered</div>
                </div>
              </div>
              
              <a 
                href="#portfolio" 
                className="inline-flex items-center px-8 py-4 text-white rounded-full font-semibold transition-all duration-300 group shadow-lg hover:shadow-xl hover:scale-105"
                style={{backgroundColor: '#7A2E1D'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5A1E0D'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#7A2E1D'}
              >
                Explore Our Projects
                <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            
            {/* Images Side */}
            <div className="animate-on-scroll">
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/projects/India/allianz/2.png" 
                    alt="Makewood luxury interior design" 
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                {/* Floating Cards */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border-2 border-gray-100">
                  <div className="flex items-center space-x-3">
                    <Building2 className="w-6 h-6" style={{color: '#7A2E1D'}} />
                    <div>
                      <div className="text-sm font-bold" style={{color: '#1C1C1C'}}>Dubai & India</div>
                      <div className="text-xs text-gray-600">Manufacturing Hubs</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border-2 border-gray-100">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-6 h-6" style={{color: '#7A2E1D'}} />
                    <div>
                      <div className="text-sm font-bold" style={{color: '#1C1C1C'}}>Global Reach</div>
                      <div className="text-xs text-gray-600">Premium Quality</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Vision, Mission, Values */}
          <div className="bg-gray-50 rounded-3xl p-12 mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4" style={{color: '#1C1C1C'}}>Our Foundation</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Built on strong values and driven by a clear vision for the future of interior design
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="animate-on-scroll group text-center">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#7A2E1D'}}>
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-4" style={{color: '#1C1C1C'}}>Vision</h4>
                  <p className="text-gray-600 leading-relaxed">
                    To be the pioneers and most preferred partners in interior fit-out and furniture 
                    manufacturing industry, setting new standards for excellence.
                  </p>
                </div>
              </div>
              
              <div className="animate-on-scroll group text-center">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#1C1C1C'}}>
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-4" style={{color: '#1C1C1C'}}>Mission</h4>
                  <p className="text-gray-600 leading-relaxed">
                    To provide value-added interior build expertise by creating inspiring and innovative 
                    workplaces, residential, and commercial spaces that exceed expectations.
                  </p>
                </div>
              </div>
              
              <div className="animate-on-scroll group text-center">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#7A2E1D'}}>
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-4" style={{color: '#1C1C1C'}}>Values</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Customer First, Respect, Safety, Commitment, Excellence, and our dedication to 
                    exceptional service and teamwork in everything we do.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-12" style={{color: '#1C1C1C'}}>Why Choose Makewood?</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-gray-200 transition-colors duration-300 group">
                <Zap className="w-10 h-10 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" style={{color: '#7A2E1D'}} />
                <h4 className="text-lg font-semibold mb-3" style={{color: '#1C1C1C'}}>Turnkey Excellence</h4>
                <p className="text-gray-600">Complete interior solutions from concept to completion under one roof with unmatched quality.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-gray-200 transition-colors duration-300 group">
                <Building2 className="w-10 h-10 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" style={{color: '#7A2E1D'}} />
                <h4 className="text-lg font-semibold mb-3" style={{color: '#1C1C1C'}}>Global Manufacturing</h4>
                <p className="text-gray-600">Advanced manufacturing facilities in both India and Dubai ensuring premium quality at scale.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-gray-200 transition-colors duration-300 group">
                <Shield className="w-10 h-10 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" style={{color: '#7A2E1D'}} />
                <h4 className="text-lg font-semibold mb-3" style={{color: '#1C1C1C'}}>Proven Track Record</h4>
                <p className="text-gray-600">Two decades of excellence with 500+ successful projects and satisfied clients worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;