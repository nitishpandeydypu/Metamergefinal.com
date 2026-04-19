"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SmilePlus, Package, Network, TrendingUp } from "lucide-react";

/* -------- SAME DATA (UNCHANGED) -------- */

const services = [
  {
    icon: "🌐",
    title: "Website Development",
    desc: "Unique, highly responsive WordPress websites built to convert visitors into customers.",
    href: "/website-development",
    color: "blue",
  },
  {
    icon: "📈",
    title: "Digital Marketing Services",
    desc: "Strategic SEO, link building, and digital campaigns to grow your brand online.",
    href: "/digital-marketing-services",
    color: "orange",
  },
  {
    icon: "💬",
    title: "WhatsApp Business API",
    desc: "Seamless WhatsApp API integration with chatbots, bulk messaging, and analytics.",
    href: "/api-solution",
    color: "green",
  },
  {
    icon: "🗂️",
    title: "Metamerge All-In-One CRM",
    desc: "Manage everything in one dashboard.",
    href: "/Metamerge-all-in-one-crm",
    color: "violet",
  },
  {
    icon: "⬇️",
    title: "Download Software",
    desc: "Download tools instantly.",
    href: "/download",
    color: "purple",
  },
  {
    icon: "💰",
    title: "Pricing Plans",
    desc: "Flexible pricing.",
    href: "/pricing",
    color: "pink",
  },
];

const colorMap: Record<string, string> = {
  blue: "group-hover:text-blue-400 bg-blue-500/10 border-blue-500/20",
  orange: "group-hover:text-orange-400 bg-orange-500/10 border-orange-500/20",
  green: "group-hover:text-green-400 bg-green-500/10 border-green-500/20",
  violet: "group-hover:text-violet-400 bg-violet-500/10 border-violet-500/20",
  purple: "group-hover:text-purple-400 bg-purple-500/10 border-purple-500/20",
  pink: "group-hover:text-pink-400 bg-pink-500/10 border-pink-500/20",
};

const statsData = [
  { icon: SmilePlus, value: 5000, suffix: "+", label: "Happy Customers", color: "text-green-400" },
  { icon: Package, value: 3000, suffix: "+", label: "Software Sold", color: "text-blue-400" },
  { icon: Network, value: 500, suffix: "+", label: "Resellers", color: "text-purple-400" },
  { icon: TrendingUp, value: 10, suffix: "L+", label: "Revenue Generated", color: "text-yellow-400" },
];

const faqs = [
  {
    question: "What is Metamerge?",
    answer: "Metamerge is a WhatsApp marketing & CRM platform.",
  },
  {
    question: "Is bulk messaging safe?",
    answer: "Yes, with proper setup and limits.",
  },
];

/* -------- COUNTER -------- */

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let start = 0;
    const end = target;
    const duration = 2000;

    const step = () => {
      start += end / 60;
      if (start < end) {
        setCount(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    step();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* -------- MAIN -------- */

export default function HomePage() {
  return (
    <div>

      {/* HERO */}
      <section className="py-14 px-6 bg-[#0a0f1e] text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              Grow Your Business with <span className="text-green-400">Metamerge</span>
            </h1>

            <p className="text-slate-400 mb-6">
              WhatsApp marketing, CRM & automation tools to scale fast.
            </p>

            <div className="flex gap-4">
              <Link href="/contact" className="bg-blue-600 px-6 py-3 rounded-lg">
                Get Started
              </Link>

              <a href="https://wa.me/917827944832" className="bg-green-500 px-6 py-3 rounded-lg">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-14 px-6 bg-[#0d1326]">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s) => (
            <Link key={s.title} href={s.href} className="bg-[#111827] p-6 rounded-xl">
              <div className={`w-12 h-12 flex items-center justify-center ${colorMap[s.color]}`}>
                {s.icon}
              </div>
              <h3 className="text-white mt-4">{s.title}</h3>
              <p className="text-slate-400 text-sm">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 px-6 bg-[#0a0f1e]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          {statsData.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-[#111827] p-6 rounded-xl">
                <Icon className={`mx-auto mb-3 ${stat.color}`} />
                <p className={`text-2xl font-bold ${stat.color}`}>
                  <Counter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-6 bg-[#0d1326]">
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="bg-[#111827] p-5 rounded-xl">
              <summary className="text-white font-semibold cursor-pointer">{f.question}</summary>
              <p className="text-slate-400 mt-2">{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 bg-green-600 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Start Growing Today 🚀</h2>
        <a href="https://wa.me/917827944832" className="bg-white text-green-600 px-6 py-3 rounded-lg">
          Chat Now
        </a>
      </section>

      {/* ✅ SUPPORT BUTTON (RIGHT TOP) */}
      <a
        href="https://wa.me/917827944832?text=Hi%20I%20need%20support"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-6 top-6 z-50 flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.6)] hover:shadow-[0_0_30px_rgba(34,197,94,0.9)] transition-all duration-300 hover:scale-110"
      >
        🎧 Support
      </a>

    </div>
  );
}
