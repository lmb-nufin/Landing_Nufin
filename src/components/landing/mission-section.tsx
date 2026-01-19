
export function MissionSection() {
    return (
      <section id="nosotros" className="bg-transparent py-20">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">FINANZAS HUMANAS</p>
                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                        Nuestra misión es <span className="text-primary">incluirte.</span>
                    </h2>
                    <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-foreground/80">
                        Nufin nace para dar respuesta a quienes el sistema tradicional ignora. No somos solo una app, somos tu aliado para construir un futuro financiero sólido.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="rounded-3xl bg-white p-8 text-center shadow-lg border">
                        <p className="text-5xl font-extrabold text-primary">100%</p>
                        <p className="mt-2 text-base font-semibold text-foreground/70">DIGITAL Y SEGURO</p>
                    </div>
                    <div className="rounded-3xl bg-primary p-8 text-center shadow-lg">
                        <p className="text-5xl font-extrabold text-white">24/7</p>
                        <p className="mt-2 text-base font-semibold text-white/80">DISPONIBILIDAD</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
  }
  