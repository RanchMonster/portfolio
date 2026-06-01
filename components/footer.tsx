export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#007acc] text-white text-xs font-mono flex items-center justify-between px-4 py-1">
      {/* Left side */}
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
            <path d="M1.5 3.5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-9z" />
          </svg>
          main
        </span>
        <span>✨</span>
        <span className="hidden sm:inline">0 errors 0 warnings</span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <span className="hidden sm:inline">Spaces: 2</span>
        <span className="hidden sm:inline">UTF-8</span>
        <span>© {currentYear} Joshua Tucker</span>
        <a
          href="https://github.com/RanchMonster"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
