
import { Calendar, MapPin, Award } from "lucide-react";

const Experience = () => {
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
            {/* No experience entries currently */}
            <div className="text-center py-12">
              <Award className="mx-auto mb-4 text-blue-400" size={48} />
              <p className="text-gray-400 text-lg">
                Experience section is being updated. Check back soon!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
