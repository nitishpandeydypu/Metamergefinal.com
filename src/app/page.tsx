"use client";

import { useState } from "react";
import Link from "next/link";
import { SmilePlus, Package, Network, TrendingUp } from "lucide-react";

const services = [
  { title: "Website Development", desc: "High-converting websites", href: "/website-development" },
  { title: "Digital Marketing", desc: "SEO & growth campaigns", href: "/digital-marketing-services" },
  { title: "WhatsApp API", desc: "Automation & bulk messaging", href: "/api-solution" },
  { title: "CRM Software", desc: "All-in-one business dashboard", href: "/Metamerge-all-in-one-crm" },
  { title: "Download Software", desc: "Get tools instantly", href: "/download" },
  { title: "Pricing Plans", desc: "Flexible pricing", href: "/pricing" },
];

const stats = [
  { icon: SmilePlus, value: "5000+", label: "Happy Clients" },
  { icon: Package, value: "3000+", label: "Software Sold" },
  { icon: Network, value: "500+", label: "Resellers" },
  { icon: TrendingUp, value: "10L+", label: "Revenue Generated" },
];

const faqs = [
  {
    q: "What is Metamerge?",
    a: "Metamerge provides WhatsApp marketing, CRM, websites & digital growth solutions.",
  },
  {
    q: "Is WhatsApp API safe?",
    a: "Yes, we use official API approved by Meta.",
  },
  {
    q: "How fast can I start?",
    a: "Usually within 24–72 hours.",
  },
];

export default function HomePage() {
  const [openSupport, setOpenSupport] = useState(false);

  return (
    <div className="bg-[#0a0f1e] text-white">

      {/* HERO */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Grow Your Business with{" "}
          <span className="text-green-400">Metamerge</span>
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto mb-8">
          WhatsApp Marketing, CRM, Website Development — everything in one place.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => setOpenSupport(true)}
            className="bg-green-500 px-8 py-3 rounded-full"
          >
            Get Started
          </button>

          <Link href="/pricing" className="border px-8 py-3 rounded-full">
            View Pricing
          </Link>
        </div>
      </section>

      {/* VIDEO */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Live Demo</h2>
        <iframe
          className="w-full max-w-3xl mx-auto h-[250px] md:h-[450px]"
          src="https://www.youtube.com/embed/VP1rFacoOb0"
        />
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6 bg-[#0d1326]">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="bg-[#111827] p-6 rounded-xl hover:scale-105 transition"
            >
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-slate-400 text-sm">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Why Choose Metamerge?
          </h2>
          <p className="text-slate-400">
            Fast setup, automation, CRM integration, and dedicated support.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-6 bg-[#0d1326]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i}>
                <Icon className="mx-auto mb-2" />
                <p className="text-2xl font-bold">{s.value}</p>
                <p className="text-slate-400 text-sm">{s.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          FAQ
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="bg-[#111827] p-4 rounded">
              <summary className="cursor-pointer font-semibold">
                {f.q}
              </summary>
              <p className="text-slate-400 mt-2">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-green-600">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Grow?
        </h2>
        <button
          onClick={() => setOpenSupport(true)}
          className="bg-white text-green-600 px-8 py-3 rounded-full"
        >
          Talk to Sales
        </button>
      </section>

      {/* SUPPORT MODAL */}
      {openSupport && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white text-black p-6 rounded w-full max-w-md relative">

            <button
              onClick={() => setOpenSupport(false)}
              className="absolute right-3 top-3"
            >
              ✖
            </button>

            <h2 className="text-lg font-bold mb-4">
              Support Ticket
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;

                const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
                const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

                const text = `Hi, I need support\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`;
                const url = `https://wa.me/917827944832?text=${encodeURIComponent(text)}`;

                window.open(url, "_blank");
              }}
              className="space-y-3"
            >
              <input name="name" placeholder="Name" className="w-full border p-2" />
              <input name="phone" placeholder="Phone" className="w-full border p-2" />
              <textarea name="message" placeholder="Message" className="w-full border p-2" />

              <button className="bg-green-500 text-white px-4 py-2 rounded">
                Submit
              </button>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}
