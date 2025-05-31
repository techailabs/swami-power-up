
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Download } from "lucide-react";

const Products = () => {
  const productCategories = [
    {
      title: "Wires & Cables",
      description: "Premium quality electrical wires and cables for all applications",
      products: ["House Wires", "Armoured Cables", "Control Cables", "LT Cables"],
      image: "🔌"
    },
    {
      title: "MCBs & Distribution",
      description: "Circuit breakers, MCBs, and distribution boards from top brands",
      products: ["Single Pole MCB", "Double Pole MCB", "RCBO", "Distribution Boards"],
      image: "⚡"
    },
    {
      title: "Inverters & Batteries",
      description: "Power backup solutions for residential and commercial use",
      products: ["Sine Wave Inverters", "Tubular Batteries", "Solar Inverters", "UPS Systems"],
      image: "🔋"
    },
    {
      title: "Industrial Switchgear",
      description: "Heavy-duty switchgear for industrial applications",
      products: ["Contactors", "Motor Starters", "Relays", "Panel Accessories"],
      image: "⚙️"
    },
    {
      title: "Transformers & Panels",
      description: "Custom transformers and electrical panels",
      products: ["Distribution Transformers", "Control Panels", "MCC Panels", "PCC Panels"],
      image: "🏭"
    },
    {
      title: "Tools & Safety",
      description: "Electrical tools and safety equipment",
      products: ["Digital Multimeters", "Safety Helmets", "Insulation Testers", "Cable Cutters"],
      image: "🛠️"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Complete Electrical Product Range
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            From basic house wires to industrial transformers - we stock everything you need 
            with guaranteed quality and express delivery
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-gray-200">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{category.image}</div>
                  <CardTitle className="text-xl text-gray-900">{category.title}</CardTitle>
                  <CardDescription className="text-gray-600">{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {category.products.map((product, productIndex) => (
                      <li key={productIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                        {product}
                      </li>
                    ))}
                  </ul>
                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Get Quote
                    </Button>
                    <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Something Specific?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Can't find what you're looking for? We source specialized electrical equipment 
            and can arrange custom orders for unique requirements.
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp Your Requirements
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
