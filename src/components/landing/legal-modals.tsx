
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

type LegalModalsProps = {
  isTermsOpen: boolean;
  setIsTermsOpen: (isOpen: boolean) => void;
};

export function LegalModals({
  isTermsOpen,
  setIsTermsOpen,
}: LegalModalsProps) {
  return (
    <>
      <Dialog open={isTermsOpen} onOpenChange={setIsTermsOpen}>
        <DialogContent className="max-w-4xl h-[90vh] flex flex-col p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-2xl">
              Términos y Condiciones
            </DialogTitle>
            <DialogDescription>
              Última actualización: {new Date().toLocaleDateString()}
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="flex-1 px-6">
            <div className="prose prose-sm max-w-none text-foreground/80 pb-6">
              <p>
                Bienvenido a Nufin. Estos términos y condiciones describen las
                reglas y regulaciones para el uso del sitio web y los servicios
                de Nufin, ubicados en nufin.com.mx.
              </p>
              <h4>1. Aceptación de los Términos</h4>
              <p>
                Al acceder a este sitio web, asumimos que aceptas estos
                términos y condiciones. No continúes usando Nufin si no estás
                de acuerdo con todos los términos y condiciones establecidos en
                esta página.
              </p>
              <h4>2. Servicios Financieros</h4>
              <p>
                Nufin ofrece servicios de préstamos personales en línea. Todos
                los productos están sujetos a la aprobación crediticia y al
                cumplimiento de los requisitos establecidos por la empresa. La
                información presentada no constituye una oferta vinculante.
                Nos regimos por la normativa de la Comisión Nacional para la
                Protección y Defensa de los Usuarios de Servicios Financieros
                (CONDUSEF).
              </p>
              <h4>3. Uso de la Información</h4>
              <p>
                El uso de su información personal se rige por nuestro Aviso de
                Privacidad, en cumplimiento con la Ley Federal de Protección de
                Datos Personales en Posesión de los Particulares (LFPDPPP).
              </p>
              <h4>4. Obligaciones del Usuario</h4>
              <p>
                El usuario se compromete a proporcionar información veraz y
                actualizada durante el proceso de solicitud. El fraude o la
                falsificación de documentos será reportado a las autoridades
                correspondientes.
              </p>
              <h4>5. Sistema de Transferencias y Pagos (STP)</h4>
              <p>
                Las transferencias de fondos se realizan a través del Sistema de
                Transferencias y Pagos (STP), garantizando la seguridad y
                eficiencia de las transacciones.
              </p>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
}
