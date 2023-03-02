import clsx from "clsx";
import Link from "next/link";
import { ArrowUpIcon } from "../icons/arrow-up";

export type Section = {
  name: string;
  links: {
    href: string;
    name: string;
    active?: boolean;
  }[];
};

export const SidebarNav = ({ sections }: { sections: Section[] }) => {
  return (
    <nav>
      {sections.map((section) => {
        const hasActiveLink = section.links.some((link) => link.active);

        return (
          <details
            key={section.name}
            className="mb-16 pb-16 border-b border-g-100 dark:border-g-900 group"
            open={hasActiveLink}
          >
            <summary className="text-g-900 dark:text-g-50 typography-label list-none relative flex justify-between items-center cursor-pointer">
              {section.name}

              <ArrowUpIcon className="text-g-500 dark:text-g-700 group-open:rotate-180" />
            </summary>

            <ul>
              {section.links.map((link) => (
                <li
                  key={link.href}
                  className={clsx(
                    "mt-16 typography-paragraph-2 font-bold text-g-500 hover:text-strawberry",
                    {
                      "text-strawberry": link.active,
                    }
                  )}
                >
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </details>
        );
      })}
    </nav>
  );
};
