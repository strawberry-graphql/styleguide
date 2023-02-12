import { Display } from "./display";

const List = ({ children }: { children: React.ReactNode }) => {
  return <div className="sb-unstyled grid gap-x-6 grid-cols-2 items-baseline">{children}</div>;
};
export const DisplayStyle = () => {
  return (
    <List>
      <Display>Display 01</Display>
      <Display forceSmall>Display 01-S</Display>
      <div>Ranade medium 60/72</div>
      <div>Ranade medium 44/52</div>
    </List>
  );
};
