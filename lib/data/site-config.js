const brand = {
  name: "Faryta Studio",
  tagline: "Capturing timeless moments with elegance.",
  siteUrl: "https://faryta-studio.vercel.app",
  googleSiteVerification: "7g5NJf9wRwvqtv_AqE3zq8CQOPQG1IhMcein15eF3_M"
};

const contact = {
  phoneDisplay: "+62 852-2998-8589",
  whatsappBase: "https://wa.me/6285229988589",
  whatsappUrl:
    "https://wa.me/6285229988589?text=Hello%20Faryta%20Studio%2C%20I%20would%20like%20to%20book%20a%20session.",
  instagramUrl: "https://instagram.com/farytastudio",
  tiktokUrl: "https://tiktok.com/@farytastudio",
  email: "hello@farytastudio.com"
};

const studioLocation = {
  label: "FARYTA STUDIO | cipta memori abadi",
  mapsUrl: "https://maps.app.goo.gl/DqnoQEvMibsjKB4X9",
  mapEmbed: "https://www.google.com/maps?q=-6.9988289,109.1703147&z=17&output=embed"
};

const media = {
  heroImage:
    "https://lh3.googleusercontent.com/p/AF1QipNGitC_IQVjgsswM1yGFfMKK3eo6tWC7rmdd9Qv=w1600-h900-k-no",
  aboutImage:
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80"
};

export const siteConfig = {
  ...brand,
  ...contact,
  location: studioLocation.label,
  mapsUrl: studioLocation.mapsUrl,
  mapEmbed: studioLocation.mapEmbed,
  ...media
};
