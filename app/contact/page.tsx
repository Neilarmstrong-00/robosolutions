"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [serviceType, setServiceType] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(event.currentTarget);
    
    // Add your Web3Forms Access Key from the environment variable
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "");
    // Customize email subject
    formData.append("subject", `New Workshop Inquiry from ${formData.get("name")}`);
    // Optional: send from the user's email
    formData.append("from_name", "Robo Solution Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        (event.target as HTMLFormElement).reset();
      } else {
        console.error("Web3Forms Error:", data);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-robo-dark pt-32 pb-24 relative overflow-hidden flex items-center justify-center">
      {/* Background styling */}
      <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-robo-blue/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-1/3 h-1/3 bg-robo-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link href="/" className="inline-flex items-center text-robo-cyan hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-robo-gray/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(0,240,255,0.05)]"
        >
          <div className="text-center mb-10">
            <h1 className="font-orbitron text-3xl md:text-5xl font-bold mb-4">
              Book a <span className="text-robo-cyan">Workshop</span>
            </h1>
            <p className="text-robo-text/80">
              Fill out the form below and we will get back to you shortly to discuss your engineering event.
            </p>
          </div>

          {submitStatus === "success" ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <CheckCircle className="w-20 h-20 text-robo-cyan mb-6" />
              <h2 className="text-2xl font-bold text-white mb-2">Message Sent!</h2>
              <p className="text-robo-text/80 mb-8">Thank you for reaching out. We will review your inquiry and contact you soon.</p>
              <Link 
                href="/"
                className="px-8 py-3 bg-robo-cyan text-robo-dark font-bold rounded-full hover:scale-105 hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.3)]"
              >
                Return to Homepage
              </Link>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Spam Protection */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white ml-1">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full bg-robo-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-robo-cyan focus:ring-1 focus:ring-robo-cyan transition-all"
                    placeholder="Raghav Patil"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white ml-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full bg-robo-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-robo-cyan focus:ring-1 focus:ring-robo-cyan transition-all"
                    placeholder="raghav@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="institution" className="text-sm font-medium text-white ml-1">Institution / Organization *</label>
                <input
                  type="text"
                  name="institution"
                  id="institution"
                  required
                  className="w-full bg-robo-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-robo-cyan focus:ring-1 focus:ring-robo-cyan transition-all"
                  placeholder="e.g. MIT College of Engineering"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-white ml-1">What are you interested in? *</label>
                <select
                  name="service"
                  id="service"
                  required
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full bg-robo-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-robo-cyan focus:ring-1 focus:ring-robo-cyan transition-all appearance-none [&>option]:bg-robo-dark [&>option]:text-white"
                >
                  <option value="" disabled>Select a service...</option>
                  <option value="Technical Workshop">Technical Workshop / Bootcamp</option>
                  <option value="Engineering Symposium">Engineering Symposium Management</option>
                  <option value="Mentorship">Project Mentorship</option>
                  <option value="Other">Other Inquiry</option>
                </select>
              </div>

              {serviceType === "Other" && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="space-y-2 overflow-hidden"
                >
                  <label htmlFor="otherService" className="text-sm font-medium text-white ml-1">Please specify *</label>
                  <input
                    type="text"
                    name="otherService"
                    id="otherService"
                    required={serviceType === "Other"}
                    className="w-full bg-robo-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-robo-cyan focus:ring-1 focus:ring-robo-cyan transition-all"
                    placeholder="Tell us what you are looking for..."
                  />
                </motion.div>
              )}

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white ml-1">Message Details *</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-robo-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-robo-cyan focus:ring-1 focus:ring-robo-cyan transition-all resize-none"
                  placeholder="Tell us about the event you want to host..."
                ></textarea>
              </div>

              {submitStatus === "error" && (
                <div className="flex items-center text-red-400 text-sm mt-2">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  Something went wrong. Please ensure you have added a valid Web3Forms API Key in your .env.local file.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-robo-cyan text-robo-dark font-bold text-lg rounded-xl px-8 py-4 mt-4 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:scale-[1.02] hover:bg-white hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
              >
                {isSubmitting ? (
                  "Sending Request..."
                ) : (
                  <>
                    Send Inquiry <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </main>
  );
}
