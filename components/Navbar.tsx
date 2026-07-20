"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Personal Portfolios" },
  { href: "/pricing", label: "Pricing" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-xl">
      <nav
        className="container-site flex h-20 items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="text-xl font-bold tracking-[-0.04em]"
          onClick={() => setOpen(false)}
        >
          JW<span className="text-accent">Sites</span>
        </Link>

        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : !link.href.includes("#") && pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition hover:text-accent ${
                  active ? "text-accent" : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <Button href="/contact">Free Consultation</Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-full border border-line p-2.5 text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-white px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`border-b border-line py-3.5 text-base font-medium ${
                  pathname === link.href ? "text-accent" : "text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" className="mt-5" arrow>
              Free Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
