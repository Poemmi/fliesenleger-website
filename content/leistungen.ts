export interface Leistung {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  benefits: string[];
  imageUrl?: string;
}

export const leistungen: Leistung[] = [
  {
    id: "badsanierung",
    title: "Badsanierung & Badmodernisierung",
    description:
      "Komplette Badsanierung aus einer Hand. Von der Planung bis zur fertigen Wellness-Oase. Wir kümmern uns um alle Gewerke und koordinieren das Projekt professionell.",
    icon: "Bath",
    benefits: [
      "Komplette Projektplanung und -koordination",
      "Moderne, barrierefreie Lösungen",
      "Hochwertige Materialien und Verarbeitung",
      "Saubere Ausführung mit Staubschutz",
    ],
  },
  {
    id: "grossformat",
    title: "Großformatfliesen",
    description:
      "Großformatige Fliesen für eine edle, moderne Optik mit weniger Fugen. Fachgerechte Verlegung für ein perfektes Fugenbild und langlebige Ergebnisse.",
    icon: "Square",
    benefits: [
      "Moderne, großzügige Optik",
      "Weniger Fugen, weniger Reinigungsaufwand",
      "Präzise Verlegung mit Spezialwerkzeug",
      "Beratung zu passenden Formaten",
    ],
  },
  {
    id: "naturstein",
    title: "Naturstein",
    description:
      "Zeitlose Eleganz mit Naturstein. Marmor, Granit, Schiefer oder Travertin – wir verarbeiten alle Natursteinsorten fachgerecht und bringen ihre Schönheit zur Geltung.",
    icon: "Gem",
    benefits: [
      "Individuelle, einzigartige Optik",
      "Langlebig und wertsteigernd",
      "Fachgerechte Behandlung und Versiegelung",
      "Beratung zu Pflege und Reinigung",
    ],
  },
  {
    id: "bodenfliesen",
    title: "Bodenfliesen Wohnraum",
    description:
      "Robuste und stilvolle Bodenfliesen für Küche, Flur, Wohnzimmer und mehr. Von klassisch bis modern – wir setzen Ihre Wünsche um.",
    icon: "Home",
    benefits: [
      "Große Auswahl an Designs und Formaten",
      "Strapazierfähig und pflegeleicht",
      "Fußbodenheizung-geeignet",
      "Perfekte Verlegung für lange Haltbarkeit",
    ],
  },
  {
    id: "terrasse-aussen",
    title: "Terrassen & Außenbereiche",
    description:
      "Witterungsbeständige Fliesen für Terrasse, Balkon und Außenbereiche. Rutschfest, frostsicher und optisch ansprechend.",
    icon: "Trees",
    benefits: [
      "Frostbeständige, rutschfeste Materialien",
      "Professionelles Gefälle und Drainage",
      "Langlebig auch bei Witterungseinflüssen",
      "Optisch ansprechende Gestaltung",
    ],
  },
  {
    id: "reparatur",
    title: "Reparaturen & Ausbesserungen",
    description:
      "Kleine und große Reparaturen an bestehenden Fliesen. Austausch einzelner Fliesen, Verfugungen erneuern oder Beschädigungen ausbessern.",
    icon: "Wrench",
    benefits: [
      "Schnelle Terminvergabe",
      "Passende Ersatzfliesen organisiert",
      "Saubere, fachgerechte Ausführung",
      "Auch für kleine Aufträge verfügbar",
    ],
  },
  {
    id: "silikonfugen",
    title: "Silikonfugen & Wartung",
    description:
      "Professionelles Erneuern von Silikonfugen in Bad und Küche. Saubere Verarbeitung für langanhaltende Dichtigkeit und schöne Optik.",
    icon: "Droplet",
    benefits: [
      "Schimmelfreie, dauerhafte Fugen",
      "Hochwertige Silikon-Qualität",
      "Saubere Kanten und gleichmäßiges Fugenbild",
      "Schnelle Ausführung ohne große Baustelle",
    ],
  },
  {
    id: "beratung",
    title: "Beratung & Planung",
    description:
      "Kostenlose Erstberatung vor Ort. Wir helfen bei der Materialauswahl, Planung und Umsetzung Ihrer Ideen.",
    icon: "Lightbulb",
    benefits: [
      "Kostenlose und unverbindliche Erstberatung",
      "Materialauswahl und Musterbestellung",
      "Transparente Kostenvoranschläge",
      "Langfristige Betreuung auch nach Projektabschluss",
    ],
  },
];

export type Leistungen = typeof leistungen;
