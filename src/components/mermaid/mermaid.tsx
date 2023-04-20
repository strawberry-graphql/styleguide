"use client";
import mermaid from "mermaid";
import { useEffect, useId, useRef, useState } from "react";

export const Mermaid = ({ code }: { code: string }) => {
  const id = useId().replace(/:/g, "_");

  const [svg, setSvg] = useState<string | null>(null);

  useEffect(() => {
    mermaid.initialize({
      theme: "base",
    });

    mermaid
      .render(CSS.escape(id), code)
      .then(({ svg }) => {
        // remove style tag from svg via regex
        svg = svg.replace(/<style>.*<\/style>/, "");

        setSvg(svg);
      })

      .catch(console.error);
  }, [id, code]);

  return svg ? (
    <div className="mermaid" dangerouslySetInnerHTML={{ __html: svg }} />
  ) : null;
};
