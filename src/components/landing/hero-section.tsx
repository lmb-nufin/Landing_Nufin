"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ShieldCheck, Star } from "lucide-react";
import { GooglePlayButton } from "./google-play-button";

const HeroImage: React.FC = () => {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-image");

  return (
    <div className="relative w-full h-full bg-white group flex items-center justify-center">
        <Image 
          src={heroImage?.imageUrl || "/images/hero-placeholder.svg"} 
          alt={heroImage?.description || "A person using the Nufin app on their phone."}
          fill
          className="object-contain transition-transform duration-1000 hover:scale-[1.02]"
          data-ai-hint={heroImage?.imageHint || "person phone"}
        />
        
        <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md p-4 pr-8 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] animate-float hidden md:flex items-center gap-4 z-30 pointer-events-none">
            <div className="w-12 h-12 bg-[#DCFCE7] rounded-full flex items-center justify-center text-[#16A34A] shadow-sm flex-shrink-0">
              <span className="font-display font-black text-xl">$</span>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight mb-1">Depósito Recibido</p>
              <p className="text-2xl font-display font-black text-gray-900 leading-none tracking-tight">$5,000.00</p>
            </div>
        </div>
    </div>
  );
};


export function HeroSection() {
  return (
    <section id="inicio" className="relative pt-32 pb-12 lg:pt-48 lg:pb-32 px-6 bg-[#F8F7FF] overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center relative z-10">
        <div className="space-y-8 order-2 lg:order-1 text-center lg:text-left">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-gray-900 leading-[1.05]">
              Préstamos<br/>al instante,<br/><span className="text-electric">sin buró</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 font-medium max-w-xl mx-auto lg:mx-0">
              De <span className="font-bold text-gray-900">$500</span> a <span className="font-bold text-gray-900">$9,000 MXN</span> directos a tu cuenta desde tu celular.
            </p>
          </div>
          
          <div className="flex flex-col gap-6 items-center lg:items-start">
            <GooglePlayButton className="w-48" />

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
               <div className="flex items-center gap-3 px-6 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
                  <div className="flex flex-col items-start">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-amber-400 fill-amber-400" />)}
                      <span className="text-base font-black text-gray-900 ml-1">4.9</span>
                    </div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">1M+ Descargas</span>
                  </div>
               </div>
               <div className="flex items-center gap-4 px-6 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <ShieldCheck size={28} />
                  </div>
                  <div className="text-left">
                    <p className="text-base font-black text-gray-900 uppercase leading-none">Sin Aval</p>
                    <p className="text-xs font-bold text-emerald-600 mt-1 uppercase">Garantizado</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[650px] aspect-square lg:aspect-[4/5] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border-8 border-white bg-white group">
             <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
}
