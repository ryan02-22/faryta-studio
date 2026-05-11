import {
  Instagram,
  Mail,
  MapPin,
  MessageCircleMore,
  Music4,
  Navigation
} from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site-data";

const contactCards = [
  {
    title: "WhatsApp",
    value: siteConfig.phoneDisplay,
    href: siteConfig.whatsappUrl,
    icon: MessageCircleMore
  },
  {
    title: "Instagram",
    value: "@farytastudio",
    href: siteConfig.instagramUrl,
    icon: Instagram
  },
  {
    title: "TikTok",
    value: "@farytastudio",
    href: siteConfig.tiktokUrl,
    icon: Music4
  },
  {
    title: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail
  },
  {
    title: "Lokasi",
    value: siteConfig.location,
    href: siteConfig.mapsUrl,
    icon: MapPin
  }
];

export function ContactSection() {
  return (
    <section id="contact" className="section-shell pb-24 pt-24">
      <div className="section-inner grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <AnimatedSection>
          <div className="glass-card h-full p-8 sm:p-10">
            <SectionHeading
              eyebrow="Hubungi Kami"
              title="Hubungi studio melalui channel yang paling nyaman untuk Anda."
              description="Baik untuk wedding, corporate event, maupun sesi portrait pribadi, kami siap membantu dengan konsultasi yang rapi dan responsif."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {contactCards.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-[1.5rem] border border-[var(--line)] bg-white/5 p-5 transition hover:-translate-y-1 hover:border-[var(--accent)]/30"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
                      {item.title}
                    </p>
                    <p className="mt-2 text-lg leading-7">{item.value}</p>
                  </Link>
                );
              })}
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-[var(--line)] bg-white/5 p-5">
              <div className="flex items-center gap-3">
                <Navigation className="h-5 w-5 text-[var(--accent)]" />
                <p className="text-lg">Melayani sesi studio, home service, dan lokasi pilihan</p>
              </div>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                Tersedia untuk booking lokal, sesi di lokasi pilihan, dan klien yang membutuhkan
                presentasi visual berstandar profesional.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.08}>
          <div className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-3 shadow-luxury">
            <iframe
              title="Peta lokasi studio"
              src={siteConfig.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[560px] w-full rounded-[1.5rem]"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
