import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Marketing Services – Metamerge",
  description: "Strategic digital marketing services including SEO, link building, and web design by Metamerge.",
};

const services = [
  {
    icon: "🔍",
    title: "Search Engine Optimization (SEO)",
    desc: "Enhance your online presence and boost your website's visibility with strategic SEO. We identify the most effective keywords, optimize your content, and utilize tools like Google Search Console to attract quality leads.",
  },
  {
    icon: "🏢",
    title: "Franchise SEO",
    desc: "Amplify your brand's reach with specialized franchise SEO. We create targeted marketing strategies for your specific audience and locations, optimizing listings and generating location-specific content.",
  },
  {
    icon: "📍",
    title: "Local SEO",
    desc: "88% of local business searches result in a visit or call within 24 hours. We optimize your NAP details, enhance location pages, build local links, and leverage social media to connect with your community.",
  },
  {
    icon: "⚙️",
    title: "Technical SEO",
    desc: "Strengthen your online presence with expert technical SEO. We address errors, improve HTTPS status, optimize site speed, eliminate duplicate content, and implement structured data.",
  },
  {
    icon: "🔗",
    title: "Link Building",
    desc: "Increase traffic and build consumer trust with our strategic link-building services. We secure placements on high-authority sites through paid ads, sponsorships, guest blogging, and infographics.",
  },
  {
    icon: "🎨",
    title: "Web Design & Development",
    desc: "Custom, mobile-friendly, SEO-optimized websites designed to support your business goals. We focus on visual hierarchy, clear CTAs, and persona-specific content to ensure conversions.",
  },
];

const faqs = [
  {
    q: "What is Digital Marketing?",
    a: "Digital marketing involves promoting products or services using online channels like social media, search engines, email, and websites to reach a broader audience and drive sales.",
  },
  {
    q: "What Does a Digital Marketer Do?",
    a: "A digital marketer creates and manages online campaigns, analyses data, and optimizes strategies to improve performance — handling social media, SEO, email marketing, content creation, and paid advertising.",
  },
  {
    q: "Would My Business Benefit from Digital Marketing Services?",
    a: "Yes. Digital marketing can increase your online presence, reach a larger audience, and drive sales. It provides measurable results, allowing you to track and optimize campaigns for businesses of all sizes.",
  },
  {
    q: "How Cost-Effective is Digital Marketing vs Traditional Marketing?",
    a: "Digital marketing is generally more cost-effective. It allows precise targeting, real-time data analysis, and lower costs for reaching a broad audience, often leading to higher ROI and better budget management.",
  },
  {
    q: "How Do You Identify a Successful Digital Marketing Company?",
    a: "Look for companies that understand your needs, set realistic goals, provide transparent reporting, and avoid quick fixes. Check for proven success, client testimonials, and a team of experts.",
  },
];

export default function DigitalMarketingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-bg grid-bg py-14 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-2 items-center">
          
          <div>

            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              📈 Digital Marketing
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Digital<br />
              <span className="gradient-text">Marketing Services</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
              Build your client base with strategic solutions. Metamerge is a dynamic digital marketing agency that relies on expertise in SEO and marketing — not tricks — to grow your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary text-white font-semibold px-8 py-3 rounded-full text-sm">Get Started →</Link>
              <a href="https://wa.me/918187944832" className="btn-green text-white font-semibold px-8 py-3 rounded-full text-sm flex items-center gap-2">
                💬 WhatsApp Us
              </a>
            </div>
          </div>
          <div className="flex justify-center">
  <img
    src="/social.jpg"
    alt="Digital Marketing"
className="w-[500px] h-auto rounded-3xl object-cover"  />
</div>
        </div>
      </section>

      {/* Why section */}
      <section className="py-16 px-6 bg-[#0d1326]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">Why Digital Marketing</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Why Your Business Should Use <span className="gradient-text">Digital Marketing</span>
          </h2>
          <p className="text-slate-400 leading-relaxed text-lg">
            In today&apos;s fast-paced online world, U.S. businesses spend over $110 billion on digital advertising. Traditional methods are not enough. Boost your sales and build a strong online presence by using effective digital marketing services. Connect with your target audience and stay ahead in the evolving market.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">Our Services</p>
            <h2 className="font-heading text-4xl font-bold">
              Establish Brand Recognition &amp; <span className="gradient-text">Drive Profitability</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-[#111827] border border-white/5 rounded-2xl p-7 hover:border-orange-500/30 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-heading text-lg font-bold text-white mb-3">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-[#0d1326]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="font-heading text-4xl font-bold">Digital Marketing <span className="gradient-text">FAQs</span></h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#111827] border border-white/5 rounded-2xl p-6">
                <h3 className="font-heading font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-orange-400 font-mono text-sm mt-0.5">Q{i + 1}</span>
                  {faq.q}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
          {/* <div className="mt-10 text-center">
            <Link href="/contact" className="btn-primary inline-block text-white font-semibold px-10 py-3 rounded-full text-sm">
              Talk to Our Experts →
            </Link>
          </div> */}
        </div>
      </section>
    </div>
  );
}
