
import { Building2, Factory, Wrench, Zap } from "lucide-react";

export const TrustedBy = () => {
  const categories = [
    {
      icon: Factory,
      name: "Manufacturing Units",
      count: "150+"
    },
    {
      icon: Building2,
      name: "Real Estate Projects",
      count: "80+"
    },
    {
      icon: Wrench,
      name: "Industrial Contractors",
      count: "200+"
    },
    {
      icon: Zap,
      name: "Government Projects",
      count: "25+"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Gurgaon's Leading Businesses
          </h2>
          <p className="text-lg text-gray-600">
            From small MSMEs to large industrial projects, we power them all
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:bg-orange-100 transition-colors">
                    <Icon className="w-8 h-8 text-blue-600 group-hover:text-orange-600 transition-colors mx-auto" />
                  </div>
                  <div className="text-2xl font-bold text-blue-900 mb-1">{category.count}</div>
                  <div className="text-sm text-gray-600 font-medium">{category.name}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonial Quote */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-3xl mx-auto border border-gray-100">
            <div className="text-lg italic text-gray-700 mb-4">
              "Swami Electricals saved our production line during an emergency breakdown. 
              Their team was here in 90 minutes with the exact transformer we needed."
            </div>
            <div className="text-sm font-medium text-blue-900">
              - Rajesh Kumar, Production Manager, Auto Parts Manufacturing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
