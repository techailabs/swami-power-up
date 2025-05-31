
import { MapPin, CheckCircle } from "lucide-react";

export const CoverageMap = () => {
  const coverageAreas = [
    "Kadipur Industrial Area",
    "IMT Manesar",
    "Udyog Vihar",
    "DLF Cyber City",
    "Sector 18-25",
    "Golf Course Extension",
    "Sohna Road",
    "NH-8 Corridor"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-orange-400">3-Hour Express Zone</span><br />
              Kadipur to IMT Manesar
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our strategic location in Kadipur Industrial Area allows us to serve major industrial 
              hubs across Gurgaon with lightning-fast delivery and on-site support.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="bg-green-500 rounded-full p-1">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <span className="text-blue-100">Express delivery within 3 hours</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-500 rounded-full p-1">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <span className="text-blue-100">Emergency response within 60 minutes</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-500 rounded-full p-1">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <span className="text-blue-100">On-site technical support available</span>
              </div>
            </div>

            <div className="bg-blue-800/50 rounded-lg p-6 border border-blue-700">
              <h3 className="text-lg font-semibold mb-3 text-orange-300">Our Service Areas:</h3>
              <div className="grid grid-cols-2 gap-3">
                {coverageAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-orange-400" />
                    <span className="text-sm text-blue-100">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Map Visual */}
          <div className="relative">
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
              <div className="aspect-square bg-blue-700/50 rounded-xl relative overflow-hidden">
                {/* Map illustration */}
                <div className="absolute inset-4 border-2 border-dashed border-orange-400 rounded-lg">
                  <div className="absolute top-4 left-4 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-8 right-6 w-2 h-2 bg-blue-300 rounded-full"></div>
                  <div className="absolute bottom-6 left-8 w-2 h-2 bg-blue-300 rounded-full"></div>
                  <div className="absolute bottom-4 right-4 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      SWAMI HQ
                    </div>
                  </div>
                </div>
                
                {/* Coverage circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 border-2 border-orange-400/50 rounded-full animate-ping"></div>
                  <div className="absolute w-24 h-24 border-2 border-orange-400/70 rounded-full"></div>
                  <div className="absolute w-16 h-16 bg-orange-400/20 rounded-full"></div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <div className="text-2xl font-bold text-orange-400">15km</div>
                <div className="text-sm text-blue-200">Coverage Radius</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
