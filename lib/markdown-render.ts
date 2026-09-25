import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeShiki from "@shikijs/rehype";
import rehypeStringify from "rehype-stringify";
import type { Root } from "hast";

interface HNode {
   type: string;
   tagName?: string;
   properties?: Record<string, unknown>;
   children?: (HNode | unknown)[];
}

function classList(node: HNode): string[] {
   const cls = node.properties?.className;
   if (Array.isArray(cls)) return cls.filter((c): c is string => typeof c === "string");
   const raw = node.properties?.class;
   if (typeof raw === "string") return raw.split(" ");
   if (Array.isArray(raw)) return raw.filter((c): c is string => typeof c === "string");
   return [];
}

function isShikiPre(node: unknown): node is HNode {
   if (typeof node !== "object" || node === null) return false;
   const el = node as HNode;
   if (el.type !== "element" || el.tagName !== "pre") return false;
   return classList(el).includes("shiki");
}

function codeLanguage(node: HNode): string {
   const codeEl = node.children?.find(
      (child): child is HNode =>
         typeof child === "object" &&
         child !== null &&
         (child as HNode).type === "element" &&
         (child as HNode).tagName === "code",
   );
   for (const name of codeEl ? classList(codeEl) : []) {
      if (name.startsWith("language-")) return name.slice("language-".length);
   }
   return "text";
}

function buildFigure(pre: HNode): HNode {
   const lang = codeLanguage(pre);
   return {
      type: "element",
      tagName: "div",
      properties: { className: ["code-figure"] },
      children: [
         {
            type: "element",
            tagName: "div",
            properties: { className: ["code-header"] },
            children: [
               {
                  type: "element",
                  tagName: "span",
                  properties: { className: ["code-lang"] },
                  children: [{ type: "text", value: lang }],
               },
            ],
         },
         pre,
      ],
   };
}

function addLanguageBadges(node: HNode): HNode {
   if (!Array.isArray(node.children)) return node;
   const children: (HNode | unknown)[] = [];
   for (const child of node.children) {
      if (isShikiPre(child)) {
         children.push(buildFigure(child));
      } else if (
         typeof child === "object" &&
         child !== null &&
         ((child as HNode).type === "element" || (child as HNode).type === "root")
      ) {
         addLanguageBadges(child as HNode);
         children.push(child);
      } else {
         children.push(child);
      }
   }
   node.children = children;
   return node;
}

export function languageBadges() {
   return (tree: Root) => {
      addLanguageBadges(tree as unknown as HNode);
   };
}

export async function renderMarkdown(content: string): Promise<string> {
   const file = await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeShiki, {
         theme: "dark-plus",
         addLanguageClass: true,
         inline: "tailing-curly-colon",
      })
      .use(languageBadges)
      .use(rehypeStringify)
      .process(content);

   return file.toString();
}