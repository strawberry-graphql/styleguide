import React from "react";
import { FeaturesSection } from "../features-section/feature-section";

import { Header } from "../header/header";
import { Hero } from "../hero/hero";
import { SponsorsSection } from "../sponsors-section/sponsors-section";

const sponsors = [
  {
    name: "Python Software Foundation",
    href: "https://www.python.org/psf/",
    logo: "https://www.python.org/static/opengraph-icon-200x200.png",
  },
];

export const Page: React.FC = () => {
  return (
    <article>
      <Header
        version={{
          name: "1.0",
          href: "/",
        }}
      />

      <Hero />

      <FeaturesSection />

      <SponsorsSection sponsors={sponsors} />
    </article>
  );
};
