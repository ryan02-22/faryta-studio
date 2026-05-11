import { Star } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/lib/site-data";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-shell py-24">
      <div className="section-inner">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Kata Klien"
            title="Kesan klien setelah merasakan pengalaman bersama studio."
            description="Kepercayaan dibangun melalui komunikasi yang lancar, arahan yang tenang, hasil elegan, dan proses delivery yang terasa rapi sejak awal."
            align="center"
          />
        </AnimatedSection>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <AnimatedSection key={item.name} delay={index * 0.04}>
              <div className="glass-card h-full p-7">
                <div className="flex items-center gap-1 text-[var(--accent)]">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-6 text-sm leading-7 text-[var(--fg)]">{item.quote}</p>
                <div className="gold-divider my-6" />
                <p className="text-lg">{item.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
                  {item.event}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
