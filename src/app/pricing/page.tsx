import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing – Metamerge WhatsApp Marketing Plans",
  description: "Flexible pricing plans for WhatsApp marketing — Single PC, White Label, and Cloud solutions.",
};

const pricingTabs = [
  export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "₹999",
      desc: "Best for beginners",
      features: [
        "1 WhatsApp Device",
        "Bulk Messages",
        "Contacts List",
        "Interactive Templates",
        "Campaign Reports",
      ],
      highlight: false,
    },
    {
      name: "Professional",
      price: "₹1,499",
      desc: "Most Popular",
      features: [
        "10 WhatsApp Devices",
        "Bulk Messages",
        "Auto Reply + Chatbot",
        "Group Grabber",
        "Manage Groups",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "₹1,999",
      desc: "For High Volume Business",
      features: [
        "20 WhatsApp Devices",
        "Everything Included",
        "AI Chatbot",
        "Live Chat",
        "Call Responder",
      ],
      highlight: false,
    },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">
        Pricing Plans
      </h2>

      <div className="grid md:grid-cols-3 gap-6 px-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow-lg bg-white ${
              plan.highlight ? "border-2 border-green-500 scale-105" : ""
            }`}
          >
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-3xl font-bold text-green-600">
              {plan.price} <span className="text-sm">/year</span>
            </p>
            <p className="text-gray-500 mb-4">{plan.desc}</p>

            <ul className="space-y-2 mb-6">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  ✅ {f}
                </li>
              ))}
            </ul>

            <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
  {
    category: "White Label",
    plans: [
      {
        name: "Reseller Starter",
        price: "₹9,999", period: "/year",
        features: ["Your Brand & Logo", "Custom Domain", "Up to 10 Sub-Accounts", "Basic CRM Access", "WhatsApp Support", "Reseller Dashboard"],
        color: "orange", highlight: false,
      },
      {
        name: "Reseller Pro",
        price: "₹19,999", period: "/year",
        features: ["Full White Label", "Custom Domain", "Unlimited Sub-Accounts", "Full CRM Access", "Priority Dedicated Support", "Marketing Materials", "Monthly Training"],
        color: "pink", highlight: true,
      },
    ],
  },
];

const colorVariants: Record<string, { card: string; badge: string; btn: string }> = {
  blue: { card: "border-blue-500/20 hover:border-blue-500/40", badge: "text-blue-400", btn: "btn-primary" },
  purple: { card: "border-purple-500/30 shadow-purple-500/10", badge: "text-purple-400", btn: "btn-primary" },
  green: { card: "border-green-500/20 hover:border-green-500/40", badge: "text-green-400", btn: "btn-green" },
  orange: { card: "border-orange-500/20 hover:border-orange-500/40", badge: "text-orange-400", btn: "btn-primary" },
  pink: { card: "border-pink-500/30 shadow-pink-500/10", badge: "text-pink-400", btn: "btn-primary" },
};

export default function PricingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-bg grid-bg py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            💰 Transparent Pricing
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Metamerge <span className="gradient-text">Pricing Plans</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed mb-4">
            Flexible plans for WhatsApp marketing — no hidden fees, no setup costs.
          </p>
          <p className="text-amber-400 text-sm font-medium">⚠️ GST extra as per applicable rates</p>
        </div>
      </section>

      {/* Pricing sections */}
      {pricingTabs.map((section) => (
        <section key={section.category} className="py-14 px-6 odd:bg-[#0d1326] even:bg-[#0a0f1e]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">{section.category}</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
                {section.category} <span className="gradient-text">Plans</span>
              </h2>
            </div>
            <div className={`grid gap-6 ${section.plans.length === 2 ? "md:grid-cols-2 max-w-3xl mx-auto" : "md:grid-cols-3"}`}>
              {section.plans.map((plan) => {
                const v = colorVariants[plan.color];
                return (
                  <div key={plan.name} className={`relative bg-[#111827] border rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${plan.highlight ? `shadow-lg ${v.card}` : `border-white/10 ${v.card}`}`}>
                    {plan.highlight && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full">POPULAR</span>
                      </div>
                    )}
                    <div className="mb-6">
                      <p className={`text-sm uppercase tracking-wider font-semibold mb-2 ${v.badge}`}>{plan.name}</p>
                      <div className="flex items-end gap-1">
                        <span className="font-heading text-4xl font-extrabold text-white">{plan.price}</span>
                        <span className="text-slate-400 text-sm mb-1">{plan.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className={`mt-0.5 ${v.badge}`}>✓</span> {f}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className={`${v.btn} text-white text-center font-semibold py-3 rounded-xl text-sm block`}>
                      Get Started
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Custom plan CTA */}
      <section className="py-14 px-6 bg-gradient-to-r from-[#128c7e] via-[#25d366] to-[#075e54]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Need a Custom Plan?</h2>
          <p className="text-green-100 mb-8 text-lg">
            Contact us for a customized WhatsApp marketing plan tailored to your business needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/917827944832" className="bg-white text-green-700 font-bold px-10 py-3 rounded-full text-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              💬 Chat on WhatsApp
            </a>
            <Link href="/contact" className="border-2 border-white/50 text-white font-semibold px-10 py-3 rounded-full text-sm hover:bg-white/10 transition-all">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* WhatsApp API Pricing teaser */}
      <section className="py-16 px-6 bg-[#0a0f1e]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Also check out our <span className="gradient-text">WhatsApp API Plans</span>
          </h2>
          <p className="text-slate-400 mb-8">For businesses needing official WhatsApp Business API with chatbots, bulk broadcast & analytics.</p>
          <Link href="/api-solution" className="btn-green inline-block text-white font-semibold px-10 py-3 rounded-full text-sm">
            View API Pricing →
          </Link>
        </div>
      </section>
    </div>
  );
}
