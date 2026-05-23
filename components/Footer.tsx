import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-robo-dark pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Neon Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-robo-cyan/10 rounded-[100%] blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 border-b border-white/10 pb-12 mb-10">
          <div className="max-w-xl">
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-white mb-6">
              Let's Build the <span className="text-robo-cyan">Future</span> Together.
            </h2>
            <p className="text-robo-text/80 text-lg">
              For workshop bookings, event management, or collaborations, reach out to us directly. We're ready to engineer the next big thing with you.
            </p>
          </div>
          
          <div className="flex flex-col space-y-6">
            <div className="space-y-4 bg-robo-gray/50 p-6 rounded-2xl border border-white/5">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-robo-cyan shrink-0" />
                <div>
                  <a href="mailto:nilovemandal@gmail.com" className="block text-white hover:text-robo-cyan transition-colors">nilovemandal@gmail.com</a>
                  <a href="mailto:prthmshingle@gmail.com" className="block text-white hover:text-robo-cyan transition-colors mt-1">prthmshingle@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 pt-4 border-t border-white/5">
                <Phone className="w-6 h-6 text-robo-blue shrink-0" />
                <div>
                  <a href="tel:+919307474959" className="block text-white hover:text-robo-cyan transition-colors">Nilove Mandal (+91 9307474959)</a>
                  <a href="tel:+919518781351" className="block text-white hover:text-robo-cyan transition-colors mt-1">Prathemesh Ingle (+91 9518781351)</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-robo-text/60">
          <Link href="/" className="font-orbitron font-bold text-2xl tracking-wider text-white hover:text-robo-cyan transition-colors duration-300">
            ROBO <span className="text-robo-cyan">SOLUTIONS</span>
          </Link>
          <p>
            © {new Date().getFullYear()} Robo Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
