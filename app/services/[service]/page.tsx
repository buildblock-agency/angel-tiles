import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { servicesList } from "@/content/site-settings";
import { Metadata } from "next";

interface Props {
  params: Promise<{ service: string }>;
}

// Generate static routes for the 2 services at build time
export async function generateStaticParams() {
  return servicesList.map((service) => ({
    service: service.slug,
  }));
}

// Generate dynamic SEO metadata per service
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = servicesList.find((s) => s.slug === serviceSlug);

  if (!service) {
    return {
      title: "Service Not Found | Angel Tiles & Stone",
    };
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { service: serviceSlug } = await params;
  const service = servicesList.find((s) => s.slug === serviceSlug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-charcoal-950 text-foreground font-sans">
      <Header />

      {/* Navigation Breadcrumb */}
      <section className="pt-28 pb-4 bg-charcoal-950 border-b border-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold text-charcoal-400 hover:text-gold-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> BACK TO SERVICES HUB
          </Link>
        </div>
      </section>

      {/* Main Service Details Section */}
      <section className="py-16 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Details */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest font-bold text-gold-400">
                  Architectural Service
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide leading-tight">
                  {service.title}
                </h1>
                <p className="text-sm font-serif text-gold-200 tracking-wide font-light italic">
                  &ldquo;{service.tagline}&rdquo;
                </p>
              </div>

              {/* Showcase Image */}
              <div className="relative h-96 w-full rounded-3xl overflow-hidden border border-charcoal-800">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="space-y-4">
                <h2 className="font-serif text-xl font-bold text-white tracking-wide">
                  Service Description
                </h2>
                <p className="text-sm text-charcoal-300 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              {/* Features List */}
              <div className="p-6 rounded-2xl bg-charcoal-900 border border-charcoal-800 space-y-4">
                <h3 className="font-serif text-lg font-bold text-white tracking-wide">
                  What is Included
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-charcoal-350 leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Quote Form */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 h-fit">
              <QuoteForm defaultCategory="multiple" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
