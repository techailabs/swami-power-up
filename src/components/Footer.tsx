
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">⚡ Swami Electricals</h3>
            <p className="text-gray-300 mb-4">
              Gurgaon's fastest electrical supply and service partner. Powering businesses since 1998.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span className="text-sm text-gray-300">Kadipur Industrial Area, Gurgaon</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-orange-400" />
                <span className="text-sm text-gray-300">+91-9999-SWAMI</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-orange-400" />
                <span className="text-sm text-gray-300">orders@swamielectricals.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/products" className="text-gray-300 hover:text-orange-400 transition-colors">Products</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-orange-400 transition-colors">Services</a></li>
              <li><a href="/industries" className="text-gray-300 hover:text-orange-400 transition-colors">Industries</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Express Supply & Delivery</li>
              <li className="text-gray-300">On-Site Installation</li>
              <li className="text-gray-300">AMC & Maintenance</li>
              <li className="text-gray-300">Solar Solutions</li>
              <li className="text-gray-300">Emergency Support</li>
            </ul>
          </div>

          {/* Business Hours & Emergency */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-orange-400" />
                <div>
                  <div className="text-sm text-gray-300">Mon - Sat: 8:00 AM - 8:00 PM</div>
                  <div className="text-sm text-gray-300">Sunday: 10:00 AM - 6:00 PM</div>
                </div>
              </div>
            </div>
            
            <div className="bg-red-600 rounded-lg p-4">
              <h5 className="font-semibold mb-2">24/7 Emergency</h5>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">WhatsApp: +91-9999-HELP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 Swami Electricals. All rights reserved.
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
