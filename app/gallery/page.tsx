import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// Force dynamic or static handling based on your preference.
// For Next.js App Router, reading fs in a Server Component is completely safe.
export const dynamic = 'force-dynamic';

export default function GalleryPage() {
  // Read the directory contents
  const galleryDirectory = path.join(process.cwd(), 'public/img/gallery');
  let images: string[] = [];

  try {
    if (fs.existsSync(galleryDirectory)) {
      const files = fs.readdirSync(galleryDirectory);
      // Filter for image files
      images = files
        .filter((file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
        .map((file) => `/img/gallery/${file}`);
    }
  } catch (error) {
    console.error("Error reading gallery directory:", error);
  }

  return (
    <main className="min-h-screen bg-robo-dark pt-32 pb-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-robo-cyan/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link href="/" className="inline-flex items-center text-robo-cyan hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <div className="text-center mb-16">
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-4">
            Event <span className="text-robo-cyan">Gallery</span>
          </h1>
          <div className="w-24 h-1 bg-robo-blue mx-auto rounded-full mb-6"></div>
          <p className="text-robo-text/80 text-lg max-w-2xl mx-auto">
            A visual showcase of our past workshops, technical symposiums, and engineering bootcamps.
          </p>
        </div>

        {images.length === 0 ? (
          <div className="text-center text-robo-text/60 py-20 bg-robo-gray/30 rounded-2xl border border-white/5">
            <p className="text-xl">No images found in the gallery.</p>
            <p className="mt-2 text-sm">Drop some images into the `public/img/gallery` folder to see them here!</p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((src, idx) => (
              <div key={idx} className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg group break-inside-avoid">
                <img
                  src={src}
                  alt={`Gallery Image ${idx + 1}`}
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-robo-cyan/0 group-hover:bg-robo-cyan/20 transition-colors duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
