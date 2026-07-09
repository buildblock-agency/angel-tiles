export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  gallery: string[];
  features: string[];
  materials: string[];
  applications: string[];
  seoTitle: string;
  seoDescription: string;
}

export const products: Product[] = [
  {
    id: "designer-tiles",
    slug: "designer-tiles",
    name: "Luxury Designer Tiles",
    tagline: "Large-Format Vitrified, Ceramic & Porcelain Masterpieces",
    description: "Discover a curated palette of elegant patterns, sizes, and high-end textures. Jodhpur's leading showroom for premium designer wall & floor tiles, featuring imported large-format GVT (Glazed Vitrified Tiles), durable porcelain slabs, mosaic highlights, and luxury bathroom wall concepts. These tiles mimic natural marble veins, concrete finishes, and wood grains with absolute precision, offering modern ease of maintenance and exceptional durability.",
    image: "/images/designer-tiles.png",
    gallery: [
      "/images/designer-tiles.png",
      "/images/italian-marble.png",
      "/images/black-granite.png"
    ],
    features: [
      "Water-resistant and highly stain-proof surfaces for luxury living",
      "Large-format sizes (800x1600mm, 1200x2400mm) for seamless looks",
      "Scratch-resistant glaze protecting artistic patterns and finishes",
      "Anti-skid high-performance finishes for bathrooms, kitchens, and patios"
    ],
    materials: [
      "Double Charge Vitrified Tiles",
      "Glazed Vitrified Tiles (GVT)",
      "Polished Vitrified Tiles (PVT)",
      "High-Definition Digital Ceramic Wall Tiles",
      "Handcrafted Mosaic Highlights",
      "Exotic Terracotta/Moroccan Tiles"
    ],
    applications: [
      "Modern Apartment Living Area Floors",
      "Kitchen & Bathroom Wall Cladding",
      "Balcony & Terrace Flooring",
      "Commercial Showrooms & Premium Offices",
      "Swimming Pool Waterlines"
    ],
    seoTitle: "Luxury Designer Vitrified & Ceramic Tiles Showroom in Jodhpur",
    seoDescription: "Explore 1000+ designer tiles, large-format vitrified tiles, and luxury bathroom tiles at Angel Tiles Showroom Jodhpur. Top brands available."
  },
  {
    id: "customized-tiles",
    slug: "customized-tiles",
    name: "Bespoke Customized Tiles",
    tagline: "Personalized Patterns, Laser Engravings & Custom Cuts Tailored to Your Design",
    description: "Transform standard tiles into personalized architectural statements. Our state-of-the-art tile customization division provides precision laser-etched patterns, customized size cuts, bespoke modular grids, and artistic mosaic murals. Working directly with leading architects, we bring custom patterns and logo integration to life for unique kitchen backsplashes, designer bathroom feature walls, and luxury commercial spaces.",
    image: "/images/designer-tiles.png",
    gallery: [
      "/images/designer-tiles.png",
      "/images/italian-marble.png"
    ],
    features: [
      "High-precision laser etching for personalized motifs & patterns",
      "Custom size calibration and professional edge-profiling",
      "Bespoke waterjet curved tile carving and artistic murals",
      "Tailored color palettes to coordinate with your home decor"
    ],
    materials: [
      "Custom Laser-Engraved Tiles",
      "Bespoke Mosaic Accent Walls",
      "Waterjet Curved Tile Inlays",
      "Precision-Cut Tile & Slab Plinths"
    ],
    applications: [
      "Luxury Kitchen Backsplashes",
      "Bespoke Bathroom Feature Walls",
      "Custom Logo Tile Panels",
      "Decorative Fireplace Cladding",
      "Grand Entry Foyer Accents"
    ],
    seoTitle: "Customized Designer Tiles Manufacturer in Jodhpur | Angel Tiles",
    seoDescription: "Create bespoke tiles with custom sizes, laser engraving, and custom patterns at Angel Tiles Jodhpur. Tailored luxury wall & floor tiles."
  },
  {
    id: "marble",
    slug: "marble",
    name: "Premium Marble Collection",
    tagline: "Opulent Italian and Imported Marbles for Timeless Spaces",
    description: "While we are Jodhpur's premier studio for high-end tiles, we also house a highly curated selection of premium imported and Indian marbles. From the classic elegance of white Italian Carrara and Statuario to bold quartzite selections, our marble collection represents an option for elegant flooring, high-end highlight walls, and master bath claddings for clients seeking natural stone elements.",
    image: "/images/italian-marble.png",
    gallery: [
      "/images/italian-marble.png",
      "/images/black-granite.png",
      "/images/designer-tiles.png"
    ],
    features: [
      "Imported directly from Italian, Turkish, and Greek quarries",
      "High luster polishing and premium mirror finishes",
      "Resistant to scratching and heat when sealed properly",
      "Unique natural veining ensuring no two slabs are ever identical"
    ],
    materials: [
      "Statuario White (Italian)",
      "Carrara White (Italian)",
      "Calacatta Gold (Italian)",
      "Botticino Cream (Italian)",
      "Rosso Alicante (Spanish)",
      "Makrana Pure White (Indian)",
      "Green Marble (Indian)"
    ],
    applications: [
      "Luxury Villa Flooring",
      "Accent Walls & Lobby Cladding",
      "Grand Staircase Treads",
      "Custom Fireplace Surrounds",
      "Master Bathroom Vanity Tops"
    ],
    seoTitle: "Imported & Italian Marble Showroom in Jodhpur | Angel Tiles & Stone",
    seoDescription: "Browse premium Italian marble, Statuario, Carrara, and Indian marble at Angel Tiles & Stone Jodhpur. Luxury flooring slabs at wholesale prices."
  },
  {
    id: "customized-marble",
    slug: "customized-marble",
    name: "Customized Marble Solutions",
    tagline: "CNC Waterjet Inlays, Stone Carvings & Architectural Claddings",
    description: "Turn your unique design visions into solid stone realities. Our state-of-the-art customized marble division specializes in computerized CNC cutting, waterjet luxury inlays, 3D textured wall panels, and traditional hand carvings. We collaborate directly with architects and interior designers to build bespoke flooring medallions and screen panels.",
    image: "/images/italian-marble.png",
    gallery: [
      "/images/italian-marble.png",
      "/images/designer-tiles.png"
    ],
    features: [
      "Precision computerized waterjet cutting (0.1mm tolerance)",
      "Traditional Rajasthani stone craft combined with Italian machinery",
      "Customizable patterns, shapes, sizes, and stone combinations",
      "Complete assembly mapping and layout guidance for onsite installers"
    ],
    materials: [
      "Bespoke Floor Medallions",
      "3D CNC Textured Stone Panels",
      "Marble Jali & Partition Screens",
      "Inlaid Borders and Treads",
      "Custom Carved Stone Columns"
    ],
    applications: [
      "Hotel Lobby & Reception Medallions",
      "Luxury Villa Foyer Entryways",
      "Temple/Mandir Backdrop Cladding",
      "Feature Partition Screen walls",
      "Custom Corporate Logo Inlays"
    ],
    seoTitle: "Custom CNC Marble Inlay & Stone Jali in Jodhpur | Angel Stone",
    seoDescription: "Bespoke marble inlay designs, waterjet flooring medallions, and CNC stone wall panels customized for your villa or hotel in Jodhpur."
  },
  {
    id: "granite",
    slug: "granite",
    name: "Natural Stone — Granite",
    tagline: "Ultra-Durable Natural Granite Slabs for Heavy-Duty Elegance",
    description: "Unmatched in strength and character, our natural granite collection offers the ideal combination of functional durability and natural beauty. Sourced from the finest quarries in Rajasthan and across the globe, these dense stones are perfect for kitchen countertops, outdoor stairs, high-traffic commercial flooring, and premium vanity configurations.",
    image: "/images/black-granite.png",
    gallery: [
      "/images/black-granite.png",
      "/images/italian-marble.png",
      "/images/designer-tiles.png"
    ],
    features: [
      "Extreme heat, scratch, and stain resistance",
      "Low maintenance with exceptional life-span",
      "Polished, honed, flamed, and leathered finishes available",
      "Ideal for both heavy indoor use and harsh outdoor weather"
    ],
    materials: [
      "Absolute Black Granite (Indian)",
      "Black Galaxy (Indian)",
      "Imperial Red (Indian)",
      "Tan Brown (Indian)",
      "Alaskan White (Imported)",
      "Blue Pearl (Imported Norway)"
    ],
    applications: [
      "Kitchen Countertops & Backsplashes",
      "High-Traffic Commercial Flooring",
      "Outdoor Step Treads & Risers",
      "Patio Cladding & Landscaping",
      "Dining Table Tops & Bar Counters"
    ],
    seoTitle: "Premium Granite Countertops & Slabs in Jodhpur | Angel Stone Studio",
    seoDescription: "Source premium black granite, white granite, and imported granite slabs in Jodhpur. Best prices on kitchen countertops and heavy-duty tiles."
  },
  {
    id: "natural-stone",
    slug: "natural-stone",
    name: "Natural Stone Collection",
    tagline: "Sandstone, Kota, Slate & Quartzite for Organic Aesthetics",
    description: "Bring the raw, rustic charm of nature into your designs. Our natural stone collection features high-quality Sandstone, classic Kota stone, textured Slate, and shimmering Quartzite. Sourced locally from Rajasthan's rich geological belts, these stones offer slip-resistant texture and grounding earthy hues, perfect for courtyard pavings, garden pathways, and feature dry claddings.",
    image: "/images/italian-marble.png",
    gallery: [
      "/images/italian-marble.png",
      "/images/black-granite.png"
    ],
    features: [
      "Naturally slip-resistant rough and textured finishes",
      "Earthy tones including beige, copper, grey, and ochre",
      "Extremely robust under harsh sunlight and heavy rain",
      "Eco-friendly, natural building material with high thermal mass"
    ],
    materials: [
      "Jodhpur Sandstone (Teak & Rainbow)",
      "Semi-polished Kota Stone",
      "Silver Grey Quartzite",
      "Deoli Green Slate",
      "Jeera Green Slate"
    ],
    applications: [
      "Courtyard & Driveway Paving",
      "Garden Pathway Pathways",
      "Exterior Feature Wall Dry Cladding",
      "Swimming Pool Decks",
      "Traditional Rajasthani Jali carvings"
    ],
    seoTitle: "Jodhpur Sandstone, Kota Stone & Slate Supplier | Jodhpur",
    seoDescription: "Jodhpur's leading dealer of local teak sandstone, rainbow sandstone, premium Kota stone, and slate panels. Direct quarry rates."
  },
  {
    id: "sanitaryware",
    slug: "sanitaryware",
    name: "Sanitaryware & Bath Collection",
    tagline: "Premium Closets, Washbasins, and Designer Bathroom Fittings",
    description: "Complete your wellness sanctuaries with our ultra-premium bath fittings and sanitaryware. Featuring international aesthetics, smart functionalities, and eco-friendly water-saving flushes, our collection includes single-piece closets, tabletop stone washbasins, concealed diverters, and premium rose-gold/chrome showers that transform everyday routines into spa rituals.",
    image: "/images/designer-tiles.png",
    gallery: [
      "/images/designer-tiles.png",
      "/images/italian-marble.png"
    ],
    features: [
      "Water-saving flushing mechanisms (dual flush 3L/6L)",
      "Stain-resistant, easy-to-clean ceramic glaze with anti-microbial properties",
      "Designer finishes: Matte Black, Rose Gold, Brush Bronze, Chrome",
      "Ergonomically designed seat covers with soft-close hinges"
    ],
    materials: [
      "One-Piece Vitreous China Water Closets",
      "Smart Intelligent Wall-Hung Toilets",
      "Natural Stone Wash Basins (Granite/Marble)",
      "Luxury Tabletop Ceramic Basins",
      "Thermostatic Bath & Shower Diverters",
      "Sleek LED Touch-Sensor Mirror Systems"
    ],
    applications: [
      "Luxury Master Bathrooms",
      "Hotel Suites & Resort Restrooms",
      "Elegant Guest Powder Rooms",
      "Modern Office Washrooms",
      "Spa & Wellness Centers"
    ],
    seoTitle: "Luxury Sanitaryware, Closets & Washbasin Dealer in Jodhpur",
    seoDescription: "Shop premium sanitaryware, smart closets, tabletop washbasins, and designer bath fittings in Jodhpur. Luxury brands showroom."
  }
];
