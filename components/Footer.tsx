import { motion } from "framer-motion";
import { Instagram, Twitter } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Twitter, href: "https://x.com/saku_jitsu_", label: "X" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/sakujitsu_/",
      label: "Instagram",
    },
  ];

  return (
    <footer id="contact" className="py-10 px-6 bg-[#3D352E] text-white h-full">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Create Something Amazing
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Whether you have a question or just want to say hello, feel free to
            reach out!
          </p>

          <motion.a
            href="mailto:contact@example.com"
            className="inline-block bg-[#E8D5C4] text-[#3D352E] px-8 py-4 rounded-full font-medium hover:bg-[#D4B896] transition-all duration-300 mb-16 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-8 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E8D5C4] transition-colors duration-300 border border-white/20"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="pt-8 border-t border-white/20 text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2025 sakujitsu All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
