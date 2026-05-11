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
  konsultasiWhatsappUrl:
    "https://wa.me/6289604072195?text=Halo%20Faryta%20Studio%2C%20saya%20ingin%20konsultasi%20gratis%20mengenai%20sesi%20foto.",
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
  { label: "Tentang", href: "#about" },
  { label: "Layanan", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Kenapa Kami", href: "#why-us" },
  { label: "Testimoni", href: "#testimonials" },
  { label: "Proses", href: "#process" },
  { label: "Booking", href: "#booking" },
  { label: "Kontak", href: "#contact" }
];

export const heroHighlights = [
  {
    title: "Visual Unggul",
    description: "Arahan luxury berfokus pada suasana, detail, dan kehadiran emosional."
  },
  {
    title: "Sesi Fleksibel",
    description: "Tersedia untuk studio, home service, destinasi, dan dokumentasi acara."
  },
  {
    title: "Finishing Terpercaya",
    description: "Editing premium bersih dengan kualitas pengiriman konsisten untuk setiap proyek."
  }
];

export const aboutCards = [
  {
    title: "Pengalaman Profesional",
    description:
      "Alur kerja rapi untuk momen pribadi, foto keluarga, sesi editorial, dan dokumentasi korporat."
  },
  {
    title: "Arahan Personal",
    description:
      "Kami pandu wardrobe, pose, waktu, dan styling lokasi agar setiap frame terasa effortless dan refined."
  },
  {
    title: "Taste Internasional",
    description:
      "Bahasa visual bersih, sinematik, dan modern cukup untuk kepercayaan lokal dan presentasi global."
  },
  {
    title: "Hospitaliti Premium",
    description:
      "Respon cepat, konsultasi ramah, dan layanan penuh perhatian membuat pengalaman terasa meyakinkan."
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
    title: "Story Wedding Modern",
    category: "wedding",
    categoryLabel: "Wedding",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1100&q=80",
    alt: "Pengantin di suasana pernikahan elegan",
    height: 1400,
    description:
      "Story wedding romantis yang ditangkap dengan cahaya sinematik, detail intim, dan pacing emosional elegan."
  },
  {
    title: "Confidence Studio",
    category: "portrait",
    categoryLabel: "Portrait",
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1100&q=80",
    alt: "Portrait studio dengan styling luxury",
    height: 1200,
    description:
      "Sesi portrait premium berfokus pada kehadiran, styling bersih, dan arahan modern magazine-inspired."
  },
  {
    title: "Celebrasi Keluarga",
    category: "family",
    categoryLabel: "Family",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1100&q=80",
    alt: "Sesi foto keluarga bahagia outdoor",
    height: 1450,
    description:
      "Family storytelling hangat dan relaxed yang dirancang untuk terasa natural, polished, dan emosional."
  },
  {
    title: "Ulang Tahun Ceria",
    category: "birthday",
    categoryLabel: "Birthday",
    image:
      "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=1100&q=80",
    alt: "Celebrasi ulang tahun dengan dekor premium",
    height: 1300,
    description:
      "Imagery celebration berwarna yang menyeimbangkan energi festif dengan komposisi premium bersih."
  },
  {
    title: "Momen Sunatan",
    category: "sunatan",
    categoryLabel: "Sunatan",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1100&q=80",
    alt: "Dokumentasi acara keluarga",
    height: 1250,
    description:
      "Cakupan keluarga-oriented yang menonjolkan kebersamaan, tradisi, dan suasana penuh kegembiraan."
  },
  {
    title: "Korporat Presence",
    category: "event",
    categoryLabel: "Event",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1100&q=80",
    alt: "Dokumentasi event korporat di venue premium",
    height: 1500,
    description:
      "Dokumentasi terpercaya untuk momen brand, eksekutif, dan conference dengan visual profesional polished."
  },
  {
    title: "Editorial Studio Set",
    category: "studio",
    categoryLabel: "Studio",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1100&q=80",
    alt: "Foto studio dengan cahaya dramatis dan styling refined",
    height: 1280,
    description:
      "Komposisi studio yang dibangun sekitar shape, shadow, dan styling luxury untuk tampilan kontemporer refined."
  },
  {
    title: "Engagement Intimate",
    category: "wedding",
    categoryLabel: "Wedding",
    image:
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1100&q=80",
    alt: "Pasangan engagement di natural light",
    height: 1180,
    description:
      "Soft, intimate engagement storytelling dengan komposisi elevated dan atmosfer romantis timeless."
  },
  {
    title: "Portrait Wisuda",
    category: "portrait",
    categoryLabel: "Portrait",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1100&q=80",
    alt: "Portrait wisuda dengan outfit elegan",
    height: 1380,
    description:
      "Sesi portrait wisuda yang dirancang untuk terasa polished, proud, dan siap untuk personal branding modern."
  }
];

export const advantages = [
  {
    title: "Fotografer Profesional",
    description: "Arahan tenang dan berpengalaman untuk pose dan momen candid di berbagai setting acara.",
    icon: ShieldCheck
  },
  {
    title: "Editing Kualitas Tinggi",
    description: "Retouching dan color grading refined untuk menjaga setiap galeri bersih, elegan, dan konsisten.",
    icon: WandSparkles
  },
  {
    title: "Pengiriman Cepat",
    description: "Alur kerja terorganisir yang membantu klien menerima preview dan edit final tanpa delay.",
    icon: TimerReset
  },
  {
    title: "Layanan Ramah",
    description: "Komunikasi hangat yang membuat klien merasa nyaman dan terbimbing sepanjang sesi.",
    icon: Smile
  },
  {
    title: "Kualitas Premium Terjangkau",
    description: "Hasil high-end dengan gaya layanan yang tetap praktis dan approachable.",
    icon: Handshake
  },
  {
    title: "Lokasi Fleksibel",
    description: "Tersedia untuk sesi studio, rumah klien, destinasi, dan venue acara.",
    icon: MapPinned
  },
  {
    title: "Standar Internasional",
    description: "Imagery modern dan polished yang cocok untuk audiens global, brand, dan arsip premium.",
    icon: Globe2
  }
];

export const testimonials = [
  {
    name: "Nadia & Fajar",
    event: "Fotografi Wedding",
    quote:
      "Foto-fotonya terasa elegan dan emosional sekaligus. Tim membuat kami nyaman, membimbing setiap pose dengan lembut, dan menghasilkan galeri yang terlihat premium banget."
  },
  {
    name: "Maya Putri",
    event: "Sesi Wisuda",
    quote:
      "Saya ingin sesuatu yang classy, modern, dan tidak terlalu kaku. Hasilnya terlihat seperti portrait editorial tapi tetap terasa seperti aku."
  },
  {
    name: "PT Rangka Nusantara",
    event: "Event Korporat",
    quote:
      "Respon cepat, koordinasi profesional, dan dokumentasi event excellent. Imagenya bersih, tajam, dan siap untuk publikasi perusahaan."
  },
  {
    name: "Keluarga Arsyad",
    event: "Celebrasi Khitan",
    quote:
      "Acara keluarga kami didokumentasikan dengan indah. Mereka menangkap momen penting dan suasana tanpa terasa intrusif."
  },
  {
    name: "Clarissa Studio",
    event: "Fotografi Produk",
    quote:
      "Foto produk terlihat expensive dan polished. Pencahayaan, angle, dan editing persis seperti yang kami butuhkan untuk campaign assets."
  },
  {
    name: "Raka Community",
    event: "Foto Grup & Komunitas",
    quote:
      "Mengkoordinasikan grup besar bisa sulit, tapi sesi tetap smooth dan efisien. Hasilnya tetap stylish dan well composed."
  }
];

export const processSteps = [
  {
    title: "Konsultasi",
    description:
      "Kami diskusikan acara Anda, mood yang diinginkan, prioritas kunci, jadwal, dan gaya fotografi yang paling cocok untuk kesempatan ini.",
    icon: MessageSquareMore
  },
  {
    title: "Perencanaan",
    description:
      "Kami sejalan pada konsep, catatan wardrobe, rundown timing, lokasi, dan detail persiapan untuk pengalaman yang seamless.",
    icon: ScanSearch
  },
  {
    title: "Sesi Foto",
    description:
      "Sesi diarahkan dengan kepercayaan tenang, kesadaran pencahayaan premium, dan mata tajam untuk momen genuine.",
    icon: Camera
  },
  {
    title: "Editing",
    description:
      "Frame terpilih diperhalus dengan treatment warna bersih, retouching polished, dan presentasi sinematik konsisten.",
    icon: WandSparkles
  },
  {
    title: "Pengiriman",
    description:
      "Anda menerima galeri final yang kurasi siap untuk sharing, printing, archiving, dan penggunaan premium personal atau brand.",
    icon: Send
  }
];

export const instagramFeed = [
  {
    title: "Editorial Portrait",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80",
    alt: "Preview editorial portrait"
  },
  {
    title: "Detail Wedding",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=80",
    alt: "Preview fotografi detail wedding"
  },
  {
    title: "Mood Keluarga",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1000&q=80",
    alt: "Preview sesi keluarga"
  },
  {
    title: "Visual Brand",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80",
    alt: "Preview fotografi brand"
  }
];
