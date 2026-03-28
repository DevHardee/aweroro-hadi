import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const response = await fetch("https://formspree.io/f/movjwnrp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    setIsSubmitting(false);
    if (response.ok) {
      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSent(false), 5000);
    }
  };

  const socialLinks = [
    { icon: <FaGithub size={24} />, url: "https://github.com/Aweroro", label: "GitHub" },
    { icon: <FaLinkedin size={24} />, url: "https://linkedin.com/in/aweroro", label: "LinkedIn" },
    { icon: <FaTwitter size={24} />, url: "https://twitter.com/aweroro", label: "Twitter" },
  ];

  return (
    <section id="contact" className="text-text py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-primary/20 blur-[150px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-red-400 to-secondary bg-clip-text text-transparent inline-block">
            Get in Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Let's connect!</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                I am always eager to explore new opportunities that allow me to grow and apply my skills in delivering high-quality technology solutions.
                Whether you're interested in collaboration or just want to chat about tech, feel free to reach out.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Email Me</p>
                  <p className="font-medium hover:text-accent transition-all duration-300"><a href="mailto:hadistic20@gmail.com">hadistic20@gmail.com</a></p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Location</p>
                  <p className="font-medium">Lagos, Nigeria</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-4 font-medium">Follow Me</p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent/20 hover:border-accent/40 hover:text-accent transition-all duration-300 shadow-lg"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              className="bg-accent/5 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl space-y-6 relative"
              onSubmit={handleSubmit}
            >
              <AnimatePresence>
                {isSent && (
                  <motion.div
                    className="absolute inset-0 z-20 bg-primary/90 flex flex-col items-center justify-center p-6 text-center rounded-3xl backdrop-blur-md"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-4 text-4xl">
                      ✅
                    </div>
                    <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                    <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 h-40 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-primary to-secondary p-[1px] rounded-xl group overflow-hidden transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="bg-primary/90 group-hover:bg-transparent transition-all duration-300 w-full h-full py-4 px-8 rounded-xl flex items-center justify-center font-bold text-lg tracking-wide">
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : "Send Message"}
                </div>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

