import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-image");

  return (
    <section id="inicio" className="relative w-full overflow-hidden bg-background">
      <div className="container mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Préstamos al instante, sin buró
            </h1>
            <p className="mt-6 text-lg text-foreground/80 md:text-xl">
              $500 a $9,000 MXN directos a tu cuenta. Rápido, seguro y sin
              complicaciones.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button asChild size="lg" className="rounded-3xl px-8 py-6 text-lg">
                <Link href="#aplicar">Solicita tu préstamo</Link>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto h-80 w-80 lg:h-[28rem] lg:w-full">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={800}
                height={800}
                className="h-full w-full rounded-3xl object-cover shadow-2xl shadow-primary/20"
                data-ai-hint={heroImage.imageHint}
                priority
              />
            )}
             <div className="absolute -bottom-4 -right-4 -z-10 h-48 w-48 rounded-3xl bg-primary/20 blur-2xl"></div>
             <div className="absolute -top-4 -left-4 -z-10 h-48 w-48 rounded-3xl bg-accent/20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
