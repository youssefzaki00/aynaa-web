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
        Red: "#E0462D", // Use as: text-Red, bg-Red, border-Red, etc.
        Red2: "#A73826", // Use as: text-Red2, bg-Red2, border-Red2, etc.
        dark: "#1C1C1C", // Use as: text-dark, bg-dark, border-dark, etc.
        Text: "#353535", // Use as: text-Text, bg-Text, border-Text, etc.
        grey: "#7B7B7B", // Use as: text-grey, bg-grey, border-grey, etc.
        "light-cyan": "#EBF7F6", // Use as: text-light-cyan, bg-light-cyan, etc.
        light: "#FFFFFF", // Use as: text-light, bg-light, border-light, etc.
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "red-red2-gradient":
          "linear-gradient(180deg, #E0462D 0%, #A73826 100%)",
        "home-hero": "url('/home/1.webp')",
        "home-hero2": "url('/home/2.webp')",
        "home-hero3": "url('/home/3.webp')",
        "light-gradient": "linear-gradient(to right, #FFFFFF, #DADADA)",
      },
      fontSize: {
        H1: ["50px", { fontWeight: "800" }],

        H2: ["45px", { fontWeight: "bold" }],

        H3: ["40px", { fontWeight: "regular" }],

        H4: ["35px", { fontWeight: "bold" }],

        H5: ["30px", { fontWeight: "bold" }],

        H6: ["25px", { fontWeight: "bold" }],

        paragraph: ["25px", { fontWeight: "regular" }],

        link: ["25px", { fontWeight: "regular" }],

        nav_link: ["20px", { fontWeight: "bold" }],

        "very-small": ["16px", { fontWeight: "regular" }],
      },
    },
  },
  plugins: [],
};
export default config;
