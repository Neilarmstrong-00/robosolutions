"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const events = [
  {
    id: 1,
    title: "6-Day Intensive AI/ML & IoT Workshop",
    partner: "Dept of CSE, Mauli Group of Institutions",
    description: "Week-long hands-on training on smart systems, Python, ML. Spearheaded by Nilove and Prathemesh. Honored with a Letter of Appreciation.",
    image: "/img/9.png",
  },
  {
    id: 2,
    title: "Innovo'24: RC Race Technical Coordination",
    partner: "SSGMCE",
    description: "Led execution of flagship RC Race. Designed custom track, authored Rule Book. Awarded Certificate of Appreciation.",
    image: "/img/10.png",
  },
  {
    id: 3,
    title: "RoboRide: Robotics & Embedded Systems Workshop",
    partner: "IEEE Committee",
    description: "Resource Personnel for a 2-day hardware bootcamp. Every participant built a functional RC Robot.",
    image: "/img/11.png",
  },
  {
    id: 4,
    title: "Pursuit 2023: 3D Modelling in AR/VR",
    partner: "Mozilla Club, SSGMCE",
    description: "Trained 150+ students in Blender rendering and shading. Awarded Certificate of Appreciation.",
    image: "/img/12.png",
  },
];

export default function TrackRecord() {
  return (
    <section id="track-record" className="py-24 w-full bg-robo-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            A Legacy of Empowering <span className="text-robo-cyan">Future Engineers</span>
          </h2>
          <div className="w-24 h-1 bg-robo-blue mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-robo-cyan via-robo-blue to-transparent -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-24">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`flex flex-col md:flex-row items-center justify-between w-full ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:w-5/12 mb-8 md:mb-0">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="relative group rounded-2xl overflow-hidden border border-white/10 hover:border-robo-cyan/50 transition-colors shadow-2xl"
                  >
                    <div className="aspect-video relative w-full h-full">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-robo-dark via-robo-dark/20 to-transparent"></div>
                    </div>
                  </motion.div>
                </div>

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-robo-dark border-4 border-robo-cyan z-20 items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.6)]">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                <div className="w-full md:w-5/12">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`bg-robo-gray/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div className={`text-robo-cyan font-semibold text-sm mb-2 tracking-wider uppercase ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}>
                      {event.partner}
                    </div>
                    <h3 className="font-orbitron font-bold text-2xl text-white mb-4">
                      {event.title}
                    </h3>
                    <p className="text-robo-text/80 leading-relaxed">
                      {event.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
