"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, MessageSquare } from "lucide-react";
import { products } from "@/content/products";
import { siteSettings } from "@/content/site-settings";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on page change by adjusting state during rendering
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
    setProductsDropdown(false);
  }

  const navLinks = [
    { name: "About", href: "/about-us" },
    { name: "Gallery", href: "/gallery" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-charcoal-950/90 backdrop-blur-md border-b border-charcoal-800/80 py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col group">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-white group-hover:text-gold-400 transition-colors">
              ANGEL TILES
            </span>
            <span className="text-[9px] sm:text-[10px] font-sans tracking-[0.25em] text-gold-400 group-hover:text-white transition-colors">
              & STONE STUDIO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Products dropdown trigger */}
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdown(true)}
              onMouseLeave={() => setProductsDropdown(false)}
            >
              <button
                onClick={() => setProductsDropdown(!productsDropdown)}
                className={`flex items-center gap-1 font-sans text-sm font-medium tracking-wide transition-colors ${
                  pathname.startsWith("/products")
                    ? "text-gold-400"
                    : "text-charcoal-300 hover:text-white"
                }`}
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsDropdown ? "rotate-180" : ""}`} />
              </button>

              {/* Products Dropdown content */}
              <div
                className={`absolute left-0 mt-2 w-64 rounded-xl bg-charcoal-900 border border-charcoal-800 shadow-xl py-3 transform transition-all duration-200 origin-top-left ${
                  productsDropdown
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="px-4 py-2 border-b border-charcoal-800 mb-2">
                  <Link
                    href="/products"
                    className="text-xs uppercase tracking-widest font-bold text-gold-400 hover:text-white transition-colors"
                  >
                    View All Categories
                  </Link>
                </div>
                {products.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className="block px-4 py-2 text-sm text-charcoal-200 hover:bg-charcoal-800 hover:text-gold-400 transition-colors"
                  >
                    <div className="font-semibold">{product.name}</div>
                    <div className="text-[10px] text-charcoal-400 truncate">
                      {product.tagline}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Other Navigation Links */}
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-sans text-sm font-medium tracking-wide transition-colors hover:text-white ${
                    isActive ? "text-gold-400" : "text-charcoal-300"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Quick CTA Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${siteSettings.phone[0].replace(/\s+/g, "")}`}
              className="flex items-center gap-2 text-xs font-semibold text-charcoal-300 hover:text-gold-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {siteSettings.phone[0]}
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-gold-400 text-xs font-semibold text-gold-400 tracking-wider hover:bg-gold-400 hover:text-black transition-all duration-300"
            >
              GET A QUOTE
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoal-300 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-charcoal-950 border-l border-charcoal-800 z-50 p-6 flex flex-col justify-between transform transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-charcoal-800">
            <Link href="/" className="flex flex-col" onClick={() => setIsOpen(false)}>
              <span className="font-serif text-lg font-bold tracking-wider text-white">
                ANGEL TILES
              </span>
              <span className="text-[9px] font-sans tracking-[0.25em] text-gold-400">
                & STONE STUDIO
              </span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="text-charcoal-300 hover:text-white p-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="mt-8 space-y-6">
            {/* Products Group for Mobile */}
            <div>
              <div className="text-xs uppercase tracking-widest font-bold text-gold-400 mb-3">
                Products
              </div>
              <div className="pl-3 space-y-3 border-l border-charcoal-800">
                <Link
                  href="/products"
                  className="block text-sm font-semibold text-charcoal-200 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  All Products Hub
                </Link>
                {products.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className="block text-sm text-charcoal-300 hover:text-gold-400"
                    onClick={() => setIsOpen(false)}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Other Links */}
            <div className="space-y-4 pt-4 border-t border-charcoal-900">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-base font-medium text-charcoal-200 hover:text-gold-400"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        {/* Mobile Contact Box */}
        <div className="border-t border-charcoal-800 pt-6 space-y-4">
          <a
            href={`tel:${siteSettings.phone[0].replace(/\s+/g, "")}`}
            className="flex items-center gap-3 text-sm text-charcoal-300 hover:text-gold-400 transition-colors"
          >
            <Phone className="w-4 h-4 text-gold-400" />
            {siteSettings.phone[0]}
          </a>
          <a
            href={`https://wa.me/${siteSettings.whatsapp.replace("+", "")}?text=${encodeURIComponent(
              siteSettings.whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-charcoal-300 hover:text-gold-400 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            WhatsApp Inquiry
          </a>
          <Link
            href="/contact-us"
            className="flex items-center justify-center w-full py-3 rounded-full bg-gold-400 text-black font-semibold text-xs tracking-widest hover:bg-gold-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            GET A CUSTOM QUOTE
          </Link>
        </div>
      </div>
    </header>
  );
}
