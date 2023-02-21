import React from "react";

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

      <div className="text-center max-w-screen-lg mx-auto">
        <Display>Modern python, with modern features</Display>
      </div>
    </article>
  );
};
