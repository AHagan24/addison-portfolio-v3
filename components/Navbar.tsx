"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-90px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavigate = (href: string) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        (scrolled || menuOpen) &&
          "border-b border-white/10 bg-black/60 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8">
        <a
          href="#home"
          onClick={() => handleNavigate("#home")}
          aria-label="Addison Hagan — home"
          className="shrink-0"
        >
          <Image
            src="/logo.png"
            alt="Addison Hagan"
            width={879}
            height={323}
            priority
            className="h-8 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-6 sm:flex sm:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNavigate(link.href)}
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
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white transition hover:bg-white/5 sm:hidden"
        >
          {menuOpen ? (
            <X aria-hidden="true" className="h-4 w-4" />
          ) : (
            <Menu aria-hidden="true" className="h-4 w-4" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="border-t border-white/10 bg-black/90 backdrop-blur-md sm:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavigate(link.href)}
                  className={cn(
                    "rounded-md px-2 py-2.5 text-sm font-medium transition",
                    active === link.href
                      ? "text-white"
                      : "text-neutral-300 hover:text-white"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
