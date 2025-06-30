import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X, Mail, Instagram } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Join Us', path: '/join-us' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:singhbouncersecure24service@gmail.com',
      tooltip: 'singhbouncersecure24service@gmail.com'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/singhbouncersecurityservice',
      tooltip: '@singhbouncersecurityservice'
    }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img src={logo} alt="Singh Security Logo" className="h-14 w-14 object-contain" />
            <div>
              <h1 className="font-display font-bold text-lg text-white group-hover:text-gold-500 transition-colors">
                Singh Bouncer & Security Service
              </h1>
              <p className="text-xs text-gold-500 font-medium">Your safety, our priority</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-gold-500 relative group ${
                  location.pathname === item.path ? 'text-gold-500' : 'text-white'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gold-500 transition-all duration-200 ${
                  location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
            
            {/* Social Links */}
            <div className="flex items-center space-x-4 ml-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-white hover:text-gold-500 hover:bg-black-800 rounded-lg transition-all duration-200 group relative"
                  title={social.tooltip}
                >
                  <social.icon className="h-5 w-5" />
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black-900 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {social.tooltip}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-white hover:text-gold-500 hover:bg-black-800 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black-900/95 backdrop-blur-sm rounded-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-gold-500 hover:bg-black-800 rounded-md ${
                    location.pathname === item.path ? 'text-gold-500 bg-black-800' : 'text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Social Links */}
              <div className="border-t border-gray-700 pt-3 mt-3">
                <div className="flex space-x-4 px-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white hover:text-gold-500 transition-colors"
                    >
                      <social.icon className="h-5 w-5" />
                      <span className="text-sm">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;