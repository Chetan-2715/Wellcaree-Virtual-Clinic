import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { CheckCircle2, Calendar, User, Stethoscope, Send, ArrowRight, ArrowLeft } from 'lucide-react';
import { CATEGORIES } from '../data';

const Booking: React.FC = () => {
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialtyId: '',
    conditionId: '',
    complaint: '',
    mode: 'Video Call'
  });

  // Pre-fill from navigation state
  useEffect(() => {
    if (location.state) {
      const { categoryId, conditionId } = location.state;
      if (categoryId && conditionId) {
        setFormData(prev => ({
          ...prev,
          specialtyId: categoryId,
          conditionId: conditionId
        }));
      }
    }
  }, [location.state]);

  const getDoctorForCategory = (categoryId: string) => {
    // Logic based on doctor bios in data.ts
    // Dr. Harshada: Women's Health, Child Health
    if (categoryId === 'women' || categoryId === 'child') {
      return 'Dr. Harshada Rathod';
    }
    // Dr. Vatsal: All others (Joints, Skin, Digestive, etc.)
    return 'Dr. Vatsal Rathod';
  };

  const getSelectedConditionPrice = () => {
    if (!formData.specialtyId || !formData.conditionId) return '0';
    const category = CATEGORIES.find(c => c.id === formData.specialtyId);
    const condition = category?.conditions.find(c => c.id === formData.conditionId);
    return condition?.price || '0';
  };

  const selectedCategory = CATEGORIES.find(c => c.id === formData.specialtyId);
  const selectedCondition = selectedCategory?.conditions.find(c => c.id === formData.conditionId);
  const assignedDoctor = getDoctorForCategory(formData.specialtyId);
  const price = getSelectedConditionPrice();

  const validateStep = (currentStep: number) => {
    if (currentStep === 1) {
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
        alert("Please fill in all personal details.");
        return false;
      }
    }
    if (currentStep === 2) {
      if (!formData.specialtyId || !formData.conditionId) {
        alert("Please select a specialty and a condition.");
        return false;
      }
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(s => s + 1);
    }
  };

  const prevStep = () => setStep(s => s - 1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
      // If specialty changes, reset condition
      if (name === 'specialtyId') {
        return { ...prev, specialtyId: value, conditionId: '' };
      }
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep(2)) return; // Step 3 is review, so really just need to validate up to 2

    // Construct the message
    const rawMessage = `*New Appointment Request*\n\n*Name:* ${formData.firstName} ${formData.lastName}\n*Phone:* ${formData.phone}\n*Condition:* ${selectedCondition?.name} (${selectedCategory?.title})\n*Consultation Fee:* ₹${price}\n*Complaint:* ${formData.complaint || 'Not specified'}`;

    // Encode the message to ensure characters like '&' don't break the URL
    const encodedMessage = encodeURIComponent(rawMessage);

    // Use the official clinic number
    const phoneNumber = "919511757256";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Show Success UI
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full text-center space-y-8 p-12 glass rounded-[3rem] shadow-2xl"
        >
          <div className="w-24 h-24 bg-clinic-100 text-clinic-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 size={48} />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-serif font-bold text-clinic-950">Appointment Requested!</h2>
            <p className="text-gray-600">
              Thank you for choosing Wellcaree. Our team will contact you shortly via <strong>WhatsApp</strong> to confirm your slot.
            </p>
          </div>
          <button
            onClick={() => window.location.href = '/'}
            className="w-full bg-clinic-600 text-white py-4 rounded-2xl font-bold"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20 pt-10">
      <Helmet>
        <title>Book Appointment | Wellcaree Virtual Clinic</title>
        <meta name="description" content="Book your online consultation with expert homeopathic doctors. Simple 3-step process to start your healing journey." />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-clinic-950 mb-4">Book Your Consultation</h1>
          <p className="text-gray-500">Healing is just a few steps away.</p>
        </div>

        {/* Progress Tracker */}
        <div className="flex items-center justify-center mb-12 space-x-4 md:space-x-8">
          {[
            { s: 1, icon: User, label: "Basic Info" },
            { s: 2, icon: Stethoscope, label: "Condition" }, // Changed icon and label
            { s: 3, icon: Calendar, label: "Confirm" }      // Changed label
          ].map((item, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center space-y-2">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${step >= item.s ? 'bg-clinic-600 text-white shadow-lg' : 'bg-gray-100 text-gray-400'
                  }`}>
                  <item.icon size={20} />
                </div>
                <span className={`text-xs font-bold uppercase tracking-widest ${step >= item.s ? 'text-clinic-900' : 'text-gray-400'
                  }`}>{item.label}</span>
              </div>
              {i < 2 && (
                <div className={`w-12 md:w-20 h-0.5 transition-all ${step > item.s ? 'bg-clinic-600' : 'bg-gray-200'}`}></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Form Container */}
        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-100">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <h3 className="text-2xl font-serif font-bold text-clinic-900">Personal Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-clinic-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-clinic-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-clinic-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500">Phone (WhatsApp preferred)</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-clinic-500 transition-all"
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <button onClick={nextStep} className="bg-clinic-600 text-white px-10 py-4 rounded-xl font-bold flex items-center space-x-2 hovered-button transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl">
                    <span>Next Step</span>
                    <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <h3 className="text-2xl font-serif font-bold text-clinic-900">Select Treatment</h3>
                <div className="space-y-6">

                  {/* Specialties Dropdown */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500">Select Specialty</label>
                    <select
                      name="specialtyId"
                      value={formData.specialtyId}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-clinic-500 transition-all"
                    >
                      <option value="">-- Choose Category --</option>
                      {CATEGORIES.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.title}</option>
                      ))}
                    </select>
                  </div>

                  {/* Condition Dropdown (Dependent) */}
                  <AnimatePresence>
                    {formData.specialtyId && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="space-y-2"
                      >
                        <label className="text-sm font-bold text-gray-500">Select Condition</label>
                        <select
                          name="conditionId"
                          value={formData.conditionId}
                          onChange={handleInputChange}
                          className="w-full px-6 py-4 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-clinic-500 transition-all"
                        >
                          <option value="">-- Choose Disease --</option>
                          {CATEGORIES.find(c => c.id === formData.specialtyId)?.conditions.map(cond => (
                            <option key={cond.id} value={cond.id}>{cond.name}</option>
                          ))}
                        </select>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="space-y-2 pt-4">
                    <label className="text-sm font-bold text-gray-500">Other Details (Optional)</label>
                    <textarea
                      rows={2}
                      name="complaint"
                      value={formData.complaint}
                      onChange={handleInputChange}
                      placeholder="Any specific symptoms?"
                      className="w-full px-6 py-4 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-clinic-500 transition-all resize-none"
                    ></textarea>
                  </div>

                </div>
                <div className="flex justify-between">
                  <button onClick={prevStep} className="text-gray-500 px-10 py-4 font-bold flex items-center space-x-2 hover:text-clinic-600 transition-colors">
                    <ArrowLeft size={20} />
                    <span>Back</span>
                  </button>
                  <button onClick={nextStep} className="bg-clinic-600 text-white px-10 py-4 rounded-xl font-bold flex items-center space-x-2 hovered-button transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl">
                    <span>Next Step</span>
                    <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <h3 className="text-2xl font-serif font-bold text-clinic-900">Review & Confirm</h3>

                <div className="bg-clinic-50 p-6 rounded-2xl space-y-4 border border-clinic-100">
                  <div className="flex justify-between items-center py-2 border-b border-clinic-200/50">
                    <span className="text-gray-600 font-medium">Patient:</span>
                    <span className="font-bold text-gray-800">{formData.firstName} {formData.lastName}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-clinic-200/50">
                    <span className="text-gray-600 font-medium">Condition:</span>
                    <span className="font-bold text-gray-800">{selectedCondition?.name}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-clinic-200/50">
                    <span className="text-gray-600 font-medium">Category:</span>
                    <span className="font-bold text-gray-800">{selectedCategory?.title}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-clinic-200/50">
                    <span className="text-gray-600 font-medium">Assigned Doctor:</span>
                    <span className="font-bold text-clinic-700">{assignedDoctor}</span>
                  </div>
                  <div className="flex justify-between items-center py-4">
                    <span className="text-lg font-bold text-gray-800">Total Consultation Amount:</span>
                    <span className="text-2xl font-bold text-clinic-600">₹{price}</span>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl text-xs text-blue-800 leading-relaxed italic text-center">
                  By clicking submit, you will be redirected to WhatsApp to send your appointment details directly to our clinic.
                </div>

                <div className="flex justify-between">
                  <button onClick={prevStep} className="text-gray-500 px-10 py-4 font-bold flex items-center space-x-2 hover:text-clinic-600 transition-colors">
                    <ArrowLeft size={20} />
                    <span>Back</span>
                  </button>
                  <button onClick={handleSubmit} className="bg-clinic-600 text-white px-10 py-4 rounded-xl font-bold flex items-center space-x-2 shadow-xl shadow-clinic-100 hovered-button transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                    <span>Submit via WhatsApp</span>
                    <Send size={20} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Booking;
