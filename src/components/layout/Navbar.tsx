"use client";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Become a Partner", href: "/become-a-partner" },
  {
    label: "Services",
    href: "#",
    dropdown: [
      { label: "Website Development", href: "/website-development" },
      { label: "Digital Marketing Services", href: "/digital-marketing-services" },
      { label: "WhatsApp Business API", href: "/api-solution" },
      { label: "Metamerge All In One CRM", href: "/Metamerge-all-in-one-crm" },
    ],
  },
  { label: "Shop", href: "/shop" },
  { label: "Download", href: "/download" },
  { label: "Contact", href: "/contact" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 text-white text-center py-2 px-4 text-xs sm:text-sm font-medium">
        🚀 Boost Your Revenue 5X with WhatsApp!&nbsp;
        <a href="https://wa.me/8187944832" className="underline font-bold hover:opacity-80">
          Talk to Sales: +91 8187944832
        </a>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#0a0f1e]/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6  flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/company.png"
              alt="Company Logo"
              className="h-[100px]"
            />
          </Link>

          {/* Desktop */}
          <ul className="hidden lg:flex items-center gap-7 text-sm text-slate-300">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.label} className="relative group">
                  <button
                    className="hover:text-blue-400 transition-colors font-medium flex items-center gap-1"
                    onMouseEnter={() => setDropOpen(true)}
                    onMouseLeave={() => setDropOpen(false)}
                  >
                    {link.label}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    onMouseEnter={() => setDropOpen(true)}
                    onMouseLeave={() => setDropOpen(false)}
                    className={`absolute top-full left-0 w-60 bg-[#111827] border border-white/10 rounded-xl shadow-2xl py-2 transition-all duration-200 ${dropOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
                  >
                    {link.dropdown.map((d) => (
                      <Link key={d.label} href={d.href} className="block px-4 py-2.5 text-sm text-slate-300 hover:text-blue-400 hover:bg-white/5 transition-colors">
                        {d.label}
                      </Link>
                    ))}
                  </div>
                </li>
              ) : (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-blue-400 transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>



          {/* Mobile toggle */}
          <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#0d1326] border-t border-white/5 px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <p className="text-slate-400 text-xs uppercase tracking-wider mb-2 mt-1">{link.label}</p>
                  {link.dropdown.map((d) => (
                    <Link key={d.label} href={d.href} onClick={() => setMenuOpen(false)} className="block text-slate-300 hover:text-blue-400 text-sm py-1 pl-3 border-l border-white/10">
                      {d.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="text-slate-300 hover:text-blue-400 text-sm font-medium py-1">
                  {link.label}
                </Link>
              )
            )}
          </div>
        )}
      </nav>
    </>
  );
}



