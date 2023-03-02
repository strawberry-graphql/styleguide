import clsx from "clsx";

export const PageNavItem = ({
  active,
  id,
  title,
}: {
  active?: boolean;
  id: string;
  title: string;
}) => {
  return (
    <li
      className={clsx(
        "typography-paragraph-2 font-bold text-g-500 px-24 my-16",
        {
          "text-strawberry relative": active,
        }
      )}
    >
      {active && (
        <span className="-left-2 rounded-[3px] top-0 bottom-0 w-3 bg-gradient-to-b from-magenta to-orange block absolute" />
      )}
      <a href={`#${id}`} className="hover:text-strawberry">
        {title}
      </a>
    </li>
  );
};

export const PageTOC = ({
  items,
}: {
  items: {
    id: string;
    title: string;
  }[];
}) => {
  return (
    <nav className="hidden md:block">
      <ul className="sticky top-24 border-l border-g-100 dark:border-g-900">
        {items.map((item) => (
          <PageNavItem key={item.id} id={item.id} title={item.title} />
        ))}
      </ul>
    </nav>
  );
};
