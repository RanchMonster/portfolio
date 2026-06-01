import Link from "next/link";

export default function Now() {
  const LAST_UPDATED = "May 2026";
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12">
      <div className="text-text-muted mb-4 animate-[fadeInUp_0.5s_ease-out] font-mono text-sm">
        <span className="text-accent-green">❯</span> cat /home/joshua/now.txt
      </div>

      <h1 className="text-accent-blue mb-6 animate-[fadeInUp_0.5s_ease-out] text-3xl font-bold">
        // Now
      </h1>

      <p className="text-text-secondary mb-8 animate-[fadeInUp_0.5s_ease-out] font-mono text-xs">
        {`What I'm focused on right now. (Updated ${LAST_UPDATED})`}
      </p>

      {/* Current Focus */}
      <section className="mb-10 animate-[fadeInUp_0.6s_ease-out]">
        <h2 className="text-text-primary mb-4 font-mono text-lg font-bold">Working On</h2>
        <ul className="space-y-3">
          {[
            "Building my Rust kernel (following blog_os series)",
            "Job hunting for a Software Engineer role",
            "Growing my portfolio and open source presence",
            "Exploring systems programming and OS development",
          ].map((item) => (
            <li key={item} className="text-text-secondary flex items-start gap-3 font-mono text-sm">
              <span className="text-accent-green mt-0.5">◆</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Learning */}
      <section className="mb-10 animate-[fadeInUp_0.7s_ease-out]">
        <h2 className="text-text-primary mb-4 font-mono text-lg font-bold">Learning</h2>
        <ul className="space-y-3">
          {[
            "Rust systems programming",
            "Operating system concepts & kernel development",
            "Advanced TypeScript patterns",
            "Infrastructure & homelab management",
          ].map((item) => (
            <li key={item} className="text-text-secondary flex items-start gap-3 font-mono text-sm">
              <span className="text-accent-purple mt-0.5">◆</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Reading */}
      <section className="mb-10 animate-[fadeInUp_0.8s_ease-out]">
        <h2 className="text-text-primary mb-4 font-mono text-lg font-bold">Reading</h2>
        <ul className="space-y-3">
          {[
            "blog_os (Writing an OS in Rust by Philipp Oppermann)",
            "Rust documentation & The Book",
            "Various tech blogs and documentation",
          ].map((item) => (
            <li key={item} className="text-text-secondary flex items-start gap-3 font-mono text-sm">
              <span className="text-accent-orange mt-0.5">◆</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="border-border mt-8 animate-[fadeInUp_0.9s_ease-out] border-t pt-6">
        <p className="text-text-muted font-mono text-xs">
          Inspired by{" "}
          <a
            href="https://nownownow.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-blue hover:underline"
          >
            nownownow.com
          </a>
        </p>
      </div>
    </main>
  );
}
