// @ts-check
/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

const colors = {
  greyscale: [
    {
      name: "Black",
      hex: "#0D0E12",
      key: "black",
    },
    {
      name: "G-900",
      hex: "#1F1F1F",
      key: "g-900",
    },

    {
      name: "G-700",
      hex: "#515254",
      key: "g-700",
    },
    {
      name: "G-500",
      hex: "#8B8B8D",
      key: "g-500",
    },
    {
      name: "G-400",
      hex: "#C5C5C6",
      key: "g-400",
    },
    {
      name: "G-100",
      hex: "#E2E2E3",
      key: "g-100",
    },
    {
      name: "G-50",
      hex: "#F0F1F1",
      key: "g-50",
    },
    {
      name: "White",
      hex: "#fff",
      key: "white",
    },
  ],
  accent: [
    {
      name: "Strawberry",
      hex: "#F7393D",
      key: "strawberry",
    },
    {
      name: "Yellow - D",
      hex: "#FFE500",
      key: "yellow",
    },
    {
      name: "Yellow - L",
      hex: "#FEAB0A",
      key: "yellow-light",
    },
    {
      name: "Green",
      hex: "#1EB589",
      key: "green",
    },
    {
      name: "Pink",
      hex: "#FF9FA9",
      key: "pink",
    },
    {
      name: "Blue",
      hex: "#0094FF",
      key: "blue",
    },
    {
      name: "Magenta",
      hex: "#EE0A78",
      key: "magenta",
    },
    {
      name: "Orange",
      hex: "#FE620A",
      key: "orange",
    },
  ],
  code: [
    {
      name: "C-Green",
      hex: "#8ED287",
      key: "code-green",
    },
    {
      name: "C-Blue",
      hex: "#AED5FB",
      key: "code-blue",
    },
    {
      name: "C-Purple",
      hex: "#CBABF9",
      key: "code-purple",
    },
    {
      name: "C-Pink",
      hex: "#EA8075",
      key: "code-pink",
    },
    {
      name: "C-Orange",
      hex: "#EAAD75",
      key: "code-orange",
    },
  ],
};

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  colors,
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",

      ...Object.fromEntries(
        Object.values(colors).flatMap((colors) =>
          colors.map((color) => [color.key, color.hex])
        )
      ),
    },
    fontSize: {
      display: "60px",
      "display-s": "44px",
      "heading-1": "48px",
      "heading-1-s": "36px",
      "heading-2": "40px",
      "heading-2-s": "32px",
      "heading-3": "32px",
      "heading-4": "24px",

      code: "16px",
      base: "20px",

      paragraph: "20px",
      "paragraph-s": "18px",
      "paragraph-2": "17px",

      caption: "14px",
      "label-1": "16px",
      "label-2": "13px",
    },

    extend: {
      fontFamily: {
        sans: ["var(--font-satoshi)", ...fontFamily.sans],
        display: ["var(--font-ranade)", ...fontFamily.sans],
        mono: ["var(--font-jetbrains-mono)", ...fontFamily.mono],
      },
    },
  },
  plugins: [],
};
