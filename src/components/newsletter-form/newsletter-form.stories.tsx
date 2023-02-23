import type { Meta, StoryObj } from "@storybook/react";

import { NewsletterForm } from "./newsletter-form";

const meta: Meta<typeof NewsletterForm> = {
  title: "Components/Newsletter Form",
  component: NewsletterForm,
};

export default meta;
type Story = StoryObj<typeof NewsletterForm>;

export const Default: Story = {};
