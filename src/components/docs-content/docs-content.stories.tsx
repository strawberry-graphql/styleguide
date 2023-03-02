import type { Meta, StoryObj } from "@storybook/react";

import { DocsContent } from "./docs-content";

const meta: Meta<typeof DocsContent> = {
  title: "Components/Docs content",
  component: DocsContent,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof DocsContent>;

export const Default: Story = {
  args: {
    children: (
      <>
        <div>Left</div>
        <div>Right</div>
      </>
    ),
  },
};
