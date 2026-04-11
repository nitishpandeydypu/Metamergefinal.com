import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Download – Metamerge",
  description: "Download Metamerge WhatsApp marketing software and tools.",
};

const products = [
  {
    icon: "📤",
    name: "Metamerge Button Sender",
    desc: "The original WhatsApp bulk sender with smart contact management and anti-block technology.",
    badge: "Single PC",
    color: "blue",
    version: "v3.2",
  },
  {
    icon: "🚀",
    name: "Metamerge Button Pro Sender",
    desc: "Advanced bulk sender with scheduling, contact filtering, and multi-device support.",
    badge: "Single PC",
    color: "purple",
    version: "v2.1",
  },
  {
    icon: "☁️",
    name: "Metamerge Cloud Sender",
    desc: "Cloud-based solution for 24/7 automated messaging.",
    badge: "Cloud",
    color: "green",
    version: "v1.5",
  },
  {
    icon: "🏷️",
    name: "White Label Solution",
    desc: "Resell Metamerge under your own brand.",
    badge: "White Label",
    color: "orange",
    version: "v2.0",
  },
];

const colorMap: Record<string, string> = {
  blue: "from-blue-600/20 to-blue-800/10 border-blue-500/20",
  purple: "from-purple-600/20 to-purple-800/10 border-purple-500/20",
  green: "from-green-600/20 to-green-800/10 border-green-500/20",
  orange: "from-orange-600/20 to-orange-800/10 border-orange-500/20",
};

const badgeColorMap: Record<string, string> = {
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  green: "bg-green-500/10 text-green-400 border-green-500/20",
  orange: "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

export default function DownloadPage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-bg grid-bg py-20 px-6 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          Download Metamerge
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto">
          Get our WhatsApp marketing tools and grow your business faster.
        </p>
      </section>

      {/* Products */}
      <section className="py-16 px-6 bg-[#0d1326]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          {products.map((p) => (
            <div
              key={p.name}
              className={`bg-gradient-to-br ${colorMap[p.color]} border rounded-2xl p-6`}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="text-4xl">{p.icon}</div>
                <span
                  className={`text-xs px-3 py-1 rounded-full border ${badgeColorMap[p.color]}`}
                >
                  {p.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{p.name}</h3>
              <p className="text-slate-400 text-sm mb-4">{p.desc}</p>

              <p className="text-xs text-slate-500 mb-4">
                Version: {p.version}
              </p>

              <div className="flex flex-wrap gap-3">

                {/* Download */}
                <a
                  href="https://github.com/nitishpandeydypu/Metamergefinal.com/releases/download/v1.0.0/Metamerge.Setup.5.0.0.2.zip"
                  target="_blank"
                  className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg text-sm"
                >
                  ⬇️ Download
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/917827944832"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg text-sm"
                >
                  💬 Buy
                </a>

                {/* Learn More */}
                <Link
                  href="/contact"
                  className="border border-white/20 text-white px-5 py-2 rounded-lg text-sm hover:bg-white/10"
                >
                  Learn More
                </Link>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-3">
          Need Help?
        </h2>
        <p className="text-slate-400 mb-6">
          Contact our team for support and setup.
        </p>

        <a
          href="https://wa.me/917827944832"
          className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold"
        >
          💬 Chat on WhatsApp
        </a>
      </section>
    </div>
  );
}
