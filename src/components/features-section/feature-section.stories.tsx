import type { Meta, StoryObj } from "@storybook/react";

import { FeaturesSection } from "./feature-section";

const meta: Meta<typeof FeaturesSection> = {
  title: "Components/FeaturesSection",
  component: FeaturesSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof FeaturesSection>;

export const Default: Story = {};
