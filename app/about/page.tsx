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
    <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-12">
      <div className="text-text-muted text-sm mb-4 font-mono animate-[fadeInUp_0.5s_ease-out]">
        <span className="text-accent-green">❯</span> cat about.txt
      </div>

      <h1 className="text-3xl font-bold text-accent-blue mb-6 animate-[fadeInUp_0.5s_ease-out]">About Me</h1>

      <section className="mb-10 animate-[fadeInUp_0.6s_ease-out]">
        <p className="text-text-primary leading-relaxed text-sm sm:text-base font-mono">
  Results-driven Software Developer with 10+ years of experience building
  web, mobile, IoT, and systems-level solutions. Proven ability to translate complex
  requirements into clean, maintainable code and to lead small technical
  teams to deliver projects on time and under budget. Currently exploring
  operating system development with Rust.
</p>
      </section>

      <section className="mb-10 animate-[fadeInUp_0.65s_ease-out]">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-bg-secondary border border-border rounded-lg p-4 text-center hover:border-accent-blue transition-all duration-300">
            <div className="text-xl font-bold text-accent-blue font-mono">10+ Years</div>
            <div className="text-xs text-text-secondary mt-1 font-mono">Experience</div>
          </div>
          <div className="bg-bg-secondary border border-border rounded-lg p-4 text-center hover:border-accent-blue transition-all duration-300">
            <div className="text-xl font-bold text-accent-purple font-mono">10+</div>
            <div className="text-xs text-text-secondary mt-1 font-mono">Projects</div>
          </div>
          <div className="bg-bg-secondary border border-border rounded-lg p-4 text-center hover:border-accent-blue transition-all duration-300">
            <div className="text-xl font-bold text-accent-orange font-mono">5</div>
            <div className="text-xs text-text-secondary mt-1 font-mono">Languages</div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary mb-4 font-mono animate-[fadeInUp_0.7s_ease-out]">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {skills.map((skill, i) => (
            <span
              key={skill}
              className="bg-bg-tertiary text-text-primary border border-border rounded px-3 py-1 text-sm font-mono hover:border-accent-purple hover:text-accent-purple transition-colors"
              style={{ animation: `fadeInUp 0.3s ease-out ${0.05 * i}s both` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="animate-[fadeInUp_0.8s_ease-out]">
        <h2 className="text-xl font-bold text-text-primary mb-4 font-mono">Current Focus</h2>
        <div className="bg-bg-secondary border border-border rounded-lg p-4 font-mono text-sm text-text-secondary">
          <span className="text-accent-green">// Currently exploring</span><br />
          <span className="text-accent-green">//</span><br />
          <span className="text-text-muted">// - Building a kernel in Rust (blog_os series)</span><br />
          <span className="text-text-muted">// - Systems programming & OS development</span><br />
          <span className="text-text-muted">// - Open source contributions</span>
        </div>
      </section>
    </main>
  );
}
