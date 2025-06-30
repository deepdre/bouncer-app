import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Shield } from 'lucide-react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import '../react-datepicker-custom.css'; // Import custom styles

// Helper to generate next 14 days
const getNextNDates = (n: number) => {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < n; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    dates.push(d);
  }
  return dates;
};

// Helper to generate time slots (8:00 AM to 8:00 PM, 30-min intervals)
const getTimeSlots = () => {
  const slots = [];
  for (let h = 8; h <= 20; h++) {
    for (let m = 0; m < 60; m += 30) {
      const hour = h % 12 === 0 ? 12 : h % 12;
      const ampm = h < 12 ? 'AM' : 'PM';
      const min = m === 0 ? '00' : '30';
      slots.push(`${hour}:${min} ${ampm}`);
    }
  }
  return slots;
};

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceType: '',
    dateTime: null as Date | null,
    location: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (date: Date | null) => {
    setFormData({ ...formData, dateTime: date });
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
          subject: 'New Service Request - Singh Security',
          emailType: 'service-request',
          formData: {
            ...formData,
            // Format the date for the email body
            dateTime: formData.dateTime ? formData.dateTime.toLocaleString() : 'Not specified',
          },
        }),
      });

      if (response.ok) {
        setSubmitMessage('Request submitted successfully! We will contact you within 24 hours.');
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          serviceType: '',
          dateTime: null,
          location: '',
          message: '',
        });
      } else {
        const errorData = await response.json();
        console.error('Email API Error:', errorData);
        throw new Error('Failed to submit request');
      }
    } catch (error) {
      console.error('Submit Error:', error);
      setSubmitMessage('Error submitting request. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceTypes = [
    'Event Security',
    'Personal Protection',
    'Venue Security',
    'Corporate Security',
    'VIP Protection',
    'Crowd Control',
    'Other',
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      info: '+91 7289918292',
      action: 'tel:+917289918292',
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'singhbouncersecurity24service@gmail.com',
      action: 'mailto:singhbouncersecurity24service@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Service Area',
      info: 'Available in Delhi NCR',
      action: null,
    },
    {
      icon: Clock,
      title: 'Availability',
      info: '24/7 Emergency Response',
      action: null,
    },
  ];

  const dateOptions = getNextNDates(14);
  const timeOptions = getTimeSlots();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black-900 via-black-800 to-black-900">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl lg:text-6xl text-white mb-6">
            Contact <span className="text-gold-500">Singh Security</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to secure your event or property? Get in touch for professional security services tailored to your needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-black-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-4">
              Get In <span className="text-gold-500">Touch</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple ways to reach us for all your security service needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className="bg-black-900 p-8 rounded-xl border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300 text-center group"
              >
                <div className="bg-gold-500 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-600 transition-colors">
                  <contact.icon className="h-8 w-8 text-black-900" />
                </div>
                <h3 className="font-display font-semibold text-xl text-white mb-4">{contact.title}</h3>
                {contact.action ? (
                  <a
                    href={contact.action}
                    className="text-gold-500 hover:text-gold-400 transition-colors font-medium break-words whitespace-normal"
                  >
                    {contact.info}
                  </a>
                ) : (
                  <p className="text-gray-300">{contact.info}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Service Form */}
      <section className="py-20 bg-black-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-4">
              Request <span className="text-gold-500">Security Service</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Fill out the form below and we'll get back to you within 24 hours with a customized security solution.
            </p>
          </div>

          <div className="bg-black-800 border border-gold-500/20 rounded-2xl p-8">
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
                    className="w-full px-4 py-3 bg-black-900 border border-gold-500/20 rounded-lg text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors"
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
                    className="w-full px-4 py-3 bg-black-900 border border-gold-500/20 rounded-lg text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors"
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
                    className="w-full px-4 py-3 bg-black-900 border border-gold-500/20 rounded-lg text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Service Type *
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black-900 border border-gold-500/20 rounded-lg text-white focus:border-gold-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select service type</option>
                    {serviceTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="w-full">
                  <label className="block text-gray-300 font-medium mb-2">
                    Date & Time *
                  </label>
                  <DatePicker
                    selected={formData.dateTime}
                    onChange={handleDateChange}
                    showTimeSelect
                    minDate={new Date()}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    className="w-full px-4 py-3 bg-black-900 border border-gold-500/20 rounded-lg text-white focus:border-gold-500 focus:outline-none transition-colors"
                    placeholderText="Select a date and time"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black-900 border border-gold-500/20 rounded-lg text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors"
                    placeholder="Enter event/service location"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Additional Details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-black-900 border border-gold-500/20 rounded-lg text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors resize-none"
                  placeholder="Provide additional details about your security requirements, number of personnel needed, special considerations, etc."
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
                    <span>Send Request</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-black-900">
          <div className="bg-black-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="h-10 w-10 text-gold-500" />
          </div>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-6">
            Need Immediate Security?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            For urgent security needs or emergency situations, contact us directly for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="bg-black-900 hover:bg-black-800 text-gold-500 font-bold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now: +91 7289918292</span>
            </a>
            <a
              href="mailto:singhbouncersecurity24service@gmail.com"
              className="border-2 border-black-900 text-black-900 hover:bg-black-900 hover:text-gold-500 font-semibold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Email Emergency
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;