"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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

const Marquee = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("flex w-max animate-marquee space-x-8", className)}>
    {children}
  </div>
);

export function TestimonialsSection() {
  return (
    <section id="nosotros" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Amado por miles en todo México
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Nuestros clientes son nuestra mejor carta de presentación.
          </p>
        </div>
      </div>
      <div className="relative flex flex-col gap-8 overflow-hidden">
        <div className="flex w-full items-center">
          <Marquee>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard key={`marquee1-${index}`} {...testimonial} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ quote, name, location, avatar, avatarUrl }: (typeof testimonials)[0]) {
    return (
        <Card className="w-[350px] shrink-0 rounded-3xl bg-background/50 shadow-lg border-border/50 backdrop-blur-xl">
            <CardContent className="p-6">
                <p className="text-foreground/80">"{quote}"</p>
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
