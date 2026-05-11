import {
  Aperture,
  BadgeCheck,
  BriefcaseBusiness,
  CakeSlice,
  Camera,
  Flag,
  Gem,
  Globe2,
  GraduationCap,
  Handshake,
  Heart,
  Home,
  Images,
  MapPinned,
  MessageCircle,
  MessageSquareMore,
  PackageSearch,
  ScanSearch,
  Send,
  ShieldCheck,
  Smile,
  TimerReset,
  UsersRound,
  WandSparkles
} from "lucide-react";

export const siteConfig = {
  name: "Faryta Studio",
  tagline: "Mengabadikan momen berharga dengan elegan.",
  siteUrl: "https://faryta-studio.vercel.app",
  phoneDisplay: "+62 896-0407-2195",
  whatsappBase: "https://wa.me/6289604072195",
  whatsappUrl:
    "https://wa.me/6289604072195?text=Halo%20Faryta%20Studio%2C%20saya%20ingin%20booking%20sesi%20foto.",
  instagramUrl: "https://instagram.com/farytastudio",
  tiktokUrl: "https://tiktok.com/@farytastudio",
  email: "hello@farytastudio.com",
  location: "FARYTA STUDIO | cipta memori abadi",
  mapsUrl: "https://maps.app.goo.gl/DqnoQEvMibsjKB4X9",
  mapEmbed: "https://www.google.com/maps?q=-6.9988289,109.1703147&z=17&output=embed",
  heroImage:
    "https://lh3.googleusercontent.com/p/AF1QipNGitC_IQVjgsswM1yGFfMKK3eo6tWC7rmdd9Qv=w1600-h900-k-no",
  aboutImage:
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80"
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Process", href: "#process" },
  { label: "Booking", href: "#booking" },
  { label: "Contact", href: "#contact" }
];

export const heroHighlights = [
  {
    title: "Visual First",
    description: "Luxury direction focused on atmosphere, detail, and emotional presence."
  },
  {
    title: "Flexible Session",
    description: "Available for studio, home service, destination, and event coverage."
  },
  {
    title: "Trusted Finish",
    description: "Clean premium editing with consistent delivery quality for every project."
  }
];

export const aboutCards = [
  {
    title: "Professional Experience",
    description:
      "A polished workflow for private milestones, family portraits, editorial sessions, and corporate documentation."
  },
  {
    title: "Personalized Direction",
    description:
      "We guide wardrobe, posing, timing, and location styling so each frame feels effortless and refined."
  },
  {
    title: "International Taste",
    description:
      "The visual language is clean, cinematic, and modern enough for both local trust and global presentation."
  },
  {
    title: "Premium Hospitality",
    description:
      "Fast responses, friendly consultation, and thoughtful service make the entire experience feel reassuring."
  }
];

export const services = [
  {
    title: "Konsultasi Gratis",
    description:
      "Konsultasi gratis untuk Ide cerita, konsep visual, dan perencanaan sesi foto bersama tim kami.",
    icon: MessageCircle,
    isWhatsapp: true
  },
  {
    title: "Fotografi Wedding",
    description:
      "Dokumentasi pernikahan elegan dengan arahan emosional, komposisi timeless, dan editing editorial.",
    icon: Heart
  },
  {
    title: "Studio Portrait",
    description:
      "Portrait studio premium untuk individu, pasangan, kreator, dan profesional dengan pencahayaan terarah.",
    icon: Aperture
  },
  {
    title: "Sesi Keluarga",
    description:
      "Foto keluarga yang hangat, natural, dan diarahkan dengan nyaman untuk momen lintas generasi.",
    icon: UsersRound
  },
  {
    title: "Khitan / Sunatan",
    description:
      "Dokumentasi khitan yang hangat, rapi, dan penuh kebahagiaan untuk momen penting keluarga.",
    icon: Gem
  },
  {
    title: "Ulang Tahun",
    description:
      "Dokumentasi ulang tahun yang menangkap keceriaan, tamu, dekorasi, dan momen candid terbaik.",
    icon: CakeSlice
  },
  {
    title: "Wisuda",
    description:
      "Foto wisuda klasik dan modern dengan arahan pose percaya diri untuk studio atau kampus.",
    icon: GraduationCap
  },
  {
    title: "Dokumentasi Event",
    description:
      "Dokumentasi acara yang rapi untuk perayaan pribadi, komunitas, launching, dan acara formal.",
    icon: Images
  },
  {
    title: "Home Studio Session",
    description:
      "Pengalaman foto studio premium yang hadir langsung ke rumah untuk kenyamanan Anda.",
    icon: Home
  },
  {
    title: "Corporate Event",
    description:
      "Dokumentasi profesional untuk meeting perusahaan, gala dinner, launching, dan aktivitas brand.",
    icon: BriefcaseBusiness,
    hidden: true
  },
  {
    title: "HUT RI Event",
    description:
      "Dokumentasi penuh energi untuk kegiatan HUT RI, lomba, upacara, dan acara kebersamaan.",
    icon: Flag,
    hidden: true
  },
  {
    title: "Product Photography",
    description:
      "Foto produk komersial yang bersih untuk katalog, media sosial, campaign, dan e-commerce.",
    icon: PackageSearch,
    hidden: true
  },
  {
    title: "Personal Branding",
    description:
      "Foto personal branding untuk founder, pembicara, kreator, dan profil bisnis yang profesional.",
    icon: BadgeCheck,
    hidden: true
  }
];

export const portfolioItems = [
  {
    title: "Modern Wedding Story",
    category: "wedding",
    categoryLabel: "Wedding",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1100&q=80",
    alt: "Bride and groom in elegant wedding setting",
    height: 1400,
    description:
      "A romantic wedding story captured with cinematic light, intimate detail, and elegant emotional pacing."
  },
  {
    title: "Studio Confidence",
    category: "portrait",
    categoryLabel: "Portrait",
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1100&q=80",
    alt: "Confident studio portrait with luxury styling",
    height: 1200,
    description:
      "A premium portrait session focused on presence, clean styling, and modern magazine-inspired direction."
  },
  {
    title: "Family Celebration",
    category: "family",
    categoryLabel: "Family",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1100&q=80",
    alt: "Happy family photo session outdoors",
    height: 1450,
    description:
      "Warm and relaxed family storytelling designed to feel natural, polished, and emotionally lasting."
  },
  {
    title: "Joyful Birthday",
    category: "birthday",
    categoryLabel: "Birthday",
    image:
      "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=1100&q=80",
    alt: "Birthday celebration with premium decor",
    height: 1300,
    description:
      "Colorful celebration imagery balancing festive energy with clean, premium composition."
  },
  {
    title: "Sunatan Milestone",
    category: "sunatan",
    categoryLabel: "Sunatan",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1100&q=80",
    alt: "Family milestone event photography",
    height: 1250,
    description:
      "Thoughtful family-oriented coverage that highlights togetherness, tradition, and a joyful atmosphere."
  },
  {
    title: "Corporate Presence",
    category: "event",
    categoryLabel: "Event",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1100&q=80",
    alt: "Corporate event documentation in premium venue",
    height: 1500,
    description:
      "Reliable documentation for brand, executive, and conference moments with polished professional visuals."
  },
  {
    title: "Editorial Studio Set",
    category: "studio",
    categoryLabel: "Studio",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1100&q=80",
    alt: "Studio photo with dramatic light and refined styling",
    height: 1280,
    description:
      "A studio composition built around shape, shadow, and luxury styling for a refined contemporary look."
  },
  {
    title: "Intimate Engagement",
    category: "wedding",
    categoryLabel: "Wedding",
    image:
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1100&q=80",
    alt: "Engagement couple in natural light",
    height: 1180,
    description:
      "Soft, intimate engagement storytelling with elevated composition and a timeless romantic atmosphere."
  },
  {
    title: "Graduation Portrait",
    category: "portrait",
    categoryLabel: "Portrait",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1100&q=80",
    alt: "Graduation portrait in elegant outfit",
    height: 1380,
    description:
      "A graduation portrait session designed to feel polished, proud, and ready for modern personal branding."
  }
];

export const advantages = [
  {
    title: "Professional Photographer",
    description: "Calm, experienced guidance for both posed and candid moments across varied event settings.",
    icon: ShieldCheck
  },
  {
    title: "High Quality Editing",
    description: "Refined retouching and color grading to keep every gallery clean, elegant, and consistent.",
    icon: WandSparkles
  },
  {
    title: "Fast Delivery",
    description: "An organized workflow that helps clients receive previews and final edits without unnecessary delay.",
    icon: TimerReset
  },
  {
    title: "Friendly Service",
    description: "Warm communication that makes clients feel comfortable and well guided throughout the session.",
    icon: Smile
  },
  {
    title: "Affordable Premium Quality",
    description: "A high-end result with a service style that remains practical and approachable.",
    icon: Handshake
  },
  {
    title: "Flexible Location",
    description: "Available for studio sessions, client homes, destination shoots, and event venues.",
    icon: MapPinned
  },
  {
    title: "International Standard Result",
    description: "Modern, polished imagery suitable for global audiences, brands, and premium personal archives.",
    icon: Globe2
  }
];

export const testimonials = [
  {
    name: "Nadia & Fajar",
    event: "Wedding Photography",
    quote:
      "The photos feel elegant and emotional at the same time. The team made us comfortable, guided every pose gently, and delivered a gallery that looked truly premium."
  },
  {
    name: "Maya Putri",
    event: "Graduation Session",
    quote:
      "I wanted something classy, modern, and not too stiff. The result looked like an editorial portrait but still felt like me."
  },
  {
    name: "PT Rangka Nusantara",
    event: "Corporate Event",
    quote:
      "Fast response, professional coordination, and excellent event coverage. The final images were clean, sharp, and ready for company publication."
  },
  {
    name: "Family of Arsyad",
    event: "Khitan Celebration",
    quote:
      "Our family event was documented beautifully. They captured the important moments and the atmosphere without being intrusive."
  },
  {
    name: "Clarissa Studio",
    event: "Product Photography",
    quote:
      "The product shots looked expensive and polished. Lighting, angles, and editing were exactly what we needed for our campaign assets."
  },
  {
    name: "Raka Community",
    event: "Group & Community Photo",
    quote:
      "Coordinating a large group can be hard, but the shoot stayed smooth and efficient. The result still looked stylish and well composed."
  }
];

export const processSteps = [
  {
    title: "Consultation",
    description:
      "We discuss your event, preferred mood, key priorities, schedule, and the style of photography that best suits the occasion.",
    icon: MessageSquareMore
  },
  {
    title: "Planning",
    description:
      "We align on concepts, wardrobe notes, rundown timing, location, and preparation details for a seamless experience.",
    icon: ScanSearch
  },
  {
    title: "Photoshoot",
    description:
      "The session is directed with calm confidence, premium lighting awareness, and a strong eye for genuine moments.",
    icon: Camera
  },
  {
    title: "Editing",
    description:
      "Selected frames are refined with clean color treatment, polished retouching, and consistent cinematic presentation.",
    icon: WandSparkles
  },
  {
    title: "Delivery",
    description:
      "You receive a curated final gallery ready for sharing, printing, archiving, and premium personal or brand use.",
    icon: Send
  }
];

export const instagramFeed = [
  {
    title: "Editorial Portrait",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80",
    alt: "Editorial portrait preview"
  },
  {
    title: "Wedding Detail",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=80",
    alt: "Wedding detail photography preview"
  },
  {
    title: "Family Mood",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1000&q=80",
    alt: "Family session preview"
  },
  {
    title: "Brand Visuals",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80",
    alt: "Brand photography preview"
  }
];
