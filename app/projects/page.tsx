import { getRepos } from "@/lib/github";

const languageColors: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Rust: "#dea584",
  Lua: "#000080",
  Java: "#b07219",
  Slint: "#c586c0",
};

function getLanguageColor(lang: string | null): string {
  if (!lang) return "#6a9955";
  return languageColors[lang] || "#6a9955";
}

export default async function Projects() {
  let repos;
  let error = false;

  try {
    repos = await getRepos();
  } catch {
    error = true;
  }

  return (
    <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-12">
      <div className="text-text-muted text-sm mb-4 font-mono animate-[fadeInUp_0.5s_ease-out]">
        <span className="text-accent-green">❯</span> find . -type d -name &quot;projects&quot;
      </div>

      <h1 className="text-3xl font-bold text-accent-blue mb-2 animate-[fadeInUp_0.5s_ease-out]">Projects</h1>

      {!error && repos && repos.length > 0 && (
        <p className="text-text-muted text-xs mb-6 font-mono animate-[fadeInUp_0.55s_ease-out]">
          // {repos.length} repositories &middot; sorted by stars
        </p>
      )}

      {error && (
        <p className="text-text-secondary text-sm font-mono">Unable to load projects.</p>
      )}

      {!error && repos && repos.length === 0 && (
        <p className="text-text-secondary text-sm font-mono">No projects found.</p>
      )}

      {!error && repos && repos.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {repos.map((repo, i) => (
            <a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bg-secondary border border-border rounded-lg p-4 hover:border-accent-blue hover:shadow-[0_0_12px_rgba(86,156,214,0.15)] transition-all duration-300 block"
              style={{ animation: `fadeInUp 0.4s ease-out ${0.05 * i}s both` }}
            >
              <h3 className="text-accent-blue font-bold text-sm mb-1 font-mono">
                {repo.name}
              </h3>
              <p className="text-text-secondary text-xs mb-3 line-clamp-2 font-mono">
                {repo.description || "No description"}
              </p>

              <div className="flex items-center gap-3 flex-wrap text-xs font-mono">
                {repo.language && (
                  <span className="flex items-center gap-1 text-text-secondary">
                    <span
                      className="inline-block w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: getLanguageColor(repo.language) }}
                    />
                    {repo.language}
                  </span>
                )}
                {repo.stargazers_count > 0 && (
                  <span className="text-accent-yellow font-bold">★ {repo.stargazers_count}</span>
                )}
                {repo.topics?.slice(0, 3).map((topic) => (
                  <span
                    key={topic}
                    className="bg-bg-tertiary text-text-secondary px-2 py-0.5 rounded text-xs font-mono"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      )}
    </main>
  );
}
