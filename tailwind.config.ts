import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '["dark"]'],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#fbbf24",
          ".toaster-con": {
            "background-color": "white",
            color: "black",
          },
        },
        dark: {
          primary: "#fbbf24",
          ".toaster-con": {
            "background-color": "black",
            color: "white",
          },
        },
      },
    ],
  },
} as any;

export default config;
