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

type Feature = {
  title: string;
  description: string;
  icon: Icons;
};

export const FeaturesSection = ({ features }: { features: Feature[] }) => {
  return (
    <section className="text-center">
      <Display>Modern Python, modern features</Display>

      <ul className="mt-80 gap-24 text-left overflow-scroll flex snap-x px-16 md:px-24 lg:columns-4 lg:block max-w-screen-xl mx-auto">
        {features.map((feature) => (
          <FeatureItem
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </ul>
    </section>
  );
};
