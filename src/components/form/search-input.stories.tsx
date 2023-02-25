import type { Meta, StoryObj } from "@storybook/react";

import { SearchInput } from "./search-input";

const meta: Meta<typeof SearchInput> = {
  title: "Form/Search Input",
  component: SearchInput,

  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {
    placeholder: "Placeholder",
  },
};
