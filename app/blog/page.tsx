import Link from "next/link";
import { getPosts } from "@/lib/markdown";

export default async function Blog() {
  const posts = getPosts();

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12">
      <div className="text-text-muted mb-4 animate-[fadeInUp_0.5s_ease-out] font-mono text-sm">
        <span className="text-accent-green">❯</span> cat /var/log/blog
      </div>

      <p className="text-text-muted mb-2 font-mono text-xs">// Thoughts & Writings</p>
      <h1 className="text-accent-blue mb-8 animate-[fadeInUp_0.5s_ease-out] text-3xl font-bold">
        Blog
      </h1>

      {posts.length === 0 && (
        <div className="animate-[fadeInUp_0.6s_ease-out] py-16 text-center">
          <pre className="text-text-muted mb-6 inline-block text-left font-mono text-xs">
            {`  ___   _   _   ___   _   _   ___   _   _   ___
 / __| | \\ | | / __| | | | | |_ _| | \\ | | / __|
 \\__ \\ |  \\| | \\__ \\ | |_| |  | |  |  \\| | \\__ \\
 |___/ |_|\\__| |___/  \\___/  |___| |_|\\__| |___/`}
          </pre>
          <p className="text-text-secondary font-mono text-sm">No entries found.</p>
          <p className="text-text-muted mt-2 font-mono text-xs">Check back later for new posts.</p>
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
              <div className="bg-bg-secondary border-border hover:border-accent-blue rounded-lg border p-4 transition-all duration-300 hover:shadow-[0_0_12px_rgba(86,156,214,0.15)]">
                <h2 className="text-accent-blue mb-1 font-mono text-base font-bold">
                  {post.title}
                </h2>
                {post.date && (
                  <p className="text-accent-green mb-2 font-mono text-xs">{post.date}</p>
                )}
                {post.description && (
                  <p className="text-text-secondary font-mono text-sm">{post.description}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
