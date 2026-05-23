"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-robo-dark/70 via-robo-dark/80 to-robo-dark z-10"></div>
        {/* Placeholder for actual high-tech engineering project image */}
        <Image
          src="/img/1.png"
          alt="Engineering Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        {/* Neon Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-robo-cyan/20 rounded-full blur-[120px] z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-robo-blue/20 rounded-full blur-[120px] z-0"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-[280px] sm:w-[400px] md:w-[600px] h-32 sm:h-40 md:h-56 mb-8 mt-4 flex justify-center items-center"
        >
          {/* Intense cinematic backlight orb to make the dark logo pop */}
          <div className="absolute inset-0 bg-white/40 md:bg-white/50 rounded-[100%] blur-[40px] md:blur-[70px] z-0 scale-110"></div>
          <div className="absolute inset-0 bg-robo-cyan/30 rounded-[100%] blur-[60px] md:blur-[100px] z-0 scale-125"></div>
          <Image 
            src="/logo/logo.png" 
            alt="Robo Solutions Logo" 
            fill 
            className="object-contain drop-shadow-[0_0_35px_rgba(255,255,255,1)] z-10" 
            priority 
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <p className="mt-4 text-xl md:text-2xl text-robo-text max-w-3xl mx-auto font-light leading-relaxed">
            Bridging the Gap Between <span className="font-semibold text-white">Engineering Theory</span> and <span className="font-semibold text-robo-cyan">Industry Reality</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          className="mt-10"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-robo-dark bg-robo-cyan rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="relative">Book a Workshop</span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-robo-cyan/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-robo-cyan rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
