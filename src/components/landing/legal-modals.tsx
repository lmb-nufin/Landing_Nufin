
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

// This component is no longer in use for Terms and Conditions.
// It is kept for potential future use with other modals.
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
              {/* Content moved to its own page */}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
}

    