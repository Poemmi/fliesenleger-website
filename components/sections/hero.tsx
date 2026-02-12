import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Modern Background with Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-primary/5" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient orbs */}
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-tr from-blue-400/10 to-primary/10 blur-3xl" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" 
             style={{
               backgroundImage: `linear-gradient(to right, hsl(217 91% 35% / 0.1) 1px, transparent 1px),
                                linear-gradient(to bottom, hsl(217 91% 35% / 0.1) 1px, transparent 1px)`,
               backgroundSize: '4rem 4rem'
             }} 
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full border bg-background px-4 py-1.5 text-sm font-medium shadow-sm">
            <span className="mr-2 text-primary">✓</span>
            {siteConfig.owner.experience} im Fliesenlegerhandwerk
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Präzise Fliesenarbeiten in{" "}
            <span className="text-primary">{siteConfig.contact.city}</span> &
            Umgebung
          </h1>

          {/* Subheadline */}
          <p className="mb-10 text-lg text-muted-foreground sm:text-xl">
            Sauber, zuverlässig und mit höchster Präzision. Von der Badsanierung
            bis zur Terrassengestaltung – Ihr{" "}
            <strong className="font-semibold text-foreground">
              Meisterbetrieb
            </strong>{" "}
            für hochwertige Fliesenarbeiten.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/kontakt">
                Angebot anfragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={`tel:${siteConfig.contact.phone}`}>
                <Phone className="mr-2 h-5 w-5" />
                Jetzt anrufen
              </a>
            </Button>
          </div>

          {/* USPs */}
          <div className="mt-16 grid grid-cols-1 gap-6 text-sm sm:grid-cols-3">
            <div className="rounded-lg bg-background p-4 shadow-sm">
              <div className="mb-1 font-semibold text-primary">
                Kostenlose Beratung
              </div>
              <div className="text-muted-foreground">
                Unverbindliche Erstberatung vor Ort
              </div>
            </div>
            <div className="rounded-lg bg-background p-4 shadow-sm">
              <div className="mb-1 font-semibold text-primary">
                Termintreue Umsetzung
              </div>
              <div className="text-muted-foreground">
                Zuverlässige Planung und Ausführung
              </div>
            </div>
            <div className="rounded-lg bg-background p-4 shadow-sm">
              <div className="mb-1 font-semibold text-primary">
                Meisterqualität
              </div>
              <div className="text-muted-foreground">
                Fachgerechte Arbeit mit Garantie
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
