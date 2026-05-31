export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary border-t border-border py-4 px-4 text-center text-text-secondary text-xs">
      <p>
        &copy; {currentYear} Joshua Tucker. Built with Next.js
      </p>
      <a
        href="https://github.com/RanchMonster"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-1 hover:text-accent-blue transition-colors"
      >
        GitHub
      </a>
    </footer>
  );
}
