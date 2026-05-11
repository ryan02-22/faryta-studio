import { Award, Camera, Globe2, HeartHandshake } from "lucide-react";
import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { aboutCards, siteConfig } from "@/lib/site-data";

const icons = [Camera, HeartHandshake, Globe2, Award];

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="section-inner grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--line)]">
            <div className="absolute left-6 top-6 z-10 glass-card px-5 py-3">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                About {siteConfig.name}
              </p>
            </div>
            <Image
              src={siteConfig.aboutImage}
              alt="Professional photographer preparing a studio session"
              width={900}
              height={1200}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#060b14] via-[#060b14]/50 to-transparent p-8">
              <p className="max-w-sm text-sm leading-7 text-white/75">
                Every session is directed with calm confidence, elegant lighting, and a deep focus
                on genuine emotion.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <SectionHeading
            eyebrow="About The Studio"
            title="Built for stories that deserve more than ordinary documentation."
            description="We blend cinematic direction, refined composition, and warm hospitality to create imagery that feels premium, trustworthy, and memorable for clients in Indonesia and beyond."
          />

          <div className="mt-8 space-y-5">
            <p className="section-copy">
              Faryta Studio is designed for couples, families, professionals, communities, and
              brands who want a visual experience that feels organized, elevated, and emotionally
              resonant. From intimate portraits to large-scale celebrations, we keep the process
              smooth while preserving the atmosphere that makes each event unique.
            </p>
            <p className="section-copy">
              Our approach centers on thoughtful preparation, clear communication, flattering
              direction, and polished editing. The result is a consistent premium standard that
              feels natural, modern, and internationally presentable.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {aboutCards.map((card, index) => {
              const Icon = icons[index % icons.length];

              return (
                <div key={card.title} className="glass-card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-2xl">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{card.description}</p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
