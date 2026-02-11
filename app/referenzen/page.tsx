import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/sections/cta-section";
import { referenzen } from "@/content/referenzen";
import { MapPin, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Referenzen",
  description:
    "Überzeugen Sie sich von der Qualität unserer Arbeit. Hier finden Sie eine Auswahl unserer erfolgreich abgeschlossenen Fliesenleger-Projekte.",
};

export default function ReferenzenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Unsere Referenzen
            </h1>
            <p className="text-lg text-muted-foreground">
              Überzeugen Sie sich von der Qualität unserer Arbeit. Hier finden Sie
              eine Auswahl unserer erfolgreich abgeschlossenen Projekte – von der
              Badsanierung bis zur Terrassengestaltung.
            </p>
          </div>
        </div>
      </section>

      {/* References Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {referenzen.map((reference) => (
              <Card
                key={reference.id}
                className="overflow-hidden transition-shadow hover:shadow-lg"
              >
                {/* Placeholder Image */}
                <div className="relative aspect-[4/3] bg-muted">
                  <div className="flex h-full items-center justify-center p-4 text-center text-sm text-muted-foreground">
                    Referenzbild: {reference.title}
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Categories */}
                  <div className="mb-3 flex flex-wrap gap-2">
                    {reference.category.map((cat) => (
                      <Badge key={cat} variant="secondary">
                        {cat}
                      </Badge>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-xl font-semibold">
                    {reference.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-4 text-sm text-muted-foreground">
                    {reference.description}
                  </p>

                  {/* Meta Info */}
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {reference.location}
                    </div>
                    {reference.date && (
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {reference.date}
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  {reference.details && (
                    <div className="mt-4 space-y-1 border-t pt-4 text-xs text-muted-foreground">
                      {reference.details.flaeche && (
                        <div>
                          <strong>Fläche:</strong> {reference.details.flaeche}
                        </div>
                      )}
                      {reference.details.material && (
                        <div>
                          <strong>Material:</strong> {reference.details.material}
                        </div>
                      )}
                      {reference.details.dauer && (
                        <div>
                          <strong>Dauer:</strong> {reference.details.dauer}
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-muted/40 py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground">
            <strong>Hinweis:</strong> Die hier gezeigten Referenzbilder sind
            Platzhalter. Nach Projektabschluss fügen wir gerne hochwertige Fotos
            Ihrer eigenen Projekte hinzu (mit Ihrer Zustimmung).
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
