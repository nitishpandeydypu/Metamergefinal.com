# Metamerge – Next.js + Tailwind CSS Website

A fully responsive multi-page website for metamerged.com (https://metamerged.com) built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

## 📁 Folder Structure

```
Metamerge-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx                    ← Root layout (Navbar + Footer)
│   │   ├── globals.css                   ← Tailwind directives + custom utilities
│   │   ├── page.tsx                      ← Home page
│   │   ├── website-development/
│   │   │   └── page.tsx                  ← Website Development page
│   │   ├── digital-marketing-services/
│   │   │   └── page.tsx                  ← Digital Marketing page
│   │   ├── api-solution/
│   │   │   └── page.tsx                  ← WhatsApp Business API page
│   │   ├── Metamerge-all-in-one-crm/
│   │   │   └── page.tsx                  ← CRM page
│   │   ├── download/
│   │   │   └── page.tsx                  ← Download page
│   │   ├── contact/
│   │   │   └── page.tsx                  ← Contact page (with form)
│   │   └── pricing/
│   │       └── page.tsx                  ← Pricing page
│   └── components/
│       └── layout/
│           ├── Navbar.tsx                ← Sticky navbar with dropdown + mobile menu
│           └── Footer.tsx                ← 4-column footer
├── tailwind.config.ts
├── next.config.mjs
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📄 Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/website-development` | Website Development |
| `/digital-marketing-services` | Digital Marketing Services |
| `/api-solution` | WhatsApp Business API |
| `/Metamerge-all-in-one-crm` | All-In-One CRM |
| `/download` | Download Software |
| `/contact` | Contact (with form) |
| `/pricing` | Pricing Plans |

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#0a0f1e` |
| Secondary BG | `#0d1326` |
| Card BG | `#111827` |
| Brand Green | `#25D366` |
| Brand Dark | `#075E54` |
| Heading Font | Plus Jakarta Sans |
| Body Font | DM Sans |

## ✅ Features

- ✅ Next.js 14 App Router with TypeScript
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Sticky glass navbar with dropdown & mobile hamburger
- ✅ Shared Navbar + Footer via root layout
- ✅ Hero sections per page with distinct color themes
- ✅ Interactive contact form (submits via WhatsApp)
- ✅ Pricing comparison tables
- ✅ Dark theme with gradient accents
- ✅ SEO metadata per page
- ✅ Google Fonts (Plus Jakarta Sans + DM Sans)
- ✅ Hover animations and card transitions
- ✅ WhatsApp CTA links throughout
