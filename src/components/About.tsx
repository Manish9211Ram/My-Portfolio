
import { Card, CardContent } from "@/components/ui/card";
import { User, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-purple-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <User className="text-purple-400" size={28} />
              <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate Full Stack Developer currently pursuing my Master's degree at 
              Centurion University of Technology and Management. With a strong foundation in 
              Computer Science and a specialized focus on AI through IIT Ropar, I'm dedicated 
              to creating innovative solutions and contributing to the tech community.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey in technology has been driven by curiosity and a genuine love for 
              learning. I believe in the power of education and enjoy sharing knowledge with 
              fellow students and the broader tech community.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-purple-500/20 hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="text-purple-400" size={24} />
                  <h4 className="text-xl font-semibold text-white">My Mission</h4>
                </div>
                <p className="text-gray-300">
                  To bridge the gap between learning and innovation, creating solutions that 
                  make a positive impact while fostering a culture of continuous growth and 
                  knowledge sharing.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="text-purple-400" size={24} />
                  <h4 className="text-xl font-semibold text-white">What I Love</h4>
                </div>
                <p className="text-gray-300">
                  Building projects, playing guitar, cricket, reading books, and most importantly - 
                  helping others learn and grow in their tech journey. I'm always excited about 
                  new challenges and opportunities to level up.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-purple-400">15+</div>
            <div className="text-gray-300">Programming Languages</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-purple-400">10+</div>
            <div className="text-gray-300">Major Projects</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-purple-400">5+</div>
            <div className="text-gray-300">Certifications</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-purple-400">2024</div>
            <div className="text-gray-300">B.Sc. Graduate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
