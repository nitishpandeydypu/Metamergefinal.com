"use client";

import { useState } from "react";

// 🔥 Common Feature List (Same for comparison)
const allFeatures = [
  "WhatsApp Devices",
  "WhatsApp Bulk Messages",
  "Contacts List",
  "Interactive Templates",
  "Send Single Message",
  "Campaign Reports",
  "Opt-Out Management",
  "Auto Reply",
  "Chatbot",
  "Group Grabber",
  "Manage Group",
  "Call Responder",
  "Follow Up",
  "WhatsApp Warmer",
  "Live Chat",
  "AI Chatbot",
];

const pricingTabs = [
  {
    category: "Single PC",
    plans: [
      {
        name: "Starter",
        price: "₹999",
        desc: "Best for beginners",
        badge: null,
        highlight: false,
        included: [
          "WhatsApp Devices",
          "WhatsApp Bulk Messages",
          "Contacts List",
          "Interactive Templates",
          "Send Single Message",
          "Campaign Reports",
          "Opt-Out Management",
        ],
        devices: "1 Device",
      },
      {
        name: "Professional",
        price: "₹1,499",
        desc: "Perfect for agencies",
        badge: "Most Popular",
        highlight: true,
        included: [
          "WhatsApp Devices",
          "WhatsApp Bulk Messages",
          "Contacts List",
          "Interactive Templates",
          "Send Single Message",
          "Campaign Reports",
          "Opt-Out Management",
          "Auto Reply",
          "Chatbot",
          "Group Grabber",
          "Manage Group",
          "WhatsApp Warmer",
        ],
        devices: "10 Devices",
      },
      {
        name: "Enterprise",
        price: "₹1,999",
        desc: "High volume businesses",
        badge: null,
        highlight: false,
        included: allFeatures,
        devices: "20 Devices",
      },
    ],
  },
  {
    category: "White Label",
    plans: [
      {
        name: "Starter",
        price: "₹4,999",
        desc: "Start reselling",
        included: ["Custom Branding", "Resell License", "Basic Support"],
        highlight: false,
      },
      {
        name: "Business",
        price: "₹9,999",
        desc: "Best value",
        badge: "BEST VALUE",
        included: [
          "Custom Branding",
          "Resell License",
          "Priority Support",
          "Client Panel",
        ],
        highlight: true,
      },
    ],
  },
];

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-[#0b1220] min-h-screen text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">

        <p className="text-blue-400 text-sm font-semibold">PRICING</p>
        <h2 className="text-4xl font-bold mb-10">
          Choose Your <span className="text-blue-400">Plan</span>
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-10 gap-4">
          {pricingTabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-2 rounded-full font-medium ${
                activeTab === index
                  ? "bg-blue-500"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              {tab.category}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingTabs[activeTab].plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-6 text-left border bg-gradient-to-b from-[#0f1a2e] to-[#0b1220] ${
                plan.highlight
                  ? "border-green-500 shadow-lg shadow-green-900/40 scale-105"
                  : "border-gray-800"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-xs px-3 py-1 rounded-full">
                  {plan.badge}
                </div>
              )}

              <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>

              <div className="text-3xl font-bold text-green-400 mb-1">
                {plan.price}
                <span className="text-sm text-gray-400"> /year</span>
              </div>

              <p className="text-gray-400 mb-4">{plan.desc}</p>

              {plan.devices && (
                <p className="text-sm text-blue-400 mb-4">
                  {plan.devices}
                </p>
              )}

              <ul className="space-y-2 mb-6 text-sm">
                {(activeTab === 0 ? allFeatures : plan.included).map(
                  (feature, idx) => {
                    const isIncluded = plan.included.includes(feature);

                    return (
                      <li key={idx} className="flex gap-2 items-center">
                        <span
                          className={`font-bold ${
                            isIncluded ? "text-green-400" : "text-red-500"
                          }`}
                        >
                          {isIncluded ? "✔" : "✖"}
                        </span>
                        <span
                          className={`${
                            isIncluded ? "text-gray-200" : "text-gray-500"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    );
                  }
                )}
              </ul>

              <button className="w-full py-3 rounded-lg font-semibold bg-green-600 hover:bg-green-700 transition">
                Buy Now
              </button>
            </div>
          ))}
        </div>

        <p className="mt-10 text-gray-500 text-sm">
          No API Required • No Ban Risk • Lifetime Support Included
        </p>
      </div>
    </div>
  );
}
