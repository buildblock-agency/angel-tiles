export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "products" | "services" | "maintenance" | "general";
}

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is the primary difference between Indian and imported Italian marble?",
    answer: "Indian marble (like Makrana and Rajnagar) is denser, harder, and has a higher calcite content, making it highly durable and resistant to staining, though with stronger, more distinct veins. Italian marble (like Carrara or Statuario) is softer, highly lustrous, and has a delicate, flowing visual vein structure. Italian marble is preferred for luxury indoor aesthetics, while Indian marble is suitable for both heavy indoor and outdoor flooring.",
    category: "products"
  },
  {
    id: "faq-2",
    question: "Which natural stone is best recommended for kitchen countertops?",
    answer: "Natural Granite is the absolute best recommendation for kitchen countertops. Granite is an igneous rock with extreme density, making it virtually scratch-resistant, heat-resistant, and stain-proof once sealed. Marble and Quartz can also be used, but they require much higher maintenance, as acidic spills like lime or vinegar can etch marble surfaces, and excessive direct heat can damage quartz resin binders.",
    category: "products"
  },
  {
    id: "faq-3",
    question: "Do you offer custom CNC marble inlay and carving services for villas?",
    answer: "Yes, we specialize in Customized Marble Solutions. We use advanced CNC waterjet machines combined with skilled local Jodhpur artisans to create custom flooring medallions, decorative stone screen panels (jalis), temple backdrops, and engraved wall claddings. You can provide your own CAD layouts or choose from our design catalog.",
    category: "services"
  },
  {
    id: "faq-4",
    question: "Do you supply stones and tiles for projects outside Jodhpur?",
    answer: "Yes, we supply premium marble, granite, sandstone, and designer tiles for residential and commercial projects all across Rajasthan and major cities across India (including Delhi NCR, Mumbai, Ahmedabad, and Pune). We manage secure wooden crate packaging and container transport to ensure damage-free delivery.",
    category: "general"
  },
  {
    id: "faq-5",
    question: "How do I maintain the shine of Italian marble floors over time?",
    answer: "To maintain the mirror-like shine of Italian marble: 1. Clean daily using a dust mop and a pH-neutral marble cleaner (avoid vinegar, lemon juice, or commercial acid cleaners). 2. Wipe up liquid spills immediately. 3. Seal the marble every 2-3 years to prevent deep liquid staining. 4. Avoid dragging heavy metal furniture directly across the stone floor.",
    category: "maintenance"
  },
  {
    id: "faq-6",
    question: "Is Kota stone suitable for outdoor terrace and parking flooring?",
    answer: "Yes, Kota stone is highly recommended for outdoor terraces, parking ramps, and garden walkways. It is extremely tough, cost-effective, and handles vehicular weight easily. For outdoor wet zones, we recommend using a rough-honed or non-polished finish to ensure slip-resistance, whereas polished Kota stone is better suited for semi-covered corridors.",
    category: "products"
  },
  {
    id: "faq-7",
    question: "Do you provide design consultation for architects and homeowners?",
    answer: "Yes! We provide complimentary stone selection and layout design consultations at our Jodhpur showroom. Homeowners, interior designers, and architects can bring their floor plans. Our specialists will recommend matching slabs, design custom inlay concepts, and estimate quantities to prevent wastage.",
    category: "services"
  },
  {
    id: "faq-8",
    question: "What is the typical lead time for customized stone carving orders?",
    answer: "Standard products in stock (slabs and tiles) are ready for immediate shipping. For customized CNC work, waterjet marble inlays, or hand-carved stone columns, the lead time ranges from 10 to 20 days depending on design complexity and stone availability. We advise scheduling custom orders during the early plastering phase of your project.",
    category: "services"
  }
];
