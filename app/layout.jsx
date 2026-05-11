import { Cormorant_Garamond, Manrope } from "next/font/google";
import { siteConfig } from "@/lib/site-data";
import "./globals.css";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display"
});

export const metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} | Studio Fotografi Profesional`,
    template: `%s | ${siteConfig.name}`
  },
  description:
    "Studio fotografi profesional untuk wedding, portrait, keluarga, event, corporate, produk, dan dokumentasi visual sinematik.",
  keywords: [
    "studio fotografi",
    "jasa fotografer",
    "wedding photography",
    "foto studio",
    "foto keluarga",
    "dokumentasi event",
    "fotografer profesional",
    "fotografer wedding",
    "fotografi produk"
  ],
  openGraph: {
    title: `${siteConfig.name} | Studio Fotografi Profesional`,
    description:
      "Mengabadikan momen berharga dengan elegan untuk wedding, portrait, keluarga, acara pribadi, dan corporate event.",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: siteConfig.heroImage,
        width: 1600,
        height: 900,
        alt: `${siteConfig.name} hero fotografi premium`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Studio Fotografi Profesional`,
    description:
      "Jasa fotografi premium untuk wedding, portrait, keluarga, event, produk, dan kebutuhan brand.",
    images: [siteConfig.heroImage]
  },
  alternates: {
    canonical: siteConfig.siteUrl
  },
  verification: {
    google: siteConfig.googleSiteVerification
  },
  icons: {
    icon: "/favicon.svg"
  }
};

function ThemeScript() {
  const script = `
    try {
      const stored = window.localStorage.getItem('faryta-theme');
      const theme = stored || 'dark';
      document.documentElement.dataset.theme = theme;
    } catch (error) {
      document.documentElement.dataset.theme = 'dark';
    }
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${bodyFont.variable} ${displayFont.variable} site-shell`}>
        {children}
      </body>
    </html>
  );
}
