# Wagon Coffee & Food — Website

Mobile-first website for **Wagon Coffee & Food**, a train-themed café in Ankara, bringing together its two sub-brands: **Monkey Express Coffee** and **Mom'y Burgers & Sokak Lezzetleri**.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)

**Live:** https://vagoncoffe.vercel.app

> Client project — designed and developed by Berke Coşkuner for Wagon Coffee & Food.

![Wagon Coffee & Food hero image](public/images/hero-wagon.jpg)

## Overview

A digital "station" for a train-concept café in Ankara. Visitors can browse the coffee and food menu, look through the gallery, read about the concept and find contact / directions links — all designed for phones first.

All business data (contact details, social links, menu items) lives in two data files, so content can be updated without touching components. Fields that have not been verified with the business are left empty and are **hidden automatically** in the UI instead of showing placeholder data.

## Features

- **Home page** — full-screen hero, concept section, customer favourites (featured menu items), venue atmosphere, Instagram section and a "Visit us" block with schema.org JSON-LD
- **Menu** (`/menu`) — category filter (All / Monkey Express coffee / Mom'y Burgers food) and search, both synced to the URL query string
- **Product pages** (`/menu/[slug]`) — statically generated for every verified item, with per-product metadata
- **Gallery** (`/galeri`) with filters and an image lightbox, **About** (`/hakkimizda`) and **Contact** (`/iletisim`)
- **Legal pages** — KVKK, privacy policy and cookie policy
- **Mobile bottom navigation** — menu, menu search and Instagram; Directions and WhatsApp buttons appear automatically once those links are set
- **SEO** — `sitemap.ts` (includes product routes), `robots.ts` and Open Graph metadata
- Prices are not displayed; product pages point visitors to Instagram (and WhatsApp, once a number is set) for current prices and allergen details

## Tech stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | Lucide React + custom Instagram SVG |
| Images | `next/image` (product and venue images in the repo are AI-generated) |

## Project structure

```text
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── menu/                 # Menu list (MenuClient) + [slug] product pages
│   ├── galeri/  hakkimizda/  iletisim/
│   ├── kvkk/  gizlilik-politikasi/  cerez-politikasi/
│   └── layout.tsx  sitemap.ts  robots.ts
├── components/               # Header, Footer, BottomStickyNav, icons
└── data/
    ├── site-config.ts        # Business info, social links, canonical URL
    └── menu.ts               # Menu items and categories
public/
└── brand/  images/  menu/  gallery/
```

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run start
npm run lint
```

If the project path contains non-ASCII characters (e.g. `Masaüstü`), build with Webpack instead of Turbopack:

```bash
npx next build --webpack
```

### Environment variables

None are required. `.env.example` lists an optional `NEXT_PUBLIC_GA_MEASUREMENT_ID` (copy it to `.env.local`); the current code does not read it yet.

## Content management

- **Business info** — edit `src/data/site-config.ts` (name, Instagram, phone, WhatsApp, address, maps link, working hours, order links). Empty fields are hidden in the UI.
- **Menu** — edit `src/data/menu.ts`. Each item has `category` (`coffee`, `food`, `desserts`, `drinks`), `subcategory`, optional `price`, `image` and a `verified` flag; only verified items are shown and included in the sitemap.
- **Images** — replace files with the same names in `public/brand/`, `public/images/`, `public/menu/` and `public/gallery/`.

---

## Türkçe

**Wagon Coffee & Food** için mobil öncelikli web sitesi. Ankara'daki tren konseptli kafenin iki alt markasını — **Monkey Express Coffee** ve **Mom'y Burgers & Sokak Lezzetleri** — tek bir sitede buluşturur.

> Müşteri projesi — Wagon Coffee & Food için Berke Coşkuner tarafından tasarlanıp geliştirilmiştir.

**Canlı:** https://vagoncoffe.vercel.app

### Özellikler

- Ana sayfa: hero, konsept, müşteri favorileri, mekan atmosferi, Instagram ve "Bizi ziyaret edin" bölümleri (schema.org JSON-LD ile)
- Menü: kategori filtresi (Tümü / Monkey Express kahveleri / Mom'y Burgers lezzetleri) ve arama; ikisi de URL ile senkron
- Her doğrulanmış ürün için statik olarak üretilen ürün detay sayfaları
- Galeri (filtre + lightbox), Hakkımızda, İletişim, KVKK, gizlilik ve çerez politikası sayfaları
- Mobil alt navigasyon: menü, menü araması ve Instagram; yol tarifi ve WhatsApp butonları bu bağlantılar girildiğinde otomatik görünür
- `sitemap.ts`, `robots.ts` ve Open Graph ile SEO
- Fiyatlar sitede gösterilmez; ürün sayfaları güncel fiyat ve alerjen bilgisi için ziyaretçiyi Instagram'a (numara girildiğinde WhatsApp'a) yönlendirir

### Teknolojiler

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, Lucide ikonları. Repodaki ürün ve mekan görselleri yapay zekâ ile üretilmiştir.

### Kurulum

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
```

Proje yolunda Türkçe karakter (ör. `Masaüstü`) varsa Turbopack yerine Webpack ile derleyin: `npx next build --webpack`.

Zorunlu ortam değişkeni yoktur. `.env.example` içinde opsiyonel `NEXT_PUBLIC_GA_MEASUREMENT_ID` tanımlıdır (dosyayı `.env.local` olarak kopyalayabilirsiniz); mevcut kod bu değişkeni henüz kullanmıyor.

### İçerik yönetimi

- İşletme bilgileri: `src/data/site-config.ts` — boş bırakılan alanlar (telefon, WhatsApp, adres, harita linki vb.) arayüzde otomatik gizlenir.
- Menü: `src/data/menu.ts` — yalnızca `verified: true` olan ürünler gösterilir ve site haritasına eklenir.
- Görseller: `public/brand/`, `public/images/`, `public/menu/`, `public/gallery/` klasörlerindeki dosyaları aynı adla değiştirin.

---

Built by [Berke Coşkuner](https://github.com/CoskunerBerke)
