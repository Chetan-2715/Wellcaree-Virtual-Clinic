import React from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
  ShieldCheck,
  HeartPulse,
  Users,
  ArrowRight,
  CheckCircle2,
  Laptop,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { WORKFLOW } from '../data';

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="text-center max-w-4xl mx-auto mb-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 dark:text-white leading-tight tracking-tight">{title}</h2>
        {subtitle && <p className="text-lg md:text-xl text-slate-500 dark:text-neutral-400 font-medium italic max-w-2xl mx-auto">{subtitle}</p>}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "80px" } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="h-1 bg-clinic-600 mx-auto mt-8 rounded-full"
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
              <span>Modern Homoeopathy Solutions</span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-serif font-bold text-clinic-950 dark:text-white leading-[1.05] tracking-tight mb-10">
              Deep <br />
              <span className="text-clinic-600 italic">Healing.</span> <br />
              Personalized.
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 dark:text-neutral-400 mb-12 max-w-lg leading-relaxed font-medium">
              We heal from within by treating the person as a whole, focusing on the root cause for sustainable wellness.
            </p>

            <div className="flex flex-col sm:flex-row gap-10">
              <Link to="/book" className="group relative bg-clinic-600 text-white px-14 py-7 rounded-[2rem] font-black text-xl shadow-[0_30px_60px_-15px_rgba(46,154,122,0.4)] transition-all duration-1000 hover:scale-105 active:scale-95 flex items-center justify-center space-x-4 overflow-hidden">
                <span className="relative z-10 uppercase tracking-widest">Consult Online</span>
                <ArrowRight size={28} className="relative z-10 group-hover:translate-x-3 transition-transform duration-1000 ease-out" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-1000 ease-out" />
              </Link>
              <Link to="/conditions" className="text-clinic-950 dark:text-white px-10 py-7 font-black text-xl flex items-center justify-center space-x-4 group text-reveal-hover transition-colors">
                <span className="uppercase tracking-widest">Our Specialties</span>
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-4 h-4 bg-clinic-600 rounded-full group-hover:scale-150 transition-transform duration-700"
                />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
            style={{ y: heroY }}
          >
            <div className="relative z-10 rounded-[5rem] overflow-hidden shadow-[0_80px_120px_-30px_rgba(0,0,0,0.3)] dark:shadow-[0_80px_120px_-30px_rgba(46,154,122,0.15)] ring-1 ring-white/10">
              <img
                src="https://images.unsplash.com/photo-1631217818242-27497082017f?auto=format&fit=crop&q=80&w=1200&h=1600"
                alt="Modern Clinic Consultation Room"
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-2000 hover:scale-105"
              />
            </div>
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.2 }}
              className="absolute -bottom-10 -left-10 glass p-10 rounded-[2.5rem] shadow-2xl z-20 max-w-[320px]"
            >
              <p className="text-xs uppercase tracking-[0.3em] font-black text-clinic-600 mb-4">Patient Focused</p>
              <h4 className="text-2xl font-bold mb-5 dark:text-white leading-tight">Ethical & Precise Care</h4>
              <p className="text-lg text-slate-500 dark:text-neutral-400 leading-relaxed font-serif italic">
                "Healing is not merely the absence of symptoms, but the presence of vitality."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { icon: Users, title: "Deep Case Analysis", desc: "Every journey is unique. We dedicate time to understand your constitution deeply." },
            { icon: HeartPulse, title: "Root-Cause Focused", desc: "We don't suppress. We identify and resolve the fundamental imbalances." },
            { icon: ShieldCheck, title: "Universal Safety", desc: "Our medicines are non-toxic, safe for infants, pregnant women, and the elderly." },
            { icon: Laptop, title: "Virtual Clinic Access", desc: "World-class homoeopathic expertise from the comfort and privacy of your home." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10, scale: 1.01 }}
              className="p-10 bg-white dark:bg-neutral-900/50 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-20 h-20 bg-clinic-50 dark:bg-neutral-800 rounded-2xl flex items-center justify-center text-clinic-600 mb-8 group-hover:bg-clinic-600 group-hover:text-white transition-all duration-500 ease-in-out">
                <item.icon size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white leading-tight tracking-tight">{item.title}</h3>
              <p className="text-slate-500 dark:text-neutral-400 text-base leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modern Clinic Showcase */}
      <section className="bg-clinic-50 dark:bg-neutral-900/40 py-64 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=1200&h=800"
                alt="Online Consultation with Doctor"
                className="rounded-[5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] dark:shadow-none relative z-10"
              />
              <div className="absolute -inset-10 bg-clinic-200/20 dark:bg-clinic-600/5 blur-[100px] -z-0" />
            </motion.div>
            <div className="space-y-16">
              <SectionHeader
                title="Accessible Healing"
                subtitle="The future of medical care is at your fingertips."
              />
              <p className="text-2xl text-slate-600 dark:text-neutral-400 leading-relaxed font-medium">
                Our virtual clinic bridges the distance between ancient medical wisdom and modern digital convenience. High-quality care is now borderless.
              </p>
              <div className="grid grid-cols-2 gap-12">
                {[
                  { val: "15+", label: "Combined Exp." },
                  { val: "100%", label: "Safe Potencies" }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.2, duration: 1.2 }}
                    className="space-y-4 border-l-2 border-clinic-600 pl-8"
                  >
                    <p className="text-6xl font-black text-clinic-600">{stat.val}</p>
                    <p className="text-sm uppercase tracking-[0.3em] font-black text-slate-400 dark:text-neutral-500">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-clinic-950 dark:bg-neutral-900 rounded-[5rem] p-24 md:p-40 text-center text-white overflow-hidden shadow-3xl"
        >
          <img
            src="https://images.unsplash.com/photo-1516549221187-864172b27af2?auto=format&fit=crop&q=80&w=2000&h=1000"
            alt="Healing Nature Environment"
            className="absolute inset-0 w-full h-full object-cover opacity-20 transition-transform duration-[10s] hover:scale-110"
          />
          <div className="relative z-10 max-w-5xl mx-auto space-y-16">
            <h2 className="text-6xl md:text-9xl font-serif font-black leading-none">Your Path to <br /> Real Health.</h2>
            <p className="text-2xl md:text-3xl text-clinic-100 max-w-3xl mx-auto italic font-medium opacity-80 leading-relaxed">
              "We don't just treat the disease; we treat the person behind it."
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-12">
              <Link to="/book" className="group bg-white text-clinic-900 px-16 py-8 rounded-[2.5rem] font-black text-2xl shadow-2xl transition-all duration-1000 hover:scale-110 uppercase tracking-[0.2em]">
                Book Consultation
              </Link>
              <a href="tel:+919175930155" className="flex items-center justify-center space-x-5 border-2 border-white/30 px-16 py-8 rounded-[2.5rem] font-black text-2xl transition-all duration-1000 hover:bg-white/10 group">
                <Phone size={28} className="group-hover:rotate-12 transition-transform duration-700" />
                <span className="uppercase tracking-widest">+91 9175930155</span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;