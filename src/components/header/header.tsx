import clsx from "clsx";
import { MoonIcon } from "../icons/moon";
import { Logo } from "../logo/logo";
import { Caption } from "../typography/caption";

const Version = ({ version }: { version: { name: string; href: string } }) => {
  return (
    <a
      href={version.href}
      className="uppercase bg-g-50 px-16 py-8 rounded-3xl text-g-700"
    >
      <Caption>{version.name}</Caption>
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
  // TODO: use Andy's css component system
  return (
    <a
      className="block py-16 text-paragraph-2 md:text-paragraph-2 font-sans font-bold cursor-pointer relative group"
      href={href}
    >
      {children}

      <span
        className={clsx(
          "absolute rounded-sm bottom-0 left-0 right-0 h-3",
          "bg-gradient-to-r from-magenta to-orange opacity-0 group-hover:opacity-100",
          "transition-opacity",
          { "opacity-100": active }
        )}
      />
    </a>
  );
};

const VerticalSeparator = () => {
  return <div className="w-1 h-48 bg-g-100 mx-32" />;
};

export const Header = ({
  version,
}: {
  version: {
    name: string;
    href: string;
  };
}) => {
  return (
    <header className="px-40 py-16 flex items-center">
      <Logo />

      <nav className="ml-auto flex items-center">
        <Version version={version} />

        <VerticalSeparator />

        <ul className="flex space-x-56">
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

        <VerticalSeparator />

        <MoonIcon />
      </nav>
    </header>
  );
};
