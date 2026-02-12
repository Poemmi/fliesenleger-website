import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { referenzen } from "@/content/referenzen";
import { ArrowRight, MapPin } from "lucide-react";

export function ReferencesPreview() {
  // Show first 3 references
  const featuredReferences = referenzen.slice(0, 3);

  return (
    <section className="relative overflow-hidden py-20">
      {/* Modern background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-blue-50/40" />
      
      {/* Decorative element */}
      <div className="absolute top-20 right-10 h-64 w-64 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Unsere Referenzen
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Überzeugen Sie sich von der Qualität unserer Arbeit. Hier finden Sie
            eine Auswahl unserer erfolgreich abgeschlossenen Projekte.
          </p>
        </div>

        {/* References Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredReferences.map((reference) => (
            <Card key={reference.id} className="overflow-hidden transition-shadow hover:shadow-lg">
              {/* Placeholder Image */}
              <div className="relative aspect-[4/3] bg-muted">
                <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                  Referenzbild: {reference.title}
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-3 flex flex-wrap gap-2">
                  {reference.category.slice(0, 2).map((cat) => (
                    <Badge key={cat} variant="secondary">
                      {cat}
                    </Badge>
                  ))}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{reference.title}</h3>
                <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                  {reference.description}
                </p>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {reference.location}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/referenzen">
              Alle Referenzen ansehen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
