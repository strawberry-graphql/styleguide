import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    icon: "pencil",
    title: "Support for typing",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eget nunc varius pretium ultrices a euismod. Eu ",
  },
};
