"use client";

import { useState } from "react";

const pricingTabs = [
  {
    category: "Single PC",
    plans: [
      {
        name: "Lite",
        price: "₹1,499",
        features: [
          "5 WhatsApp Device",
          "Bulk Messaging",
          "CSV Contact Import",
          "Basic Scheduling",
          "Interactive Templates",
          "1-to-1 Messaging",
        ],
        highlight: false,
      },
      {
        name: "Pro",
        price: "₹1,999",
        badge: "POPULAR",
        features: [
          "10 WhatsApp Device",
          "Bulk Messaging",
          "CSV Contact Import",
          "Smart Scheduling",
          "Interactive Templates",
          "1-to-1 Messaging",
          "Group Grabber",
          "Follow Up",
        ],
        highlight: true,
      },
      {
        name: "Prime",
        price: "₹2,999",
        features: [
          "20 WhatsApp Device",
          "Bulk Messaging",
          "CSV Contact Import",
          "Smart Scheduling",
          "Interactive Templates",
          "1-to-1 Messaging",
          "Live Chat",
          "AI Chatbot",
        ],
        highlight: false,
      },
    ],
  },
  {
    category: "White Label",
    plans: [
      {
        name: "Starter",
        price: "₹4,999",
        features: [
          "Custom Branding",
          "Resell License",
          "Basic Support",
        ],
        highlight: false,
      },
      {
        name: "Business",
        price: "₹9,999",
        badge: "BEST VALUE",
        features: [
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
        
        {/* Heading */}
        <p className="text-blue-400 text-sm font-semibold">
          PRICING
        </p>
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

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingTabs[activeTab].plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-6 text-left border bg-gradient-to-b from-[#0f1a2e] to-[#0b1220] ${
                plan.highlight
                  ? "border-purple-500 shadow-lg shadow-purple-900/40"
                  : "border-gray-800"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-xs px-3 py-1 rounded-full">
                  {plan.badge}
                </div>
              )}

              {/* Name */}
              <h3 className="text-lg font-semibold text-blue-400 mb-2">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="text-3xl font-bold mb-6">
                {plan.price}
                <span className="text-sm text-gray-400"> /year</span>
              </div>

              {/* Features */}
              <ul className="space-y-2 text-gray-300 mb-6">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-green-400">✔</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`w-full py-3 rounded-lg font-semibold bg-gradient-to-r ${
                  plan.highlight
                    ? "from-purple-500 to-indigo-500"
                    : "from-blue-500 to-indigo-500"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Footer Line */}
        <p className="mt-10 text-gray-500 text-sm">
          No API Required • No Ban Risk • Lifetime Support Included
        </p>
      </div>
    </div>
  );
}
