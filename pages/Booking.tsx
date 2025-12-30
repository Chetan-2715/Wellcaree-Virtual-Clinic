import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, Calendar, User, ClipboardList, Send, ArrowRight, ArrowLeft } from 'lucide-react';

const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    complaint: '',
    duration: 'Less than a month',
    doctor: '',
    mode: ''
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct the message
    const message = `*New Appointment Request*%0A%0A*Name:* ${formData.firstName} ${formData.lastName}%0A*Phone:* ${formData.phone}%0A*Doctor:* ${formData.doctor}%0A*Mode:* ${formData.mode}%0A*Complaint:* ${formData.complaint} (${formData.duration})`;

    // Use the official clinic number
    const phoneNumber = "919511757256";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

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
              Thank you for choosing Wellcaree. Our team will contact you shortly via <strong>WhatsApp/Email</strong> to confirm your slot.
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
            { s: 2, icon: ClipboardList, label: "Medical Info" },
            { s: 3, icon: Calendar, label: "Schedule" }
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
                <h3 className="text-2xl font-serif font-bold text-clinic-900">Health Overview</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500">Chief Complaint</label>
                    <textarea
                      rows={4}
                      name="complaint"
                      value={formData.complaint}
                      onChange={handleInputChange}
                      placeholder="Describe your main symptoms..."
                      className="w-full px-6 py-4 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-clinic-500 transition-all resize-none"
                    ></textarea>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500">Duration of Complaint</label>
                    <select
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-clinic-500 transition-all"
                    >
                      <option>Less than a month</option>
                      <option>1-6 months</option>
                      <option>6-12 months</option>
                      <option>More than a year</option>
                      <option>Chronic (Several years)</option>
                    </select>
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
                <h3 className="text-2xl font-serif font-bold text-clinic-900">Final Preferences</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500">Select Doctor</label>
                    <div className="grid grid-cols-2 gap-4">
                      <label className="cursor-pointer">
                        <input
                          type="radio"
                          name="doctor"
                          value="Dr. Vatsal Rathod"
                          onChange={handleInputChange}
                          checked={formData.doctor === 'Dr. Vatsal Rathod'}
                          className="hidden peer"
                        />
                        <div className="p-4 border-2 border-gray-100 rounded-xl peer-checked:border-clinic-600 peer-checked:bg-clinic-50 transition-all">
                          <p className="font-bold text-clinic-900 text-sm">Dr. Vatsal Rathod</p>
                        </div>
                      </label>
                      <label className="cursor-pointer">
                        <input
                          type="radio"
                          name="doctor"
                          value="Dr. Harshada Rathod"
                          onChange={handleInputChange}
                          checked={formData.doctor === 'Dr. Harshada Rathod'}
                          className="hidden peer"
                        />
                        <div className="p-4 border-2 border-gray-100 rounded-xl peer-checked:border-clinic-600 peer-checked:bg-clinic-50 transition-all">
                          <p className="font-bold text-clinic-900 text-sm">Dr. Harshada Rathod</p>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500">Preferred Mode</label>
                    <div className="grid grid-cols-2 gap-4">
                      <label className="cursor-pointer">
                        <input
                          type="radio"
                          name="mode"
                          value="Video Call"
                          onChange={handleInputChange}
                          checked={formData.mode === 'Video Call'}
                          className="hidden peer"
                        />
                        <div className="p-4 border-2 border-gray-100 rounded-xl peer-checked:border-clinic-600 peer-checked:bg-clinic-50 transition-all text-center">
                          <p className="font-bold text-clinic-900 text-sm">Video Call</p>
                        </div>
                      </label>
                      <label className="cursor-pointer">
                        <input
                          type="radio"
                          name="mode"
                          value="Audio Call"
                          onChange={handleInputChange}
                          checked={formData.mode === 'Audio Call'}
                          className="hidden peer"
                        />
                        <div className="p-4 border-2 border-gray-100 rounded-xl peer-checked:border-clinic-600 peer-checked:bg-clinic-50 transition-all text-center">
                          <p className="font-bold text-clinic-900 text-sm">Audio Call</p>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-xl text-xs text-yellow-800 leading-relaxed italic">
                  Note: Appointment time will be finalized by our clinic assistant based on doctor's availability and your preference.
                </div>
                <div className="flex justify-between">
                  <button onClick={prevStep} className="text-gray-500 px-10 py-4 font-bold flex items-center space-x-2 hover:text-clinic-600 transition-colors">
                    <ArrowLeft size={20} />
                    <span>Back</span>
                  </button>
                  <button onClick={handleSubmit} className="bg-clinic-600 text-white px-10 py-4 rounded-xl font-bold flex items-center space-x-2 shadow-xl shadow-clinic-100 hovered-button transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                    <span>Submit Request</span>
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
