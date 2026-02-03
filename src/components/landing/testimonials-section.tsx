"use client";

import { Star, Quote, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    name: "Alejandra Torres",
    location: "CDMX",
    date: "Miembro desde 2022",
    quote: "Increíble. No tenía historial crediticio y Nufin fue la única que confió en mí. El depósito llegó en 5 minutos literally.",
    avatar: "https://i.pravatar.cc/150?u=ale"
  },
  {
    name: "Ricardo Salinas",
    location: "Monterrey",
    date: "Miembro desde 2023",
    quote: "Lo que más valoro es el respeto. No te acosan con llamadas. Pagué a tiempo y mi límite subió de inmediato. ¡Súper recomendado!",
    avatar: "https://i.pravatar.cc/150?u=rick"
  },
  {
    name: "Elena Gómez",
    location: "Guadalajara",
    date: "Miembro desde 2021",
    quote: "La app es muy intuitiva. Pedí el préstamo para una emergencia médica un domingo a las 11 PM y el SPEI cayó al instante.",
    avatar: "https://i.pravatar.cc/150?u=elena"
  },
  {
    name: "Marco Antonio",
    location: "Puebla",
    date: "Miembro desde 2023",
    quote: "He usado otras apps pero ninguna es tan transparente como Nufin. Sabes exactamente cuánto vas a pagar desde el inicio.",
    avatar: "https://i.pravatar.cc/150?u=marco"
  },
  {
    name: "Sofía Méndez",
    location: "Querétaro",
    date: "Miembro desde 2024",
    quote: "Sin avales ni filas. Todo desde mi celular mientras estaba en el trabajo. Me salvaron de un apuro esta quincena.",
    avatar: "https://i.pravatar.cc/150?u=sofia"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-8 overflow-hidden">
      <div className="px-6">
        <div className="max-w-7xl mx-auto text-center bg-[#F8F7FF] rounded-3xl p-8 lg:p-12 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/5 border border-electric/10 mb-6">
            <Star size={14} className="text-amber-500 fill-amber-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-electric">Social Proof</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-black text-gray-900 tracking-tight mb-4">
            Historias de <span className="text-deep-purple">éxito</span> real
          </h2>
          <p className="text-gray-500 font-medium text-sm max-w-2xl mx-auto">
            Más de 1 millón de mexicanos han transformado su realidad financiera con el respaldo de Nufin.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] w-max">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div 
              key={i} 
              className="w-[320px] md:w-[380px] bg-white border border-gray-100 rounded-3xl p-6 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(122,90,248,0.12)] transition-all duration-500 flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="relative">
                   <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-white shadow-md grayscale-[0.5] group-hover:grayscale-0 transition-all" />
                   <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center text-white">
                      <CheckCircle2 size={12} strokeWidth={3} />
                   </div>
                </div>
                <Quote className="text-gray-100 w-10 h-10" />
              </div>

              <p className="text-gray-700 font-medium text-sm leading-relaxed mb-6 flex-grow">
                "{t.quote}"
              </p>

              <div className="mt-auto border-t border-gray-50 pt-5">
                <p className="font-display font-bold text-gray-900 text-base">{t.name}</p>
                <div className="flex justify-between items-center mt-1">
                   <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.location}</span>
                   <span className="text-[10px] font-black text-electric uppercase tracking-widest bg-electric/5 px-2 py-1 rounded-md">{t.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
