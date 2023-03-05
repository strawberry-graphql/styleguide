import type { Meta, StoryObj } from "@storybook/react";
import { Display } from "../typography/display";

import { Box } from "./box";

const meta: Meta<typeof Box> = {
  title: "Components/Box",
  component: Box,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    children: <Display>Some text here</Display>,
  },
};
