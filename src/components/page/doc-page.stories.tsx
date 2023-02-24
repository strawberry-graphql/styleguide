import type { Meta, StoryObj } from "@storybook/react";

import { DocumentationPage } from "./doc-page";

const meta: Meta<typeof DocumentationPage> = {
  title: "Pages/Documentation",
  component: DocumentationPage,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof DocumentationPage>;

export const Default: Story = {};
