import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Become a Partner – Metamerge Marketing Partner Program",
  description:
    "Join the Metamerge reseller partner program. High margins, free training, partner panel, and lifetime revenue potential.",
};

const benefits = [
  {
    icon: "🎓",
    title: "Hands-on Experience",
    desc: "We offer comprehensive training on software sales, addressing all your product-related questions. You'll also receive How-to-Use videos available in both Hindi and English.",
    color: "green",
  },
  {
    icon: "📞",
    title: "Live Support",
    desc: "Our dedicated support team is available 24/7 to resolve any technical issues or concerns you might have. We're always here to assist with your queries.",
    color: "blue",
  },
  {
    icon: "💰",
    title: "High Margins",
    desc: "We provide a substantial margin ratio to our channel partners, ensuring a long-term and profitable business relationship. We view our partners as an integral part of our business.",
    color: "yellow",
  },
  {
    icon: "🛠️",
    title: "Marketing Tools",
    desc: "We supply a marketing software tool at no cost to our channel partners, specifically designed to aid in your sales efforts.",
    color: "orange",
  },
  {
    icon: "📦",
    title: "Multiple Product Options",
    desc: "We offer a range of marketing software and digital products for resale, each with varied pricing. Metamerge is your go-to platform for an extensive selection.",
    color: "purple",
  },
  {
    icon: "♾️",
    title: "Lifetime Revenue",
    desc: "Our marketing software solutions are perennially in demand, allowing you to earn income over a lifetime. Digital marketing tools are the future of revenue generation.",
    color: "pink",
  },
  {
    icon: "🇮🇳",
    title: "Part of Digital India",
    desc: "Join us in being a part of Digital India and leverage cutting-edge technology in your business.",
    color: "teal",
  },
  {
    icon: "🔑",
    title: "Partner Panel",
    desc: "Our channel partners receive a personal panel of license keys, eliminating the need to request individual keys each time.",
    color: "violet",
  },
  {
    icon: "⚡",
    title: "Updated Technology",
    desc: "We provide products with the latest technology, aligning with market demands and business benefits.",
    color: "cyan",
  },
];

const colorMap: Record<string, string> = {
  green: "bg-green-500/10 border-green-500/20 text-green-400",
  blue: "bg-blue-500/10 border-blue-500/20 text-blue-400",
  yellow: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
  orange: "bg-orange-500/10 border-orange-500/20 text-orange-400",
  purple: "bg-purple-500/10 border-purple-500/20 text-purple-400",
  pink: "bg-pink-500/10 border-pink-500/20 text-pink-400",
  teal: "bg-teal-500/10 border-teal-500/20 text-teal-400",
  violet: "bg-violet-500/10 border-violet-500/20 text-violet-400",
  cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
};

const whyChooseUs = [
  {
    icon: "🧩",
    title: "Flexible Product",
    desc: "Software sales is a lucrative business that requires no significant investment or manpower; just your sales acumen to drive earnings.",
  },
  {
    icon: "📈",
    title: "On-Demand Product",
    desc: "Our products are well-received due to their unique features and functionality.",
  },
  {
    icon: "💡",
    title: "Easy to Understand",
    desc: "Our marketing software is user-friendly and easy to grasp, minimizing the learning curve.",
  },
  {
    icon: "🏢",
    title: "Solution for Every Business",
    desc: "We offer tailored solutions for diverse business needs, ensuring you find the right fit for your sales strategy.",
  },
];

export default function BecomeAPartner() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-bg grid-bg relative overflow-hidden py-14 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            🤝 Marketing Partner Program
          </div>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            Become a <span className="gradient-text">Marketing Partner</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            We have an advance strategy for promoting software in the market, with years of expertise in this field.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/918187944832"
              className="btn-green text-white font-semibold px-8 py-3.5 rounded-full text-sm flex items-center gap-2"
            >
              💬 Reseller Login
            </a>
            <a
              href="#contact-form"
              className="btn-primary text-white font-semibold px-8 py-3.5 rounded-full text-sm"
            >
              Get Free Training →
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-14 px-6 bg-[#0d1326]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">Partner Benefits</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              What Do You Need to Know?{" "}
              <span className="gradient-text">What Are Your Benefits?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-[#111827] border border-white/5 rounded-2xl p-8 hover:border-white/10 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-black/20"
              >
                <div
                  className={`w-14 h-14 rounded-xl border flex items-center justify-center text-2xl mb-5 ${colorMap[b.color]}`}
                >
                  {b.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-3">{b.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shape Your Future */}
      <section className="py-14 px-6 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Why Choose Us cards */}
          <div>
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Shape Your Future in{" "}
              <span className="gradient-text">Software Sales</span>
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-10">
              Join us in building a smarter digital future. Metamerge gives you everything you need to run a profitable software business from anywhere in India.
            </p>
            <div className="grid grid-cols-1 gap-4">
              {whyChooseUs.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 bg-[#111827] border border-white/5 rounded-2xl p-5 hover:border-green-500/20 transition-colors"
                >
                  <div className="text-2xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-sm mb-1">{item.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA card + stats */}
          <div className="flex flex-col gap-6">
            <div className="bg-gradient-to-br from-green-500/10 to-blue-500/5 border border-green-500/20 rounded-3xl p-10 text-center">
              <div className="w-20 h-20 bg-green-500/20 border border-green-500/30 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-6">
                🚀
              </div>
              <h3 className="font-heading text-2xl font-extrabold text-white mb-3">
                Ready to Get Started?
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                A Power that Shines Your Future! Let's play together with the latest technology, market demand & mutual support.
              </p>
              {/* <a
                href="https://wa.me/918187944832"
                className="inline-block btn-green text-white font-semibold px-8 py-3 rounded-full text-sm"
              >
                💬 Get Free Training
              </a> */}
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "500+", label: "Active Partners" },
                { value: "High", label: "Margin Ratio" },
                { value: "24/7", label: "Live Support" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-[#111827] border border-white/5 rounded-2xl p-5 text-center"
                >
                  <p className="font-heading text-2xl font-extrabold text-white mb-1">{s.value}</p>
                  <p className="text-slate-400 text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      {/* <section id="contact-form" className="py-14 px-6 bg-[#0d1326]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Still Not Sure What to Do?
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Contact Us</span>
            </h2>
            <p className="text-slate-400 mt-4 text-base">
              We are glad that you preferred to contact us. Please fill our short form and one of our friendly team members will contact you back.
            </p>
          </div>

          <div className="bg-[#111827] border border-white/5 rounded-3xl p-8 md:p-10">
            <div className="space-y-5">
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Contact No</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full bg-[#0d1326] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-green-500/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-[#0d1326] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-green-500/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Where You Found Us</label>
                <select className="w-full bg-[#0d1326] border border-white/10 rounded-xl px-4 py-3 text-slate-300 text-sm focus:outline-none focus:border-green-500/50 transition-colors">
                  <option value="">Select an option</option>
                  <option value="google">Google</option>
                  <option value="facebook">Facebook</option>
                  <option value="friend">Friend</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Your Role</label>
                <select className="w-full bg-[#0d1326] border border-white/10 rounded-xl px-4 py-3 text-slate-300 text-sm focus:outline-none focus:border-green-500/50 transition-colors">
                  <option value="">Select your role</option>
                  <option value="student">Student</option>
                  <option value="professional">Professional</option>
                  <option value="hobbyist">Hobbyist</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Choose Your Requirement</label>
                <select className="w-full bg-[#0d1326] border border-white/10 rounded-xl px-4 py-3 text-slate-300 text-sm focus:outline-none focus:border-green-500/50 transition-colors">
                  <option value="">Select requirement</option>
                  <option value="web">Web Development</option>
                  <option value="app">App Development</option>
                  <option value="seo">SEO</option>
                  <option value="whatsapp">WhatsApp Bulk Marketing Software</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Note</label>
                <textarea
                  rows={4}
                  placeholder="Any additional details or questions..."
                  className="w-full bg-[#0d1326] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-green-500/50 transition-colors resize-none"
                />
              </div>

              <a
                href="https://wa.me/918187944832"
                className="block w-full btn-green text-white font-semibold py-3.5 rounded-xl text-sm text-center"
              >
                💬 Contact Us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Banner */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#128c7e] via-[#25d366] to-[#075e54]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Boost Your Revenue 5X?
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            Start with WhatsApp marketing today. Smarter. Faster. Zero guesswork.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/918187944832"
              className="bg-white text-green-700 font-bold px-10 py-3 rounded-full text-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              💬 Talk to Sales
            </a>
            <Link
              href="/pricing"
              className="border-2 border-white/50 text-white font-semibold px-10 py-3 rounded-full text-sm hover:bg-white/10 transition-all"
            >
              View Pricing →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}