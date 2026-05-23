"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const team = [
    {
      name: "Nilove Mandal",
      role: "Founder & Project Lead",
      image: "/img/2.png", // Replace this with actual profile image
    },
    {
      name: "Prathemesh Ingle",
      role: "Core Technical Lead",
      image: "/img/3.png", // Replace this with actual profile image
    },
  ];

  return (
    <section id="about" className="py-24 w-full bg-robo-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6">
              Who We <span className="text-robo-cyan">Are</span>
            </h2>
            <div className="space-y-6 text-lg text-robo-text/80 leading-relaxed">
              <p>
                <strong className="text-white">Robo Solutions</strong> is a dynamic mechatronics and technical education group dedicated to empowering the next generation of engineers. Our core mission is to transform theoretical classroom knowledge into tangible, industry-ready skills.
              </p>
              <p>
                Led by a highly focused two-man expert team, we specialize in delivering high-impact, 100% hands-on technical training and managing large-scale engineering symposiums.
              </p>
              <p className="border-l-4 border-robo-cyan pl-4 italic text-white text-xl">
                "We don't just teach technology; we design it, simulate it, and bring it to life."
              </p>
            </div>
          </motion.div>

          {/* Team Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative bg-robo-gray rounded-2xl overflow-hidden border border-white/5 hover:border-robo-cyan/30 transition-all duration-300"
              >
                <div className="aspect-square relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-robo-dark via-transparent to-transparent z-10"></div>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-orbitron font-bold text-xl text-white mb-1">{member.name}</h3>
                  <p className="text-robo-cyan text-sm font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
