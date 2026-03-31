import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F0E8",
        "primary-gold": "#C9A84C",
        "deep-gold": "#8B6914",
        "dark-text": "#3D2B1F",
        "card-dark": "#2C1A0E",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "gold-shimmer": {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "radial-pulse": {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.05)" },
        },
      },
      animation: {
        "gold-shimmer": "gold-shimmer 3s linear infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "radial-pulse": "radial-pulse 4s ease-in-out infinite",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C9A84C 0%, #F5D788 50%, #8B6914 100%)",
        "gold-shimmer-gradient": "linear-gradient(90deg, #8B6914 0%, #C9A84C 25%, #F5D788 50%, #C9A84C 75%, #8B6914 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
