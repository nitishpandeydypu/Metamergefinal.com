// "use client ";
// import type { Metadata } from "next";
// import Link from "next/link";

// export const metadata: Metadata = {
//   title: "Metamerge – WhatsApp Marketing & Digital Solutions",
//   description: "Metamerge offers WhatsApp Business API, Website Development, Digital Marketing, and CRM solutions for businesses.",
// };

// const services = [
//   {
//     icon: "🌐",
//     title: "Website Development",
//     desc: "Unique, highly responsive WordPress websites built to convert visitors into customers.",
//     href: "/website-development",
//     color: "blue",
//   },
//   {
//     icon: "📈",
//     title: "Digital Marketing Services",
//     desc: "Strategic SEO, link building, and digital campaigns to grow your brand online.",
//     href: "/digital-marketing-services",
//     color: "orange",
//   },
//   {
//     icon: "💬",
//     title: "WhatsApp Business API",
//     desc: "Seamless WhatsApp API integration with chatbots, bulk messaging, and analytics.",
//     href: "/api-solution",
//     color: "green",
//   },
//   {
//     icon: "🗂️",
//     title: "Metamerge All-In-One CRM",
//     desc: "Manage sales, marketing, support, invoicing and leads from one smart dashboard.",
//     href: "/Metamerge-all-in-one-crm",
//     color: "violet",
//   },
//   {
//     icon: "⬇️",
//     title: "Download Software",
//     desc: "Download Metamerge WhatsApp bulk sender tools and marketing software.",
//     href: "/download",
//     color: "purple",
//   },
//   {
//     icon: "💰",
//     title: "Pricing Plans",
//     desc: "Transparent, flexible pricing for WhatsApp marketing, CRM and reseller plans.",
//     href: "/pricing",
//     color: "pink",
//   },
// ];
// const faqs = [
//   {
//     question: "What is WhatsApp Business API?",
//     answer:
//       "WhatsApp Business API allows businesses to send automated messages, notifications, and marketing campaigns to customers at scale.",
//   },
//   {
//      question: "How does Metamerge help with WhatsApp marketing?",
//     answer:
//       "Metamerge provides WhatsApp bulk messaging tools, chatbot automation, campaign analytics, and CRM integration to help businesses grow.",
//   },
//   {
//     question: "Do you provide website development services?",
//     answer:
//       "Yes. We build responsive WordPress and custom websites designed to convert visitors into customers.",
//   },
//   {
//     question: "Is there a free trial available?",
//     answer:
//       "Yes, we provide demo access and consultation so you can explore our platform before choosing a plan.",
//   },
//   {
//     question: "How quickly can I start using WhatsApp API?",
//     answer:
//       "Most businesses can get approved and start sending messages within 24–48 hours after verification.",
//   },
// ];
// const colorMap: Record<string, string> = {
//   blue: "group-hover:text-blue-400 bg-blue-500/10 border-blue-500/20",
//   orange: "group-hover:text-orange-400 bg-orange-500/10 border-orange-500/20",
//   green: "group-hover:text-green-400 bg-green-500/10 border-green-500/20",
//   violet: "group-hover:text-violet-400 bg-violet-500/10 border-violet-500/20",
//   purple: "group-hover:text-purple-400 bg-purple-500/10 border-purple-500/20",
//   pink: "group-hover:text-pink-400 bg-pink-500/10 border-pink-500/20",
// };

// const stats = [
//   { value: "500+", label: "Happy Clients" },
//   { value: "5X", label: "Revenue Growth" },
//   { value: "10K+", label: "Messages Sent Daily" },
//   { value: "98%", label: "Satisfaction Rate" },
// ];

//     <div>
//       {/* Hero */}
//       <section className="hero-bg grid-bg relative overflow-hidden py-14 px-6">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
//           <div>
//             <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
//               🚀 WhatsApp Marketing & Digital Solutions
//             </div>
//             <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
//               Grow Your<br />Business with<br />
//               <span className="gradient-text">Metamerge</span>
//             </h1>
//             <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
//               From WhatsApp bulk marketing to website development, digital marketing, and all-in-one CRM — everything your business needs to scale, in one place.
//           </p>
//             <div className="flex flex-wrap gap-4">
//               <Link href="/contact" className="btn-primary text-white font-semibold px-8 py-3.5 rounded-full text-sm">
//                 Get Started Free →
//               </Link>
//               <a href="https://wa.me/917827944832" className="btn-green text-white font-semibold px-8 py-3.5 rounded-full text-sm flex items-center gap-2">
//                 💬 Chat on WhatsApp
//               </a>
//             </div>
//           </div>

//           {/* Stats grid */}
//           {/* <div className="grid grid-cols-2 gap-4"> */}
//            <div className="relative flex justify-center lg:justify-end animate-fade-in">
//             <div className="relative w-full max-w-lg">
//               {/* Floating card */}
//               <div className="absolute -top-6 -left-6 z-10 glass-card rounded-2xl p-4 shadow-xl border border-brand-green/20 animate-float">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-sm">
//                     5X
//                   </div>
//                   <div>
//                     <p className="text-white font-semibold text-sm">Revenue Growth</p>
//                     <p className="text-brand-green text-xs">With WhatsApp Marketing</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Main image placeholder */}
//               <div className="relative w-full aspect-square max-w-md mx-auto">
//                 <div className="w-full h-full rounded-3xl bg-gradient-to-br from-brand-green/20 to-brand-accent/10 border border-brand-green/20 flex items-center justify-center green-glow">
//                   <div className="text-center space-y-4 p-8">
//                     <div className="w-24 h-24 bg-green-gradient rounded-3xl mx-auto flex items-center justify-center">
//                       <svg viewBox="0 0 24 24" className="w-14 h-14 text-white fill-current">
//                         <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
//                       </svg>
//                     </div>
//                     <p className="text-white font-heading font-bold text-2xl">WhatsApp Marketing</p>
//                     <p className="text-slate-400 text-sm">Bulk Sender • Button Pro • CRM</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating stats card */}
//               <div className="absolute -bottom-6 -right-6 z-10 glass-card rounded-2xl p-4 shadow-xl border border-white/10 animate-float" style={{ animationDelay: "2s" }}>
//                 <p className="text-slate-400 text-xs mb-1">Client Revenue Generated</p>
//                 <p className="text-brand-green font-bold text-2xl font-heading">₹10L+</p>
//                 <p className="text-green-400 text-xs">↑ Growing daily</p>
//               </div>
//             </div>
//           </div>
//           </div>
//         {/* </div> */}
//       </section>
//       {/* Services */}
//       <section className="py-14 px-6 bg-[#0d1326]">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Our Services</p>
//             <h2 className="font-heading text-4xl md:text-5xl font-bold">
//               Everything Your Business <span className="gradient-text">Needs to Scale</span>
//             </h2>
//             <p className="text-slate-400 mt-4 max-w-xl mx-auto text-base">
//               A complete suite of digital services — from marketing to technology — built for Indian entrepreneurs.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {services.map((s) => (
//               <Link key={s.title} href={s.href} className="group bg-[#111827] border border-white/5 rounded-2xl p-8 hover:border-white/10 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 block">
//                 <div className={`w-14 h-14 rounded-xl border flex items-center justify-center text-2xl mb-5 ${colorMap[s.color]}`}>
//                   {s.icon}
//                 </div>
//                 <h3 className={`font-heading text-xl font-bold text-white mb-3 transition-colors ${colorMap[s.color]}`}>{s.title}</h3>
//                 <p className="text-slate-400 text-sm leading-relaxed mb-4">{s.desc}</p>
//                 <span className="text-blue-400 text-sm font-medium group-hover:gap-2 flex items-center gap-1 transition-all">
//                   Learn More <span>→</span>
//                 </span>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Metamerge */}
//       <section className="py-14 px-6 bg-[#0a0f1e]">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
//           <div>
//             <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">Why Metamerge</p>
//             <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
//               Your Growth Partner for <span className="gradient-text">Digital Success</span>
//             </h2>
//             <p className="text-slate-400 text-lg leading-relaxed mb-8">
//               Metamerge is a trusted digital solutions company helping businesses scale faster through smart WhatsApp marketing, powerful CRM tools, and professional web services.
//             </p>
//             <ul className="space-y-4 mb-8">
//               {[
//                 "🎯 Proven WhatsApp marketing strategies",
//                 "⚡ Fast delivery & dedicated support",
//                 "🔒 Secure & reliable platform",
//                 "📊 Data-driven results & reporting",
//                 "🤝 Dedicated account management",
//               ].map((item) => (
//                 <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
//                   <span className="text-base">{item.split(" ")[0]}</span>
//                   <span>{item.split(" ").slice(1).join(" ")}</span>
//                 </li>
//               ))}
//             </ul>
//             <Link href="/contact" className="btn-primary inline-block text-white font-semibold px-8 py-3 rounded-full text-sm">
//               Talk to Us Today →
//             </Link>
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             {[
//               { icon: "🚀", title: "Fast Setup", desc: "Get started in minutes with free WhatsApp API approval & onboarding." },
//               { icon: "🤖", title: "Automation", desc: "Automate replies, campaigns, and follow-ups with chatbot technology." },
//               { icon: "📱", title: "Multi-Platform", desc: "Integrate with websites, apps, CRMs, and social media seamlessly." },
//               { icon: "📞", title: "Live Support", desc: "Mon–Fri support from our expert team, always ready to help you grow." },
//             ].map((card) => (
//               <div key={card.title} className="bg-[#111827] border border-white/5 rounded-2xl p-6 hover:border-blue-500/20 transition-colors">
//                 <div className="text-3xl mb-3">{card.icon}</div>
//                 <h3 className="font-heading font-bold text-white text-sm mb-2">{card.title}</h3>
//                 <p className="text-slate-400 text-xs leading-relaxed">{card.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

// {/* FAQ Section */}
// <section className="py-14 px-6 bg-[#0d1326]">
//   <div className="max-w-4xl mx-auto">
//     <div className="text-center mb-12">
//       <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
//         FAQ
//       </p>
//       <h2 className="font-heading text-4xl md:text-5xl font-bold">
//         Frequently Asked <span className="gradient-text">Questions</span>
//       </h2>
//       <p className="text-slate-400 mt-4">
//         Everything you need to know about our WhatsApp marketing and digital services.
//       </p>
//     </div>

//     <div className="space-y-4">
//       {faqs.map((faq, index) => (
//         <details
//           key={index}
//           className="group bg-[#111827] border border-white/5 rounded-xl p-6 cursor-pointer"
//         >
//           <summary className="flex justify-between items-center text-white font-semibold text-lg list-none">
//             {faq.question}
//             <span className="transition-transform group-open:rotate-180">⌄</span>
//           </summary>

//           <p className="text-slate-400 text-sm mt-4 leading-relaxed">
//             {faq.answer}
//           </p>
//         </details>
//       ))}
//     </div>
//   </div>
// </section>

//       {/* CTA Banner */}
//       <section className="py-16 px-6 bg-gradient-to-r from-[#128c7e] via-[#25d366] to-[#075e54]">
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
//             Ready to Boost Your Revenue 5X?
//           </h2>
//           <p className="text-green-100 mb-8 text-lg">
//             Start with WhatsApp marketing today. Smarter. Faster. Zero guesswork.
//           </p>
//           <div className="flex flex-wrap gap-4 justify-center">
//             <a href="https://wa.me/917827944832" className="bg-white text-green-700 font-bold px-10 py-3 rounded-full text-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
//               💬 Talk to Sales
//             </a>
//             <Link href="/pricing" className="border-2 border-white/50 text-white font-semibold px-10 py-3 rounded-full text-sm hover:bg-white/10 transition-all">
//               View Pricing →
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }




"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SmilePlus, Package, Network, TrendingUp } from "lucide-react";


const services = [
  {
    icon: "🌐",
    title: "Website Development",
    desc: "Unique, highly responsive WordPress websites built to convert visitors into customers.",
    href: "/website-development",
    color: "blue",
  },
  {
    icon: "📈",
    title: "Digital Marketing Services",
    desc: "Strategic SEO, link building, and digital campaigns to grow your brand online.",
    href: "/digital-marketing-services",
    color: "orange",
  },
  {
    icon: "💬",
    title: "WhatsApp Business API",
    desc: "Seamless WhatsApp API integration with chatbots, bulk messaging, and analytics.",
    href: "/api-solution",
    color: "green",
  },
  {
    icon: "🗂️",
    title: "Metamerge All-In-One CRM",
    desc: "Manage sales, marketing, support, invoicing and leads from one smart dashboard.",
    href: "/Metamerge-all-in-one-crm",
    color: "violet",
  },
  {
    icon: "⬇️",
    title: "Download Software",
    desc: "Download Metamerge WhatsApp bulk sender tools and marketing software.",
    href: "/download",
    color: "purple",
  },
  {
    icon: "💰",
    title: "Pricing Plans",
    desc: "Transparent, flexible pricing for WhatsApp marketing, CRM and reseller plans.",
    href: "/pricing",
    color: "pink",
  },
];

const colorMap: Record<string, string> = {
  blue: "group-hover:text-blue-400 bg-blue-500/10 border-blue-500/20",
  orange: "group-hover:text-orange-400 bg-orange-500/10 border-orange-500/20",
  green: "group-hover:text-green-400 bg-green-500/10 border-green-500/20",
  violet: "group-hover:text-violet-400 bg-violet-500/10 border-violet-500/20",
  purple: "group-hover:text-purple-400 bg-purple-500/10 border-purple-500/20",
  pink: "group-hover:text-pink-400 bg-pink-500/10 border-pink-500/20",
};

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "5X", label: "Revenue Growth" },
  { value: "10K+", label: "Messages Sent Daily" },
  { value: "98%", label: "Satisfaction Rate" },
];

const statsData = [
  { icon: SmilePlus, value: 5000, suffix: "+", label: "Happy Customers", color: "text-green-400" },
  { icon: Package, value: 3000, suffix: "+", label: "Software Sold", color: "text-blue-400" },
  { icon: Network, value: 500, suffix: "+", label: "Resellers", color: "text-purple-400" },
  { icon: TrendingUp, value: 10, suffix: "L+", label: "Client Revenue Generated", color: "text-yellow-400" },
];

const faqs = [
  {
    question: "What is Metamerge and what services do you offer?",
    answer:
      "Metamerge is a full-stack digital solutions company based in India. We offer WhatsApp Business API integration, bulk WhatsApp marketing tools, WordPress website development, SEO & digital marketing, and our All-In-One CRM platform — all designed to help businesses scale faster.",
  },
  {
    question: "How does the WhatsApp Business API work?",
    answer:
      "The WhatsApp Business API allows businesses to send bulk messages, set up automated chatbots, manage customer conversations, and track campaign analytics — all through an official Meta-approved channel. We handle the entire setup, approval, and integration process for you.",
  },
  {
    question: "Is bulk WhatsApp messaging safe and legal?",
    answer:
      "Yes — when done through the official WhatsApp Business API, bulk messaging is completely legal and compliant with Meta's policies. Our platform ensures you only message opted-in contacts, protecting your account and your customers.",
  },
  {
    question: "How long does it take to get started?",
    answer:
      "Most clients are up and running within 24–72 hours. WhatsApp API approval typically takes 1–3 business days. Website projects vary based on scope, but we provide clear timelines upfront with no surprises.",
  },
  {
    question: "Do you offer a free trial or demo?",
    answer:
      "Yes! We offer a free consultation and live demo of our WhatsApp marketing tools and CRM platform. Simply click 'Get Started Free' or chat with us on WhatsApp and our team will walk you through everything.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We provide dedicated Mon–Fri support via WhatsApp, email, and phone. Every client gets a dedicated account manager to ensure smooth onboarding and ongoing success. Priority support is available on higher-tier plans.",
  },
  {
    question: "Can I integrate Metamerge CRM with my existing tools?",
    answer:
      "Absolutely. The Metamerge All-In-One CRM integrates with WhatsApp, websites, payment gateways, email platforms, and many third-party apps via API. Our team will help you set up the integrations that matter most to your workflow.",
  },
  {
    question: "What are your pricing plans?",
    answer:
      "We offer transparent, flexible pricing for every budget — from starter plans for small businesses to enterprise and reseller packages. Visit our Pricing page for full details, or chat with us for a custom quote.",
  },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const start = Date.now();
          const tick = () => {
            const progress = Math.min((Date.now() - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-bg grid-bg relative overflow-hidden py-14 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              🚀 WhatsApp Marketing & Digital Solutions
            </div>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              Grow Your<br />Business with<br />
              <span className="gradient-text">Metamerge</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
              From WhatsApp bulk marketing to website development, digital marketing, and all-in-one CRM — everything your business needs to scale, in one place.
            </p>
          <div className="flex flex-wrap gap-4">
  
  <Link href="/contact" className="btn-primary text-white font-semibold px-8 py-3.5 rounded-full text-sm">
    Get Started Free →
  </Link>

  {/* Telegram Download */}
  <a href="https://t.me/metamerge_download/2" target="_blank"
     className="bg-green-600 text-white font-semibold px-8 py-3.5 rounded-full text-sm hover:bg-green-700 transition">
    ⬇ Fast Download
  </a>

  <a href="https://wa.me/919234547310" className="btn-green text-white font-semibold px-8 py-3.5 rounded-full text-sm flex items-center gap-2">
    💬 Chat on WhatsApp
  </a>

</div>
</div>

          {/* Stats grid */}
          {/* <div className="grid grid-cols-2 gap-4"> */}
           <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative w-full max-w-lg">
              {/* Floating card */}
              <div className="absolute -top-6 -left-6 z-10 glass-card rounded-2xl p-4 shadow-xl border border-brand-green/20 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-sm">
                    5X
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Revenue Growth</p>
                    <p className="text-brand-green text-xs">With WhatsApp Marketing</p>
                  </div>
                </div>
              </div>

              {/* Main image placeholder */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-brand-green/20 to-brand-accent/10 border border-brand-green/20 flex items-center justify-center green-glow">
                  <div className="text-center space-y-4 p-8">
                    <div className="w-24 h-24 bg-green-gradient rounded-3xl mx-auto flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-14 h-14 text-white fill-current">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <p className="text-white font-heading font-bold text-2xl">WhatsApp Marketing</p>
                    <p className="text-slate-400 text-sm">Bulk Sender • Button Pro • CRM</p>
                  </div>
                </div>
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-6 -right-6 z-10 glass-card rounded-2xl p-4 shadow-xl border border-white/10 animate-float" style={{ animationDelay: "2s" }}>
                <p className="text-slate-400 text-xs mb-1">Client Revenue Generated</p>
                <p className="text-brand-green font-bold text-2xl font-heading">₹10L+</p>
                <p className="text-green-400 text-xs">↑ Growing daily</p>
              </div>
            </div>
          </div>
          </div>
        {/* </div> */}
      </section>

      {/* Services */}
      <section className="py-14 px-6 bg-[#0d1326]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Our Services</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Everything Your Business <span className="gradient-text">Needs to Scale</span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto text-base">
              A complete suite of digital services — from marketing to technology — built for Indian entrepreneurs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link key={s.title} href={s.href} className="group bg-[#111827] border border-white/5 rounded-2xl p-8 hover:border-white/10 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 block">
                <div className={`w-14 h-14 rounded-xl border flex items-center justify-center text-2xl mb-5 ${colorMap[s.color]}`}>
                  {s.icon}
                </div>
                <h3 className={`font-heading text-xl font-bold text-white mb-3 transition-colors ${colorMap[s.color]}`}>{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="text-blue-400 text-sm font-medium group-hover:gap-2 flex items-center gap-1 transition-all">
                  Learn More <span>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Metamerge */}
      <section className="py-14 px-6 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">Why Metamerge</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Your Growth Partner for <span className="gradient-text">Digital Success</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Metamerge is a trusted digital solutions company helping businesses scale faster through smart WhatsApp marketing, powerful CRM tools, and professional web services.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "🎯 Proven WhatsApp marketing strategies",
                "⚡ Fast delivery & dedicated support",
                "🔒 Secure & reliable platform",
                "📊 Data-driven results & reporting",
                "🤝 Dedicated account management",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                  <span className="text-base">{item.split(" ")[0]}</span>
                  <span>{item.split(" ").slice(1).join(" ")}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-primary inline-block text-white font-semibold px-8 py-3 rounded-full text-sm">
              Talk to Us Today →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🚀", title: "Fast Setup", desc: "Get started in minutes with free WhatsApp API approval & onboarding." },
              { icon: "🤖", title: "Automation", desc: "Automate replies, campaigns, and follow-ups with chatbot technology." },
              { icon: "📱", title: "Multi-Platform", desc: "Integrate with websites, apps, CRMs, and social media seamlessly." },
              { icon: "📞", title: "Live Support", desc: "Mon–Fri support from our expert team, always ready to help you grow." },
            ].map((card) => (
              <div key={card.title} className="bg-[#111827] border border-white/5 rounded-2xl p-6 hover:border-blue-500/20 transition-colors">
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="font-heading font-bold text-white text-sm mb-2">{card.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-14 px-6 bg-[#0d1326]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-slate-400 mt-4 text-base">
              Everything you need to know about Metamerge and our services.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-[#111827] border border-white/5 rounded-2xl overflow-hidden hover:border-green-500/20 transition-colors duration-300"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
                  <span className="font-heading font-semibold text-white text-sm md:text-base leading-snug">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-open:bg-green-500/10 group-open:border-green-500/30 group-open:text-green-400 transition-all duration-300">
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-300 group-open:rotate-45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-5">
                  <div className="h-px bg-white/5 mb-4" />
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          
        </div>
      </section>


      {/* Stats Section */}
      <section id="stats" className="py-14 px-6 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Why Businesses{" "}
              <span className="gradient-text">Trust Metamerge</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Numbers that speak for our success — from software sales to satisfied resellers, here's how we're making a difference.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {statsData.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="group glass-card rounded-2xl p-6 border border-white/10 hover:border-brand-green/30 transition-all text-center hover:-translate-y-2"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={26} className={stat.color} />
                  </div>
                  <p className={`text-3xl sm:text-4xl font-heading font-extrabold ${stat.color} mb-2`}>
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-slate-400 text-sm font-medium leading-snug">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>




      {/* CTA Banner */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#128c7e] via-[#25d366] to-[#075e54]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Boost Your Revenue 5X?
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            Start with WhatsApp marketing today. Smarter. Faster. Zero guesswork.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/917827944832" className="bg-white text-green-700 font-bold px-10 py-3 rounded-full text-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              💬 Talk to Sales
            </a>
            <Link href="/pricing" className="border-2 border-white/50 text-white font-semibold px-10 py-3 rounded-full text-sm hover:bg-white/10 transition-all">
              View Pricing →
            </Link>
          </div>
        </div>
            </section>

     {/* 🔥 WhatsApp Floating Support Button */}
<div className="fixed right-4 top-4 z-50 group">

  {/* Pulse Effect */}
  <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>

  {/* Main Button */}
  <a
    href="https://wa.me/917827944832?text=Hi%20I%20need%20support"
    target="_blank"
    rel="noopener noreferrer"
    className="relative flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
  >
    💬 <span className="font-semibold text-sm">Support</span>
  </a>

</div>

    </div>
  );
}
