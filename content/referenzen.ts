export interface Referenz {
  id: string;
  title: string;
  description: string;
  location: string;
  date?: string;
  category: string[];
  images: {
    src: string;
    alt: string;
    isPlaceholder?: boolean;
  }[];
  details?: {
    flaeche?: string;
    material?: string;
    dauer?: string;
  };
}

export const referenzen: Referenz[] = [
  {
    id: "bad-musterstadt-1",
    title: "Moderne Badsanierung in Musterstadt",
    description:
      "Komplette Badsanierung mit großformatigen Fliesen in Betonoptik. Bodengleiche Dusche, moderne Armaturen und hochwertige Materialien schaffen eine zeitgemäße Wellness-Oase.",
    location: "Musterstadt",
    date: "2025",
    category: ["Badsanierung", "Großformat"],
    images: [
      {
        src: "/images/referenzen/placeholder-bath-1.jpg",
        alt: "Modernes Bad mit großformatigen Fliesen in Betonoptik",
        isPlaceholder: true,
      },
      {
        src: "/images/referenzen/placeholder-bath-2.jpg",
        alt: "Bodengleiche Dusche mit Glasabtrennung",
        isPlaceholder: true,
      },
    ],
    details: {
      flaeche: "12 m²",
      material: "Großformatfliesen 120x60 cm, Betonoptik",
      dauer: "2 Wochen",
    },
  },
  {
    id: "kueche-naturstein",
    title: "Edle Küche mit Naturstein",
    description:
      "Küchenrückwand und Boden mit edlem Granit. Die Kombination aus dunklem Granit und hellen Wandfliesen schafft eine elegante und pflegeleichte Küche.",
    location: "Nachbarstadt",
    date: "2025",
    category: ["Naturstein", "Küche"],
    images: [
      {
        src: "/images/referenzen/placeholder-kitchen-1.jpg",
        alt: "Küchenrückwand mit Granit",
        isPlaceholder: true,
      },
    ],
    details: {
      flaeche: "25 m²",
      material: "Granit, poliert",
      dauer: "1 Woche",
    },
  },
  {
    id: "terrasse-grossformat",
    title: "Großzügige Terrasse mit XXL-Fliesen",
    description:
      "Witterungsbeständige Terrassenplatten im XXL-Format. Rutschfest, frostsicher und mit professionellem Gefälle für beste Drainage.",
    location: "Kleinstadt",
    date: "2024",
    category: ["Terrasse", "Großformat", "Außen"],
    images: [
      {
        src: "/images/referenzen/placeholder-terrace-1.jpg",
        alt: "Terrasse mit großformatigen Feinsteinzeug-Platten",
        isPlaceholder: true,
      },
    ],
    details: {
      flaeche: "40 m²",
      material: "Feinsteinzeug 80x80 cm, R11-Rutschfestigkeit",
      dauer: "3 Tage",
    },
  },
  {
    id: "wohnzimmer-modern",
    title: "Wohnzimmer in moderner Holzoptik",
    description:
      "Bodenfliesen in Holzoptik für ein warmes, wohnliches Ambiente. Fußbodenheizung-geeignet, pflegeleicht und täuschend echt.",
    location: "Dorfhausen",
    date: "2024",
    category: ["Wohnraum", "Holzoptik"],
    images: [
      {
        src: "/images/referenzen/placeholder-living-1.jpg",
        alt: "Wohnzimmer mit Fliesen in Holzoptik",
        isPlaceholder: true,
      },
    ],
    details: {
      flaeche: "35 m²",
      material: "Feinsteinzeug in Holzoptik, 20x120 cm",
      dauer: "4 Tage",
    },
  },
  {
    id: "bad-barrierefrei",
    title: "Barrierefreies Badezimmer",
    description:
      "Altersgerechte Badsanierung mit ebenerdiger Dusche, rutschfesten Fliesen und durchdachter Raumaufteilung für maximale Sicherheit und Komfort.",
    location: "Musterstadt",
    date: "2024",
    category: ["Badsanierung", "Barrierefrei"],
    images: [
      {
        src: "/images/referenzen/placeholder-bath-barrier-1.jpg",
        alt: "Barrierefreies Bad mit ebenerdiger Dusche",
        isPlaceholder: true,
      },
    ],
    details: {
      flaeche: "10 m²",
      material: "Rutschfeste Fliesen R10/B, Großformat",
      dauer: "2 Wochen",
    },
  },
  {
    id: "gaeste-wc",
    title: "Elegantes Gäste-WC",
    description:
      "Kleines Gäste-WC mit großer Wirkung. Mosaikfliesen als Akzent und hochwertige Wandfliesen schaffen eine einladende Atmosphäre auf kleinem Raum.",
    location: "Nachbarstadt",
    date: "2024",
    category: ["Bad", "Mosaik"],
    images: [
      {
        src: "/images/referenzen/placeholder-wc-1.jpg",
        alt: "Gäste-WC mit Mosaikfliesen",
        isPlaceholder: true,
      },
    ],
    details: {
      flaeche: "3 m²",
      material: "Wandfliesen 30x60 cm + Mosaik",
      dauer: "3 Tage",
    },
  },
];

// Kategorien für Filter
export const kategorien = [
  "Alle",
  "Badsanierung",
  "Großformat",
  "Naturstein",
  "Terrasse",
  "Wohnraum",
  "Küche",
  "Außen",
  "Barrierefrei",
  "Mosaik",
] as const;

export type Referenzen = typeof referenzen;
export type Kategorie = (typeof kategorien)[number];
