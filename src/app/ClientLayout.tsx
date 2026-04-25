"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openSupport, setOpenSupport] = useState(false);

  return (
    <>
      {/* Navbar */}
      <Navbar setOpenSupport={setOpenSupport} />

      {/* Page Content */}
      {children}

      {/* SUPPORT MODAL */}
      {openSupport && (
        <div className="fixed inset-0 bg-black/50 z-[999] flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-xl p-6 relative">

            {/* Close */}
            <button
              onClick={() => setOpenSupport(false)}
              className="absolute top-3 right-3 text-black"
            >
              ✖
            </button>

            <h2 className="text-lg font-bold mb-4">Support Ticket</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as any;

                const name = form.name.value;
                const phone = form.phone.value;
                const message = form.message.value;

                const text = `Hi, I need support\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`;
                const url = `https://wa.me/917827944832?text=${encodeURIComponent(text)}`;

                window.open(url, "_blank");
              }}
              className="space-y-3"
            >
              <input name="name" placeholder="Name" className="w-full border p-2 rounded" required />
              <input name="phone" placeholder="WhatsApp Number" className="w-full border p-2 rounded" required />
              <textarea name="message" placeholder="Message" className="w-full border p-2 rounded h-24" required />

              <button className="bg-green-500 text-white px-4 py-2 rounded w-full">
                Submit
              </button>
            </form>

          </div>
        </div>
      )}
    </>
  );
}
