import Link from "next/link";

const experiences = [
  {
    title: "AI GoLearning Teacher",
    period: "Aug 2024 — Aug 2025",
    details: [
      "Instructed younger students in programming and artificial intelligence concepts through peer-led sessions.",
      "Created engaging lesson plans to enhance accessibility and interactivity of coding for beginners.",
    ],
  },
  {
    title: "Design Engineer — Mechanical Sheet Metal, Terrell, Texas",
    period: "Aug 2025 — Nov 2025",
    details: [
      "Designed mechanical components with CAD software to meet specifications for sheet metal applications.",
      "Created technical drawings, assembly instructions, and bill of materials to support manufacturing processes.",
    ],
  },
  {
    title: "Founder & CEO — DNJ Repair",
    period: "May 2021 — Jan 2025",
    details: [
      "Founded and managed IT repair business, cultivating leadership and business management skills.",
      "Developed IT troubleshooting, networking, and system repair skills through hands-on problem-solving.",
    ],
  },
];

const education = [
  {
    degree: "High School Diploma",
    school: "Moanalua High School, Honolulu, HI",
  },
  {
    degree: "Associate of Science (Computer Science)",
    school: "Tyler Junior College, Tyler, TX (Currently enrolled)",
  },
];

export default function Experience() {
  return (
    <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-12">
      <div className="text-text-muted text-sm mb-4 font-mono animate-[fadeInUp_0.5s_ease-out]">
        <span className="text-accent-green">❯</span> cat experience.log
      </div>

      <h1 className="text-3xl font-bold text-accent-blue mb-8 animate-[fadeInUp_0.5s_ease-out]">Experience</h1>

      <div className="relative animate-[fadeInUp_0.6s_ease-out]">
        <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-border" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-10" style={{ animation: `fadeInUp 0.4s ease-out ${0.1 * i}s both` }}>
              <div className="absolute left-[7px] top-2 w-[9px] h-[9px] rounded-full bg-accent-blue" />
              <div className="bg-bg-secondary border-l-2 border-accent-blue rounded p-4">
                <div className="text-text-muted text-xs mb-1 font-mono">// role_{i + 1}</div>
                <h3 className="text-text-primary font-bold text-base font-mono">
                  {exp.title}
                </h3>
                <p className="text-accent-green text-xs mb-2 font-mono">{exp.period}</p>
                <ul className="list-disc list-inside text-text-secondary text-sm space-y-1 font-mono">
                  {exp.details.map((detail, j) => (
                    <li key={j}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="mt-12 animate-[fadeInUp_0.7s_ease-out]">
        <h2 className="text-2xl font-bold text-accent-blue mb-6 font-mono">Education</h2>
        <div className="space-y-4">
          {education.map((edu, i) => (
            <div
              key={i}
              className="bg-bg-secondary border border-border rounded p-4"
              style={{ animation: `fadeInUp 0.4s ease-out ${0.1 * i}s both` }}
            >
              <h3 className="text-text-primary font-bold text-sm font-mono">
                {edu.degree}
              </h3>
              <p className="text-text-secondary text-xs font-mono">{edu.school}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-10 text-center animate-[fadeInUp_0.8s_ease-out]">
        <Link
          href="#"
          className="border border-border text-text-primary px-6 py-3 rounded text-sm font-bold font-mono hover:border-accent-blue hover:text-accent-blue transition-all duration-300 inline-block"
        >
          Download Resume
        </Link>
      </div>
    </main>
  );
}
