import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import ClientLayout from "@/components/layout/ClientLayout";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "Metamerge – Website Development, App Development & Software Solutions",

  description:
    "Metamerge provides professional website development, mobile app development, custom software solutions, CRM systems, and business automation services for startups and enterprises.",

  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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

    <body className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-body antialiased">

  <ClientLayout>
    <main>{children}</main>
  </ClientLayout>

  {/* <Footer /> */}

  <WhatsAppButton />

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
