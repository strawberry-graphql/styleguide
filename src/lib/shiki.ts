import type { Highlighter, Lang } from "shiki";
import { renderToHtml, getHighlighter } from "shiki";

let highlighter: Highlighter;

export async function highlight(code: string, lang: Lang) {
  if (!highlighter) {
    highlighter = await getHighlighter({
      langs: [lang],
      theme: "css-variables",
    });
  }

  const tokens = highlighter.codeToThemedTokens(code, lang, "css-variables", {
    includeExplanation: false,
  });
  const html = renderToHtml(tokens, { bg: "transparent" });

  return html;
}
