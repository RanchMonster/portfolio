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
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <nav className="bg-bg-secondary border-border flex items-stretch border-b font-mono">
      {/* Logo tab — always active */}
      <div className="bg-bg-primary border-accent-blue text-accent-blue flex items-center border-t-2 px-4 py-2 text-sm font-bold">
        Joshua Tucker
      </div>

      {/* Desktop tabs */}
      <div className="hidden flex-1 items-stretch overflow-x-auto sm:flex">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`border-border flex items-center border-r px-4 py-2 text-sm transition-colors ${
              isActive(link.href)
                ? "bg-bg-primary border-t-accent-blue text-text-primary border-t-2"
                : "bg-bg-tertiary text-text-secondary hover:text-text-primary hover:bg-bg-hover"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Spacer */}
      <div className="bg-bg-tertiary hidden flex-1 sm:flex" />

      {/* Mobile hamburger */}
      <button
        className="text-text-primary ml-auto px-4 focus:outline-none sm:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          {menuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
        </svg>
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="bg-bg-secondary border-border absolute top-full right-0 left-0 z-50 border-b sm:hidden">
          <div className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`border-l-2 px-4 py-3 text-sm transition-colors ${
                  isActive(link.href)
                    ? "border-l-accent-blue bg-bg-primary text-accent-blue"
                    : "text-text-secondary hover:text-text-primary border-l-transparent"
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
