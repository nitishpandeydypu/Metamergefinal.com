"use client";

import {
  CheckCircle2,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Metamerge Window Based Software",
    image: "/Picture1.png",
    price: 1499,
    description:
      "Send personalized bulk messages at scale with smart scheduling.",
    features: [
      "Bulk Messaging",
      "Multi Accounts",
      "AI Chatbot",
      "Live Chat",
      "Group Grabber",
      "Button List, Poll, Carousel",
      "Interactive Templates",
      "Auto Reply",
    ],
    tag: "Best seller",
  },
  {
    id: 3,
    name: "WaCRM - Multi-Account CRM",
    image: "/Picture2.png",
    price: 1999,
    description: "Manage leads, conversations, and follow-ups in one place.",
    features: ["Lead Management", "Set Reminder", "Quick Reply", "Chat Filter"],
    tag: "CRM",
  },
  {
    id: 4,
    name: "WhatsApp Bulk Sender Pro",
    image: "/Picture3.png",
    price: 1999,
    description: "Advanced bulk messaging tool for campaign automation.",
    features: ["Bulk Messaging", "Automation", "Scheduler"],
    tag: "Automation",
  },
  {
    id: 5,
    name: "Metamerge Pilot Sender",
    image: "/Picture4.png",
    price: 999,
    description: "Affordable bulk sender with AI tools and lead utilities.",
    features: [
      "Bulk Sender",
      "Single Instance",
      "AI Chatbot",
      "Group Grabber",
      "G-Map Extractor",
      "Number Filter",
      "Anti-Ban Setting",
    ],
    tag: "Starter",
  },
  {
    id: 6,
    name: "WA Sender",
    image: "/Picture5.png",
    price: 999,
    description: "Simple WhatsApp marketing software for quick outreach.",
    features: ["WhatsApp Bulk Marketing Software"],
    tag: "Simple",
  },
  {
    id: 7,
    name: "Google Map Extractor",
    image: "/Picture6.png",
    price: 999,
    description: "Extract local business leads directly from Google Maps.",
    features: ["Lead Extraction", "Bulk Data Export"],
    tag: "Leads",
  },
];

const shopHighlights = [
  { icon: Sparkles, label: "Ready software" },
  { icon: ShieldCheck, label: "Secure delivery" },
  { icon: Zap, label: "Fast setup" },
];

export default function Shop() {
  return (
    <div className="min-h-screen overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <section className="relative border-b border-[var(--border-subtle)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_34%),radial-gradient(circle_at_85%_12%,rgba(37,211,102,0.12),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <div className="mb-5 flex flex-wrap gap-3">
              {shopHighlights.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--text-secondary)] shadow-sm"
                >
                  <Icon size={16} className="text-emerald-400" />
                  {label}
                </span>
              ))}
            </div>

            <h1 className="max-w-3xl font-heading text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Software shop for smarter WhatsApp business growth
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
              Choose from Metamerge marketing, CRM, sender, and lead extraction
              tools built for daily business campaigns.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                <Search size={18} />
                Browse Products
              </a>
              <a
                href="https://wa.me/919234547310?text=Hi%20I%20need%20help%20choosing%20software"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface)] px-6 py-3 text-sm font-bold text-[var(--text-primary)] hover:-translate-y-0.5 hover:border-emerald-400/70"
              >
                <MessageCircle size={18} className="text-emerald-400" />
                Ask on WhatsApp
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface)] p-4 shadow-2xl shadow-[var(--shadow-color)] backdrop-blur">
              <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(37,211,102,0.14),rgba(59,130,246,0.12),rgba(147,51,234,0.12))]">
                <img
                  src="/shopbg.png"
                  alt="Metamerge software preview"
                  className="h-[300px] w-full object-contain sm:h-[390px]"
                />
              </div>
              <div className="grid grid-cols-3 gap-3 pt-4 text-center">
                <div className="rounded-2xl bg-[var(--bg-secondary)] px-3 py-4">
                  <p className="text-2xl font-black text-blue-400">6+</p>
                  <p className="text-xs font-semibold text-[var(--text-muted)]">
                    Products
                  </p>
                </div>
                <div className="rounded-2xl bg-[var(--bg-secondary)] px-3 py-4">
                  <p className="text-2xl font-black text-emerald-400">999</p>
                  <p className="text-xs font-semibold text-[var(--text-muted)]">
                    Starting Rs.
                  </p>
                </div>
                <div className="rounded-2xl bg-[var(--bg-secondary)] px-3 py-4">
                  <p className="text-2xl font-black text-violet-400">24h</p>
                  <p className="text-xs font-semibold text-[var(--text-muted)]">
                    Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
              Product catalog
            </p>
            <h2 className="mt-2 font-heading text-3xl font-black sm:text-4xl">
              Pick the right tool
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Bulk Sender", "CRM", "Automation", "Lead Tools"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[var(--border-soft)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--text-secondary)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="group flex min-h-full flex-col overflow-hidden rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)] shadow-xl shadow-[var(--shadow-color)] backdrop-blur transition hover:-translate-y-1 hover:border-blue-400/60"
            >
              <div className="relative bg-[linear-gradient(135deg,var(--bg-secondary),var(--bg-tertiary))] p-4">
                <span className="absolute left-5 top-5 z-10 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white shadow-lg shadow-blue-600/20">
                  {product.tag}
                </span>
                <div className="flex h-64 items-center justify-center rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-strong)] p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-xl font-black leading-snug">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                  {product.description}
                </p>

                <ul className="mt-5 grid gap-2 text-sm text-[var(--text-secondary)]">
                  {product.features.slice(0, 5).map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-emerald-400"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center justify-between gap-4 border-t border-[var(--border-subtle)] pt-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                      Price
                    </p>
                    <p className="text-2xl font-black text-blue-400">
                      Rs. {product.price}
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/919234547310?text=Hi%20I%20am%20interested%20in%20${encodeURIComponent(
                      product.name
                    )}`}
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-400"
                  >
                    <MessageCircle size={17} />
                    Buy Now
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
