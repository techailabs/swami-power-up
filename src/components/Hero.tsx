
import { ArrowRight, Zap, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 rounded-full text-orange-300 text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Gurgaon's #1 Electrical Partner
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Gurgaon's <span className="text-orange-400">Fastest</span> Electrical Supply & Service Partner
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed">
                From MCBs to transformers, we power your business with 3-hour express delivery, 
                on-site installation, and 24/7 emergency support across Kadipur to IMT Manesar.
              </p>
            </div>

            {/* Key Features */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-orange-400" />
                <span className="text-blue-100">3-Hour Express Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-orange-400" />
                <span className="text-blue-100">Certified Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-orange-400" />
                <span className="text-blue-100">24/7 Emergency Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                WhatsApp Us Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                Request Quote
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-blue-700/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">25+</div>
                <div className="text-sm text-blue-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">500+</div>
                <div className="text-sm text-blue-200">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">24/7</div>
                <div className="text-sm text-blue-200">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image/Illustration */}
          <div className="lg:pl-8">
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-8 transform rotate-3 shadow-2xl">
                <div className="bg-white rounded-lg p-6 transform -rotate-3">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-800">Express Order</h3>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Delivered</span>
                    </div>
                    <div className="space-y-2">
                      <div className="text-gray-600">MCB 32A - 10 units</div>
                      <div className="text-gray-600">Distribution Board</div>
                      <div className="text-gray-600">Location: IMT Manesar</div>
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      ✓ Delivered in 2.5 hours
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
