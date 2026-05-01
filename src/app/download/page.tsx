"use client";

const BASE_URL = "https://pub-4b46c92e74ba4724a0f1af6058235698.r2.dev";

const products = [
  {
    id: 1,
    name: "Metamerge Window Based Software",
    image: "/Picture1.png",
    file: "window-software.zip",
    features: ["Bulk Messaging", "Multi Accounts", "AI Chatbot"],
  },
  {
    id: 2,
    name: "MetaMerge Cloud Centre",
    image: "/Picture2.png",
    file: "cloud-centre.zip",
    features: ["Unlimited Messages", "Automation", "API Access"],
  },
  {
    id: 3,
    name: "WaCRM – Multi-Account CRM",
    image: "/Picture3.png",
    file: "wacrm.zip",
    features: ["Lead Management", "Reminder", "Chat Filter"],
  },
  {
    id: 4,
    name: "WhatsApp Bulk Sender Pro",
    image: "/Picture4.png",
    file: "bulk-pro.zip",
    features: ["Bulk Messaging", "Automation"],
  },
  {
    id: 5,
    name: "Metamerge Pilot Sender",
    image: "/Picture6.png",
    file: "pilot.zip",
    features: ["Bulk Sender", "AI Chatbot"],
  },
  {
    id: 6,
    name: "WA Sender",
    image: "/Picture7.png",
    file: "wa-sender.zip",
    features: ["WhatsApp Marketing"],
  },
  {
    id: 7,
    name: "Google Map Extractor",
    image: "/Picture5.png",
    file: "map-extractor.zip",
    features: ["Lead Extraction", "Export Data"],
  },
];

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-[#0a0d14] text-white py-14 px-4">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {products.map((p) => (
          <div
            key={p.id}
            className="group bg-white text-black rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
          >
            
            {/* IMAGE */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center h-72 p-2 overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="h-full w-full object-contain transition-all duration-300 group-hover:scale-110"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5 flex flex-col flex-1">

              <h3 className="font-bold text-lg mb-3">{p.name}</h3>

              {/* FEATURES */}
              <ul className="text-xs text-gray-600 space-y-1 mb-4">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-1">
                    <span className="text-green-500 font-bold">✔</span> {f}
                  </li>
                ))}
              </ul>

              {/* DOWNLOAD BUTTON */}
              <div className="mt-auto pt-4 border-t">
                <a
                  href={`${BASE_URL}/${p.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex justify-center bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-500 transition"
                >
                  ⬇ Download Now
                </a>
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
