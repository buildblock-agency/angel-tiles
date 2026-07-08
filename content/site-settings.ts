export interface SiteSettings {
  companyName: string;
  tagline: string;
  address: {
    street: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    formatted: string;
  };
  phone: string[];
  email: string;
  whatsapp: string;
  whatsappMessage: string;
  businessHours: {
    weekdays: string;
    sundays: string;
    formatted: string[];
  };
  socialLinks: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
  googleMapEmbedUrl: string;
  googleMapDirectionsUrl: string;
}

export const siteSettings: SiteSettings = {
  companyName: "Angel Tiles & Stone Studio",
  tagline: "Luxury Stone. Premium Tiles. Timeless Spaces.",
  address: {
    street: "Krishna Kunj, 197, Pipli Chouraha, Shankar Nagar, Bhadu Market",
    city: "Jodhpur",
    state: "Rajasthan",
    pincode: "342008",
    country: "India",
    formatted: "Krishna Kunj, 197, Pipli Chouraha, Shankar Nagar, Bhadu Market, Jodhpur, Rajasthan 342008"
  },
  phone: [
    "+91 81479 41542",
    "+91 98290 44444"
  ],
  email: "info@angeltilesandstone.com",
  whatsapp: "+918147941542",
  whatsappMessage: "Hello Angel Tiles & Stone, I am interested in custom marble and tile solutions. Can you help me?",
  businessHours: {
    weekdays: "8:00 AM - 11:00 PM (Monday to Saturday)",
    sundays: "8:00 AM - 11:00 PM (Sunday)",
    formatted: [
      "Monday - Sunday: 8:00 AM - 11:00 PM"
    ]
  },
  socialLinks: {
    instagram: "https://instagram.com/angeltilesandstone",
    facebook: "https://facebook.com/angeltilesandstone",
    youtube: "https://youtube.com/angeltilesandstone"
  },
  // Dynamic free maps search embed matching GMB exact pin
  googleMapEmbedUrl: "https://maps.google.com/maps?q=Angel%20Tiles%20and%20Stone%20Studio%20Pipli%20Chouraha%20Jodhpur&t=&z=15&ie=UTF8&iwloc=&output=embed",
  googleMapDirectionsUrl: "https://share.google/vcbM2AxkSabMDNYE8"
};
export const brandsList = [
  "Kajaria",
  "Somany",
  "Nexion",
  "Simpolo",
  "Jaquar",
  "Hindware",
  "Cera",
  "Kohler"
];
export const servicesList = [
  {
    slug: "design-consultation",
    title: "Design Consultation",
    tagline: "Visualize Your Interiors with Expert Design Curations",
    description: "Choosing the right marble flow or tile pairing can be overwhelming. Our premium design consultation service bridges this gap. Bring your residential or commercial floor layout, and our experienced designers will curate coordinate themes, suggesting matching wall backsplashes, border highlights, and tabletops. We create visual stone layout schemes so you can make informed purchases.",
    features: [
      "Detailed color palette coordination for marble & tiles",
      "Stab vein alignment mapping for book-match Italian marble",
      "Tabletop basin and plumbing fixture pairing recommendations",
      "Complimentary design moodboard presentation at the showroom"
    ],
    image: "/images/designer-tiles.png",
    seoTitle: "Marble & Tiles Design Consultation Showroom Jodhpur",
    seoDescription: "Complimentary interior design layout recommendations and stone vein book-match planning at our showroom in Shankar Nagar Jodhpur."
  },
  {
    slug: "project-consultation",
    title: "Project Consultation",
    tagline: "Dedicated Commercial Supply & Custom Fabrication Consulting",
    description: "Designed for developers, hotels, interior architects, and contractors in Jodhpur. Our project consultation team provides volume pricing slabs, coordinates custom block selections, and ensures streamlined shipping schedules. From high-durability granite parking lots to decorative CNC jali wall partitions, we provide technical specifications, weight calculations, and custom stone cuts.",
    features: [
      "Custom wholesale bulk pricing structures for large builders",
      "Direct quarry block allocation and thickness customizations",
      "Detailed material test certifications (porosity, compression)",
      "Dedicated account manager from selection to delivery"
    ],
    image: "/images/italian-marble.png",
    seoTitle: "Bulk Stone Supply & Contractor Consultation Jodhpur",
    seoDescription: "Commercial marble supply, Jodhpur sandstone blocks, and granite custom cuts consultation for architects, builders, and hotels in Rajasthan."
  }
];
