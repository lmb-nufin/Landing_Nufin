import { Smartphone, UserCheck, Cpu, Banknote } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const steps = [
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Instala Nufin",
    description: "Descarga nuestra app desde Google Play y crea tu cuenta.",
    time: "60 segundos",
  },
  {
    icon: <UserCheck className="h-8 w-8 text-primary" />,
    title: "Identifícate",
    description: "Verificamos tu identidad con tu INE y una selfie.",
    time: "Fácil y seguro",
  },
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: "Aprobación IA",
    description: "Nuestra inteligencia artificial analiza tu solicitud.",
    time: "30 segundos",
  },
  {
    icon: <Banknote className="h-8 w-8 text-primary" />,
    title: "Recibe tu Dinero",
    description: "El dinero se deposita directamente en tu cuenta bancaria.",
    time: "Instantáneo",
  },
];

export function StepsSection() {
  return (
    <section id="como-funciona" className="py-20 bg-background/50">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Dinero en tu cuenta a la velocidad de la luz
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Nuestro proceso está diseñado para ser lo más rápido y sencillo
            posible.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="rounded-3xl border-border/50 bg-background/50 backdrop-blur-xl shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-primary/20"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  {step.icon}
                  <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {index + 1}
                  </span>
                </div>
                <CardTitle className="pt-4">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{step.description}</CardDescription>
              </CardContent>
              <div className="px-6 pb-4">
                <div className="text-xs font-semibold text-accent-foreground bg-accent/20 text-center py-1 rounded-full">
                  {step.time}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
