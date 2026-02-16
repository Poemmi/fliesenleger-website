import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/content/site";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-16 text-primary-foreground">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-blue-700" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Bereit für Ihr Projekt?
          </h2>
          <p className="mb-8 text-lg opacity-90">
            Kontaktieren Sie uns jetzt für eine kostenlose Erstberatung. <br />
            Wir freuen uns auf Ihre Anfrage!
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/kontakt">Kostenlos anfragen</Link>
            </Button>
            <Button
              size="lg"
              className="bg-white text-primary border-2 border-white hover:bg-white/90 hover:scale-105 transition-transform"
              asChild
            >
              <a href={`tel:${siteConfig.contact.phone}`}>
                <Phone className="mr-2 h-5 w-5" />
                {siteConfig.contact.phoneDisplay}
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-white text-primary border-2 border-white hover:bg-white/90 hover:scale-105 transition-transform"
              asChild
            >
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </Button>
          </div>

          <p className="mt-8 text-sm opacity-75">
            <Mail className="mr-1 inline h-4 w-4" />
            Oder per E-Mail:{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="underline underline-offset-4 hover:opacity-80"
            >
              {siteConfig.contact.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
