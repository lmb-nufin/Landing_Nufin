import { Smartphone, Users, TrendingUp, ShieldCheck } from "lucide-react";

const stats = [
  {
    value: "1M",
    suffix: "+",
    label: "DESCARGAS",
    subLabel: "En Google Play",
    icon: <Smartphone className="h-6 w-6 text-white" />,
    iconBg: "bg-blue-500",
    suffixColor: "text-blue-500",
  },
  {
    value: "300",
    suffix: "k+",
    label: "CONFIANZA",
    subLabel: "Créditos otorgados",
    icon: <Users className="h-6 w-6 text-white" />,
    iconBg: "bg-green-500",
    suffixColor: "text-green-500",
  },
  {
    value: "$100",
    suffix: "M+",
    label: "IMPACTO",
    subLabel: "Pesos colocados",
    icon: <TrendingUp className="h-6 w-6 text-white" />,
    iconBg: "bg-primary",
    suffixColor: "text-primary",
  },
];

export function TrustBar() {
  return (
    <section className="bg-transparent py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/60">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span>TRANSPARENCIA TOTAL</span>
          </div>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Resultados <span className="text-primary">reales</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl bg-white p-8 text-center shadow-md border transition-transform hover:-translate-y-1">
              <div className={`mb-6 inline-block rounded-2xl p-3 ${stat.iconBg}`}>
                {stat.icon}
              </div>
              <p className="text-6xl font-extrabold text-foreground">
                {stat.value}
                <span className={stat.suffixColor}>{stat.suffix}</span>
              </p>
              <p className="mt-4 text-sm font-bold tracking-widest text-foreground/50">{stat.label}</p>
              <p className="text-base text-foreground/70">{stat.subLabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
