
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Mobile-first layout */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center text-center lg:text-left">
            
            {/* Photo - shows first on mobile */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 relative">
                  {/* Animated background rings */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-violet-500 p-1 animate-spin-slow">
                    <div className="w-full h-full rounded-full bg-gray-900"></div>
                  </div>
                  
                  {/* Main photo */}
                  <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-blue-400/50 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                    <img
                      src="/lovable-uploads/0659b6ee-f815-48bc-81ba-ccadcc200657.png"
                      alt="Manish Ram"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-400/20 rounded-full animate-bounce delay-300"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-violet-400/20 rounded-full animate-bounce delay-700"></div>
                </div>
              </div>
            </div>

            {/* Text Content - shows second on mobile */}
            <div className="order-2 lg:order-1 space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  <span className="inline-block animate-fade-in">Manish</span>{" "}
                  <span className="inline-block text-blue-400 animate-fade-in delay-300">Ram</span>
                </h1>
                
                <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 animate-fade-in delay-500">
                  Full Stack Developer & AI Enthusiast
                </h2>
                
                <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in delay-700">
                  Master's student at Centurion University with a passion for learning and teaching. 
                  Specializing in AI through IIT Ropar, building innovative solutions, and contributing 
                  to educational communities.
                </p>
              </div>
              
              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in delay-1000">
                <Button
                  onClick={scrollToAbout}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  Learn More About Me
                </Button>
                
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Manish9211Ram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800/80 backdrop-blur-sm hover:bg-blue-600 text-white rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <Github size={20} className="sm:w-6 sm:h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/manishramofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800/80 backdrop-blur-sm hover:bg-blue-600 text-white rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <Linkedin size={20} className="sm:w-6 sm:h-6" />
                  </a>
                  <a
                    href="mailto:manishramforcomputer@gmail.com"
                    className="p-3 bg-gray-800/80 backdrop-blur-sm hover:bg-blue-600 text-white rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <Mail size={20} className="sm:w-6 sm:h-6" />
                  </a>
                </div>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 animate-fade-in delay-1200">
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400">15+</div>
                  <div className="text-sm text-gray-400">Languages</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400">10+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400">5+</div>
                  <div className="text-sm text-gray-400">Certifications</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400">2024</div>
                  <div className="text-sm text-gray-400">Graduate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs text-gray-400 hidden sm:block">Scroll Down</span>
          <ChevronDown size={24} className="sm:w-8 sm:h-8" />
        </div>
      </button>
    </section>
  );
};

export default Hero;
