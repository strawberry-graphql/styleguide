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
        "relative font-bold text-strawberry group hover:text-white transition-colors",
        className
      )}
    >
      <span className="relative z-10">{children}</span>

      <span className="absolute -left-1 -right-1 -bottom-3 h-2 bg-gradient-to-r from-magenta to-orange group-hover:h-[calc(100%_+_3px)] transition-all" />
    </NextLink>
  );
};
