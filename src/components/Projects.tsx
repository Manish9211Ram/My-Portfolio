
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Gamepad2, Hospital, Puzzle, Bot, Link, Globe, Building, Leaf, Network } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Desktop Assistant with 34 Features",
      description: "A comprehensive Python-based desktop assistant with voice recognition, task automation, and 34 different features including web search, email, weather updates, and system control.",
      icon: Bot,
      category: "Major Project",
      tech: ["Python", "Speech Recognition", "AI"],
      highlight: true
    },
    {
      title: "Plant Disease Prediction System",
      description: "AI-powered system using machine learning to detect and predict plant diseases from images, helping farmers make informed decisions about crop health.",
      icon: Leaf,
      category: "AI/ML Project",
      tech: ["Python", "Machine Learning", "Computer Vision"]
    },
    {
      title: "Hospital Management System",
      description: "Complete hospital management solution with patient records, appointment scheduling, billing, and staff management features.",
      icon: Hospital,
      category: "Management System",
      tech: ["Python", "Database", "GUI"]
    },
    {
      title: "Smart University Network",
      description: "Network infrastructure design using Cisco Packet Tracer, implementing secure and efficient connectivity for university campus.",
      icon: Network,
      category: "Networking Project",
      tech: ["Cisco Packet Tracer", "Networking", "Security"]
    },
    {
      title: "Hostel Room Allotment System",
      description: "Automated system for managing hostel room assignments, student data, and room availability with user-friendly interface.",
      icon: Building,
      category: "Management System",
      tech: ["Database", "Web Development", "System Design"]
    },
    {
      title: "Fuzzy URL Shortener",
      description: "Python-based URL shortening service with custom algorithms for generating short, memorable links with analytics features.",
      icon: Link,
      category: "Web Application",
      tech: ["Python", "Web Development", "Algorithms"]
    },
    {
      title: "Tic Tac Toe Web Game",
      description: "Interactive web-based Tic Tac Toe game with responsive design, score tracking, and smooth animations.",
      icon: Globe,
      category: "Web Game",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Space Invaders Game",
      description: "Classic arcade-style Space Invaders game built in Python with Pygame, featuring multiple levels and power-ups.",
      icon: Gamepad2,
      category: "Game Development",
      tech: ["Python", "Pygame", "Game Logic"]
    },
    {
      title: "Java Puzzle Game",
      description: "Interactive puzzle game developed in Java with multiple difficulty levels and intuitive user interface.",
      icon: Puzzle,
      category: "Game Development",
      tech: ["Java", "Swing", "Object-Oriented Programming"]
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Major Project": "bg-purple-600",
      "AI/ML Project": "bg-green-600",
      "Management System": "bg-blue-600",
      "Networking Project": "bg-yellow-600",
      "Web Application": "bg-indigo-600",
      "Web Game": "bg-pink-600",
      "Game Development": "bg-red-600"
    };
    return colors[category as keyof typeof colors] || "bg-gray-600";
  };

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-purple-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            A showcase of my technical skills through diverse projects spanning AI, web development, 
            game creation, and system management solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`bg-slate-800/50 border-purple-500/20 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 ${
                project.highlight ? 'ring-2 ring-purple-500/50' : ''
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <project.icon className="text-purple-400" size={32} />
                  <span className={`px-2 py-1 rounded-full text-xs text-white ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-slate-700 text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-purple-500/50 text-purple-400 hover:bg-purple-600 hover:text-white"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  {project.category.includes("Web") && (
                    <Button 
                      size="sm" 
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Project Highlights</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">9+</div>
                  <div className="text-gray-300">Completed Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                  <div className="text-gray-300">Technologies Used</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                  <div className="text-gray-300">Passion Driven</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
