import type { Meta, StoryObj } from "@storybook/react";

import { SidebarNav } from "./sidebar-nav";

const meta: Meta<typeof SidebarNav> = {
  title: "Components/Sidebar Navigation",
  component: SidebarNav,
};

export default meta;
type Story = StoryObj<typeof SidebarNav>;

const sections = [
  {
    name: "Docs",
    links: [
      {
        href: "/docs",
        name: "Getting started",
      },
    ],
  },
  {
    name: "General",
    links: [
      {
        href: "/abc",
        name: "Schema basics",
      },
      {
        href: "/abc",
        name: "Schema basics",
      },
      {
        href: "/abc",
        name: "Schema basics",
      },
      {
        href: "/abc",
        name: "Schema basics",
      },
    ],
  },
];

export const Default: Story = {
  args: { sections },
};
