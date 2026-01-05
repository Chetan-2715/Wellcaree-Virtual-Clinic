import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, Send, ArrowUpRight } from 'lucide-react';
import { BRANCHES } from '../data';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Manual Validation Check
    if (!formData.name || !formData.phone || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    // Construct the WhatsApp message
    const waMessage = `*New Inquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Message:* ${formData.message}`;

    // Testing number as requested
    const phoneNumber = "919511757256";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${waMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
  };
  return (
    <div className="min-h-screen pb-20 dark:bg-neutral-950 transition-colors duration-300">
      <Helmet>
        <title>Contact Us | Wellcaree Virtual Clinic</title>
        <meta name="description" content="Get in touch with Wellcaree Virtual Clinic. Call us at +91 9175930155 or email for online homeopathy consultation." />
      </Helmet>
      <section className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-clinic-950 dark:text-white mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-neutral-400"
          >
            Whether you have questions about our treatments or want to visit us in person, we're here to help.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-8">
            <div className="glass p-10 rounded-[2.5rem] space-y-12 dark:bg-neutral-900/50 dark:border-white/10">
              <div>
                <h3 className="text-lg font-bold text-clinic-900 dark:text-white mb-6 uppercase tracking-widest">Connect with us</h3>
                <div className="space-y-6">
                  <a href="tel:+919175930155" className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-clinic-100 dark:bg-neutral-800 rounded-2xl flex items-center justify-center text-clinic-600 dark:text-clinic-400 group-hover:bg-clinic-600 group-hover:text-white transition-all">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 dark:text-neutral-500 uppercase">Call Support</p>
                      <p className="font-bold text-clinic-900 dark:text-white">+91 9175930155</p>
                    </div>
                  </a>
                  <a href="mailto:contact@wellcaree.com" className="flex items-center space-x-4 group relative z-10">
                    <div className="w-12 h-12 bg-clinic-100 dark:bg-neutral-800 rounded-2xl flex items-center justify-center text-clinic-600 dark:text-clinic-400 group-hover:bg-clinic-600 group-hover:text-white transition-all">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 dark:text-neutral-500 uppercase">Email Us</p>
                      <p className="font-bold text-clinic-900 dark:text-white">contact@wellcaree.com</p>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-clinic-900 dark:text-white mb-6 uppercase tracking-widest">Our Locations</h3>
                <div className="space-y-8">
                  {BRANCHES.map((branch, i) => (
                    <div key={i} className="space-y-3">
                      <h4 className="font-bold text-clinic-600 dark:text-clinic-400">{branch.name}</h4>
                      <p className="text-gray-600 dark:text-neutral-400 text-sm leading-relaxed mb-3">{branch.address}</p>

                      <a
                        href={branch.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-clinic-100 dark:bg-clinic-900/30 text-clinic-700 dark:text-clinic-300 px-4 py-2 rounded-xl font-bold text-sm hover:bg-clinic-600 hover:text-white transition-all duration-300 group"
                      >
                        <MapPin size={16} />
                        <span>View Direction</span>
                        <ArrowUpRight size={14} className="opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-neutral-900 p-10 md:p-16 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-white/5 transition-colors">
              <h3 className="text-3xl font-serif font-bold text-clinic-900 dark:text-white mb-10">Send us a Message</h3>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500 dark:text-neutral-400 ml-2">Full Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-neutral-800 border-transparent focus:bg-white dark:focus:bg-neutral-700 focus:border-clinic-500 focus:ring-4 focus:ring-clinic-50 dark:focus:ring-clinic-900/30 dark:text-white transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500 dark:text-neutral-400 ml-2">Phone Number</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 00000 00000"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-neutral-800 border-transparent focus:bg-white dark:focus:bg-neutral-700 focus:border-clinic-500 focus:ring-4 focus:ring-clinic-50 dark:focus:ring-clinic-900/30 dark:text-white transition-all outline-none"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-gray-500 dark:text-neutral-400 ml-2">How can we help?</label>
                    <textarea
                      required
                      rows={6}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your condition or query..."
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-neutral-800 border-transparent focus:bg-white dark:focus:bg-neutral-700 focus:border-clinic-500 focus:ring-4 focus:ring-clinic-50 dark:focus:ring-clinic-900/30 dark:text-white transition-all outline-none resize-none"
                    ></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <button type="submit" className="w-full md:w-auto bg-clinic-600 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-clinic-700 transition-all shadow-xl shadow-clinic-100 dark:shadow-clinic-900/20 flex items-center justify-center space-x-2">
                      <span>Send Message</span>
                      <Send size={20} />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-clinic-900 dark:text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-600 dark:text-neutral-400">We've redirected you to WhatsApp to send your message.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-clinic-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
