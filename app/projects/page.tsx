"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, MapPin, Calendar, Layers } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/content/projects";

export default function ProjectsHub() {
  return (
    <div className="flex flex-col min-h-screen bg-charcoal-950 text-foreground font-sans">
      <Header />

      {/* Header Banner */}
      <section className="relative pt-32 pb-20 bg-charcoal-900 border-b border-charcoal-800">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="/images/black-granite.png"
            alt="Projects background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
            Our Stonework Projects
          </h1>
          <p className="text-sm text-gold-400 uppercase tracking-widest font-semibold">
            Case studies of luxury villas, heritage hotels, and commercial spaces across Rajasthan
          </p>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-24 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs uppercase tracking-widest font-bold text-gold-400">
              Case Studies
            </h2>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Slab Selections and Installations
            </h3>
            <p className="text-sm text-charcoal-400 leading-relaxed font-light">
              Review real photos, quarry selection summaries, vein matching mappings, and installation solutions executed for Jodhpur clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.slug}
                className="group flex flex-col justify-between bg-charcoal-900 border border-charcoal-800 rounded-3xl overflow-hidden hover:border-gold-400/25 transition-all duration-300 shadow-lg"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/30 to-transparent" />
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-widest bg-gold-400/10 text-gold-400 px-2 py-0.5 border border-gold-400/20 rounded">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-charcoal-500 font-semibold">
                        <Calendar className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                        {project.year}
                      </div>
                    </div>

                    <h4 className="font-serif text-xl font-bold text-white group-hover:text-gold-400 transition-colors">
                      {project.title}
                    </h4>

                    <div className="flex items-start gap-1.5 text-xs text-charcoal-450">
                      <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                      <span>{project.location}</span>
                    </div>

                    <p className="text-xs text-charcoal-400 leading-relaxed font-light line-clamp-3">
                      {project.description}
                    </p>

                    <div className="pt-2">
                      <span className="text-[9px] uppercase tracking-widest text-charcoal-500 font-bold block mb-1">
                        Materials Used:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {project.materials.map((m, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 text-[10px] bg-charcoal-950 border border-charcoal-850 text-charcoal-350 px-2 py-0.5 rounded"
                          >
                            <Layers className="w-2.5 h-2.5 text-gold-400 shrink-0" />
                            {m.split(" (")[0]}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-charcoal-800 mt-6 flex justify-end">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-gold-400 group-hover:text-white uppercase transition-colors"
                    >
                      READ CASE STUDY DETAILS <ChevronRight className="w-4 h-4" />
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
