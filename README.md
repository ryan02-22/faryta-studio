# Faryta Studio

Premium photography website built with Next.js, Tailwind CSS, and Framer Motion.

## Running Locally

```powershell
cd C:\Faryta-Studio
cmd /c npm run dev
```

Open `http://localhost:3000`.

If port `3000` is busy:

```powershell
cmd /c npm run dev -- --port 3001
```

## Useful Commands

```powershell
cmd /c npm run lint
cmd /c npm run build
cmd /c npm start
```

## Project Structure

```text
app/                 Next.js app routes, SEO metadata, sitemap, robots, global CSS
components/          Reusable page sections and UI components
lib/data/            Editable website content grouped by section
lib/site-data.js     Stable export file used by components
public/              Static assets
```

Avoid editing `.next/`; it is generated automatically by Next.js.
