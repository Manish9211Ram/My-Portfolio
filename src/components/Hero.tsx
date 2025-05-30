
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Manish <span className="text-blue-400">Ram</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 animate-fade-in">
              Full Stack Developer & AI Enthusiast
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-12 animate-fade-in">
              Master's student at Centurion University with a passion for learning and teaching. 
              Specializing in AI through IIT Ropar, building innovative solutions, and contributing 
              to educational communities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12 animate-fade-in">
              <Button
                onClick={scrollToAbout}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105"
              >
                Learn More About Me
              </Button>
              
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Manish9211Ram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-blue-600 text-white rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/manishramofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-blue-600 text-white rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:manishramforcomputer@gmail.com"
                  className="p-3 bg-gray-800 hover:bg-blue-600 text-white rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl">
                <img
                  src="/lovable-uploads/0659b6ee-f815-48bc-81ba-ccadcc200657.png"
                  alt="Manish Ram"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-600 rounded-full opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
