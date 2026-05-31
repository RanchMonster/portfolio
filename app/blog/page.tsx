import Link from "next/link";
import { getPosts } from "@/lib/markdown";

export default async function Blog() {
  const posts = getPosts();

  return (
    <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-12">
      <div className="text-text-muted text-sm mb-4 font-mono animate-[fadeInUp_0.5s_ease-out]">
        <span className="text-accent-green">❯</span> cat /var/log/blog
      </div>

      <h1 className="text-3xl font-bold text-accent-blue mb-8 animate-[fadeInUp_0.5s_ease-out]">Blog</h1>

      {posts.length === 0 && (
        <div className="text-center py-16 animate-[fadeInUp_0.6s_ease-out]">
          <pre className="text-text-muted text-xs mb-6 font-mono inline-block text-left">
{`  ___   _   _   ___   _   _   ___   _   _   ___
 / __| | \\ | | / __| | | | | |_ _| | \\ | | / __|
 \\__ \\ |  \\| | \\__ \\ | |_| |  | |  |  \\| | \\__ \\
 |___/ |_|\\__| |___/  \\___/  |___| |_|\\__| |___/`}
          </pre>
          <p className="text-text-secondary text-sm font-mono">No entries found.</p>
          <p className="text-text-muted text-xs mt-2 font-mono">Check back later for new posts.</p>
        </div>
      )}

      {posts.length > 0 && (
        <div className="space-y-4">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ animation: `fadeInUp 0.4s ease-out ${0.1 * i}s both` }}
            >
              <div className="bg-bg-secondary border border-border rounded-lg p-4 hover:border-accent-blue hover:shadow-[0_0_12px_rgba(86,156,214,0.15)] transition-all duration-300">
                <h2 className="text-accent-blue font-bold text-base mb-1 font-mono">
                  {post.title}
                </h2>
                {post.date && (
                  <p className="text-accent-green text-xs mb-2 font-mono">{post.date}</p>
                )}
                {post.description && (
                  <p className="text-text-secondary text-sm font-mono">
                    {post.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
