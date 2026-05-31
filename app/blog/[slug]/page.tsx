import Link from "next/link";
import { remark } from "remark";
import html from "remark-html";
import { getPost, getPostSlugs } from "@/lib/markdown";

export function generateStaticParams() {
  return [];
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return (
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-12">
        <h1 className="text-3xl font-bold text-accent-blue mb-4">Not Found</h1>
        <p className="text-text-secondary text-sm mb-4">
          The blog post you are looking for does not exist.
        </p>
        <Link
          href="/blog"
          className="text-accent-blue hover:underline text-sm"
        >
          &larr; Back to Blog
        </Link>
      </main>
    );
  }

  const processed = await remark().use(html).process(post.content);
  const contentHtml = processed.toString();

  return (
    <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-12">
      <Link
        href="/blog"
        className="text-accent-blue hover:underline text-sm mb-6 inline-block"
      >
        &larr; Back to Blog
      </Link>

      <article>
        <h1 className="text-3xl font-bold text-text-primary mb-2">
          {post.title}
        </h1>
        {post.date && (
          <p className="text-accent-green text-sm mb-6">{post.date}</p>
        )}

        <div
          className="prose prose-sm max-w-none text-text-primary
            prose-headings:text-text-primary
            prose-a:text-accent-blue
            prose-strong:text-text-primary
            prose-code:text-accent-orange
            prose-pre:bg-bg-tertiary prose-pre:border prose-pre:border-border
            prose-blockquote:border-accent-blue prose-blockquote:text-text-secondary"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </main>
  );
}
