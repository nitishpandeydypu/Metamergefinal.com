"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SmilePlus, Package, Network, TrendingUp } from "lucide-react";

/* 🔥 SAME DATA (unchanged) */
const services = [ /* same as your code */ ];
const colorMap: Record<string, string> = { /* same */ };
const statsData = [ /* same */ ];
const faqs = [ /* same */ ];

/* 🔥 COUNTER (same) */
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

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function HomePage() {
  return (
    <div>

      {/* 🔥 HERO (same tera code) */}
      <section className="hero-bg grid-bg relative overflow-hidden py-14 px-6">
        {/* TERA HERO SAME */}
      </section>

      {/* 🔥🔥🔥 NEW VIDEO SECTION (ADDED) */}
      <section className="py-20 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* VIDEO */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-[250px] md:h-[350px]"
              src="https://www.youtube.com/embed/VP1rFacoOb0"
              title="Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Watch. Learn. Done Simply.
            </h2>

            <p className="text-gray-600 mb-8">
              See how our WhatsApp marketing software works in real-time.
              From bulk messaging to automation — everything explained step-by-step.
            </p>

            <div className="space-y-5">

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center">✔</div>
                <div>
                  <p className="font-semibold">Step-by-Step Guide</p>
                  <p className="text-sm text-gray-500">Complete walkthrough</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center">⏱</div>
                <div>
                  <p className="font-semibold">Quick Setup</p>
                  <p className="text-sm text-gray-500">Start in minutes</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center">💡</div>
                <div>
                  <p className="font-semibold">Pro Tips</p>
                  <p className="text-sm text-gray-500">Maximize results</p>
                </div>
              </div>

            </div>

            <div className="mt-8 flex gap-4">
              <a href="https://wa.me/919234547310"
                className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold">
                💬 Get Demo
              </a>

              <Link href="/pricing"
                className="border border-gray-300 px-6 py-3 rounded-full font-semibold">
                View Pricing →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 🔥 REST CODE SAME (services, faq, stats etc) */}

    </div>
  );
}
