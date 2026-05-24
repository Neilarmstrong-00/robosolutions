"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Mail, Phone } from "lucide-react";

const founders = [
  {
    name: "Nilove Mandal",
    role: "Founder & Project Lead",
    image: "/img/2.png", 
    email: "nilovemandal@gmail.com",
  },
  {
    name: "Prathemesh Ingle",
    role: "Co-Founder & Core Technical Lead",
    image: "/img/3.png", 
    email: "prthmshingle@gmail.com",
  },
];

const members = [
  {
    name: "Sagarsinh Dhannavat",
    role: "Sales & Management",
    image: "/img/15.jpeg",
    email: "sgdhannavat@gmail.com",
    phone: "7588121079",
  },
  {
    name: "Karan Dharulkar",
    role: "Sales & Management",
    image: "/img/17.jpeg",
    email: "Karandharulkar2612@gmail.com",
    phone: "93738 86583",
  },
  {
    name: "Hriday Amle",
    role: "Software Developer",
    image: "/img/16.jpeg",
    email: "hridayamle123@gmail.com",
    phone: "97632 68587",
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-robo-dark pt-32 pb-24 relative overflow-hidden">
      {/* Background styling */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-robo-blue/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-robo-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link href="/" className="inline-flex items-center text-robo-cyan hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-4">
            Meet the <span className="text-robo-cyan">Core Team</span>
          </h1>
          <div className="w-24 h-1 bg-robo-blue mx-auto rounded-full mb-6"></div>
          <p className="text-robo-text/80 text-lg max-w-2xl mx-auto">
            The passionate engineers and managers driving Robo Solution forward. We don't just teach technology; we design it, simulate it, and bring it to life.
          </p>
        </motion.div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto gap-8 mb-16">
          {founders.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-robo-gray rounded-2xl overflow-hidden border border-white/5 hover:border-robo-cyan/30 transition-all duration-300 shadow-lg"
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
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-robo-dark via-robo-dark/90 to-transparent z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-orbitron font-bold text-2xl text-white mb-1">{member.name}</h3>
                <p className="text-robo-cyan text-sm font-medium tracking-wide uppercase mb-3">{member.role}</p>
                {member.email && (
                  <a href={`mailto:${member.email}`} className="flex items-center text-robo-text/80 hover:text-white transition-colors text-sm mb-1">
                    <Mail className="w-4 h-4 mr-2" />
                    {member.email}
                  </a>
                )}
                {member.phone && (
                  <a href={`tel:${member.phone.replace(/\s+/g, '')}`} className="flex items-center text-robo-text/80 hover:text-white transition-colors text-sm">
                    <Phone className="w-4 h-4 mr-2" />
                    {member.phone}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="w-full h-px bg-white/10 mb-16"></div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group relative bg-robo-gray rounded-2xl overflow-hidden border border-white/5 hover:border-robo-cyan/30 transition-all duration-300 shadow-lg"
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
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-robo-dark via-robo-dark/90 to-transparent z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-orbitron font-bold text-xl text-white mb-1">{member.name}</h3>
                <p className="text-robo-cyan text-sm font-medium tracking-wide uppercase mb-3">{member.role}</p>
                {member.email && (
                  <a href={`mailto:${member.email}`} className="flex items-center text-robo-text/80 hover:text-white transition-colors text-sm mb-1">
                    <Mail className="w-4 h-4 mr-2" />
                    {member.email}
                  </a>
                )}
                {member.phone && (
                  <a href={`tel:${member.phone.replace(/\s+/g, '')}`} className="flex items-center text-robo-text/80 hover:text-white transition-colors text-sm">
                    <Phone className="w-4 h-4 mr-2" />
                    {member.phone}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
