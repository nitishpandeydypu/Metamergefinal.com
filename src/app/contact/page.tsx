"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const inputClassName =
  "w-full rounded-lg border border-[var(--border-soft)] bg-[var(--bg-primary)] px-4 py-3 text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10";

const contactItems = [
  {
    label: "Address",
    icon: MapPin,
    content: (
      <p className="text-sm leading-6 text-[var(--text-primary)]">
        Metamerge Infotech
        <br />
        #15A, 4th Floor, City Vista, Tower A,
        <br />
        Suite No.1396, Fountain Road,
        <br />
        Kharadi, Pune - 411014
      </p>
    ),
  },
  {
    label: "Email",
    icon: Mail,
    content: (
      <a
        href="mailto:info@metamerged.com"
        className="text-sm font-semibold text-[var(--text-primary)] hover:text-blue-500"
      >
        info@metamerged.com
      </a>
    ),
  },
  {
    label: "Phone",
    icon: Phone,
    content: (
      <a
        href="tel:7309653661"
        className="text-sm font-semibold text-[var(--text-primary)] hover:text-blue-500"
      >
        +91 7309653661
      </a>
    ),
  },
];

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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <section className="hero-bg grid-bg px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-500">
            Contact Us
          </p>
          <h1 className="mb-4 text-4xl font-extrabold md:text-6xl">
            Let&apos;s Get <span className="gradient-text">In Touch</span>
          </h1>
          <p className="text-lg text-[var(--text-muted)]">
            We&apos;d love to hear from you. Fill the form or reach us directly.
          </p>
        </div>
      </section>

      <section className="bg-[var(--bg-secondary)] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-12 lg:grid-cols-[380px_1fr]">

            {/* LEFT SIDE */}
            <aside>
              <span className="text-sm font-semibold text-blue-600">
                CONTACT DETAILS
              </span>

              <h2 className="mt-3 text-4xl font-bold">
                Get in touch
              </h2>

              <p className="mt-4 text-[var(--text-muted)] leading-7">
                We'd love to hear from you. Whether you need a demo,
                support or have a new project idea, our team is here
                to help.
              </p>

              <div className="mt-10 space-y-5">

                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-primary)] p-5"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Icon size={22} />
                      </div>

                      <div>
                        <h4 className="font-semibold">
                          {item.label}
                        </h4>

                        <div className="mt-2 text-sm text-[var(--text-muted)]">
                          {item.content}
                        </div>
                      </div>
                    </div>
                  );
                })}

              </div>
            </aside>

            {/* RIGHT SIDE */}
            <section className="rounded-3xl border border-[var(--border-soft)] bg-[var(--bg-primary)] p-8 shadow-xl">

              <span className="text-sm font-semibold text-blue-600">
                SEND MESSAGE
              </span>

              <h2 className="mt-2 text-3xl font-bold">
                Tell us about your project
              </h2>

              <p className="mt-3 text-[var(--text-muted)]">
                Fill in the details below and we'll contact you shortly.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-6"
              >

                <div className="grid gap-6 md:grid-cols-2">

                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    onChange={handleChange}
                    className={inputClassName}
                  />

                  <input
                    type="tel"
                    name="contact"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    className={inputClassName}
                  />

                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={handleChange}
                  className={inputClassName}
                />

                <div className="grid gap-6 md:grid-cols-3">

                  <select
                    name="found"
                    onChange={handleChange}
                    className={inputClassName}
                  >
                    <option>Google</option>
                    <option>Facebook</option>
                    <option>Friend</option>
                  </select>

                  <select
                    name="role"
                    onChange={handleChange}
                    className={inputClassName}
                  >
                    <option>Professional</option>
                    <option>Student</option>
                  </select>

                  <select
                    name="requirement"
                    onChange={handleChange}
                    className={inputClassName}
                  >
                    <option>WhatsApp Marketing</option>
                    <option>Web Development</option>
                  </select>

                </div>

                <textarea
                  rows={6}
                  name="note"
                  placeholder="Tell us about your requirements..."
                  onChange={handleChange}
                  className={inputClassName}
                />

                <button
                  type="submit"
                  className="btn-primary flex h-14 w-full items-center justify-center gap-2 rounded-xl font-semibold"
                >
                  <MessageCircle size={20} />
                  Send via WhatsApp
                </button>

              </form>

            </section>

          </div>
        </div>
      </section>
    </div>
  );
}