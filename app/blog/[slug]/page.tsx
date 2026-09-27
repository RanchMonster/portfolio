import Link from "next/link";
import { getPost, getPostSlugs } from "@/lib/markdown";
import { renderMarkdown } from "@/lib/markdown-render";
import "./render.css";

export function generateStaticParams() {
   return getPostSlugs().map((slug) => ({ slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
   const { slug } = await params;
   const post = getPost(slug);

   if (!post) {
      return (
         <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12">
            <h1 className="text-accent-blue mb-4 text-3xl font-bold">Not Found</h1>
            <p className="text-text-secondary mb-4 text-sm">
               The blog post you are looking for does not exist.
            </p>
            <Link href="/blog" className="text-accent-blue text-sm hover:underline">
               &larr; Back to Blog
            </Link>
         </main>
      );
   }

   const contentHtml = await renderMarkdown(post.content);

   return (
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12">
         <Link href="/blog" className="text-accent-blue mb-6 inline-block text-sm hover:underline">
            &larr; Back to Blog
         </Link>

         <article>
            <h1 className="text-text-primary mb-2 text-3xl font-bold">{post.title}</h1>
            {post.date && <p className="text-accent-green mb-6 text-sm">{post.date}</p>}

            <div
               className="prose prose-invert prose-sm max-w-none"
               dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
         </article>
      </main>
   );
}
