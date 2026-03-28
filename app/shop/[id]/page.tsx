import Link from "next/link";
import { products } from "../../lib/data";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) return notFound();

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

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
          <span style={{ color: "var(--color-espresso)" }}>{product.name}</span>
        </p>
      </div>

      {/* Product Detail */}
      <section className="px-8 py-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Image Placeholder */}
        <div
          className="rounded-2xl w-full h-96"
          style={{ backgroundColor: "var(--color-terracotta)", opacity: 0.6 }}
        />

        {/* Info */}
        <div className="flex flex-col justify-center">
          <span
            className="text-xs px-3 py-1 rounded-full self-start mb-4"
            style={{ backgroundColor: "var(--color-sand)", color: "var(--color-walnut)", fontFamily: "var(--font-body)" }}
          >
            {product.category}
          </span>
          <h1 style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)" }} className="text-4xl font-normal mb-2">
            {product.name}
          </h1>
          <p style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-sm mb-1">
            by {product.seller}
          </p>
          <p style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-sm mb-6">
            ★ {product.rating} · {product.reviews} reviews
          </p>
          <p style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-base leading-relaxed mb-8">
            {product.description}
          </p>
          <div className="flex items-center justify-between mb-6">
            <span style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)" }} className="text-3xl">
              ${product.price}.00
            </span>
          </div>
          <Link
            href="#"
            className="text-center py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "var(--color-espresso)", color: "var(--color-linen)", fontFamily: "var(--font-body)" }}
          >
            Add to Cart
          </Link>
          <Link
            href="#"
            className="text-center py-3 rounded-full text-sm hover:opacity-75 transition-opacity mt-3"
            style={{ border: "1px solid var(--color-espresso)", color: "var(--color-espresso)", fontFamily: "var(--font-body)" }}
          >
            View Seller Profile
          </Link>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="px-8 py-12 max-w-5xl mx-auto">
        <h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)" }} className="text-2xl font-normal mb-6">
          Customer Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: "Sarah M.", rating: 5, comment: "Absolutely beautiful craftsmanship. Arrived well packaged and even better in person!" },
            { name: "James K.", rating: 4, comment: "Great quality and unique piece. Shipping was fast and communication was excellent." },
          ].map((review) => (
            <div
              key={review.name}
              className="p-5 rounded-2xl"
              style={{ backgroundColor: "var(--color-sand)", border: "1px solid var(--color-sand)" }}
            >
              <div className="flex justify-between items-center mb-2">
                <span style={{ fontFamily: "var(--font-body)", color: "var(--color-espresso)" }} className="font-medium text-sm">
                  {review.name}
                </span>
                <span style={{ color: "var(--color-terracotta)", fontFamily: "var(--font-body)" }} className="text-sm">
                  {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                </span>
              </div>
              <p style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-sm leading-relaxed">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="px-8 py-12" style={{ backgroundColor: "var(--color-sand)" }}>
          <h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)" }} className="text-2xl font-normal text-center mb-8">
            More from this Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedProducts.map((p) => (
              <Link
                key={p.id}
                href={`/shop/${p.id}`}
                className="rounded-2xl overflow-hidden hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "var(--color-linen)", border: "1px solid var(--color-sand)" }}
              >
                <div className="h-36 w-full" style={{ backgroundColor: "var(--color-terracotta)", opacity: 0.6 }} />
                <div className="p-4">
                  <h3 style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)" }} className="text-base mb-1">
                    {p.name}
                  </h3>
                  <p style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-xs mb-2">
                    by {p.seller}
                  </p>
                  <span style={{ color: "var(--color-espresso)", fontFamily: "var(--font-body)" }} className="text-sm font-medium">
                    ${p.price}.00
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

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