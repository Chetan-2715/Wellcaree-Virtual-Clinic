
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { BRANCHES } from '../data';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pb-20">
      <section className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-clinic-950 mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Whether you have questions about our treatments or want to visit us in person, we're here to help.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-8">
            <div className="glass p-10 rounded-[2.5rem] space-y-12">
              <div>
                <h3 className="text-lg font-bold text-clinic-900 mb-6 uppercase tracking-widest">Connect with us</h3>
                <div className="space-y-6">
                  <a href="tel:+919175930155" className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-clinic-100 rounded-2xl flex items-center justify-center text-clinic-600 group-hover:bg-clinic-600 group-hover:text-white transition-all">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase">Call Support</p>
                      <p className="font-bold text-clinic-900">+91 9175930155</p>
                    </div>
                  </a>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-clinic-100 rounded-2xl flex items-center justify-center text-clinic-600">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase">Email Us</p>
                      <p className="font-bold text-clinic-900">contact@wellcaree.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-clinic-900 mb-6 uppercase tracking-widest">Our Locations</h3>
                <div className="space-y-8">
                  {BRANCHES.map((branch, i) => (
                    <div key={i} className="space-y-2">
                      <h4 className="font-bold text-clinic-600">{branch.name}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{branch.address}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h3 className="text-3xl font-serif font-bold text-clinic-900 mb-10">Send us a Message</h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 ml-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-clinic-500 focus:ring-4 focus:ring-clinic-50 transition-all outline-none" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 ml-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000"
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-clinic-500 focus:ring-4 focus:ring-clinic-50 transition-all outline-none" 
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-gray-500 ml-2">How can we help?</label>
                  <textarea 
                    rows={6} 
                    placeholder="Tell us about your condition or query..."
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-clinic-500 focus:ring-4 focus:ring-clinic-50 transition-all outline-none resize-none"
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button className="w-full md:w-auto bg-clinic-600 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-clinic-700 transition-all shadow-xl shadow-clinic-100 flex items-center justify-center space-x-2">
                    <span>Send Message</span>
                    <Send size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
