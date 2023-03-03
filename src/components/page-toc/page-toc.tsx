"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

export const PageNavItem = ({
  id,
  title,
  active,
}: {
  id: string;
  title: string;
  active?: boolean;
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
  const selector = items.map((item) => `#${item.id}`).join(", ");
  const [itemVisibility, setItemVisibility] = useState(
    items.reduce((acc, item) => {
      acc[item.id] = false;
      return acc;
    }, {} as Record<string, boolean>)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setItemVisibility((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    document.querySelectorAll(selector).forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });
  }, [selector]);

  const firstVisibleItem = items.find((item) => itemVisibility[item.id]);

  return (
    <nav className="hidden md:block">
      <ul className="sticky top-24 border-l border-g-100 dark:border-g-900">
        {items.map((item) => (
          <PageNavItem
            key={item.id}
            id={item.id}
            title={item.title}
            active={firstVisibleItem?.id === item.id}
          />
        ))}
      </ul>
    </nav>
  );
};
