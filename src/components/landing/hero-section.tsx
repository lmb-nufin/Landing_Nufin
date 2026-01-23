
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-image");

  return (
    <section id="inicio" className="relative pt-10 pb-8 lg:pt-16 lg:pb-12 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto bg-[#F8F7FF] rounded-3xl p-8 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          <div className="text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-display font-black text-gray-900 leading-[1.1]">
                Préstamos<br/>al instante,<br/><span className="text-electric">sin buró</span>
              </h1>
              <p className="text-base md:text-lg text-gray-600 font-medium max-w-md mx-auto lg:mx-0">
                De <span className="font-bold text-gray-900">$500</span> a <span className="font-bold text-gray-900">$7,000 MXN</span> directos a tu cuenta desde tu celular.
              </p>
              <Button size="lg" className="font-bold text-base px-8 py-6">
                Obtén el tuyo ahora
              </Button>
            </div>
          </div>

          <div className="relative w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <Image 
                src={heroImage?.imageUrl || "/images/hero-placeholder.svg"} 
                alt={heroImage?.description || "A person using the Nufin app on their phone."}
                fill
                className="object-cover"
                data-ai-hint={heroImage?.imageHint || "person phone"}
              />
              <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-white/90 backdrop-blur-sm py-2 px-4 rounded-full shadow-lg flex items-center gap-2 z-20 animate-float">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span className="text-xs font-bold text-gray-800">Tu préstamo fue aprobado</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
