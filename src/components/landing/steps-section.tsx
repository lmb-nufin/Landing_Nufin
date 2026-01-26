import { Smartphone, IdCard, Zap, CircleDollarSign, Clock, ArrowRight, ShieldCheck, Heart, UserCheck } from 'lucide-react';

export function StepsSection() {
  const steps = [
    {
      id: "01",
      icon: <Smartphone className="w-5 h-5 text-white" />,
      title: "Instala Nufin",
      time: "60s",
      desc: "Descarga la app segura desde Google Play.",
      gradient: "from-blue-500 to-cyan-400",
      shadow: "shadow-blue-500/30"
    },
    {
      id: "02",
      icon: <IdCard className="w-5 h-5 text-white" />,
      title: "Identifícate",
      time: "2m",
      desc: "INE y selfie. Tecnología biométrica avanzada.",
      gradient: "from-electric to-violet-500",
      shadow: "shadow-electric/30"
    },
    {
      id: "03",
      icon: <Zap className="w-5 h-5 text-white" />,
      title: "Aprobación IA",
      time: "30s",
      desc: "Motor de riesgo en tiempo real. Sin papeleo.",
      gradient: "from-fuchsia-500 to-pink-500",
      shadow: "shadow-fuchsia-500/30"
    },
    {
      id: "04",
      icon: <CircleDollarSign className="w-5 h-5 text-white" />,
      title: "Recibe Dinero",
      time: "Instantáneo",
      desc: "Transferencia SPEI directa a tu cuenta.",
      gradient: "from-emerald-400 to-teal-500",
      shadow: "shadow-emerald-500/30"
    }
  ];

  return (
    <section id="como-funciona" className="relative overflow-hidden py-8 px-6">
      <div className="max-w-7xl mx-auto bg-[#F8F7FF] rounded-3xl p-8 lg:p-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none rounded-3xl">
            <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-electric/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
                <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-4">
                        <span className="w-2 h-2 rounded-full bg-electric animate-pulse"></span>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Proceso Digital 100%</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-display font-black text-gray-900 tracking-tighter leading-[1.1]">
                        Dinero en tu cuenta <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-violet-600">a la velocidad de la luz</span>
                    </h3>
                </div>
                <p className="text-gray-500 font-medium text-sm max-w-xs md:text-right pb-2">
                    Sin filas, sin sucursales y sin letras chiquitas. Así debe ser la banca moderna.
                </p>
            </div>

            {/* Steps Container */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-gradient-to-r from-gray-200/0 via-gray-300 to-gray-200/0 -z-10"></div>

                {steps.map((step, index) => (
                    <div key={index} className="group relative pt-6">
                        {/* Floating Badge */}
                        <div className="absolute top-0 right-4 bg-white border border-gray-100 shadow-sm px-2 py-1 rounded-md text-[10px] font-bold text-gray-400 z-20 group-hover:scale-110 transition-transform origin-bottom-left">
                            {step.time}
                        </div>

                        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-start relative overflow-hidden group-hover:-translate-y-1.5">
                            {/* Hover Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                            
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} ${step.shadow} flex items-center justify-center mb-5 relative z-10 transform group-hover:rotate-6 transition-transform duration-500`}>
                                {step.icon}
                            </div>

                            <span className="text-5xl font-display font-black text-gray-100 absolute -right-2 -bottom-2 select-none group-hover:text-gray-200 transition-colors duration-300">
                                {step.id}
                            </span>

                            <h4 className="text-lg font-display font-black text-gray-900 mb-2 relative z-10">{step.title}</h4>
                            <p className="text-gray-500 text-sm font-medium leading-relaxed relative z-10">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Premium CTA & Stats */}
            <div id="aplicar" className="mt-16 relative">
                <div className="bg-gray-900 rounded-2xl p-8 overflow-hidden relative shadow-2xl shadow-gray-900/30">
                    {/* Background Gradients */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-electric/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left space-y-1">
                            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                                <span className="flex h-2.5 w-2.5 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                </span>
                                <span className="text-emerald-400 font-bold text-xs tracking-widest uppercase">Sistema Activo</span>
                            </div>
                            <h4 className="text-3xl font-display font-black text-white tracking-tight">
                                Comienza tu solicitud
                            </h4>
                            <p className="text-gray-400 text-base font-medium">Toma menos de 3 minutos.</p>
                        </div>
                        
                        <a href="https://play.google.com/store/apps/details?id=com.nufin.app&hl=en" target="_blank" rel="noopener noreferrer" className="group relative inline-block px-8 py-4 bg-white text-gray-900 rounded-xl font-display font-black text-base transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]"></div>
                            <span className="relative flex items-center gap-2">
                                Solicitar ahora <ArrowRight className="w-4 h-4" />
                            </span>
                        </a>
                    </div>

                    {/* Stats Grid inside Dark Card for Contrast */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 border-t border-gray-800 pt-8">
                        {[
                            { label: "Reconstruyen su historial", val: "8 de cada 10", icon: <UserCheck size={14} className="text-electric" /> },
                            { label: "Cifrado Militar", val: "AES-256", icon: <ShieldCheck size={14} className="text-emerald-400" /> },
                            { label: "Experiencia Usuario", val: "4.9/5", icon: <Heart size={14} className="text-rose-500 fill-rose-500" /> },
                            { label: "Atención Real", val: "24/7", icon: <Clock size={14} className="text-blue-400" /> }
                        ].map((metric, i) => (
                            <div key={i} className="text-center">
                                <div className="flex items-center justify-center gap-2 mb-1 text-white">
                                    {metric.icon}
                                    <span className="font-display font-black text-xl tracking-tight whitespace-nowrap">{metric.val}</span>
                                </div>
                                <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">{metric.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
