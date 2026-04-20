"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SmilePlus, Package, Network, TrendingUp } from "lucide-react";

/* ================= DATA ================= */

const services = [
  { icon: "🌐", title: "Website Development", desc: "High converting websites.", href: "/website-development" },
  { icon: "📈", title: "Digital Marketing", desc: "SEO & growth strategies.", href: "/digital-marketing-services" },
  { icon: "💬", title: "WhatsApp API", desc: "Bulk + chatbot automation.", href: "/api-solution" },
  { icon: "🗂️", title: "CRM", desc: "All-in-one dashboard.", href: "/crm" },
];

const statsData = [
  { icon: SmilePlus, value: 5000, suffix: "+", label: "Happy Customers" },
  { icon: Package, value: 3000, suffix: "+", label: "Software Sold" },
  { icon: Network, value: 500, suffix: "+", label: "Resellers" },
  { icon: TrendingUp, value: 10, suffix: "L+", label: "Revenue Generated" },
];

/* ================= COUNTER ================= */

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const duration = 1500;

        const step = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          setCount(Math.floor(progress * target));
          if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
      }
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ================= COMPONENT ================= */

export default function HomePage() {
  return (
    <main className="bg-[#0a0f1e] text-white">

      {/* ================= HERO ================= */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Grow Your Business with <span className="text-green-400">Metamerge</span>
            </h1>

            <p className="text-gray-400 mb-8">
              WhatsApp marketing, CRM & digital growth tools — all in one place.
            </p>

            <div className="flex gap-4">
              <Link href="/contact" className="bg-green-500 px-6 py-3 rounded-full">
                Get Started
              </Link>

              <a href="https://t.me/metamerge_download/2"
                 className="border border-white/20 px-6 py-3 rounded-full">
                Download
              </a>
            </div>
          </div>

          <div className="bg-[#111827] p-10 rounded-2xl text-center">
            WhatsApp Marketing Preview
          </div>

        </div>
      </section>

      {/* ================= VIDEO ================= */}
      <section className="py-16 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <iframe
            className="w-full h-[300px] rounded-xl"
            src="https://www.youtube.com/embed/VP1rFacoOb0"
            allowFullScreen
          />

          <div>
            <h2 className="text-3xl font-bold mb-4">Watch Demo</h2>
            <p className="text-gray-600 mb-6">
              Learn how WhatsApp marketing works step-by-step.
            </p>

            <a href="https://wa.me/919234547310"
               className="bg-purple-600 text-white px-6 py-3 rounded-full">
              Get Demo
            </a>
          </div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((s) => (
            <Link key={s.title} href={s.href}
              className="bg-[#111827] p-6 rounded-xl hover:scale-105 transition">
              
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="font-bold mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm">{s.desc}</p>

            </Link>
          ))}

        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-16 px-6 bg-[#111827]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          {statsData.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label}>
                <Icon className="mx-auto mb-3" />
                <p className="text-3xl font-bold">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            );
          })}

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Grow 5X?
        </h2>

        <a href="https://wa.me/919234547310"
           className="bg-green-500 px-8 py-3 rounded-full">
          Talk to Sales
        </a>
      </section>

    </main>
  );
}
