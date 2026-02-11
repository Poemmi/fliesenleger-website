import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/site/contact-form";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie uns für eine kostenlose Beratung. Telefon, E-Mail oder Kontaktformular – wir freuen uns auf Ihre Anfrage!",
};

export default function KontaktPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Kontakt
            </h1>
            <p className="text-lg text-muted-foreground">
              Sie haben Fragen oder möchten ein Angebot anfragen? <br />
              Wir freuen uns darauf, von Ihnen zu hören!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left: Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-2xl font-bold">Kontaktmöglichkeiten</h2>

              <div className="space-y-6">
                {/* Phone */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      Telefon
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-lg font-medium hover:text-primary"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Rufen Sie uns gerne direkt an!
                    </p>
                    <Button className="mt-4 w-full" asChild>
                      <a href={`tel:${siteConfig.contact.phone}`}>
                        <Phone className="mr-2 h-4 w-4" />
                        Jetzt anrufen
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* WhatsApp */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <MessageCircle className="h-5 w-5 text-primary" />
                      </div>
                      WhatsApp
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Schreiben Sie uns eine Nachricht via WhatsApp
                    </p>
                    <Button variant="outline" className="mt-4 w-full" asChild>
                      <a
                        href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp öffnen
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      E-Mail
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="break-all hover:text-primary"
                    >
                      {siteConfig.contact.email}
                    </a>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Antwort meist innerhalb von 24 Stunden
                    </p>
                  </CardContent>
                </Card>

                {/* Address */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      Adresse
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <address className="not-italic text-muted-foreground">
                      {siteConfig.contact.street}
                      <br />
                      {siteConfig.contact.postalCode} {siteConfig.contact.city}
                    </address>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      Öffnungszeiten
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <div>{siteConfig.businessHours.weekdays}</div>
                    <div>{siteConfig.businessHours.saturday}</div>
                    <div>{siteConfig.businessHours.sunday}</div>
                    <p className="mt-3 text-xs italic">
                      {siteConfig.businessHours.note}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Anfrage senden</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Füllen Sie das Formular aus und wir melden uns schnellstmöglich
                    bei Ihnen.
                  </p>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
