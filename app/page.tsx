import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TrackRecord from "@/components/TrackRecord";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
      <Services />
      <TrackRecord />
      <WhyChooseUs />
    </main>
  );
}
