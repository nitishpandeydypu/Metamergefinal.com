"use client";

import { useState } from "react";

// 🔥 Common Feature List
const allFeatures = [
  "WhatsApp Device",
  "Unlimited WhatsApp Messages",
  "Contacts List",
  "Interactive Templates",
  "Send Single Message",
  "Campaign Reports",
  "Opt-Out Management",
  "Auto Reply",
  "Chatbot",
  "Group Grabber",
  "Manage Group",
  "Incoming Messages",
  "WhatsApp Warmer",
  "Ban-Reducing Technology",
  "Call Responder",
  "Follow Up",
  "Live Chat",
  "AI Chatbot",
];

const pricingTabs = [
  {
    category: "Single PC",
    plans: [
      {
        name: "Starter",
        price: "₹1,499",
        desc: "Best for beginners",
        devices: "5 WhatsApp Device",
        included: [
          "WhatsApp Device",
          "Unlimited WhatsApp Messages",
          "Contacts List",
          "Interactive Templates",
          "Send Single Message",
          "Campaign Reports",
          "Opt-Out Management",
        ],
      },
      {
        name: "Professional",
        price: "₹2,499",
        desc: "Perfect for agencies",
        badge: "Most Popular",
        highlight: true,
        devices: "10 WhatsApp Device",
        included: [
          "WhatsApp Device",
          "Unlimited WhatsApp Messages",
          "Contacts List",
          "Interactive Templates",
          "Send Single Message",
          "Campaign Reports",
          "Opt-Out Management",
          "Auto Reply",
          "Chatbot",
          "Group Grabber",
          "Manage Group",
          "Incoming Messages",
          "WhatsApp Warmer",
          "Ban-Reducing Technology",
        ],
      },
      {
        name: "Enterprise",
        price: "₹3,499",
        desc: "High volume businesses",
        devices: "30 WhatsApp Device",
        included: allFeatures,
      },
    ],
  },
  {
    category: "White Label",
    plans: [
      {
        name: "Starter",
        price: "₹4,999",
        included: ["Custom Branding", "Resell License"],
      },
      {
        name: "Business",
        price: "₹9,999",
        badge: "BEST VALUE",
        highlight: true,
        included: [
          "Custom Branding",
          "Resell License",
          "Priority Support",
          "Client Panel",
        ],
      },
    ],
  },
];

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-[#f5f5f5] min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-10">
          Pricing Plans
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-10 gap-4">
          {pricingTabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-2 rounded-full font-medium ${
                activeTab === index
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200"
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
              className={`relative rounded-2xl p-6 bg-white border ${
                plan.highlight
                  ? "border-purple-600 shadow-lg scale-105"
                  : "border-gray-200"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs px-4 py-1 rounded-full">
                  {plan.badge}
                </div>
              )}

              {/* Name */}
              <h3 className="text-xl font-semibold mb-2">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="text-4xl font-bold text-purple-700 mb-1">
                {plan.price}
                <span className="text-sm text-gray-500"> / Yearly</span>
              </div>

              <p className="text-gray-500 mb-4">{plan.desc}</p>

              {/* Devices */}
              {plan.devices && (
                <p className="text-sm text-purple-600 mb-4">
                  {plan.devices}
                </p>
              )}

              {/* Features */}
              <ul className="space-y-2 text-sm mb-6 text-left">
                {(activeTab === 0 ? allFeatures : plan.included).map(
                  (feature, idx) => {
                    const included = plan.included?.includes(feature);

                    return (
                      <li key={idx} className="flex gap-2 items-center">
                        <span
                          className={`font-bold ${
                            included ? "text-green-600" : "text-red-500"
                          }`}
                        >
                          {included ? "✔" : "✖"}
                        </span>
                        <span
                          className={
                            included ? "text-gray-800" : "text-gray-400"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    );
                  }
                )}
              </ul>

              {/* Button */}
              <button className="w-full py-3 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
