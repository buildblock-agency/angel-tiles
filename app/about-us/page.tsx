"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Award, Users, Compass, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutUs() {
  const milestones = [
    { year: "2011", title: "Showroom Inception", desc: "Started as a small tiles trading shop at Shankar Nagar, Jodhpur." },
    { year: "2016", title: "Quarry Partnerships", desc: "Established direct tie-ups with Italian & Turkish quarries to import marble." },
    { year: "2020", title: "CNC Machinery Integration", desc: "Installed state-of-the-art computer cutting machines for stone customization." },
    { year: "2025", title: "Showroom Expansion", desc: "Expanded showroom to 5000+ sq ft featuring bath and sanitary mock setups." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-charcoal-950 text-foreground font-sans">
      <Header />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-charcoal-900 border-b border-charcoal-800">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="/images/italian-marble.png"
            alt="Marble Texture Banner"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
            Our Brand Story
          </h1>
          <p className="text-sm text-gold-400 uppercase tracking-widest font-semibold mt-3">
            Crafting Luxury Spaces in the Sun City since 2011
          </p>
        </div>
      </section>

      {/* Story Details */}
      <section className="py-20 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Story Text */}
            <div className="space-y-6">
              <h2 className="text-xs uppercase tracking-widest font-bold text-gold-400">
                Heritage and Roots
              </h2>
              <h3 className="font-serif text-3xl font-bold text-white tracking-wide leading-tight">
                From Local Roots to a Premium Luxury Stonework Studio
              </h3>
              <p className="text-sm text-charcoal-300 leading-relaxed font-light">
                Angel Tiles & Stone Studio was founded in Jodhpur, Rajasthan, with a single vision: to elevate local space design by introducing direct access to premium tiles, natural stones, and sanitaryware. Sourcing materials has traditionally been fragmented, and homeowners often had to compromise on vein matching or tile caliber consistency.
              </p>
              <p className="text-sm text-charcoal-300 leading-relaxed font-light">
                Today, we operate a 5,000+ square foot luxury showroom at Shankar Nagar, housing one of the region&apos;s largest standing lots of Italian marbles, high-density natural granites, and large-format vitrified porcelain tiles. By bypassing brokers and importing directly, we offer designer materials at competitive wholesale prices.
              </p>

              {/* USP Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-charcoal-200">100% Client-aligned NAP data</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-charcoal-200">Verified quarry origin certificates</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-charcoal-200">Dry-laying vein matching service</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-charcoal-200">State-wide delivery logs</span>
                </div>
              </div>
            </div>

            {/* Visual Box */}
            <div className="relative h-96 lg:h-[450px] rounded-3xl overflow-hidden border border-charcoal-800">
              <Image
                src="/images/black-granite.png"
                alt="Luxury Showroom Mockup"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-charcoal-900/90 border border-charcoal-800 backdrop-blur-sm">
                <div className="font-serif text-base font-bold text-white">Our Jodhpur Showroom</div>
                <p className="text-[11px] text-charcoal-400 mt-1 leading-relaxed">
                  Located at Pipli Chouraha, Bhadu Market. Drop by to examine physical marble blocks, slab lines, and bath fittings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 bg-charcoal-900 border-y border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs uppercase tracking-widest font-bold text-gold-400">
              Core Principles
            </h2>
            <h3 className="font-serif text-3xl font-bold text-white tracking-wide">
              The Three Pillars of Our Studio
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-charcoal-950 border border-charcoal-800 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-gold-400/10 border border-gold-400/20 flex items-center justify-center mx-auto text-gold-400">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-white">Quarry Direct Sourcing</h4>
              <p className="text-xs text-charcoal-400 leading-relaxed">
                By maintaining direct relations with international quarries, we choose only structurally stable stone blocks with the most appealing patterns, ensuring they hold standard polish.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-charcoal-950 border border-charcoal-800 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-gold-400/10 border border-gold-400/20 flex items-center justify-center mx-auto text-gold-400">
                <Compass className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-white">Technological Precision</h4>
              <p className="text-xs text-charcoal-400 leading-relaxed">
                Using advanced multi-axis CNC routers and digital CAD layouts, we build customized screens, medallions, and stairs that assemble seamlessly at your site.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-charcoal-950 border border-charcoal-800 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-gold-400/10 border border-gold-400/20 flex items-center justify-center mx-auto text-gold-400">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-white">Architect Partnership</h4>
              <p className="text-xs text-charcoal-400 leading-relaxed">
                We act as technical stone consultants to architects, providing thickness adjustments, material absorption indexes, and dry-matching yards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs uppercase tracking-widest font-bold text-gold-400">
              Chronological Path
            </h2>
            <h3 className="font-serif text-3xl font-bold text-white tracking-wide">
              Showroom Milestones
            </h3>
          </div>

          <div className="relative border-l border-charcoal-800 max-w-3xl mx-auto pl-6 sm:pl-10 space-y-12">
            {milestones.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-charcoal-950 border-2 border-gold-400 group-hover:bg-gold-400 transition-colors duration-300" />
                <div className="space-y-2">
                  <span className="font-serif text-xl font-bold text-gold-400">{item.year}</span>
                  <h4 className="font-serif text-lg font-semibold text-white">{item.title}</h4>
                  <p className="text-xs text-charcoal-400 leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 bg-charcoal-900 border-t border-charcoal-800 text-center space-y-6">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
          Ready to Craft Your Luxury Space?
        </h3>
        <p className="text-xs text-charcoal-400 max-w-md mx-auto">
          Contact our Jodhpur Bhadu Market showroom coordinates or book a direct, custom design consultation session with our stone architect.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-400 text-black font-bold text-xs tracking-widest hover:bg-gold-500 transition-colors"
          >
            VIEW PRODUCTS <ChevronRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-charcoal-800 hover:border-gold-400 text-white hover:text-gold-400 font-bold text-xs tracking-widest transition-colors"
          >
            GET IN TOUCH
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
