"use client";
import { useState } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
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
      { label: "Metamerge All In One CRM", href: "/metamerge-all-in-one-crm" },
    ],
  },
  { label: "Shop", href: "/shop" },
  { label: "Download", href: "/download" },
  { label: "Contact", href: "/contact" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar({
  setOpenSupport,
  theme,
  toggleTheme,
}: {
  setOpenSupport: (value: boolean) => void;
  theme: "dark" | "light";
  toggleTheme: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#2563EB] via-[#6366F1] to-[#9333EA] text-white text-center py-2 px-2 text-sm font-semibold shadow-[0_0_30px_rgba(99,102,241,0.35)]">
        🚀 Boost Your Revenue 5X with WhatsApp!{" "}
        <a
          href="https://wa.me/917309653661"
          className="underline font-bold hover:text-white transition"
        >
          Talk to Sales: +917309653661
        </a>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[var(--bg-primary)]/80 backdrop-blur-lg border-b border-[var(--border-soft)]">
        <div className="max-w-7xl mx-auto px-6 flex items-center relative h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-10 ml-10">
            <img src="/company.png" alt="Company Logo" className="h-[60px]" />
          </Link>

          {/* Menu */}
          <ul className="hidden lg:flex items-center gap-7 text-sm text-[var(--text-secondary)] absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.label} className="relative">
                  <button
                    className="hover:text-blue-400 flex items-center gap-1 font-semibold text-[16px]"
                    onMouseEnter={() => setDropOpen(true)}
                    onMouseLeave={() => setDropOpen(false)}
                  >
                    {link.label}
                  </button>
                  <div
                    onMouseEnter={() => setDropOpen(true)}
                    onMouseLeave={() => setDropOpen(false)}
                    className={`absolute top-full left-0 w-60 bg-[#111827] border border-white/10 rounded-xl py-2 ${dropOpen ? "opacity-100" : "opacity-0 pointer-events-none"
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
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 font-semibold text-[16px]"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Right */}
          <div className="hidden lg:flex items-center gap-4 ml-auto z-10">
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full border border-[var(--border-soft)] bg-white/10 p-2.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

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
          <div className="lg:hidden bg-[var(--bg-secondary)] px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[var(--text-secondary)] hover:text-blue-400"
              >
                {link.label}
              </Link>
            ))}

            <div className="flex items-center justify-between gap-3 mt-2">
              <button
                type="button"
                onClick={toggleTheme}
                className="rounded-full border border-[var(--border-soft)] bg-white/10 p-2.5 text-[var(--text-secondary)]"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <button
                onClick={() => setOpenSupport(true)}
                className="bg-purple-600 text-white px-4 py-2 rounded"
              >
                Support Ticket
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
