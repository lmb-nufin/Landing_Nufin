import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { TrustBar } from "@/components/landing/trust-bar";
import { MissionSection } from "@/components/landing/mission-section";
import { Footer } from "@/components/landing/footer";
import { StepsSection } from "@/components/landing/steps-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { LoanApplicationForm } from "@/components/landing/loan-application-form";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <TrustBar />
        <MissionSection />
        <StepsSection />
        <TestimonialsSection />
        <LoanApplicationForm />
      </main>
      <Footer />
    </div>
  );
}
