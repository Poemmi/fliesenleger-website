import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/content/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Firmeninfo */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">{siteConfig.name}</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              {siteConfig.owner.title}
              <br />
              {siteConfig.owner.experience}
            </p>
            <p className="text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <div>
                  {siteConfig.contact.street}
                  <br />
                  {siteConfig.contact.postalCode} {siteConfig.contact.city}
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-primary"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-primary"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Öffnungszeiten</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <div>
                  <div>{siteConfig.businessHours.weekdays}</div>
                  <div>{siteConfig.businessHours.saturday}</div>
                  <div>{siteConfig.businessHours.sunday}</div>
                </div>
              </li>
            </ul>
            <p className="mt-3 text-xs italic text-muted-foreground">
              {siteConfig.businessHours.note}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Wichtige Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/leistungen" className="hover:text-primary">
                  Unsere Leistungen
                </Link>
              </li>
              <li>
                <Link href="/referenzen" className="hover:text-primary">
                  Referenzen
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns" className="hover:text-primary">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-primary">
                  Kontakt & Anfrage
                </Link>
              </li>
              <li className="pt-4">
                <Link
                  href="/impressum"
                  className="text-xs text-muted-foreground hover:text-primary"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-xs text-muted-foreground hover:text-primary"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {siteConfig.name}. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
