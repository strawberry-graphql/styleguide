import "../styles/globals.css";

import localFont from "@next/font/local";
import { JetBrains_Mono } from "@next/font/google";
import clsx from "clsx";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className={clsx(
          ranade.variable,
          satoshi.variable,
          jetbrainsMono.variable,
          "font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
