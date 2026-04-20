"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    email: "",
    found: "Google",
    role: "Professional",
    requirement: "Web Development",
    note: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const msg = `Hi, I am ${form.name}
Contact: ${form.contact}
Email: ${form.email}
Found via: ${form.found}
Role: ${form.role}
Requirement: ${form.requirement}
Message: ${form.note}`;

    window.open(
      `https://wa.me/919234547310?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <div>
      {/* Hero */}
      <section className="hero-bg grid-bg py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
            Contact Us
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Let&apos;s Get <span className="text-blue-400">In Touch</span>
          </h1>
          <p className="text-slate-400 text-lg">
            We&apos;d love to hear from you. Fill the form or reach us directly.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="py-14 px-6 bg-[#0d1326]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Our Contact</h2>

            <div className="space-y-6">
              <div className="flex gap-4 bg-[#111827] border border-white/5 rounded-2xl p-5">
                <div>📍</div>
                <div>
                  <p className="text-slate-500 text-xs">Address</p>
                  <p className="text-white text-sm">
                    Pune, Maharashtra
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-[#111827] border border-white/5 rounded-2xl p-5">
                <div>✉️</div>
                <div>
                  <p className="text-slate-500 text-xs">Email</p>
                  <a href="mailto:Metamerge745@gmail.com" className="text-white">
                    Metamerge745@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 bg-[#111827] border border-white/5 rounded-2xl p-5">
                <div>📞</div>
                <div>
                  <p className="text-slate-500 text-xs">Phone</p>
                  <a href="tel:9234547310" className="text-white">
                    +91 9234547310
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">
              Send a Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="bg-[#111827] border border-white/5 rounded-2xl p-8 space-y-5"
            >
              {/* Inputs */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                className="w-full bg-[#0a0f1e] border border-white/10 rounded-xl px-4 py-3 text-white"
              />

              <input
                type="tel"
                name="contact"
                placeholder="Contact Number"
                onChange={handleChange}
                className="w-full bg-[#0a0f1e] border border-white/10 rounded-xl px-4 py-3 text-white"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                className="w-full bg-[#0a0f1e] border border-white/10 rounded-xl px-4 py-3 text-white"
              />

              {/* Selects */}
              <select name="found" onChange={handleChange} className="w-full bg-[#0a0f1e] border border-white/10 rounded-xl px-4 py-3 text-white">
                <option>Google</option>
                <option>Facebook</option>
                <option>Friend</option>
              </select>

              <select name="role" onChange={handleChange} className="w-full bg-[#0a0f1e] border border-white/10 rounded-xl px-4 py-3 text-white">
                <option>Professional</option>
                <option>Student</option>
              </select>

              <select name="requirement" onChange={handleChange} className="w-full bg-[#0a0f1e] border border-white/10 rounded-xl px-4 py-3 text-white">
                <option>WhatsApp Marketing</option>
                <option>Web Development</option>
              </select>

              {/* Message */}
              <textarea
                name="note"
                rows={4}
                placeholder="Your Message"
                onChange={handleChange}
                className="w-full bg-[#0a0f1e] border border-white/10 rounded-xl px-4 py-3 text-white"
              />

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-500 transition"
              >
                Send via WhatsApp 💬
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
