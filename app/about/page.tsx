const skills = [
  "Backend Server Development",
  "C",
  "C++",
  "Database Management",
  "Educational Technology",
  "Expo SDK",
  "IoT Development",
  "Kotlin",
  "Linux",
  "Management",
  "Mobile App Development",
  "Networking Basics",
  "Problem Solving",
  "Scripting/Automation",
  "Systems Programming",
  "SQL",
  "Website Development",
  "Windows",
];

export default function About() {
  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-12">
      <div className="text-text-muted mb-4 animate-[fadeInUp_0.5s_ease-out] font-mono text-sm">
        <span className="text-accent-green">❯</span> cat about.txt
      </div>

      <h1 className="text-accent-blue mb-6 animate-[fadeInUp_0.5s_ease-out] text-3xl font-bold">
        About Me
      </h1>

      <section className="mb-10 animate-[fadeInUp_0.6s_ease-out]">
        <p className="text-text-primary font-mono text-sm leading-relaxed sm:text-base">
          Results-driven Software Developer with 10+ years of experience building web, mobile, IoT,
          and systems-level solutions. Proven ability to translate complex requirements into clean,
          maintainable code and to lead small technical teams to deliver projects on time and under
          budget. Currently exploring operating system development with Rust.
        </p>
      </section>

      <section className="mb-10 animate-[fadeInUp_0.65s_ease-out]">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-bg-secondary border-border hover:border-accent-blue rounded-lg border p-4 text-center transition-all duration-300">
            <div className="text-accent-blue font-mono text-xl font-bold">10+ Years</div>
            <div className="text-text-secondary mt-1 font-mono text-xs">Experience</div>
          </div>
          <div className="bg-bg-secondary border-border hover:border-accent-blue rounded-lg border p-4 text-center transition-all duration-300">
            <div className="text-accent-purple font-mono text-xl font-bold">10+</div>
            <div className="text-text-secondary mt-1 font-mono text-xs">Projects</div>
          </div>
          <div className="bg-bg-secondary border-border hover:border-accent-blue rounded-lg border p-4 text-center transition-all duration-300">
            <div className="text-accent-orange font-mono text-xl font-bold">5</div>
            <div className="text-text-secondary mt-1 font-mono text-xs">Languages</div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <p className="text-text-muted mb-2 font-mono text-xs">// Tools & Technologies</p>
        <h2 className="text-text-primary mb-4 animate-[fadeInUp_0.7s_ease-out] font-mono text-xl font-bold">
          Skills
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <span
              key={skill}
              className="bg-bg-tertiary text-text-primary border-border hover:border-accent-purple hover:text-accent-purple rounded border px-3 py-1 font-mono text-sm transition-colors"
              style={{ animation: `fadeInUp 0.3s ease-out ${0.05 * i}s both` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="animate-[fadeInUp_0.8s_ease-out]">
        <p className="text-text-muted mb-2 font-mono text-xs">// What I'm exploring</p>
        <h2 className="text-text-primary mb-4 font-mono text-xl font-bold">Current Focus</h2>
        <div className="bg-bg-secondary border-border text-text-secondary rounded-lg border p-4 font-mono text-sm">
          <span className="text-accent-green">// Currently exploring</span>
          <br />
          <span className="text-accent-green">//</span>
          <br />
          <span className="text-text-muted">// - Building a kernel in Rust (blog_os series)</span>
          <br />
          <span className="text-text-muted">// - Systems programming & OS development</span>
          <br />
          <span className="text-text-muted">// - Open source contributions</span>
        </div>
      </section>
    </main>
  );
}
