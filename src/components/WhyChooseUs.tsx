
import { Clock, Award, MapPin, Users, Headphones, Truck } from "lucide-react";

export const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Clock,
      title: "Lightning Fast Delivery",
      description: "3-hour express delivery within Gurgaon. Most orders delivered same day."
    },
    {
      icon: Award,
      title: "Certified Quality",
      description: "Only genuine products from authorized dealers. ISI, BIS certified equipment."
    },
    {
      icon: MapPin,
      title: "Local Experts",
      description: "25+ years serving Gurgaon. We know every industrial area and project."
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Personal relationship manager for bulk orders and repeat clients."
    },
    {
      icon: Headphones,
      title: "24/7 Availability",
      description: "Round-the-clock support for emergencies and urgent requirements."
    },
    {
      icon: Truck,
      title: "Complete Solutions",
      description: "From supply to installation to maintenance - everything under one roof."
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Gurgaon Businesses Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Speed, quality, and reliability - the three pillars that make us Gurgaon's preferred electrical partner
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100 group">
                <div className="bg-orange-100 group-hover:bg-blue-100 rounded-full p-4 w-16 h-16 mb-6 transition-colors">
                  <Icon className="w-8 h-8 text-orange-600 group-hover:text-blue-600 transition-colors mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl p-12 shadow-lg border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">2.5hrs</div>
              <div className="text-gray-600">Average Delivery Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">99.8%</div>
              <div className="text-gray-600">Order Accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">500+</div>
              <div className="text-gray-600">Active Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">60min</div>
              <div className="text-gray-600">Emergency Response</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
