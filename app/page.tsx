import Link from "next/link";
import { getUserStats, getRecentActivity } from "@/lib/github-stats";
import { getRepos } from "@/lib/github";
import EventView from "@/components/event-view";

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

export default async function Home() {
  const stats = await getUserStats();
  const events = await getRecentActivity();
  const repos = await getRepos();

  return (
    <main className="flex flex-1 flex-col px-4">
      <section className="bg-grid relative flex min-h-[80vh] flex-1 flex-col items-center justify-center overflow-hidden">
        <div
          className="text-text-muted absolute top-6 left-6 font-mono text-xl opacity-30 select-none"
          aria-hidden="true"
        >
          ┌─────────────────────────────┐
          <br />│ ~/portfolio │
        </div>
        <div
          className="text-text-muted absolute right-6 bottom-6 font-mono text-xl opacity-30 select-none"
          aria-hidden="true"
        >
          └─────────────────────────────┘
        </div>

        <div className="text-text-muted mb-1 animate-[fadeInUp_0.5s_ease-out] font-mono text-sm">
          <span className="text-accent-green">❯</span> cat about.txt
        </div>

        <h1 className="text-text-primary mb-2 animate-[fadeInUp_0.6s_ease-out] font-mono text-4xl font-bold sm:text-5xl md:text-6xl">
          Joshua Tucker
        </h1>

        <h2 className="text-accent-blue mb-6 font-mono text-xl sm:text-2xl md:text-3xl">
          <span
            className="border-accent-blue inline-block max-w-fit overflow-hidden border-r-2 whitespace-nowrap"
            style={{
              animation: "typing 3.5s steps(30) 0.8s forwards, blink 0.75s step-end infinite",
            }}
          >
            Full-Stack Developer & Tech Enthusiast
          </span>
        </h2>

        <p className="text-text-secondary mb-8 max-w-md animate-[fadeInUp_0.8s_ease-out] text-center font-mono text-sm sm:text-base">
          Building web, mobile, and IoT solutions with clean, maintainable code.
        </p>

        <div className="flex animate-[fadeInUp_1s_ease-out] items-center justify-center gap-4">
          <Link
            href="/projects"
            className="bg-accent-blue rounded px-6 py-3 font-mono text-sm font-bold text-black transition-all duration-300 hover:shadow-[0_0_16px_rgba(86,156,214,0.6)]"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="border-border text-text-primary hover:border-accent-blue hover:text-accent-blue rounded border px-6 py-3 font-mono text-sm font-bold transition-all duration-300 hover:shadow-[0_0_12px_rgba(86,156,214,0.3)]"
          >
            Contact Me
          </Link>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-[fadeInUp_1.2s_ease-out]">
          <span className="text-text-muted animate-[blink_1.5s_step-end_infinite] font-mono text-xs">
            ▼ scroll
          </span>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl animate-[fadeInUp_0.6s_ease-out] py-16">
        <div className="text-text-muted mb-6 font-mono text-sm">
          <span className="text-accent-green">❯</span> echo $TECH_STACK
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {[
            { name: "TypeScript", color: "#3178c6" },
            { name: "Python", color: "#3572A5" },
            { name: "Rust", color: "#dea584" },
            { name: "JavaScript", color: "#f1e05a" },
            { name: "Java", color: "#b07219" },
            { name: "Lua", color: "#000080" },
            { name: "React", color: "#61dafb" },
            { name: "Next.js", color: "#000000" },
            { name: "Linux", color: "#fcc624" },
            { name: "IoT", color: "#c586c0" },
            { name: "C", color: "#555555" },
            { name: "C++", color: "#f34b7d" },
            { name: "Kotlin", color: "#A97BFF" },
            { name: "SQL", color: "#e38c00" },
            { name: "Expo", color: "#000020" },
          ].map((tech, i) => (
            <span
              key={tech.name}
              className="bg-bg-secondary border-border text-text-primary hover:border-accent-blue rounded border px-4 py-2 font-mono text-sm transition-all duration-200 hover:scale-105"
              style={{ animation: `fadeInUp 0.3s ease-out ${0.05 * i}s both` }}
            >
              <span
                className="mr-2 inline-block h-2 w-2 rounded-full"
                style={{ backgroundColor: tech.color }}
              />
              {tech.name}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl animate-[fadeInUp_0.6s_ease-out] pb-16">
        <div className="text-text-muted mb-6 font-mono text-sm">
          <span className="text-accent-green">❯</span> ./stats.sh
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-bg-secondary border-border hover:border-accent-blue rounded-lg border p-5 text-center transition-all duration-300 hover:shadow-[0_0_12px_rgba(86,156,214,0.2)]">
            <div className="text-accent-blue font-mono text-2xl font-bold sm:text-3xl">
              {stats.public_repos}
            </div>
            <div className="text-text-secondary mt-1 font-mono text-xs">Public Repos</div>
          </div>
          <div className="bg-bg-secondary border-border hover:border-accent-blue rounded-lg border p-5 text-center transition-all duration-300 hover:shadow-[0_0_12px_rgba(86,156,214,0.2)]">
            <div className="text-accent-purple font-mono text-2xl font-bold sm:text-3xl">
              {stats.total_stars}
            </div>
            <div className="text-text-secondary mt-1 font-mono text-xs">Total Stars</div>
          </div>
          <div className="bg-bg-secondary border-border hover:border-accent-blue rounded-lg border p-5 text-center transition-all duration-300 hover:shadow-[0_0_12px_rgba(86,156,214,0.2)]">
            <div className="text-accent-orange font-mono text-2xl font-bold sm:text-3xl">
              {stats.followers}
            </div>
            <div className="text-text-secondary mt-1 font-mono text-xs">Followers</div>
          </div>
        </div>
      </section>

      {/* GitHub Contributions */}
      <section className="mx-auto w-full max-w-4xl animate-[fadeInUp_0.65s_ease-out] pb-16">
        <div className="text-text-muted mb-4 font-mono text-sm">
          <span className="text-accent-green">❯</span> git log --since=2025-06-01 --oneline | wc -l
        </div>
        <div className="bg-bg-secondary border-border overflow-x-auto rounded-lg border p-4">
          <a
            href="https://github.com/RanchMonster"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src="https://ghchart.rshah.org/569cd6/RanchMonster"
              alt="GitHub contribution chart"
              className="w-full min-w-[600px]"
              style={{ filter: "brightness(0.9)" }}
            />
          </a>
        </div>
        <p className="text-text-muted mt-2 text-center font-mono text-xs">Contributions in 2026</p>
      </section>

      {repos.length > 0 && (
        <section className="mx-auto w-full max-w-4xl animate-[fadeInUp_0.7s_ease-out] pb-16">
          <div className="text-text-muted mb-6 font-mono text-sm">
            <span className="text-accent-green">❯</span> ls -la projects/ | head -3
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {repos.slice(0, 3).map((repo, i) => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-bg-secondary border-border hover:border-accent-blue group block rounded-lg border p-4 transition-all duration-300 hover:shadow-[0_0_12px_rgba(86,156,214,0.15)]"
                style={{ animation: `fadeInUp 0.4s ease-out ${0.1 * i}s both` }}
              >
                <h3 className="text-accent-blue mb-1 font-mono text-sm font-bold group-hover:underline">
                  {repo.name}{" "}
                  <span className="opacity-0 transition-opacity group-hover:opacity-100">→</span>
                </h3>
                <p className="text-text-secondary mb-3 line-clamp-2 font-mono text-xs">
                  {repo.description || "No description"}
                </p>
                <div className="flex items-center gap-3 font-mono text-xs">
                  {repo.language && (
                    <span className="text-text-secondary flex items-center gap-1">
                      <span
                        className="inline-block h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: getLanguageColor(repo.language) }}
                      />
                      {repo.language}
                    </span>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span className="text-accent-yellow">★ {repo.stargazers_count}</span>
                  )}
                </div>
              </a>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/projects"
              className="text-text-secondary hover:text-accent-blue font-mono text-xs transition-colors"
            >
              View all {stats.public_repos} projects →
            </Link>
          </div>
        </section>
      )}

      {events.length > 0 && (
        <section className="mx-auto w-full max-w-4xl animate-[fadeInUp_0.8s_ease-out] pb-20">
          <div className="text-text-muted mb-6 font-mono text-sm">
            <span className="text-accent-green">❯</span> tail -f activity.log
          </div>

          <div className="space-y-3">
            {events.map((event, i) => (
              <EventView key={event.id} event={event} index={i} />
            ))}
          </div>

          <div className="mt-4 text-center">
            <a
              href="https://github.com/RanchMonster"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-blue font-mono text-xs transition-colors"
            >
              View all activity on GitHub →
            </a>
          </div>
        </section>
      )}

      {events.length === 0 && (
        <section className="mx-auto w-full max-w-4xl pb-20 text-center">
          <p className="text-text-muted font-mono text-sm">No recent public activity</p>
        </section>
      )}

      <section className="mx-auto w-full max-w-4xl animate-[fadeInUp_0.8s_ease-out] py-20 text-center">
        <div className="text-text-muted mb-4 font-mono text-sm">
          <span className="text-accent-green">❯</span> ./contact.sh --quick
        </div>
        <h2 className="text-text-primary mb-3 font-mono text-2xl font-bold sm:text-3xl">
          Let&apos;s Build Something
        </h2>
        <p className="text-text-secondary mx-auto mb-6 max-w-md font-mono text-sm">
          Open to opportunities, collaboration, and new challenges.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/contact"
            className="bg-accent-blue rounded px-6 py-3 font-mono text-sm font-bold text-black transition-all duration-300 hover:shadow-[0_0_16px_rgba(86,156,214,0.6)]"
          >
            Get In Touch
          </Link>
          <a
            href="https://github.com/RanchMonster"
            target="_blank"
            rel="noopener noreferrer"
            className="border-border text-text-primary hover:border-accent-blue hover:text-accent-blue rounded border px-6 py-3 font-mono text-sm font-bold transition-all duration-300"
          >
            View GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
