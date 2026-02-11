import { Phone, Calendar, Hammer, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "1. Kontaktaufnahme & Beratung",
    description:
      "Sie kontaktieren uns per Telefon, E-Mail oder über unser Kontaktformular. Wir vereinbaren einen kostenlosen Beratungstermin vor Ort.",
  },
  {
    icon: Calendar,
    title: "2. Planung & Angebot",
    description:
      "Wir besichtigen das Objekt, beraten Sie zur Materialauswahl und erstellen Ihnen ein transparentes, detailliertes Kostenangebot.",
  },
  {
    icon: Hammer,
    title: "3. Professionelle Umsetzung",
    description:
      "Nach Auftragserteilung setzen wir Ihr Projekt termintreu, sauber und mit höchster Präzision um. Sie werden regelmäßig über den Fortschritt informiert.",
  },
  {
    icon: CheckCircle,
    title: "4. Abnahme & Nachbetreuung",
    description:
      "Nach Fertigstellung erfolgt die gemeinsame Abnahme. Auch danach stehen wir Ihnen für Fragen und Service jederzeit zur Verfügung.",
  },
];

export function ProcessSteps() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            So läuft die Zusammenarbeit ab
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Von der ersten Kontaktaufnahme bis zur fertigen Arbeit – wir begleiten
            Sie professionell durch jeden Schritt.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative">
                {/* Connector Line (hidden on last item) */}
                {idx < steps.length - 1 && (
                  <div className="absolute left-6 top-12 hidden h-full w-0.5 bg-border lg:block" />
                )}

                <div className="relative">
                  {/* Icon */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
