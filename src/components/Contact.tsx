
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Calendar, Download } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "manishramforcomputer@gmail.com",
      link: "mailto:manishramforcomputer@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ram House, Badabazar, Kotasahi, Tangi, Chaudwar, Cuttack-754022",
      link: null
    },
    {
      icon: Calendar,
      label: "Date of Birth",
      value: "April 12, 2002",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Manish9211Ram",
      link: "https://github.com/Manish9211Ram"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/manishramofficial",
      link: "https://www.linkedin.com/in/manishramofficial"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto">
            I'm always excited to connect with fellow developers, potential collaborators, 
            and organizations that share a passion for innovation and learning. Let's build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gray-800/70 border-blue-500/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="p-3 bg-blue-600 rounded-lg">
                        <info.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{info.label}</h4>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-gray-200 hover:text-blue-400 transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-200">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/70 border-blue-500/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Social Links</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                    >
                      <social.icon className="text-blue-400" size={24} />
                      <div>
                        <h4 className="text-white font-medium">{social.label}</h4>
                        <p className="text-gray-200">{social.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="space-y-8">
            <Card className="bg-gray-800/70 border-blue-500/30">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-semibold text-white mb-4">Let's Collaborate!</h3>
                <p className="text-gray-200 mb-6">
                  I'm passionate about working on innovative projects, contributing to open source, 
                  and helping fellow developers grow. Whether you have a project idea, need technical 
                  guidance, or just want to connect, I'd love to hear from you!
                </p>
                <div className="space-y-4">
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => window.location.href = 'mailto:manishramforcomputer@gmail.com'}
                  >
                    <Mail size={20} className="mr-2" />
                    Send me an Email
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-blue-500/50 text-blue-400 hover:bg-blue-600 hover:text-white"
                  >
                    <Download size={20} className="mr-2" />
                    Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/70 border-blue-500/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Personal Details</h3>
                <div className="space-y-3 text-gray-200">
                  <div className="flex justify-between">
                    <span className="font-medium">Father's Name:</span>
                    <span>Siba Priya Ganapati Ram</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Date of Birth:</span>
                    <span>April 12, 2002</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Marital Status:</span>
                    <span>Single</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/70 border-emerald-500/30">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-white mb-3">Current Focus</h4>
                <p className="text-gray-200 text-sm">
                  • Completing MCA degree with AI specialization from IIT Ropar<br/>
                  • Building innovative projects and contributing to open source<br/>
                  • Seeking opportunities in full-stack development and AI<br/>
                  • Mentoring fellow students and growing the tech community
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400">
            "Always driven to improve, build innovative solutions, and level up both personally and professionally."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
