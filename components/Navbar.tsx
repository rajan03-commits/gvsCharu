"use client";

import { useState } from "react";
import { links } from "@/app/lib/link";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-border bg-background">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4"
      >
        <Link
          href="/"
          className="max-w-40 text-lg font-bold leading-tight text-foreground"
        >
          Gramin Vikas Samiti Charu
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
          className="rounded-md border border-border px-3 py-2 text-foreground xl:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div
          className={`${isOpen ? "flex" : "hidden"} w-full flex-col gap-1 xl:flex xl:w-auto xl:flex-row xl:items-center xl:gap-x-2`}
        >
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`whitespace-nowrap rounded-md px-3 py-2 transition-colors ${
                  isActive
                    ? "bg-surface font-semibold text-foreground"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/donate"
            onClick={() => setIsOpen(false)}
            className="whitespace-nowrap rounded-md bg-primary px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Donate Now
          </Link>
        </div>
      </nav>
    </header>
  );
}