import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Building, User, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);

    // Unga Web3Forms Access Key added here
    formData.append("access_key", "55c1dff3-b81b-4976-a131-6630d8345fa3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setIsSubmitted(true);
      setLoading(false);
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white/5 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-8 md:p-12 shadow-[0_0_30px_rgba(6,182,212,0.1)]"
      >
        <div className="text-center mb-10">
          <h2 className="text-cyan-400 font-medium tracking-widest uppercase mb-2 text-sm">
            Hiring / Collaboration
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Recruiter Quick Connect
          </h3>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Are you a recruiter or hiring manager? Drop your details here for instant connection & credentials.
          </p>
        </div>

        {isSubmitted ? (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-12 flex flex-col items-center justify-center"
          >
            <CheckCircle className="w-16 h-16 text-teal-400 mb-4 animate-bounce" />
            <h4 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h4>
            <p className="text-gray-400">Thank you for reaching out. I'll get back to you shortly via LinkedIn or Email.</p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-6 px-6 py-2 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors text-sm"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <User className="w-4 h-4 text-cyan-400" /> Your Name / Recruiter Name
                </label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  placeholder="e.g. John Doe"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                />
              </div>

              {/* Company */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <Building className="w-4 h-4 text-teal-4