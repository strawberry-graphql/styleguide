// @ts-check
import React, { useCallback, useEffect } from "react";
import { useGlobals, useStorybookApi } from "@storybook/manager-api";
import { Icons, IconButton } from "@storybook/components";
import { addons, types } from "@storybook/manager-api";

const TOOL_ID = "ABC";
const ADDON_ID = "ABC";

const Tool = () => {
  const api = useStorybookApi();

  const toggleDarkMode = useCallback(() => {
    console.log("Toggling dark mode");
    const iframe = document.getElementById("storybook-preview-iframe");

    console.log(iframe);

    if (!iframe) {
      return;
    }

    const iframeDocument =
      iframe.contentDocument || iframe.contentWindow?.document;

    const html = iframeDocument?.getElementsByTagName("html")[0];

    console.log(html);

    if (!html) {
      return;
    }

    html.classList.toggle("dark");
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
      <Icons icon="sun" />
    </IconButton>
  );
};

addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: "Toggle Dark Mode",
    match: ({ viewMode }) => viewMode === "story",
    render: () => <Tool />,
  });
});
