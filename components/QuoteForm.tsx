"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle, Loader2, Send } from "lucide-react";
import { products } from "@/content/products";

// Define Zod validation schema
const quoteFormSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(50, { message: "Name must be under 50 characters" }),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, {
      message: "Please enter a valid 10-digit Indian phone number starting with 6-9",
    }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .or(z.literal("")), // optional email
  interest: z.string().min(1, { message: "Please select a category of interest" }),
  message: z
    .string()
    .min(10, { message: "Please tell us a bit more about your project (min 10 chars)" })
    .max(1000, { message: "Message is too long" }),
});

type QuoteFormValues = z.infer<typeof quoteFormSchema>;

interface QuoteFormProps {
  defaultCategory?: string;
  embedded?: boolean;
}

export default function QuoteForm({ defaultCategory = "", embedded = false }: QuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      interest: defaultCategory,
      message: "",
    },
  });

  const onSubmit = async (data: QuoteFormValues) => {
    setIsSubmitting(true);
    // Simulate database insertion (Supabase API simulation)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submission received:", data);
      setIsSuccess(true);
      reset();
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`rounded-2xl transition-all duration-300 ${
        embedded
          ? "bg-charcoal-900 border border-charcoal-800 p-6 md:p-8"
          : "bg-charcoal-950/80 backdrop-blur-md border border-gold-400/20 p-8 shadow-2xl"
      }`}
    >
      {isSuccess ? (
        <div className="flex flex-col items-center justify-center text-center py-10 space-y-4">
          <div className="w-16 h-16 bg-primary/10 border border-primary rounded-full flex items-center justify-center text-primary animate-pulse">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
            Inquiry Submitted Successfully
          </h3>
          <p className="text-sm text-charcoal-300 max-w-sm">
            Thank you for reaching out to Angel Tiles & Stone Studio. Our showroom manager will contact you on your phone number within the next 2-4 business hours to discuss quotes and block selections.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="mt-4 px-6 py-2 rounded-full bg-primary text-white font-semibold text-xs tracking-widest hover:bg-primary-hover transition-colors"
          >
            SEND ANOTHER ENQUIRY
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <h3 className="font-serif text-xl font-bold text-white tracking-wide">
              Request Slabs Pricing & Quote
            </h3>
            <p className="text-xs text-charcoal-400 mt-1">
              Specify your project requirements and receive quarry direct price estimates.
            </p>
          </div>

          {/* Full Name */}
          <div className="space-y-1">
            <label htmlFor="fullName" className="block text-xs font-semibold text-charcoal-300 tracking-wider">
              FULL NAME *
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="e.g. Rahul Sharma"
              {...register("fullName")}
              className={`w-full bg-charcoal-950 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold-400 placeholder:text-charcoal-600 transition-all ${
                errors.fullName ? "border-red-500" : "border-charcoal-800"
              }`}
            />
            {errors.fullName && (
              <p className="text-xs text-red-500 font-medium">{errors.fullName.message}</p>
            )}
          </div>

          {/* Grid: Phone + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Phone Number */}
            <div className="space-y-1">
              <label htmlFor="phone" className="block text-xs font-semibold text-charcoal-300 tracking-wider">
                PHONE NUMBER (WHATSAPP) *
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="e.g. 98290XXXXX"
                {...register("phone")}
                className={`w-full bg-charcoal-950 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold-400 placeholder:text-charcoal-600 transition-all ${
                  errors.phone ? "border-red-500" : "border-charcoal-800"
                }`}
              />
              {errors.phone && (
                <p className="text-xs text-red-500 font-medium">{errors.phone.message}</p>
              )}
            </div>

            {/* Email (Optional) */}
            <div className="space-y-1">
              <label htmlFor="email" className="block text-xs font-semibold text-charcoal-300 tracking-wider">
                EMAIL ADDRESS
              </label>
              <input
                id="email"
                type="email"
                placeholder="e.g. rahul@example.com"
                {...register("email")}
                className={`w-full bg-charcoal-950 border border-charcoal-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold-400 placeholder:text-charcoal-600 transition-all`}
              />
              {errors.email && (
                <p className="text-xs text-red-500 font-medium">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Product Interest Select */}
          <div className="space-y-1">
            <label htmlFor="interest" className="block text-xs font-semibold text-charcoal-300 tracking-wider">
              MATERIAL OF INTEREST *
            </label>
            <select
              id="interest"
              {...register("interest")}
              className={`w-full bg-charcoal-950 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold-400 transition-all ${
                errors.interest ? "border-red-500" : "border-charcoal-800"
              }`}
            >
              <option value="" disabled>
                -- Select Material --
              </option>
              {products.map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.name}
                </option>
              ))}
              <option value="custom-carvings">Custom Stone Carving / Inlay</option>
              <option value="multiple">Multiple / Other Products</option>
            </select>
            {errors.interest && (
              <p className="text-xs text-red-500 font-medium">{errors.interest.message}</p>
            )}
          </div>

          {/* Project Details message */}
          <div className="space-y-1">
            <label htmlFor="message" className="block text-xs font-semibold text-charcoal-300 tracking-wider">
              PROJECT SPECIFICATIONS / REQUIREMENTS *
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Provide detail on room size, quantity needed in sq ft, slab finish (polished, leathered) or specific marble name..."
              {...register("message")}
              className={`w-full bg-charcoal-950 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold-400 placeholder:text-charcoal-600 transition-all resize-none ${
                errors.message ? "border-red-500" : "border-charcoal-800"
              }`}
            />
            {errors.message && (
              <p className="text-xs text-red-500 font-medium">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-sm tracking-widest transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                TRANSMITTING REQ...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                SUBMIT QUOTE REQUEST
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
