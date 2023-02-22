import type { Meta, StoryObj } from "@storybook/react";

import { BlogSection } from "./blog-section";

const meta: Meta<typeof BlogSection> = {
  title: "Sections/Blog",
  component: BlogSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof BlogSection>;

export const Default: Story = {};
