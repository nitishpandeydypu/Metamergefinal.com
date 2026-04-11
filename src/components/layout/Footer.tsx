import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#060b18] border-t border-white/5 py-14 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-heading text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent mb-4">Metamerge</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-3">
            Metamerge Button Sender converts conversations into profitable sales transactions, supercharging your business growth.
          </p>
          <p className="text-slate-500 text-xs">Support: Mon–Fri, 9 AM – 7 PM</p>
          <p className="text-slate-500 text-xs mt-1">📞 8187944832</p>
          <p className="text-slate-500 text-xs mt-1">✉️ metamerge745@gmail.com</p>
        </div>

        <div>
  <h4 className="font-heading font-bold text-white mb-4 text-sm uppercase tracking-wider">
    Information
  </h4>
  <ul className="space-y-2 text-sm text-slate-400">
   

    <li>
      <Link href="/become-a-partner" className="hover:text-blue-400 transition-colors">
        Become a Partner
      </Link>
    </li>

    <li>
      <Link href="/contact" className="hover:text-blue-400 transition-colors">
        Contact Us
      </Link>
    </li>

    <li>
      <Link href="/pricing" className="hover:text-blue-400 transition-colors">
        Pricing
      </Link>
    </li>

    <li>
      <Link href="/download" className="hover:text-blue-400 transition-colors">
        Download
      </Link>
    </li>
  </ul>
</div>

        <div>
  <h4 className="font-heading font-bold text-white mb-4 text-sm uppercase tracking-wider">
    Services
  </h4>

  <ul className="space-y-2 text-sm text-slate-400">
    <li>
      <Link href="/website-development" className="hover:text-blue-400 transition-colors">
        Website Development
      </Link>
    </li>

    <li>
      <Link href="/digital-marketing-services" className="hover:text-blue-400 transition-colors">
        Digital Marketing Services
      </Link>
    </li>

    <li>
      <Link href="/api-solution" className="hover:text-blue-400 transition-colors">
        WhatsApp Business API
      </Link>
    </li>

    <li>
      <Link href="/Metamerge-all-in-one-crm" className="hover:text-blue-400 transition-colors">
        Metamerge All In One CRM
      </Link>
    </li>
  </ul>
</div>

        <div>
          <h4 className="font-heading font-bold text-white mb-4 text-sm uppercase tracking-wider">Follow Us</h4>
          <div className="flex flex-col gap-3">
            {[
              { name: "Facebook", icon: "📘", href: "https://www.facebook.com/Metamergeinfotech/" },
              { name: "LinkedIn", icon: "💼", href: "http://www.linkedin.com/in/Metamerge" },
              { name: "Instagram", icon: "📸", href: "https://instagram.com/_Metamerge" },
              { name: "YouTube", icon: "▶️", href: "https://www.youtube.com/@Metamergeinfotech" },
            ].map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 text-sm transition-colors">
                <span>{s.icon}</span>{s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/5 text-center text-slate-500 text-xs">
        © 2025 All Rights Reserved — Metamerge Pvt Ltd
      </div>
    </footer>
  );
}
