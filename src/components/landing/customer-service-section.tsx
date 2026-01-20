'use client';

import { Headset } from 'lucide-react';

export function CustomerServiceSection() {
  return (
    <section id="servicio" className="py-24 bg-white border-t border-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/5 border border-electric/10 mb-6">
            <Headset size={14} className="text-electric" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-electric">Soporte Real</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 tracking-tighter leading-tight mb-6">
          ¿Necesitas Ayuda?
        </h2>
        <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto mb-12">
          Estamos aquí para ti. Contáctanos a través de nuestros canales oficiales y un humano te atenderá.
        </p>
        <div className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 shadow-sm">
             <p className="text-gray-600 font-medium text-lg">
                Muy pronto aquí verás los canales de atención al cliente.
             </p>
        </div>
      </div>
    </section>
  );
}
