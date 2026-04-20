"use client";

const products = [
  {
    id: 1,
    name: "Metamerge Window Based Software",
    image: "/Picture1.png",
    price: 1499,
    description:
      "Send personalized bulk messages at scale with smart scheduling.",
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
    description:
      "Send personalized bulk messages at scale with smart scheduling on your phone.",
    features: [
      "Unlimited Messages",
      "Full Automation",
      "CTA Buttons",
      "AI Chatbot 24x7",
      "List Menu",
      "Scheduling",
      "Auto Responder",
      "API Access",
      "Group Grabber",
    ],
  },
  {
    id: 3,
    name: "WaCRM – Multi-Account CRM",
    image: "/Picture3.png",
    price: 1999,
    description: "Manage leads and chats efficiently.",
    features: ["Lead Management", "Set Reminder", "Quick Reply", "Chat Filter"],
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
      "Single Instance",
      "AI Chatbot",
      "Group Grabber",
      "G-Map Extractor",
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
    features: ["WhatsApp Bulk Marketing Software"],
  },
  {
    id: 7,
    name: "Google Map Extractor",
    image: "/Picture5.png",
    price: 999,
    description: "Extract leads directly from Google Maps.",
    features: ["Lead Extraction", "Bulk Data Export"],
  },
];

export default function Shop() {
  return (
    <div className="min-h-screen bg-[#0a0d14] text-white py-14 px-4">

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {products.map((p) => (
          <div
            key={p.id}
            className="group bg-white text-black rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
          >
            
            {/* 🔥 IMAGE SECTION (FIXED BIG + PERFECT FIT) */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center h-72 p-2 overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="h-full w-full object-contain transition-all duration-300 group-hover:scale-110"
              />
            </div>

            {/* 📦 CONTENT */}
            <div className="p-5 flex flex-col flex-1">

              {/* TITLE */}
              <h3 className="font-bold text-lg mb-2">{p.name}</h3>

              {/* DESC */}
              <p className="text-gray-500 text-sm mb-3">
                {p.description}
              </p>

              {/* FEATURES */}
              <ul className="text-xs text-gray-600 space-y-1 mb-4">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-1">
                    <span className="text-green-500 font-bold">✔</span> {f}
                  </li>
                ))}
              </ul>

              {/* PRICE + BUTTON */}
              <div className="mt-auto flex items-center justify-between pt-4 border-t">
                <div className="text-xl font-bold text-blue-600">
                  ₹{p.price}
                </div>

                <a
                  href={`https://wa.me/919234547310?text=Hi%20I%20am%20interested%20in%20${encodeURIComponent(
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
