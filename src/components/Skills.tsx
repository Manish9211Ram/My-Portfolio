
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Cloud, Brain, Shield, Network, User, Heart } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    {
      category: "Programming Languages",
      icon: Code,
      skills: ["C", "C++", "Java", "Python", "R", "JavaScript", "PHP", "Shell Scripting", "Prolog"],
      color: "blue"
    },
    {
      category: "Web Technologies",
      icon: Database,
      skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Web Design", "MongoDB"],
      color: "emerald"
    },
    {
      category: "Database & Data",
      icon: Database,
      skills: ["SQL", "NoSQL", "MySQL", "MariaDB", "SQLite", "MongoDB", "Database Management"],
      color: "violet"
    },
    {
      category: "AI & Data Science",
      icon: Brain,
      skills: ["Machine Learning", "Artificial Intelligence", "Data Science", "Algorithm Design & Analysis"],
      color: "cyan"
    },
    {
      category: "Security & Systems",
      icon: Shield,
      skills: ["Cyber Security", "Information Security", "Operating Systems", "Unix Operating System Concepts"],
      color: "red"
    },
    {
      category: "Cloud & Networking",
      icon: Cloud,
      skills: ["Cloud Technology (AWS)", "Networking", "Cisco Packet Tracer", "IoT"],
      color: "orange"
    },
    {
      category: "Core Concepts",
      icon: Network,
      skills: ["Data Structures with Competitive Coding", "Digital Logic", "Software Engineering", "Computer Graphics", "Discrete Mathematics and Numerical Analysis"],
      color: "pink"
    }
  ];

  const softSkills = [
    {
      category: "Work Ethics",
      icon: User,
      skills: ["Hard & Smart Working", "Honest & Punctual", "Attention to Detail", "Time Management"],
      color: "green"
    },
    {
      category: "Communication & Teamwork",
      icon: Heart,
      skills: ["Effective Communication", "Problem Solving", "Teamwork", "Adaptability"],
      color: "indigo"
    },
    {
      category: "Personal Interests",
      icon: Heart,
      skills: ["Programming", "Project Building", "Playing Cricket", "Playing Guitar", "Reading Books and Articles"],
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-600/20 to-blue-800/20 border-blue-500/30",
      emerald: "from-emerald-600/20 to-emerald-800/20 border-emerald-500/30",
      violet: "from-violet-600/20 to-violet-800/20 border-violet-500/30",
      red: "from-red-600/20 to-red-800/20 border-red-500/30",
      orange: "from-orange-600/20 to-orange-800/20 border-orange-500/30",
      cyan: "from-cyan-600/20 to-cyan-800/20 border-cyan-500/30",
      pink: "from-pink-600/20 to-pink-800/20 border-pink-500/30",
      green: "from-green-600/20 to-green-800/20 border-green-500/30",
      indigo: "from-indigo-600/20 to-indigo-800/20 border-indigo-500/30",
      purple: "from-purple-600/20 to-purple-800/20 border-purple-500/30"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-blue-400">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto">
            A comprehensive toolkit built through academic learning, hands-on projects, 
            and continuous exploration of emerging technologies.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((category, index) => (
              <Card 
                key={index}
                className={`bg-gray-800/70 ${getColorClasses(category.color)} hover:scale-105 transition-all duration-300`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <category.icon className="text-white mr-3" size={24} />
                    <h4 className="text-lg font-semibold text-white">{category.category}</h4>
                  </div>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="bg-gray-900/50 px-3 py-2 rounded-lg text-gray-200 hover:bg-gray-900/70 transition-colors duration-200 text-sm"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Soft Skills & Personal Strengths</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {softSkills.map((category, index) => (
              <Card 
                key={index}
                className={`bg-gray-800/70 ${getColorClasses(category.color)} hover:scale-105 transition-all duration-300`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <category.icon className="text-white mr-3" size={24} />
                    <h4 className="text-lg font-semibold text-white">{category.category}</h4>
                  </div>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="bg-gray-900/50 px-3 py-2 rounded-lg text-gray-200 hover:bg-gray-900/70 transition-colors duration-200 text-sm"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
