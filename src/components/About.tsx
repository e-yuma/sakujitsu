import { motion } from "framer-motion";
import React from "react";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Node.js",
  "Python",
  "GraphQL",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Figma",
  "Adobe Creative Suite",
  "Framer Motion",
  "Three.js",
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white h-full">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{ once: true }}
          >
            {/* Avatar Section */}
            <motion.div
              className="flex justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 120,
                damping: 15,
              }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Rotating Border */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#E8D5C4] via-[#D4B896] to-[#C4A484] p-1"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-32 h-32 bg-white rounded-full" />
                </motion.div>

                {/* Avatar Image */}
                <motion.div
                  className="relative w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-[#F5F1EC] to-[#E8D5C4] flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="src\assets\icon.png"
                    alt="昨日(sakujitsu)"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Hello! I'm{" "}
                <span className="text-[#C4A484] font-semibold">sakujitsu</span>,
                a passionate frontend engineer with over 5 years of experience
                creating exceptional digital experiences. I believe in the power
                of clean code, thoughtful design, and meaningful interactions.
              </p>
              <p>
                My journey began with a curiosity about how websites work, and
                it has evolved into a deep appreciation for the intersection of
                technology and human experience. I specialize in building
                responsive, accessible, and performant web applications using
                modern technologies.
              </p>
              <p className="text-[#C4A484] font-medium">
                "Great design is not just about how it looks, but how it works
                and how it makes people feel."
              </p>
            </div>

            <motion.button
              className="mt-8 bg-[#E8D5C4] text-[#3D352E] px-8 py-4 rounded-full font-medium hover:bg-[#D4B896] transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Let's Work Together
            </motion.button>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">Skills & Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="group bg-[#FAF8F5] px-4 py-3 rounded-xl text-center font-medium hover:bg-[#E8D5C4] hover:text-[#3D352E] transition-all duration-300 cursor-default border border-transparent hover:border-[#D4B896] shadow-sm hover:shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-12 p-6 bg-gradient-to-r from-[#FAF8F5] to-white rounded-2xl border border-[#F0EBE3] shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-[#C4A484]">
                Currently Learning
              </h4>
              <div className="flex flex-wrap gap-3">
                {["WebGL", "Machine Learning", "Rust", "Web3"].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-2 bg-white rounded-lg text-sm font-medium border border-[#E8D5C4]/50 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
