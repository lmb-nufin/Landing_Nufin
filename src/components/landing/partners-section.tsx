import { Badge } from "@/components/ui/badge";

const partners = ["STP", "PROFECO", "Hacienda", "CONDUSEF", "BBVA", "Google", "Amazon"];

export function PartnersSection() {
  return (
    <section className="bg-transparent py-16">
      <div className="container mx-auto px-6">
        <div className="rounded-3xl bg-white/80 backdrop-blur-sm p-8 shadow-lg border">
            <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold tracking-tight">
                    Seguridad Institucional
                </h3>
                <div className="flex gap-2">
                    <Badge variant="secondary" className="rounded-full">Cifrado Bancario</Badge>
                    <Badge variant="secondary" className="rounded-full">Privacidad AWS</Badge>
                </div>
            </div>
            <div className="border-t pt-6">
                <div className="grid grid-cols-3 gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-7">
                  {partners.map((partner) => (
                    <div
                      key={partner}
                      className="flex items-center justify-center p-4 h-20 rounded-xl bg-gray-50 text-lg font-semibold text-foreground/70"
                    >
                      {partner}
                    </div>
                  ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
