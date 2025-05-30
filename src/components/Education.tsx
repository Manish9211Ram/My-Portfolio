
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

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
    "OS-CIT - Odisha Computer Academy",
    "DPGDCA - Odisha Computer Academy",
    "Core & Advanced Python - Lakshay Institute of Technology",
    "Core Java - Lakshay Institute of Technology",
    "Frontend Development - Lakshay Institute of Technology",
    "Machine Learning Introduction - Chandigarh University",
    "Digital Content & Communication - Chandigarh University",
    "Artificial Intelligence - Chandigarh University"
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
                  className="bg-gray-800/50 border-blue-500/20 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        edu.status === 'Currently Pursuing' || edu.status === 'Pursuing' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-emerald-600 text-white'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-300 mb-2">
                      <MapPin size={16} className="mr-2" />
                      {edu.institution}
                    </div>
                    <div className="flex items-center text-gray-400">
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
            <h3 className="text-2xl font-semibold text-white mb-8">
              Certifications & Courses
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card 
                  key={index}
                  className="bg-gray-800/30 border-blue-500/10 hover:bg-gray-800/50 transition-all duration-300"
                >
                  <CardContent className="p-4">
                    <p className="text-gray-300">{cert}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 border-blue-500/30">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-white mb-3">Recent Achievements</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Internship at INTERNSHALA as ISP (March - April 2025)</li>
                  <li>• Participation in ISP 48 First Trainings Contest Webinar</li>
                  <li>• Let's Upgrade: Placement Prep & JavaScript Bootcamp</li>
                  <li>• Node.js Bootcamp & AI-Powered YouTube Summarizer</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
