"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Track Record", href: "/#track-record" },
    { name: "Team", href: "/team" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-robo-dark/90 backdrop-blur-md border-b border-robo-gray/50 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center group py-2">
            <span className="font-orbitron font-bold text-2xl tracking-wider text-white group-hover:text-robo-cyan transition-colors">
              ROBO <span className="text-robo-cyan">SOLUTION</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#about" className="text-sm font-medium text-white hover:text-robo-cyan transition-colors tracking-wide uppercase">
              About
            </Link>
            <Link href="/#services" className="text-sm font-medium text-white hover:text-robo-cyan transition-colors tracking-wide uppercase">
              Services
            </Link>
            <Link href="/#track-record" className="text-sm font-medium text-white hover:text-robo-cyan transition-colors tracking-wide uppercase">
              Track Record
            </Link>
            <Link href="/team" className="text-sm font-medium text-white hover:text-robo-cyan transition-colors tracking-wide uppercase">
              Team
            </Link>
            <Link href="/gallery" className="text-sm font-medium text-white hover:text-robo-cyan transition-colors tracking-wide uppercase">
              Gallery
            </Link>
            <Link href="/contact" className="bg-transparent border border-robo-cyan text-robo-cyan px-6 py-2 rounded-full font-medium hover:bg-robo-cyan hover:text-robo-dark transition-all duration-300">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-robo-text hover:text-robo-cyan focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-robo-dark border-b border-robo-gray shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-robo-text hover:text-robo-cyan hover:bg-robo-gray/30 rounded-md transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
