import Link from "next/link";
import { products } from "./lib/data";

const categories = [
  { name: "Ceramics", color: "var(--color-terracotta)" },
  { name: "Textiles", color: "var(--color-walnut)" },
  { name: "Jewelry", color: "var(--color-sage)" },
  { name: "Woodwork", color: "var(--color-espresso)" },
];

const footerLinks = ["Privacy", "Terms", "Contact"];

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Sellers", href: "#" },
  { label: "About", href: "#" },
];

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--color-linen)", color: "var(--color-espresso)" }}>

      {/* Navbar */}
      <nav style={{ backgroundColor: "var(--color-espresso)" }} className="px-8 py-4 flex justify-between items-center">
        <span style={{ fontFamily: "var(--font-display)", color: "var(--color-linen)" }} className="text-2xl">
          Handcrafted Haven
        </span>
        <div className="flex gap-6 items-center">
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
            href="#"
            style={{ backgroundColor: "var(--color-terracotta)", color: "var(--color-espresso)", fontFamily: "var(--font-body)" }}
            className="text-sm px-4 py-1.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Sign In
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ backgroundColor: "var(--color-espresso)" }} className="px-8 py-24 flex flex-col items-center text-center">
        <span
          style={{ backgroundColor: "var(--color-terracotta)", color: "var(--color-espresso)", fontFamily: "var(--font-body)" }}
          className="text-xs px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase"
        >
          Handmade with love
        </span>
        <h1 style={{ fontFamily: "var(--font-display)", color: "var(--color-linen)" }} className="text-6xl font-normal mb-6 max-w-2xl leading-tight">
          Discover Unique Handcrafted Treasures
        </h1>
        <p style={{ color: "var(--color-sand)", fontFamily: "var(--font-body)" }} className="text-lg max-w-xl mb-10 leading-relaxed">
          Connect with talented artisans and find one-of-a-kind pieces made with care, passion, and skill.
        </p>
        <div className="flex gap-4">
          <Link
            href="/shop"
            style={{ backgroundColor: "var(--color-terracotta)", color: "var(--color-espresso)", fontFamily: "var(--font-body)" }}
            className="px-8 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
          >
            Shop Now
          </Link>
          <Link
            href="/register"
            style={{ border: "1px solid var(--color-sand)", color: "var(--color-sand)", fontFamily: "var(--font-body)" }}
            className="px-8 py-3 rounded-full text-sm hover:opacity-75 transition-opacity"
          >
            Become a Seller
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="px-8 py-16">
        <h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)" }} className="text-3xl font-normal text-center mb-10">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href="/shop"
              className="rounded-2xl flex items-end p-5 h-36 hover:opacity-90 transition-opacity"
              style={{ backgroundColor: cat.color }}
            >
              <span style={{ fontFamily: "var(--font-display)", color: "var(--color-linen)" }} className="text-xl">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-8 py-16" style={{ backgroundColor: "var(--color-sand)" }}>
        <h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)" }} className="text-3xl font-normal text-center mb-10">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {featured.map((product) => (
            <div key={product.id} className="rounded-2xl overflow-hidden" style={{ backgroundColor: "var(--color-linen)" }}>
              <div className="h-48 w-full" style={{ backgroundColor: "var(--color-terracotta)", opacity: 0.6 }} />
              <div className="p-5">
                <span
                  className="text-xs px-3 py-1 rounded-full"
                  style={{ backgroundColor: "var(--color-sand)", color: "var(--color-walnut)", fontFamily: "var(--font-body)" }}
                >
                  {product.category}
                </span>
                <h3 style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)" }} className="text-lg mt-3 mb-1">
                  {product.name}
                </h3>
                <p style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-sm mb-3">
                  by {product.seller}
                </p>
                <div className="flex justify-between items-center">
                  <span style={{ color: "var(--color-espresso)", fontFamily: "var(--font-body)" }} className="font-medium">
                    ${product.price}.00
                  </span>
                  <Link
                    href={`/shop/${product.id}`}
                    className="text-xs px-4 py-1.5 rounded-full hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "var(--color-espresso)", color: "var(--color-linen)", fontFamily: "var(--font-body)" }}
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Banner */}
      <section className="px-8 py-20 text-center" style={{ backgroundColor: "var(--color-sage)" }}>
        <h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-linen)" }} className="text-4xl font-normal mb-4">
          Are you an artisan?
        </h2>
        <p style={{ color: "var(--color-linen)", fontFamily: "var(--font-body)", opacity: 0.85 }} className="text-base mb-8 max-w-md mx-auto leading-relaxed">
          Join our growing community of makers. Set up your shop, share your story, and reach customers who value handcrafted quality.
        </p>
        <Link
          href="#"
          className="px-8 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "var(--color-linen)", color: "var(--color-sage)", fontFamily: "var(--font-body)" }}
        >
          Start Selling Today
        </Link>
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
          {footerLinks.map((link) => (
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