import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata: Metadata = {
  metadataBase: new URL("https://robosolution-workshop.vercel.app"),
  title: "Robo Solution",
  description: "Dynamic mechatronics and technical education group",
  icons: {
    icon: "/logo/favicon.png",
  },
  openGraph: {
    title: "Robo Solution",
    description: "Dynamic mechatronics and technical education group",
    url: "https://robosolution-workshop.vercel.app",
    siteName: "Robo Solution",
    images: [
      {
        url: "https://robosolution-workshop.vercel.app/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Robo Solution Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Robo Solution",
    description: "Dynamic mechatronics and technical education group",
    images: ["https://robosolution-workshop.vercel.app/opengraph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${orbitron.variable} font-sans bg-robo-dark text-robo-text antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
