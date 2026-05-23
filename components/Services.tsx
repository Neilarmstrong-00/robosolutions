"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Wrench, Cpu, Zap, Box, Trophy } from "lucide-react";
import Image from "next/image";

const services = [
  {
    id: "cad-design",
    title: "Industrial CAD & Product Design Bootcamp",
    icon: <Wrench className="w-6 h-6 text-robo-cyan" />,
    tools: "SolidWorks, Autodesk Fusion 360",
    focus: "Parametric 3D modeling, complex assembly design, and mechanical simulations.",
    takeaway: "Complete product design workflow—from 2D sketches to 3D assemblies and DFM.",
    image: "/img/4.png",
    curriculum: [
      "Introduction to 2D Sketching & Constraints",
      "3D Parametric Modeling (Extrude, Revolve, Sweep)",
      "Complex Assembly Design & Mates",
      "Kinematic Animation & Motion Study",
      "Rendering & Design for Manufacturing (DFM)",
    ],
  },
  {
    id: "ai-ml-iot",
    title: "Next-Gen Tech: AI, ML & IoT Masterclasses",
    icon: <Cpu className="w-6 h-6 text-robo-blue" />,
    tools: "Python, ESP32, ESP8266, Raspberry Pi, Cloud Dashboards",
    focus: "AI, Machine Learning predictive models, sensor interfacing, and wireless communication.",
    takeaway: "Deep dive into smart systems from basic programming to building real-time dashboards.",
    image: "/img/5.png",
    curriculum: [
      "Introduction to Python & Libraries",
      "Basics of Machine Learning & Predictive Models",
      "IoT Fundamentals with ESP32/NodeMCU",
      "Sensor Interfacing (Temperature, Ultrasonic, IR)",
      "Cloud Integration & Web Dashboard Creation",
    ],
  },
  {
    id: "robotics-embedded",
    title: "Robotics & Embedded Systems Bootcamps",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    tools: "Microcontrollers, Motor Drivers, Sensors, Actuators",
    focus: "Core electronics, circuit designing, and hardware-software interfacing.",
    takeaway: "Logic of bridging software with hardware. Every student builds a functional RC robot.",
    image: "/img/6.png",
    curriculum: [
      "Basics of Electronics & Microcontrollers",
      "Sensors & Actuators Interfacing",
      "Motor Drivers & Power Management",
      "Logic Building & Embedded C++ Programming",
      "Mega Practical: Building an RC Robot / Autonomous Rover",
    ],
  },
  {
    id: "ar-vr-modeling",
    title: "3D Modeling for AR/VR Environments",
    icon: <Box className="w-6 h-6 text-purple-500" />,
    tools: "Blender",
    focus: "Spatial design, digital asset creation, texturing, UV mapping.",
    takeaway: "Construct complete, production-ready 3D rooms for AR/VR applications.",
    image: "/img/7.png",
    curriculum: [
      "Blender UI & Basic Mesh Manipulation",
      "Object Modeling & Sculpting Basics",
      "Texturing, Shading & UV Mapping",
      "Lighting & Camera Setup",
      "Final Render & Exporting for AR/VR platforms",
    ],
  },
  {
    id: "tech-championships",
    title: "Technical Championships & Mega-Event Execution",
    icon: <Trophy className="w-6 h-6 text-green-500" />,
    tools: "End-to-End Event Coordination",
    focus: "Technical coordination of high-stakes engineering symposiums.",
    takeaway: "We manage Hackathons, Project Expos, and Robotics Championships flawlessly.",
    image: "/img/8.png",
    curriculum: [
      "Requirement Gathering & Problem Statement Drafting",
      "Custom Track/Arena Design & Setup",
      "Drafting Official Technical Rulebooks",
      "Participant Briefing & Technical Screening Protocols",
      "Live Event Execution & Judging Coordination",
    ],
  },
];

export default function Services() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    if (openAccordion === id) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(id);
    }
  };

  return (
    <section id="services" className="py-24 w-full bg-[#050505] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-robo-blue/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            Transforming Ideas into Reality: <span className="text-robo-cyan">Our Services</span>
          </h2>
          <div className="w-24 h-1 bg-robo-cyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-robo-gray rounded-2xl overflow-hidden border border-white/5 hover:border-robo-cyan/30 flex flex-col transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] ${
                index === 4 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""
              }`}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute top-4 left-4 bg-robo-dark/80 backdrop-blur-sm p-3 rounded-xl border border-white/10 shadow-lg">
                  {service.icon}
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-orbitron font-bold text-xl text-white mb-4 line-clamp-2 min-h-[56px]">
                  {service.title}
                </h3>
                
                <div className="space-y-3 mb-6 text-sm flex-grow">
                  <div>
                    <span className="text-robo-cyan font-semibold block mb-1">Tools:</span>
                    <span className="text-robo-text/80">{service.tools}</span>
                  </div>
                  <div>
                    <span className="text-robo-cyan font-semibold block mb-1">Focus:</span>
                    <span className="text-robo-text/80">{service.focus}</span>
                  </div>
                  <div>
                    <span className="text-robo-cyan font-semibold block mb-1">Takeaway:</span>
                    <span className="text-robo-text/80">{service.takeaway}</span>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-white/5">
                  <button
                    onClick={() => toggleAccordion(service.id)}
                    className="flex items-center justify-between w-full text-left text-white font-medium hover:text-robo-cyan transition-colors group"
                  >
                    <span>View Curriculum</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 group-hover:text-robo-cyan ${
                        openAccordion === service.id ? "rotate-180 text-robo-cyan" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openAccordion === service.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <ol className="mt-4 space-y-2 text-sm text-robo-text/70 list-decimal list-inside bg-robo-dark/50 p-4 rounded-lg border border-white/5">
                          {service.curriculum.map((item, i) => (
                            <li key={i} className="pl-1 marker:text-robo-cyan">
                              {item}
                            </li>
                          ))}
                        </ol>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
