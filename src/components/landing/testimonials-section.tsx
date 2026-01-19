"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "¡Increíble! Obtuve mi préstamo en minutos. La app es súper fácil de usar y el proceso es muy transparente.",
    name: "Ana Sofía R.",
    location: "CDMX",
    avatar: "AS",
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
  },
  {
    quote: "Nufin me salvó de un apuro. La aprobación por IA es rapidísima y el dinero llegó a mi cuenta al instante.",
    name: "Javier M.",
    location: "Monterrey, N.L.",
    avatar: "JM",
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026705d"
  },
  {
    quote: "La mejor experiencia que he tenido con una financiera. Sin papeleo, sin filas. Todo desde mi celular.",
    name: "Valentina G.",
    location: "Guadalajara, Jal.",
    avatar: "VG",
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026706d"
  },
  {
    quote: "Excelente servicio al cliente. Tenía una duda y me respondieron de inmediato. 100% recomendado.",
    name: "Carlos E.",
    location: "Querétaro, Qro.",
    avatar: "CE",
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026707d"
  },
   {
    quote: "Me encanta que no revisen el buró de crédito de forma estricta. Dan oportunidades reales.",
    name: "Lucía F.",
    location: "Puebla, Pue.",
    avatar: "LF",
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026708d"
  },
];

export function TestimonialsSection() {
  return (
    <section id="clientes" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Amado por miles en todo México
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Nuestros clientes son nuestra mejor carta de presentación.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <TestimonialCard {...testimonial} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

function TestimonialCard({ quote, name, location, avatar, avatarUrl }: (typeof testimonials)[0]) {
    return (
        <Card className="h-full rounded-3xl bg-background/50 shadow-lg border-border/50 backdrop-blur-xl">
            <CardContent className="p-6 flex flex-col justify-between h-full">
                <p className="text-foreground/80 flex-grow">"{quote}"</p>
                <div className="mt-4 flex items-center gap-3">
                    <Avatar>
                        <AvatarImage src={avatarUrl} alt={name} />
                        <AvatarFallback>{avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold text-foreground">{name}</p>
                        <p className="text-sm text-foreground/60">{location}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
