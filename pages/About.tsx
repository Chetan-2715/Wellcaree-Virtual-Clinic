import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, GraduationCap, MapPin, CheckCircle2 } from 'lucide-react';
import { DOCTORS } from '../data';

const About: React.FC = () => {
  return (
    <div className="space-y-64 pb-48">
      {/* Intro Section */}
      <section className="pt-40 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-serif font-black text-clinic-950 dark:text-white mb-12 leading-none tracking-tight"
          >
            Academic <br /> <span className="text-clinic-600 italic">Precision.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 2, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl text-slate-500 dark:text-neutral-400 leading-relaxed font-medium max-w-4xl"
          >
            A dedicated husband-wife partnership integrating classical homoeopathic principles with contemporary clinical standards.
          </motion.p>
        </div>
      </section>

      {/* Doctor Portfolios */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 space-y-80">
        {DOCTORS.map((doc, idx) => (
          <div key={idx} className={`grid lg:grid-cols-2 gap-40 items-center ${idx % 2 !== 0 ? 'lg:direction-rtl' : ''}`}>
            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
              className={`relative ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}
            >
              <div className="aspect-[3/4] rounded-[6rem] overflow-hidden shadow-[0_100px_150px_-30px_rgba(0,0,0,0.25)] dark:shadow-[0_100px_150px_-30px_rgba(46,154,122,0.15)] relative z-10 transition-transform duration-2000 hover:scale-[1.03] group">
                <img src={doc.image} alt={doc.name} className="w-full h-full object-cover grayscale transition-all duration-2000 group-hover:grayscale-0" />
              </div>
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-clinic-100 dark:bg-neutral-800 rounded-full -z-0 opacity-40 blur-3xl animate-pulse" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
              className={`space-y-16 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}
            >
              <div>
                <motion.h2
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.8 }}
                  className="text-6xl font-serif font-black text-clinic-950 dark:text-white mb-6"
                >
                  {doc.name}
                </motion.h2>
                <p className="text-clinic-600 font-black uppercase tracking-[0.3em] text-xl">{doc.title}</p>
              </div>

              <p className="text-2xl md:text-3xl text-slate-600 dark:text-neutral-400 leading-relaxed font-medium italic">
                "{doc.bio}"
              </p>

              <div className="grid grid-cols-2 gap-10">
                <div className="p-12 bg-clinic-50 dark:bg-neutral-900/50 rounded-[4rem] border border-clinic-100 dark:border-white/5 transition-all duration-1000 hover:shadow-2xl">
                  <Award className="text-clinic-600 mb-8" size={56} />
                  <h4 className="font-black text-2xl text-clinic-950 dark:text-white uppercase tracking-widest mb-2">Clinical Exp.</h4>
                  <p className="text-xl text-slate-500 font-bold">{doc.experience}</p>
                </div>
                <div className="p-12 bg-clinic-50 dark:bg-neutral-900/50 rounded-[4rem] border border-clinic-100 dark:border-white/5 transition-all duration-1000 hover:shadow-2xl">
                  <GraduationCap className="text-clinic-600 mb-8" size={56} />
                  <h4 className="font-black text-2xl text-clinic-950 dark:text-white uppercase tracking-widest mb-2">Primary Focus</h4>
                  <p className="text-xl text-slate-500 font-bold">{doc.specialization}</p>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </section>

      {/* Philosophy Banner */}
      <section className="bg-clinic-950 py-64 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-6xl md:text-8xl font-serif font-black mb-24 italic text-clinic-400 leading-tight">
              "Precision Meets Timeless Healing."
            </h2>
            <div className="grid md:grid-cols-3 gap-20 text-left">
              {[
                { title: "Precision", desc: "Meticulous case taking protocols to ensure constitutional accuracy." },
                { title: "Ethics", desc: "Unwavering commitment to patient integrity and evidence-informed practice." },
                { title: "Restoration", desc: "Targeting systemic health restoration over temporary symptom suppression." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.4, duration: 1.5 }}
                  className="space-y-10 p-16 bg-white/5 rounded-[5rem] border border-white/10 hover:bg-white/10 transition-all duration-1000 group"
                >
                  <CheckCircle2 className="text-clinic-500 group-hover:scale-125 transition-transform duration-1000" size={48} />
                  <h3 className="text-4xl font-black uppercase tracking-widest leading-none">{item.title}</h3>
                  <p className="text-clinic-200 text-xl leading-relaxed font-medium opacity-80">{item.desc}</p>
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