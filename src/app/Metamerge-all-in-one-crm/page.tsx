import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Metamerge All-In-One CRM – Manage Sales, Marketing & Support",
  description:
    "Metamerge All-In-One CRM software helps Indian businesses manage leads, invoices, sales, support and marketing from one smart dashboard.",
};

const features = [
  {
    icon: "👥",
    title: "Lead & Client Management",
    desc: "Capture, assign, and manage leads efficiently while keeping complete client history at your fingertips.",
    color: "green",
  },
  {
    icon: "🧾",
    title: "Invoice Generation & Payment Links",
    desc: "Generate invoices, share payment links & get paid faster — seamlessly and securely inside your CRM.",
    color: "blue",
  },
  {
    icon: "📊",
    title: "All-in-One CRM Dashboard",
    desc: "Enjoy a seamless experience with everything you need — sales, support, marketing — all in one place.",
    color: "violet",
  },
  {
    icon: "🤖",
    title: "Marketing Automation",
    desc: "Automate follow-ups, email campaigns, WhatsApp messages, and drip sequences — zero manual effort.",
    color: "orange",
  },
  {
    icon: "🎯",
    title: "Task & Pipeline Management",
    desc: "Track every deal stage with visual pipelines and assign tasks to your team with deadlines and priorities.",
    color: "pink",
  },
  {
    icon: "📞",
    title: "Customer Support Ticketing",
    desc: "Manage support tickets, assign agents, set SLAs, and resolve issues faster — all from one panel.",
    color: "yellow",
  },
];

const colorMap: Record<string, string> = {
  green: "bg-green-500/10 border-green-500/20 text-green-400",
  blue: "bg-blue-500/10 border-blue-500/20 text-blue-400",
  violet: "bg-violet-500/10 border-violet-500/20 text-violet-400",
  orange: "bg-orange-500/10 border-orange-500/20 text-orange-400",
  pink: "bg-pink-500/10 border-pink-500/20 text-pink-400",
  yellow: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
};

const stats = [
  { value: "500+", label: "Happy Customers" },
  { value: "1000+", label: "Daily Active Users" },
  { value: "40%", label: "Customer Growth in Last 30 Days" },
  { value: "98%", label: "Customer Satisfaction Rate" },
];

const plans = [
  {
    name: "Personal",
    price: "2,499",
    period: "3 Months",
    color: "blue",
    popular: false,
    features: [
      "White Label: Your logo, colors & branding",
      "Custom Domain: crm.yourbrand.com",
      "Admin Panel: Manage users & resellers",
      "Unlimited Users: Clients & staff",
      "CRM Tools: Lead, invoice & task management",
      "Priority Support: Fast & dedicated help",
      "Free Setup: Quick launch & onboarding",
    ],
  },
  {
    name: "Enterprise",
    price: "3,499",
    period: "6 Months",
    color: "green",
    popular: true,
    features: [
      "White Label: Your logo, colors & branding",
      "Custom Domain: crm.yourbrand.com",
      "Admin Panel: Manage users & resellers",
      "Unlimited Users: Clients & staff",
      "CRM Tools: Lead, invoice & task management",
      "Priority Support: Fast & dedicated help",
      "Free Setup: Quick launch & onboarding",
    ],
  },
  {
    name: "Professional",
    price: "4,999",
    period: "Yearly",
    color: "violet",
    popular: false,
    features: [
      "White Label: Your logo, colors & branding",
      "Custom Domain: crm.yourbrand.com",
      "Admin Panel: Manage users & resellers",
      "Unlimited Users: Clients & staff",
      "CRM Tools: Lead, invoice & task management",
      "Priority Support: Fast & dedicated help",
      "Free Setup: Quick launch & onboarding",
    ],
  },
];

const planColorMap: Record<string, string> = {
  blue: "border-blue-500/30 hover:border-blue-500/50",
  green: "border-green-500/40 hover:border-green-500/60",
  violet: "border-violet-500/30 hover:border-violet-500/50",
};

const planBadgeMap: Record<string, string> = {
  blue: "bg-blue-500/10 text-blue-400",
  green: "bg-green-500/10 text-green-400",
  violet: "bg-violet-500/10 text-violet-400",
};

const planPriceMap: Record<string, string> = {
  blue: "text-blue-400",
  green: "text-green-400",
  violet: "text-violet-400",
};

const whyTrust = [
  {
    icon: "🔒",
    title: "Secure & Reliable",
    desc: "Enterprise-grade security with 99.9% uptime so your business data is always safe and accessible.",
  },
  {
    icon: "🌐",
    title: "White Label Ready",
    desc: "Launch the CRM under your own brand with custom domain, logo, and colors — fully yours.",
  },
  {
    icon: "⚡",
    title: "Fast Onboarding",
    desc: "Get set up within hours, not weeks. Our team handles everything from setup to training.",
  },
  {
    icon: "📱",
    title: "Mobile Friendly",
    desc: "Manage your entire business from your phone — the CRM is fully optimized for mobile use.",
  },
];

export default function MetamergeAllInOneCRM() {
  return (
    <div>
      {/* Hero */}
     <section className="hero-bg grid-bg relative overflow-hidden py-14 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              🌐  All-In-One CRM Software
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Manage Sales, Marketing<br />
              <span className="gradient-text">Support & More
In One App</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
From lead generation to closing sales, supporting customers to marketing automation — everything is now in your control. Boost your business with our All-In-One CRM software designed for Indian entrepreneurs.            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary text-white font-semibold px-8 py-3 rounded-full text-sm">Contact Us →</Link>
              <a href="https://wa.me/917827944832" className="btn-green text-white font-semibold px-8 py-3 rounded-full text-sm flex items-center gap-2">
                💬 WhatsApp Us
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/4716.png"
              alt="Website Development"
              className="w-100 h-100 md:w-100 md:h-100 object-cover "
            />
          </div>
        </div>
      </section>

      {/* Features / What We Do */}
      <section className="py-20 px-6 bg-[#0d1326]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Don't Be Afraid to Give Up the Good{" "}
              <span className="gradient-text">to Go for the Great</span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto text-base">
              A complete suite of CRM tools designed to automate, manage, and grow your business without switching between apps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="group bg-[#111827] border border-white/5 rounded-2xl p-8 hover:border-white/10 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-black/20"
              >
                <div
                  className={`w-14 h-14 rounded-xl border flex items-center justify-center text-2xl mb-5 ${colorMap[f.color]}`}
                >
                  {f.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-3">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{f.desc}</p>
                <span className="text-violet-400 text-sm font-medium flex items-center gap-1">
                  Read More <span>→</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Powering Business Growth */}
      <section className="py-20 px-6 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Powering Business Growth with{" "}
              <span className="gradient-text">Smart CRM Solutions</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              At Metamerge, we build powerful, user-friendly CRM software that helps businesses automate their sales, support, and marketing — all from one smart dashboard.
            </p>

            <div className="space-y-5 mb-8">
              {[
                { label: "Customer Satisfaction", value: 98 },
                { label: "CRM Features Coverage", value: 95 },
                { label: "Client Support & Service", value: 99 },
              ].map((bar) => (
                <div key={bar.label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300 text-sm font-medium">{bar.label}</span>
                    <span className="text-green-400 text-sm font-semibold">{bar.value}%</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-500 to-emerald-400 h-2 rounded-full"
                      style={{ width: `${bar.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/917827944832"
              className="btn-green inline-block text-white font-semibold px-8 py-3 rounded-full text-sm"
            >
              💬 Talk to Our Team
            </a>
          </div>

          {/* Why Trust cards */}
          <div className="grid grid-cols-2 gap-4">
            {whyTrust.map((w) => (
              <div
                key={w.title}
                className="bg-[#111827] border border-white/5 rounded-2xl p-6 hover:border-violet-500/20 transition-colors"
              >
                <div className="text-3xl mb-3">{w.icon}</div>
                <h3 className="font-heading font-bold text-white text-sm mb-2">{w.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="pricing" className="py-20 px-6 bg-[#0d1326]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3">Pricing Plan</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Choose Your <span className="gradient-text">Pricing Plan</span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto text-base">
              Transparent pricing with no hidden charges. Pick the plan that fits your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-[#111827] border rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 ${planColorMap[plan.color]}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-green-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <span
                    className={`inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border mb-4 ${planBadgeMap[plan.color]} border-current`}
                  >
                    {plan.name}
                  </span>
                  <div className="flex items-start justify-center gap-1">
                    <span className="text-slate-400 text-lg mt-2">₹</span>
                    <span className={`font-heading text-5xl font-extrabold ${planPriceMap[plan.color]}`}>
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm mt-1">/ {plan.period}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-slate-300 text-sm">
                      <span className="w-5 h-5 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/917827944832?text=Hi%20I%20would%20like%20to%20Buy%20Metamerge%20All%20in%20One%20CRM"
                  className={`block w-full text-center font-semibold py-3 rounded-xl text-sm transition-all duration-300 ${
                    plan.popular
                      ? "btn-green text-white"
                      : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                  }`}
                >
                  💬 Buy Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Businesses Trust Metamerge */}
      <section className="py-20 px-6 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Metamerge All-in-One CRM
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-14">
            Why Businesses <span className="gradient-text">Trust Metamerge</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Happy Customers", color: "text-green-400" },
              { value: "1000+", label: "Daily Active Users", color: "text-blue-400" },
              { value: "40%", label: "Customer Growth in Last 30 Days", color: "text-violet-400" },
              { value: "98%", label: "Customer Satisfaction Rate", color: "text-yellow-400" },
            ].map((s) => (
              <div
                key={s.label}
                className="glass-card border border-white/10 rounded-2xl p-8 hover:border-brand-green/30 transition-all hover:-translate-y-1"
              >
                <p className={`font-heading text-4xl md:text-5xl font-extrabold ${s.color} mb-3`}>
                  {s.value}
                </p>
                <p className="text-slate-400 text-sm leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              href="https://wa.me/917827944832"
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
