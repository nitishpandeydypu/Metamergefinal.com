"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  SmilePlus,
  Package,
  Network,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Headphones,
  Zap,
  BadgeDollarSign,
  Code2,
  ShieldCheck,
  UserRound,
  Database,
  Server,
  Cloud,
} from "lucide-react";

import { TypeAnimation } from "react-type-animation";

/* =========================
   SERVICES DATA
========================= */
const services = [
  {
    icon: "🌐",
    title: "Website Development",
    desc: "Modern responsive websites built for growth and conversions.",
    href: "/website-development",
    color: "blue",
  },
  {
    icon: "📈",
    title: "Digital Marketing",
    desc: "SEO, paid ads & social media campaigns that generate leads.",
    href: "/digital-marketing-services",
    color: "orange",
  },
  {
    icon: "💬",
    title: "WhatsApp API",
    desc: "Official WhatsApp API with chatbot and automation.",
    href: "/api-solution",
    color: "",
  },
  {
    icon: "🗂️",
    title: "All-In-One CRM",
    desc: "Manage sales, support, invoices and leads from one dashboard.",
    href: "/metamerge-all-in-one-crm",
    color: "violet",
  },
  {
    icon: "⬇️",
    title: "Download Software",
    desc: "Get access to our latest WhatsApp marketing software.",
    href: "/download",
    color: "purple",
  },
  {
    icon: "💰",
    title: "Pricing Plans",
    desc: "Flexible plans for startups, agencies and resellers.",
    href: "/pricing",
    color: "pink",
  },
];

/* =========================
   COLOR MAP
========================= */
const colorMap: Record<string, string> = {
  blue: "group-hover:text-blue-400 bg-blue-500/10 border-blue-500/20",

  orange:
    "group-hover:text-orange-400 bg-orange-500/10 border-orange-500/20",

  green:
    "group-hover:text-blue-400 bg-blue-500/10 border-blue-500/20",

  violet:
    "group-hover:text-violet-400 bg-violet-500/10 border-violet-500/20",

  purple:
    "group-hover:text-purple-400 bg-purple-500/10 border-purple-500/20",

  pink:
    "group-hover:text-pink-400 bg-pink-500/10 border-pink-500/20",
};
/* =========================
   STATS DATA
========================= */
const statsData = [
  {
    icon: SmilePlus,
    value: 2500,
    suffix: "+",
    label: "Happy Customers",
    color: "text-blue-400",
  },
  {
    icon: Package,
    value: 350,
    suffix: "+",
    label: "Software Sold",
    color: "text-blue-400",
  },
  {
    icon: Network,
    value: 250,
    suffix: "+",
    label: "Resellers",
    color: "text-purple-400",
  },
  {
    icon: TrendingUp,
    value: 7.5,
    suffix: "L+",
    label: "Revenue Generated",
    color: "text-yellow-400",
  },
];
const whyChooseData = [
  {
    icon: Headphones,
    title: "24×7 Support",
    desc: "Dedicated support team available whenever you need assistance.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "Projects delivered on time with an efficient workflow.",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Pricing",
    desc: "Premium quality services at competitive pricing.",
  },
  {
    icon: Code2,
    title: "Custom Development",
    desc: "Tailor-made websites, apps and software for your business.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Solutions",
    desc: "Enterprise-grade security and data protection standards.",
  },
  {
    icon: UserRound,
    title: "Dedicated Account Manager",
    desc: "A single point of contact throughout your project journey.",
  },
];
const developmentSteps = [
  {
    step: "01",
    title: "Requirement Analysis",
    desc: "Understanding business goals, target audience and project requirements.",
  },
  {
    step: "02",
    title: "Design & Planning",
    desc: "Creating wireframes, UI/UX designs and project roadmap.",
  },
  {
    step: "03",
    title: "Development",
    desc: "Building scalable websites, apps and software solutions.",
  },
  {
    step: "04",
    title: "Testing",
    desc: "Quality assurance, bug fixing and performance optimization.",
  },
  {
    step: "05",
    title: "Deployment",
    desc: "Launching the project securely on production servers.",
  },
  {
    step: "06",
    title: "Support",
    desc: "Ongoing maintenance, updates and technical assistance.",
  },
];
/* =========================
   FAQ DATA
========================= */
const faqs = [
  {
    question: "What is Metamerge?",
    answer:
      "Metamerge provides WhatsApp marketing software, CRM, automation, website development and digital growth solutions.",
  },
  {
    question: "Do you provide WhatsApp Business API?",
    answer:
      "Yes, we provide official WhatsApp Business API with automation and chatbot integration.",
  },
  {
    question: "How quickly can I start?",
    answer:
      "Most clients are onboarded within 24–72 hours depending on verification.",
  },
  {
    question: "Do you offer reseller plans?",
    answer:
      "Yes, we offer reseller and white-label plans for agencies and marketers.",
  },
  {
    question: "Is support included?",
    answer:
      "Yes, WhatsApp and technical support are included with all plans.",
  },
];

/* =========================
   COUNTER COMPONENT
========================= */
function Counter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
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
            const progress = Math.min(
              (Date.now() - start) / duration,
              1
            );

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
const techStack = [
  {
    icon: "⚛️",
    name: "React",
  },
  {
    icon: "▲",
    name: "Next.js",
  },
  {
    icon: "🟢",
    name: "Node.js",
  },
  {
    icon: "🐍",
    name: "Python",
  },
  {
    icon: "🍃",
    name: "MongoDB",
  },
  {
    icon: "🗄️",
    name: "MySQL",
  },
  {
    icon: "☁️",
    name: "AWS",
  },
  {
    icon: "💬",
    name: "WhatsApp API",
  },
];
/* =========================
   MAIN COMPONENT
========================= */
export default function HomePage() {
  const [openSupport, setOpenSupport] = useState(false);
  const caseStudies = [
    {
      category: "Website Development",
      title: "3X More Online Leads",
      description:
        "Custom business website with SEO optimization and lead capture system.",
      points: [
        "Higher search visibility",
        "More enquiry forms",
        "Better conversion rate",
      ],
    },
    {
      category: "Mobile App",
      title: "12K+ App Downloads",
      description:
        "Cross-platform mobile application with real-time user engagement.",
      points: [
        "Increased retention",
        "Push notifications",
        "Faster customer support",
      ],
    },
    {
      category: "CRM Automation",
      title: "65% Faster Operations",
      description:
        "Automated lead management and workflow system for growing businesses.",
      points: [
        "Lead tracking",
        "Team productivity",
        "Automated follow-ups",
      ],
    },
  ];
  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-hidden">
      <section className="relative overflow-hidden py-10 md:py-10 px-6 border-b border-[var(--border-subtle)]">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.15),transparent_40%)]" />

        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/20 blur-[180px] rounded-full animate-pulse" />

        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/20 blur-[180px] rounded-full animate-pulse" />

        <div className="relative max-w-5xl mx-auto">

          {/* LEFT */}
          <div className="relative flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-8 backdrop-blur-xl">
              🚀 Website, App & Software Development Company
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">

              Grow Your
              <br />

              Business With
              <br />

              <span className="block min-h-[120px] md:min-h-[120px] bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#A855F7] bg-clip-text text-transparent">
                <TypeAnimation
                  sequence={[
                    "Website Development",
                    2000,
                    "App Development",
                    2000,
                    "CRM Automation",
                    2000,
                    "Meta ads Expert",
                    2000,
                    "WhatsApp Marketing",
                    2000,
                    "Lead Generation",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />

              </span>

            </h1>

            <p className="text-[var(--text-muted)] text-lg md:text-xl leading-relaxed mb-10 max-w-lg mx-auto">
              Professional Website Development, Mobile App Development, Custom Software Solutions, CRM Systems, and Business Automation Services Designed to Help Businesses Grow Faster, Improve Efficiency, and Build a Strong Digital Presence.
            </p>

            <div className="flex flex-wrap gap-4 mb-10 justify-center lg:justify-start">

              <a
                href="https://app.metamerged.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-[#3B82F6] to-[#6366F1] hover:from-[#2563EB] hover:to-[#4F46E5] shadow-[0_0_40px_rgba(59,130,246,0.45)] text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
                Start Free Trial

                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition"
                />
              </a>

              <a
                href="https://wa.me/917309653661"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-[#3B82F6] to-[#6366F1] hover:from-[#2563EB] hover:to-[#4F46E5] shadow-[0_0_40px_rgba(59,130,246,0.45)] text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
              >
                💬 Chat on WhatsApp
              </a>

            </div>

            
          </div>

          {/* RIGHT */}
          {/*
  <div className="relative flex justify-center">

      <div className="absolute -top-6 -left-4 bg-[#101827] border border--500/20 rounded-2xl px-6 py-4 shadow-2xl backdrop-blur-xl z-20">
        <p className="text--400 text-sm font-semibold">
          Revenue Growth
        </p>
        <h3 className="text-3xl font-black">
          5X Faster
        </h3>
      </div>

<div className="absolute -bottom-4 -right-4 bg-[#101827] border border-blue-500/20 rounded-2xl px-6 py-4 shadow-2xl backdrop-blur-xl z-20">
  <p className="text-blue-400 text-sm font-semibold">
    Active Clients
  </p>
  <h3 className="text-3xl font-black">
    1000+
  </h3>
</div>


      <div className="relative w-full max-w-lg rounded-[36px] border border-[var(--border-soft)] bg-gradient-to-br from-[var(--bg-tertiary)] via-[var(--bg-secondary)] to-[var(--bg-primary)] p-10 shadow-[0_0_100px_rgba(34,197,94,0.15)]">

        <div className="w-28 h-28 rounded-[32px] bg--500 flex items-center justify-center mx-auto mb-6 shadow-[0_0_60px_rgba(34,197,94,0.6)]">

          <svg
            viewBox="0 0 24 24"
            className="w-16 h-16 text-white fill-current"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487" />
          </svg>

        </div>

        <h2 className="text-4xl font-black text-center mb-3">
          Metamerge
        </h2>

        <p className="text-[var(--text-muted)] text-center mb-8">
        Enterprise Websites • Mobile Apps • CRM Systems • Automation
        </p>

        <div className="grid grid-cols-2 gap-5">

          <div className="bg-[var(--bg-tertiary)] border border-[var(--border-soft)] rounded-2xl p-5 text-center">
            <p className="text--400 text-3xl font-black">
              10K+
            </p>
            <p className="text-xs text-[var(--text-muted)] mt-1">
              Messages Daily
            </p>
          </div>

          <div className="bg-[var(--bg-tertiary)] border border-[var(--border-soft)] rounded-2xl p-5 text-center">
            <p className="text-blue-400 text-3xl font-black">
              98%
            </p>
            <p className="text-xs text-[var(--text-muted)] mt-1">
              Satisfaction
            </p>
          </div>

        </div>

      </div>

    </div>
    */}

        </div>

      </section>
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <div className="inline-flex px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm font-semibold mb-5">
              Case Studies
            </div>

            <h2 className="text-4xl md:text-6xl font-black">
              Success Stories & Business Impact
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {caseStudies.map((item, i) => (
              <div
                key={i}
                className="rounded-[24px] border border-[var(--border-soft)] bg-gradient-to-br from-[var(--bg-tertiary)] to-[var(--bg-secondary)] p-6 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="inline-flex px-5 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-semibold mb-8">
                  {item.category}
                </div>

                <h3 className="text-4xl font-black mb-4">
                  {item.title}
                </h3>

                <p className="text-[var(--text-muted)] mb-8">
                  {item.description}
                </p>

                <div className="space-y-4 mb-10">
                  {item.points.map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-blue-400" />
                      <span className="text-[var(--text-secondary)]">{point}</span>
                    </div>
                  ))}
                </div>

                <button className="px-8 py-4 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-soft)] hover:bg-[var(--bg-secondary)] transition">
                  View Case Study
                </button>

              </div>
            ))}

          </div>

        </div>
      </section>
      {/* =======================================================
    VIDEO SECTION
======================================================= */}
      <section className="py-10 px-6 bg-[var(--bg-secondary)]">

        <div className="max-w-7xl mx-auto text-center">

          <p className="text-blue-400 font-semibold uppercase tracking-widest mb-3">
            Product Demo
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-5">
            Watch Our
            <span className="text-blue-400"> Live Demo</span>
          </h2>

          <p className="text-[var(--text-muted)] mb-12">
            Explore our WhatsApp Marketing Software and Cloud Platform in action.
          </p>

          {/* VIDEOS */}
          <div className="grid lg:grid-cols-2 gap-8">

            {/* SOFTWARE DEMO */}
            <div className="rounded-2xl overflow-hidden border border-[var(--border-soft)] shadow-2xl bg-[var(--bg-secondary)]">

              <div className="p-4 border-b border-[var(--border-soft)]">
                <h3 className="text-xl font-bold">
                  💻 Metamerge Windows Software
                </h3>
              </div>

              <iframe
                className="w-full h-[250px] md:h-[420px]"
                src="https://www.youtube.com/embed/VP1rFacoOb0"
                title="Metamerge Demo"
                frameBorder="0"
                allowFullScreen
              />
            </div>

            {/* CLOUD DEMO */}
            <div className="rounded-2xl overflow-hidden border border-blue-500/20 shadow-2xl bg-[var(--bg-secondary)]">

              <div className="p-4 border-b border-blue-500/20">
                <h3 className="text-xl font-bold">
                  ☁️ Metamerge Cloud Platform( Requires No PC )
                </h3>
              </div>

              <iframe
                className="w-full h-[250px] md:h-[420px]"
                src="https://www.youtube.com/embed/2TnEjCKeqVw"
                title="Metamerge Cloud Demo"
                frameBorder="0"
                allowFullScreen
              />
            </div>

          </div>

        </div>

      </section>
      {/* =======================================================
          SERVICES SECTION
      ======================================================= */}
      <section className="py-10 px-6">

        <div className="max-w-7xl mx-auto">

          {/* SECTION TITLE */}
          <div className="text-center mb-10">

            <p className="text-blue-400 font-semibold uppercase tracking-widest mb-3">
              Our Services
            </p>

            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Everything Your Business
              <span className="text-blue-400"> Needs</span>
            </h2>

            <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
              From WhatsApp automation to websites and CRM systems,
              Metamerge provides all-in-one digital growth solutions.
            </p>

          </div>

          {/* SERVICE CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl p-7 hover:border-blue-500/30 hover:-translate-y-2 transition-all duration-300"
              >

                <div
                  className={`w-16 h-16 rounded-2xl border flex items-center justify-center text-3xl mb-5 ${colorMap[service.color]}`}
                >
                  {service.icon}
                </div>

                <h3
                  className={`text-2xl font-bold mb-3 ${colorMap[service.color]}`}
                >
                  {service.title}
                </h3>

                <p className="text-[var(--text-muted)] leading-relaxed mb-5">
                  {service.desc}
                </p>

                <span className="text-blue-400 flex items-center gap-2 font-semibold">
                  Learn More
                  <ArrowRight size={16} />
                </span>

              </Link>
            ))}

          </div>

        </div>
      </section>
      {/* =======================================================
    TECHNOLOGY STACK
======================================================= */}
      <section className="py-10 px-6 bg-[var(--bg-secondary)]">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <div className="inline-flex px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm font-semibold mb-5">
              📊 Technology Stack
            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-5">
              Built With
              <span className="text-blue-400"> Modern Technologies</span>
            </h2>

            <p className="text-[var(--text-muted)] max-w-3xl mx-auto">
              We use industry-leading technologies to build scalable,
              secure and high-performance websites, mobile apps,
              CRM systems and automation platforms.
            </p>  

          </div>

          <div className="grid grid-cols-2 md:grid-cols-8 gap-3">

            {techStack.map((tech, i) => (
              <div
                key={i}
                className="group bg-[var(--bg-secondary)] border border-[var(--border-soft)] rounded-2xl p-6 text-center hover:border-blue-500/30 hover:-translate-y-2 transition-all duration-300"
              >

                <div className="text-5xl mb-5">
                  {tech.icon}
                </div>

                <h3 className="text-xl font-bold group-hover:text-blue-400 transition">
                  {tech.name}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>
      {/* =======================================================
    CLIENT TESTIMONIALS
======================================================= */}
      <section className="py-10 px-6 bg-[var(--bg-secondary)]">

        <div className="max-w-7xl mx-auto">

          {/* PREMIUM HEADING */}
          <div className="text-center mb-16">

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6">
              ⭐ Client Success Stories
            </div>

            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-5">
              Trusted by Businesses
              <br />
              <span className="bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#A855F7] bg-clip-text text-transparent">
                Across India
              </span>
            </h2>

            <p className="text-[var(--text-muted)] text-lg max-w-3xl mx-auto">
              Businesses trust Metamerge for Website Development, Mobile Apps,
              CRM Systems, Business Automation and Custom Software Solutions.
            </p>

          </div>

          {/* TESTIMONIALS */}
          <div className="grid lg:grid-cols-3 gap-8">

            {[
              {
                name: "Rahul S.",
                role: "Founder",
                company: "Real Estate Company",
                review:
                  "Metamerge delivered a professional website that significantly improved our online presence. We started receiving more enquiries within weeks of launch.",
              },
              {
                name: "Priya V.",
                role: "Director",
                company: "Education Institute",
                review:
                  "The website design and CRM integration streamlined our admission process. The team was responsive and delivered everything on time.",
              },
              {
                name: "Amit K.",
                role: "CEO",
                company: "Technology Startup",
                review:
                  "Our custom web application was developed exactly as per our requirements. The UI, performance and support exceeded expectations.",
              },
              {
                name: "Sneha G.",
                role: "Marketing Head",
                company: "E-Commerce Business",
                review:
                  "The website redesign improved user experience and increased conversion rates. We are extremely happy with the final outcome.",
              },
              {
                name: "Vikas T.",
                role: "Operations Manager",
                company: "Healthcare Organization",
                review:
                  "The CRM automation solution helped us reduce manual work and improve team productivity. Excellent service and support.",
              },
              {
                name: "Neha A.",
                role: "Managing Director",
                company: "Manufacturing Business",
                review:
                  "Metamerge built a modern, SEO-friendly website that perfectly represents our brand. The project was delivered professionally from start to finish.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group rounded-[30px] border border-[var(--border-soft)] bg-gradient-to-br from-[var(--bg-tertiary)] via-[var(--bg-secondary)] to-[var(--bg-primary)] p-8 hover:border-blue-500/30 hover:-translate-y-2 transition-all duration-300"
              >

                {/* STARS */}
                <div className="text-yellow-400 text-lg mb-5">
                  ⭐⭐⭐⭐⭐
                </div>

                {/* REVIEW */}
                <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                  "{item.review}"
                </p>

                {/* CLIENT INFO */}
                <div className="border-t border-[var(--border-soft)] pt-5">

                  <h4 className="font-bold text-lg text-white">
                    {item.name}
                  </h4>

                  <p className="text-blue-400 text-sm font-medium mt-1">
                    {item.role}
                  </p>

                  <p className="text-[var(--text-muted-strong)] text-sm">
                    {item.company}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>
      {/* =======================================================
    WHY CHOOSE METAMERGE
======================================================= */}
      <section className="py-10 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <div className="inline-flex px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6">
              Why Choose Metamerge
            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-5">
              Built For
              <span className="text-blue-400"> Business Growth</span>
            </h2>

            <p className="text-[var(--text-muted)] max-w-3xl mx-auto text-lg">
              We help businesses scale with modern technology, fast execution
              and dedicated support.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {whyChooseData.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="group rounded-[28px] border border-[var(--border-soft)] bg-gradient-to-br from-[var(--bg-tertiary)] via-[var(--bg-secondary)] to-[var(--bg-primary)] p-8 hover:border-blue-500/30 hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">

                    <Icon
                      size={30}
                      className="text-blue-400"
                    />

                  </div>

                  <h3 className="text-2xl font-bold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-[var(--text-muted)] leading-relaxed">
                    {item.desc}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>
      {/* =======================================================
    DEVELOPMENT PROCESS
======================================================= */}
      <section className="py-10 px-6 bg-[var(--bg-secondary)]">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">

            <div className="inline-flex px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6">
              🚀 Development Process
            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-5">
              From Idea To
              <span className="text-blue-400"> Launch</span>
            </h2>

            <p className="text-[var(--text-muted)] text-lg max-w-3xl mx-auto">
              Our proven process ensures quality, transparency and timely delivery
              for every project.
            </p>

          </div>

          <div className="relative">

            <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 hidden md:block"></div>

            <div className="space-y-10">

              {developmentSteps.map((item, index) => (

                <div
                  key={index}
                  className="relative flex items-start gap-6"
                >

                  <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-black text-lg shadow-lg shrink-0">
                    {item.step}
                  </div>

                  <div className="flex-1 rounded-2xl border border-[var(--border-soft)] bg-gradient-to-br from-[var(--bg-tertiary)] via-[var(--bg-secondary)] to-[var(--bg-primary)] p-6 hover:border-blue-500/30 transition-all duration-300">

                    <h3 className="text-2xl font-bold mb-3">
                      {item.title}
                    </h3>

                    <p className="text-[var(--text-muted)] leading-relaxed">
                      {item.desc}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>
      {/* =======================================================
          STATS SECTION
      ======================================================= */}
      <section className="py-10 px-6 bg-[var(--bg-secondary)]">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-10">

            <p className="text-blue-400 font-semibold uppercase tracking-widest mb-3">
              Our Impact
            </p>

            <h2 className="text-4xl md:text-5xl font-black">
              Trusted by Businesses
              <span className="text-blue-400"> Across India</span>
            </h2>

          </div>

          {/* STATS GRID */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

            {statsData.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl p-6 text-center hover:border-blue-500/20 transition-all duration-300"
                >

                  <div className="w-16 h-16 rounded-2xl bg-[var(--bg-tertiary)] border border-[var(--border-soft)] flex items-center justify-center mx-auto mb-4">

                    <Icon
                      size={28}
                      className={stat.color}
                    />

                  </div>

                  <h3
                    className={`text-4xl font-black mb-2 ${stat.color}`}
                  >
                    <Counter
                      target={stat.value}
                      suffix={stat.suffix}
                    />
                  </h3>

                  <p className="text-[var(--text-muted)] text-sm">
                    {stat.label}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =======================================================
          FAQ SECTION
      ======================================================= */}
      <section className="py-10 px-6">

        <div className="max-w-5xl mx-auto">

          {/* TITLE */}
          <div className="text-center mb-10">

            <p className="text-blue-400 font-semibold uppercase tracking-widest mb-3">
              FAQ
            </p>

            <h2 className="text-4xl md:text-5xl font-black">
              Frequently Asked
              <span className="text-blue-400"> Questions</span>
            </h2>

          </div>

          {/* FAQ ITEMS */}
          <div className="space-y-4">

            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl overflow-hidden"
              >

                <summary className="flex justify-between items-center px-6 py-5 cursor-pointer list-none">

                  <span className="font-semibold text-lg">
                    {faq.question}
                  </span>

                  <span className="text-blue-400 text-xl">
                    +
                  </span>

                </summary>

                <div className="px-6 pb-5 text-[var(--text-muted)] leading-relaxed">
                  {faq.answer}
                </div>

              </details>
            ))}

          </div>

        </div>

      </section>

      {/* =======================================================
          CTA SECTION
      ======================================================= */}
      <section className="py-10 px-6 bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#A855F7]">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-black mb-5 text-white">
            Ready to Scale Your Business?
          </h2>

          <p className="text-white/90 text-lg mb-8">
            Join thousands of businesses already growing with Metamerge solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="https://wa.me/917309653661"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#3B82F6] font-bold px-9 py-3.5 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl"
            >
              💬 Talk to Sales
            </a>

            <button
              onClick={() => setOpenSupport(true)}
              className="border border-white/30 bg-white/10 backdrop-blur-xl text-white font-semibold px-9 py-3.5 rounded-2xl hover:bg-white/20 transition-all duration-300"
            >
              Open Support Ticket
            </button>

          </div>

        </div>

      </section>

      {/* =======================================================
          SUPPORT MODAL
      ======================================================= */}
      {openSupport && (
        <div className="fixed inset-0 bg-black/70 z-[999] flex items-center justify-center p-4">

          <div className="bg-white text-black w-full max-w-2xl rounded-2xl p-8 relative">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpenSupport(false)}
              className="absolute top-5 right-5 text-xl"
            >
              ✕
            </button>

            {/* MODAL TITLE */}
            <h2 className="text-3xl font-black mb-2">
              Support Ticket
            </h2>

            <p className="text-gray-500 mb-7">
              Fill the form below and our team will contact you.
            </p>

            {/* FORM */}
            <form
              onSubmit={(e) => {
                e.preventDefault();

                const form = e.currentTarget;

                const name = (
                  form.elements.namedItem(
                    "name"
                  ) as HTMLInputElement
                ).value;

                const phone = (
                  form.elements.namedItem(
                    "phone"
                  ) as HTMLInputElement
                ).value;

                const message = (
                  form.elements.namedItem(
                    "message"
                  ) as HTMLTextAreaElement
                ).value;

                const text = `Hi Metamerge Support 👋

Name: ${name}
Phone: ${phone}

Message:
${message}`;

                const url = `https://wa.me/917309653661?text=${encodeURIComponent(
                  text
                )}`;

                window.open(url, "_blank");

                setOpenSupport(false);
              }}
              className="space-y-5"
            >

              {/* NAME */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-4 outline-none focus:border-blue-500"
              />

              {/* PHONE */}
              <input
                type="text"
                name="phone"
                placeholder="WhatsApp Number"
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-4 outline-none focus:border-blue-500"
              />

              {/* MESSAGE */}
              <textarea
                name="message"
                placeholder="Describe your issue..."
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-4 h-32 outline-none focus:border-blue-500"
              />

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-all duration-300"
              >
                Submit Ticket
              </button>

            </form>

          </div>

        </div>
      )}

    </div>
  );
}
