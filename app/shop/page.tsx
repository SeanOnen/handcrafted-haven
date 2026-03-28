"use client";

import Link from "next/link";
import { useState } from "react";
import { products, categories } from "../lib/data";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--color-linen)" }}>

      {/* Navbar */}
      <nav style={{ backgroundColor: "var(--color-espresso)" }} className="px-8 py-4 flex justify-between items-center">
        <Link href="/" style={{ fontFamily: "var(--font-display)", color: "var(--color-linen)" }} className="text-2xl">
          Handcrafted Haven
        </Link>
        <div className="flex gap-6 items-center">
          {["Shop", "Sellers", "About"].map((item) => (
            <Link
              key={item}
              href="#"
              style={{ color: "var(--color-sand)", fontFamily: "var(--font-body)" }}
              className="text-sm hover:opacity-75 transition-opacity"
            >
              {item}
            </Link>
          ))}
          <Link
            href="#"
            style={{ backgroundColor: "var(--color-terracotta)", color: "var(--color-espresso)", fontFamily: "var(--font-body)" }}
            className="text-sm px-4 py-1.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Sign In
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="px-8 py-14 text-center" style={{ backgroundColor: "var(--color-espresso)" }}>
        <h1 style={{ fontFamily: "var(--font-display)", color: "var(--color-linen)" }} className="text-5xl font-normal mb-4">
          Shop All Products
        </h1>
        <p style={{ color: "var(--color-sand)", fontFamily: "var(--font-body)" }} className="text-base max-w-lg mx-auto">
          Browse handcrafted items made with care by our community of artisans.
        </p>
      </section>

      {/* Filters */}
      <section className="px-8 py-8 flex justify-center gap-3 flex-wrap" style={{ borderBottom: "1px solid var(--color-sand)" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              backgroundColor: activeCategory === cat ? "var(--color-espresso)" : "transparent",
              color: activeCategory === cat ? "var(--color-linen)" : "var(--color-walnut)",
              border: `1px solid ${activeCategory === cat ? "var(--color-espresso)" : "var(--color-sand)"}`,
              fontFamily: "var(--font-body)",
            }}
            className="text-sm px-5 py-2 rounded-full transition-all hover:opacity-80"
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Product Grid */}
      <section className="px-8 py-12 max-w-6xl mx-auto">
        <p style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-sm mb-8">
          {filtered.length} {filtered.length === 1 ? "product" : "products"} found
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <Link
              key={product.id}
              href={`/shop/${product.id}`}
              className="rounded-2xl overflow-hidden hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "var(--color-linen)", border: "1px solid var(--color-sand)" }}
            >
              <div className="h-44 w-full" style={{ backgroundColor: "var(--color-terracotta)", opacity: 0.6 }} />
              <div className="p-4">
                <span
                  className="text-xs px-3 py-1 rounded-full"
                  style={{ backgroundColor: "var(--color-sand)", color: "var(--color-walnut)", fontFamily: "var(--font-body)" }}
                >
                  {product.category}
                </span>
                <h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)" }} className="text-base mt-3 mb-1">
                  {product.name}
                </h2>
                <p style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-xs mb-3">
                  by {product.seller}
                </p>
                <div className="flex justify-between items-center">
                  <span style={{ color: "var(--color-espresso)", fontFamily: "var(--font-body)" }} className="font-medium text-sm">
                    ${product.price}.00
                  </span>
                  <span style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-xs">
                    ★ {product.rating} ({product.reviews})
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-4" style={{ backgroundColor: "var(--color-espresso)" }}>
        <span style={{ fontFamily: "var(--font-display)", color: "var(--color-linen)" }} className="text-xl">
          Handcrafted Haven
        </span>
        <p style={{ color: "var(--color-sand)", fontFamily: "var(--font-body)" }} className="text-sm">
          &copy; 2026 Handcrafted Haven. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Privacy", "Terms", "Contact"].map((link) => (
            <Link
              key={link}
              href="#"
              style={{ color: "var(--color-sand)", fontFamily: "var(--font-body)" }}
              className="text-sm hover:opacity-75 transition-opacity"
            >
              {link}
            </Link>
          ))}
        </div>
      </footer>

    </main>
  );
}