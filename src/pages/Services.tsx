import React from 'react';
import { Shield, Users, Clock, Star, ChevronRight, UserCheck, Building, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Music,
      title: 'Event Security',
      description: 'Professional security for concerts, festivals, corporate events, and private parties.',
      features: ['Crowd Control', 'Access Management', 'VIP Protection', 'Emergency Response'],
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
    },
    {
      icon: UserCheck,
      title: 'Personal Protection',
      description: 'Discreet personal security services for individuals and families.',
      features: ['Close Protection', 'Threat Assessment', '24/7 Availability', 'Risk Management'],
      image: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg',
    },
    {
      icon: Building,
      title: 'Venue Security',
      description: 'Comprehensive security solutions for bars, clubs, restaurants, and venues.',
      features: ['Door Security', 'Conflict Resolution', 'ID Verification', 'Incident Management'],
      image: 'https://images.pexels.com/photos/8134848/pexels-photo-8134848.jpeg',
    },
    {
      icon: Users,
      title: 'Corporate Security',
      description: 'Professional security services for businesses and corporate events.',
      features: ['Executive Protection', 'Asset Security', 'Event Management', 'Risk Assessment'],
      image: 'https://images.pexels.com/photos/8566492/pexels-photo-8566492.jpeg',
    },
  ];

  const additionalServices = [
    'Mobile Patrol Services',
    'Security Consultation',
    'Risk Assessment',
    'Emergency Response Planning',
    'Special Event Coordination',
    'VIP Transport Security',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black-900 via-black-800 to-black-900">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl lg:text-6xl text-white mb-6">
            Our <span className="text-gold-500">Security Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive security solutions tailored to meet your specific needs, delivered by experienced professionals.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-black-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-4">
              Professional <span className="text-gold-500">Security Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From event security to personal protection, we provide comprehensive security services for every need.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-black-900 rounded-2xl overflow-hidden border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black-900 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-gold-500 w-12 h-12 rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-black-900" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-display font-bold text-2xl text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 text-gold-500 hover:text-gold-400 font-semibold transition-colors group"
                  >
                    <span>Request Quote</span>
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-black-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-4">
              Additional <span className="text-gold-500">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Extended security services to cover all aspects of your safety and security needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-black-800 p-6 rounded-xl border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gold-500 rounded-full group-hover:bg-gold-400 transition-colors"></div>
                  <span className="text-white font-medium">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-black-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-4">
              Our <span className="text-gold-500">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A streamlined approach to delivering exceptional security services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We assess your security needs and develop a customized plan.',
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Detailed security planning and team assignment based on requirements.',
              },
              {
                step: '03',
                title: 'Deployment',
                description: 'Professional security personnel deployed according to your schedule.',
              },
              {
                step: '04',
                title: 'Support',
                description: 'Continuous monitoring and support throughout the service period.',
              },
            ].map((process, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gold-500 text-black-900 font-bold text-2xl w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {process.step}
                </div>
                <h3 className="font-display font-semibold text-xl text-white mb-4">{process.title}</h3>
                <p className="text-gray-300 leading-relaxed">{process.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gold-500/30 transform -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-black-900 mb-4">
              Why Choose Singh Security?
            </h2>
            <p className="text-xl text-black-800 max-w-3xl mx-auto">
              Experience the difference that professional, reliable security services can make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black-900">
            {[
              {
                icon: Shield,
                title: 'Licensed & Insured',
                description: 'Fully licensed security professionals with comprehensive insurance coverage.',
              },
              {
                icon: Clock,
                title: '24/7 Availability',
                description: 'Round-the-clock security services available whenever you need protection.',
              },
              {
                icon: Star,
                title: 'Proven Track Record',
                description: 'Hundreds of successful security operations and satisfied clients.',
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-black-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-gold-500" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-4">{feature.title}</h3>
                <p className="leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black-900 border-t border-gold-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-6">
            Ready to Secure Your <span className="text-gold-500">Event or Property?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Contact us today for a free consultation and customized security solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gold-500 hover:bg-gold-600 text-black-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Request Service</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;