"use client";

import { motion } from "framer-motion";
import { ArrowRight, CirclePlay, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { heroHighlights, siteConfig } from "@/lib/site-data";

export function HeroSection() {
  return (
    <section id="home" className="section-shell relative min-h-screen pt-28">
      <div className="section-inner relative flex min-h-[calc(100vh-7rem)] items-center overflow-hidden rounded-[2.25rem] border border-[var(--line)]">
        <Image
          src={siteConfig.heroImage}
          alt="Luxury photography hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,11,20,0.88),rgba(6,11,20,0.52),rgba(6,11,20,0.72))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,180,106,0.18),transparent_25%)]" />

        <div className="relative grid w-full gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              International-style luxury visual experience
            </span>
            <h1 className="mt-7 max-w-4xl text-5xl leading-[0.92] text-white sm:text-6xl lg:text-8xl">
              Capturing Timeless Moments with Elegance
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              Faryta Studio creates cinematic photography for weddings, portraits, families,
              milestone celebrations, and corporate stories with a polished workflow that feels
              effortless from the first consultation to final delivery.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="#booking" className="btn-primary">
                Book Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#portfolio" className="btn-secondary">
                View Portfolio
                <CirclePlay className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {heroHighlights.map((item) => (
                <div key={item.title} className="glass-card p-4">
                  <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent)]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/80">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-end justify-end"
          >
            <div className="glass-card max-w-sm p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent)]">
                Signature Experience
              </p>
              <div className="gold-divider my-5" />
              <h2 className="text-3xl text-white">Luxury visuals with warm, guided service.</h2>
              <p className="mt-4 text-sm leading-7 text-white/75">
                Designed for clients who want magazine-inspired frames, organized communication,
                and timeless editing that still feels deeply personal.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/80">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  Wedding and private events
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  Studio and on-location sessions
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  Local and international-ready branding
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  Fast, curated delivery workflow
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
