const brand = {
  name: "Faryta Studio",
  tagline: "Mengabadikan momen berharga dengan elegan.",
  siteUrl: "https://faryta-studio.vercel.app",
  googleSiteVerification: "7g5NJf9wRwvqtv_AqE3zq8CQOPQG1IhMcein15eF3_M"
};

const contact = {
  phoneDisplay: "+62 896-0407-2195",
  whatsappBase: "https://wa.me/6289604072195",
  whatsappUrl:
    "https://wa.me/6289604072195?text=Halo%20Faryta%20Studio%2C%20saya%20ingin%20booking%20sesi%20foto.",
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
