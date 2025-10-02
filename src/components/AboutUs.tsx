import React from "react";
import { ArrowRight, Users, Award, Globe, Clock, Eye, Target, Heart, Building2, Zap, Shield } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="w-full py-16 sm:py-14 bg-white" id="about">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-7xl mx-auto">
          
          {/* About Us Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium mb-6">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold mr-3" style={{backgroundColor: '#7A2E1D', color: 'white'}}>02</span>
              <span style={{color: '#1C1C1C'}}>About Makewood</span>
            </div>
          
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Crafting exceptional spaces with precision, innovation, and two decades of unwavering commitment to excellence.
            </p>
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
          
          {/* Vision, Mission, Values - Redesigned */}
          <div className="relative mb-16">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, #7A2E1D 0%, transparent 50%), 
                                 radial-gradient(circle at 75% 75%, #1C1C1C 0%, transparent 50%)`,
                backgroundSize: '400px 400px, 300px 300px'
              }}></div>
            </div>

            <div className="relative">
              <div className="text-center mb-16">
              
                <h3 className="text-4xl font-bold mb-6" style={{color: '#1C1C1C'}}>
                  Built on Excellence,<br />
                  <span style={{color: '#7A2E1D'}}>Driven by Purpose</span>
                </h3>
                <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
                  Three pillars that define our commitment to crafting exceptional spaces and delivering 
                  unparalleled service to clients across the globe.
                </p>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Vision Card */}
                <div className="animate-on-scroll group">
                  <div 
                    className="relative overflow-hidden rounded-3xl p-8 text-white transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
                    style={{
                      background: 'linear-gradient(135deg, #7A2E1D 0%, #5A1E0D 100%)',
                      backgroundImage: 'url("/projects/Dubai/furjanDubai/2.png")',
                      backgroundBlendMode: 'overlay',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent"></div>
                    <div className="relative z-10">
                      <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Eye className="w-10 h-10 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold mb-4">Vision</h4>
                      <p className="text-white/90 leading-relaxed text-base">
                        To be the pioneers and most preferred partners in interior fit-out and furniture 
                        manufacturing industry, setting new standards for excellence and innovation.
                      </p>
                      <div className="mt-6 w-12 h-1 bg-white/40 rounded-full group-hover:w-20 transition-all duration-300"></div>
                    </div>
                  </div>
                </div>
                
                {/* Mission Card */}
                <div className="animate-on-scroll group">
                  <div 
                    className="relative overflow-hidden rounded-3xl p-8 text-white transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
                    style={{
                      background: 'linear-gradient(135deg, #1C1C1C 0%, #000000 100%)',
                      backgroundImage: 'url("/projects/India/samsung/2.png")',
                      backgroundBlendMode: 'overlay',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent"></div>
                    <div className="relative z-10">
                      <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Target className="w-10 h-10 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold mb-4">Mission</h4>
                      <p className="text-white/90 leading-relaxed text-base">
                        To provide value-added interior build expertise by creating inspiring and innovative 
                        workplaces, residential, and commercial spaces that exceed expectations.
                      </p>
                      <div className="mt-6 w-12 h-1 bg-white/40 rounded-full group-hover:w-20 transition-all duration-300"></div>
                    </div>
                  </div>
                </div>
                
                {/* Values Card */}
                <div className="animate-on-scroll group">
                  <div 
                    className="relative overflow-hidden rounded-3xl p-8 text-white transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
                    style={{
                      background: 'linear-gradient(135deg, #7A2E1D 0%, #5A1E0D 100%)',
                      backgroundImage: 'url("/projects/India/allianz/3.png")',
                      backgroundBlendMode: 'overlay',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent"></div>
                    <div className="relative z-10">
                      <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Heart className="w-10 h-10 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold mb-4">Values</h4>
                      <p className="text-white/90 leading-relaxed text-base">
                        Customer First, Respect, Safety, Commitment, Excellence, and our dedication to 
                        exceptional service and teamwork in everything we do.
                      </p>
                      <div className="mt-6 w-12 h-1 bg-white/40 rounded-full group-hover:w-20 transition-all duration-300"></div>
                    </div>
                  </div>
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