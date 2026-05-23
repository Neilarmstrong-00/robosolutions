"use client";

import { motion } from "framer-motion";
import { Briefcase, Hammer, TrendingUp } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Briefcase className="w-10 h-10 text-robo-cyan mb-6" />,
      title: "Industry-Relevant Curriculum",
      description:
        "We strictly teach the exact tools and workflows currently used in modern engineering and industrial automation. No outdated syllabus.",
    },
    {
      icon: <Hammer className="w-10 h-10 text-white mb-6" />,
      title: "100% Hands-On Approach",
      description:
        "We believe in learning by building. No long lectures; only practical, project-based execution guided directly by Nilove and Prathemesh.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-robo-blue mb-6" />,
      title: "End-to-End Execution",
      description:
        "From training 150+ students to managing a technical championship, we handle technical logistics flawlessly from start to finish.",
    },
  ];

  return (
    <section className="py-24 w-full bg-[#030303] relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-robo-cyan">Robo Solutions</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-robo-gray/30 p-8 rounded-2xl border border-white/5 hover:border-robo-cyan/30 hover:bg-robo-gray/50 transition-all duration-300 group"
            >
              <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-orbitron font-bold text-xl text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-robo-text/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
