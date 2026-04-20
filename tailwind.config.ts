import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ✅ WhatsApp (keep for buttons)
        brand: {
          green: "#25D366",
          dark: "#075E54",
          light: "#DCF8C6",
          accent: "#128C7E",
        },

        // ✅ MAIN SaaS THEME
        primary: "#7c3aed",   // purple
        secondary: "#6366f1", // indigo

        bg: "#ffffff",
        section: "#f8fafc",

        text: {
          dark: "#0f172a",
          light: "#64748b",
        },
      },

      fontFamily: {
        heading: ["'Plus Jakarta Sans'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
      },

      backgroundImage: {
        // ✅ Main gradient
        "primary-gradient":
          "linear-gradient(to right, #7c3aed, #6366f1)",

        // ✅ Light section gradient
        "soft-gradient":
          "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)",

        // ✅ WhatsApp gradient
        "green-gradient":
          "linear-gradient(135deg, #25D366, #128C7E)",
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
