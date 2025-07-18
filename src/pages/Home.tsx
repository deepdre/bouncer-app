import React from 'react';
import { Shield, Users, Clock, Award, ChevronRight, Star, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpeg';
import img3 from '../assets/3.jpeg';
import img4 from '../assets/4.jpeg';
import img5 from '../assets/5.jpeg';
import img6 from '../assets/6.jpeg';
import img7 from '../assets/7.jpeg';

const Home = () => {
  const features = [
    {
      icon: logo,
      title: 'Event Security Experts',
      description: 'Trained teams for concerts, festivals, and public gatherings.',
    },
    {
      icon: logo,
      title: 'Corporate Protection',
    description: 'Discreet and reliable security for business operations and events.',
    },
    {
      icon: logo,
      title: 'Bouncer Services',
    description: 'Strong, professional bouncers for clubs, bars, and nightlife venues.',
    },
    {
      icon: logo,
      title: '24/7 Bodyguard Service',
    description: 'Personal protection available anytime, anywhere.',
    },
    {
      icon: logo,
      title: 'Special Deployments',
    description: 'Custom security setups for VIPs, high-risk, or high-profile events.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Event Manager',
      content: 'Singh Security provided exceptional service for our corporate event. Professional, reliable, and discreet.',
      rating: 5,
    },
    {
      name: 'Mike Rodriguez',
      role: 'Venue Owner',
      content: 'Outstanding security team. They handle difficult situations with professionalism and expertise.',
      rating: 5,
    },
    {
      name: 'Emma Davis',
      role: 'Private Client',
      content: 'I felt completely safe with their personal protection service. Highly recommended!',
      rating: 5,
    },
  ];

  const galleryImages = [
    {
      id: 1,
      url: img1,
      title: 'Concert Security',
      description: 'Professional security at major music event',
    },
    {
      id: 2,
      url: img2,
      title: 'VIP Protection',
      description: 'Close protection services for high-profile client',
    },
    {
      id: 3,
      url: img3,
      title: 'Event Management',
      description: 'Crowd control at corporate event',
    },
    {
      id: 4,
      url: img4,
      title: 'Training Session',
      description: 'Professional security training in progress',
    },
    
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black-900 via-black-800 to-black-900"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl text-white mb-6 leading-tight">
              Singh Bouncer &
              <span className="text-gold-500 block">Security Service</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Expert bouncer and security services for events, venues, and personal protection. 
              Your safety is our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gold-500 hover:bg-gold-600 text-black-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Request Service</span>
                <ChevronRight className="h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="font-display font-bold text-3xl lg:text-5xl text-white mb-4">
              Why Choose <span className="text-gold-500">Singh Bouncer & Security Service</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Professional security services backed by experience, training, and commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-black-900 p-6 rounded-xl border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300 transform hover:scale-105 group flex flex-col h-full"
              >
                <div className="flex items-center justify-center mb-4">
                  <img 
                    src={feature.icon} 
                    alt="Singh Security Logo" 
                    className="h-14 w-14 object-contain"
                  />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-3 flex-shrink-0 min-h-[56px] flex items-start">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm flex-grow">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Duty Highlights Section */}
      <section className="py-20 bg-black-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-5xl text-white mb-4">
              Gallery / <span className="text-gold-500">Duty Highlights</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Professional security services captured in real-world scenarios.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="bg-black-800 rounded-xl overflow-hidden border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center space-x-2 bg-gold-500 hover:bg-gold-600 text-black-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              <Camera className="h-5 w-5" />
              <span>View Full Gallery</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Events Secured' },
              { number: '50+', label: 'Security Personnel' },
              { number: '24/7', label: 'Availability' },
              { number: '100%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="text-black-900">
                <div className="font-display font-bold text-3xl lg:text-5xl mb-2">{stat.number}</div>
                <div className="font-medium text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-5xl text-white mb-4">
              What Our <span className="text-gold-500">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by businesses and individuals for professional security services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-black-900 p-8 rounded-xl border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gold-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black-900 border-t border-gold-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl lg:text-5xl text-white mb-6">
            Ready to Secure Your <span className="text-gold-500">Event?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Get professional security services tailored to your needs. Contact us today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gold-500 hover:bg-gold-600 text-black-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Get Quote Now</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
            <Link
              to="/join-us"
              className="border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;