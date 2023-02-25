import Link from "next/link";
import { ArrowUpIcon } from "../icons/arrow-up";

type Section = {
  name: string;
  links: {
    href: string;
    name: string;
  }[];
};

export const SidebarNav = ({ sections }: { sections: Section[] }) => {
  return (
    <nav>
      {sections.map((section) => {
        return (
          <details
            key={section.name}
            className="mb-16 pb-16 border-b border-g-100 group"
          >
            <summary className="text-g-900 typography-label list-none relative flex justify-between items-center">
              {section.name}

              <ArrowUpIcon className="text-g-500 group-open:rotate-180" />
            </summary>

            <ul>
              {section.links.map((link) => (
                <li
                  key={link.href}
                  className="mt-16 typography-paragraph-2 font-bold text-g-500 hover:text-g-900"
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
