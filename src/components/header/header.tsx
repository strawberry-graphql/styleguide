"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { DarkModeToggle } from "../dark-mode/dark-mode";
import { MenuIcon } from "../icons/menu";
import { MenuCloseIcon } from "../icons/menu-close";
import { Logo } from "../logo/logo";
import { Label } from "../typography/label";
import { MainNav } from "./main-nav";

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

const VerticalSeparator = () => {
  return <div className="w-1 h-48 bg-g-100 mx-32 dark:bg-g-900" />;
};

export const Header = ({
  version,
  activeSection,
}: {
  version: {
    name: string;
    href: string;
  };
  activeSection?: string;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={clsx(
        "mx-auto max-w-[1600px] px-40 py-16 grid grid-cols-2 items-center md:flex"
      )}
    >
      <div className="flex-1">
        <Link
          href="/"
          className="w-[40px] h-[40px] md:w-[67px] md:h-[80px] block"
        >
          <Logo className="w-full h-full" />
        </Link>
      </div>

      <nav
        className={clsx(
          "mt-40 items-start order-3 flex-col md:flex-row w-full col-span-2 h-[calc(100vh_-_120px)]",
          "md:flex md:items-center md:h-auto md:ml-auto md:mt-0 md:w-auto",
          { hidden: !isMenuOpen, flex: isMenuOpen }
        )}
      >
        <div className="order-2 my-40 md:-order-none md:my-0">
          <Version version={version} />
        </div>

        <div
          className="hidden md:block"
        >
          <VerticalSeparator />
        </div>

        <MainNav activeSection={activeSection} />

        <div className="hidden md:block">
          <VerticalSeparator />
        </div>

        <div className="mt-auto pb-40 order-3 self-center md:-order-none md:mt-0 md:pb-0">
          <DarkModeToggle />
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
