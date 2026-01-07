import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
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
  Bone,
  CheckCircle2,
  ArrowRight
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
  const navigate = useNavigate();

  const handleBookNow = (categoryId: string, conditionId: string) => {
    navigate('/book', { state: { categoryId, conditionId } });
  };

  return (
    <div className="min-h-screen pb-32">
      <Helmet>
        <title>Treatments & Conditions | Wellcaree Virtual Clinic</title>
        <meta name="description" content="Homeopathic treatments for Arthritis, Skin diseases, Piles, PCOD, and more. Root-cause healing by Dr. Vatsal & Dr. Harshada Rathod." />
      </Helmet>
      <section className="bg-clinic-950 text-white pt-32 pb-40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-clinic-600/10 blur-[150px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl font-serif font-black mb-6 leading-none tracking-tight"
          >
            Specialized <span className="text-clinic-400">Care</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-clinic-200 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Comprehensive homoeopathic treatment for acute and chronic conditions, focusing on constitutional healing and long-term recovery.
          </motion.p>
        </div>
      </section>

      {/* Homeopathic Background Theme */}
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none mix-blend-multiply dark:mix-blend-soft-light">
        <img src="/images/homeopathy_bg.png" alt="background" className="w-full h-full object-cover" />
      </div>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 -mt-20 relative z-20">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Enhanced Navigation */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="glass p-6 rounded-[2rem] sticky top-32"
            >
              <h3 className="font-black text-clinic-950 dark:text-white mb-6 text-sm flex items-center space-x-3 uppercase tracking-[0.2em]">
                <Activity size={20} className="text-clinic-600" />
                <span>Specialties</span>
              </h3>
              <div className="flex flex-col space-y-2">
                {CATEGORIES.map((cat) => {
                  const Icon = iconMap[cat.icon] || Activity;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`flex items-center space-x-4 px-5 py-3 rounded-xl transition-all duration-300 text-left group ${activeCategory === cat.id
                        ? 'bg-clinic-600 text-white shadow-lg shadow-clinic-500/30 scale-[1.02]'
                        : 'text-slate-500 dark:text-neutral-400 hover:bg-clinic-50 dark:hover:bg-neutral-900'
                        }`}
                    >
                      <Icon size={20} className={activeCategory === cat.id ? 'text-white' : 'group-hover:text-clinic-600 transition-colors duration-300'} />
                      <span className="text-sm font-bold uppercase tracking-widest">{cat.title}</span>
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
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-8"
                >
                  <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md p-8 md:p-12 rounded-[3rem] shadow-sm border border-slate-100 dark:border-white/5">
                    <div className="mb-10">
                      <h2 className="text-3xl md:text-4xl font-serif font-black text-clinic-950 dark:text-white mb-3 leading-tight">
                        {CATEGORIES.find(c => c.id === activeCategory)?.title}
                      </h2>
                      <p className="text-lg text-clinic-600 font-bold italic">
                        {CATEGORIES.find(c => c.id === activeCategory)?.subtitle}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {CATEGORIES.find(c => c.id === activeCategory)?.conditions.map((condition, idx) => (
                        <motion.div
                          key={condition.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1, duration: 0.6 }}
                          className="border border-slate-100 dark:border-white/10 rounded-[2rem] overflow-hidden hover:border-clinic-300 dark:hover:border-clinic-800 transition-all duration-300 bg-white dark:bg-neutral-900"
                        >
                          <button
                            onClick={() => setExpandedCondition(expandedCondition === condition.id ? null : condition.id)}
                            className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                          >
                            <span className="text-xl font-bold text-clinic-950 dark:text-white uppercase tracking-wider">{condition.name}</span>
                            <motion.div
                              animate={{ rotate: expandedCondition === condition.id ? 180 : 0 }}
                              transition={{ duration: 0.4, ease: "easeInOut" }}
                            >
                              <ChevronDown className={expandedCondition === condition.id ? 'text-clinic-600' : 'text-slate-300'} size={24} />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {expandedCondition === condition.id && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                              >
                                <div className="p-6 pt-0 border-t border-slate-50 dark:border-white/5 bg-clinic-50/20 dark:bg-neutral-950/20">
                                  {condition.image && (
                                    <motion.div
                                      initial={{ opacity: 0, scale: 0.95 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      className="mb-8 rounded-3xl overflow-hidden shadow-lg h-64 md:h-80 relative group"
                                    >
                                      <img src={condition.image} alt={condition.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                                      <div className="absolute bottom-4 left-6 text-white">
                                        <p className="text-sm font-bold uppercase tracking-widest opacity-90">Visual Aid</p>
                                      </div>
                                    </motion.div>
                                  )}

                                  {/* Promotional Pricing Section */}
                                  <div className="mb-8 p-6 bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-500/20 rounded-2xl relative overflow-hidden">
                                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-orange-200 dark:bg-orange-800/20 rounded-full blur-2xl" />
                                    <h3 className="text-xl md:text-2xl font-bold text-orange-600 dark:text-orange-400 mb-4 leading-tight relative z-10">
                                      {condition.tagline || `Get Your ${condition.name} cured without Operation at just Rs ${condition.price || '1599'}/-`}
                                    </h3>
                                    <ul className="space-y-3 relative z-10 mb-6">
                                      {condition.features?.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start space-x-3 text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium">
                                          <CheckCircle2 size={20} className="text-clinic-600 shrink-0 mt-0.5" />
                                          <span>{feature}</span>
                                        </li>
                                      ))}
                                    </ul>
                                    <button
                                      onClick={() => handleBookNow(activeCategory!, condition.id)}
                                      className="relative z-10 w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-200 flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                      <span>Book Consultation for {condition.name}</span>
                                      <ArrowRight size={20} />
                                    </button>
                                  </div>

                                  <p className="text-base text-slate-600 dark:text-neutral-400 mb-6 leading-relaxed font-medium">
                                    {condition.description}
                                  </p>
                                  <div className="space-y-4">
                                    <h4 className="text-xs font-black text-clinic-800 dark:text-clinic-400 uppercase tracking-[0.2em]">Clinical Presentation</h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      {condition.symptoms.map((symptom, sIdx) => (
                                        <li key={sIdx} className="flex items-start space-x-3 text-sm text-slate-500 dark:text-neutral-500 font-medium">
                                          <div className="w-2 h-2 rounded-full bg-clinic-400 mt-1.5 flex-shrink-0 animate-pulse"></div>
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

                  {/* ... Inquiry block ... */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="bg-clinic-50/90 dark:bg-neutral-900/90 backdrop-blur-sm rounded-[3rem] p-10 border border-clinic-100 dark:border-white/5 flex flex-col lg:flex-row items-center justify-between gap-8 transition-all duration-500"
                  >
                    {/* ... content ... */}
                    <div className="text-center lg:text-left">
                      <h3 className="text-2xl font-serif font-black text-clinic-950 dark:text-white mb-2">Personalized Healing Journey</h3>
                      <p className="text-lg text-slate-500 dark:text-neutral-400 font-medium">We treat conditions beyond this list. Contact us for a full consultation.</p>
                    </div>
                    <Link to="/contact" className="bg-clinic-600 text-white px-8 py-4 rounded-[1.5rem] font-bold text-lg hover:bg-clinic-700 transition-all duration-300 shadow-xl shadow-clinic-500/30 whitespace-nowrap hover:scale-[1.02] active:scale-[0.98]">
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