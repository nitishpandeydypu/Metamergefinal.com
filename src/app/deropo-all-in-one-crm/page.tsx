import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Metamerge All-In-One CRM – Manage Sales, Marketing & Support",
  description: "All-in-one CRM software for Indian entrepreneurs — manage leads, invoices, marketing, and support in one app.",
};

const crmFeatures = [
  { icon: "👥", title: "Lead & Client Management", desc: "Capture, assign, and manage leads efficiently while keeping complete client history at your fingertips." },
  { icon: "🧾", title: "Invoice Generation & Payment Links", desc: "Generate invoices, share payment links and get paid faster — seamlessly and securely inside your CRM." },
  { icon: "📊", title: "All-in-One CRM Dashboard", desc: "Enjoy a seamless experience with everything you need — sales, support, marketing — all in one place." },
];

const planFeatures = [
  "White Label: Your logo, colors & branding",
  "Custom Domain: crm.yourbrand.com",
  "Admin Panel: Manage users & resellers",
  "Unlimited Users: Clients & staff",
  "CRM Tools: Lead, invoice & task management",
  "Priority Support: Fast & dedicated help",
  "Free Setup: Quick launch & onboarding",
];

const plans = [
  { name: "Personal", price: "₹2,499", period: "/3 Month", highlight: false },
  { name: "Enterprise", price: "₹3,499", period: "/6 Month", highlight: true },
  { name: "Professional", price: "₹4,999", period: "/Yearly", highlight: false },
];

const stats = [
  { value: "500+", label: "Happy Customers" },
  { value: "200+", label: "Daily Active Users" },
  { value: "40%", label: "Customer Growth (30 Days)" },
  { value: "98%", label: "Customer Satisfaction Rate" },
];

export default function CrmPage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-bg grid-bg py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            🚀 All-In-One CRM Software
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-extrabold leading-tight mb-6 max-w-4xl mx-auto">
            Manage Sales, Marketing, Support &amp; More{" "}
            <span className="gradient-text">In One App</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            From lead generation to closing sales, supporting customers to marketing automation — everything is now in your control. Boost your business with our CRM designed for Indian entrepreneurs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-white font-semibold px-8 py-3 rounded-full text-sm">Get Free Demo →</Link>
            <a href="#pricing" className="border border-violet-500/40 text-violet-400 font-semibold px-8 py-3 rounded-full text-sm hover:bg-violet-500/10 transition-all">
              Buy Now
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-[#0d1326]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Don&apos;t be afraid to give up the good <span className="gradient-text">to go for the great</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {crmFeatures.map((f, i) => (
              <div key={i} className="bg-[#111827] border border-white/5 rounded-2xl p-8 text-center hover:border-violet-500/30 hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl mb-5">{f.icon}</div>
                <h3 className="font-heading text-xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-6 bg-[#0a0f1e]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Powering Business Growth with <span className="gradient-text">Smart CRM Solutions</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            At Metamerge, we build powerful, user-friendly CRM software that helps businesses automate their sales, support, and marketing — all from one smart dashboard. Trusted by businesses across India for CRM, automation, and growth solutions.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-[#0d1326]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-center text-white mb-12">Why Businesses Trust Metamerge</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="bg-[#111827] border border-white/5 rounded-2xl p-6 text-center">
                <p className="font-heading text-4xl font-extrabold gradient-text mb-2">{s.value}</p>
                <p className="text-slate-400 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 bg-[#0a0f1e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3">Pricing</p>
            <h2 className="font-heading text-4xl font-bold">Choose Your <span className="gradient-text">Pricing Plan</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 flex flex-col border transition-all duration-300 hover:-translate-y-1 ${
                  plan.highlight
                    ? "bg-gradient-to-b from-violet-900/40 to-[#111827] border-violet-500/40 shadow-lg shadow-violet-500/10"
                    : "bg-[#111827] border-white/10"
                }`}
              >
                {plan.highlight && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-violet-500 to-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full">POPULAR</span>
                  </div>
                )}
                <div className="mb-6 text-center">
                  <p className={`text-sm uppercase tracking-wider mb-2 font-semibold ${plan.highlight ? "text-violet-400" : "text-slate-400"}`}>{plan.name}</p>
                  <div className="flex items-end gap-1 justify-center">
                    <span className="font-heading text-4xl font-extrabold text-white">{plan.price}</span>
                    <span className="text-slate-400 text-sm mb-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {planFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className={plan.highlight ? "text-violet-400 mt-0.5" : "text-emerald-400 mt-0.5"}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/918187944832?text=Hi%20I%20would%20like%20to%20Buy%20All%20in%20CRM"
                  className={`text-white text-center font-semibold py-3 rounded-xl text-sm block ${plan.highlight ? "btn-primary" : "btn-green"}`}
                >
                  Buy Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
