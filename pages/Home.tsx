import React from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  ShieldCheck,
  HeartPulse,
  Users,
  CheckCircle2,
  Laptop
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="text-center max-w-3xl mx-auto mb-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 dark:text-white leading-tight">{title}</h2>
        {subtitle && <p className="text-lg text-slate-500 dark:text-neutral-400 font-medium italic max-w-2xl mx-auto">{subtitle}</p>}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "60px" } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="h-1 bg-clinic-600 mx-auto mt-6 rounded-full"
        />
      </motion.div>
    </div>
  );
};

const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.05]);

  return (
    <div className="space-y-64 pb-48">
      <Helmet>
        <title>Best Homeopathy Doctor Online | Wellcaree Virtual Clinic</title>
        <meta name="description" content="Consult expert homeopathic doctors online. Dr. Vatsal & Dr. Harshada Rathod offer safe, root-cause treatments for chronic diseases via video consultation." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden perspective-hero">
        <div className="absolute inset-0 z-0">
          <motion.div
            style={{ scale }}
            className="absolute top-0 right-0 w-[60%] h-[110%] bg-clinic-100/40 dark:bg-clinic-900/10 blur-[150px] rounded-full"
          />
          <div className="absolute bottom-0 left-0 w-[40%] h-[90%] bg-clinic-200/20 dark:bg-clinic-800/5 blur-[150px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full grid lg:grid-cols-2 gap-24 items-center pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 1.5, ease: "easeOut" }}
              className="inline-flex items-center space-x-4 bg-clinic-50 dark:bg-neutral-900/80 backdrop-blur-md text-clinic-700 dark:text-clinic-400 px-7 py-3 rounded-full text-xs font-black mb-10 uppercase tracking-[0.2em] border border-clinic-100 dark:border-white/5"
            >
              <HeartPulse size={18} className="animate-pulse" />
              <span className="font-bold">Trusted Homoeopathy at your Fingertips</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold text-clinic-950 dark:text-white leading-[1.05] tracking-tight mb-8">
              Healing with Care, <br />
              <span className="text-clinic-600 italic">Anytime, Anywhere.</span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-neutral-400 mb-10 max-w-lg leading-relaxed font-medium">
              Treating the person as a whole—not just the diagnosis—through safe, ethical, and personalised homoeopathic care.
            </p>

            <style>{`
              /* Specialties Button Animation */
              .specialty-btn {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 170px;
                height: 55px;
                padding: 0;
                border: none;
                background: transparent;
                font-weight: 900;
                text-transform: uppercase;
                letter-spacing: 1.2px;
                cursor: pointer;
                transition: .5s linear;
                border-radius: 0; 
              }

              .specialty-btn:before {
                position: absolute;
                content: '';
                left: 0;
                bottom: 0;
                width: 0;
                height: 0;
                border-bottom: 4px solid transparent;
                border-left: 4px solid transparent;
                box-sizing: border-box;
                transition: height .25s ease-out, width .25s ease-out .25s;
              }

              .specialty-btn:after {
                position: absolute;
                content: '';
                top: 0;
                right: 0;
                width: 0;
                height: 0;
                border-top: 4px solid transparent;
                border-right: 4px solid transparent;
                box-sizing: border-box;
                transition: height .25s ease-out, width .25s ease-out .25s;
              }

              .specialty-btn:hover {
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
              }

              .specialty-btn:hover:before {
                border-color: #0d9488;
                width: 100%;
                height: 100%;
                transition: width .25s ease-out, height .25s ease-out .25s;
              }

              .specialty-btn:hover:after {
                border-color: #0d9488;
                width: 100%;
                height: 100%;
                transition: width .25s ease-out, height .25s ease-out .25s;
              }
              
              .dark .specialty-btn:hover:before, 
              .dark .specialty-btn:hover:after {
                border-color: #2dd4bf; 
              }

              /* Consult Online Button Animation */
              .animated-button {
                position: relative;
                display: flex;
                align-items: center;
                gap: 4px;
                padding: 16px 36px;
                border: 4px solid;
                border-color: transparent;
                font-size: 16px;
                background-color: transparent;
                border-radius: 0; /* Square shape */
                font-weight: 600;
                color: #0d9488; /* Clinic-600 */
                box-shadow: 0 0 0 2px #0d9488;
                cursor: pointer;
                overflow: hidden;
                transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
              }

              .dark .animated-button {
                color: #fff;
                box-shadow: 0 0 0 2px #fff;
              }

              .animated-button svg {
                position: absolute;
                width: 24px;
                fill: #0d9488;
                z-index: 9;
                transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
              }
              
              .dark .animated-button svg {
                fill: #fff;
              }

              .animated-button .arr-1 {
                right: 16px;
              }

              .animated-button .arr-2 {
                left: -25%;
              }

              .animated-button .circle {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 20px;
                height: 20px;
                background-color: #ccfbf1; /* Clinic-100 */
                border-radius: 50%;
                opacity: 0;
                transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
              }

              .animated-button .text {
                position: relative;
                z-index: 1;
                transform: translateX(-12px);
                transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
                text-transform: uppercase;
                letter-spacing: 2px;
              }

              .animated-button:hover {
                box-shadow: 0 0 0 12px transparent;
                color: #212121;
              }

              .animated-button:hover .arr-1 {
                right: -25%;
              }

              .animated-button:hover .arr-2 {
                left: 16px;
              }

              .animated-button:hover .text {
                transform: translateX(12px);
              }

              .animated-button:hover svg {
                fill: #0f172a;
              }

              .animated-button:active {
                scale: 0.95;
                box-shadow: 0 0 0 4px #0d9488;
              }

              .animated-button:hover .circle {
                width: 220px;
                height: 220px;
                opacity: 1;
              }

              /* Patient Focused Card Animation */
              .card-animated {
                position: relative;
                width: 100%;
                max-width: 320px;
                background-color: white;
                display: flex;
                flex-direction: column;
                justify-content: end;
                padding: 40px;
                gap: 12px;
                border-radius: 2.5rem;
                cursor: pointer;
                color: #0f172a;
                box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
                overflow: hidden; /* Clip the glow */
              }
              
              .dark .card-animated {
                 background-color: #171717;
                 color: white;
              }

              .card-animated::before {
                content: '';
                position: absolute;
                inset: 0;
                width: 100%;
                height: 100%;
                border-radius: 2.5rem;
                background: linear-gradient(-45deg, #0d9488 0%, #2dd4bf 100% );
                z-index: -10;
                transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
              }

              .card-animated::after {
                content: "";
                z-index: -20;
                position: absolute;
                inset: 0;
                background: linear-gradient(-45deg, #0d9488 0%, #2dd4bf 100% );
                transform: translate3d(0, 0, 0) scale(0.95);
                filter: blur(20px);
                transition: all 0.6s ease;
              }

              .card-animated:hover::after {
                filter: blur(30px);
                transform: rotate(90deg) scale(0.95);
              }

              .card-animated:hover::before {
                transform: rotate(90deg);
              }

              /* Feature Card Animation */
              .feature-card {
                position: relative;
                width: 100%;
                height: 320px;
                background-color: white;
                border-radius: 2rem;
                overflow: hidden;
                transition: all 0.3s ease;
                box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
                border: 1px solid #e2e8f0;
              }
              
              .dark .feature-card {
                background-color: rgba(23, 23, 23, 0.5); 
                border: 1px solid rgba(255, 255, 255, 0.2); /* Stronger white outline */
              }

              .feature-content {
                position: absolute;
                left: 0;
                right: 0;
                padding: 2rem;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                
                /* Centering Animation Logic */
                top: 50%;
                transform: translateY(-50%);
                transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
              }

              .feature-icon {
                width: 4rem;
                height: 4rem;
                background-color: #f0fdfa; /* clinic-50 */
                border-radius: 1rem;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #0d9488; /* clinic-600 */
                margin-bottom: 1.5rem;
                transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
              }

              .dark .feature-icon {
                 background-color: #262626; 
              }

              .feature-title {
                font-size: 1.25rem;
                font-weight: 700;
                line-height: 1.2;
                color: #0f172a; 
                margin-bottom: 0;
                transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
              }
              
              .dark .feature-title {
                color: white;
              }

              .feature-desc {
                font-size: 0.875rem;
                color: #64748b; 
                line-height: 1.6;
                opacity: 0;
                
                /* Animating height/opacity */
                max-height: 0;
                overflow: hidden;
                margin-top: 0;
                
                transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
              }
              
              .dark .feature-desc {
                color: #a3a3a3; 
              }

              .feature-card:hover {
                 box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
              }

              .feature-card:hover .feature-content {
                 top: 2rem; /* Move content to top */
                 transform: translateY(0);
              }

              .feature-card:hover .feature-icon {
                 background-color: #0d9488; 
                 color: white;
                 transform: scale(0.9);
              }
              
              .feature-card:hover .feature-title {
                 margin-bottom: 0.5rem;
              }

              .feature-card:hover .feature-desc {
                 opacity: 1;
                 max-height: 10rem; /* Allow expansion */
                 margin-top: 0.5rem;
              }

              /* Blob Animation for Patient Card */
              .card-bg {
                position: absolute;
                top: 5px;
                left: 5px;
                width: calc(100% - 10px);
                height: calc(100% - 10px);
                z-index: 2;
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(24px);
                border-radius: 2.2rem; /* slightly less than card */
                overflow: hidden;
                outline: 2px solid white;
              }

              .dark .card-bg {
                background: rgba(23, 23, 23, 0.90);
                outline: 2px solid rgba(255, 255, 255, 0.05); /* subtle */
              }

              .card-blob {
                position: absolute;
                z-index: 1;
                top: 50%;
                left: 50%;
                width: 150px;
                height: 150px;
                border-radius: 50%;
                background-color: #0d9488; /* clinic-600 */
                opacity: 1;
                filter: blur(12px);
                animation: blob-bounce 5s infinite ease;
              }

              @keyframes blob-bounce {
                0% { transform: translate(-100%, -100%) translate3d(0, 0, 0); }
                25% { transform: translate(-100%, -100%) translate3d(100%, 0, 0); }
                50% { transform: translate(-100%, -100%) translate3d(100%, 100%, 0); }
                75% { transform: translate(-100%, -100%) translate3d(0, 100%, 0); }
                100% { transform: translate(-100%, -100%) translate3d(0, 0, 0); }
              }
            `}</style>

            <div className="flex flex-col sm:flex-row gap-8">
              <Link to="/book" className="animated-button">
                <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
                <span className="text">Consult Online</span>
                <span className="circle" />
                <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
              </Link>

              <Link to="/conditions">
                <button className="specialty-btn text-clinic-950 dark:text-white bg-white dark:bg-clinic-900 shadow-md dark:shadow-clinic-900/20 text-[0.9em]">
                  Specialties
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Hero Image Removed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex items-center justify-center relative h-full"
            style={{ y: heroY }}
          >
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.2 }}
              className="card-animated"
            >
              <div className="card-bg"></div>
              <div className="card-blob"></div>
              <div className="relative z-10 w-full h-full flex flex-col justify-end">
                <p className="text-xs uppercase tracking-[0.3em] font-black text-clinic-600 mb-4">Holistic Care</p>
                <h4 className="text-2xl font-bold mb-5 dark:text-white leading-tight">Root-Cause Healing</h4>
                <p className="text-lg text-slate-500 dark:text-neutral-400 leading-relaxed font-serif italic">
                  "Restoring Mind–Body Balance."
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { icon: Users, title: "Personalised Analysis", desc: "Detailed case taking to treat the person, not just the disease." },
            { icon: HeartPulse, title: "Root-Cause Treatment", desc: "Focusing on immunity and internal balance for long-term relief." },
            { icon: ShieldCheck, title: "Safe for All Ages", desc: "Gentle healing for children, adults, and the elderly with zero side effects." },
            { icon: Laptop, title: "Home Comfort", desc: "Secure video consultations and medicine delivery to your doorstep." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="feature-card group"
            >
              <div className="feature-content">
                <div className="feature-icon">
                  <item.icon size={28} />
                </div>
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modern Clinic Showcase */}
      <section className="bg-clinic-50 dark:bg-neutral-900 py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader title="Why Choose Us?" subtitle="Experience the perfect synergy of tradition and modern care." />

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              {[
                { title: "Zero Side Effects", desc: "Our medicines are safe, gentle, and non-addictive, boosting natural immunity." },
                { title: "Convenient Care", desc: "Consult from anywhere. Medicines delivered to your doorstep globally." },
                { title: "24/7 Support", desc: "Our team is always available to assist with your queries and treatment progress." }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex space-x-6"
                >
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-neutral-800 flex items-center justify-center text-clinic-600 shadow-sm shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 dark:text-white">{feature.title}</h4>
                    <p className="text-slate-500 dark:text-neutral-400 leading-relaxed font-medium">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-clinic-600/10 rounded-[3rem] rotate-6 transform" />
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200&h=1600"
                alt="Medicine"
                className="relative rounded-[3rem] shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto bg-clinic-950 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
          <motion.div
            whileInView={{ scale: [0.95, 1] }}
            transition={{ duration: 1.5 }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">Start Your Healing <br /> Journey Today</h2>
            <p className="text-lg md:text-xl text-clinic-200 mb-12 max-w-2xl mx-auto font-medium">Expert homoeopathic care is just a click away.</p>
            <Link to="/book" className="inline-flex items-center space-x-3 bg-white text-clinic-950 px-10 py-5 rounded-[2rem] font-bold text-lg hover:bg-clinic-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-2xl">
              <span>Book Appointment</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;