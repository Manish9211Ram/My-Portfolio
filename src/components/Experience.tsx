
import { Calendar, MapPin, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      description: [
        "Developed and maintained web applications using React and TypeScript",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Implemented responsive designs and optimized application performance"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations",
      location: "New York, NY", 
      duration: "2021 - 2022",
      description: [
        "Built user interfaces for web applications using modern JavaScript frameworks",
        "Worked closely with UX/UI designers to implement pixel-perfect designs",
        "Optimized applications for maximum speed and scalability"
      ]
    },
    {
      title: "Web Development Intern",
      company: "StartUp Hub",
      location: "Austin, TX",
      duration: "2020 - 2021",
      description: [
        "Assisted in developing responsive web applications",
        "Learned modern web development practices and tools",
        "Contributed to both frontend and backend development tasks"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Experience & Training
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My professional journey and continuous learning experiences
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {experience.title}
                    </h3>
                    <p className="text-blue-400 font-medium mb-2">
                      {experience.company}
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end space-y-1">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {experience.duration}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <MapPin size={14} className="mr-1" />
                      {experience.location}
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {experience.description.map((desc, descIndex) => (
                    <li key={descIndex} className="text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-2 mt-1.5 block w-1 h-1 rounded-full bg-current"></span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
