import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MapPin, ArrowLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { products } from "@/content/products";
import { Metadata } from "next";

interface Props {
  params: Promise<{ category: string }>;
}

// Generate static routes for the 6 product lines at build time (SSG)
export async function generateStaticParams() {
  return products.map((product) => ({
    category: product.slug,
  }));
}

// Generate dynamic SEO metadata per category
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const product = products.find((p) => p.slug === category);

  if (!product) {
    return {
      title: "Category Not Found | Angel Tiles & Stone",
    };
  }

  return {
    title: product.seoTitle,
    description: product.seoDescription,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
  };
}

export default async function ProductCategoryPage({ params }: Props) {
  const { category } = await params;
  const product = products.find((p) => p.slug === category);

  if (!product) {
    notFound();
  }

  // Find related products (exclude current)
  const relatedProducts = products.filter((p) => p.slug !== category).slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen bg-charcoal-950 text-foreground font-sans">
      <Header />

      {/* Navigation Breadcrumb */}
      <section className="pt-28 pb-4 bg-charcoal-950 border-b border-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-semibold text-charcoal-400 hover:text-gold-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> BACK TO MATERIALS HUB
          </Link>
        </div>
      </section>

      {/* Main product showcase layout */}
      <section className="py-16 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Details */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest font-bold text-gold-400">
                  Premium Range
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide leading-tight">
                  {product.name}
                </h1>
                <p className="text-sm font-serif text-gold-200 tracking-wide font-light italic">
                  &ldquo;{product.tagline}&rdquo;
                </p>
              </div>

              {/* Showcase Image */}
              <div className="relative h-96 w-full rounded-3xl overflow-hidden border border-charcoal-800">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h2 className="font-serif text-xl font-bold text-white tracking-wide">
                  Material Overview
                </h2>
                <p className="text-sm text-charcoal-300 leading-relaxed font-light">
                  {product.description}
                </p>
              </div>

              {/* Features List */}
              <div className="p-6 rounded-2xl bg-charcoal-900 border border-charcoal-800 space-y-4">
                <h3 className="font-serif text-lg font-bold text-white tracking-wide">
                  Key Quality Factors
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-charcoal-350 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Materials varieties & sizes */}
              <div className="space-y-4">
                <h3 className="font-serif text-lg font-bold text-white tracking-wide">
                  Select Stock Varieties
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.materials.map((mat, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-charcoal-950 border border-charcoal-850 text-xs text-charcoal-200"
                    >
                      <span className="font-semibold">{mat}</span>
                      <span className="text-[10px] tracking-wider text-gold-400 font-bold uppercase shrink-0 bg-gold-400/5 px-2 py-0.5 border border-gold-400/10 rounded">
                        Available
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Application Areas */}
              <div className="space-y-4">
                <h3 className="font-serif text-lg font-bold text-white tracking-wide">
                  Recommended Applications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 text-xs bg-charcoal-900 border border-charcoal-800 text-charcoal-350 px-3 py-1.5 rounded-full"
                    >
                      <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Pre-filled Quote Form */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 h-fit">
              <QuoteForm defaultCategory={product.slug} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-20 bg-charcoal-900 border-t border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
              Explore Other Collections
            </h3>
            <p className="text-xs text-charcoal-400 mt-1">
              Complement your material choice with other matching architectural finishes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProducts.map((p) => (
              <div
                key={p.slug}
                className="group p-6 rounded-2xl bg-charcoal-950 border border-charcoal-850 hover:border-gold-400/20 transition-all duration-300 flex items-center justify-between gap-4"
              >
                <div className="space-y-2">
                  <h4 className="font-serif text-lg font-bold text-white group-hover:text-gold-400 transition-colors">
                    {p.name}
                  </h4>
                  <p className="text-xs text-charcoal-400 line-clamp-2 leading-relaxed max-w-sm">
                    {p.description}
                  </p>
                </div>
                <Link
                  href={`/products/${p.slug}`}
                  className="w-10 h-10 rounded-full bg-charcoal-900 border border-charcoal-800 flex items-center justify-center text-charcoal-400 group-hover:bg-gold-400 group-hover:text-black group-hover:border-transparent transition-all duration-300 shrink-0"
                >
                  <ChevronRight className="w-5 h-5" />
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
