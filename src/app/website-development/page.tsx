import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Development – Metamerge",
  description: "Professional WordPress website development services by Metamerge.",
};

const reasons = [
  { icon: "🖥️", title: "User-Friendly Interface", desc: "WordPress is popularly known for its user-friendly interface, making it accessible even for those without technical expertise. Manage content easily so you can focus on your business." },
  { icon: "🎨", title: "Extensive Customization Options", desc: "Thousands of themes and plugins let you tailor your website to your exact needs. Whether sleek professional design or dynamic creative layout, WordPress brings your vision to life." },
  { icon: "🔍", title: "SEO-Friendly", desc: "Built with SEO in mind, WordPress offers plugins and features to boost your visibility on search engines. Optimize content, use SEO-friendly URLs, and integrate with Google Analytics effortlessly." },
  { icon: "📈", title: "Scalability and Flexibility", desc: "As your business grows, WordPress grows with it. Add blogs, e-commerce stores, or membership sites with ease. Its flexibility ensures your website evolves alongside your business." },
  { icon: "🤝", title: "Strong Community Support", desc: "WordPress boasts a vast, active community of developers, designers, and users. Access forums, tutorials, and documentation anytime you need help." },
];

const comparisonFeatures = [
  { label: "1 Year Domain", dynamic: true, ecom: true },
  { label: "1 Year Shared Hosting", dynamic: true, ecom: true },
  { label: "Professional Layout", dynamic: true, ecom: true },
  { label: "Dynamic Home-Page Slider", dynamic: true, ecom: true },
  { label: "Unlimited Services & Product Modules", dynamic: true, ecom: true },
  { label: "Mobile-Friendly Layout", dynamic: true, ecom: true },
  { label: "Social Media Connections", dynamic: true, ecom: true },
  { label: "Live Chat Support API", dynamic: true, ecom: true },
  { label: "Click to WhatsApp", dynamic: true, ecom: true },
  { label: "SEO Friendly", dynamic: true, ecom: true },
  { label: "Business E-Mail", dynamic: "3 Email", ecom: "5 Email" },
  { label: "E-Mail Template Functionality", dynamic: false, ecom: true },
  { label: "Lead Management System", dynamic: false, ecom: true },
  { label: "Google Webmaster Setup", dynamic: false, ecom: true },
  { label: "Bing Webmaster Setup", dynamic: false, ecom: true },
  { label: "Google Analytics Setup", dynamic: false, ecom: true },
  { label: "FB Pixel & Google Tag Manager", dynamic: false, ecom: true },
  { label: "Support & Services", dynamic: "1 Month", ecom: "3 Month" },
];

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-emerald-400 mx-auto" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
function CrossIcon() {
  return (
    <svg className="w-5 h-5 text-slate-600 mx-auto" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
function renderCell(val: boolean | string) {
  if (val === true) return <CheckIcon />;
  if (val === false) return <CrossIcon />;
  return <span className="text-sm font-semibold text-blue-400">{val}</span>;
}

export default function WebDevelopmentPage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-bg grid-bg relative overflow-hidden py-14 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              🌐 WordPress Development
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Website<br />
              <span className="gradient-text">Development</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
              Looking for a unique, highly responsive, and engaging business website? Our experienced team specializes in innovative WordPress solutions — from custom themes to plugin development.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary text-white font-semibold px-8 py-3 rounded-full text-sm">Contact Us →</Link>
              <a href="https://wa.me/917827944832" className="btn-green text-white font-semibold px-8 py-3 rounded-full text-sm flex items-center gap-2">
                💬 WhatsApp Us
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/web1.png"
              alt="Website Development"
              className="w-100 h-100 md:w-100 md:h-100 object-cover "
            />
          </div>
        </div>
      </section>

      {/* Why WordPress */}
      <section className="py-14 px-6 bg-[#0d1326]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Why Us</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Top 5 Reasons to Choose <span className="gradient-text">WordPress</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((item, i) => (
              <div key={i} className="bg-[#111827] border border-white/5 rounded-2xl p-7 hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-heading text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-14 px-6 bg-gradient-to-r from-[#128c7e] via-[#25d366] to-[#075e54]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">WhatsApp Now For Inquiry</h2>
          <p className="text-green-100 mb-8">Get in touch instantly and we&apos;ll help you get started.</p>
          <Link href="/contact" className="inline-block bg-white text-green-700 font-bold px-10 py-3 rounded-full text-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            Inquiry Now →
          </Link>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-14 px-6 bg-[#0a0f1e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Pricing</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Create a Website <span className="gradient-text">For Your Business</span>
            </h2>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <div className="grid grid-cols-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-white/10">
              <div className="p-5 text-sm font-semibold text-slate-400 uppercase tracking-wider">Feature</div>
              <div className="p-5 text-center">
                <p className="text-xs text-blue-400 font-semibold uppercase tracking-wider mb-1">Dynamic</p>
                <p className="font-heading font-bold text-white text-sm">WordPress Development</p>
              </div>
              <div className="p-5 text-center border-l border-white/10">
                <p className="text-xs text-purple-400 font-semibold uppercase tracking-wider mb-1">E-Commerce</p>
                <p className="font-heading font-bold text-white text-sm">Online Store</p>
              </div>
            </div>
            {comparisonFeatures.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 border-b border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                <div className="p-4 text-sm text-slate-300 flex items-center">{row.label}</div>
                <div className="p-4 text-center flex items-center justify-center">{renderCell(row.dynamic)}</div>
                <div className="p-4 text-center flex items-center justify-center border-l border-white/5">{renderCell(row.ecom)}</div>
              </div>
            ))}
            <div className="grid grid-cols-3 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
              <div className="p-5 font-heading font-bold text-white text-sm flex items-center">Pricing</div>
              <div className="p-5 text-center">
                <p className="text-xs text-slate-400 mb-1">Starting From</p>
                <p className="font-heading text-2xl font-extrabold text-blue-400">₹30,000</p>
              </div>
              <div className="p-5 text-center border-l border-white/10">
                <p className="text-xs text-slate-400 mb-1">Starting From</p>
                <p className="font-heading text-2xl font-extrabold text-purple-400">₹30,000</p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/contact" className="btn-primary inline-block text-white font-semibold px-10 py-3 rounded-full text-sm">
              Get Started Today →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
