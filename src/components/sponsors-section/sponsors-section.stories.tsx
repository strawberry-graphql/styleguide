import type { Meta, StoryObj } from "@storybook/react";

import { SponsorsSection } from "./sponsors-section";

const meta: Meta<typeof SponsorsSection> = {
  title: "Components/SponsorsSection",
  component: SponsorsSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof SponsorsSection>;

export const Default: Story = {
  args: {
    sponsors: [
      {
        name: "Python Software Foundation",
        href: "https://www.python.org/psf/",
        logo: "https://www.python.org/static/opengraph-icon-200x200.png",
      },
      {
        name: "Python Software Foundation",
        href: "https://www.python.org/psf/",
        logo: "https://www.python.org/static/opengraph-icon-200x200.png",
      },
      {
        name: "Python Software Foundation",
        href: "https://www.python.org/psf/",
        logo: "https://www.python.org/static/opengraph-icon-200x200.png",
      },
    ],
  },
};
