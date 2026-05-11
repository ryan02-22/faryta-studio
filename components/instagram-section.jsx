import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { instagramFeed, siteConfig } from "@/lib/site-data";

export function InstagramSection() {
  return (
    <section id="journal" className="section-shell py-24">
      <div className="section-inner">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Preview Instagram"
            title="Cuplikan moodboard visual dari feed sosial kami."
            description="Sekilas suasana, styling, dan arah storytelling yang bisa Anda rasakan dalam sesi portrait, perayaan, maupun kebutuhan komersial."
            align="center"
          />
        </AnimatedSection>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {instagramFeed.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.04}>
              <Link
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-[1.75rem] border border-[var(--line)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1280px) 22vw, (min-width: 768px) 45vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060b14] via-[#060b14]/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                      @farytastudio
                    </p>
                    <div className="mt-2 flex items-center justify-between gap-3">
                      <h3 className="text-2xl text-white">{item.title}</h3>
                      <ArrowUpRight className="h-5 w-5 text-white transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
