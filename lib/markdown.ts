import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content", "blog");

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
}

export function getPostSlugs(): string[] {
  try {
    if (!fs.existsSync(contentDir)) return [];
    const files = fs.readdirSync(contentDir);
    return files.filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""));
  } catch {
    return [];
  }
}

export function getPosts(): Post[] {
  try {
    const slugs = getPostSlugs();
    const posts = slugs
      .map((slug) => getPost(slug))
      .filter((p): p is Post => p !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
  } catch {
    return [];
  }
}

export function getPost(slug: string): Post | null {
  try {
    const filePath = path.join(contentDir, `${slug}.md`);
    if (!fs.existsSync(filePath)) return null;

    const source = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(source);

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      description: data.description || "",
      content,
    };
  } catch {
    return null;
  }
}
