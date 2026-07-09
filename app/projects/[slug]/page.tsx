import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, Layers, ShieldCheck, HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { projects } from "@/content/projects";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static routes for the 4 projects at build time
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate dynamic SEO metadata per case study
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Angel Tiles & Stone",
    };
  }

  return {
    title: project.seoTitle,
    description: project.seoDescription,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find other projects
  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen bg-charcoal-950 text-foreground font-sans">
      <Header />

      {/* Navigation Breadcrumb */}
      <section className="pt-28 pb-4 bg-charcoal-950 border-b border-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-charcoal-400 hover:text-gold-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> BACK TO PROJECTS HUB
          </Link>
        </div>
      </section>

      {/* Main Project Layout */}
      <section className="py-16 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Details */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest font-bold text-gold-400">
                  Case Study: {project.category}
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide leading-tight">
                  {project.title}
                </h1>
                
                {/* Meta details strip */}
                <div className="flex flex-wrap gap-6 pt-2 text-xs text-charcoal-400">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-gold-400" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-gold-400" />
                    <span>Year: {project.year}</span>
                  </div>
                </div>
              </div>

              {/* Showcase Image */}
              <div className="relative h-96 w-full rounded-3xl overflow-hidden border border-charcoal-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Overview */}
              <div className="space-y-4">
                <h2 className="font-serif text-xl font-bold text-white tracking-wide">
                  Project Overview
                </h2>
                <p className="text-sm text-charcoal-350 leading-relaxed font-light">
                  {project.description}
                </p>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 gap-6">
                <div className="p-6 rounded-2xl bg-charcoal-900 border border-charcoal-800 space-y-3">
                  <div className="flex items-center gap-2 text-red-400">
                    <HelpCircle className="w-5 h-5" />
                    <h3 className="font-serif text-base font-bold tracking-wide">The Challenge</h3>
                  </div>
                  <p className="text-xs text-charcoal-300 leading-relaxed font-light">
                    {project.challenge}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-charcoal-900 border border-charcoal-800 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <ShieldCheck className="w-5 h-5" />
                    <h3 className="font-serif text-base font-bold tracking-wide">The Solution</h3>
                  </div>
                  <p className="text-xs text-charcoal-300 leading-relaxed font-light">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Slabs / Materials list */}
              <div className="space-y-4">
                <h3 className="font-serif text-lg font-bold text-white tracking-wide">
                  Specific Slabs Selected
                </h3>
                <div className="space-y-2">
                  {project.materials.map((m, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-charcoal-950 border border-charcoal-850 text-xs text-charcoal-200"
                    >
                      <Layers className="w-4 h-4 text-gold-400 shrink-0" />
                      <span className="font-semibold">{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Quote Form */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 h-fit">
              <QuoteForm defaultCategory="multiple" />
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-20 bg-charcoal-900 border-t border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
              Other Completed Stoneworks
            </h3>
            <p className="text-xs text-charcoal-400 mt-1">
              Read how other properties in Jodhpur resolved sizing, vein, and layout challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects.map((p) => (
              <div
                key={p.slug}
                className="group p-6 rounded-2xl bg-charcoal-950 border border-charcoal-850 hover:border-gold-400/20 transition-all duration-300 flex items-center justify-between gap-4"
              >
                <div className="space-y-2">
                  <h4 className="font-serif text-lg font-bold text-white group-hover:text-gold-400 transition-colors">
                    {p.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-charcoal-500 font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                    <span>{p.location.split(", ")[0]}</span>
                  </div>
                </div>
                <Link
                  href={`/projects/${p.slug}`}
                  className="w-10 h-10 rounded-full bg-charcoal-900 border border-charcoal-800 flex items-center justify-center text-charcoal-400 group-hover:bg-primary group-hover:text-white group-hover:border-transparent transition-all duration-300 shrink-0"
                >
                  <ArrowLeft className="w-5 h-5 rotate-180" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
