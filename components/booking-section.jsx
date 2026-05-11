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

const buildWhatsappMessage = () => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    window.open(buildWhatsappMessage(), "_blank", "noopener,noreferrer");
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
                  {services.map((service) => (
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
              <button type="submit" className="btn-primary">
                Booking via WhatsApp
                <SendHorizontal className="h-4 w-4" />
              </button>
            </div>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}
