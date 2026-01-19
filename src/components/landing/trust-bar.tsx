import { Download, Heart, TrendingUp } from "lucide-react";

const stats = [
  { value: "1M+", label: "Descargas", icon: <Download className="h-6 w-6 text-primary" /> },
  { value: "300k+", label: "Confianza", icon: <Heart className="h-6 w-6 text-pink-500" /> },
  { value: "$100M+", label: "Impacto", icon: <TrendingUp className="h-6 w-6 text-emerald-500" /> },
];

const partners = ["STP", "PROFECO", "Hacienda", "BBVA", "Google", "Amazon"];

export function TrustBar() {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Stats */}
          <div className="flex flex-col justify-center space-y-8">
            <h3 className="text-center text-2xl font-bold tracking-tight lg:text-left">
              Tu confianza es nuestra prioridad
            </h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center">
                  <div className="mb-2 rounded-full bg-primary/10 p-3">{stat.icon}</div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Partners */}
          <div className="rounded-3xl bg-background/50 p-8 shadow-inner-lg backdrop-blur-lg border border-border/50">
            <h3 className="mb-6 text-center text-sm font-semibold uppercase text-foreground/60 tracking-wider">
              Respaldado por líderes de la industria
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3">
              {partners.map((partner) => (
                <div
                  key={partner}
                  className="flex items-center justify-center text-lg font-semibold text-foreground/70"
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
