import { typography } from "../../../tailwind.config";

import { Display } from "./display";
import { Caption } from "./caption";
import { Heading } from "./heading";

export const Grid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid gap-x-6 grid-cols-2 items-baseline">{children}</div>
  );
};

const Style = ({
  children,
  caption,
}: {
  children: React.ReactNode;
  caption: string;
}) => {
  return (
    <div className="contents sb-unstyled">
      {children}
      <Caption className="uppercase text-g-700 order-2">{caption}</Caption>
    </div>
  );
};

export const DisplayStyle = () => {
  return (
    <Grid>
      <Style caption="Ranade medium 60/72">
        <Display>Display 01</Display>
      </Style>
      <Style caption="Ranade medium 44/52">
        <Display forceSmall>Display 01-S</Display>
      </Style>
    </Grid>
  );
};

export const Headings = () => {
  return (
    <Grid>
      <Style caption="Ranade medium 36/44">
        <Heading level={1}>Heading 01</Heading>
      </Style>
      <Style caption="Ranade medium 28/36">
        <Heading level={2}>Heading 02</Heading>
      </Style>
      <Style caption="Ranade medium 24/32">
        <Heading level={3}>Heading 03</Heading>
      </Style>
      <Style caption="Ranade medium 20/28">
        <Heading level={4}>Heading 04</Heading>
      </Style>
    </Grid>
  );
};
