
"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {

  return (
    <section id="inicio" className="relative pt-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center bg-[#F8F7FF] rounded-3xl p-4 lg:p-6">
          
          <div className="lg:col-span-1 text-center lg:text-left space-y-2 self-center animate-in fade-in slide-in-from-bottom-4 duration-[4000ms]">
            <h1 className="text-3xl md:text-5xl font-display font-black text-gray-900 leading-[1.1]">
              Préstamos<br/>al instante,<br/><span className="text-electric">sin buró</span>
            </h1>
            <p className="text-sm text-gray-600 font-medium max-w-md mx-auto lg:mx-0 pb-2">
              De <span className="font-bold text-gray-900">$500</span> a <span className="font-bold text-gray-900">$9,000 MXN</span> directos a tu cuenta desde tu celular.
            </p>
            <Button size="default" className="font-bold text-base px-8">
              Obtén el tuyo ahora
            </Button>
          </div>

          <div className="lg:col-span-2 relative w-full flex flex-col items-center lg:items-end animate-in fade-in zoom-in-95 duration-[4000ms] delay-300">
            <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-xl">
              <Image 
                src="/images/hero.png" 
                alt="Mujer feliz usando la app de Nufin"
                fill
                priority
                className="object-cover object-center"
                unoptimized={true}
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
