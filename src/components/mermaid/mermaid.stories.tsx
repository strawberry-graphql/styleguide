import type { Meta, StoryObj } from "@storybook/react";

import { Mermaid } from "./mermaid";

const meta: Meta<typeof Mermaid> = {
  title: "Components/Mermaid",
  component: Mermaid,
};

export default meta;
type Story = StoryObj<typeof Mermaid>;

export const Unordered: Story = {
  args: {
    code: `
    sequenceDiagram
        Alice ->> Bob: Hello Bob, how are you?
        Bob-->>John: How about you John?
        Bob--x Alice: I am good thanks!
        Bob-x John: I am good thanks!
        Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.

        Bob-->Alice: Checking with John...
        Alice->John: Yes... John, how are you?
    `,
  },
};
