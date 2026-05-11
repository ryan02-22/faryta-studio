import { Instagram, Mail, MessageCircleMore, Music4 } from "lucide-react";
import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site-data";

const socialLinks = [
  { label: "WhatsApp", href: siteConfig.whatsappUrl, icon: MessageCircleMore },
  { label: "Instagram", href: siteConfig.instagramUrl, icon: Instagram },
  { label: "TikTok", href: siteConfig.tiktokUrl, icon: Music4 },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail }
];

export function Footer() {
  return (
    <footer className="pb-10">
      <div className="section-inner overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-8 shadow-luxury sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.7fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">
              {siteConfig.name}
            </p>
            <h2 className="mt-5 max-w-md text-4xl">
              Luxury photography crafted to feel cinematic, personal, and timeless.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--muted)]">
              For couples, families, professionals, communities, and brands who want premium
              visual storytelling with a calm and polished experience.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--muted)]">Navigation</p>
            <div className="mt-5 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[var(--fg)] transition hover:text-[var(--accent)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--muted)]">Social</p>
            <div className="mt-5 flex flex-col gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 text-sm text-[var(--fg)] transition hover:text-[var(--accent)]"
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="gold-divider my-8" />

        <div className="flex flex-col gap-3 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
