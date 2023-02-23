import { Card, Icons } from "../card/card";
import { Display } from "../typography/display";

const FeatureItem = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: Icons;
}) => {
  return (
    <li className="snap-center break-inside-avoid mb-24 w-[400px] lg:w-auto flex-shrink-0 self-stretch flex items-stretch">
      <Card title={title} description={description} icon={icon} />
    </li>
  );
};

export const FeaturesSection = () => {
  return (
    <section className="text-center">
      <Display>Modern Python, modern features</Display>

      <ul className="mt-80 gap-24 text-left overflow-scroll flex snap-x px-24 lg:columns-4 lg:block max-w-screen-xl mx-auto">
        <FeatureItem
          title="Type hints"
          description="Type hints are a great way to document your code and make it easier to understand. Theyter autocompletion and error detection."
          icon="pencil"
        />

        <FeatureItem
          title="Type hints"
          description="Type hints are a great way to document your code."
          icon="pencil"
        />

        <FeatureItem
          title="Type hints"
          description="Type hints are a great way to document your code and make it easier to understand. They also help your IDE to provide better autocompletion and error detection."
          icon="pencil"
        />

        <FeatureItem
          title="Type hints"
          description="Type hints are a great way to document your code and mako provide better autocompletion and error detection."
          icon="pencil"
        />

        <FeatureItem
          title="Type hints"
          description="Type hints are a great way to document your code and make it easier to understand. They also help your IDE to provide better autocompletion and error detection."
          icon="pencil"
        />

        <FeatureItem
          title="Type hints"
          description="Type hints are a great way to document your code and make it easier to understand. They autocompletion and error detection."
          icon="pencil"
        />

        <FeatureItem
          title="Type hints"
          description="Type hints are a great way to document your code and make it easier to understand. They also help your IDE to provide better autocompletion and error detection."
          icon="pencil"
        />
      </ul>
    </section>
  );
};
