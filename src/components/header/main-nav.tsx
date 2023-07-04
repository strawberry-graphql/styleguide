"use client";

import clsx from "clsx";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

const Link = ({
  href,
  children,
  active = false,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  showUnderline?: boolean;
}) => {
  return (
    <a
      className={clsx(
        "block py-16 typography-paragraph-2",
        "font-sans font-bold cursor-pointer relative group",
        "text-black transition-colors",
        "dark:text-g-100"
      )}
      href={href}
    >
      {children}

      <span
        className={clsx(
          "absolute rounded-sm bottom-0 left-0 right-0 h-1 md:h-2",
          "bg-gradient-to-r md:from-magenta md:to-orange",
          "group-hover:from-magenta group-hover:to-orange",
          "bg-g-100 transition-opacity",
          "group-hover:h-1 group-hover:md:h-2",
          "md:group-hover/nav:opacity-0 md:delay-1000 md:group-hover/nav:delay-0",
          { "md:hidden": !active },
          { "opacity-100 from-magenta to-orange h-2 group-hover:h-2": active }
        )}
      />
    </a>
  );
};

export const MainNav = ({ activeSection }: { activeSection?: string }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const navRef = useRef<HTMLUListElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

  const setPosition = (element: HTMLElement | null) => {
    const left = element ? element.offsetLeft : 0;
    const width = element ? element.offsetWidth : 0;

    if (!lineRef.current) {
      return;
    }

    if (window.getComputedStyle(lineRef.current).display === "none") {
      return;
    }

    lineRef.current.style.width = `${width}px`;
    lineRef.current.style.left = `${left}px`;
  };

  const animateToActive = useCallback(() => {
    if (!navRef.current) return;

    const activeElement = navRef.current.querySelector(".active");

    setPosition(activeElement as HTMLElement | null);
  }, []);

  const handleHover = useCallback((e: React.MouseEvent<HTMLLIElement>) => {
    setPosition(e.currentTarget);
  }, []);

  const handleMouseLeave = useCallback(() => {
    animateToActive();
  }, [animateToActive]);

  useLayoutEffect(() => {
    animateToActive();
  }, [activeSection, animateToActive]);

  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  return (
    <ul
      className="w-full md:flex md:space-x-56 md:w-auto relative group/nav"
      onMouseLeave={handleMouseLeave}
      ref={navRef}
    >
      <li
        onMouseEnter={handleHover}
        className={clsx({
          active: activeSection == "docs",
        })}
      >
        <Link href="/docs" active={activeSection == "docs"}>
          Docs
        </Link>
      </li>
      <li onMouseEnter={handleHover}>
        <Link href="https://github.com/strawberry-graphql/strawberry">
          GitHub
        </Link>
      </li>
      <li onMouseEnter={handleHover}>
        <Link href="https://discord.gg/2cKUVkx">Discord</Link>
      </li>

      <li
        onMouseEnter={handleHover}
        className={clsx({
          active: activeSection == "blog",
        })}
      >
        <Link href="/blog" active={activeSection == "blog"}>
          Blog
        </Link>
      </li>

      <li onMouseEnter={handleHover}>
        <Link href="https://play.strawberry.rocks">Playground</Link>
      </li>

      <span
        ref={lineRef}
        className={clsx(
          "!m-0 absolute rounded-sm bottom-0 left-0 h-2",
          "bg-gradient-to-r from-magenta to-orange hidden md:block",
          {
            "transition-all ease-in-out duration-500": shouldAnimate,
          }
        )}
      />
    </ul>
  );
};
