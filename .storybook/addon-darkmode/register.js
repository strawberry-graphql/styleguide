// @ts-check
import React, { useCallback, useEffect } from "react";
import {
  useGlobals,
  useStorybookApi,
  addons,
  types,
} from "@storybook/manager-api";
import { Icons, IconButton } from "@storybook/components";

import { themes } from "@storybook/theming";

const TOOL_ID = "ABC";
const ADDON_ID = "ABC";

const Tool = () => {
  const api = useStorybookApi();

  const toggleDarkMode = useCallback(() => {
    const iframe = document.getElementById("storybook-preview-iframe");

    if (!iframe) {
      return;
    }

    const iframeDocument =
      iframe.contentDocument || iframe.contentWindow?.document;

    const html = iframeDocument?.getElementsByTagName("html")[0];

    if (!html) {
      return;
    }

    const isDark = !html.classList.contains("dark");

    if (isDark) {
      addons.setConfig({
        theme: themes.dark,
        docs: {
          theme: themes.dark,
        },
      });
    } else {
      addons.setConfig({
        theme: themes.light,
        docs: {
          theme: themes.light,
        },
      });
    }

    html.classList.toggle("dark");

    // trigger event to update storybook
    const event = new CustomEvent("toggle-theme", {
      detail: {
        isDark,
      },
    });

    window.dispatchEvent(event);
  });

  // useEffect(() => {
  //   api.setAddonShortcut(ADDON_ID, {
  //     label: "Toggle Dark Mode [D]",
  //     defaultShortcut: ["D"],
  //     actionName: "measure",
  //     showInMenu: false,
  //     action: toggleDarkMode,
  //   });
  // }, [toggleDarkMode, api]);

  return (
    <IconButton
      key={TOOL_ID}
      active={true}
      title="Toggle Dark Mode"
      onClick={toggleDarkMode}
    >
      <Icons icon="moon" />
    </IconButton>
  );
};

addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: "Toggle Dark Mode",
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: () => <Tool />,
  });
});
