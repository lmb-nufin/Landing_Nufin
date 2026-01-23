
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
        
        <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md p-3 pr-6 rounded-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] animate-float hidden md:flex items-center gap-3 z-30 pointer-events-none">
            <div className="w-10 h-10 bg-[#DCFCE7] rounded-full flex items-center justify-center text-[#16A34A] shadow-sm flex-shrink-0">
              <span className="font-display font-black text-lg">$</span>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight mb-0.5">Depósito Recibido</p>
              <p className="text-xl font-display font-black text-gray-900 leading-none tracking-tight">$5,000.00</p>
            </div>
        </div>
    </div>
  );
};


export function HeroSection() {
  return (
    <section id="inicio" className="relative pt-10 pb-8 lg:pt-16 lg:pb-12 px-6 bg-[#F8F7FF] overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-24 items-center relative z-10">
        
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <div className="space-y-3">
            <h1 className="text-3xl md:text-5xl font-display font-black text-gray-900 leading-[1.05]">
              Préstamos<br/>al instante,<br/><span className="text-electric">sin buró</span>
            </h1>
            <p className="text-base text-gray-500 font-medium max-w-xl mx-auto lg:mx-0">
              De <span className="font-bold text-gray-900">$500</span> a <span className="font-bold text-gray-900">$7,000 MXN</span> directos a tu cuenta desde tu celular.
            </p>
          </div>
          
          <div className="mt-3 flex flex-col gap-2 items-center lg:items-start">
            <GooglePlayButton className="w-36 md:w-40 mt-1" />

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mt-1">
               <div className="flex items-center gap-3 px-3 py-1.5 bg-white border border-gray-100 rounded-lg shadow-sm">
                  <div className="flex flex-col items-start">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => <Star key={i} size={11} className="text-amber-400 fill-amber-400" />)}
                      <span className="text-xs font-black text-gray-900 ml-1">4.6</span>
                    </div>
                    <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mt-1">1M+ Descargas</span>
                  </div>
               </div>
               <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-100 rounded-lg shadow-sm">
                  <div className="w-7 h-7 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <ShieldCheck size={16} />
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] font-black text-gray-900 uppercase leading-none">Sin Aval</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm md:max-w-xl aspect-square lg:aspect-square rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border-4 md:border-8 border-white bg-white group">
             <HeroImage />
          </div>
        </div>

      </div>
    </section>
  );
}
