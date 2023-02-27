import React from "react";
import { FeaturesSection } from "../features-section/feature-section";
import { Footer } from "../footer/footer";
import { GlowEffect } from "../glow-effect/glow-effect";

import { Header } from "../header/header";
import { Hero } from "../hero/hero";
import { Spacer } from "../spacer/spacer";
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
    <>
      <GlowEffect />
      <Header
        version={{
          name: "v1.0",
          href: "/",
        }}
      />

      <Spacer size={80} />

      <Hero />

      <Spacer size={128} />

      <FeaturesSection />

      <Spacer size={128} />

      <SponsorsSection sponsors={sponsors} />

      <Footer />
    </>
  );
};
