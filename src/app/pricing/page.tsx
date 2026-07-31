"use client";

import { useState } from "react";

type Feature = {
  text: string;
  included: boolean;
};

type Plan = {
  name: string;
  type: "windows" | "cloud";
  yearlyPrice: string;
  desc: string;
  features: Feature[];
  highlight?: boolean;
  badge?: string;
};

type Tab = {
  category: string;
  plans: Plan[];
};

const WHATSAPP_NUMBER = "919234547310";

const handleBuyNow = (planName: string) => {
  const message = `Hi 👋 I want to buy the *${planName}* plan from Metamerge 🚀 Please guide me.`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  window.open(url, "_blank");
};

const pricingTabs: Tab[] = [
  {
    category: "Single PC",
    plans: [
      {
        name: "Base",
         type: "windows",
        yearlyPrice: "₹1,499",
        desc: "Best for beginners",
        features: [
          { text: "5 WhatsApp Device", included: true },
          { text: "WhatsApp Bulk Messages", included: true },
          { text: "Contacts List", included: true },
          { text: "Interactive Templates", included: true },
          { text: "Send Single Message", included: true },
          { text: "Campaign Reports", included: true },
          { text: "Opt-Out Management", included: true },
          { text: "Auto Reply", included: true },
          { text: "Chatbot", included: true },
          { text: "Craousel Message", included: true },
          { text: "Group Grabber", included: false },
          { text: "Incoming Messages", included: false },
          { text: "Manage Group", included: false },
          { text: "Call Responder", included: false },
          { text: "Follow Up", included: false },
          { text: "WhatsApp Warmer", included: false },
          { text: "Live Chat", included: false },
          { text: "AI Chatbot", included: false },
        ],
      },

      {
        name: "Pro",
         type: "windows",
        yearlyPrice: "₹1,999",
        desc: "Perfect for agencies",
        badge: "Most Popular",
        highlight: true,
        features: [
          { text: "20 WhatsApp Devices", included: true },
          { text: "WhatsApp Bulk Messages", included: true },
          { text: "Contacts List", included: true },
          { text: "Interactive Templates", included: true },
          { text: "Send Single Message", included: true },
          { text: "Campaign Reports", included: true },
          { text: "Opt-Out Management", included: true },
          { text: "Auto Reply", included: true },
          { text: "Chatbot", included: true },
          { text: "Craousel Message", included: true },
          { text: "Group Grabber", included: true },
          { text: "Incoming Messages", included: true },
          { text: "Manage Group", included: true },
          { text: "WhatsApp Warmer", included: true },
          { text: "Follow Up", included: true },
          { text: "Call Responder", included: false },
          { text: "Live Chat", included: false },
          { text: "AI Chatbot", included: false },
        ],
      },

      {
        name: "Elite",
         type: "windows",
        yearlyPrice: "₹2,999",
        desc: "High volume businesses",
        features: [
          { text: "30 WhatsApp Devices", included: true },
          { text: "WhatsApp Bulk Messages", included: true },
          { text: "Contacts List", included: true },
          { text: "Interactive Templates", included: true },
          { text: "Send Single Message", included: true },
          { text: "Campaign Reports", included: true },
          { text: "Opt-Out Management", included: true },
          { text: "Auto Reply", included: true },
          { text: "Chatbot", included: true },
          { text: "Craousel Message", included: true },
          { text: "Group Grabber", included: true },
          { text: "Incoming Messages", included: true },
          { text: "Manage Group", included: true },
          { text: "Call Responder", included: true },
          { text: "Follow Up", included: true },
          { text: "WhatsApp Warmer", included: true },
          { text: "Live Chat", included: true },
          { text: "AI Chatbot", included: true },
        ],
      },
      {
  name: "Base",
  type: "cloud",
  yearlyPrice: "₹1,999",
  desc: "Best for startups",
  features: [
    { text: "1 WhatsApp Devices", included: true },
    { text: "Cloud Dashboard", included: true },
    { text: "Devices", included: true },
    { text: "Templates", included: true },
    { text: "Contacts Group", included: true },
    { text: "Single Message", included: true },
    { text: "Bulk Messaging", included: true },
    { text: "DRIP Message", included: true },
    { text: "Warmer", included: true },
    { text: "WhatsApp Group", included: true },
    { text: "Keyword Flow", included: true },
    { text: "Chatbot Flow", included: true },
    { text: "Reports", included: true },
    { text: "Lead Management", included: true },
    { text: "Follow-Ups", included: true },
    { text: "Follow-Up Flows", included: true },
    { text: "Contacts List", included: true },
    { text: "Campaign Reports", included: true },
    { text: "Auto Reply", included: true },
    { text: "Chatbot", included: true },
    { text: "Live Chat", included: false },
    { text: "AI Chatbot", included: false },
    { text: "REST API", included: false },
    { text: "Integrations", included: false },
    { text: "GHL Integration", included: false },
    { text: "GHL Automation", included: false },
   
  ],
},

{
  name: "Pro",
  type: "cloud",
  yearlyPrice: "₹2,999",
  desc: "Perfect for agencies",
  highlight: true,
  badge: "Most Popular",
  features: [
    { text: "3 WhatsApp Devices", included: true },
    { text: "Cloud Dashboard", included: true },
    { text: "Devices", included: true },
    { text: "Templates", included: true },
    { text: "Contacts Group", included: true },
    { text: "Single Message", included: true },
    { text: "Bulk Messaging", included: true },
    { text: "DRIP Message", included: true },
    { text: "Warmer", included: true },
    { text: "WhatsApp Group", included: true },
    { text: "Keyword Flow", included: true },
    { text: "Chatbot Flow", included: true },
    { text: "Reports", included: true },
    { text: "Lead Management", included: true },
    { text: "Follow-Ups", included: true },
    { text: "Follow-Up Flows", included: true },
    { text: "Contacts List", included: true },
    { text: "Campaign Reports", included: true },
    { text: "Auto Reply", included: true },
    { text: "Chatbot", included: true },
    { text: "Integrations", included: true },
    { text: "Live Chat", included: true },
    { text: "AI Chatbot", included: false },
    { text: "REST API", included: false },
    { text: "GHL Integration", included: false },
    { text: "GHL Automation", included: false },
   
  ],
},

{
  name: "Elite",
  type: "cloud",
  yearlyPrice: "₹3,999",
  desc: "Advanced cloud automation",
  features: [
    { text: "5 WhatsApp Devices", included: true },
    { text: "Cloud Dashboard", included: true },
    { text: "Devices", included: true },
    { text: "Templates", included: true },
    { text: "Contacts Group", included: true },
    { text: "Single Message", included: true },
    { text: "Bulk Messaging", included: true },
    { text: "DRIP Message", included: true },
    { text: "Warmer", included: true },
    { text: "WhatsApp Group", included: true },
    { text: "Keyword Flow", included: true },
    { text: "Chatbot Flow", included: true },
    { text: "Reports", included: true },
    { text: "Lead Management", included: true },
    { text: "Follow-Ups", included: true },
    { text: "Follow-Up Flows", included: true },
    { text: "Contacts List", included: true },
    { text: "Campaign Reports", included: true },
    { text: "Auto Reply", included: true },
    { text: "Chatbot", included: true },
    { text: "Integrations", included: true },
    { text: "Live Chat", included: true },
    { text: "AI Chatbot", included: true },
    { text: "REST API", included: true },
    { text: "GHL Integration", included: true },
    { text: "GHL Automation", included: true },
  ],
},
    ],
  },

  {
  category: "White Label",
  plans: [

    {
      name: "Windows White Label",
      type: "windows",
      yearlyPrice: "₹14,999",
      desc: "Windows Application + Key Generator",
      highlight: true,
      features: [
        {
          text: "Complete Windows Desktop Application",
          included: true,
        },
        {
          text: "Unlimited License Key Generator",
          included: true,
        },
        {
          text: "Cloud Licensing System",
          included: true,
        },
        {
          text: "Multi User Access",
          included: true,
        },
        {
          text: "Advanced AI Automation",
          included: true,
        },
        {
          text: "Free Branding Setup",
          included: true,
        },
      ],
    },

    {
      name: "Cloud White Label",
      type: "cloud",
      yearlyPrice: "₹24,999",
      desc: "Complete Cloud SaaS Platform",
      highlight: true,
      badge: "Premium",
      features: [
        {
          text: "Complete Cloud SaaS Platform",
          included: true,
        },
        {
          text: "Admin Dashboard",
          included: true,
        },
        {
          text: "Unlimited User Access",
          included: true,
        },
        {
          text: "API Integrations",
          included: true,
        },
        {
          text: "Advanced AI Automation",
          included: true,
        },
        {
          text: "Cloud Hosting Setup",
          included: true,
        },
        {
          text: "Custom Branding",
          included: true,
        },
      ],
    },
  ],
},
];

export default function Pricing() {
  const [activeTab, setActiveTab] = useState(0);
  const [softwareType, setSoftwareType] = useState("windows");

  return (
    <div className="hero-bg min-h-screen py-20 px-6 text-[var(--text-primary)]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-black">
  Metamerge{" "}
  <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
    Pricing Plans
  </span>
</h1>

          <p className="text-[var(--text-muted)] mt-3">
            Choose the perfect plan for your business growth 🚀
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 gap-4">
          {pricingTabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                activeTab === index
  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/30"
                  : "bg-[var(--surface)] text-[var(--text-secondary)] border border-[var(--border-soft)] hover:bg-[var(--bg-tertiary)]"
              }`}
            >
              {tab.category}
            </button>
          ))}
        </div>
        {/* Software Toggle */}
  <div className="flex justify-center mb-12 gap-4 flex-wrap">

    <button
      onClick={() => setSoftwareType("windows")}
      className={`px-6 py-3 rounded-full font-medium transition ${
        softwareType === "windows"
          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/30"
          : "bg-[var(--surface)] text-[var(--text-secondary)] border border-[var(--border-soft)] hover:bg-[var(--bg-tertiary)]"
      }`}
    >
      Windows Software
    </button>

    <button
      onClick={() => setSoftwareType("cloud")}
      className={`px-6 py-3 rounded-full font-medium transition ${
        softwareType === "cloud"
  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/30"
  : "bg-[var(--surface)] text-[var(--text-secondary)] border border-[var(--border-soft)] hover:bg-[var(--bg-tertiary)]"
      }`}
    >
      Cloud Software
    </button>

  </div>
{/* Cards */}
<div
  className={`grid gap-8 ${
    pricingTabs[activeTab].plans.filter(
      (plan) => plan.type === softwareType
    ).length === 1
      ? "grid-cols-1 place-items-center"
      : "md:grid-cols-2 lg:grid-cols-3"
  }`}
>

  {pricingTabs[activeTab].plans
    .filter((plan) => plan.type === softwareType)
    .map((plan, i) => (

      <div
        key={i}
        className={`card-glass relative w-full max-w-sm rounded-2xl p-6 transition-all duration-300
        hover:-translate-y-2 hover:shadow-xl
        ${
         plan.highlight
  ? "border-purple-500 scale-105 shadow-[0_0_50px_rgba(139,92,246,0.25)]"
           : "border-[var(--border-soft)] shadow-[0_18px_60px_var(--shadow-color)]"
        }`}
      >

              {/* Badge */}
              {plan.badge && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 
                  bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-4 py-1 rounded-full"
                >
                  🔥 {plan.badge}
                </div>
              )}

              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="text-5xl font-black mb-2 text-[var(--text-primary)]">
                {plan.yearlyPrice}

                <span className="text-sm text-[var(--text-muted)]">
                  {" "}
                  / year
                </span>
              </div>

              <p className="text-[var(--text-muted)] mb-6">{plan.desc}</p>

              <ul className="space-y-2 mb-6 text-sm">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span
                      className={`font-bold ${
                        f.included ? "text-blue-400" : "text-red-500"
                      }`}
                    >
                      {f.included ? "✔" : "✖"}
                    </span>

                    <span
                      className={`${
                        f.included ? "text-[var(--text-secondary)]" : "text-[var(--text-muted-strong)]"
                      }`}
                    >
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                onClick={() => handleBuyNow(plan.name)}
                className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${
  plan.highlight
    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 shadow-lg shadow-purple-500/30"
    : "bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-soft)] hover:bg-[var(--surface-strong)]"
}`}
              >
                Buy Now
              </button>

            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="text-center text-purple-400 text-sm mt-10">
          ⚠ GST Extra as per applicable rates
        </p>

      </div>
    </div>
  );
}
