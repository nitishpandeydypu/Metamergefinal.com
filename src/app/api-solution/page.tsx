import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WhatsApp Business API – Metamerge",
  description: "Seamless WhatsApp Business API integration for your business by Deropo.",
};

const standardFeatures = [
  "Free 1000 Conversation Per Month",
  "Free WhatsApp API Approval & Setup",
  "Free User Initiated Conversation",
  "0.78 Business Initiated Conversation",
  "1 Account Login/OTP Service",
  "Unsubscribers List / Advance Setting",
  "Chatbot Creation",
  "Bulk Messaging & Scheduling",
  "Dashboard Analytics And Advance Reporting",
  "WhatsApp Hook Number",
  "Free Welcome Message",
  "48 Hours SLA For Support",
];

const professionalFeatures = [
  ...standardFeatures.slice(0, -1).map((f, i) => i === 4 ? "2 Account Login/OTP Service" : f),
  "Integration With Google Sheet, Website, Software, Application, WooCommerce",
  "48 Hours SLA For Support",
];

const integrations = [
  { icon: "🌐", title: "Website Integration", desc: "Integrate WhatsApp with your website to facilitate quick sales. Design auto-chat buttons allowing visitors to initiate chats directly on WhatsApp." },
  { icon: "📱", title: "Application Integration", desc: "Manage connectivity with existing app users by integrating WhatsApp into your application for efficient communication and enhanced user experience." },
  { icon: "💻", title: "Software Integration", desc: "Enhance your software with WhatsApp for direct chat functionality. Users can easily connect with your team to resolve issues conveniently." },
  { icon: "📣", title: "Social Media Integration", desc: "Social media platforms are the fastest way to connect with your audience. By integrating WhatsApp, followers can directly chat with you." },
];

const features = [
  "Seamless Integration", "Marketing Campaign Planning", "Broadcast Management",
  "Chatbot Development", "Template Management", "WhatsApp Integration & Advanced Reporting",
];

export default function ApiSolutionPage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-bg grid-bg py-14 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2  items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              💬 WhatsApp Business API
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              WhatsApp<br />
              <span className="green-gradient-text">Business API</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
              Businesses are increasingly using WhatsApp to communicate with clients on their preferred platform. The perfect tool for seamless connectivity across all digital platforms.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-green text-white font-semibold px-8 py-3 rounded-full text-sm">Free Trial →</Link>
              <a href="https://wa.me/917827944832" className="border border-green-500/40 text-green-400 font-semibold px-8 py-3 rounded-full text-sm hover:bg-green-500/10 transition-all">
                Contact Us
              </a>
            </div>
          </div>
          <div className="flex ">
            <img
              src="/4428861.jpg"
              alt="Digital Marketing"
className="w-[500px] h-auto rounded-3xl object-cover"            />
          </div>
        </div>
      </section>

      {/* Features pills */}
      <section className="py-10 px-6 bg-[#0d1326]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-center text-2xl font-bold text-white mb-8">Affordable Pricing with No Setup Fee</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {features.map((f) => (
              <span key={f} className="bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium px-5 py-2.5 rounded-full">
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-[#0a0f1e]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">Pricing</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">WhatsApp API <span className="green-gradient-text">Pricing Plans</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Standard */}
            <div className="bg-[#111827] border border-white/10 rounded-2xl p-8 flex flex-col">
              <div className="mb-6">
                <p className="text-slate-400 text-sm uppercase tracking-wider mb-2">Standard</p>
                <div className="flex items-end gap-1">
                  <span className="font-heading text-4xl font-extrabold text-white">₹9,999</span>
                  <span className="text-slate-400 text-sm mb-1">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {standardFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-green-400 mt-0.5">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-green text-white text-center font-semibold py-3 rounded-xl text-sm">Get Started</Link>
            </div>

            {/* Professional */}
            <div className="bg-gradient-to-b from-green-900/30 to-[#111827] border border-green-500/30 rounded-2xl p-8 flex flex-col relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-teal-500 text-white text-xs font-bold px-4 py-1 rounded-full">POPULAR</div>
              <div className="mb-6">
                <p className="text-green-400 text-sm uppercase tracking-wider mb-2">Professional</p>
                <div className="flex items-end gap-1">
                  <span className="font-heading text-4xl font-extrabold text-white">₹14,999</span>
                  <span className="text-slate-400 text-sm mb-1">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {professionalFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-green-400 mt-0.5">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-green text-white text-center font-semibold py-3 rounded-xl text-sm">Get Started</Link>
            </div>

            {/* Custom */}
            <div className="bg-[#111827] border border-white/10 rounded-2xl p-8 flex flex-col">
              <div className="mb-6">
                <p className="text-slate-400 text-sm uppercase tracking-wider mb-2">User Friendly Plan</p>
                <div className="flex items-end gap-1">
                  <span className="font-heading text-4xl font-extrabold text-white">₹2,000+</span>
                  <span className="text-slate-400 text-sm mb-1">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {["₹2,000 — 1 Account Login", "₹3,000 — 2 Account Login", "₹5,000 — 4 Account Login", "₹10,000 — 10 Account Login"].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-blue-400 mt-0.5">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary text-white text-center font-semibold py-3 rounded-xl text-sm">Inquire Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-6 bg-[#0d1326]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">Integration</p>
            <h2 className="font-heading text-4xl font-bold">WhatsApp Business <span className="green-gradient-text">API Integration</span></h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">Easily connect with customers on any platform using our intuitive WhatsApp Business API integration tool.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((item, i) => (
              <div key={i} className="bg-[#111827] border border-white/5 rounded-2xl p-6 hover:border-green-500/30 hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-heading font-bold text-white mb-2 text-base">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
