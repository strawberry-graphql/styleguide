import clsx from "clsx";
import { Caption } from "../typography/caption";
import { Paragraph } from "../typography/paragraph";
import { Heading } from "../typography/heading";
import { Tag } from "../tag/tag";

export const ExtensionCard = ({
  name,
  description,
  tags,
}: {
  name: string;
  description: string;
  tags: string[];
}) => {
  return (
    <div
      className={clsx(
        "bg-white bg-opacity-75 rounded-[16px] p-16 border border-g-100 flex",
        "dark:border-transparency-light dark:bg-blog-card-dark"
      )}
    >
      <div className="flex flex-col justify-center">
        <Heading className="text-g-700 dark:text-g-500" level={4}>
          {name}
        </Heading>
        <Paragraph variant="small">{description}</Paragraph>

        <ul className="mt-4 space-x-8">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </ul>
      </div>

      <a href="" className="ml-auto" target="_blank" rel="noreferrer"></a>
    </div>
  );
};
