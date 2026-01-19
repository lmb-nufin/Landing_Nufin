import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { GooglePlayIcon } from "../icons/google-play";
import { Banknote, ShieldCheck, Star } from "lucide-react";

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-image");

  return (
    <section id="inicio" className="relative w-full overflow-hidden bg-transparent py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl">
              Préstamos al instante,{" "}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                sin buró
              </span>
            </h1>
            <p className="mt-6 text-lg text-foreground/80 md:text-xl">
              De $500 a $9,000 MXN directos a tu cuenta desde tu celular.
            </p>
            <div className="mt-10 flex flex-col items-center gap-6 sm:justify-center lg:justify-start">
              <Button size="lg" className="h-14 rounded-2xl px-8 text-lg font-bold text-white bg-gradient-to-r from-[#A68BFF] to-[#896BFF] hover:opacity-90 transition-opacity">
                <GooglePlayIcon className="mr-3 h-7 w-7" />
                DISPONIBLE EN Google Play
              </Button>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1">
                  <div className="flex items-center text-yellow-400">
                    <Star fill="currentColor" className="h-5 w-5" />
                    <Star fill="currentColor" className="h-5 w-5" />
                    <Star fill="currentColor" className="h-5 w-5" />
                    <Star fill="currentColor" className="h-5 w-5" />
                    <Star fill="currentColor" className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-bold">4.9</span>
                </div>
                 <div className="flex items-center gap-2 text-sm font-semibold text-green-600">
                    <ShieldCheck className="h-5 w-5"/>
                    <span>EN NIVEL GARANTIZADO</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto h-[26rem] w-[22rem] lg:h-[32rem] lg:w-[26rem]">
            <div className="w-full h-full p-2 rounded-3xl bg-white shadow-2xl shadow-primary/20 border">
                 {heroImage && (
                    <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        width={600}
                        height={800}
                        className="h-full w-full rounded-2xl object-cover"
                        data-ai-hint={heroImage.imageHint}
                        priority
                    />
                )}
            </div>
            <div className="absolute -bottom-5 right-5 flex items-center gap-3 rounded-full bg-white p-3 pr-5 shadow-lg border">
                <div className="rounded-full bg-green-100 p-2">
                    <Banknote className="h-6 w-6 text-green-600" />
                </div>
                <div>
                    <p className="text-xs font-semibold text-gray-500">DEPÓSITO RECIBIDO</p>
                    <p className="text-lg font-bold text-gray-800">$5,000.00</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
