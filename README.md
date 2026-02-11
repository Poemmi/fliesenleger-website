# Fliesenleger Website

Professionelle Website für einen selbstständigen Fliesenleger - gebaut mit Next.js, TypeScript und Tailwind CSS.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** (Radix UI + Tailwind)
- **Lucide Icons**
- **Framer Motion** (Animationen)
- **React Hook Form + Zod** (Formular-Validierung)
- **Resend** (E-Mail-Versand)

## Erste Schritte

1. **Dependencies installieren:**
   ```bash
   npm install
   ```

2. **Umgebungsvariablen konfigurieren:**
   ```bash
   cp .env.example .env.local
   ```
   Füge deinen Resend API Key ein.

3. **Development Server starten:**
   ```bash
   npm run dev
   ```

4. **Öffne [http://localhost:3000](http://localhost:3000)**

## Projektstruktur

```
app/                    # Next.js App Router
  ├── layout.tsx       # Root Layout
  ├── page.tsx         # Startseite
  ├── leistungen/      # Leistungen-Seite
  ├── referenzen/      # Referenzen/Galerie
  ├── ueber-uns/       # Über uns
  ├── kontakt/         # Kontakt & Formular
  ├── impressum/       # Impressum
  └── datenschutz/     # Datenschutzerklärung
components/
  ├── site/            # Layout-Komponenten (Header, Footer)
  ├── sections/        # Wiederverwendbare Sections
  └── ui/              # shadcn/ui Komponenten
content/               # Content-Dateien (TS)
  ├── site.ts          # Site-Config (NAP, Kontakt)
  ├── leistungen.ts    # Leistungen-Daten
  └── referenzen.ts    # Referenzen-Daten
lib/                   # Utilities
public/
  └── images/          # Bilder & Assets
```

## Content aktualisieren

Die Inhalte sind in TypeScript-Dateien unter `content/` definiert:

- **`content/site.ts`**: Firmendaten, Kontaktinformationen, Social Media
- **`content/leistungen.ts`**: Leistungsbereiche und Beschreibungen
- **`content/referenzen.ts`**: Referenzprojekte und Bilder

## Deployment

### Vercel (empfohlen)

1. Repository auf GitHub pushen
2. Auf [vercel.com](https://vercel.com) anmelden
3. Projekt importieren
4. Umgebungsvariablen setzen
5. Deployen

### Custom Domain

In Vercel: Settings → Domains → Add Domain

## Performance

- ✅ Lighthouse Score Ziel: >90 (Mobile)
- ✅ Optimierte Bilder mit `next/image`
- ✅ Static Site Generation (SSG)
- ✅ Keine externen Font-Requests
- ✅ Code-Splitting

## SEO

- ✅ Metadata pro Seite
- ✅ Open Graph Tags
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ LocalBusiness Schema.org (JSON-LD)
- ✅ Saubere URL-Struktur

## DSGVO

- ✅ Keine externen Google Fonts
- ✅ Kein Tracking im MVP
- ✅ Formular mit Datenschutz-Checkbox
- ✅ Impressum & Datenschutzerklärung

## Lizenz

Private Nutzung
