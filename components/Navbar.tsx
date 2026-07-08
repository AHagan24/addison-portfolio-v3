"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { AnimatedThemeToggle } from "@/components/ui/animated-theme-toggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled && "border-b border-white/10 bg-black/60 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <a
          href="#home"
          onClick={() => setActive("#home")}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-base font-semibold tracking-tight text-white"
        >
          AH
        </a>

        <nav className="flex items-center gap-6 sm:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
              className={cn(
                "relative pb-2 text-sm font-medium transition",
                active === link.href
                  ? "text-white"
                  : "text-neutral-300 hover:text-white"
              )}
            >
              {link.label}
              {active === link.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-0 -bottom-0.5 mx-auto h-0.5 w-4 rounded-full bg-white"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
          <AnimatedThemeToggle />
        </nav>
      </div>
    </header>
  );
}
