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

export default function Navbar({ setOpenSupport }: any) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 text-white text-center py-2 px-4 text-xs sm:text-sm font-medium">
        🚀 Boost Your Revenue 5X with WhatsApp!{" "}
        <a
          href="https://wa.me/9234547310"
          className="underline font-bold hover:opacity-80"
        >
          Talk to Sales: +91 9234547310
        </a>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#0a0f1e]/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex items-center relative h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-10">
            <img src="/company.png" alt="Company Logo" className="h-[80px] w-auto" />
          </Link>

          {/* Menu */}
          <ul className="hidden lg:flex items-center gap-7 text-sm text-slate-300 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.label} className="relative">
                  <button
                    className="hover:text-blue-400 flex items-center gap-1"
                    onMouseEnter={() => setDropOpen(true)}
                    onMouseLeave={() => setDropOpen(false)}
                  >
                    {link.label}
                  </button>

                  <div
                    onMouseEnter={() => setDropOpen(true)}
                    onMouseLeave={() => setDropOpen(false)}
                    className={`absolute top-full left-0 w-60 bg-[#111827] border border-white/10 rounded-xl py-2 ${
                      dropOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    {link.dropdown.map((d) => (
                      <Link key={d.label} href={d.href} className="block px-4 py-2 text-sm hover:text-blue-400">
                        {d.label}
                      </Link>
                    ))}
                  </div>
                </li>
              ) : (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-blue-400">
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Right */}
          <div className="hidden lg:flex items-center gap-4 ml-auto z-10">

            {/* Support Button ✅ FIX */}
            <button
              onClick={() => setOpenSupport(true)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full text-sm"
            >
              Support Ticket
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white ml-auto z-10"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#0d1326] px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-blue-400"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Support Button ✅ */}
            <button
              onClick={() => setOpenSupport(true)}
              className="bg-purple-600 text-white px-4 py-2 rounded mt-2"
            >
              Support Ticket
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
