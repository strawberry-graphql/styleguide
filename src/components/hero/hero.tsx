import { Button } from "../button/button";
import { Display } from "../typography/display";

export const Hero = () => {
  return (
    <div className="p-16 text-center space-y-48">
      <Display>
        The new <span className="text-strawberry">GraphQL library</span> for
        Python 3, inspired by dataclasses.
      </Display>

      <Button as="a" href="/docs">
        Get Started
      </Button>
    </div>
  );
};
