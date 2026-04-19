"use client";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop – Metamerge WhatsApp Marketing Tools",
  description: "Explore our range of WhatsApp marketing tools and solutions.",
};

const products = [
  {
    id: 1,
    name: "Metamerge Window Based Software",
    image: "/Picture1.png",
    price: 1499,
    description: "Send personalized bulk messages at scale with smart scheduling.",
    features: [
      "Bulk Messaging",
      "Multi Accounts",
      "AI Chatbot",
      "Live Chat",
      "Group Grabber",
      "Button List, Poll, Carousel",
      "Interactive Templates",
      "Auto Reply",
    ],
  },
  {
    id: 2,
    name: "MetaMerge Cloud Centre",
    image: "/Picture2.png",
    price: 1999,
    description: "Send bulk messages from your phone with automation.",
    features: [
      "Unlimited Messages",
      "Full Automation",
      "CTA Buttons",
      "AI Chatbot 24x7",
      "Scheduling",
      "API Access",
    ],
  },
  {
    id: 3,
    name: "WaCRM – Multi-Account CRM",
    image: "/Picture3.png",
    price: 1999,
    description: "Manage leads and chats efficiently.",
    features: ["Lead Management", "Quick Reply", "Chat Filter"],
  },
  {
    id: 4,
    name: "WhatsApp Bulk Sender Pro",
    image: "/Picture4.png",
    price: 1999,
    description: "Advanced bulk messaging tool.",
    features: ["Bulk Messaging", "Automation", "Scheduler"],
  },
  {
    id: 5,
    name: "Metamerge Pilot Sender",
    image: "/Picture6.png",
    price: 999,
    description: "Affordable bulk sender with AI tools.",
    features: [
      "Bulk Sender",
      "AI Chatbot",
      "Group Grabber",
      "Number Filter",
      "Anti-Ban Setting",
    ],
  },
  {
    id: 6,
    name: "WA Sender",
    image: "/Picture7.png",
    price: 999,
    description: "Simple WhatsApp marketing tool.",
    features: ["Bulk Marketing"],
  },
  {
    id: 7,
    name: "Google Map Extractor",
    image: "/Picture5.png",
    price: 999,
    description: "Extract leads from Google Maps.",
    features: ["Lead Extraction"],
  },
];

export default function Shop() {
  return (
    <div className="min-h-screen bg-[#0a0d14] text-white py-14 px-6">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
        
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white text-black rounded-2xl shadow-md overflow-hidden 
            flex flex-col justify-between h-full
            transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            
            {/* IMAGE */}
            <div className="h-[180px] overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5 flex flex-col flex-grow">
              
              <h3 className="font-bold text-lg mb-1">{p.name}</h3>

              <p className="text-gray-500 text-sm mb-3">
                {p.description}
              </p>

              <ul className="text-xs text-gray-600 space-y-1 mb-4">
                {p.features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>

              {/* PRICE + BUTTON (ALIGNED FIX) */}
              <div className="flex justify-between items-center mt-auto">
                
                <span className="text-xl font-bold text-blue-600">
                  ₹{p.price}
                </span>

                <a
                  href={`https://wa.me/917827944832?text=Hi%20I%20am%20interested%20in%20${encodeURIComponent(
                    p.name
                  )}`}
                  target="_blank"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-500 transition"
                >
                  Buy Now
                </a>

              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
