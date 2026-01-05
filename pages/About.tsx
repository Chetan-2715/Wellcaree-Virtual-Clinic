import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Award, GraduationCap, MapPin, CheckCircle2 } from 'lucide-react';
import { DOCTORS } from '../data';

const About: React.FC = () => {
  return (
    <div className="space-y-64 pb-48">
      <Helmet>
        <title>Expert Homeopathic Doctors | Dr. Vatsal & Dr. Harshada Rathod</title>
        <meta name="description" content="Meet Dr. Vatsal Rathod and Dr. Harshada Rathod, expert homeopathic consultants dedicated to precision, ethics, and restoring health." />
      </Helmet>
      {/* Intro Section */}
      <section className="pt-40 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-serif font-bold text-clinic-950 dark:text-white mb-8 leading-tight tracking-tight"
          >
            Meet Our <span className="text-clinic-600 italic">Experts.</span>
          </motion.h1>
        </div>
      </section>

      {/* Doctors Section */}
      {DOCTORS.map((doctor, idx) => (
        <section key={idx} className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:w-full space-y-8"
            >
              <div>
                <h3 className="text-4xl font-serif font-bold text-clinic-950 dark:text-white mb-2">{doctor.name}</h3>
                <p className="text-clinic-600 font-bold uppercase tracking-widest text-sm">{doctor.title}</p>
              </div>

              <div className="flex gap-4 flex-wrap">
                <div className="bg-clinic-50 dark:bg-neutral-800 px-6 py-3 rounded-2xl flex items-center space-x-3 text-clinic-800 dark:text-clinic-400">
                  <Award size={20} />
                  <span className="font-bold text-sm">{doctor.experience} Exp.</span>
                </div>
                <div className="bg-clinic-50 dark:bg-neutral-800 px-6 py-3 rounded-2xl flex items-center space-x-3 text-clinic-800 dark:text-clinic-400">
                  <GraduationCap size={20} />
                  <span className="font-bold text-sm">{doctor.specialization}</span>
                </div>
              </div>

              <ul className="space-y-4">
                {(doctor.bio as unknown as string[]).map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                    className="flex items-start space-x-4 text-lg text-slate-600 dark:text-neutral-400 leading-relaxed font-medium"
                  >
                    <div className="w-2 h-2 rounded-full bg-clinic-400 mt-2.5 flex-shrink-0" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>

              <button className="bg-clinic-950 text-white px-8 py-4 rounded-2xl font-bold hover:bg-clinic-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]">
                Book Consultation
              </button>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Philosophy Banner */}
      <section className="bg-clinic-950 py-32 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-black mb-16 italic text-clinic-400 leading-tight">
              "Where Predictive Precision Meets Timeless Healing."
            </h2>
            <div className="grid md:grid-cols-3 gap-12 text-left">
              {[
                { title: "Precision", desc: "Meticulous case taking protocols to ensure constitutional accuracy." },
                { title: "Ethics", desc: "Unwavering commitment to patient integrity and evidence-informed practice." },
                { title: "Restoration", desc: "Targeting systemic health restoration over temporary symptom suppression." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 1 }}
                  className="space-y-6 p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all duration-500 group"
                >
                  <CheckCircle2 className="text-clinic-500 group-hover:scale-125 transition-transform duration-500" size={32} />
                  <h3 className="text-2xl font-bold uppercase tracking-widest leading-none">{item.title}</h3>
                  <p className="text-clinic-200 text-lg leading-relaxed font-medium opacity-80">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;