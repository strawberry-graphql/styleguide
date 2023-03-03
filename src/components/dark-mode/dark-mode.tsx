"use client";

import Script from "next/script";
import { useState } from "react";
import { MoonIcon } from "../icons/moon";
import { SunIcon } from "../icons/sun";

const scriptCode = `
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
`;

export const DarkModeScript = () => {
  return <Script id="dark-mode">{scriptCode}</Script>;
};

export const useDarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const toggle = () => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }

    // for storybook :)

    if (window.parent) {
      const event = new CustomEvent("toggle-theme", {
        detail: {
          isDark: !isDark,
        },
      });

      window.parent.dispatchEvent(event);
    }

    setIsDark(!isDark);
  };

  return { isDark, toggle };
};

export const DarkModeToggle = () => {
  const { toggle } = useDarkModeToggle();

  return (
    <>
      <MoonIcon className="dark:hidden" onClick={toggle} />
      <SunIcon className="hidden dark:block" onClick={toggle} />
    </>
  );
};
