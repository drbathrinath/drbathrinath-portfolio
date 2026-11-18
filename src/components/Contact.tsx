
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  CheckCircle,
  Building,
  User,
  Mail,
  MessageSquare,
  Pill,
  Phone,
  MapPin,
  Heart
} from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append(
      'access_key',
      '55c1dff3-b81b-4976-a131-6630d8345fa3'
    );

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: formData
        }
      );

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        form.reset();
      } else {
        console.log('Error', data);
      }
    } catch (error) {
      console.error('Submission failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle =
    'w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/70 focus:shadow-[0_0_14px_rgba(6,182,212,0.15)] transition-all duration-300 text-sm';

  return (
    <section
      id="contact"
      className="py-20 px-6 max-w-4xl mx-auto relative z-10"
    >
      {/* CONTACT PROFILE CARD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-10 bg-white/5 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-6 md:p-10 text-center shadow-[0_0_20px_rgba(6,182,212,0.06)] hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.18)] transition-all duration-500"
      >
        {/* PHARMACY ICON */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-cyan-500/10 border border-cyan-400/30 shadow-[0_0_20px_rgba(6,182,212,0.12)]">
            <Pill className="w-7 h-7 text-cyan-400" />
          </div>
        </div>

        <p className="text-cyan-400 text-xs md:text-sm font-medium tracking-[0.25em] uppercase mb-3">
          Get In Touch
        </p>

        <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
          Dr. BATHRINATH M S
        </h2>

        <p className="text-gray-400 mt-4 text-xs md:text-base leading-relaxed max-w-2xl mx-auto">
          Pharm.D Graduate | Pharmacovigilance & Drug Safety Enthusiast |
          Clinical Data Management Professional
        </p>

        {/* CONTACT DETAILS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mt-8">

          {/* EMAIL */}
          <a
            href="mailto:bathrinathshanmugam7@gmail.com"
            className="min-w-0 flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-black/30 border border-white/10 hover:border-cyan-400/60 hover:bg-cyan-500/5 hover:shadow-[0_0_22px_rgba(6,182,212,0.16)] hover:-translate-y-1 transition-all duration-300"
          >
            <Mail className="w-5 h-5 text-cyan-400" />

            <div className="min-w-0 w-full">
              <p className="text-gray-500 text-xs mb-1">
                Email
              </p>

              <p className="text-white text-xs leading-relaxed break-all">
                bathrinathshanmugam7@gmail.com
              </p>
            </div>
          </a>

          {/* PHONE */}
          <a
            href="tel:+919042511773"
            className="min-w-0 flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-black/30 border border-white/10 hover:border-teal-400/60 hover:bg-teal-500/5 hover:shadow-[0_0_22px_rgba(20,184,166,0.16)] hover:-translate-y-1 transition-all duration-300"
          >
            <Phone className="w-5 h-5 text-teal-400" />

            <div>
              <p className="text-gray-500 text-xs mb-1">
                Phone
              </p>

              <p className="text-white text-xs md:text-sm">
                +91 90425 11773
              </p>
            </div>
          </a>

          {/* LOCATION */}
          <div
            className="min-w-0 flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-black/30 border border-white/10 hover:border-blue-400/60 hover:bg-blue-500/5 hover:shadow-[0_0_22px_rgba(59,130,246,0.16)] hover:-translate-y-1 transition-all duration-300"
          >
            <MapPin className="w-5 h-5 text-blue-400" />

            <div>
              <p className="text-gray-500 text-xs mb-1">
                Location
              </p>

              <p className="text-white text-xs md:text-sm">
                Chennai, India
              </p>
            </div>
          </div>
        </div>

        {/* PROFILE FOOTER */}
        <div className="border-t border-white/10 mt-8 pt-5">
          <p className="text-gray-500 text-xs flex items-center justify-center gap-1.5 flex-wrap">
            Built with
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
            for patient safety
            <span className="mx-1 text-gray-700">·</span>
            © 2026 Dr. Bathrinath M S
          </p>
        </div>
      </motion.div>

      {/* RECRUITER QUICK CONNECT CARD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white/5 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-6 md:p-12 shadow-[0_0_20px_rgba(6,182,212,0.06)] hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.18)] transition-all duration-500"
      >
        <div className="text-center mb-10">
          <h2 className="text-cyan-400 font-medium tracking-widest uppercase mb-2 text-sm">
            Hiring / Collaboration
          </h2>

          <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
            Recruiter Quick Connect
          </h3>

          <p className="text-gray-400 mt-3 text-sm md:text-base">
            Are you a recruiter or hiring manager? Drop your details here for instant connection & credentials.
          </p>
        </div>

        {/* SUCCESS MESSAGE */}
        {isSubmitted ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-12 flex flex-col items-center justify-center"
          >
            <CheckCircle className="w-16 h-16 text-teal-400 mb-4 animate-bounce" />

            <h4 className="text-2xl font-bold text-white mb-2">
              Message Sent Successfully!
            </h4>

            <p className="text-gray-400">
              Thank you for reaching out. I'll get back to you shortly via LinkedIn or Email.
            </p>

            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-6 px-6 py-2 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 text-sm"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (

          /* RECRUITER FORM */
          <form onSubmit={onSubmit} className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* NAME */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <User className="w-4 h-4 text-cyan-400" />
                  Your Name / Recruiter Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. John Doe"
                  className={inputStyle}
                />
              </div>

              {/* COMPANY */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <Building className="w-4 h-4 text-teal-400" />
                  Company / Organization
                </label>

                <input
                  type="text"
                  name="company"
                  required
                  placeholder="e.g. Fortrea / IQVIA / Cognizant"
                  className={inputStyle}
                />
              </div>
            </div>

            {/* EMAIL / LINKEDIN */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                Email Address or LinkedIn Profile URL
              </label>

              <input
                type="text"
                name="email_or_linkedin"
                required
                placeholder="name@company.com or linkedin.com/in/..."
                className={inputStyle}
              />
            </div>

            {/* MESSAGE */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                Message / Role Details
              </label>

              <textarea
                name="message"
                rows={4}
                required
                placeholder="Discussing Pharmacovigilance / Drug Safety Associate opportunity..."
                className={`${inputStyle} resize-none`}
              />
            </div>

            {/* SUBMIT BUTTON */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-black font-bold tracking-wide hover:opacity-95 hover:shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all duration-300 shadow-[0_0_12px_rgba(6,182,212,0.15)] disabled:opacity-50"
            >
              {loading ? (
                <span>Sending details...</span>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Connect with Bathrinath
                </>
              )}
            </motion.button>

          </form>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;
