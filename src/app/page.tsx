import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { TrustBar } from "@/components/landing/trust-bar";
import { MissionSection } from "@/components/landing/mission-section";
import { Footer } from "@/components/landing/footer";
import { StepsSection } from "@/components/landing/steps-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { CustomerServiceSection } from "@/components/landing/customer-service-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <TrustBar />
        <MissionSection />
        <StepsSection />
        <CustomerServiceSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
