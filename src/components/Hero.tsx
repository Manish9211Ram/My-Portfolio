
import { ChevronDown, Github, Linkedin, Mail, Code, Brain, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-400/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-emerald-400/5 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-pink-400/5 rounded-full blur-2xl animate-pulse-slow-delayed"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400/30 rounded-full animate-float-particle"></div>
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-violet-400/30 rounded-full animate-float-particle-delayed"></div>
        <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-emerald-400/30 rounded-full animate-float-particle"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Mobile-first layout with enhanced styling */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center text-center lg:text-left">
            
            {/* Enhanced Photo - shows first on mobile */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative group animate-slide-in-right">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 relative">
                  {/* Multiple animated background rings */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-violet-500 to-emerald-400 p-1 animate-spin-slow">
                    <div className="w-full h-full rounded-full bg-gray-900"></div>
                  </div>
                  
                  <div className="absolute inset-1 rounded-full bg-gradient-to-r from-emerald-400 via-blue-500 to-violet-400 p-1 animate-spin-reverse">
                    <div className="w-full h-full rounded-full bg-gray-900"></div>
                  </div>
                  
                  {/* Main photo with enhanced styling */}
                  <div className="absolute inset-3 rounded-full overflow-hidden border-2 border-blue-400/50 shadow-2xl group-hover:scale-105 transition-all duration-700 bg-gradient-to-br from-gray-800 to-gray-900">
                    <img
                      src="/lovable-uploads/0659b6ee-f815-48bc-81ba-ccadcc200657.png"
                      alt="Manish Ram"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay gradient for style */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-violet-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Enhanced floating elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-400/20 rounded-full animate-bounce-slow flex items-center justify-center">
                    <Code className="text-blue-400" size={20} />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-violet-400/20 rounded-full animate-bounce-delayed flex items-center justify-center">
                    <Brain className="text-violet-400" size={16} />
                  </div>
                  <div className="absolute top-1/4 -left-8 w-10 h-10 bg-emerald-400/20 rounded-full animate-float flex items-center justify-center">
                    <Zap className="text-emerald-400" size={14} />
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Text Content - shows second on mobile */}
            <div className="order-2 lg:order-1 space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium animate-fade-in-up">
                    👋 Welcome to my portfolio
                  </span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  <span className="inline-block animate-slide-in-left">Hi, I'm</span>
                  <br />
                  <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-emerald-400 animate-slide-in-left delay-300">
                    Manish Ram
                  </span>
                </h1>
                
                <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 animate-slide-in-left delay-500">
                  <span className="text-blue-400">Full Stack Developer</span> & <span className="text-violet-400">AI Enthusiast</span>
                </h2>
                
                <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-slide-in-left delay-700">
                  Master's student at Centurion University with a passion for learning and teaching. 
                  Specializing in <span className="text-blue-400 font-semibold">AI through IIT Ropar</span>, building innovative solutions, and contributing 
                  to educational communities.
                </p>
              </div>
              
              {/* Enhanced action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-slide-in-left delay-1000">
                <Button
                  onClick={scrollToAbout}
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 border border-blue-500/30"
                >
                  <span className="mr-2">🚀</span>
                  Learn More About Me
                </Button>
                
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Manish9211Ram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 text-white rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-700/50 hover:border-blue-500/50"
                  >
                    <Github size={20} className="sm:w-6 sm:h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/manishramofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 text-white rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-700/50 hover:border-blue-500/50"
                  >
                    <Linkedin size={20} className="sm:w-6 sm:h-6" />
                  </a>
                  <a
                    href="mailto:manishramforcomputer@gmail.com"
                    className="p-3 bg-gray-800/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 text-white rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-700/50 hover:border-blue-500/50"
                  >
                    <Mail size={20} className="sm:w-6 sm:h-6" />
                  </a>
                </div>
              </div>

              {/* Enhanced quick stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 animate-slide-in-up delay-1200">
                <div className="text-center lg:text-left p-4 bg-gray-800/30 rounded-lg border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 hover:bg-gray-800/50">
                  <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">15+</div>
                  <div className="text-sm text-gray-400">Languages</div>
                </div>
                <div className="text-center lg:text-left p-4 bg-gray-800/30 rounded-lg border border-gray-700/30 hover:border-violet-500/30 transition-all duration-300 hover:bg-gray-800/50">
                  <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-emerald-400">10+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div className="text-center lg:text-left p-4 bg-gray-800/30 rounded-lg border border-gray-700/30 hover:border-emerald-500/30 transition-all duration-300 hover:bg-gray-800/50">
                  <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">5+</div>
                  <div className="text-sm text-gray-400">Certifications</div>
                </div>
                <div className="text-center lg:text-left p-4 bg-gray-800/30 rounded-lg border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 hover:bg-gray-800/50">
                  <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">2024</div>
                  <div className="text-sm text-gray-400">Graduate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce-gentle group"
      >
        <div className="flex flex-col items-center space-y-2 p-3 rounded-full bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300">
          <span className="text-xs text-gray-400 hidden sm:block group-hover:text-blue-400 transition-colors">Scroll Down</span>
          <ChevronDown size={24} className="sm:w-8 sm:h-8 text-blue-400 animate-bounce-slow" />
        </div>
      </button>
    </section>
  );
};

export default Hero;
