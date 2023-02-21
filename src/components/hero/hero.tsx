import { Button } from "../button/button";
import { Codebox } from "../codebox/codebox";
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

      <div className="text-left mx-auto max-w-2xl">
        <Codebox>
          {`
import strawberry

@strawberry.type
class User:
    name: str
    age: int
    `.trim()}
        </Codebox>
      </div>
    </div>
  );
};
