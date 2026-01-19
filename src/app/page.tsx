import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { TrustBar } from "@/components/landing/trust-bar";
import { PartnersSection } from "@/components/landing/partners-section";
import { MissionSection } from "@/components/landing/mission-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <TrustBar />
        <PartnersSection />
        <MissionSection />
      </main>
      <Footer />
    </div>
  );
}
