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
    desc: "Cloud-based solution for 24/7 automated messaging without keeping your PC on.",
    badge: "Cloud",
    color: "green",
    version: "v1.5",
  },
  {
    icon: "🏷️",
    name: "White Label Solution",
    desc: "Resell Metamerge under your own brand. Full white label with custom domain and branding.",
    badge: "White Label",
    color: "orange",
    version: "v2.0",
  },
];

const colorMap: Record<string, string> = {
  blue: "from-blue-600/20 to-blue-800/10 border-blue-500/20 hover:border-blue-500/40",
  purple: "from-purple-600/20 to-purple-800/10 border-purple-500/20 hover:border-purple-500/40",
  green: "from-green-600/20 to-green-800/10 border-green-500/20 hover:border-green-500/40",
  orange: "from-orange-600/20 to-orange-800/10 border-orange-500/20 hover:border-orange-500/40",
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
      <section className="hero-bg grid-bg py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            ⬇️ Downloads
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Download Metamerge<br />
            <span className="gradient-text">Software & Tools</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Download our WhatsApp marketing software, data extractors, and tools. Purchase a license to unlock full functionality and start growing your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/pricing" className="btn-primary text-white font-semibold px-8 py-3 rounded-full text-sm">View Pricing Plans →</Link>
            <Link href="/contact" className="border border-blue-500/40 text-blue-400 font-semibold px-8 py-3 rounded-full text-sm hover:bg-blue-500/10 transition-all">
              Get Support
            </Link>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 px-6 bg-[#0d1326]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Products</p>
            <h2 className="font-heading text-4xl font-bold">Available <span className="gradient-text">Downloads</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((p) => (
              <div key={p.name} className={`bg-gradient-to-br ${colorMap[p.color]} border rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300`}>
                <div className="flex items-start justify-between mb-5">
                  <div className="text-5xl">{p.icon}</div>
                  <div className="flex gap-2">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${badgeColorMap[p.color]}`}>{p.badge}</span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400">{p.version}</span>
                  </div>
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-3">{p.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{p.desc}</p>
                <div className="flex gap-3">
                  <a
                    href="https://wa.me/918187944832"
                    className="btn-green text-white text-sm font-semibold px-6 py-2.5 rounded-xl flex items-center gap-2"
                  >
                    💬 Buy on WhatsApp
                  </a>
                  <Link href="/contact" className="border border-white/10 text-slate-300 text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-white/5 transition-colors">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System requirements */}
      <section className="py-16 px-6 bg-[#0a0f1e]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-center mb-10">
            System <span className="gradient-text">Requirements</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Operating System", items: ["Windows 10 / 11 (64-bit)", "Windows 7 / 8 (limited support)"] },
              { title: "Hardware", items: ["Minimum 4 GB RAM", "2 GHz+ Processor", "500 MB free disk space"] },
              { title: "Software", items: ["WhatsApp installed on device", ".NET Framework 4.7+", "Chrome Browser (latest)"] },
              { title: "Network", items: ["Stable internet connection", "WhatsApp account logged in", "Mobile number verified"] },
            ].map((req) => (
              <div key={req.title} className="bg-[#111827] border border-white/5 rounded-2xl p-6">
                <h3 className="font-heading font-bold text-white mb-3">{req.title}</h3>
                <ul className="space-y-2">
                  {req.items.map((item) => (
                    <li key={item} className="text-slate-400 text-sm flex items-center gap-2">
                      <span className="text-blue-400">›</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 bg-[#0d1326]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">Need Help Choosing the Right Plan?</h2>
          <p className="text-slate-400 mb-8">Our team is available Monday to Friday, 11 AM – 5 PM to guide you.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/917827944832" className="btn-green text-white font-semibold px-8 py-3 rounded-full text-sm">💬 Chat on WhatsApp</a>
            <Link href="/pricing" className="btn-primary text-white font-semibold px-8 py-3 rounded-full text-sm">View All Plans →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
