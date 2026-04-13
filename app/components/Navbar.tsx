"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Sellers", href: "#" },
  { label: "About", href: "#" },
  { label: "Reviews", href: "/reviews" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: "var(--color-espresso)" }} className="px-8 py-4">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <Link href="/" style={{ fontFamily: "var(--font-display)", color: "var(--color-linen)" }} className="text-2xl">
          Handcrafted Haven
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              style={{ color: "var(--color-sand)", fontFamily: "var(--font-body)" }}
              className="text-sm hover:opacity-75 transition-opacity"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/register"
            style={{ backgroundColor: "var(--color-terracotta)", color: "var(--color-espresso)", fontFamily: "var(--font-body)" }}
            className="text-sm px-4 py-1.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: "var(--color-linen)",
              transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: "var(--color-linen)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: "var(--color-linen)",
              transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 pt-6 pb-2">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: "var(--color-sand)", fontFamily: "var(--font-body)" }}
              className="text-sm hover:opacity-75 transition-opacity"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/register"
            onClick={() => setMenuOpen(false)}
            style={{ backgroundColor: "var(--color-terracotta)", color: "var(--color-espresso)", fontFamily: "var(--font-body)" }}
            className="text-sm px-4 py-2 rounded-full hover:opacity-90 transition-opacity text-center"
          >
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
}