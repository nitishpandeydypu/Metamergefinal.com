"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", contact: "", email: "",
    found: "Google", role: "Professional", requirement: "Web Development", note: "",
  });
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    const msg = `Hi, I am ${form.name}. Contact: ${form.contact}. Email: ${form.email}. Found via: ${form.found}. Role: ${form.role}. Requirement: ${form.requirement}. Note: ${form.note}`;
    window.open(`https://wa.me/917827944832?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div>
      {/* Hero */}
      <section className="hero-bg grid-bg py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">Contact Us</p>
          <h1 className="font-heading text-5xl md:text-6xl font-extrabold mb-4">
            Let&apos;s Get <span className="gradient-text">In Touch</span>
          </h1>
          <p className="text-slate-400 text-lg">We&apos;d love to hear from you. Fill the form or reach us directly.</p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-14 px-6 bg-[#0d1326]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-1 gap-12">

          {/* Contact Info */}
          <div>
            <h2 className="font-heading text-3xl font-bold text-white mb-8">Our Contact</h2>
            <div className="space-y-6">
              {[
                { icon: "📍", label: "Address", value: "QM39+Q5H, Ambi - Ambale Road,Talegaon Dabadhe,Ambi,Pune,Maharashtra 410507" },
                { icon: "✉️", label: "Email Address", value: "Metamerge745@gmail.com", href: "mailto:Metamerge745@gmail.com" },
                { icon: "📞", label: "Call Us", value: "+917827944832", href: "tel:+97827944832" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 bg-[#111827] border border-white/5 rounded-2xl p-5">
                  <div className="text-2xl mt-0.5">{item.icon}</div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white font-medium hover:text-blue-400 transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-white font-medium text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="mt-8">
              <h3 className="font-heading font-bold text-white mb-4">Social Media</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Facebook", icon: "📘", href: "https://www.facebook.com/Metamerge745/" },
                  { name: "LinkedIn", icon: "💼", href: "http://www.linkedin.com/in/Metamerge" },
                  { name: "Instagram", icon: "📸", href: "https://instagram.com/_Meta_merge" },
                  { name: "YouTube", icon: "▶️", href: "https://www.youtube.com/@@METAMERGE-b3x" },
                  { name: "Twitter / X", icon: "🐦", href: "#" },
                ].map((s) => (
                  <a key={s.name} href={s.href} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 bg-[#111827] border border-white/5 text-slate-300 hover:text-blue-400 hover:border-blue-500/30 text-sm font-medium px-4 py-2 rounded-xl transition-all">
                    <span>{s.icon}</span>{s.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Support hours */}
            <div className="mt-8 bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-6">
              <h3 className="font-heading font-bold text-white mb-3">⏰ Support Hours</h3>
              <p className="text-slate-300 text-sm">Monday to Friday</p>
              <p className="text-blue-400 font-bold text-lg">9:00 AM – 7:00 PM IST</p>
              <p className="text-slate-400 text-xs mt-2">Support No: 917827944832</p>
            </div>
          </div>

          {/* Contact Form */}
          {/* <div>
            <h2 className="font-heading text-3xl font-bold text-white mb-8">Send a Message</h2>
            <div className="bg-[#111827] border border-white/5 rounded-2xl p-8 space-y-5">
              {[
                { name: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                { name: "contact", label: "Contact Number", type: "tel", placeholder: "+91 7827944832" },
                { name: "email", label: "Email Address", type: "email", placeholder: "you@example.com" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-slate-400 text-sm mb-2">{field.label}</label>
                  <input
                    type={field.type} name={field.name} value={(form as Record<string, string>)[field.name]}
                    onChange={handleChange} placeholder={field.placeholder}
                    className="w-full bg-[#0a0f1e] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                  />
                </div>
              ))}

              {[
                { name: "found", label: "Where You Found Us", opts: ["Google", "Facebook", "Friend", "Other"] },
                { name: "role", label: "Your Role", opts: ["Student", "Professional", "Hobbyist", "Other"] },
                { name: "requirement", label: "Requirement", opts: ["Web Development", "App Development", "SEO", "WhatsApp Bulk Marketing Software", "Other"] },
              ].map((sel) => (
                <div key={sel.name}>
                  <label className="block text-slate-400 text-sm mb-2">{sel.label}</label>
                  <select
                    name={sel.name} value={(form as Record<string, string>)[sel.name]}
                    onChange={handleChange}
                    className="w-full bg-[#0a0f1e] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                  >
                    {sel.opts.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
              ))}

              <div>
                <label className="block text-slate-400 text-sm mb-2">Note / Message</label>
                <textarea
                  name="note" value={form.note} onChange={handleChange} rows={4}
                  placeholder="Tell us more about your requirement..."
                  className="w-full bg-[#0a0f1e] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                />
              </div>

              <button onClick={handleSubmit} className="w-full btn-primary text-white font-semibold py-3.5 rounded-xl text-sm">
                Send via WhatsApp 💬
              </button>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}
