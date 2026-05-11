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
    default: `${siteConfig.name} | Premium Photography Studio`,
    template: `%s | ${siteConfig.name}`
  },
  description:
    "Luxury photography website for weddings, portraits, family moments, corporate events, and cinematic visual storytelling.",
  keywords: [
    "photography studio",
    "wedding photography",
    "portrait studio",
    "family photo",
    "event documentation",
    "corporate photography",
    "premium photographer",
    "Jakarta photographer",
    "international photography studio"
  ],
  openGraph: {
    title: `${siteConfig.name} | Premium Photography Studio`,
    description:
      "Capturing timeless moments with elegance for weddings, portraits, private milestones, and corporate events.",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: siteConfig.heroImage,
        width: 1600,
        height: 900,
        alt: `${siteConfig.name} luxury photography hero`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Premium Photography Studio`,
    description:
      "Luxury photography crafted for weddings, portraits, family celebrations, and brand storytelling.",
    images: [siteConfig.heroImage]
  },
  alternates: {
    canonical: siteConfig.siteUrl
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${bodyFont.variable} ${displayFont.variable} site-shell`}>
        {children}
      </body>
    </html>
  );
}
