"use client";

import { useState } from "react";
import { Logo } from "@/components/landing/logo";
import { LegalModals } from "@/components/landing/legal-modals";

export function Footer() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <>
      <footer className="bg-background/80 border-t border-border/50">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <Logo />
            <div className="mt-4 flex space-x-4 md:mt-0">
              <button
                onClick={() => setIsTermsOpen(true)}
                className="text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                Términos y Condiciones
              </button>
              <button
                onClick={() => setIsPrivacyOpen(true)}
                className="text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                Aviso de Privacidad
              </button>
            </div>
            <p className="mt-4 text-sm text-foreground/70 md:mt-0">
              Contacto:{" "}
              <a
                href="mailto:soporte@nufin.com.mx"
                className="hover:text-primary transition-colors"
              >
                soporte@nufin.com.mx
              </a>
            </p>
          </div>
          <div className="mt-8 border-t border-border/50 pt-8 text-center text-xs text-foreground/50">
            <p>
              Nufin es una marca registrada. Todos los derechos reservados © {new Date().getFullYear()}.
            </p>
            <p className="mt-2">
              Este es un producto financiero operado bajo las regulaciones de la CONDUSEF en México.
            </p>
          </div>
        </div>
      </footer>
      <LegalModals
        isTermsOpen={isTermsOpen}
        setIsTermsOpen={setIsTermsOpen}
        isPrivacyOpen={isPrivacyOpen}
        setIsPrivacyOpen={setIsPrivacyOpen}
      />
    </>
  );
}
