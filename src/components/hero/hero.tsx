import { Display } from "../typography/display";

export const Hero = () => {
  return (
    <div className="p-16 text-center">
      <Display>
        The new <span className="text-strawberry">GraphQL library</span> for
        Python 3, inspired by dataclasses.
      </Display>
    </div>
  );
};
