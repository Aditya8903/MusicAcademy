import HeroSection from "@/components/HeroSection";
import Image from "next/image"; // Import only if you're using it

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
    </main>
  );
}
