"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-[#FCFCFC]/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between">
        <a
          href="#home"
          className="text-[15px] font-semibold tracking-tight text-foreground"
        >
          Muhamad Rezka Al Anshori
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[14px] font-medium text-muted transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href="#contact" className={buttonVariants({ size: "sm" })}>
            Contact Me
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden border-b border-border bg-surface md:hidden"
          >
            <ul className="section-container flex flex-col gap-1 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-foreground hover:bg-[#F3F4F6]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="px-3 pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className={buttonVariants({ size: "sm", className: "w-full" })}
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
