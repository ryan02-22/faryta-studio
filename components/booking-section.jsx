"use client";

import { CalendarClock, MessageCircleMore, SendHorizontal } from "lucide-react";
import { useState } from "react";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { services, siteConfig } from "@/lib/site-data";

const defaultForm = {
  name: "",
  phone: "",
  email: "",
  eventType: "Fotografi Wedding",
  date: "",
  location: "",
  message: ""
};

export function BookingSection() {
  const [form, setForm] = useState(defaultForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

const buildBookingMessage = () => {
    const lines = [
      "Halo Faryta Studio, saya ingin booking sesi foto.",
      `Nama: ${form.name}`,
      `Telepon: ${form.phone}`,
      `Email: ${form.email}`,
      `Jenis Acara: ${form.eventType}`,
      `Tanggal: ${form.date || "-"}`,
      `Lokasi: ${form.location || "-"}`,
      `Pesan: ${form.message || "-"}`
    ];

    return `${siteConfig.whatsappBase}?text=${encodeURIComponent(lines.join("\n"))}`;
  };

  const buildKonsultasiMessage = () => {
    const lines = [
      "Halo Faryta Studio, saya ingin konsultasi gratis.",
      `Nama: ${form.name || "-"}`,
      `Telepon: ${form.phone || "-"}`
    ];

    return `${siteConfig.whatsappBase}?text=${encodeURIComponent(lines.join("\n"))}`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.open(buildBookingMessage(), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="booking" className="section-shell py-24">
      <div className="section-inner grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <AnimatedSection>
          <div className="glass-card h-full p-8 sm:p-10">
            <SectionHeading
              eyebrow="Booking Mudah"
              title="Ceritakan acara Anda dan booking hanya dalam beberapa menit."
              description="Isi informasi dasar, lalu kami lanjutkan konsultasi melalui WhatsApp agar koordinasi cepat dan nyaman."
            />

            <div className="mt-8 space-y-5">
              <div className="rounded-[1.5rem] border border-[var(--line)] bg-white/5 p-5">
                <div className="flex items-center gap-3">
                  <CalendarClock className="h-5 w-5 text-[var(--accent)]" />
                  <p className="text-lg">Jadwal fleksibel untuk sesi studio dan lokasi pilihan</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  Cocok untuk wedding, foto keluarga, wisuda, corporate, acara sekolah, ulang
                  tahun, dan kebutuhan campaign brand.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-[var(--line)] bg-white/5 p-5">
                <div className="flex items-center gap-3">
                  <MessageCircleMore className="h-5 w-5 text-[var(--accent)]" />
                  <p className="text-lg">Respon cepat melalui konsultasi WhatsApp</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  Kami bantu menentukan mood, timeline, saran busana, ide lokasi, dan paket
                  layanan yang paling sesuai dengan kebutuhan Anda.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.08}>
          <form onSubmit={handleSubmit} className="glass-card p-8 sm:p-10">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-[var(--muted)]">
                  Nama
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Nama lengkap Anda"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm text-[var(--muted)]">
                  Telepon
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Nomor WhatsApp"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-[var(--muted)]">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="eventType" className="mb-2 block text-sm text-[var(--muted)]">
                  Jenis Acara
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={form.eventType}
                  onChange={handleChange}
                  className="form-input"
                >
                  {services.filter(service => !service.hidden).map((service) => (
                    <option key={service.title} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="date" className="mb-2 block text-sm text-[var(--muted)]">
                  Tanggal
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="location" className="mb-2 block text-sm text-[var(--muted)]">
                  Lokasi
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  value={form.location}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Kota atau venue"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm text-[var(--muted)]">
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={form.message}
                onChange={handleChange}
                className="form-input resize-none"
                placeholder="Ceritakan mood, jumlah tamu, referensi gaya, atau request khusus."
              />
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-7 text-[var(--muted)]">
                Setelah dikirim, permintaan booking akan langsung terbuka di WhatsApp.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => window.open(buildKonsultasiMessage(), "_blank", "noopener,noreferrer")}
                  className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(37,211,102,0.45)] overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                    <MessageCircleMore className="h-4 w-4" />
                  </span>
                  <span className="relative">Konsultasi Gratis</span>
                </button>
                <button
                  type="submit"
                  className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[var(--accent)] via-[var(--accent)] to-[var(--accent-strong)] px-6 py-3 text-sm font-semibold text-[#0e1119] shadow-[0_8px_30px_rgba(216,180,106,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(216,180,106,0.4)] overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#0e1119]/20 backdrop-blur-sm">
                    <SendHorizontal className="h-4 w-4" />
                  </span>
                  <span className="relative">Booking via WhatsApp</span>
                </button>
              </div>
            </div>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}
