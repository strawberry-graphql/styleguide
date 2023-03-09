import type { Meta, StoryObj } from "@storybook/react";

import { Table, TableCell, TableHeader, TableRow } from "./table";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    children: (
      <tbody>
        <TableRow>
          <TableHeader>Header 1</TableHeader>
          <TableHeader>Header 2</TableHeader>
          <TableHeader>Header 3</TableHeader>
        </TableRow>
        <TableRow>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
          <TableCell>Cell 3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
          <TableCell>Cell 3</TableCell>
        </TableRow>
      </tbody>
    ),
  },
};
