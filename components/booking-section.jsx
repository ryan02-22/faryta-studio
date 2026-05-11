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
  eventType: "Wedding Photography",
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
      "Hello Faryta Studio, I would like to book a session.",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Event Type: ${form.eventType}`,
      `Date: ${form.date || "-"}`,
      `Location: ${form.location || "-"}`,
      `Message: ${form.message || "-"}`
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
              eyebrow="Easy Booking"
              title="Tell us about your event and book in minutes."
              description="Share the basics, and we will continue the consultation through WhatsApp for fast, friendly coordination."
            />

            <div className="mt-8 space-y-5">
              <div className="rounded-[1.5rem] border border-[var(--line)] bg-white/5 p-5">
                <div className="flex items-center gap-3">
                  <CalendarClock className="h-5 w-5 text-[var(--accent)]" />
                  <p className="text-lg">Flexible schedule for studio and on-location sessions</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  Perfect for weddings, family portraits, graduation, corporate, school events,
                  birthday celebrations, and brand campaigns.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-[var(--line)] bg-white/5 p-5">
                <div className="flex items-center gap-3">
                  <MessageCircleMore className="h-5 w-5 text-[var(--accent)]" />
                  <p className="text-lg">Fast response through WhatsApp consultation</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  We help with mood, timeline, wardrobe advice, location ideas, and the most
                  suitable service package for your needs.
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
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm text-[var(--muted)]">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="WhatsApp number"
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
                  Event Type
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
                  Date
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
                  Location
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  value={form.location}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="City or venue"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm text-[var(--muted)]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={form.message}
                onChange={handleChange}
                className="form-input resize-none"
                placeholder="Tell us the mood, guest count, style reference, or any special request."
              />
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-7 text-[var(--muted)]">
                By sending this form, your request opens directly in WhatsApp for quick booking.
              </p>
              <button type="submit" className="btn-primary">
                WhatsApp Booking
                <SendHorizontal className="h-4 w-4" />
              </button>
            </div>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}
