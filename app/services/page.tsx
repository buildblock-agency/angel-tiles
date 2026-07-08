"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ClipboardList, PenTool } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { servicesList } from "@/content/site-settings";

export default function ServicesHub() {
  return (
    <div className="flex flex-col min-h-screen bg-charcoal-950 text-foreground font-sans">
      <Header />

      {/* Header Banner */}
      <section className="relative pt-32 pb-20 bg-charcoal-900 border-b border-charcoal-800">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="/images/black-granite.png"
            alt="Services background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
            Our Architectural Services
          </h1>
          <p className="text-sm text-gold-400 uppercase tracking-widest font-semibold">
            Technical stone guidance and customized fabrication consulting
          </p>
        </div>
      </section>

      {/* Services Hub Detail */}
      <section className="py-24 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs uppercase tracking-widest font-bold text-gold-400">
              Stone Consultation
            </h2>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Complimentary Architectural Support
            </h3>
            <p className="text-sm text-charcoal-400 leading-relaxed font-light">
              Selecting materials is only the first step. We provide layout blueprints, vein matchmaking, and contractor coordination to verify that the final onsite installation is flawless.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {servicesList.map((service, idx) => (
              <div
                key={service.slug}
                className="group p-8 rounded-3xl bg-charcoal-900 border border-charcoal-800 hover:border-gold-400/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-gold-400">
                    {idx === 0 ? (
                      <PenTool className="w-6 h-6" />
                    ) : (
                      <ClipboardList className="w-6 h-6" />
                    )}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-serif text-2xl font-bold text-white group-hover:text-gold-400 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-xs text-gold-200 tracking-wide font-light italic">
                      &ldquo;{service.tagline}&rdquo;
                    </p>
                  </div>
                  <p className="text-xs text-charcoal-400 leading-relaxed leading-relaxed font-light">
                    {service.description}
                  </p>
                  <ul className="space-y-2 pt-2">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-charcoal-350">
                        <span className="text-gold-400 shrink-0 font-bold">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 border-t border-charcoal-800/80 mt-8 flex justify-end">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-gold-400 group-hover:text-white uppercase transition-colors"
                  >
                    READ SERVICE DETAILS <ChevronRight className="w-4 h-4" />
                  </Link>
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
