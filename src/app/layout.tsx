import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Script from "next/script";
import ClientLayout from "./ClientLayout";

// ✅ ADD THIS
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Metamerge – WhatsApp Marketing & Digital Solutions",
  description:
    "Metamerge offers WhatsApp Business API, Website Development, Digital Marketing, and CRM solutions for businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="bg-[#0a0f1e] text-white font-body antialiased">
        
        {/* ✅ CLIENT LAYOUT (Navbar + Support Modal) */}
        <ClientLayout>
          <main>{children}</main>
        </ClientLayout>

        {/* ✅ Footer */}
        <Footer />

        {/* ✅ WHATSAPP FLOAT BUTTON (GLOBAL) */}
        <WhatsAppButton />

        {/* 🔥 Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DQXZ9145GD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DQXZ9145GD');
          `}
        </Script>
      </body>
    </html>
  );
}
