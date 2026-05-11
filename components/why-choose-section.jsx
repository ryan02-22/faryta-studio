import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { advantages } from "@/lib/site-data";

export function WhyChooseSection() {
  return (
    <section id="why-us" className="section-shell py-24">
      <div className="section-inner">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Kenapa Memilih Kami"
            title="Standar layanan premium dengan proses kreatif yang ramah dan terpercaya."
            description="Kami menggabungkan eksekusi profesional dengan pelayanan yang hangat, sehingga klien merasa percaya diri sebelum, selama, dan setelah sesi foto."
          />
        </AnimatedSection>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {advantages.map((item, index) => {
            const Icon = item.icon;

            return (
              <AnimatedSection key={item.title} delay={index * 0.04}>
                <div className="glass-card h-full p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
