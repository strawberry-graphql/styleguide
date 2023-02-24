import clsx from "clsx";
import NextLink from "next/link";

export const Link = ({
  children,
  className,
  href,
  rel,
  target,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
  rel?: string;
  target?: string;
}) => {
  return (
    <NextLink
      href={href}
      rel={rel}
      target={target}
      className={clsx("underline text-strawberry hover:opacity-70", className)}
    >
      {children}
    </NextLink>
  );
};
