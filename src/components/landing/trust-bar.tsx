import { Smartphone, TrendingUp, ShieldCheck, Users, CheckCircle } from 'lucide-react';

export function TrustBar() {
  const partners = [
    { name: "STP", role: "Liquidación SPEI" },
    { name: "PROFECO", role: "Protección" },
    { name: "Hacienda", role: "SAT / SHCP" },
    { name: "CONDUSEF", role: "Supervisión" },
    { name: "BBVA", role: "Infraestructura" },
    { name: "Google", role: "Cloud & Safety" },
    { name: "Amazon", role: "Web Services" }
  ];

  const stats = [
    { 
      label: "Descargas", 
      value: "1", 
      suffix: "M+",
      subtext: "En Google Play",
      icon: <Smartphone className="w-6 h-6" />,
      color: "text-blue-600",
      accent: "bg-blue-600",
      isLive: true
    },
    { 
      label: "Confianza", 
      value: "300", 
      suffix: "k+",
      subtext: "Créditos otorgados",
      icon: <Users className="w-6 h-6" />,
      color: "text-emerald-600",
      accent: "bg-emerald-600",
      isLive: false
    },
    { 
      label: "Impacto", 
      value: "$100", 
      suffix: "M+",
      subtext: "Pesos colocados",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "text-electric",
      accent: "bg-electric",
      isLive: false
    },
  ];

  return (
    <section id="confianza" className="w-full bg-[#FAFAFF] relative overflow-hidden py-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#7A5AF8 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-100 shadow-sm mb-4">
              <ShieldCheck size={12} className="text-electric" />
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Transparencia Total</span>
           </div>
           <h2 className="text-3xl md:text-4xl font-display font-black text-gray-900 tracking-tight leading-tight">
             Resultados <span className="text-electric">reales</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="group relative">
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col items-center text-center">
                <div className={`w-12 h-12 rounded-2xl ${stat.accent} text-white flex items-center justify-center shadow-lg mb-6`}>
                  {stat.icon}
                </div>
                <div className="flex flex-col items-center mb-2">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-display font-black tracking-tighter text-gray-900 leading-none">
                      {stat.value}
                    </span>
                    <span className={`text-2xl font-display font-bold ${stat.color} ml-1`}>
                      {stat.suffix}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-col items-center gap-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                      {stat.label}
                    </span>
                    <span className="text-gray-500 font-medium text-xs">
                      {stat.subtext}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative bg-slate-100/50 rounded-3xl p-8 border border-slate-200/60 shadow-inner">
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 border-b border-slate-200 pb-6 mb-6">
              <div className="text-center lg:text-left">
                <h3 className="text-lg font-display font-bold text-slate-900">Seguridad Institucional</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                 <div className="flex items-center gap-2 bg-white border border-white shadow-sm px-3 py-2 rounded-xl">
                    <CheckCircle size={14} className="text-emerald-500" />
                    <p className="text-[10px] font-black text-slate-800 uppercase tracking-wider">Cifrado Bancario</p>
                 </div>
                 <div className="flex items-center gap-2 bg-white border border-white shadow-sm px-3 py-2 rounded-xl">
                    <ShieldCheck size={14} className="text-blue-500" />
                    <p className="text-[10px] font-black text-slate-800 uppercase tracking-wider">Privacidad AWS</p>
                 </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {partners.map((partner, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-4 bg-white/40 border border-white/80 rounded-2xl transition-all hover:bg-white hover:shadow-md group">
                  <div className="text-base font-display font-black text-slate-400 group-hover:text-electric transition-colors mb-1 tracking-tighter text-center">
                    {partner.name}
                  </div>
                  <div className="text-[7px] font-black text-slate-300 group-hover:text-slate-500 uppercase tracking-widest text-center whitespace-nowrap">
                    {partner.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
