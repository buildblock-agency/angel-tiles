import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import { siteSettings, brandsList } from "@/content/site-settings";
import { products } from "@/content/products";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // JSON-LD LocalBusiness Schema Markup
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeGoodsStore",
    "name": siteSettings.companyName,
    "image": "https://angeltilesandstone.com/images/italian-marble.png",
    "@id": "https://angeltilesandstone.com/#localbusiness",
    "url": "https://angeltilesandstone.com",
    "telephone": siteSettings.phone[0],
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteSettings.address.street,
      "addressLocality": siteSettings.address.city,
      "addressRegion": siteSettings.address.state,
      "postalCode": siteSettings.address.pincode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.3061214,
      "longitude": 73.0425667
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:30",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "11:00",
        "closes": "17:00"
      }
    ]
  };

  return (
    <footer className="bg-charcoal-950 border-t border-charcoal-900 pt-16 pb-8 text-charcoal-300">
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Column 1: Brand & NAP */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-md border border-charcoal-850 group-hover:border-primary transition-colors">
                <Image
                  src="/logo.png"
                  alt="Angel Tiles & Stone Studio Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-wider text-primary group-hover:text-primary-hover transition-colors leading-none">
                  ANGEL TILES
                </span>
                <span className="text-[9px] font-sans tracking-[0.25em] text-gold-400 group-hover:text-gold-300 transition-colors mt-0.5 leading-none">
                  & STONE STUDIO
                </span>
              </div>
            </Link>
            <p className="text-sm text-charcoal-400 font-sans leading-relaxed">
              Jodhpur&apos;s premier showroom for luxury imported marbles, exotic granites, designer wall and floor tiles, customized CNC carvings, and elegant bath collections.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <a
                  href={siteSettings.googleMapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors"
                >
                  {siteSettings.address.formatted}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <div className="flex flex-col">
                  {siteSettings.phone.map((num) => (
                    <a
                      key={num}
                      href={`tel:${num.replace(/\s+/g, "")}`}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {num}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a
                  href={`mailto:${siteSettings.email}`}
                  className="text-sm hover:text-white transition-colors"
                >
                  {siteSettings.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Product Categories */}
          <div>
            <h3 className="text-white font-serif text-base font-semibold tracking-wider mb-6">
              Our Collections
            </h3>
            <ul className="space-y-3 text-sm">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="hover:text-gold-400 transition-colors"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h3 className="text-white font-serif text-base font-semibold tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about-us" className="hover:text-gold-400 transition-colors">
                  About Brand Story
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold-400 transition-colors">
                  Filterable Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-gold-400 transition-colors">
                  Case Studies / Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gold-400 transition-colors">
                  SEO Articles & Guides
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gold-400 transition-colors">
                  Frequently Asked Qs
                </Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="hover:text-gold-400 transition-colors">
                  Our Brand Promises
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-gold-400 transition-colors">
                  Get a Showroom Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours & Brands */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-serif text-base font-semibold tracking-wider mb-4">
                Showroom Hours
              </h3>
              <div className="space-y-2 text-sm text-charcoal-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>{siteSettings.businessHours.weekdays}</span>
                </div>
                <div className="flex items-center gap-2 pl-6">
                  <span>{siteSettings.businessHours.sundays}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-serif text-base font-semibold tracking-wider mb-3">
                Authorized Showroom Brands
              </h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {brandsList.map((brand) => (
                  <span
                    key={brand}
                    className="text-[10px] uppercase font-bold tracking-widest bg-charcoal-900 border border-charcoal-800 text-charcoal-400 px-2 py-1 rounded"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Base */}
        <div className="border-t border-charcoal-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-charcoal-500">
            <ShieldCheck className="w-4 h-4 text-gold-500" />
            <span>
              Developed by{" "}
              <a
                href="https://buildblock.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors underline font-medium"
              >
                buildblock
              </a>
            </span>
          </div>

          <p className="text-xs text-charcoal-500 text-center md:text-right">
            &copy; {currentYear} {siteSettings.companyName}. All Rights Reserved. Slabs and materials subject to quarry availability.
          </p>
        </div>
      </div>
    </footer>
  );
}
