// import type { Metadata } from "next";
// import Link from "next/link";

// export const metadata: Metadata = {
//     title: "Shop – Metamerge WhatsApp Marketing Tools",
//     description: "Explore our range of WhatsApp marketing tools and solutions.",
// };

// const products = [
//     {
//         id: 1,
//         badge: "Most Popular",
//         badgeClass: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",
//         icon: "💬",
//         iconBg: "bg-emerald-500/10 border border-emerald-500/20",
//         name: "WhatsApp Bulk Sender Pro",
//         description:
//             "Send personalized bulk messages at scale with smart scheduling, anti-ban protection, and delivery analytics.",
//         price: 49,
//         features: ["10,000 msgs/day", "Anti-ban shield", "Analytics dashboard", "Multi-device"],
//         cta: "Get Started",
//         highlight: true,
//     },
//     {
//         id: 2,
//         badge: "New",
//         badgeClass: "bg-amber-500/10 text-amber-400 border border-amber-500/30",
//         icon: "🤖",
//         iconBg: "bg-amber-500/10 border border-amber-500/20",
//         name: "AI Chatbot Builder",
//         description:
//             "Build no-code WhatsApp chatbots that qualify leads, answer FAQs, and book appointments 24/7.",
//         price: 79,
//         features: ["Unlimited flows", "GPT-4 powered", "CRM integrations", "Live handoff"],
//         cta: "Try Free",
//         highlight: false,
//     },
//     {
//         id: 3,
//         badge: "Best Value",
//         badgeClass: "bg-sky-500/10 text-sky-400 border border-sky-500/30",
//         icon: "📊",
//         iconBg: "bg-sky-500/10 border border-sky-500/20",
//         name: "Campaign Manager",
//         description:
//             "Plan, launch, and A/B test WhatsApp campaigns with drag-and-drop ease and real-time ROI tracking.",
//         price: 39,
//         features: ["A/B testing", "ROI tracking", "Template library", "Team seats"],
//         cta: "Start Now",
//         highlight: false,
//     },
//     {
//         id: 4,
//         badge: "Enterprise",
//         badgeClass: "bg-violet-500/10 text-violet-400 border border-violet-500/30",
//         icon: "🏢",
//         iconBg: "bg-violet-500/10 border border-violet-500/20",
//         name: "Business Suite",
//         description:
//             "All-in-one platform for agencies managing multiple client accounts with white-label reporting.",
//         price: 149,
//         features: ["Unlimited clients", "White-label", "API access", "Dedicated support"],
//         cta: "Contact Sales",
//         highlight: false,
//     },
//     {
//         id: 5,
//         badge: "Starter",
//         badgeClass: "bg-teal-500/10 text-teal-400 border border-teal-500/30",
//         icon: "🚀",
//         iconBg: "bg-teal-500/10 border border-teal-500/20",
//         name: "Quick Launch Kit",
//         description:
//             "Everything a small business needs to start WhatsApp marketing today — setup in under 10 minutes.",
//         price: 19,
//         features: ["1,000 msgs/day", "5 templates", "Basic analytics", "Email support"],
//         cta: "Buy Now",
//         highlight: false,
//     },
//     {
//         id: 6,
//         badge: "Add-on",
//         badgeClass: "bg-rose-500/10 text-rose-400 border border-rose-500/30",
//         icon: "📦",
//         iconBg: "bg-rose-500/10 border border-rose-500/20",
//         name: "Contact Importer",
//         description:
//             "Bulk import, deduplicate, and segment your contacts from CSV, CRM, or any third-party source.",
//         price: 15,
//         features: ["CSV / CRM import", "Smart dedup", "Tag & segment", "GDPR compliant"],
//         cta: "Add to Plan",
//         highlight: false,
//     },
// ];



// export default function Shop() {
//     return (
//         <div className="min-h-screen bg-[#0a0d14] text-white antialiased pb-14 pt-14">

//             {/* ── PRODUCT GRID ── */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
//                 {products.map((p) => (
//                     <div
//                         key={p.id}
//                         className={`group relative flex flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden
//               ${p.highlight
//                                 ? "bg-gradient-to-br from-[#fff] to-[#f5f6f8] border-emerald-500/30 hover:border-emerald-400/60 hover:shadow-[0_24px_56px_rgba(52,211,153,0.13)]"
//                                 : "bg-[#fff] border-white/[0.07] hover:border-white/[0.16] hover:shadow-[0_20px_48px_rgba(0,0,0,0.45)]"
//                             }`}
//                     >
//                         {/* Shimmer top border */}
//                         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

//                         {/* Top row: icon + badge */}
//                         <div className="flex items-start justify-between mb-5">
//                             <div
//                                 className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${p.iconBg}`}
//                             >
//                                 {p.icon}
//                             </div>
//                             <span className={`text-[0.68rem] font-semibold px-3 py-1 rounded-full uppercase tracking-wider ${p.badgeClass}`}>
//                                 {p.badge}
//                             </span>
//                         </div>

//                         {/* Name */}
//                         <h3 className="text-base font-bold tracking-tight mb-2.5">{p.name}</h3>

//                         {/* Description */}
//                         <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{p.description}</p>

//                         {/* Feature list */}
//                         <ul className="grid grid-cols-2 gap-y-2 gap-x-3 mb-6 list-none p-0 m-0">
//                             {p.features.map((f) => (
//                                 <li key={f} className="flex items-center gap-1.5 text-slate-400 text-xs">
//                                     <span className="text-emerald-400 font-bold text-[0.65rem] shrink-0">✓</span>
//                                     {f}
//                                 </li>
//                             ))}
//                         </ul>

//                         {/* Card footer: price + CTA */}
//                         <div className="flex items-center justify-between pt-5 border-t border-white/[0.07] gap-3">
//                             <div className="font-extrabold text-3xl tracking-tight leading-none">
//                                 <sup className="text-sm align-top mt-1 inline-block font-semibold">$</sup>
//                                 {p.price}
//                                 <span className="text-xs text-slate-500 font-normal ml-0.5">/mo</span>
//                             </div>

//                             <Link
//                                 href={`/shop/${p.id}`}
//                                 className={`shrink-0 text-sm font-bold px-5 py-2.5 rounded-full no-underline transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap
//                   ${p.highlight
//                                         ? "bg-emerald-400 text-[#0a0d14] hover:bg-emerald-300 hover:shadow-[0_6px_20px_rgba(52,211,153,0.45)]"
//                                         : "border border-white/10 text-white hover:bg-white/[0.06] hover:border-white/20"
//                                     }`}
//                             >
//                                 {p.cta}
//                             </Link>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* ── BUNDLE BANNER ── */}
//             {/* <div className="max-w-6xl mx-auto px-6 mt-16">
//                 <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-br from-emerald-500/[0.12] to-sky-500/[0.06] border border-emerald-500/20 rounded-2xl px-8 md:px-12 py-10 overflow-hidden">
//                     <span className="pointer-events-none select-none absolute right-36 top-1 text-[6rem] opacity-[0.05]">
//                         💬
//                     </span>

//                     <div>
//                         <h2 className="text-xl md:text-2xl font-extrabold tracking-tight mb-2">
//                             Need everything? Save{" "}
//                             <span className="text-emerald-400">40%</span> with the Full Suite
//                         </h2>
//                         <p className="text-slate-400 text-sm">
//                             All 6 tools bundled — perfect for agencies and fast-growing teams. Starts at{" "}
//                             <span className="text-emerald-400 font-semibold">$99/month</span>.
//                         </p>
//                     </div>

//                     <Link
//                         href="/shop/bundle"
//                         className="shrink-0 text-sm font-bold text-[#0a0d14] bg-emerald-400 hover:bg-emerald-300 px-7 py-3 rounded-full no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(52,211,153,0.4)]"
//                     >
//                         View Bundle →
//                     </Link>
//                 </div>
//             </div> */}

//         </div>
//     );
// }





import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Shop – Metamerge WhatsApp Marketing Tools",
    description: "Explore our range of WhatsApp marketing tools and solutions.",
};

const products = [
    {
        id: 1,
        name: "Metamerge Window Based Software",
        image: "/Picture1.png", // 👈 add your image here
        price: 1499,
        description:
            "Send personalized bulk messages at scale with smart scheduling.",
        features: ["Bulk Messaging", "Multi Accounts", "AI Chatbot", "Live Chat", "Group Grabber", "Button List,Poll,Carousel", "Interactive Tempelates", "Auto Reply"],
        badge: "Most Popular",
        highlight: true,
    },
    {
        id: 2,
        name: "MetaMerge Cloud Centre",
        image: "/Picture2.png", // 👈 add your image here
        price: 1999,
        description:
            "Send personalized bulk messages at scale with smart scheduling On your Phone.",
        features: ["Unlimited Messages", "Full Automation", "CTA Buttons", "AI Chatbot 24*7", "List Menu", "Scheduling", "Auto Responder", "API Access", "Group Grabber"],
        badge: "Most Popular",
        highlight: true,
    },
    {
        id: 3,
        name: "WaCRM – Multi-Account WhatsApp CRM (Reseller)",
        image: "/Picture3.png", // 👈 add your image here
        price: 1999,
        description:
            "Send personalized bulk messages at scale with smart scheduling.",
        features: ["Lead Management", "Set Remainder", "Quick Reply", "Chat Filter"],
        badge: "Most Popular",
        highlight: true,
    },
    {
        id: 4,
        name: "WhatsApp Bulk Sender Pro",
        image: "/Picture4.png", // 👈 add your image here
        price: 1999,
        description:
            "Send personalized bulk messages at scale with smart scheduling.",
        features: ["Lead Management", "Set Remainder", "Quick Reply", "Chat Filter"],
        badge: "Most Popular",
        highlight: true,
    },
    {
        id: 5,
        name: "Metamerge Pilot Sender",
        image: "/Picture6.png", // 👈 add your image here
        price: 999,
        description:
            "Send personalized bulk messages at scale with smart scheduling.",
        features: ["Bulk Sender", "Single Instance", "AI Chatbot & Auto Reply", "Bulk Group Sender", "Group Grabber", "G-Map Extractor", "Number Filter", "Anti-Ban Setting"],
        badge: "Most Popular",
        highlight: true,
    },
    {
        id: 6,
        name: "WA SENDER",
        image: "/Picture7.png", // 👈 add your image here
        price: 999,
        description:
            "Send personalized bulk messages at scale with smart scheduling.",
        features: ["Whatsapp Bulk Marketing Software"],
        badge: "Most Popular",
        highlight: true,
    },

    {
     id: 7,
        name: "Google Map Extractor",
        image: "/Picture5.png", // 👈 add your image here
        price: 999,
        description:
            "Send personalized bulk messages at scale with smart scheduling.",
        features: ["Whatsapp Bulk Marketing Software"],
        badge: "Most Popular",
        highlight: true,
    },
];



export default function Shop() {
    return (
        <div className="min-h-screen bg-[#0a0d14] text-white antialiased pb-14 pt-14">

            {/* ── PRODUCT GRID ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
                {products.map((p) => (
                    <div
                        key={p.id}
                        className="group rounded-2xl overflow-hidden bg-white text-black shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        {/* 🔥 IMAGE SECTION */}
                        <div className="relative">
                            <img
                                src={p.image}
                                alt={p.name}
                                className="w-full h-56 object-cover"
                            />

                            {/* Badge */}
                            {/* {p.badge && (
                                <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    {p.badge}
                                </span>
                            )} */}
                        </div>

                        {/* 📦 CONTENT */}
                        <div className="p-5 flex flex-col gap-3">
                            {/* Title */}
                            <h3 className="font-bold text-lg">{p.name}</h3>

                            {/* Description */}
                            <p className="text-gray-500 text-sm">{p.description}</p>

                            {/* Features */}
                            <ul className="text-xs text-gray-600 space-y-1">
                                {p.features.map((f) => (
                                    <li key={f}>✔ {f}</li>
                                ))}
                            </ul>

                            {/* Price + CTA */}
                            <div className="flex items-center justify-between mt-4">
                                <div className="text-xl font-bold text-blue-600">
                                    ₹{p.price}
                                </div>

                                <Link
                                    href={`/shop/${p.id}`}
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-500"
                                >
                            
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
