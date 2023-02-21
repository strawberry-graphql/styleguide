import { PencilIcon } from "../icons/pencil";
import { Paragraph } from "../typography/paragraph";

export type Icons = "pencil";

const CardIcon = ({ icon }: { icon: Icons }) => {
  let Icon = null;

  switch (icon) {
    case "pencil":
      Icon = PencilIcon;
      break;
  }

  return (
    <div className="bg-strawberry rounded-[4px] w-40 h-40 justify-center items-center flex">
      <Icon />
    </div>
  );
};

export const Card = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: Icons;
}) => {
  return (
    <div className="p-24 border border-g-100 rounded-[16px] bg-transparency-light dark:bg-transparency-dark dark:border-transparency-light">
      <div className="mb-24">
        <CardIcon icon={icon} />
      </div>

      <Paragraph bold className="mb-8">{title}</Paragraph>
      <Paragraph variant="small">{description}</Paragraph>
    </div>
  );
};
