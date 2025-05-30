import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Cloud, Brain, Shield, Network } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["C", "C++", "Java", "Python", "R", "JavaScript", "PHP", "Shell Scripting"],
      color: "blue"
    },
    {
      icon: Database,
      title: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "SQL", "NoSQL"],
      color: "emerald"
    },
    {
      icon: Brain,
      title: "AI & Data Science",
      skills: ["Machine Learning", "Artificial Intelligence", "Data Science", "Algorithm Design"],
      color: "violet"
    },
    {
      icon: Shield,
      title: "Security & Systems",
      skills: ["Cyber Security", "Information Security", "Operating Systems", "Unix Systems"],
      color: "red"
    },
    {
      icon: Network,
      title: "Networking & Cloud",
      skills: ["Networking", "Cloud Technology (AWS)", "Cisco Packet Tracer"],
      color: "orange"
    },
    {
      icon: Database,
      title: "Core Concepts",
      skills: ["Data Structures", "Digital Logic", "Database Management", "Software Engineering"],
      color: "cyan"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-600/20 to-blue-800/20 border-blue-500/30",
      emerald: "from-emerald-600/20 to-emerald-800/20 border-emerald-500/30",
      violet: "from-violet-600/20 to-violet-800/20 border-violet-500/30",
      red: "from-red-600/20 to-red-800/20 border-red-500/30",
      orange: "from-orange-600/20 to-orange-800/20 border-orange-500/30",
      cyan: "from-cyan-600/20 to-cyan-800/20 border-cyan-500/30"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-blue-400">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            A comprehensive toolkit built through academic learning, hands-on projects, 
            and continuous exploration of emerging technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className={`bg-gradient-to-br ${getColorClasses(category.color)} hover:scale-105 transition-all duration-300`}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <category.icon className="text-white mr-3" size={28} />
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="bg-gray-900/30 px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-900/50 transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <Card className="bg-gradient-to-r from-blue-600/20 to-emerald-600/20 border-blue-500/30">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Personal Strengths
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-blue-400">Work Ethic</h4>
                  <p className="text-gray-300">Hard & Smart Working, Honest & Punctual</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-blue-400">Creative Pursuits</h4>
                  <p className="text-gray-300">Art, Playing Guitar, Reading Books</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-blue-400">Technical Passion</h4>
                  <p className="text-gray-300">Programming, Project Building, Cricket</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
