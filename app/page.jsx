import { AboutSection } from "@/components/about-section";
import { BookingSection } from "@/components/booking-section";
import { ContactSection } from "@/components/contact-section";
import { FloatingWhatsapp } from "@/components/floating-whatsapp";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { InstagramSection } from "@/components/instagram-section";
import { Navbar } from "@/components/navbar";
import { PortfolioSection } from "@/components/portfolio-section";
import { ProcessSection } from "@/components/process-section";
import { ServicesSection } from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { WhyChooseSection } from "@/components/why-choose-section";
import { siteConfig, services } from "@/lib/site-data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  image: siteConfig.heroImage,
  url: siteConfig.siteUrl,
  telephone: siteConfig.phoneDisplay,
  email: siteConfig.email,
  areaServed: ["Indonesia", "International"],
  description:
    "Premium photography studio for weddings, portraits, family sessions, events, personal branding, and corporate documentation.",
  serviceType: services.map((service) => service.title),
  sameAs: [siteConfig.instagramUrl, siteConfig.tiktokUrl, siteConfig.whatsappUrl]
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="relative overflow-hidden">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <ProcessSection />
        <InstagramSection />
        <BookingSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
