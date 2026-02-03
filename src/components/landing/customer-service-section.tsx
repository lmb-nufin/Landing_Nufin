'use client';

import { Headset, Mail } from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className}>
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.48 3.52 1.34 5.07l-1.38 5.02 5.14-1.35c1.5.81 3.19 1.24 4.93 1.24h.01c5.46 0 9.9-4.45 9.91-9.91.01-5.46-4.44-9.91-9.9-9.91zM12.04 21.09h-.01c-1.63 0-3.23-.42-4.66-1.21l-.33-.2-3.45.9.92-3.37-.22-.35c-.86-1.4-1.31-3-1.31-4.68 0-4.52 3.69-8.21 8.22-8.21 4.52 0 8.21 3.69 8.21 8.21-.01 4.52-3.7 8.21-8.21 8.21zm4.52-6.14c-.25-.12-1.47-.72-1.7-.82-.23-.09-.39-.15-.56.15-.17.3-.64.81-.79.98-.15.17-.3.18-.55.06-.25-.12-1.06-.39-2.02-1.25-.75-.67-1.25-1.49-1.4-1.74-.15-.25-.02-.38.12-.51.13-.12.28-.31.42-.46.14-.15.19-.25.28-.42.09-.17.05-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.3-.23.24-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.76 2.67 4.27 3.75.59.26 1.05.41 1.41.52.59.18 1.13.15 1.55.09.47-.06 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.07-.1-.23-.15-.48-.28z"/>
    </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className}>
        <path d="M22.675 0h-21.35C.63 0 0 .63 0 1.325v21.351C0 23.37.63 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .63 23.37 0 22.675 0z"/>
    </svg>
);

export function CustomerServiceSection() {
  return (
    <section id="servicio" className="py-8 px-6">
      <div className="max-w-4xl mx-auto bg-[#F8F7FF] rounded-3xl p-8 lg:p-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/5 border border-electric/10 mb-6">
            <Headset size={14} className="text-electric" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-electric">Soporte Real</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-black text-gray-900 tracking-tighter leading-tight mb-6">
          ¿Necesitas <span className="text-deep-purple">Ayuda</span>?
        </h2>
        <p className="text-sm text-gray-500 font-medium max-w-2xl mx-auto mb-12">
          Estamos aquí para ti. Contáctanos a través de nuestros canales oficiales y un humano te atenderá.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="https://wa.me/525573796433" target="_blank" rel="noopener noreferrer" className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center group">
                <WhatsAppIcon className="w-8 h-8 text-green-500 mb-4 transition-transform group-hover:scale-110" />
                <h3 className="font-display font-bold text-base text-gray-900 mb-1">WhatsApp</h3>
                <p className="text-xs text-gray-500 font-medium group-hover:text-electric transition-colors">+52 55 7379 6433</p>
            </a>
             <a href="mailto:soporte@nufin.com.mx" className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center group">
                <Mail className="w-8 h-8 text-gray-400 mb-4 transition-transform group-hover:scale-110" />
                <h3 className="font-display font-bold text-base text-gray-900 mb-1">Correo</h3>
                <p className="text-xs text-gray-500 font-medium group-hover:text-electric transition-colors">soporte@nufin.com.mx</p>
            </a>
            <a href="https://tinyurl.com/2etvfeex" target="_blank" rel="noopener noreferrer" className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center group">
                <FacebookIcon className="w-8 h-8 text-blue-600 mb-4 transition-transform group-hover:scale-110" />
                <h3 className="font-display font-bold text-base text-gray-900 mb-1">Facebook</h3>
                <p className="text-xs text-gray-500 font-medium group-hover:text-electric transition-colors">@nufinoficial</p>
            </a>
        </div>
      </div>
    </section>
  );
}
