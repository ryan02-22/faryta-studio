# Faryta Studio

Website fotografi premium yang dibangun dengan Next.js, Tailwind CSS, dan Framer Motion.

## Menjalankan Lokal

```powershell
cd C:\Faryta-Studio
cmd /c npm run dev
```

Buka `http://localhost:3000`.

Jika port `3000` sedang dipakai:

```powershell
cmd /c npm run dev -- --port 3001
```

## Command Berguna

```powershell
cmd /c npm run lint
cmd /c npm run build
cmd /c npm start
```

## Struktur Project

```text
app/                 Route Next.js, metadata SEO, sitemap, robots, dan CSS global
components/          Section halaman dan komponen UI yang dipakai ulang
lib/data/            Konten website yang bisa diedit berdasarkan section
lib/site-data.js     File export stabil yang dipakai komponen
public/              Aset statis
```

Hindari mengedit `.next/` karena folder itu dibuat otomatis oleh Next.js.
