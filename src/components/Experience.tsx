import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin, Award, BookOpen } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "ISP Intern",
      company: "INTERNSHALA",
      duration: "March 11, 2025 - April 16, 2025",
      type: "Internship",
      description: "Participating in the Internshala Student Partner program, gaining valuable industry experience and contributing to educational initiatives.",
      highlights: [
        "Active participation in ISP 48 First Trainings Contest Webinar",
        "Learning industry best practices",
        "Networking with professionals and fellow students",
        "Contributing to educational outreach programs"
      ]
    }
  ];

  const bootcamps = [
    {
      title: "Placement Preparation Bootcamp",
      provider: "Let's Upgrade",
      focus: "Interview Skills & Technical Preparation"
    },
    {
      title: "JavaScript Bootcamp",
      provider: "Let's Upgrade",
      focus: "Modern JavaScript & ES6+ Features"
    },
    {
      title: "Node.js Bootcamp",
      provider: "Let's Upgrade",
      focus: "Backend Development & Server-side Programming"
    },
    {
      title: "Build with AI: Gemini Powered YouTube Summarizer",
      provider: "Let's Upgrade",
      focus: "AI Integration & Practical Application Development"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & <span className="text-blue-400">Training</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Professional experience and specialized training programs that have shaped my skills 
            and prepared me for the challenges in the tech industry.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <Briefcase className="text-blue-400 mr-3" size={28} />
              Professional Experience
            </h3>
            
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="bg-gray-800/50 border-blue-500/20 hover:bg-gray-800/70 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                      {exp.type}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-gray-300 mb-4">
                    <Calendar size={16} className="mr-2" />
                    {exp.duration}
                  </div>
                  
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  <div className="space-y-2">
                    <h5 className="text-white font-medium">Key Highlights:</h5>
                    <ul className="text-gray-300 space-y-1">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="mt-6 bg-gradient-to-r from-emerald-600/20 to-blue-600/20 border-emerald-500/30">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="text-emerald-400 mr-3" size={24} />
                  <h4 className="text-lg font-semibold text-white">Looking Forward</h4>
                </div>
                <p className="text-gray-300">
                  Actively seeking opportunities to contribute to innovative projects and 
                  collaborate with teams that value growth, learning, and making a positive impact 
                  in the tech community.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Training & Bootcamps */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <BookOpen className="text-blue-400 mr-3" size={28} />
              Specialized Training
            </h3>
            
            <div className="space-y-4">
              {bootcamps.map((bootcamp, index) => (
                <Card 
                  key={index}
                  className="bg-gray-800/30 border-blue-500/10 hover:bg-gray-800/50 transition-all duration-300"
                >
                  <CardContent className="p-5">
                    <h4 className="text-lg font-semibold text-white mb-2">{bootcamp.title}</h4>
                    <div className="flex items-center text-blue-400 mb-2">
                      <MapPin size={16} className="mr-2" />
                      {bootcamp.provider}
                    </div>
                    <p className="text-gray-300 text-sm">{bootcamp.focus}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6 bg-gradient-to-r from-blue-600/20 to-violet-600/20 border-blue-500/30">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-white mb-3">Continuous Learning</h4>
                <p className="text-gray-300 mb-4">
                  My commitment to staying updated with the latest technologies and industry trends 
                  through continuous learning and professional development programs.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-400">4+</div>
                    <div className="text-gray-300 text-sm">Bootcamps Completed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400">100+</div>
                    <div className="text-gray-300 text-sm">Hours of Training</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
