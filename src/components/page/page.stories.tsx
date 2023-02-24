import type { Meta, StoryObj } from "@storybook/react";

import { Page } from "./page";

const meta: Meta<typeof Page> = {
  title: "Pages/Home",
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Default: Story = {};
