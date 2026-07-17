"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteBasePath } from "@/lib/site-paths";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/principles/", label: "Principles" },
  { href: "/platform/", label: "Platform" },
  { href: "/evidence/", label: "Evidence" },
  { href: "/act/", label: "Act" },
  { href: "/voices/", label: "Voices" },
  { href: "/methods/", label: "Methods" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPath = siteBasePath && pathname.startsWith(siteBasePath)
    ? pathname.slice(siteBasePath.length) || "/"
    : pathname;

  const isActive = (href: string) =>
    href === "/" ? currentPath === "/" : currentPath.startsWith(href.replace(/\/$/, ""));

  return (
    <>
      <div className="working-bar" role="status">
        <span>TEMPORARY PUBLIC WORKING PREVIEW</span>
        <Link href="/status/">Proposed organization — status not established</Link>
      </div>
      <header className="site-header">
        <div className="header-inner">
          <Link className="wordmark" href="/" aria-label="RINO home" onClick={() => setMenuOpen(false)}>
            <span className="wordmark-seal" aria-hidden="true">R</span>
            <span className="wordmark-type">RINO</span>
            <span className="wordmark-note">proposed party</span>
          </Link>
          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true">{menuOpen ? "Close" : "Menu"}</span>
            <span className="sr-only">Toggle primary navigation</span>
          </button>
          <nav id="primary-navigation" className={menuOpen ? "primary-nav is-open" : "primary-nav"} aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
