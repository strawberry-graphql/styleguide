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
      <Icons icon="ruler" />
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
