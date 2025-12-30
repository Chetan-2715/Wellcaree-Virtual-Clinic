
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Phone, MapPin, Mail } from 'lucide-react';
import { CLINIC_NAME, BRANCHES } from '../data';

const Footer: React.FC = () => {
  return (
    <footer className="bg-clinic-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-clinic-900 font-bold text-xl">W</div>
              <span className="font-serif text-2xl font-bold tracking-tight">Wellcaree</span>
            </Link>
            <p className="text-clinic-200 leading-relaxed text-sm">
              Healing with Care, Anytime, Anywhere. Online Homoeopathy Consultation for Mind–Body Balance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-clinic-900 rounded-full hover:bg-clinic-800 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-clinic-900 rounded-full hover:bg-clinic-800 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="p-2 bg-clinic-900 rounded-full hover:bg-clinic-800 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4 text-clinic-200 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/conditions" className="hover:text-white transition-colors">Conditions We Treat</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Doctors</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/book" className="hover:text-white transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Branches */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6 text-white">Our Locations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {BRANCHES.map((branch, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="font-bold text-clinic-400">{branch.name}</h4>
                  <p className="text-clinic-200 text-sm flex items-start space-x-2">
                    <MapPin size={16} className="mt-1 flex-shrink-0" />
                    <span>{branch.address}</span>
                  </p>
                  <p className="text-clinic-200 text-sm flex items-center space-x-2">
                    <Phone size={16} />
                    <span>{branch.phone}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-clinic-900">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <p className="text-clinic-400 text-xs">
              © {new Date().getFullYear()} {CLINIC_NAME}. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-clinic-400 justify-start md:justify-end">
              <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="#" className="hover:text-white transition-colors">Medical Disclaimer</Link>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-clinic-900/30 rounded-lg">
            <p className="text-[10px] text-clinic-500 uppercase tracking-widest font-bold mb-2">Medical Disclaimer</p>
            <p className="text-[10px] text-clinic-300 leading-relaxed italic">
              Homoeopathy treats the person as a whole, not just the diagnosis. Results may vary from person to person. 
              The information on this website is for educational purposes and is not a substitute for professional medical advice. 
              Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
