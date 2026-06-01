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
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12">
         <div className="text-text-muted mb-4 animate-[fadeInUp_0.5s_ease-out] font-mono text-sm">
            <span className="text-accent-green">❯</span> cat experience.log
         </div>

         <p className="text-text-muted mb-2 font-mono text-xs">// Professional Background</p>
         <h1 className="text-accent-blue mb-8 animate-[fadeInUp_0.5s_ease-out] text-3xl font-bold">
            Experience
         </h1>

         <div className="relative animate-[fadeInUp_0.6s_ease-out]">
            <div className="bg-border absolute top-2 bottom-2 left-3 w-0.5" />

            <div className="space-y-8">
               {experiences.map((exp, i) => (
                  <div
                     key={i}
                     className="relative pl-10"
                     style={{ animation: `fadeInUp 0.4s ease-out ${0.1 * i}s both` }}
                  >
                     <div className="bg-accent-blue absolute top-2 left-[7px] h-[9px] w-[9px] rounded-full" />
                     <div className="bg-bg-secondary border-accent-blue rounded border-l-2 p-4">
                        <div className="text-text-muted mb-1 font-mono text-xs">// role_{i + 1}</div>
                        <h3 className="text-text-primary font-mono text-base font-bold">{exp.title}</h3>
                        <p className="text-accent-green mb-2 font-mono text-xs">{exp.period}</p>
                        <ul className="text-text-secondary list-inside list-disc space-y-1 font-mono text-sm">
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
            <p className="text-text-muted mb-2 font-mono text-xs">// Academic History</p>
            <h2 className="text-accent-blue mb-6 font-mono text-2xl font-bold">Education</h2>
            <div className="space-y-4">
               {education.map((edu, i) => (
                  <div
                     key={i}
                     className="bg-bg-secondary border-border rounded border p-4"
                     style={{ animation: `fadeInUp 0.4s ease-out ${0.1 * i}s both` }}
                  >
                     <h3 className="text-text-primary font-mono text-sm font-bold">{edu.degree}</h3>
                     <p className="text-text-secondary font-mono text-xs">{edu.school}</p>
                  </div>
               ))}
            </div>
         </section>

         <div className="mt-10 animate-[fadeInUp_0.8s_ease-out] text-center">
            <Link
               href="/resume.pdf"
               download
               className="border-border text-text-primary hover:border-accent-blue hover:text-accent-blue inline-block rounded border px-6 py-3 font-mono text-sm font-bold transition-all duration-300"
            >
               Download Resume
            </Link>
         </div>
      </main>
   );
}
