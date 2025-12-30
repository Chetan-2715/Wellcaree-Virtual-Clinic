import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Phone, MapPin, Mail } from 'lucide-react';
import { CLINIC_NAME, BRANCHES } from '../data';

const Footer: React.FC = () => {
  return (
    <footer className="bg-clinic-950 text-white pt-20 pb-10">
      <style>{`
        .social-wrapper {
          width: fit-content;
          perspective: 1000px;
        }

        .social-card {
          padding: 10px;
          transform-style: preserve-3d;
          transition: all 0.5s ease-in-out;
          border-radius: 1rem;
        }

        .social-buttons-container {
          display: flex;
          gap: 10px;
          transform-style: preserve-3d;
        }

        .social-button {
          width: 40px;
          height: 40px;
          padding: 8px;
          background: #134e4a; /* bg-clinic-900 equivalent */
          border-radius: 50%;
          border: none;
          display: grid;
          place-content: center;
          box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          color: white;
          transition: all 0.3s ease-in-out;
        }
        
        .social-button svg {
            width: 20px;
            height: 20px;
        }

        .social-wrapper:hover .social-card {
          transform: rotateX(15deg) rotateY(15deg);
        }

        .social-wrapper:hover .social-button {
          transform: translate3d(0, 0, 50px);
          box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.4);
        }

        .social-wrapper:hover .social-button:nth-child(1) {
          transition: transform 0.2s ease-in-out 0.1s, box-shadow 0.2s ease-in-out 0.1s;
        }

        .social-wrapper:hover .social-button:nth-child(2) {
          transition: transform 0.2s ease-in-out 0.2s, box-shadow 0.2s ease-in-out 0.2s;
        }

        .social-wrapper:hover .social-button:nth-child(3) {
          transition: transform 0.2s ease-in-out 0.3s, box-shadow 0.2s ease-in-out 0.3s;
        }
        
        .social-button:hover {
            background: #0d9488;
            color: white;
        }
      `}</style>
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

            <div className="social-wrapper">
              <div className="social-card">
                <div className="social-buttons-container">
                  <a href="#" className="social-button">
                    <Instagram />
                  </a>
                  <a href="#" className="social-button">
                    <Facebook />
                  </a>
                  <a href="#" className="social-button">
                    <Linkedin />
                  </a>
                </div>
              </div>
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
