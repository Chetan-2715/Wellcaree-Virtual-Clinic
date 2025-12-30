import React, { Suspense, lazy, useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const Conditions = lazy(() => import('./pages/Conditions'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Booking = lazy(() => import('./pages/Booking'));

const PageWrapper = ({ children }: { children?: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // Snappier apple-like easing
  >
    {children}
  </motion.div>
);

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
  };

  return (
    <Router>
      <div className={`flex flex-col min-h-screen transition-colors duration-1000 bg-white dark:bg-neutral-950 text-slate-900 dark:text-neutral-100`}>
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <main className="flex-grow pt-20 overflow-hidden">
          <Suspense fallback={
            <div className="flex items-center justify-center h-[60vh]">
              <motion.div
                animate={{
                  rotate: 360,
                  borderRadius: ["20%", "50%", "20%"],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-16 h-16 border-t-4 border-l-4 border-clinic-500 rounded-full"
              />
            </div>
          }>
            <AnimatedRoutes />
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname} className="w-full">
        <Routes location={location}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/conditions" element={<PageWrapper><Conditions /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="/book" element={<PageWrapper><Booking /></PageWrapper>} />
        </Routes>
      </div>
    </AnimatePresence>
  );
};

export default App;