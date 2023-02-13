import "../src/styles/globals.css";

import localFont from "@next/font/local";
import { JetBrains_Mono } from "@next/font/google";

import { Separator } from "../src/components/separator/separator";

const ranade = localFont({
  src: [
    {
      path: "../fonts/Ranade-Variable.ttf",
      style: "normal",
    },
    {
      path: "../fonts/Ranade-VariableItalic.ttf",
      style: "italic",
    },
  ],
  variable: "--font-ranade",
  // style: ["normal", "italic"],
});

const satoshi = localFont({
  src: [
    {
      path: "../fonts/Satoshi-Variable.ttf",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-VariableItalic.ttf",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

document.body.classList.add(ranade.variable);
document.body.classList.add(satoshi.variable);
document.body.classList.add(jetbrainsMono.variable);
document.body.classList.add("font-sans");

export const parameters = {
  backgrounds: {
    default: "light",
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  docs: {
    components: {
      hr: Separator,
    },
  },
};
