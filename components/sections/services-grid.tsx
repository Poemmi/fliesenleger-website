import Link from "next/link";
import {
  Bath,
  Square,
  Gem,
  Home,
  Trees,
  Wrench,
  Droplet,
  Lightbulb,
  LucideIcon,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { leistungen } from "@/content/leistungen";
import { ArrowRight } from "lucide-react";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Bath,
  Square,
  Gem,
  Home,
  Trees,
  Wrench,
  Droplet,
  Lightbulb,
};

export function ServicesGrid() {
  // Show only first 6 services on homepage
  const featuredServices = leistungen.slice(0, 6);

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Unsere Leistungen
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Von der Badsanierung bis zur Terrassengestaltung – wir bieten
            Ihnen das komplette Spektrum professioneller Fliesenarbeiten.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => {
            const Icon = iconMap[service.icon] || Lightbulb;
            return (
              <Card key={service.id} className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1 text-primary">✓</span>
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/leistungen">
              Alle Leistungen ansehen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
