const contacts = [
  {
    icon: "📧",
    label: "Email",
    value: "josh.tucker@jdevs.org",
    href: "mailto:josh.tucker@jdevs.org",
  },
  {
    icon: "🔗",
    label: "GitHub",
    value: "github.com/RanchMonster",
    href: "https://github.com/RanchMonster",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/joshua-tucker-01492a296",
    href: "https://linkedin.com/in/joshua-tucker-01492a296",
  },
];

export default function Contact() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-12">
      <div className="text-text-muted mb-4 animate-[fadeInUp_0.5s_ease-out] font-mono text-sm">
        <span className="text-accent-green">❯</span> finger joshua
      </div>

      <p className="text-text-muted mb-2 font-mono text-xs">// Reach Out</p>
      <h1 className="text-accent-blue mb-6 animate-[fadeInUp_0.5s_ease-out] text-3xl font-bold">
        Contact
      </h1>

      <div className="mb-6 animate-[fadeInUp_0.55s_ease-out]">
        <span className="bg-bg-secondary border-border text-accent-green inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs">
          <span className="bg-accent-green h-2 w-2 animate-pulse rounded-full" />
          Available for opportunities
        </span>
      </div>

      <div className="space-y-4">
        {contacts.map((item, i) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="bg-bg-secondary border-border hover:border-accent-blue flex items-center gap-4 rounded-lg border p-4 transition-all duration-300 hover:shadow-[0_0_12px_rgba(86,156,214,0.15)]"
            style={{ animation: `fadeInUp 0.4s ease-out ${0.1 * i}s both` }}
          >
            <span className="text-xl">{item.icon}</span>
            <div>
              <p className="text-text-secondary font-mono text-xs">{item.label}</p>
              <p className="text-text-primary hover:text-accent-blue font-mono text-sm transition-colors">
                {item.value}
              </p>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
