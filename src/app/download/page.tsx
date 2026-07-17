"use client";

import {
  CheckCircle2,
  Download,
  FileArchive,
  FileCode2,
  Headphones,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Metamerge Window Based Software",
    version: "V9.0.0",
    image: "/Picture1.png",
    link: "https://pub-4b46c92e74ba4724a0f1af6058235698.r2.dev/Metamerge%20Setup%209.0.0.zip",
    fileType: "ZIP",
    description: "Complete desktop setup package for the main Metamerge suite.",
  },
  {
    id: 3,
    name: "WaCRM - Multi-Account CRM",
    version: "V4.0.2",
    image: "/Picture2.png",
    link: "https://pub-4b46c92e74ba4724a0f1af6058235698.r2.dev/wacrm%20(1).exe",
    fileType: "EXE",
    description: "Multi-account CRM installer for lead and chat management.",
  },
  {
    id: 4,
    name: "WhatsApp Bulk Sender Pro",
    version: "V4.0.2",
    image: "/Picture3.png",
    link: "https://pub-4b46c92e74ba4724a0f1af6058235698.r2.dev/Multi-Account.WhatsApp.Pro.Installer%20(1).exe",
    fileType: "EXE",
    description: "Advanced WhatsApp campaign sender with automation tools.",
  },
  {
    id: 5,
    name: "Metamerge Pilot Sender",
    version: "V2.1.0",
    image: "/Picture4.png",
    link: "https://pub-4b46c92e74ba4724a0f1af6058235698.r2.dev/Bulk.Pilot%20(2).msi",
    fileType: "MSI",
    description: "Lightweight sender installer for fast campaign setup.",
  },
  {
    id: 6,
    name: "WA Sender",
    version: "V5.0.7",
    image: "/Picture5.png",
    link: "https://pub-4b46c92e74ba4724a0f1af6058235698.r2.dev/wasender.5.0.7.exe",
    fileType: "EXE",
    description: "Simple WhatsApp marketing installer for direct outreach.",
  },
  {
    id: 7,
    name: "Google Map Extractor",
    version: "V1.0.9",
    image: "/Picture6.png",
    link: "https://pub-4b46c92e74ba4724a0f1af6058235698.r2.dev/GMExtractorSetUp.msi",
    fileType: "MSI",
    description: "Lead extraction setup for Google Maps business data.",
  },
];

const downloadBenefits = [
  { icon: ShieldCheck, label: "Verified installers" },
  { icon: Sparkles, label: "Latest versions" },
  { icon: Headphones, label: "Setup support" },
];

export default function DownloadPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <section className="relative border-b border-[var(--border-subtle)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(37,211,102,0.16),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.18),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <div className="mb-5 flex flex-wrap gap-3">
              {downloadBenefits.map(({ icon: Icon, label }) => (
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
              Download Metamerge software installers
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
              Get the latest desktop installers for WhatsApp marketing, CRM,
              sender tools, and lead extraction products.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#download-list"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition hover:-translate-y-0.5 hover:bg-emerald-400"
              >
                <Download size={18} />
                View Downloads
              </a>
              <a
                href="https://wa.me/919234547310?text=Hi%20I%20need%20help%20installing%20Metamerge%20software"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface)] px-6 py-3 text-sm font-bold text-[var(--text-primary)] hover:-translate-y-0.5 hover:border-blue-400/70"
              >
                <Headphones size={18} className="text-blue-400" />
                Installation Help
              </a>
            </div>
          </div>

          <div className="">
            <div className="relative flex items-center justify-center">

              {/* Main Image */}
              <img
                src="/downloadbg.png"
                alt="Metamerge Software Download"
                className="relative z-10 w-full max-w-[460px] object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="download-list"
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              Latest releases
            </p>
            <h2 className="mt-2 font-heading text-3xl font-black sm:text-4xl">
              Choose your installer
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="group flex min-h-full flex-col overflow-hidden rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)] shadow-xl shadow-[var(--shadow-color)] backdrop-blur transition hover:-translate-y-1 hover:border-emerald-400/60"
            >
              <div className="relative bg-[linear-gradient(135deg,var(--bg-secondary),var(--bg-tertiary))] p-4">
                {/* <span className="absolute left-5 top-5 z-10 inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white shadow-lg shadow-blue-600/20">
                  <FileCode2 size={13} />
                  {product.fileType}
                </span> */}
                <div className="flex h-64 items-center justify-center rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-strong)] p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-heading text-xl font-black leading-snug">
                    {product.name}
                  </h3>
                  <span className="shrink-0 rounded-full border border-[var(--border-soft)] px-3 py-1 text-xs font-black text-emerald-400">
                    {product.version}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                  {product.description}
                </p>

                <div className="mt-auto flex items-center justify-between gap-4 border-t border-[var(--border-subtle)] pt-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                      Format
                    </p>
                    <p className="text-xl font-black text-blue-400">
                      {product.fileType}
                    </p>
                  </div>

                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-400"
                  >
                    <Download size={17} />
                    Download
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
