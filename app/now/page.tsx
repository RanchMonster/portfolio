import Link from "next/link";

export default function Now() {
  return (
    <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-12">
      <div className="text-text-muted text-sm mb-4 font-mono animate-[fadeInUp_0.5s_ease-out]">
        <span className="text-accent-green">❯</span> cat /home/joshua/now.txt
      </div>

      <h1 className="text-3xl font-bold text-accent-blue mb-6 animate-[fadeInUp_0.5s_ease-out]">// Now</h1>

      <p className="text-text-secondary text-xs mb-8 font-mono animate-[fadeInUp_0.5s_ease-out]">
        What I&apos;m focused on right now. (Updated May 2026)
      </p>

      {/* Current Focus */}
      <section className="mb-10 animate-[fadeInUp_0.6s_ease-out]">
        <h2 className="text-lg font-bold text-text-primary mb-4 font-mono">Working On</h2>
        <ul className="space-y-3">
          {[
            "Building my Rust kernel (following blog_os series)",
            "Job hunting for a Software Engineer role",
            "Growing my portfolio and open source presence",
            "Exploring systems programming and OS development",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm font-mono text-text-secondary">
              <span className="text-accent-green mt-0.5">◆</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Learning */}
      <section className="mb-10 animate-[fadeInUp_0.7s_ease-out]">
        <h2 className="text-lg font-bold text-text-primary mb-4 font-mono">Learning</h2>
        <ul className="space-y-3">
          {[
            "Rust systems programming",
            "Operating system concepts & kernel development",
            "Advanced TypeScript patterns",
            "Infrastructure & homelab management",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm font-mono text-text-secondary">
              <span className="text-accent-purple mt-0.5">◆</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Reading */}
      <section className="mb-10 animate-[fadeInUp_0.8s_ease-out]">
        <h2 className="text-lg font-bold text-text-primary mb-4 font-mono">Reading</h2>
        <ul className="space-y-3">
          {[
            "blog_os (Writing an OS in Rust by Philipp Oppermann)",
            "Rust documentation & The Book",
            "Various tech blogs and documentation",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm font-mono text-text-secondary">
              <span className="text-accent-orange mt-0.5">◆</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="border-t border-border pt-6 mt-8 animate-[fadeInUp_0.9s_ease-out]">
        <p className="text-text-muted text-xs font-mono">
          Inspired by <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">nownownow.com</a>
        </p>
      </div>
    </main>
  );
}
