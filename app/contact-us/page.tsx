"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { siteSettings } from "@/content/site-settings";

export default function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-charcoal-950 text-foreground font-sans">
      <Header />

      {/* Header Banner */}
      <section className="relative pt-32 pb-20 bg-charcoal-900 border-b border-charcoal-800">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="/images/italian-marble.png"
            alt="Contact background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
            Contact Our Showroom
          </h1>
          <p className="text-sm text-gold-400 uppercase tracking-widest font-semibold">
            Visit us in Jodhpur, call our consultants, or request direct slab pricing
          </p>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section className="py-24 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Contact details & Map */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xs uppercase tracking-widest font-bold text-gold-400">
                  Connect Details
                </h2>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
                  Showroom Contacts & Location Map
                </h3>
                <p className="text-sm text-charcoal-400 leading-relaxed font-light">
                  Our luxury tiles and stone studio is located at Pipli Chouraha, Bhadu Market, Jodhpur. Visit us to inspect marble blocks, check stone finishes under natural light, and speak directly with our material experts.
                </p>
              </div>

              {/* Cards layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Telephone */}
                <div className="p-6 rounded-2xl bg-charcoal-900 border border-charcoal-800 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-gold-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
                    Call Phone
                  </h4>
                  <div className="flex flex-col text-xs text-charcoal-350 space-y-1">
                    {siteSettings.phone.map((p) => (
                      <a
                        key={p}
                        href={`tel:${p.replace(/\s+/g, "")}`}
                        className="hover:text-white transition-colors"
                      >
                        {p}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Email */}
                <div className="p-6 rounded-2xl bg-charcoal-900 border border-charcoal-800 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-gold-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
                    Send Email
                  </h4>
                  <a
                    href={`mailto:${siteSettings.email}`}
                    className="text-xs text-charcoal-350 hover:text-white transition-colors block"
                  >
                    {siteSettings.email}
                  </a>
                </div>

                {/* Address */}
                <div className="p-6 rounded-2xl bg-charcoal-900 border border-charcoal-800 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-gold-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
                    Showroom Address
                  </h4>
                  <p className="text-xs text-charcoal-350 leading-relaxed">
                    {siteSettings.address.formatted}
                  </p>
                </div>

                {/* Business Hours */}
                <div className="p-6 rounded-2xl bg-charcoal-900 border border-charcoal-800 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-gold-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
                    Opening Hours
                  </h4>
                  <div className="text-xs text-charcoal-350 space-y-1">
                    <p>{siteSettings.businessHours.weekdays}</p>
                    <p>{siteSettings.businessHours.sundays}</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Chat */}
              <div className="p-6 rounded-2xl bg-charcoal-900 border border-charcoal-850/80 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-white">WhatsApp Consultation</h4>
                    <p className="text-[10px] text-charcoal-400 leading-normal">
                      Chat directly with our showroom manager for quotes and sizes.
                    </p>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${siteSettings.whatsapp.replace("+", "")}?text=${encodeURIComponent(
                    siteSettings.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-[10px] font-bold tracking-wider uppercase transition-colors shrink-0"
                >
                  START CHAT
                </a>
              </div>

              {/* Maps iframe */}
              <div className="h-72 rounded-3xl overflow-hidden border border-charcoal-800 relative">
                <iframe
                  src={siteSettings.googleMapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Angel Tiles & Stone Showroom Directions"
                />
              </div>
            </div>

            {/* Right Column: Quote form */}
            <div className="lg:col-span-6 lg:sticky lg:top-28">
              <QuoteForm defaultCategory="marble" />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
