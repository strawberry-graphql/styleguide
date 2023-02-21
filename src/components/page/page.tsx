import React from "react";
import { FeaturesSection } from "../features-section/feature-section";

import { Header } from "../header/header";
import { Hero } from "../hero/hero";
import { Display } from "../typography/display";

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
    </article>
  );
};
