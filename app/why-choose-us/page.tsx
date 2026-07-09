"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Award, BadgeCheck, Eye, Sparkles, Scale } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function WhyChooseUsPage() {
  const promises = [
    {
      icon: <BadgeCheck className="w-8 h-8 text-gold-400" />,
      title: "Direct Importing (No Middlemen)",
      desc: "We import container-lots of marbles directly from Quarries in Carrara (Italy) and Turkey. This eliminates standard broker commissions, allowing us to pass the savings straight to your billing sheets.",
    },
    {
      icon: <Eye className="w-8 h-8 text-gold-400" />,
      title: "Showroom Dry-Lay & Inspection",
      desc: "Never buy blind. We dry-lay your selected marble slabs at our Jodhpur stockyard. You can inspect the pattern, vein flow, and surface shine prior to shipping, ensuring complete satisfaction.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-gold-400" />,
      title: "Premium Local Sandstones",
      desc: "We source local Teak Sandstone, Rainbow Sandstone, and Kota stone blocks directly from Rajasthan's prime geological belts. This ensures authentic texture and durability suited for the local Jodhpur heat.",
    },
    {
      icon: <Scale className="w-8 h-8 text-gold-400" />,
      title: "Thickness & Size Consistency",
      desc: "Standard showrooms mix thicknesses to save costs. We offer strictly calibrated 16mm, 18mm, and 20mm thicknesses with uniform calibers, preventing lips during installation.",
    },
    {
      icon: <Award className="w-8 h-8 text-gold-400" />,
      title: "Intricate Custom CNC Carving",
      desc: "Our computerized multi-axis waterjet cutting systems create elaborate foyer medallions, wall panels, and traditional screens (jalis), all assembled by skilled local stone artists.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-charcoal-950 text-foreground font-sans">
      <Header />

      {/* Header Banner */}
      <section className="relative pt-32 pb-20 bg-charcoal-900 border-b border-charcoal-800">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="/images/designer-tiles.png"
            alt="Promises background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
            Our Brand Promises
          </h1>
          <p className="text-sm text-gold-400 uppercase tracking-widest font-semibold">
            Standard guidelines that define our stone sourcing and client transactions
          </p>
        </div>
      </section>

      {/* Detail list */}
      <section className="py-24 bg-charcoal-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-xs uppercase tracking-widest font-bold text-gold-400">
              The Angel Differentiators
            </h2>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Slab Quality is Not Coincidence
            </h3>
            <p className="text-sm text-charcoal-400 leading-relaxed font-light">
              We operate with strict sourcing guidelines to guarantee that your natural stone or designer tile installation stands stable and retains its luster for decades.
            </p>
          </div>

          <div className="space-y-8">
            {promises.map((p, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-charcoal-900 border border-charcoal-800 flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="p-3.5 rounded-2xl bg-gold-400/10 border border-gold-400/25 text-gold-400 shrink-0">
                  {p.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="font-serif text-xl font-bold text-white tracking-wide">
                    {p.title}
                  </h4>
                  <p className="text-xs text-charcoal-350 leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-charcoal-900 border-t border-charcoal-800 text-center space-y-6">
        <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
          Ready to Experience Slabs Sourcing Differently?
        </h3>
        <p className="text-xs text-charcoal-400 max-w-md mx-auto">
          Visit our showroom at Bhadu Market, Jodhpur, to inspect standing blocks or schedule an online video consultation.
        </p>
        <Link
          href="/contact-us"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-bold text-xs tracking-widest hover:bg-primary-hover transition-colors"
        >
          CONNECT WITH A CONSULTANT <ChevronRight className="w-4 h-4" />
        </Link>
      </section>

      <Footer />
    </div>
  );
}
