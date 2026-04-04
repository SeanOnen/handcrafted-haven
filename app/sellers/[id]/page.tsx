import Link from "next/link";
import { sellers, products } from "@/app/lib/data";
import { notFound } from "next/navigation";

export default async function SellerPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const seller = sellers.find((s) => s.id === id);

  if (!seller) return notFound();

  const sellerProducts = products.filter((p) => p.sellerId === seller.id);

  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--color-linen)" }}>

      {/* Navbar */}
      <nav style={{ backgroundColor: "var(--color-espresso)" }} className="px-8 py-4 flex justify-between items-center">
        <Link href="/" style={{ fontFamily: "var(--font-display)", color: "var(--color-linen)" }} className="text-2xl">
          Handcrafted Haven
        </Link>
        <div className="flex gap-6 items-center">
          {[
            { label: "Shop", href: "/shop" },
            { label: "Sellers", href: "#" },
            { label: "About", href: "#" },
          ].map((item) => (
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

      {/* Breadcrumb */}
      <div className="px-8 py-4 max-w-5xl mx-auto">
        <p style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-sm">
          <Link href="/" className="hover:opacity-75">Home</Link>
          {" / "}
          <Link href="/shop" className="hover:opacity-75">Shop</Link>
          {" / "}
          <span style={{ color: "var(--color-espresso)" }}>{seller.name}</span>
        </p>
      </div>

      {/* Seller Profile Header */}
      <section className="px-8 py-12" style={{ backgroundColor: "var(--color-espresso)" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center md:items-start">

          {/* Avatar */}
          <div
            className="w-28 h-28 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: "var(--color-terracotta)" }}
          >
            <span style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)", fontSize: "2.5rem" }}>
              {seller.name.charAt(0)}
            </span>
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 style={{ fontFamily: "var(--font-display)", color: "var(--color-linen)" }} className="text-4xl font-normal mb-2">
              {seller.name}
            </h1>
            <p style={{ color: "var(--color-sand)", fontFamily: "var(--font-body)" }} className="text-sm mb-4">
              {seller.location} · Member since {seller.memberSince}
            </p>
            <p style={{ color: "var(--color-sand)", fontFamily: "var(--font-body)" }} className="text-base leading-relaxed max-w-xl mb-6">
              {seller.bio}
            </p>
            <div className="flex gap-6 justify-center md:justify-start">
              <div className="text-center">
                <p style={{ fontFamily: "var(--font-display)", color: "var(--color-linen)" }} className="text-2xl">
                  {seller.totalSales}
                </p>
                <p style={{ color: "var(--color-sand)", fontFamily: "var(--font-body)" }} className="text-xs">
                  Sales
                </p>
              </div>
              <div className="text-center">
                <p style={{ fontFamily: "var(--font-display)", color: "var(--color-linen)" }} className="text-2xl">
                  {seller.rating}
                </p>
                <p style={{ color: "var(--color-sand)", fontFamily: "var(--font-body)" }} className="text-xs">
                  Rating
                </p>
              </div>
              <div className="text-center">
                <p style={{ fontFamily: "var(--font-display)", color: "var(--color-linen)" }} className="text-2xl">
                  {sellerProducts.length}
                </p>
                <p style={{ color: "var(--color-sand)", fontFamily: "var(--font-body)" }} className="text-xs">
                  Listings
                </p>
              </div>
            </div>
          </div>

          {/* Specialty Badge */}
          <div className="flex-shrink-0">
            <span
              className="text-xs px-4 py-2 rounded-full"
              style={{ backgroundColor: "var(--color-terracotta)", color: "var(--color-espresso)", fontFamily: "var(--font-body)" }}
            >
              {seller.specialty}
            </span>
          </div>

        </div>
      </section>

      {/* Seller Products */}
      <section className="px-8 py-12 max-w-5xl mx-auto">
        <h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)" }} className="text-2xl font-normal mb-8">
          {seller.name}&apos;s Listings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sellerProducts.map((product) => (
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
                <h3 style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)" }} className="text-base mt-3 mb-1">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center mt-3">
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