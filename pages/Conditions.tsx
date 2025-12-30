import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChevronDown,
  ChevronUp,
  Search,
  Activity,
  Sparkles,
  Flower2,
  Wind,
  Brain,
  Dna,
  Baby,
  UserCircle2,
  Droplets,
  Bone
} from 'lucide-react';
import { CATEGORIES } from '../data';

const iconMap: Record<string, any> = {
  Bone: Bone,
  Activity: Activity,
  Sparkles: Sparkles,
  Flower2: Flower2,
  Wind: Wind,
  Brain: Brain,
  Dna: Dna,
  Baby: Baby,
  UserCircle2: UserCircle2,
  Droplets: Droplets
};

const Conditions: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(CATEGORIES[0].id);
  const [expandedCondition, setExpandedCondition] = useState<string | null>(null);

  return (
    <div className="min-h-screen pb-32">
      <section className="bg-clinic-950 text-white pt-32 pb-56 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-clinic-600/10 blur-[150px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-serif font-black mb-10 leading-none tracking-tight"
          >
            Specialized <span className="text-clinic-400">Care</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl text-clinic-200 max-w-4xl mx-auto font-medium leading-relaxed"
          >
            Comprehensive homoeopathic treatment for acute and chronic conditions, focusing on constitutional healing and long-term recovery.
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 -mt-32 relative z-20">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Enhanced Navigation */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="glass p-10 rounded-[3rem] sticky top-32"
            >
              <h3 className="font-black text-clinic-950 dark:text-white mb-10 text-xl flex items-center space-x-4 uppercase tracking-[0.2em]">
                <Activity size={24} className="text-clinic-600" />
                <span>Specialties</span>
              </h3>
              <div className="flex flex-col space-y-3">
                {CATEGORIES.map((cat) => {
                  const Icon = iconMap[cat.icon] || Activity;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`flex items-center space-x-5 px-6 py-5 rounded-2xl transition-all duration-700 text-left group ${activeCategory === cat.id
                          ? 'bg-clinic-600 text-white shadow-2xl shadow-clinic-500/40'
                          : 'text-slate-500 dark:text-neutral-400 hover:bg-clinic-50 dark:hover:bg-neutral-900'
                        }`}
                    >
                      <Icon size={24} className={activeCategory === cat.id ? 'text-white' : 'group-hover:text-clinic-600 transition-colors duration-700'} />
                      <span className="text-lg font-bold uppercase tracking-widest">{cat.title}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Detailed Content */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {activeCategory && (
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-12"
                >
                  <div className="bg-white dark:bg-neutral-900 p-12 md:p-20 rounded-[4rem] shadow-sm border border-slate-100 dark:border-white/5">
                    <div className="mb-16">
                      <h2 className="text-5xl font-serif font-black text-clinic-950 dark:text-white mb-6 leading-tight">
                        {CATEGORIES.find(c => c.id === activeCategory)?.title}
                      </h2>
                      <p className="text-2xl text-clinic-600 font-bold italic">
                        {CATEGORIES.find(c => c.id === activeCategory)?.subtitle}
                      </p>
                    </div>

                    <div className="space-y-8">
                      {CATEGORIES.find(c => c.id === activeCategory)?.conditions.map((condition, idx) => (
                        <motion.div
                          key={condition.id}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1, duration: 1 }}
                          className="border border-slate-100 dark:border-white/10 rounded-[2.5rem] overflow-hidden hover:border-clinic-300 dark:hover:border-clinic-800 transition-all duration-1000"
                        >
                          <button
                            onClick={() => setExpandedCondition(expandedCondition === condition.id ? null : condition.id)}
                            className="w-full flex items-center justify-between p-10 text-left"
                          >
                            <span className="text-2xl font-black text-clinic-950 dark:text-white uppercase tracking-wider">{condition.name}</span>
                            <motion.div
                              animate={{ rotate: expandedCondition === condition.id ? 180 : 0 }}
                              transition={{ duration: 0.8, ease: "easeInOut" }}
                            >
                              <ChevronDown className={expandedCondition === condition.id ? 'text-clinic-600' : 'text-slate-300'} size={32} />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {expandedCondition === condition.id && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                              >
                                <div className="p-10 pt-0 border-t border-slate-50 dark:border-white/5 bg-clinic-50/20 dark:bg-neutral-950/20">
                                  <p className="text-xl text-slate-600 dark:text-neutral-400 mb-10 leading-relaxed font-medium">
                                    {condition.description}
                                  </p>
                                  <div className="space-y-6">
                                    <h4 className="text-sm font-black text-clinic-800 dark:text-clinic-400 uppercase tracking-[0.4em]">Clinical Presentation</h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                      {condition.symptoms.map((symptom, sIdx) => (
                                        <li key={sIdx} className="flex items-start space-x-4 text-lg text-slate-500 dark:text-neutral-500 font-medium">
                                          <div className="w-2.5 h-2.5 rounded-full bg-clinic-400 mt-2 flex-shrink-0 animate-pulse"></div>
                                          <span>{symptom}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="bg-clinic-50 dark:bg-neutral-900 rounded-[4rem] p-16 border border-clinic-100 dark:border-white/5 flex flex-col lg:flex-row items-center justify-between gap-12 transition-all duration-1000"
                  >
                    <div className="text-center lg:text-left">
                      <h3 className="text-3xl font-serif font-black text-clinic-950 dark:text-white mb-4">Personalized Healing Journey</h3>
                      <p className="text-xl text-slate-500 dark:text-neutral-400 font-medium">We treat conditions beyond this list. Contact us for a full consultation.</p>
                    </div>
                    <Link to="/contact" className="bg-clinic-600 text-white px-12 py-6 rounded-[2rem] font-black text-xl hover:bg-clinic-700 transition-all duration-700 shadow-2xl shadow-clinic-500/30 whitespace-nowrap">
                      Inquire Now
                    </Link>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conditions;