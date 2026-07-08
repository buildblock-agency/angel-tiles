"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface GalleryItem {
  id: string;
  title: string;
  category: "marble" | "granite" | "tiles" | "sanitaryware";
  image: string;
  location: string;
}

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "gal-1",
      title: "Calacatta Gold Bookmatch Floor",
      category: "marble",
      image: "/images/italian-marble.png",
      location: "Foyer Inlay, शास्त्री नगर",
    },
    {
      id: "gal-2",
      title: "Absolute Black Kitchen Counter",
      category: "granite",
      image: "/images/black-granite.png",
      location: "Penthouse Kitchen, सरदारपुरा",
    },
    {
      id: "gal-3",
      title: "Satin Finish 1200x2400mm GVT",
      category: "tiles",
      image: "/images/designer-tiles.png",
      location: "Showroom Floor, शास्त्री नगर",
    },
    {
      id: "gal-4",
      title: "Statuario Gold High Luster Slab",
      category: "marble",
      image: "/images/italian-marble.png",
      location: "Showroom display block",
    },
    {
      id: "gal-5",
      title: "Blue Pearl Norway Bar Top",
      category: "granite",
      image: "/images/black-granite.png",
      location: "Lounge Bar top, सरदारपुरा",
    },
    {
      id: "gal-6",
      title: "Digital Porcelain Concept Wall",
      category: "tiles",
      image: "/images/designer-tiles.png",
      location: "Luxury Bath Setup, Shankar Nagar",
    },
  ];

  const filteredItems =
    filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter);

  return (
    <div className="flex flex-col min-h-screen bg-charcoal-950 text-foreground font-sans">
      <Header />

      {/* Header Banner */}
      <section className="relative pt-32 pb-20 bg-charcoal-900 border-b border-charcoal-800">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="/images/italian-marble.png"
            alt="Gallery background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
            Project Gallery
          </h1>
          <p className="text-sm text-gold-400 uppercase tracking-widest font-semibold">
            Visual catalog of completed installations and stock slabs
          </p>
        </div>
      </section>

      {/* Gallery Filter & Grid */}
      <section className="py-20 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Filters Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setFilter("all")}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                filter === "all"
                  ? "bg-gold-400 text-black font-bold"
                  : "bg-charcoal-900 text-charcoal-350 hover:bg-charcoal-850 hover:text-white"
              }`}
            >
              ALL MEDIA
            </button>
            <button
              onClick={() => setFilter("marble")}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                filter === "marble"
                  ? "bg-gold-400 text-black font-bold"
                  : "bg-charcoal-900 text-charcoal-350 hover:bg-charcoal-850 hover:text-white"
              }`}
            >
              ITALIAN MARBLE
            </button>
            <button
              onClick={() => setFilter("granite")}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                filter === "granite"
                  ? "bg-gold-400 text-black font-bold"
                  : "bg-charcoal-900 text-charcoal-350 hover:bg-charcoal-850 hover:text-white"
              }`}
            >
              NATURAL GRANITE
            </button>
            <button
              onClick={() => setFilter("tiles")}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                filter === "tiles"
                  ? "bg-gold-400 text-black font-bold"
                  : "bg-charcoal-900 text-charcoal-350 hover:bg-charcoal-850 hover:text-white"
              }`}
            >
              DESIGNER TILES
            </button>
            <button
              onClick={() => setFilter("sanitaryware")}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                filter === "sanitaryware"
                  ? "bg-gold-400 text-black font-bold"
                  : "bg-charcoal-900 text-charcoal-350 hover:bg-charcoal-850 hover:text-white"
              }`}
            >
              BATH & SANITARY
            </button>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative rounded-2xl bg-charcoal-900 border border-charcoal-850 overflow-hidden cursor-pointer shadow-lg hover:border-gold-400/20 hover:shadow-black/40 transition-all duration-300"
              >
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent opacity-60" />

                  {/* Zoom Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-gold-400/90 flex items-center justify-center text-black shadow-lg">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="p-5 space-y-1">
                  <span className="text-[9px] uppercase tracking-widest text-gold-400 font-bold">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-base font-bold text-white group-hover:text-gold-400 transition-colors truncate">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-charcoal-450 truncate">📍 {item.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20 border border-dashed border-charcoal-800 rounded-2xl">
              <p className="text-sm text-charcoal-400">
                No items are currently uploaded in this category. Slabs coming soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal Overlay */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-charcoal-400 hover:text-white p-2 rounded-full bg-charcoal-900 border border-charcoal-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full h-[60vh] sm:h-[70vh] relative rounded-2xl overflow-hidden border border-charcoal-800">
            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              fill
              className="object-contain"
            />
          </div>

          <div className="mt-6 text-center space-y-1 max-w-md">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-bold">
              {selectedImage.category}
            </span>
            <h3 className="font-serif text-xl font-bold text-white tracking-wide">
              {selectedImage.title}
            </h3>
            <p className="text-xs text-charcoal-400">📍 Location: {selectedImage.location}</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
