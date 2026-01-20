
"use client";

import { Logo } from "@/components/landing/logo";
import { Headset, Mail, Clock } from "lucide-react";
import Link from "next/link";

export function Footer() {

  return (
    <>
      <footer className="py-20 border-t border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2 space-y-8">
              <div className="flex items-center">
                <Logo className="h-10 md:h-12" />
              </div>
              <p className="text-base text-gray-500 leading-relaxed max-w-sm font-medium">
                La solución financiera inteligente para México. Préstamos rápidos, seguros y sin complicaciones burocráticas.
              </p>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-black text-gray-900 text-sm uppercase tracking-widest flex items-center gap-2">
                <Headset size={18} className="text-electric" /> Soporte
              </h4>
              <div className="flex flex-col gap-4 text-sm font-bold text-gray-500">
                <div className="flex items-center gap-3">
                  <Mail size={16} /> <a href="mailto:soporte@nufin.com.mx" className="hover:text-electric transition-colors">soporte@nufin.com.mx</a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={16} className="mt-1" /> <span>Lun-Vie: 9:00 - 18:00 CDMX</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
               <h4 className="font-black text-gray-900 text-sm uppercase tracking-widest">Legal</h4>
               <ul className="space-y-3 text-sm font-bold text-gray-500">
                 <li>
                   <Link
                    href="/terminos-y-condiciones"
                    className="hover:text-electric transition-colors text-left"
                   >
                     Términos y Condiciones
                   </Link>
                 </li>
                 <li>
                   <Link 
                    href="/aviso-de-privacidad" 
                    className="hover:text-electric transition-colors text-left"
                   >
                     Aviso de Privacidad
                   </Link>
                 </li>
               </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-gray-200">
             <div className="flex flex-col md:flex-row justify-between items-center gap-6">
               <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest font-black text-center md:text-left">
                 &copy; 2024 Nufin México. Entidad Financiera bajo supervisión.
               </p>
             </div>
          </div>
        </div>
      </footer>
    </>
  );
}

    