import { DocsContainer as BaseContainer } from "@storybook/addon-docs";
import { themes } from "@storybook/theming";
import React, { useEffect, useState } from "react";

export const ThemedDocsContainer = ({ children, context }) => {
  const [isDark, setIsDark] = useState(
    document.querySelector("html")!.classList.contains("dark")
  );

  const handler = (event: any) => {
    console.log("storage event", event.detail.isDark);

    setIsDark(event.detail.isDark);
  };

  useEffect(() => {
    console.log("registering to event", window);
    window.parent.addEventListener("toggle-theme", handler);

    return function cleanup() {
      window.parent.removeEventListener("toggle-theme", handler);
    };
  }, []);

  return (
    <BaseContainer
      context={context}
      theme={isDark ? themes.dark : themes.light}
    >
      {children}
    </BaseContainer>
  );
};
