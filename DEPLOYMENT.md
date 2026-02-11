# Deployment Guide - Fliesenleger Website

## Vorbereitung

### 1. Umgebungsvariablen konfigurieren

Erstellen Sie eine `.env.local` Datei im Projekt-Root:

```bash
# Resend API Key für E-Mail-Versand
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Site URL (wird für Sitemap und OG-Tags verwendet)
NEXT_PUBLIC_SITE_URL=https://ihr-domain.de
```

#### Resend API Key erhalten:
1. Registrieren Sie sich bei [resend.com](https://resend.com)
2. Gehen Sie zu "API Keys"
3. Erstellen Sie einen neuen API Key
4. Fügen Sie den Key in die `.env.local` ein

### 2. Content anpassen

Bearbeiten Sie die Dateien in `/content/`:

- **`content/site.ts`**: Firmendaten, Kontakt, Öffnungszeiten
- **`content/leistungen.ts`**: Leistungsbeschreibungen anpassen
- **`content/referenzen.ts`**: Referenzprojekte mit echten Daten

### 3. Rechtliches aktualisieren

⚠️ **WICHTIG**: Die Impressum- und Datenschutzseiten enthalten nur Muster! 

- **`app/impressum/page.tsx`**: Mit echten Firmendaten ausfüllen
- **`app/datenschutz/page.tsx`**: Rechtlich prüfen lassen

**Empfehlung**: Nutzen Sie einen Datenschutz-Generator oder konsultieren Sie einen Rechtsanwalt.

---

## Deployment auf Vercel

### Schritt 1: GitHub Repository erstellen

```bash
cd fliesenleger-website
git init
git add .
git commit -m "Initial commit: Fliesenleger Website"
git branch -M main
git remote add origin https://github.com/IHR-USERNAME/fliesenleger-website.git
git push -u origin main
```

### Schritt 2: Vercel Account erstellen

1. Gehen Sie zu [vercel.com](https://vercel.com)
2. Registrieren Sie sich mit Ihrem GitHub-Account
3. Autorisieren Sie Vercel für GitHub

### Schritt 3: Projekt deployen

1. Klicken Sie auf "Add New Project"
2. Wählen Sie Ihr GitHub Repository aus
3. Vercel erkennt automatisch Next.js
4. **Wichtig**: Fügen Sie die Umgebungsvariablen hinzu:
   - `RESEND_API_KEY`: Ihr Resend API Key
   - `NEXT_PUBLIC_SITE_URL`: Ihre finale Domain (z.B. `https://mustermann-fliesenleger.de`)
5. Klicken Sie auf "Deploy"

### Schritt 4: Custom Domain verbinden

Nach erfolgreichem Deployment:

1. Gehen Sie zu "Settings" → "Domains"
2. Klicken Sie auf "Add Domain"
3. Geben Sie Ihre Domain ein (z.B. `mustermann-fliesenleger.de`)
4. Folgen Sie den DNS-Anweisungen

#### DNS-Konfiguration (bei Ihrem Domain-Anbieter):

**Für Root-Domain (mustermann-fliesenleger.de):**
```
Type: A
Name: @
Value: 76.76.19.19
```

**Für www-Subdomain (www.mustermann-fliesenleger.de):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

Die DNS-Änderungen können 24-48 Stunden dauern.

---

## E-Mail-Versand einrichten

### Resend konfigurieren

1. In Resend: Gehen Sie zu "Domains"
2. Fügen Sie Ihre Domain hinzu (z.B. `mustermann-fliesenleger.de`)
3. Fügen Sie die DNS-Einträge beim Domain-Anbieter hinzu (SPF, DKIM, DMARC)
4. Warten Sie auf Verifizierung (kann 1-2 Stunden dauern)

### Server Action aktivieren

Die E-Mail-Funktionalität ist bereits in `app/actions/contact.ts` vorbereitet.

Aktualisieren Sie die `submitContactForm` Funktion:

```typescript
// Entfernen Sie die Kommentare bei diesen Zeilen:
const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: "website@mustermann-fliesenleger.de", // Anpassen!
  to: "info@mustermann-fliesenleger.de",      // Anpassen!
  subject: `Neue Anfrage: ${validated.subject}`,
  html: `...`, // Template ist bereits vorhanden
});
```

Pushen Sie die Änderungen:
```bash
git add .
git commit -m "Aktiviere E-Mail-Versand"
git push
```

Vercel deployed automatisch.

---

## Bilder hochladen

### Referenzbilder ersetzen

1. Erstellen Sie den Ordner: `public/images/referenzen/`
2. Laden Sie Ihre Projekt-Fotos hoch (optimal: 1200-1600px Breite, WebP oder JPEG)
3. Benennen Sie die Dateien sinnvoll (z.B. `bad-musterstadt-1.jpg`)
4. Aktualisieren Sie `content/referenzen.ts`:
   ```typescript
   images: [
     {
       src: "/images/referenzen/bad-musterstadt-1.jpg",
       alt: "Modernes Bad mit großformatigen Fliesen",
       isPlaceholder: false, // Wichtig!
     },
   ],
   ```

### Logo hinzufügen (optional)

1. Legen Sie Ihr Logo in `public/logo.png`
2. Aktualisieren Sie `components/site/header.tsx`:
   ```tsx
   <Link href="/" className="-m-1.5 p-1.5">
     <Image src="/logo.png" alt={siteConfig.name} width={120} height={40} />
   </Link>
   ```

---

## Performance-Optimierung

### Bilder optimieren

Vor dem Upload:
- Verwenden Sie WebP-Format
- Komprimieren Sie mit [TinyPNG](https://tinypng.com) oder [Squoosh](https://squoosh.app)
- Optimale Größe: 1200-1600px Breite, 80-90% Qualität

### Lighthouse-Test durchführen

1. Öffnen Sie Ihre Live-Site
2. Öffnen Sie Chrome DevTools (F12)
3. Tab "Lighthouse"
4. Klicken Sie auf "Generate Report" (Mobile)
5. Ziel: Performance >90, SEO >90, Accessibility >90

---

## Post-Deployment Checkliste

- [ ] Alle Platzhalter-Inhalte ersetzt
- [ ] Impressum mit echten Daten ausgefüllt
- [ ] Datenschutzerklärung rechtlich geprüft
- [ ] Resend Domain verifiziert und E-Mail-Versand getestet
- [ ] Custom Domain verbunden und SSL aktiv
- [ ] Referenzbilder hochgeladen (mit Genehmigung der Kunden)
- [ ] Lighthouse-Score überprüft
- [ ] Kontaktformular getestet
- [ ] Alle Links funktionieren
- [ ] Mobile Ansicht getestet
- [ ] Google Search Console eingerichtet (optional)
- [ ] Google My Business Profil erstellt (für Local SEO)

---

## Wartung & Updates

### Content aktualisieren

1. Änderungen in den Content-Dateien vornehmen
2. Commit & Push: `git add . && git commit -m "Update content" && git push`
3. Vercel deployed automatisch

### Next.js aktualisieren

```bash
npm update next react react-dom
npm audit fix
git add . && git commit -m "Update dependencies" && git push
```

---

## Support & Troubleshooting

### Häufige Probleme

**Problem:** E-Mails kommen nicht an
- ✓ Prüfen Sie den Resend API Key in Vercel Environment Variables
- ✓ Prüfen Sie die Domain-Verifizierung in Resend
- ✓ Prüfen Sie den Spam-Ordner

**Problem:** Bilder werden nicht angezeigt
- ✓ Pfad korrekt? (muss mit `/` beginnen)
- ✓ Datei existiert in `public/`?
- ✓ Nach Upload: Deploy ausgelöst?

**Problem:** 404 Fehler nach Domain-Verbindung
- ✓ DNS-Einträge korrekt?
- ✓ 24-48h gewartet?
- ✓ DNS-Propagation prüfen: [whatsmydns.net](https://www.whatsmydns.net)

---

## Weitere Schritte (Optional)

### Google My Business
- Profil erstellen: [google.com/business](https://www.google.com/business/)
- NAP-Daten (Name, Address, Phone) müssen mit Website übereinstimmen
- Fotos hochladen, Bewertungen sammeln

### Google Search Console
- Website einreichen: [search.google.com/search-console](https://search.google.com/search-console)
- Sitemap einreichen: `https://ihr-domain.de/sitemap.xml`

### Analytics (datensparsam)
- Empfehlung: [Plausible Analytics](https://plausible.io) oder [Umami](https://umami.is)
- DSGVO-konform, kein Cookie-Banner nötig

---

**Viel Erfolg mit Ihrer Website!** 🚀
