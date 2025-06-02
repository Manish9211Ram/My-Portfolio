
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Centurion University of Technology and Management",
      year: "2023 - 2025 (2nd Year)",
      status: "Currently Pursuing",
      color: "blue"
    },
    {
      degree: "Minor in Artificial Intelligence",
      institution: "IIT Ropar",
      year: "Current",
      status: "Pursuing",
      color: "emerald"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Utkal University",
      year: "2024",
      status: "Completed",
      color: "violet"
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "CBSE Board",
      year: "2021",
      status: "Completed",
      color: "orange"
    },
    {
      degree: "Secondary (10th)",
      institution: "CBSE Board",
      year: "2019",
      status: "Completed",
      color: "cyan"
    }
  ];

  const certifications = [
    "Chandigarh University, CU Digital Content and Communication",
    "INTERNSHALA, ISP 48 - Joining Letter",
    "INTERNSHALA, ISP 48 FTC Webinar Certificate",
    "REGIONAL COLLEGE OF MANAGEMENT, HackForge X Build with AI Participation Certificate",
    "GIFT Autonomous, Codenexus Participation Certificate",
    "Chandigarh University, CU AI",
    "Chandigarh University, CU Cricket",
    "Chandigarh University, CU Introduction to Machine Learning",
    "Centurion University of Technology and Management, Avalanche India Bootcamp",
    "K.R. Mangalam University, Hack KRMU Participation Certificate",
    "Lets Upgrade, LU Nodejs Bootcamp",
    "Lets Upgrade, LU Build with AI: Gemini Powered Youtube Summarizer",
    "Lets Upgrade, LU Pre-placement Bootcamp",
    "Lets Upgrade, LU JavaScript Bootcamp"
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education & <span className="text-blue-400">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <GraduationCap className="text-blue-400 mr-3" size={28} />
              Academic Journey
            </h3>
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <Card 
                  key={index} 
                  className="bg-gray-800/70 border-blue-500/20 hover:bg-gray-800/90 transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        edu.status === 'Currently Pursuing' || edu.status === 'Pursuing' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-emerald-600 text-white'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-200 mb-2">
                      <MapPin size={16} className="mr-2" />
                      {edu.institution}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Calendar size={16} className="mr-2" />
                      {edu.year}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <Award className="text-blue-400 mr-3" size={28} />
              Certifications & Courses
            </h3>
            <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
              {certifications.map((cert, index) => (
                <Card 
                  key={index}
                  className="bg-gray-800/60 border-blue-500/20 hover:bg-gray-800/80 transition-all duration-300"
                >
                  <CardContent className="p-4">
                    <p className="text-gray-200 text-sm">{cert}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
