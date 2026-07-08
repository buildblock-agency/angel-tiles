"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/content/blog";

export default function BlogHub() {
  return (
    <div className="flex flex-col min-h-screen bg-charcoal-950 text-foreground font-sans">
      <Header />

      {/* Header Banner */}
      <section className="relative pt-32 pb-20 bg-charcoal-900 border-b border-charcoal-800">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="/images/italian-marble.png"
            alt="Blog background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
            Stonework & Design Blog
          </h1>
          <p className="text-sm text-gold-400 uppercase tracking-widest font-semibold">
            Guides on marble selection, tile laying layouts, and home cooling stones
          </p>
        </div>
      </section>

      {/* Articles list */}
      <section className="py-24 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs uppercase tracking-widest font-bold text-gold-400">
              Stone Insights
            </h2>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Guides, Tips & Sourcing Advice
            </h3>
            <p className="text-sm text-charcoal-400 leading-relaxed font-light">
              Compounding our architectural expertise into simple reading guides to help you make informed decisions when sourcing materials in Jodhpur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.slug}
                className="group flex flex-col justify-between bg-charcoal-900 border border-charcoal-800 rounded-3xl overflow-hidden hover:border-gold-400/25 transition-all duration-300 shadow-lg"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/30 to-transparent" />
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div className="space-y-4">
                    {/* Tags & Meta */}
                    <div className="flex flex-wrap gap-2 items-center justify-between text-[10px] text-charcoal-450 font-semibold">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                        <span>{post.publishDate}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h4 className="font-serif text-lg font-bold text-white group-hover:text-gold-400 transition-colors line-clamp-2 leading-relaxed">
                      {post.title}
                    </h4>

                    <p className="text-xs text-charcoal-400 leading-relaxed font-light line-clamp-3">
                      {post.summary}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-charcoal-800 mt-6 flex justify-end">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-gold-400 group-hover:text-white uppercase transition-colors"
                    >
                      READ ARTICLE <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
