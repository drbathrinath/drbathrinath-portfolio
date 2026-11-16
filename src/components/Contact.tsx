import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 z-10 overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-display text-cyan-400 tracking-widest uppercase">Get in Touch</span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mt-3">Contact Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            <h3 className="font-display text-2xl font-bold text-white mb-4">Let's Connect</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
              Open to professional opportunities in Pharmacovigilance, Drug Safety, and Clinical Research. Reach out for collaborations or inquiries.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Email</p>
                  <p className="text-sm sm:text-base font-medium text-white">dr.bathrinath.ms@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Phone</p>
                  <p className="text-sm sm:text-base font-medium text-white">+91 Available on request</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Location</p>
                  <p className="text-sm sm:text-base font-medium text-white">Kallakurichi, Tamil Nadu, India (Open to Hyderabad/Bangalore)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 border border-white/10 bg-white/5 backdrop-blur-xl relative"
          >
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-cyan-400 mx-auto animate-bounce" />
                <h4 className="font-display text-xl font-bold text-white">Message Sent Successfully!</h4>
                <p className="text-sm text-gray-300">Thank you for reaching out. I will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-black font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}