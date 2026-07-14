import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-footer)] border-t border-[var(--border-subtle)] py-10 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[2fr_1fr_1fr] gap-12">

        {/* COMPANY */}
        <div>
          <h3 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent mb-4">
            Metamerge Infotech 
          </h3>

          <p className="text-slate-400 text-sm leading-relaxed mb-4 max-w-md">
            Metamerge helps businesses grow with Website Development,
            Mobile Apps, CRM Automation, WhatsApp Marketing and
            Custom Software Solutions.
          </p>

          <div className="space-y-2 text-sm text-slate-500">
            <p>📞 +91 7309653661</p>
            <p>✉️ info@metamerged.com</p>
            <p>🕒 Mon – Sat | 9 AM – 7 PM</p>
          </div>
        </div>

        {/* INFORMATION */}
        <div>
          <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
            Information
          </h4>

          <ul className="space-y-3 text-sm text-slate-400">
            <li>
              <Link href="/terms-and-conditions" className="hover:text-blue-400 transition">
                Terms & Conditions
              </Link>
            </li>

            <li>
              <Link href="/privacy-policy" className="hover:text-blue-400 transition">
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link href="/refund-policy" className="hover:text-blue-400 transition">
                Refund Policy
              </Link>
            </li>

            <li>
              <Link href="/shipping-policy" className="hover:text-blue-400 transition">
                Shipping Policy
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-blue-400 transition">
                Contact Us
              </Link>
            </li>

            <li>
              <Link href="/become-a-partner" className="hover:text-blue-400 transition">
                Become a Partner
              </Link>
            </li>

            <li>
              <Link href="/pricing" className="hover:text-blue-400 transition">
                Pricing
              </Link>
            </li>

            <li>
              <Link href="/download" className="hover:text-blue-400 transition">
                Download
              </Link>
            </li>
          </ul>
        </div>

        {/* FOLLOW US */}
        <div>
          <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
            Follow Us
          </h4>

          <div className="flex flex-col gap-3">
            {[
              {
                name: "Facebook",
                icon: "📘",
                href: "https://www.facebook.com/profile.php?id=61587519725103",
              },
              {
                name: "LinkedIn",
                icon: "💼",
                href: "https://www.linkedin.com/company/metamerge-infotech/?viewAsMember=true",
              },
              {
                name: "Instagram",
                icon: "📸",
                href: "https://www.instagram.com/meta_merge745/",
              },
              {
                name: "YouTube",
                icon: "▶️",
                href: "https://www.youtube.com/@METAMERGE-b3x",
              },
            ].map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-all duration-300 hover:translate-x-1"
              >
                <span>{s.icon}</span>
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">
          © 2026 Metamerge Infotech. All Rights Reserved.
        </p>

        <p className="text-slate-600 text-xs">
          Website • Apps • CRM • WhatsApp API • Automation
        </p>
      </div>
    </footer>
  );
}
