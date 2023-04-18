import type { Meta, StoryObj } from "@storybook/react";
import { FeedbackForm } from "./feedback-form";

const meta: Meta<typeof FeedbackForm> = {
  title: "Components/Feedback Form",
  component: FeedbackForm,
  parameters: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FeedbackForm>;

export const Default: Story = {
  args: {},
};
