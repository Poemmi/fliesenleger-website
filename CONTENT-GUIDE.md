# Content Aktualisierungs-Anleitung

Diese Anleitung zeigt Ihnen, wie Sie die Inhalte der Website selbst anpassen können, ohne tiefes technisches Wissen.

## 📋 Übersicht der Content-Dateien

Alle Inhalte befinden sich im Ordner `content/`. Diese Dateien sind einfach zu bearbeiten:

```
content/
├── site.ts          → Firmendaten, Kontakt, Öffnungszeiten
├── leistungen.ts    → Ihre Dienstleistungen
└── referenzen.ts    → Referenzprojekte mit Bildern
```

---

## 1. Firmendaten aktualisieren (`content/site.ts`)

### Was Sie ändern sollten:

```typescript
export const siteConfig = {
  name: "Ihr Firmenname",                    // ← Ändern
  title: "Professionelle Fliesenarbeiten in [Ihr Ort] & Umgebung",  // ← Ändern
  
  contact: {
    phone: "+49 123 456789",                 // ← Ändern
    phoneDisplay: "0123 / 456789",           // ← Ändern
    whatsapp: "+49123456789",                // ← Ändern (ohne Leerzeichen)
    email: "info@ihre-domain.de",            // ← Ändern
    street: "Ihre Straße 123",               // ← Ändern
    postalCode: "12345",                     // ← Ändern
    city: "Ihre Stadt",                      // ← Ändern
    region: "Ihre Region",                   // ← Ändern
  },
  
  businessHours: {
    weekdays: "Mo - Fr: 7:00 - 17:00 Uhr",   // ← Ändern
    saturday: "Sa: Nach Vereinbarung",       // ← Ändern
    sunday: "So: Geschlossen",               // ← Ändern
  },
  
  serviceArea: {
    mainCity: "Ihre Stadt",                  // ← Ändern
    radius: "30 km",                         // ← Ändern
    cities: [                                // ← Ihre Einsatzorte hinzufügen
      "Stadt 1",
      "Stadt 2",
      "Stadt 3",
    ],
  },
  
  owner: {
    name: "Ihr Name",                        // ← Ändern
    title: "Fliesenlegermeister",            // ← Ändern wenn nötig
    experience: "XX Jahre Erfahrung",        // ← Ändern
  },
};
```

### Nach der Änderung:

```bash
git add content/site.ts
git commit -m "Firmendaten aktualisiert"
git push
```

---

## 2. Leistungen anpassen (`content/leistungen.ts`)

### Beispiel: Neue Leistung hinzufügen

```typescript
export const leistungen: Leistung[] = [
  // Bestehende Leistungen...
  
  // Neue Leistung hinzufügen:
  {
    id: "mosaik-arbeiten",                   // Eindeutige ID (kleinbuchstaben, keine Leerzeichen)
    title: "Mosaik-Arbeiten",                // Titel der Leistung
    description: "Kreative Mosaikverlegung für individuelle Akzente...",
    icon: "Sparkles",                        // Icon-Name (siehe Icon-Liste unten)
    benefits: [
      "Individuelle Designs",
      "Hochwertige Materialien",
      "Präzise Verlegung",
      "Beratung zur Gestaltung",
    ],
  },
];
```

### Verfügbare Icons:

- `Bath` - Badezimmer
- `Square` - Fliesen
- `Gem` - Naturstein
- `Home` - Wohnraum
- `Trees` - Garten/Außen
- `Wrench` - Reparatur
- `Droplet` - Silikon/Fugen
- `Lightbulb` - Beratung
- `Sparkles` - Spezial/Mosaik

### Leistung entfernen:

Löschen Sie einfach den kompletten Block von `{` bis `},`.

### Leistung bearbeiten:

Ändern Sie die Texte zwischen den Anführungszeichen `"..."`.

---

## 3. Referenzen hinzufügen (`content/referenzen.ts`)

### Schritt 1: Bilder hochladen

1. Erstellen Sie den Ordner `public/images/referenzen/` (falls nicht vorhanden)
2. Laden Sie Ihre Fotos hoch (Dateiname z.B. `projekt-name-1.jpg`)
3. Empfohlene Größe: 1200-1600px Breite, komprimiert

### Schritt 2: Referenz im Code hinzufügen

```typescript
export const referenzen: Referenz[] = [
  // Bestehende Referenzen...
  
  // Neue Referenz hinzufügen:
  {
    id: "projekt-xyz",                       // Eindeutige ID
    title: "Moderne Badsanierung",           // Projekttitel
    description: "Beschreibung des Projekts...",
    location: "Musterstadt",                 // Ort
    date: "2025",                            // Jahr (optional)
    category: ["Badsanierung", "Großformat"], // Kategorien (für Filter)
    
    images: [
      {
        src: "/images/referenzen/projekt-xyz-1.jpg",  // Pfad zu Ihrem Bild
        alt: "Beschreibung des Bildes",                // Bildbeschreibung
        isPlaceholder: false,                          // Wichtig: auf false setzen!
      },
      // Weitere Bilder...
    ],
    
    details: {
      flaeche: "20 m²",                      // Optional
      material: "Großformatfliesen 120x60",  // Optional
      dauer: "2 Wochen",                     // Optional
    },
  },
];
```

### Verfügbare Kategorien:

- `"Badsanierung"`
- `"Großformat"`
- `"Naturstein"`
- `"Terrasse"`
- `"Wohnraum"`
- `"Küche"`
- `"Außen"`
- `"Barrierefrei"`
- `"Mosaik"`

Verwenden Sie die Kategorien exakt wie aufgelistet, um die Filter-Funktion zu nutzen.

---

## 4. Texte auf Seiten ändern

### Startseite (`app/page.tsx`)

Hier werden die Sections zusammengestellt. Für Textänderungen öffnen Sie:

- `components/sections/hero.tsx` - Hero-Bereich mit Hauptüberschrift
- `components/sections/services-grid.tsx` - Leistungs-Teaser
- `components/sections/process-steps.tsx` - Ablauf-Schritte

### Andere Seiten

- **Leistungen:** `app/leistungen/page.tsx` (nutzt Daten aus `content/leistungen.ts`)
- **Referenzen:** `app/referenzen/page.tsx` (nutzt Daten aus `content/referenzen.ts`)
- **Über uns:** `app/ueber-uns/page.tsx`
- **Kontakt:** `app/kontakt/page.tsx`

---

## 5. Impressum & Datenschutz aktualisieren

⚠️ **RECHTLICH WICHTIG**

### Impressum (`app/impressum/page.tsx`)

Ersetzen Sie alle Platzhalter:
- Firmenname
- Adresse
- Kontaktdaten
- Umsatzsteuer-ID
- Handwerkskammer (falls vorhanden)

### Datenschutz (`app/datenschutz/page.tsx`)

**Wichtig:** Lassen Sie die Datenschutzerklärung von einem Anwalt prüfen oder verwenden Sie einen Generator:
- [eRecht24 Generator](https://www.e-recht24.de/muster-datenschutzerklaerung.html) (kostenpflichtig, aber rechtssicher)
- [Datenschutz-Generator.de](https://www.datenschutz-generator.de)

---

## 6. Änderungen online bringen

### Mit Git (empfohlen):

```bash
# 1. Alle Änderungen speichern
git add .

# 2. Beschreibung der Änderung hinzufügen
git commit -m "Content aktualisiert"

# 3. Online hochladen
git push
```

Vercel deployed automatisch innerhalb von 1-2 Minuten.

### Ohne Git (über GitHub Web):

1. Gehen Sie zu GitHub → Ihr Repository
2. Navigieren Sie zur Datei
3. Klicken Sie auf den Stift (Edit)
4. Ändern Sie den Inhalt
5. Klicken Sie auf "Commit changes"

---

## ❓ Häufige Fragen

### Wie füge ich ein Logo hinzu?

1. Speichern Sie Ihr Logo als `public/logo.png`
2. Bearbeiten Sie `components/site/header.tsx`
3. Ersetzen Sie den Text-Namen durch:
   ```tsx
   <Image src="/logo.png" alt={siteConfig.name} width={150} height={50} />
   ```

### Wie ändere ich die Farben?

Bearbeiten Sie `app/globals.css` und ändern Sie die Werte bei `--primary`:

```css
--primary: 217 91% 35%; /* Blau - ändern Sie die Werte */
```

Tipp: Verwenden Sie einen [HSL Color Picker](https://hslpicker.com/).

### Wie füge ich Social Media Links hinzu?

1. Öffnen Sie `content/site.ts`
2. Fügen Sie bei `social` Ihre URLs ein:
   ```typescript
   social: {
     facebook: "https://facebook.com/IhrProfil",
     instagram: "https://instagram.com/IhrProfil",
   },
   ```

---

## 🆘 Hilfe benötigt?

Bei Fragen:
1. Schauen Sie in die [README.md](README.md)
2. Schauen Sie in die [DEPLOYMENT.md](DEPLOYMENT.md)
3. Kontaktieren Sie den Entwickler

**Wichtig:** Machen Sie vor größeren Änderungen ein Backup (Download des Repositories).
