"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, ChevronDown, ChevronUp, HelpCircle, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { faqs } from "@/content/faq";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>("faq-1"); // first expanded by default

  const toggleFAQ = (id: string) => {
    if (expandedFAQ === id) {
      setExpandedFAQ(null);
    } else {
      setExpandedFAQ(id);
    }
  };

  // Filter FAQs based on query & category
  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Inject JSON-LD FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <div className="flex flex-col min-h-screen bg-charcoal-950 text-foreground font-sans">
      {/* Inject FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      {/* Header Banner */}
      <section className="relative pt-32 pb-20 bg-charcoal-900 border-b border-charcoal-800">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="/images/italian-marble.png"
            alt="FAQ background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-gold-400 uppercase tracking-widest font-semibold">
            Common answers regarding imported marbles, local sandstones, custom carving and deliveries
          </p>
        </div>
      </section>

      {/* Main FAQ search + list */}
      <section className="py-20 bg-charcoal-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Search & Category Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-450" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-charcoal-900 border border-charcoal-800 rounded-full pl-10 pr-4 py-2.5 text-xs text-white placeholder:text-charcoal-550 focus:outline-none focus:border-gold-400/55 transition-colors"
              />
            </div>

            {/* Categories filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {["all", "products", "services", "maintenance", "general"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-gold-400 text-black"
                      : "bg-charcoal-900 text-charcoal-350 hover:bg-charcoal-850 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4">
            {filteredFAQs.map((faq) => {
              const isExpanded = expandedFAQ === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-charcoal-900 border border-charcoal-800 hover:border-gold-400/10 transition-all duration-300 overflow-hidden"
                >
                  {/* Accordion Trigger Header */}
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left text-white focus:outline-none"
                  >
                    <div className="flex items-start gap-3.5 pr-4">
                      <HelpCircle className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                      <span className="font-serif text-sm sm:text-base font-semibold tracking-wide">
                        {faq.question}
                      </span>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-gold-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-charcoal-450 shrink-0" />
                    )}
                  </button>

                  {/* Accordion Content Panels */}
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isExpanded ? "max-h-[300px] border-t border-charcoal-850/70 p-5" : "max-h-0"
                    } overflow-hidden`}
                  >
                    <p className="text-xs sm:text-sm text-charcoal-350 leading-relaxed font-light">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty Search Fallback */}
          {filteredFAQs.length === 0 && (
            <div className="text-center py-16 border border-dashed border-charcoal-800 rounded-2xl space-y-3">
              <AlertCircle className="w-8 h-8 text-charcoal-555 mx-auto" />
              <p className="text-sm text-charcoal-400">
                No FAQ matched your current search parameters. Please try other keywords or reach us directly.
              </p>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </div>
  );
}
