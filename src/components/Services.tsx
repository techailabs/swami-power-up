
import { Wrench, Zap, Shield, Truck, Phone, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Express Supply & Delivery",
      description: "3-hour express delivery across Gurgaon. From MCBs to transformers, we stock it all.",
      features: ["Same-day delivery", "Bulk orders", "Quality certification"],
      cta: "Order Now"
    },
    {
      icon: Wrench,
      title: "On-Site Installation",
      description: "Professional installation and setup by certified electricians for any project size.",
      features: ["Certified technicians", "Safety compliance", "Project management"],
      cta: "Book Installation"
    },
    {
      icon: Shield,
      title: "AMC & Maintenance",
      description: "Preventive maintenance plans to keep your electrical systems running smoothly.",
      features: ["Scheduled maintenance", "Emergency repairs", "Performance monitoring"],
      cta: "Get AMC Quote"
    },
    {
      icon: Zap,
      title: "Solar Solutions",
      description: "Complete solar + inverter systems for industries looking to reduce power costs.",
      features: ["System design", "Installation", "Government subsidies"],
      cta: "Solar Consultation"
    },
    {
      icon: Phone,
      title: "24/7 Emergency Support",
      description: "Round-the-clock emergency support for critical breakdowns and urgent repairs.",
      features: ["Immediate response", "Emergency inventory", "Priority service"],
      cta: "Emergency Hotline"
    },
    {
      icon: Settings,
      title: "Custom Solutions",
      description: "Tailored electrical solutions for unique industrial and commercial requirements.",
      features: ["Custom panels", "Specialized equipment", "Technical consulting"],
      cta: "Discuss Project"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Electrical Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond just supply - we provide end-to-end electrical services that keep your business powered and protected
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-gray-200 group">
                <CardHeader className="text-center">
                  <div className="bg-blue-50 group-hover:bg-orange-50 rounded-full p-4 w-16 h-16 mx-auto mb-4 transition-colors">
                    <Icon className="w-8 h-8 text-blue-600 group-hover:text-orange-600 transition-colors mx-auto" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    {service.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Emergency Contact Banner */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Emergency Breakdown?</h3>
          <p className="text-red-100 mb-4">
            Call our emergency hotline for immediate assistance - we respond within 60 minutes
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            <Phone className="w-5 h-5 mr-2" />
            Emergency: +91-9999-SWAMI
          </Button>
        </div>
      </div>
    </section>
  );
};
