"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {

  const [openSupport, setOpenSupport] = useState(false);

  return (
    <>
      <Navbar setOpenSupport={setOpenSupport} />

      <main>{children}</main>

      <Footer />

      {/* 🔥 SUPPORT MODAL (YAHI FINAL HAI) */}
      {openSupport && (
        <div className="fixed inset-0 bg-black/60 z-[999] flex items-center justify-center p-4 overflow-auto">

          <div className="bg-white w-full max-w-4xl rounded-xl p-6 relative text-black">

            <button
              onClick={() => setOpenSupport(false)}
              className="absolute top-4 right-4 text-xl"
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center">Support Ticket</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;

                const text = `Support Request

Subject: ${(form.elements.namedItem("subject") as HTMLInputElement).value}
Name: ${(form.elements.namedItem("name") as HTMLInputElement).value}
Email: ${(form.elements.namedItem("email") as HTMLInputElement).value}
Department: ${(form.elements.namedItem("department") as HTMLSelectElement).value}
Priority: ${(form.elements.namedItem("priority") as HTMLSelectElement).value}
WhatsApp: ${(form.elements.namedItem("phone") as HTMLInputElement).value}
Software: ${(form.elements.namedItem("software") as HTMLInputElement).value}

Message:
${(form.elements.namedItem("message") as HTMLTextAreaElement).value}`;

                const url = `https://wa.me/917827944832?text=${encodeURIComponent(text)}`;
                window.open(url, "_blank");
              }}
              className="space-y-4"
            >

              <input name="subject" placeholder="Subject" className="w-full border p-3 rounded" />

              <div className="grid md:grid-cols-2 gap-4">
                <input name="name" placeholder="Your Name" className="border p-3 rounded" />
                <input name="email" placeholder="Email Address" className="border p-3 rounded" />
              </div>

              <select name="department" className="border p-3 rounded w-full">
                <option>Support Team</option>
                <option>Sales</option>
                <option>Technical</option>
              </select>

              <select name="priority" className="border p-3 rounded w-full">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>

              <div className="grid md:grid-cols-2 gap-4">
                <input name="phone" placeholder="WhatsApp Number" className="border p-3 rounded" />
                <input name="software" placeholder="Software Name" className="border p-3 rounded" />
              </div>

              <textarea name="message" placeholder="Message" className="border p-3 rounded h-32 w-full"></textarea>

              <div className="text-center">
                <button className="bg-green-500 text-white px-6 py-2 rounded">
                  Submit
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </>
  );
}
