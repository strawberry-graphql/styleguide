import type { Meta, StoryObj } from "@storybook/react";

import { Link } from "./link";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    children: "The brown fox jumps over the lazy dog",
    href: "https://google.com",
  },
};
