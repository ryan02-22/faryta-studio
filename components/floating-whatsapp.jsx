"use client";

import { motion } from "framer-motion";
import { MessageCircleMore } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-data";

export function FloatingWhatsapp() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="fixed bottom-5 right-5 z-50"
    >
      <Link
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-3 rounded-full border border-[var(--line)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--fg)] shadow-luxury backdrop-blur-xl transition hover:-translate-y-1"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-[#081118]">
          <MessageCircleMore className="h-5 w-5" />
        </span>
        Booking WhatsApp
      </Link>
    </motion.div>
  );
}
