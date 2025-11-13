import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Heart, Shield, Globe, Smartphone, ArrowRight } from "lucide-react";
import logoImage from "@/assets/logo.jpeg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 to-emerald-800 text-white font-montserrat" style={{ filter: 'brightness(1.1)' }}>
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-[#00b140] rounded-xl flex items-center justify-center overflow-hidden shadow-lg">
                <img src={logoImage} alt="Pflegedienst Dreieich Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
                  Pflegedienst Dreieich
                </span>
                <div className="text-sm text-emerald-100">Qualität ist kein zufall</div>
              </div>
            </div>
            <p className="text-emerald-50 mb-6 leading-relaxed">
              Ihr vertrauensvoller Partner für professionelle und liebevolle 
              Betreuung zu Hause. Wir behandeln jede Familie wie unsere eigene.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Unsere Dienstleistungen</h3>
            <ul className="space-y-3 text-emerald-50">
              <li>
                <span className="block">Hauswirtschaftliche Hilfe</span>
              </li>
              <li>
                <span className="block">Entlastungsleistungen</span>
              </li>
              <li>
                <span className="block">Beratung & Planung</span>
              </li>
              <li>
                <span className="block">Gesellschaft & Begleitung</span>
              </li>
              <li>
                <span className="block">Pflegehilfsmittel</span>
              </li>
              <li>
                <span className="block">24/7 Für Sie erreichbar</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Schnellzugriff</h3>
            <ul className="space-y-3 text-emerald-50">
              <li>
                <span className="block">Über uns</span>
              </li>
              <li>
                <span className="block">Unser Team</span>
              </li>
              <li>
                <span className="block">Kontakt</span>
              </li>
              <li>
                <span className="block">Häufige Fragen</span>
              </li>
              <li>
                <span className="block">Blog & News</span>
              </li>
              <li>
                <span className="block">Downloads</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Kontakt</h3>
            <div className="space-y-4 text-emerald-50">
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-[#00b140] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-medium text-white">06103-8025731</div>
                  <div className="text-sm text-emerald-100">Telephone</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-[#00b140] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-medium text-white">0160-6397787</div>
                  <div className="text-sm text-emerald-100">Mobile</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-[#00b140] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-medium text-white">info@dreieich-pflege.de</div>
                  <div className="text-sm text-emerald-100">E-Mail</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-[#00b140] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-medium text-white">Pflegedienst 3eich GmbH</div>
                  <div className="text-sm text-emerald-100">Freiherr-vom-Stein-Straße 42</div>
                  <div className="text-sm text-emerald-100">63303 Dreieich-Sprendlingen</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-emerald-600/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-emerald-100 text-sm">
© Copyright by Ambulanter Pflegedienst 3eich. Alle Rechte vorbehalten.            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-emerald-100 hover:text-white text-base transition-colors duration-300 font-medium">
                Datenschutz
              </Link>
              <Link to="/imprint" className="text-emerald-100 hover:text-white text-base transition-colors duration-300 font-medium">
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;