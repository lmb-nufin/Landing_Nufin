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
  isPrivacyOpen: boolean;
  setIsPrivacyOpen: (isOpen: boolean) => void;
};

export function LegalModals({
  isTermsOpen,
  setIsTermsOpen,
  isPrivacyOpen,
  setIsPrivacyOpen,
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

      <Dialog open={isPrivacyOpen} onOpenChange={setIsPrivacyOpen}>
        <DialogContent className="max-w-4xl h-[90vh] flex flex-col p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-2xl">Aviso de Privacidad</DialogTitle>
            <DialogDescription>
              Conforme a la Ley Federal de Protección de Datos Personales en
              Posesión de los Particulares (LFPDPPP).
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="flex-1 px-6">
            <div className="prose prose-sm max-w-none text-foreground/80 pb-6">
              <p>
                NUFIN, S.A.P.I. de C.V., SOFOM, E.N.R. (en adelante "Nufin"),
                con domicilio en Av. Insurgentes Sur 123, Piso 4, Colonia
                Roma, Ciudad de México, es el responsable del uso y protección
                de sus datos personales.
              </p>
              <h4>1. Datos Personales Recabados</h4>
              <p>
                Para llevar a cabo las finalidades descritas en el presente
                aviso de privacidad, utilizaremos los siguientes datos
                personales: datos de identificación, datos de contacto, datos
                laborales, datos patrimoniales y/o financieros, y datos
                biométricos (selfie).
              </p>
              <h4>2. Finalidades del Tratamiento</h4>
              <p>
                Los datos personales que recabamos de usted, los utilizaremos
                para las siguientes finalidades que son necesarias para el
                servicio que solicita:
                <ul>
                  <li>Verificar y confirmar su identidad.</li>
                  <li>Realizar el análisis de riesgo y viabilidad de crédito.</li>
                  <li>
                    Formalizar la relación contractual y administrar el
                    crédito.
                  </li>
                  <li>Realizar gestiones de cobranza.</li>
                </ul>
              </p>
              <h4>3. Derechos ARCO</h4>
              <p>
                Usted tiene derecho a conocer qué datos personales tenemos de
                usted, para qué los utilizamos y las condiciones del uso que
                les damos (Acceso). Asimismo, es su derecho solicitar la
                corrección de su información personal (Rectificación); que la
                eliminemos de nuestros registros (Cancelación); así como
                oponerse al uso de sus datos personales para fines específicos
                (Oposición).
              </p>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
}
