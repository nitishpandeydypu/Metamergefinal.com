"use client";

const products = [
  {
    id: 1,
    name: "Metamerge Window Based Software",
    image: "/Picture1.png",
    link: "https://pub-4b46c92e74ba4724a0f1af6058235698.r2.dev/Metamerge%20Setup%205.0.0%20(2).zip",
  },
  {
    id: 2,
    name: "MetaMerge Cloud Centre",
    image: "/Picture2.png",
    link: "https://pub-4b46c92e74ba4724a0f1af6058235698.r2.dev/wasender.5.0.7.exe",
  },
  {
    id: 3,
    name: "WaCRM - Multi-Account CRM",
    image: "/Picture3.png",
    link: "https://pub-4b46c92e74ba4724a0f1af6058235698.r2.dev/wacrm.exe",
  },
  {
    id: 4,
    name: "WhatsApp Bulk Sender Pro",
    image: "/Picture4.png",
    link: "https://pub-4b46c92e74ba4724a0f1af6058235698.r2.dev/Multi-Account.WhatsApp.Pro.Installer%20(1).exe",
  },
  {
    id: 5,
    name: "Metamerge Pilot Sender",
    image: "/Picture6.png",
    link: "https://pub-4b46c92e74ba4724a0f1af6058235698.r2.dev/Bulk.Pilot%20(2).msi",
  },
  {
    id: 6,
    name: "WA Sender",
    image: "/Picture7.png",
    link: "https://pub-4b46c92e74ba4724a0f1af6058235698.r2.dev/wasender.5.0.7.exe",
  },
  {
    id: 7,
    name: "Google Map Extractor",
    image: "/Picture5.png",
    link: "https://pub-4b46c92e74ba4724a0f1af6058235698.r2.dev/GMExtractorSetUp.msi",
  },
];

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-[#0a0d14] text-white py-14 px-4">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white text-black rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
          >
            
            {/* IMAGE */}
            <div className="bg-gray-100 flex items-center justify-center h-72 p-2">
              <img
                src={p.image}
                alt={p.name}
                className="h-full w-full object-contain"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5 flex flex-col items-center text-center">

              <h3 className="font-bold text-lg mb-4">{p.name}</h3>

              {/* DOWNLOAD BUTTON */}
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold shadow-lg hover:scale-105 transition"
              >
                ⬇ Download
              </a>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
