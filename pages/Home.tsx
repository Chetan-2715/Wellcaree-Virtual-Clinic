import React from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  ShieldCheck,
  HeartPulse,
  Users,
  CheckCircle2,
  Laptop,
  ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { FAQS } from '../data';

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

const FAQItem: React.FC<{ faq: { question: string; answer: string } }> = ({ faq }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-white/5 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 font-bold text-lg text-left text-clinic-950 dark:text-white transition-colors hover:bg-clinic-50/50 dark:hover:bg-white/5"
      >
        {faq.question}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} className="text-clinic-500" />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-gray-600 dark:text-neutral-400 leading-relaxed font-medium text-left">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
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
              Personalised Homeopathic Care, <br />
              <span className="text-clinic-600 italic">Anytime. Anywhere.</span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-neutral-400 mb-10 max-w-lg leading-relaxed font-medium">
              Wellcaree Virtual Clinic is a modern, patient-centric homeopathic healthcare platform dedicated to delivering high-quality consultation and treatment through virtual care.
            </p>



            <div className="flex flex-col sm:flex-row gap-5">
              <Link to="/book" className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-clinic-600 text-white rounded-full font-bold text-lg hover:bg-clinic-700 transition-all duration-300 shadow-lg hover:shadow-clinic-500/30 hover:-translate-y-1">
                <span>Book Online Consultation</span>
                <CheckCircle2 size={20} />
              </Link>

              <Link to="/conditions" className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-white dark:bg-white/5 text-clinic-900 dark:text-white rounded-full font-bold text-lg border-2 border-clinic-100 dark:border-white/10 hover:border-clinic-600 dark:hover:border-clinic-400 transition-all duration-300 hover:-translate-y-1">
                <span>View Specialities</span>
                <ShieldCheck size={20} className="text-clinic-400 group-hover:text-clinic-600 transition-colors" />
              </Link>
            </div>
          </motion.div>

          {/* Right Side Composition */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="hidden lg:block relative h-[650px] w-full perspective-1000"
            style={{ y: heroY }}
          >
            {/* Abstract Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-clinic-200/40 to-teal-200/40 dark:from-clinic-900/60 dark:to-teal-900/30 rounded-full blur-3xl animate-pulse" />

            {/* Card 1: Main Feature (Top Right) */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, x: 50 }}
              animate={{
                scale: 1,
                opacity: 1,
                x: 0,
                y: [0, -10, 0]
              }}
              transition={{
                delay: 0.4,
                duration: 0.8,
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="absolute top-0 right-0 w-80 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl border border-white/50 dark:border-white/10 z-20 group hover:scale-[1.02] transition-transform duration-500"
            >
              <div className="w-14 h-14 bg-clinic-50 dark:bg-neutral-800 rounded-2xl flex items-center justify-center text-clinic-600 mb-6 group-hover:rotate-12 transition-transform duration-500">
                <HeartPulse size={28} />
              </div>
              <h3 className="text-2xl font-bold text-clinic-950 dark:text-white mb-2">Root-Cause Healing</h3>
              <p className="text-slate-500 dark:text-neutral-400 font-medium leading-relaxed italic">
                "Restoring Mind–Body Balance naturally."
              </p>
            </motion.div>

            {/* Card 2: Stats (Middle Left) */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                y: [0, -8, 0]
              }}
              transition={{
                delay: 0.6,
                duration: 0.8,
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }
              }}
              className="absolute top-[40%] left-0 w-64 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md p-6 rounded-[2rem] shadow-xl border border-white/40 dark:border-white/5 z-10 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center text-orange-600">
                  <Users size={20} />
                </div>
                <span className="font-black text-3xl text-clinic-900 dark:text-white">5K+</span>
              </div>
              <p className="text-sm font-bold text-slate-600 dark:text-neutral-400">Happy Patients Worldwide</p>
            </motion.div>

            {/* Card 3: Doctors (Bottom Right) */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: [0, -12, 0],
                opacity: 1
              }}
              transition={{
                delay: 0.8,
                duration: 0.8,
                y: {
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }
              }}
              className="absolute bottom-0 right-12 w-72 bg-clinic-600 text-white p-6 rounded-[2rem] shadow-xl shadow-clinic-600/30 z-30 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 bg-[url('https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=100&h=100')] bg-cover" />
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 bg-[url('https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=100&h=100')] bg-cover" />
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-clinic-800 flex items-center justify-center text-xs font-bold">+</div>
                </div>
                <ShieldCheck className="text-white/80" />
              </div>
              <h4 className="font-bold text-lg mb-1">Expert Doctors</h4>
              <p className="text-clinic-100 text-sm">Dedicated to your holistic health journey.</p>
            </motion.div>


          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader title="Why Choose Wellcaree?" subtitle="A modern approach to classical homeopathy." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Laptop, title: "100% Virtual", desc: "Paperless and tech-enabled clinic for seamless experiences." },
            { icon: Users, title: "Expert Doctors", desc: "Experience tailored treatment based on individual constitution." },
            { icon: HeartPulse, title: "Care Coordination", desc: "Dedicated support for regular follow-ups and guidance." },
            { icon: ShieldCheck, title: "Lifestyle Support", desc: "Diet and lifestyle guidance tailored to your condition." },
            { icon: CheckCircle2, title: "Continuous Monitoring", desc: "Regular treatment adjustments for best results." },
            { icon: Users, title: "Accessible Care", desc: "Reach us from cities, towns, rural areas, or abroad." },
            { icon: HeartPulse, title: "Personalized", desc: "Treatment based on your unique individual constitution." },
            { icon: ShieldCheck, title: "Global Reach", desc: "Tremendous results worldwide inspire our virtual model." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.05, duration: 0.8 }}
              className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-white/5 p-8 rounded-3xl hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-clinic-50 dark:bg-neutral-800 text-clinic-600 rounded-xl flex items-center justify-center mb-4">
                <item.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-clinic-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 dark:text-neutral-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-clinic-50 dark:bg-neutral-900 py-32 overflow-hidden my-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <SectionHeader title="Our Approach" />
          <p className="text-xl md:text-2xl text-gray-700 dark:text-neutral-300 leading-relaxed font-medium mb-12">
            We treat the person as a whole, not just the disease. Experience detailed consultations and individualized care for long-term healing.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white dark:bg-neutral-950 p-8 rounded-[2rem] shadow-sm">
              <h4 className="text-xl font-bold text-clinic-700 dark:text-clinic-400 mb-4">Our Vision</h4>
              <p className="text-gray-600 dark:text-neutral-400 leading-relaxed">
                Authentic, holistic homeopathy made accessible. Inspired by our global success, we bring expert care directly to the comfort of your home.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-950 p-8 rounded-[2rem] shadow-sm">
              <h4 className="text-xl font-bold text-clinic-700 dark:text-clinic-400 mb-4">Global Reach</h4>
              <p className="text-gray-600 dark:text-neutral-400 leading-relaxed">
                Rooted in classical homeopathy, we leverage digital tools to provide seamless consultations and follow-ups for patients worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="max-w-4xl mx-auto px-6 lg:px-12 mb-32">
        <SectionHeader title="Frequently Asked Questions" subtitle="Everything you need to know about our virtual care." />
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <FAQItem key={i} faq={faq} />
          ))}
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto bg-clinic-950 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
          <motion.div
            whileInView={{ scale: [0.95, 1] }}
            transition={{ duration: 1.5 }}
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