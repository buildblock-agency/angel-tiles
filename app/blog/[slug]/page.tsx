import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { blogPosts } from "@/content/blog";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static routes for the articles at build time
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate dynamic SEO metadata per blog post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | Angel Tiles & Stone",
    };
  }

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  // Injected JSON-LD Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": `https://angeltilesandstone.com${post.image}`,
    "datePublished": "2026-07-02T12:00:00+05:30", // mock published dates
    "author": {
      "@type": "Person",
      "name": post.author,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Angel Tiles & Stone Studio",
      "logo": {
        "@type": "ImageObject",
        "url": "https://angeltilesandstone.com/images/italian-marble.png",
      },
    },
    "description": post.summary,
  };

  return (
    <div className="flex flex-col min-h-screen bg-charcoal-950 text-foreground font-sans">
      {/* Inject Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Header />

      {/* Navigation Breadcrumb */}
      <section className="pt-28 pb-4 bg-charcoal-950 border-b border-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-charcoal-400 hover:text-gold-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> BACK TO BLOG HUB
          </Link>
        </div>
      </section>

      {/* Main Blog Article Section */}
      <section className="py-16 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Article Copy */}
            <article className="lg:col-span-8 space-y-8">
              {/* Header block */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] uppercase tracking-widest bg-gold-400/10 text-gold-400 px-2 py-0.5 border border-gold-400/20 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide leading-tight">
                  {post.title}
                </h1>
                
                {/* Meta details */}
                <div className="flex flex-wrap gap-6 pt-2 text-xs text-charcoal-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>{post.publishDate}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>By {post.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative h-[400px] w-full rounded-3xl overflow-hidden border border-charcoal-800">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Article Paragraphs */}
              <div className="space-y-6 text-charcoal-200 leading-relaxed font-light text-sm sm:text-base">
                {post.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </article>

            {/* Right Column: Quote Form sticky panel */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit">
              <QuoteForm defaultCategory="multiple" />
            </div>
          </div>
        </div>
      </section>

      {/* Suggested Reading */}
      <section className="py-20 bg-charcoal-900 border-t border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
              Other Suggested Readings
            </h3>
            <p className="text-xs text-charcoal-400 mt-1">
              Read additional guidance written by our material specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherPosts.map((p) => (
              <div
                key={p.slug}
                className="group p-6 rounded-2xl bg-charcoal-950 border border-charcoal-850 hover:border-gold-400/20 transition-all duration-300 flex items-center justify-between gap-4"
              >
                <div className="space-y-2">
                  <h4 className="font-serif text-lg font-bold text-white group-hover:text-gold-400 transition-colors line-clamp-1 leading-relaxed">
                    {p.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-charcoal-500 font-semibold">
                    <BookOpen className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                    <span>{p.readTime}</span>
                  </div>
                </div>
                <Link
                  href={`/blog/${p.slug}`}
                  className="w-10 h-10 rounded-full bg-charcoal-900 border border-charcoal-800 flex items-center justify-center text-charcoal-400 group-hover:bg-gold-400 group-hover:text-black group-hover:border-transparent transition-all duration-300 shrink-0"
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
