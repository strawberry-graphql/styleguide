import type { Meta, StoryObj } from "@storybook/react";

import { SearchBox } from "./search-box";

const meta: Meta<typeof SearchBox> = {
  title: "Components/Search box",
  component: SearchBox,
};

export default meta;
type Story = StoryObj<typeof SearchBox>;

export const Default: Story = {};
