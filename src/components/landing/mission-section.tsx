import { Sparkles, FileText, PhoneOff, Heart, ArrowUpRight } from 'lucide-react';

export function MissionSection() {
  return (
    <section id="nosotros" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
              <Sparkles size={12} className="text-emerald-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Filosofía Nufin</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 tracking-tight">
              Más que crédito, <span className="text-electric">bienestar</span> financiero.
            </h2>
          </div>
        </div>

        {/* Modern Bento Grid - Clean & Airy */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-4 h-auto">
          
          {/* Main Feature: No Buró */}
          <div className="md:col-span-8 md:row-span-2 group relative overflow-hidden bg-emerald-50 rounded-2xl p-6 lg:p-10 border border-emerald-500/10 shadow-sm transition-all hover:shadow-lg flex flex-col justify-between min-h-[300px]">
            <div className="relative z-10 max-w-lg">
              <div className="w-12 h-12 rounded-xl bg-white text-emerald-500 flex items-center justify-center shadow-sm mb-6">
                <FileText size={24} />
              </div>
              <h3 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 mb-3 tracking-tight">
                Libertad Financiera
              </h3>
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed font-medium mb-6">
                Te prestamos sin revisar buró ni historial. Nuestra tecnología evalúa tu potencial, no tu pasado.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                    </div>
                  ))}
                </div>
                <p className="text-xs font-bold text-gray-900">1M+ de usuarios</p>
              </div>
            </div>
            
            {/* Subtle decorative blob */}
            <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-emerald-500/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
          </div>

          {/* Feature 2: Cero Acoso */}
          <div className="md:col-span-4 md:row-span-1 group relative bg-white rounded-2xl p-6 border border-gray-100 shadow transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-electric/10 text-gray-900 flex items-center justify-center mb-4">
                <PhoneOff size={20} />
              </div>
              <h3 className="text-lg font-display font-bold text-gray-900 mb-1.5 tracking-tight">
                Cero Acoso
              </h3>
              <p className="text-gray-500 font-medium text-xs leading-relaxed mb-3">
                Cobranza ética y respetuosa. Tu privacidad es sagrada.
              </p>
              <div className="mt-auto">
                <a href="#" className="inline-flex items-center gap-2 text-[10px] font-bold text-gray-900 hover:text-electric transition-colors uppercase tracking-widest">
                  Saber más <ArrowUpRight size={10} />
                </a>
              </div>
            </div>
          </div>

          {/* Feature 3: Beneficios */}
          <div className="md:col-span-4 md:row-span-1 group relative bg-white rounded-2xl p-6 border border-gray-100 shadow transition-all hover:shadow-lg hover:-translate-y-1">
             <div className="relative z-10 h-full flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center mb-4">
                <Heart size={20} fill="currentColor" />
              </div>
              <h3 className="text-lg font-display font-bold text-gray-900 mb-1.5 tracking-tight">
                Recompensas
              </h3>
              <p className="text-gray-500 font-medium text-xs leading-relaxed mb-3">
                Gana efectivo y mejora tus tasas pagando a tiempo.
              </p>
              <div className="mt-auto">
                <a href="#" className="inline-flex items-center gap-2 text-[10px] font-bold text-gray-900 hover:text-electric transition-colors uppercase tracking-widest">
                  Ver programa <ArrowUpRight size={10} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
