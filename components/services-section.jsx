import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { services, siteConfig } from "@/lib/site-data";

export function ServicesSection() {
  return (
    <section id="services" className="section-shell py-24">
      <div className="section-inner">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Layanan Unggulan"
            title="Layanan fotografi lengkap untuk momen pribadi dan acara profesional."
            description="Mulai dari wedding, foto keluarga, dokumentasi corporate, hingga campaign produk, setiap layanan dirancang dengan arahan elegan, editing premium, dan alur kerja yang nyaman untuk klien."
            align="center"
          />
        </AnimatedSection>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.filter(service => !service.hidden).map((service, index) => {
            const Icon = service.icon;

            return (
              <AnimatedSection key={service.title} delay={index * 0.03}>
                <div className="group glass-card flex h-full flex-col p-7 transition duration-300 hover:-translate-y-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)] transition duration-300 group-hover:scale-105">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-3xl">{service.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-[var(--muted)]">
                    {service.description}
                  </p>
                  {service.isWhatsapp ? (
                    <a
                      href={siteConfig.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(37,211,102,0.45)] overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                        <MessageCircleMore className="h-4 w-4" />
                      </span>
                      <span className="relative">Konsultasi Sekarang</span>
                    </a>
                  ) : (
                    <Link
                      href="#booking"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--fg)] transition group-hover:text-[var(--accent)]"
                    >
                      Lihat Detail
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
