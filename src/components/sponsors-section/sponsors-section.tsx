import Link from "next/link";
import { Button } from "../button/button";
import { Heading } from "../typography/heading";

type Sponsor = {
  name: string;
  href: string;
  logo: string;
};

const Sponsor = ({ name, href, logo }: Sponsor) => {
  return (
    <li className="snap-center break-inside-avoid mb-24 lg:w-auto flex-shrink-0 self-stretch flex items-stretch">
      <Link href={href}>
        <img src={logo} alt={name} />
      </Link>
    </li>
  );
};

export const SponsorsSection = ({ sponsors }: { sponsors: Sponsor[] }) => {
  return (
    <section className="text-center mt-80">
      <div className="px-24">
        <Heading>Discover the sponsors that make Strawberry possible.</Heading>

        <Heading level={4} className="mt-24 mb-48 text-g-700 dark:text-g-500">
          More that 20000 downloads last week
        </Heading>

        <Button as="a" href="/sponsor-us">
          Become a sponsor
        </Button>
      </div>

      <ul className="mt-80 gap-24 text-left overflow-scroll flex justify-center snap-x px-24 max-w-screen-xl mx-auto">
        {sponsors.map((sponsor) => (
          <Sponsor key={sponsor.name} {...sponsor} />
        ))}
      </ul>
    </section>
  );
};
