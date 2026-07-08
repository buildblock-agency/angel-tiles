"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  ShieldCheck,
  Layers,
  Globe,
  Gem,
  ChevronRight,
  Star,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  Sparkles
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { products } from "@/content/products";
import { projects } from "@/content/projects";
import { siteSettings } from "@/content/site-settings";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Register plugin inside the hook to ensure client execution
    gsap.registerPlugin(ScrollTrigger);

    // Hero content entrance
    gsap.from(".hero-animate", {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 1.0,
      ease: "power3.out",
    });

    // Stats roll reveal
    gsap.from(".stat-item", {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".stats-section",
        start: "top bottom-=50",
        once: true,
      }
    });

    // Product cards reveal
    gsap.from(".product-card-reveal", {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".product-cards-section",
        start: "top bottom-=50",
        once: true,
      }
    });

    // USP items reveal
    gsap.from(".usp-card-reveal", {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.7,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".usp-cards-section",
        start: "top bottom-=50",
        once: true,
      }
    });

    // Force ScrollTrigger to refresh after a brief delay for safety
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1200);

    return () => clearTimeout(timer);
  }, { scope: container });

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "1200+", label: "Homes Completed" },
    { value: "10+", label: "Countries Sourced" },
    { value: "150+", label: "Unique Stone Designs" },
  ];

  const coreUSPs = [
    {
      icon: <Gem className="w-6 h-6 text-gold-400" />,
      title: "Hand-Picked Slabs",
      desc: "Every single lot of Italian marble is inspected at quarries prior to container loading.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-gold-400" />,
      title: "Slab-Mapping Setup",
      desc: "We lay out slabs book-matched on our yards for you to review prior to cutting.",
    },
    {
      icon: <Layers className="w-6 h-6 text-gold-400" />,
      title: "Large Format Variety",
      desc: "Housing Jodhpur's widest stock of 1200x2400mm GVT porcelain slabs.",
    },
    {
      icon: <Globe className="w-6 h-6 text-gold-400" />,
      title: "Global Quarry Network",
      desc: "Importing directly from active quarries in Carrara (Italy), Turkey, and Greece.",
    },
    {
      icon: <Award className="w-6 h-6 text-gold-400" />,
      title: "Heritage Hand Carving",
      desc: "Collaborating with local Rajasthani artisans for waterjet inlays & traditional screens.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-gold-400" />,
      title: "Eco-Grade Sanitary",
      desc: "Eco-friendly, water-saving ceramic closets and premium finish faucet fittings.",
    },
  ];

  return (
    <div ref={container} className="flex flex-col min-h-screen bg-charcoal-950 text-foreground overflow-x-hidden font-sans">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 overflow-hidden border-b border-charcoal-900 bg-gradient-to-b from-charcoal-950 via-charcoal-950 to-charcoal-900">
        
        {/* Fine gold/charcoal line dividers for architectural blueprint feel */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-charcoal-800" />
          <div className="absolute right-[10%] top-0 bottom-0 w-[1px] bg-charcoal-800" />
          <div className="absolute left-0 right-0 top-[35%] h-[1px] bg-charcoal-800" />
          <div className="absolute left-0 right-0 bottom-[15%] h-[1px] bg-charcoal-800" />
        </div>

        {/* Subtle background glow */}
        <div className="absolute top-20 right-[15%] w-96 h-96 rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-20 left-[15%] w-96 h-96 rounded-full bg-charcoal-700/10 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col lg:flex-row items-center justify-between gap-12 py-10">
          
          {/* Left Column: Editorial Typography */}
          <div className="lg:w-[55%] space-y-8 text-left">
            <div className="hero-animate inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal-900 border border-charcoal-800 text-[10px] tracking-[0.2em] font-bold text-gold-400 uppercase shadow-lg">
              <Sparkles className="w-3 h-3 text-gold-400" /> 
              ESTD. 2011 • THE ART OF LUXURY STONE
            </div>

            <div className="hero-animate space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-bold block">
                Direct Quarry Sourcing
              </span>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] uppercase">
                Crafting <br />
                <span className="text-gold-400">Timeless</span> <br />
                Majesty
              </h1>
            </div>

            <p className="hero-animate text-sm sm:text-base text-charcoal-350 leading-relaxed max-w-lg font-light">
              We bypass broker networks to select premium Italian Calacatta, Statuario, and quartzite blocks directly at the quarries. Engineered to match the strict aesthetic benchmarks of leading design agencies.
            </p>

            <div className="hero-animate flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold-400 hover:bg-gold-500 text-black font-bold text-xs tracking-widest shadow-xl shadow-gold-400/10 hover:shadow-gold-500/20 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                EXPLORE COLLECTIONS
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-charcoal-800 hover:border-gold-400 text-charcoal-300 hover:text-gold-400 font-bold text-xs tracking-widest bg-charcoal-900/40 hover:bg-charcoal-900 transition-all duration-300"
              >
                VISIT JODHPUR SHOWROOM
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Material Spec Frame */}
          <div className="hero-animate lg:w-[42%] w-full flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md group">
              
              {/* Outer decorative line corners */}
              <div className="absolute -inset-4 border border-charcoal-900 rounded-[36px] pointer-events-none group-hover:border-gold-400/10 transition-colors duration-500" />
              
              {/* Main Image Frame */}
              <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden border-[6px] border-charcoal-900 bg-charcoal-900 shadow-2xl shadow-black/85 transition-transform duration-500 group-hover:scale-[1.02]">
                <Image
                  src="/images/italian-marble.png"
                  alt="Statuario Marble Slab Spec"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 35vw"
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Dark Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />
              </div>

              {/* Museum Spec Plate Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-charcoal-950/90 border border-charcoal-800/80 backdrop-blur-md shadow-2xl flex flex-col justify-between space-y-4 transition-all duration-300 group-hover:border-gold-400/20">
                <div className="flex items-center justify-between border-b border-charcoal-900 pb-3">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-gold-400 font-bold">Showroom Spec</span>
                    <h3 className="font-serif text-base font-bold text-white tracking-wide">Statuario Italian White</h3>
                  </div>
                  <span className="text-[9px] font-mono bg-gold-400/10 border border-gold-400/30 text-gold-400 px-2 py-0.5 rounded">
                    BLOCK #A-108
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-[10px] font-sans">
                  <div>
                    <span className="text-charcoal-500 font-bold block uppercase tracking-wider">Origin</span>
                    <span className="text-charcoal-250 font-semibold mt-0.5 block">Carrara, Italy</span>
                  </div>
                  <div>
                    <span className="text-charcoal-500 font-bold block uppercase tracking-wider">Finish</span>
                    <span className="text-charcoal-250 font-semibold mt-0.5 block">High-Gloss Polish</span>
                  </div>
                  <div>
                    <span className="text-charcoal-500 font-bold block uppercase tracking-wider">Avg Size</span>
                    <span className="text-charcoal-250 font-semibold mt-0.5 block">10.5&apos; x 6.2&apos;</span>
                  </div>
                  <div>
                    <span className="text-charcoal-500 font-bold block uppercase tracking-wider">Availability</span>
                    <span className="text-charcoal-250 font-semibold mt-0.5 block">In Showroom Stock</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Continuous Horizontal Ticker Marquee */}
        <div className="relative w-full overflow-hidden bg-charcoal-900 border-y border-charcoal-850 py-4.5 select-none z-10">
          <div className="animate-marquee-slow flex whitespace-nowrap gap-12 text-xs font-bold uppercase tracking-[0.25em] text-gold-400/70 font-sans">
            {/* First Set of Items */}
            <span>Statuario Marble</span> <span>★</span>
            <span>Absolute Black Granite</span> <span>★</span>
            <span>Teak Sandstone</span> <span>★</span>
            <span>Large Format GVT Porcelain</span> <span>★</span>
            <span>Custom CNC Inlays</span> <span>★</span>
            <span>Tabletop Stone Basins</span> <span>★</span>
            <span>Imported Quartz Slabs</span> <span>★</span>
            <span>Exotic Onyx Slabs</span> <span>★</span>
            
            {/* Duplicated Set for Seamless Loop */}
            <span>Statuario Marble</span> <span>★</span>
            <span>Absolute Black Granite</span> <span>★</span>
            <span>Teak Sandstone</span> <span>★</span>
            <span>Large Format GVT Porcelain</span> <span>★</span>
            <span>Custom CNC Inlays</span> <span>★</span>
            <span>Tabletop Stone Basins</span> <span>★</span>
            <span>Imported Quartz Slabs</span> <span>★</span>
            <span>Exotic Onyx Slabs</span> <span>★</span>
          </div>
        </div>

      </section>

      {/* Stats Bar */}
      <section className="stats-section relative z-10 bg-charcoal-900 border-y border-charcoal-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item space-y-1">
                <div className="font-serif text-3xl sm:text-4xl font-bold text-gold-400">
                  {stat.value}
                </div>
                <div className="text-xs tracking-wider text-charcoal-400 uppercase font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="product-cards-section py-24 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs uppercase tracking-widest font-bold text-gold-400">
              Curated Materials
            </h2>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-wide">
              Product Categories
            </h3>
            <p className="text-sm text-charcoal-400 font-light">
              We source only structurally sound blocks of natural marbles and high-grade vitrified ceramic bases to ensure stability, color consistency, and durability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.slug}
                className="product-card-reveal group relative rounded-2xl bg-charcoal-900 border border-charcoal-800 overflow-hidden hover:border-gold-400/40 hover:shadow-xl hover:shadow-black/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-transparent" />
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div className="space-y-3">
                    <h4 className="font-serif text-xl font-bold text-white group-hover:text-gold-400 transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-xs text-charcoal-400 line-clamp-3 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-charcoal-800/80 mt-6 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-gold-400">
                      Explore Range
                    </span>
                    <Link
                      href={`/products/${product.slug}`}
                      className="w-8 h-8 rounded-full bg-charcoal-950 border border-charcoal-800 flex items-center justify-center text-charcoal-400 group-hover:bg-gold-400 group-hover:text-black group-hover:border-transparent transition-all duration-300"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-charcoal-900 border-y border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-xs uppercase tracking-widest font-bold text-gold-400">
                Stone in Action
              </h2>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-wide">
                Featured Projects
              </h3>
              <p className="text-sm text-charcoal-400 font-light">
                See how architects and homeowners in Jodhpur use our premium slabs and customized carvings to bring elegance and functionality to their spaces.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-gold-400 hover:text-white uppercase transition-colors"
            >
              All Projects Case Studies <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {projects.slice(0, 2).map((project) => (
              <div
                key={project.slug}
                className="group relative rounded-3xl bg-charcoal-950 border border-charcoal-800 overflow-hidden flex flex-col md:flex-row"
              >
                <div className="relative h-64 md:h-auto md:w-1/2 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent md:hidden" />
                </div>
                <div className="p-6 sm:p-8 md:w-1/2 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-widest bg-gold-400/10 text-gold-400 px-2 py-1 rounded">
                        {project.category}
                      </span>
                      <span className="text-xs text-charcoal-500 font-semibold">{project.year}</span>
                    </div>
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-gold-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs text-charcoal-400 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    <div className="space-y-1 pt-2">
                      <span className="text-[9px] uppercase tracking-widest text-charcoal-500 font-bold block">
                        Featured Materials:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {project.materials.slice(0, 2).map((m, idx) => (
                          <span key={idx} className="text-[10px] text-charcoal-300">
                            • {m.split(" (")[0]}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-charcoal-900 mt-6 flex justify-end">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-gold-400 group-hover:text-white transition-colors"
                    >
                      READ CASE STUDY <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="usp-cards-section py-24 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs uppercase tracking-widest font-bold text-gold-400">
              The Angel Advantage
            </h2>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-wide">
              Why Choose Our Studio?
            </h3>
            <p className="text-sm text-charcoal-400 font-light">
              We stand apart from generic Jodhpur tile shops by providing complete material chain-of-custody, customization solutions, and layout blueprints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreUSPs.map((usp, i) => (
              <div
                key={i}
                className="usp-card-reveal p-8 rounded-2xl bg-charcoal-900 border border-charcoal-800/80 hover:border-gold-400/20 transition-all duration-300 space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center">
                  {usp.icon}
                </div>
                <h4 className="font-serif text-lg font-bold text-white">{usp.title}</h4>
                <p className="text-xs text-charcoal-400 leading-relaxed">{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials (Review Bar) */}
      <section className="py-20 bg-charcoal-900 border-t border-charcoal-800">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-8">
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
            ))}
          </div>
          <blockquote className="font-serif text-xl sm:text-2xl font-light text-white leading-relaxed italic">
            &ldquo;We sourced Statuario marble and bathroom tiles for our villa in Shastri Nagar. The book-match vein matching was perfectly completed on their yard. The staff is knowledgeable, and pricing is highly transparent. Jodhpur&apos;s best luxury showroom.&rdquo;
          </blockquote>
          <div>
            <div className="font-bold text-white text-sm">Sunil Mehta</div>
            <div className="text-xs text-gold-400 tracking-wider uppercase mt-1">Villa Owner, Shastri Nagar</div>
          </div>
        </div>
      </section>

      {/* Map & Quote Builder Section */}
      <section className="py-24 bg-charcoal-950 border-t border-charcoal-900" id="showroom-map">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-xs uppercase tracking-widest font-bold text-gold-400">
                  Connect With Us
                </h2>
                <h3 className="font-serif text-3xl font-bold text-white tracking-wide">
                  Visit Our Showroom or Get Slabs Quote
                </h3>
                <p className="text-sm text-charcoal-400 leading-relaxed font-light">
                  Plan a showroom visit to explore thousands of square feet of standing marble slabs, mock bath setups, and tile catalogs. Fill in the form and our stone consultant will get in touch with you.
                </p>
              </div>

              {/* Detail Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="p-5 rounded-xl bg-charcoal-900 border border-charcoal-800 space-y-2">
                  <MapPin className="w-5 h-5 text-gold-400" />
                  <h4 className="font-serif text-sm font-bold text-white">Showroom Address</h4>
                  <p className="text-xs text-charcoal-400 leading-relaxed">
                    {siteSettings.address.formatted}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-charcoal-900 border border-charcoal-800 space-y-2">
                  <Clock className="w-5 h-5 text-gold-400" />
                  <h4 className="font-serif text-sm font-bold text-white">Operating Hours</h4>
                  <p className="text-xs text-charcoal-400 leading-relaxed">
                    {siteSettings.businessHours.weekdays} <br />
                    {siteSettings.businessHours.sundays}
                  </p>
                </div>
              </div>

              {/* Map Embed */}
              <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-charcoal-800">
                <iframe
                  src={siteSettings.googleMapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Angel Tiles & Stone Studio Location Map"
                />
              </div>
            </div>

            {/* Quote Form */}
            <div>
              <QuoteForm defaultCategory="marble" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
