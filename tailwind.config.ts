import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.50)",
        DEFAULT: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        lg: "4px 4px 6px rgba(0, 0, 0, 0.6)",
      },
      fontFamily: {
        cinzel: ["CinzelDecorative", "sans-serif"],
      },
      keyframes: {
        fadeInAndOut: {
          "0%": { opacity: "0" },
          "25%, 75%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        // fadeAndBounce: {
        //   '0%, 100%': { opacity: '0'},
        //   '50%': { opacity: '1'},
        // },
      },
      animation: {
        fadeInAndOut5: "fadeInAndOut 5s ease-in-out forwards",
        fadeInAndOut3: "fadeInAndOut 3s ease-in-out forwards",
      },
      colors: {
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: "#424769",
        secondary: "#7077A1",
        text: "rgb(222, 221, 221)",
        background: "#2D3250",
        accent: "#f6b17a",
        dark: "#181b2d",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar"),
    require("tailwindcss-textshadow"),
  ],
};
export default config;
