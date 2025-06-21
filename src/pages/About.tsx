import React from 'react';
import { Shield, Users, Clock, Award, Target, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Professionalism',
      description: 'We maintain the highest standards of professional conduct in all our security operations.',
    },
    {
      icon: Target,
      title: 'Reliability',
      description: 'Dependable security services you can count on, available when you need us most.',
    },
    {
      icon: Users,
      title: 'Experience',
      description: 'Our team brings years of security and law enforcement experience to every assignment.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering exceptional security services that exceed expectations.',
    },
  ];

  const certifications = [
    'Licensed Security Personnel',
    'Crowd Control Certified',
    'First Aid & CPR Trained',
    'Conflict Resolution Experts',
    'Event Security Specialists',
    'Personal Protection Trained',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black-900 via-black-800 to-black-900">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8134848/pexels-photo-8134848.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl lg:text-6xl text-white mb-6">
            About <span className="text-gold-500">Singh Security</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Professional security and bouncer services built on trust, experience, and unwavering commitment to your safety.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-black-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-6">
                Our <span className="text-gold-500">Story</span>
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Singh Bouncer & Security Service was founded with a simple mission: to provide professional, 
                  reliable security services that give our clients complete peace of mind. What started as a 
                  small team of dedicated security professionals has grown into a trusted name in the industry.
                </p>
                <p>
                  Our founders brought together decades of experience in law enforcement, private security, 
                  and event management to create a service that truly understands the unique challenges 
                  of modern security needs.
                </p>
                <p>
                  Today, we're proud to serve businesses, event organizers, and individuals across the region, 
                  delivering security solutions that are tailored to each client's specific requirements.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gold-500/10 rounded-2xl p-8 border border-gold-500/20">
                <img
                  src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg"
                  alt="Security Team"
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-black-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-black-800 p-8 rounded-2xl border border-gold-500/20">
              <div className="bg-gold-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-black-900" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To provide exceptional security services that protect our clients' assets, events, 
                and personal safety through professional, trained, and dedicated security personnel. 
                We strive to be the most trusted security partner in our community.
              </p>
            </div>
            <div className="bg-black-800 p-8 rounded-2xl border border-gold-500/20">
              <div className="bg-gold-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-black-900" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be recognized as the leading security service provider, known for our 
                professionalism, reliability, and innovative approach to security solutions. 
                We aim to set the standard for excellence in the security industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-4">
              Our <span className="text-gold-500">Core Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as a security service provider.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-black-900 p-8 rounded-xl border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300 transform hover:scale-105 group text-center"
              >
                <div className="bg-gold-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:bg-gold-600 transition-colors">
                  <value.icon className="h-8 w-8 text-black-900" />
                </div>
                <h3 className="font-display font-semibold text-xl text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Training */}
      <section className="py-20 bg-black-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-6">
                Certified & <span className="text-gold-500">Trained Professionals</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Our security team undergoes rigorous training and maintains current certifications 
                to ensure the highest level of service. We invest in continuous education and 
                skill development to stay ahead of evolving security challenges.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-gold-500 flex-shrink-0" />
                    <span className="text-gray-300">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gold-500/10 rounded-2xl p-8 border border-gold-500/20">
                <img
                  src="https://images.pexels.com/photos/8566492/pexels-photo-8566492.jpeg"
                  alt="Training Session"
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-black-900 mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-black-800 max-w-3xl mx-auto">
              Numbers that speak to our experience and commitment to excellence.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: '10+', label: 'Years Experience' },
              { number: '500+', label: 'Events Secured' },
              { number: '50+', label: 'Team Members' },
              { number: '24/7', label: 'Emergency Response' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="font-display font-bold text-4xl lg:text-6xl text-black-900 mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold text-lg text-black-800">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;