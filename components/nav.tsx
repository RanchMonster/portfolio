"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/setup", label: "Setup" },
  { href: "/now", label: "Now" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-bg-secondary border-b border-border flex items-stretch font-mono">
      {/* Logo tab — always active */}
      <div className="flex items-center px-4 py-2 bg-bg-primary border-t-2 border-accent-blue text-sm font-bold text-accent-blue mr-0">
        Joshua Tucker
      </div>

      {/* Desktop tabs */}
      <div className="hidden sm:flex items-stretch flex-1 overflow-x-auto">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center px-4 py-2 text-sm border-r border-border transition-colors ${
              isActive(link.href)
                ? "bg-bg-primary border-t-2 border-t-accent-blue text-text-primary"
                : "bg-bg-tertiary text-text-secondary hover:text-text-primary hover:bg-bg-hover"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Spacer */}
      <div className="hidden sm:flex flex-1 bg-bg-tertiary" />

      {/* Mobile hamburger */}
      <button
        className="sm:hidden text-text-primary px-4 focus:outline-none ml-auto"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {menuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-12 left-0 right-0 bg-bg-secondary border-b border-border z-50 sm:hidden">
          <div className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 text-sm border-l-2 transition-colors ${
                  isActive(link.href)
                    ? "border-l-accent-blue bg-bg-primary text-accent-blue"
                    : "border-l-transparent text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
