export const siteConfig = {
  name: "Mustermann Fliesenleger",
  title: "Professionelle Fliesenarbeiten in Limburg, Wiesbaden & Umgebung",
  description:
    "Ihr Experte für hochwertige Fliesenarbeiten. Badsanierung, Großformatfliesen, Naturstein und mehr. Sauber, präzise, authentisch.",
  
  // NAP (Name, Address, Phone) - für Local SEO wichtig
  contact: {
    phone: "+49 1634680386",
    phoneDisplay: "01634680386",
    whatsapp: "+491634680386",
    email: "daniel.wlochowitz@web.de",
    street: "Brotweg 18",
    postalCode: "65606",
    city: "Villmar",
    region: "Hessen",
    country: "Deutschland",
  },
  
  // Geschäftszeiten
  businessHours: {
    weekdays: "Mo - Fr: 8:00 - 18:00 Uhr",
    saturday: "Sa: 8:00 - 15:00 Uhr (nach Vereinbarung)",
    sunday: "So: Geschlossen",
    note: "Außerhalb der Geschäftszeiten erreichen Sie uns per E-Mail oder WhatsApp.",
  },
  
  // Service-Gebiet
  serviceArea: {
    mainCity: "Wiesbaden",
    radius: "40 km",
    cities: [
      "Wiesbaden",
      "Limburg",
      "Villmar",
      "Bad Camberg",
      "Idstein",
    ],
  },
  
  // Social Media (optional, später ausfüllen)
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
  
  // Weitere Infos
  owner: {
    name: "Daniel Wlochowitz",
    title: "Fliesenlegermeister",
    experience: "15+ Jahre Erfahrung",
  },
  
  // Rechtliches
  legal: {
    taxId: "DE123456789", // Umsatzsteuer-ID (Platzhalter)
    registrationNumber: "", // Handwerkskammer-Nummer (optional)
  },
} as const;

export type SiteConfig = typeof siteConfig;
