import React, { useState } from 'react';
import { Users, Shield, Award, CheckCircle, Send } from 'lucide-react';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    age: '',
    experience: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'onboarding@resend.dev',
          to: ['deepdre223@gmail.com'],
          subject: 'New Team Application - Singh Security',
          emailType: 'job-application',
          formData: formData,
        }),
      });

      if (response.ok) {
        setSubmitMessage('Application submitted successfully! We will contact you soon.');
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          age: '',
          experience: '',
          message: '',
        });
      } else {
        const errorData = await response.json();
        console.error('Email API Error:', errorData);
        throw new Error('Failed to submit application');
      }
    } catch (error) {
      console.error('Submit Error:', error);
      setSubmitMessage('Error submitting application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    'Competitive compensation',
    'Professional training programs',
    'Career advancement opportunities',
    'Flexible scheduling options',
    'Health and safety coverage',
    'Team building activities',
  ];

  const requirements = [
    'Minimum 18 years of age',
    'Clean background check',
    'Physical fitness requirements',
    'Professional appearance',
    'Strong communication skills',
    'Reliability and punctuality',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black-900 via-black-800 to-black-900">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl lg:text-6xl text-white mb-6">
            Join Our <span className="text-gold-500">Security Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Become part of a professional security team dedicated to excellence, safety, and client protection.
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-black-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-4">
              Why Work With <span className="text-gold-500">Singh Security?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join a team that values professionalism, provides growth opportunities, and offers competitive benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black-900 p-8 rounded-xl border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300 text-center">
              <div className="bg-gold-500 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-black-900" />
              </div>
              <h3 className="font-display font-semibold text-xl text-white mb-4">Great Team</h3>
              <p className="text-gray-300 leading-relaxed">
                Work alongside experienced professionals in a supportive team environment.
              </p>
            </div>

            <div className="bg-black-900 p-8 rounded-xl border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300 text-center">
              <div className="bg-gold-500 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-black-900" />
              </div>
              <h3 className="font-display font-semibold text-xl text-white mb-4">Professional Growth</h3>
              <p className="text-gray-300 leading-relaxed">
                Continuous training and development opportunities to advance your career.
              </p>
            </div>

            <div className="bg-black-900 p-8 rounded-xl border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300 text-center">
              <div className="bg-gold-500 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-black-900" />
              </div>
              <h3 className="font-display font-semibold text-xl text-white mb-4">Competitive Benefits</h3>
              <p className="text-gray-300 leading-relaxed">
                Excellent compensation package with comprehensive benefits and flexibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Requirements */}
      <section className="py-20 bg-black-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Benefits */}
            <div>
              <h2 className="font-display font-bold text-3xl text-white mb-8">
                Employee <span className="text-gold-500">Benefits</span>
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-gold-500 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div>
              <h2 className="font-display font-bold text-3xl text-white mb-8">
                Basic <span className="text-gold-500">Requirements</span>
              </h2>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-gold-500 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-black-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-4">
              Apply <span className="text-gold-500">Today</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to join our professional security team? Fill out the application form below.
            </p>
          </div>

          <div className="bg-black-900 border border-gold-500/20 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black-800 border border-gold-500/20 rounded-lg text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black-800 border border-gold-500/20 rounded-lg text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black-800 border border-gold-500/20 rounded-lg text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Age *
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    min="18"
                    max="65"
                    className="w-full px-4 py-3 bg-black-800 border border-gold-500/20 rounded-lg text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors"
                    placeholder="Enter your age"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Security Experience *
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-black-800 border border-gold-500/20 rounded-lg text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors resize-none"
                  placeholder="Describe your security, law enforcement, or related experience"
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-black-800 border border-gold-500/20 rounded-lg text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us why you want to join our team"
                ></textarea>
              </div>

              {submitMessage && (
                <div className={`p-4 rounded-lg ${
                  submitMessage.includes('success') 
                    ? 'bg-green-900/20 border border-green-500/20 text-green-400' 
                    : 'bg-red-900/20 border border-red-500/20 text-red-400'
                }`}>
                  {submitMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold-500 hover:bg-gold-600 disabled:bg-gray-600 text-black-900 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black-900"></div>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Submit Application</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-black-900">
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-6">
            Questions About Joining Us?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Contact us directly to learn more about career opportunities with Singh Security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:deepdre223@gmail.com"
              className="bg-black-900 hover:bg-black-800 text-gold-500 font-semibold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Email Us
            </a>
            <a
              href="tel:+15551234567"
              className="border-2 border-black-900 text-black-900 hover:bg-black-900 hover:text-gold-500 font-semibold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;