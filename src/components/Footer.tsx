import React from 'react';
import { Shield, Phone, Mail, MapPin, Clock } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-black-900 border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Singh Security Logo" className="h-14 w-14 object-contain" />
              <div>
                <h3 className="font-display font-bold text-lg text-white">Singh Security</h3>
                <p className="text-sm text-gold-500 font-medium">Bouncer & Security Service</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional security services with experienced, licensed personnel. 
              Your safety is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-white text-lg border-b border-gold-500/20 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {['About Us', 'Our Services', 'Gallery', 'Join Our Team', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-gold-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-white text-lg border-b border-gold-500/20 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm">
              {['Event Security', 'Personal Protection', 'Venue Security', 'Crowd Control', 'VIP Protection'].map((service) => (
                <li key={service}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-white text-lg border-b border-gold-500/20 pb-2">
              Contact Info
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gold-500" />
                <span className="text-gray-300">+91 7289918292</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gold-500" />
                <span className="text-gray-300">singhbouncersecurity24service@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gold-500" />
                <span className="text-gray-300">Available in Delhi NCR</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-gold-500" />
                <span className="text-gray-300">24/7 Availability</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold-500/20 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Singh Bouncer & Security Service. All rights reserved.
            
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;