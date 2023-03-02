import type { Meta, StoryObj } from "@storybook/react";

import { PageTOC } from "./page-toc";

const meta: Meta<typeof PageTOC> = {
  title: "Components/Page TOC",
  component: PageTOC,
};

export default meta;
type Story = StoryObj<typeof PageTOC>;

export const Default: Story = {
  args: {
    items: [
      {
        id: "abc",
        title: "ABC",
      },
      {
        id: "def",
        title: "Example 123",
      },
      {
        id: "ghi",
        title: "Example 456",
      },
    ],
  },
};
