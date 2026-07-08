export interface Project {
  title: string;
  slug: string;
  category: string;
  location: string;
  year: string;
  description: string;
  challenge: string;
  solution: string;
  materials: string[];
  image: string;
  gallery: string[];
  seoTitle: string;
  seoDescription: string;
}

export const projects: Project[] = [
  {
    title: "Luxury Villa in Shastri Nagar",
    slug: "luxury-villa-shastri-nagar",
    category: "Residential",
    location: "Shastri Nagar, Jodhpur",
    year: "2025",
    description: "A grand 6-bedroom architectural marvel designed with a focus on seamless layouts and natural lighting. The client wanted a high-end, bright, and polished floor surface that would make the spaces look large and regal.",
    challenge: "Finding marble blocks of uniform white background with consistent book-match grey veins across a 4,500 sq ft drawing-cum-dining hall without any natural cracks or yellow stains.",
    solution: "Sourced a single premium lot of Calacatta Gold Italian Marble. Our experts laid out the entire floor slab-by-slab at our stockyard to check the vein alignment and book-match layouts prior to onsite shipping and cutting.",
    materials: [
      "Calacatta Gold Italian Marble (Lobby & Drawing Room)",
      "Crema Marfil (Bedrooms)",
      "Custom CNC Waterjet Foyer Medallion"
    ],
    image: "/images/italian-marble.png",
    gallery: [
      "/images/italian-marble.png",
      "/images/designer-tiles.png"
    ],
    seoTitle: "Luxury Villa Marble Flooring Jodhpur | Shastri Nagar Project",
    seoDescription: "Case study of a premium residential villa in Shastri Nagar Jodhpur featuring book-matched Calacatta Gold Italian marble flooring by Angel Tiles."
  },
  {
    title: "Modern Penthouse Kitchen & Bar",
    slug: "modern-penthouse-kitchen-bar",
    category: "Residential",
    location: "Sardarpura, Jodhpur",
    year: "2025",
    description: "An open-layout penthouse design focusing on contrast and heavy utility. The kitchen countertops and a matching entertainment bar top required highly durable, low-porosity surfaces that stand out as focal points.",
    challenge: "Ensuring high stain and scratch resistance for a heavily used open kitchen while maintaining a deep black monolithic slab look with zero visible seams.",
    solution: "Supplied and custom-installed Absolute Black Leather-finished Granite for the kitchen countertops and imported Blue Pearl Granite for the entertainment bar, providing a shimmering metallic look under pendant lights.",
    materials: [
      "Absolute Black Leathered Granite (Main Countertop)",
      "Blue Pearl Granite (Norway) (Bar Countertop)",
      "Glazed Subway Tiles (Backsplash)"
    ],
    image: "/images/black-granite.png",
    gallery: [
      "/images/black-granite.png",
      "/images/italian-marble.png"
    ],
    seoTitle: "Black Granite Kitchen Countertops Jodhpur | Sardarpura Penthouse",
    seoDescription: "Explore how we installed seamless Absolute Black and Blue Pearl granite countertops in a premium Sardarpura penthouse. High-end granite dealer."
  },
  {
    title: "Boutique Heritage Resort Courtyard",
    slug: "heritage-resort-courtyard",
    category: "Commercial",
    location: "Shankar Nagar, Jodhpur",
    year: "2024",
    description: "Restoration of a courtyard inside a boutique heritage hotel. The architect wanted an authentic, locally sourced material that would stand up to heavy foot traffic, high temperatures, and align with traditional Jodhpur stone architecture.",
    challenge: "Providing slip-resistant, non-glaring flooring slabs that naturally cool the courtyard during Jodhpur's scorching summer months.",
    solution: "Installed natural hand-chiseled Jodhpur Teak Sandstone slabs combined with borders of semi-polished Kota Stone. The natural properties of sandstone provide excellent thermal insulation and traction.",
    materials: [
      "Jodhpur Teak Sandstone (Hand-dressed)",
      "Semi-polished Green Kota Stone (Borders)",
      "Custom Carved Sandstone Jalis (Screen Walls)"
    ],
    image: "/images/italian-marble.png",
    gallery: [
      "/images/italian-marble.png",
      "/images/black-granite.png"
    ],
    seoTitle: "Jodhpur Sandstone Courtyard Paving | Shankar Nagar Hotel Project",
    seoDescription: "Traditional Jodhpur Teak Sandstone paving and custom carved stone jalis at a boutique heritage hotel. Premium local stone supply."
  },
  {
    title: "Vivid Showroom Display Floors",
    slug: "vivid-showroom-display-floors",
    category: "Commercial",
    location: "Industrial Area, Jodhpur",
    year: "2026",
    description: "A retail clothing showroom requiring high-sheen, ultra-modern floors that handle hundreds of footfalls daily without losing their luster or accumulating dirt.",
    challenge: "Marble was ruled out due to acid cleaning concerns in a commercial setup. The client needed a tile solution that mimics marble seamlessness with high scratch resistance.",
    solution: "Supplied 1200x2400mm Large-Format Glazed Vitrified Tiles (GVT) with a satin gloss finish. The rectified edges allowed minimal 1mm grout lines, creating a unified slab-like look.",
    materials: [
      "Satin Finish Glazed Vitrified Tiles (1200x2400mm)",
      "Epoxy Grout systems for stain-free joins",
      "High-Traffic Commercial thresholds"
    ],
    image: "/images/designer-tiles.png",
    gallery: [
      "/images/designer-tiles.png",
      "/images/black-granite.png"
    ],
    seoTitle: "Large Format Showroom Tile Installation | Jodhpur",
    seoDescription: "Case study on commercial flooring using 1200x2400mm large-format vitrified tiles for a luxury clothing retail showroom in Jodhpur."
  }
];
