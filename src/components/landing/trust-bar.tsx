import { Smartphone, Users, TrendingUp } from "lucide-react";

const stats = [
  { value: "1M+", label: "Descargas", icon: <Smartphone className="h-8 w-8 text-blue-500" />, color: "blue" },
  { value: "300k+", label: "Confianza", icon: <Users className="h-8 w-8 text-green-500" />, color: "green" },
  { value: "$100M+", label: "Impacto", icon: <TrendingUp className="h-8 w-8 text-purple-500" />, color: "purple" },
];

export function TrustBar() {
  return (
    <section className="bg-transparent py-16">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">TRANSPARENCIA TOTAL</p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Resultados reales
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl bg-white p-8 text-center shadow-lg border transition-transform hover:-translate-y-2">
              <div className={`mb-4 inline-block rounded-2xl p-4 bg-${stat.color}-100`}>{stat.icon}</div>
              <p className="text-4xl font-extrabold">{stat.value}</p>
              <p className="mt-2 text-base text-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
