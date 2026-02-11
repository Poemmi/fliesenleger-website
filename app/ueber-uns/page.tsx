import type { Metadata } from "next";
import { Award, CheckCircle, Heart, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CTASection } from "@/components/sections/cta-section";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Lernen Sie uns kennen: Professioneller Fliesenleger-Meisterbetrieb mit über 15 Jahren Erfahrung. Werte: Qualität, Zuverlässigkeit und persönliche Beratung.",
};

const values = [
  {
    icon: Award,
    title: "Meisterqualität",
    description:
      "Als Meisterbetrieb garantieren wir fachgerechte Ausführung nach höchsten Standards. Jedes Projekt wird mit Präzision und Liebe zum Detail umgesetzt.",
  },
  {
    icon: CheckCircle,
    title: "Termintreue",
    description:
      "Verlässliche Planung und pünktliche Umsetzung sind für uns selbstverständlich. Wir halten, was wir versprechen – von der ersten Beratung bis zur Abnahme.",
  },
  {
    icon: Heart,
    title: "Sauberkeit",
    description:
      "Eine ordentliche Baustelle ist uns wichtig. Wir arbeiten mit Staubschutz, räumen täglich auf und hinterlassen Ihr Zuhause in einwandfreiem Zustand.",
  },
  {
    icon: Users,
    title: "Persönliche Beratung",
    description:
      "Wir nehmen uns Zeit für Sie. Von der Materialauswahl bis zur Planung stehen wir Ihnen mit Rat und Tat zur Seite – auch über das Projekt hinaus.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Über uns
            </h1>
            <p className="text-lg text-muted-foreground">
              Lernen Sie uns kennen – Ihr zuverlässiger Partner für
              professionelle Fliesenarbeiten in {siteConfig.contact.city} und
              Umgebung.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Text Content */}
            <div>
              <h2 className="mb-6 text-3xl font-bold">
                Meisterbetrieb mit Leidenschaft
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Als {siteConfig.owner.title} mit {siteConfig.owner.experience}{" "}
                  im Fliesenlegerhandwerk sind wir Ihr kompetenter Ansprechpartner
                  für alle Fliesenarbeiten – vom kleinen Reparaturauftrag bis zur
                  kompletten Badsanierung.
                </p>
                <p>
                  Unser Ziel ist es, Ihre Vorstellungen mit höchster Präzision und
                  Qualität umzusetzen. Dabei legen wir großen Wert auf persönliche
                  Beratung, transparente Kommunikation und eine saubere,
                  zuverlässige Arbeitsweise.
                </p>
                <p>
                  Ob moderne Großformatfliesen, edle Natursteine oder
                  strapazierfähige Bodenfliesen – wir beherrschen alle Techniken
                  und Materialien. Vertrauen Sie auf unsere Erfahrung und unser
                  handwerkliches Können.
                </p>
              </div>

              {/* Placeholder for Owner Image */}
              <div className="mt-8 rounded-2xl bg-muted p-8 text-center">
                <div className="mb-4 text-sm text-muted-foreground">
                  [Platzhalter für Foto des Inhabers]
                </div>
                <p className="font-semibold">{siteConfig.owner.name}</p>
                <p className="text-sm text-muted-foreground">
                  {siteConfig.owner.title}
                </p>
              </div>
            </div>

            {/* Right: Values */}
            <div>
              <h2 className="mb-6 text-3xl font-bold">Unsere Werte</h2>
              <div className="space-y-6">
                {values.map((value, idx) => {
                  const Icon = value.icon;
                  return (
                    <Card key={idx}>
                      <CardHeader>
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{value.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold">Unser Einsatzgebiet</h2>
            <p className="mb-6 text-muted-foreground">
              Wir sind hauptsächlich in {siteConfig.serviceArea.mainCity} und im
              Umkreis von {siteConfig.serviceArea.radius} tätig. Dazu gehören
              unter anderem:
            </p>
            <p className="text-lg font-medium">
              {siteConfig.serviceArea.cities.join(" • ")}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Weitere Orte auf Anfrage möglich
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
