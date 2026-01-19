import { Info } from "lucide-react";

export function MissionSection() {
    return (
      <section id="nosotros" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2 space-y-8">
                 <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric/5 text-electric">
                    <Info size={16} />
                    <span className="text-xs font-black uppercase tracking-widest">Finanzas Humanas</span>
                 </div>
                 <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-gray-900 tracking-tighter leading-tight">
                   Nuestra misión es<br/> <span className="text-electric">incluirte.</span>
                 </h2>
                 <p className="text-xl text-gray-500 font-medium leading-relaxed">
                    Nufin nace para dar respuesta a quienes el sistema tradicional ignora. No somos solo una app, somos tu aliado para construir un futuro financiero sólido.
                 </p>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                 <div className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 flex flex-col items-center justify-center">
                    <h4 className="text-5xl font-display font-black text-gray-900 mb-2">100%</h4>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center">Digital y Seguro</p>
                 </div>
                 <div className="p-10 bg-gray-900 text-white rounded-[2.5rem] border-8 border-electric flex flex-col items-center justify-center">
                    <h4 className="text-5xl font-display font-black mb-2">24/7</h4>
                    <p className="text-xs font-bold opacity-80 uppercase tracking-widest text-center">Disponibilidad</p>
                 </div>
              </div>
           </div>
        </div>
      </section>
    );
}
