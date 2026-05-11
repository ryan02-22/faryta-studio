import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { processSteps } from "@/lib/site-data";

export function ProcessSection() {
  return (
    <section id="process" className="section-shell py-24">
      <div className="section-inner">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Simple Process"
            title="A modern booking journey that keeps everything clear and stress-free."
            description="Every project is handled through a structured timeline so clients know what to expect at each stage, from the first chat to the final gallery delivery."
          />
        </AnimatedSection>

        <div className="relative mt-14">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-[var(--accent)] via-[var(--line)] to-transparent lg:hidden" />
          <div className="absolute left-0 right-0 top-11 hidden h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent lg:block" />

          <div className="grid gap-6 lg:grid-cols-5">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <AnimatedSection key={step.title} delay={index * 0.05}>
                  <div className="relative h-full pl-16 lg:pl-0">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface-strong)] text-[var(--accent)] lg:left-1/2 lg:-translate-x-1/2">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="glass-card mt-4 h-full p-6 pt-8 lg:mt-14">
                      <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent)]">
                        Step {index + 1}
                      </p>
                      <h3 className="mt-4 text-2xl">{step.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
