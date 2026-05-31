const contacts = [
  {
    icon: "📧",
    label: "Email",
    value: "josh.tucker06@icloud.com",
    href: "mailto:josh.tucker06@icloud.com",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "682-209-5175",
    href: "tel:+16822095175",
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
    <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-12">
      <div className="text-text-muted text-sm mb-4 font-mono animate-[fadeInUp_0.5s_ease-out]">
        <span className="text-accent-green">❯</span> finger joshua
      </div>

      <h1 className="text-3xl font-bold text-accent-blue mb-6 animate-[fadeInUp_0.5s_ease-out]">Contact</h1>

      <div className="mb-6 animate-[fadeInUp_0.55s_ease-out]">
        <span className="inline-flex items-center gap-1.5 bg-bg-secondary border border-border rounded-full px-3 py-1 text-xs font-mono text-accent-green">
          <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
          Available for opportunities
        </span>
      </div>

      <div className="space-y-4">
        {contacts.map((item, i) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={
              item.href.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
            className="bg-bg-secondary border border-border rounded-lg p-4 flex items-center gap-4 hover:border-accent-blue hover:shadow-[0_0_12px_rgba(86,156,214,0.15)] transition-all duration-300"
            style={{ animation: `fadeInUp 0.4s ease-out ${0.1 * i}s both` }}
          >
            <span className="text-xl">{item.icon}</span>
            <div>
              <p className="text-text-secondary text-xs font-mono">{item.label}</p>
              <p className="text-text-primary text-sm hover:text-accent-blue transition-colors font-mono">
                {item.value}
              </p>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
