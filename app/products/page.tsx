"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Info } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/content/products";

export default function ProductsHub() {
  return (
    <div className="flex flex-col min-h-screen bg-charcoal-950 text-foreground font-sans">
      <Header />

      {/* Header Banner */}
      <section className="relative pt-32 pb-20 bg-charcoal-900 border-b border-charcoal-800">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="/images/designer-tiles.png"
            alt="Products background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
            Our Material Collections
          </h1>
          <p className="text-sm text-gold-400 uppercase tracking-widest font-semibold">
            Handpicked imported marbles, natural granites, local sandstones, and designer tiles
          </p>
        </div>
      </section>

      {/* Products Hub Grid */}
      <section className="py-24 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs uppercase tracking-widest font-bold text-gold-400">
              Showroom Catalog
            </h2>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Explore by Material Category
            </h3>
            <p className="text-sm text-charcoal-400 leading-relaxed font-light">
              Each product category is backed by complete technical details, quarry certifications, and size options, engineered to meet commercial and residential blueprints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.slug}
                className="group flex flex-col justify-between bg-charcoal-900 border border-charcoal-800 rounded-3xl overflow-hidden hover:border-gold-400/30 transition-all duration-300 shadow-lg hover:shadow-black/40"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-transparent" />
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                  <div className="space-y-4">
                    <h4 className="font-serif text-xl font-bold text-white group-hover:text-gold-400 transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-xs text-charcoal-400 leading-relaxed line-clamp-3">
                      {product.description}
                    </p>

                    {/* Quick Specs */}
                    <div className="space-y-1.5 pt-2">
                      <span className="text-[10px] uppercase tracking-widest text-charcoal-500 font-bold block">
                        Popular Varieties:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.materials.slice(0, 3).map((item, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] bg-charcoal-950 border border-charcoal-800 text-charcoal-300 px-2 py-0.5 rounded"
                          >
                            {item.split(" (")[0]}
                          </span>
                        ))}
                        {product.materials.length > 3 && (
                          <span className="text-[10px] text-charcoal-500 font-semibold self-center">
                            +{product.materials.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-charcoal-800 mt-6 flex items-center justify-between">
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-gold-400 group-hover:text-white uppercase transition-colors"
                    >
                      EXPLORE FULL RANGE <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory block */}
      <section className="py-16 bg-charcoal-900 border-t border-charcoal-800">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="inline-flex p-3 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-400 mx-auto">
            <Info className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide">
            Looking for a Particular Slabs Block?
          </h3>
          <p className="text-xs text-charcoal-400 max-w-lg mx-auto leading-relaxed">
            Stones are natural geological formations; patterns and shade colors fluctuate from block to block. If you have a specific pattern, thickness, or finish in mind, our showroom managers can share live quarry photos or reserve standing blocks for your review.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gold-400 hover:bg-gold-500 text-black font-bold text-xs tracking-widest transition-colors"
          >
            REQUEST LIVE STOCK PHOTOS
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
