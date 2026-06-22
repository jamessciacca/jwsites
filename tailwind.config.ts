import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0b",
        muted: "#666b73",
        line: "#e7e7e9",
        surface: "#f6f7f8",
        accent: "#5b5cf0",
        "accent-dark": "#4445d6",
      },
      boxShadow: {
        soft: "0 20px 55px rgba(10, 10, 11, 0.08)",
        card: "0 8px 30px rgba(10, 10, 11, 0.06)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at 50% 0%, rgba(91,92,240,.16), transparent 45%)",
      },
    },
  },
  plugins: [],
};

export default config;
