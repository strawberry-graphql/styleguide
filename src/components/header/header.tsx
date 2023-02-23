"use client";

import clsx from "clsx";
import { useState } from "react";
import { MenuIcon } from "../icons/menu";
import { MenuCloseIcon } from "../icons/menu-close";
import { MoonIcon } from "../icons/moon";
import { SunIcon } from "../icons/sun";
import { Logo } from "../logo/logo";
import { Label } from "../typography/label";

const Version = ({ version }: { version: { name: string; href: string } }) => {
  return (
    <a
      href={version.href}
      className="uppercase bg-g-50 px-16 py-8 rounded-3xl text-g-700 dark:bg-g-900 dark:text-g-400"
    >
      <Label variant="small">{version.name}</Label>
    </a>
  );
};

const Link = ({
  href,
  children,
  active = false,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) => {
  return (
    <a
      className={clsx(
        "block py-16 typography-paragraph-2",
        "font-sans font-bold cursor-pointer relative group",
        "hover:text-black transition-colors",
        "dark:text-g-100",
        { "text-black": active, "text-g-500": !active }
      )}
      href={href}
    >
      {children}

      <span
        className={clsx(
          "absolute rounded-sm bottom-0 left-0 right-0 h-1 md:h-2",
          "bg-gradient-to-r md:from-magenta md:to-orange",
          "group-hover:from-magenta group-hover:to-orange",
          "bg-g-100",
          "md:opacity-0 group-hover:opacity-100 group-hover:h-1 group-hover:md:h-2",
          "transition-opacity",
          { "!opacity-100 from-magenta to-orange h-2": active }
        )}
      />
    </a>
  );
};

const VerticalSeparator = () => {
  return <div className="w-1 h-48 bg-g-100 mx-32 dark:bg-g-900" />;
};

export const Header = ({
  version,
}: {
  version: {
    name: string;
    href: string;
  };
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    const html = document.querySelector("html");
    html?.classList.toggle("dark");
  };

  return (
    <header className="mx-auto max-w-[1600px] px-40 py-16 grid grid-cols-2 items-center site-header md:flex">
      <div className="flex-1">
        <Logo className="w-[40px] h-[40px] md:w-[67px] md:h-[80px]" />
      </div>

      <nav
        className={clsx(
          "mt-40 items-start order-3 flex-col md:flex-row w-full col-span-2 h-[calc(100vh_-_120px)]",
          "md:flex md:items-center md:h-auto md:ml-auto md:mt-0 md:w-auto",
          { hidden: !isMenuOpen, flex: isMenuOpen }
        )}
      >
        <div className="order-2 my-40 md:-order-none md:my-0 md:hidden lg:block">
          <Version version={version} />
        </div>

        <div className="hidden lg:block">
          <VerticalSeparator />
        </div>

        <ul className="w-full md:flex md:space-x-56 md:w-auto">
          <li>
            <Link href="/docs" active>
              Docs
            </Link>
          </li>
          <li>
            <Link href="https://github.com/strawberry-graphql/strawberry">
              GitHub
            </Link>
          </li>
          <li>
            <Link href="https://discord.gg/2cKUVkx">Discord</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>

          <li>
            <Link href="/play">Playground</Link>
          </li>
        </ul>

        <div className="hidden md:block">
          <VerticalSeparator />
        </div>

        <div className="mt-auto pb-40 order-3 self-center md:-order-none md:mt-0 md:pb-0">
          <MoonIcon className="dark:hidden" onClick={toggleDarkMode} />
          <SunIcon className="hidden dark:block" onClick={toggleDarkMode} />
        </div>
      </nav>

      <label
        htmlFor="toggle-nav"
        className="cursor-pointer place-self-end md:hidden"
        onClick={toggleMenu}
      >
        {!isMenuOpen && (
          <MenuIcon className="text-black menu-icon  dark:text-g-100 " />
        )}
        {isMenuOpen && (
          <MenuCloseIcon className="text-g-700 dark:text-g-100 menu-icon" />
        )}
      </label>
    </header>
  );
};
