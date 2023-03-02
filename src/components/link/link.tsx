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
      className={clsx(
        "underline decoration-strawberry font-bold text-g-900 dark:text-g-400",
        className
      )}
    >
      {children}
    </NextLink>
  );
};
