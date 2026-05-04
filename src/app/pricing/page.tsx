"use client";

import { useState } from "react";

type Feature = {
  text: string;
  included: boolean;
};

type Plan = {
  name: string;
  price: string;
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
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
const pricingTabs: Tab[] = [
  {
    category: "Single PC",
    plans: [
      {
        name: "Base",
        price: "₹1,499",
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
        price: "₹1,999",
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
        price: "₹2,999",
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
    ],
  },
  {
    category: "White Label",
    plans: [
      {
        name: "White Label",
        price: "₹14,999",
        desc: "Application + Key Generator",
        highlight: true,
        features: [
          { text: "Application + Unlimited Key Generator", included: true },
          { text: "Complete Desktop Application", included: true },
          { text: "Cloud Based Licensing System", included: true },
          { text: "Advanced AI Automation", included: true },
          { text: "Multi-User Access", included: true },
          { text: "Multi-Device Support", included: true },
        ],
      },
    ],
  },
];
export default function Pricing() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-white min-h-screen py-20 px-6 text-gray-900">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            Metamerge <span className="text-green-500">Pricing Plans</span>
          </h1>
          <p className="text-gray-500 mt-3">
            Choose the perfect plan for your business growth 🚀
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 gap-4">
          {pricingTabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                activeTab === index
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {tab.category}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div
          className={`grid gap-8 ${
            activeTab === 1
              ? "md:grid-cols-1 max-w-md mx-auto"
              : "md:grid-cols-3"
          }`}
        >
          {pricingTabs[activeTab].plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-6 border bg-white transition-all duration-300 
              hover:-translate-y-2 hover:shadow-xl

              ${
                plan.highlight
                  ? "border-green-500 scale-105 shadow-lg"
                  : "border-gray-200"
              }`}
            >

              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 
                bg-green-500 text-white text-xs px-4 py-1 rounded-full">
                  🔥 {plan.badge}
                </div>
              )}

              <h3 className="text-xl font-semibold text-green-600 mb-2">
                {plan.name}
              </h3>

              <div className="text-4xl font-bold mb-2">
                {plan.price}
                <span className="text-sm text-gray-500"> / year</span>
              </div>

              <p className="text-gray-500 mb-6">{plan.desc}</p>

              <ul className="space-y-2 mb-6 text-sm">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span
                      className={`font-bold ${
                        f.included ? "text-green-500" : "text-red-400"
                      }`}
                    >
                      {f.included ? "✔" : "✖"}
                    </span>
                    <span
                      className={`${
                        f.included ? "text-gray-700" : "text-gray-400"
                      }`}
                    >
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* WhatsApp Button */}
              <button
                onClick={() => handleBuyNow(plan.name)}
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  plan.highlight
                    ? "bg-green-500 text-white hover:bg-green-600"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                Buy Now
              </button>

            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="text-center text-red-500 text-sm mt-10">
          ⚠ GST Extra as per applicable rates
        </p>

      </div>
    </div>
  );
}
