import type { Metadata } from "next";
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
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/sections/cta-section";
import { leistungen } from "@/content/leistungen";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Unser komplettes Leistungsspektrum: Badsanierung, Großformatfliesen, Naturstein, Terrassengestaltung und mehr. Professionelle Fliesenarbeiten vom Meisterbetrieb.",
};

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

export default function LeistungenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Unsere Leistungen
            </h1>
            <p className="text-lg text-muted-foreground">
              Von der Badsanierung bis zur Terrassengestaltung – als Meisterbetrieb
              bieten wir Ihnen das komplette Spektrum professioneller Fliesenarbeiten
              in {siteConfig.contact.city} und Umgebung.
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {leistungen.map((service) => {
              const Icon = iconMap[service.icon] || Lightbulb;
              return (
                <Card key={service.id} className="overflow-hidden">
                  <CardHeader>
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="mb-3 font-semibold">Ihre Vorteile:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">
                            ✓
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Unser Einsatzgebiet</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Wir sind in {siteConfig.serviceArea.mainCity} und im Umkreis von{" "}
              {siteConfig.serviceArea.radius} tätig.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {siteConfig.serviceArea.cities.map((city) => (
                <Badge key={city} variant="secondary" className="text-sm">
                  {city}
                </Badge>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Weitere Orte auf Anfrage möglich
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
