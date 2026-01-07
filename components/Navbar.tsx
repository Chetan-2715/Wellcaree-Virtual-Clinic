import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  toggleTheme: () => void;
  theme: 'light' | 'dark';
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Conditions', path: '/conditions' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (

    <nav className={`fixed w-full z-[100] transition-all duration-500 ease-in-out ${scrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 180, scale: 1.05 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-10 h-10 bg-clinic-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-clinic-500/20"
            >
              W
            </motion.div>
            <span className="font-serif text-xl font-bold tracking-tight dark:text-white transition-colors duration-500">
              Wellcare Virtual Homeopathic Clinic
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 text-reveal-hover ${location.pathname === link.path ? 'text-clinic-600' : 'text-slate-600 dark:text-neutral-400 hover:text-clinic-600'
                  }`}
              >
                {link.name}
              </Link>
            ))}

            <motion.button
              whileHover={{ scale: 1.05, rotate: 15 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-clinic-600 transition-all duration-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            <Link to="/book" className="relative group overflow-hidden bg-clinic-600 text-white px-7 py-3 rounded-xl text-xs font-bold shadow-xl shadow-clinic-500/20 hover:scale-[1.05] active:scale-[0.98] transition-all duration-300">
              <span className="relative z-10 flex items-center space-x-2 uppercase tracking-widest">
                <Calendar size={16} />
                <span>Book</span>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 text-clinic-600">
              {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-clinic-950 dark:text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[90] h-screen bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl p-10 flex flex-col justify-center"
          >
            <div className="space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
                >
                  <Link
                    to={link.path}
                    className="text-5xl font-serif font-bold text-clinic-950 dark:text-white tracking-tight"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="pt-8"
              >
                <Link to="/book" onClick={() => setIsOpen(false)} className="block bg-clinic-600 text-white text-center py-5 rounded-2xl text-xl font-bold shadow-xl shadow-clinic-500/30">
                  Book Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;