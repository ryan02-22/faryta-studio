"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { portfolioItems } from "@/lib/site-data";

const categories = [
  { label: "Semua", value: "all" },
  { label: "Wedding", value: "wedding" },
  { label: "Portrait", value: "portrait" },
  { label: "Ulang Tahun", value: "birthday" },
  { label: "Sunatan", value: "sunatan" },
  { label: "Event", value: "event" },
  { label: "Studio", value: "studio" },
  { label: "Keluarga", value: "family" }
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") {
      return portfolioItems;
    }

    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }
    };

    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedItem]);

  return (
    <section id="portfolio" className="section-shell py-24">
      <div className="section-inner">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Galeri Portofolio"
            title="Cerita visual dalam galeri modern bergaya sinematik dan editorial."
            description="Jelajahi pilihan foto dari wedding, portrait studio, momen keluarga, ulang tahun, sunatan, dan dokumentasi event yang rapi."
            align="center"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.05} className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.value}
              type="button"
              onClick={() => setActiveCategory(category.value)}
              aria-pressed={activeCategory === category.value}
              className={`rounded-full px-5 py-3 text-sm font-medium transition ${
                activeCategory === category.value
                  ? "bg-[var(--accent)] text-[#10141d]"
                  : "border border-[var(--line)] bg-white/5 text-[var(--muted)] hover:text-[var(--fg)]"
              }`}
            >
              {category.label}
            </button>
          ))}
        </AnimatedSection>

        <div className="mt-12 columns-1 gap-6 sm:columns-2 xl:columns-3">
          {filteredItems.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.03} className="mb-6 break-inside-avoid">
              <button
                type="button"
                onClick={() => setSelectedItem(item)}
                className="group relative block w-full overflow-hidden rounded-[1.75rem] border border-[var(--line)] text-left"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={900}
                  height={item.height}
                  sizes="(min-width: 1280px) 28vw, (min-width: 640px) 44vw, 92vw"
                  className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060b14] via-[#060b14]/15 to-transparent opacity-100 transition duration-300" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent)]">
                      {item.categoryLabel}
                    </p>
                    <h3 className="mt-2 text-3xl text-white">{item.title}</h3>
                  </div>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem ? (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/82 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a111d]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white transition hover:bg-black/50"
                aria-label="Tutup preview"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className="relative min-h-[380px]">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.alt}
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-10">
                  <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent)]">
                    {selectedItem.categoryLabel}
                  </p>
                  <h3 className="mt-4 text-4xl text-white">{selectedItem.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-white/70">{selectedItem.description}</p>
                  <div className="gold-divider my-6" />
                  <p className="text-sm leading-7 text-white/70">
                    Diarahkan dengan teliti untuk menyeimbangkan elegansi, emosi, dan visual
                    premium bagi klien yang menghargai foto timeless.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
