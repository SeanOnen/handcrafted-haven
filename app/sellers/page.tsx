import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { sellers } from "@/app/lib/data";

export default function SellersPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--color-linen)" }}>

      <Navbar />

      {/* Header */}
      <section className="px-8 py-14 text-center" style={{ backgroundColor: "var(--color-espresso)" }}>
        <h1 style={{ fontFamily: "var(--font-display)", color: "var(--color-linen)" }} className="text-5xl font-normal mb-4">
          Meet Our Artisans
        </h1>
        <p style={{ color: "var(--color-sand)", fontFamily: "var(--font-body)" }} className="text-base max-w-lg mx-auto">
          Discover the talented makers behind every handcrafted item on Handcrafted Haven.
        </p>
      </section>

      {/* Sellers Grid */}
      <section className="px-8 py-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sellers.map((seller) => (
            <Link
              key={seller.id}
              href={`/sellers/${seller.id}`}
              className="rounded-2xl overflow-hidden hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "var(--color-sand)", border: "1px solid var(--color-sand)" }}
            >
              <div className="p-6 flex gap-5 items-start">

                {/* Avatar */}
                <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={seller.image}
                    alt={seller.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)" }} className="text-2xl font-normal">
                      {seller.name}
                    </h2>
                    <span
                      className="text-xs px-3 py-1 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "var(--color-terracotta)", color: "var(--color-espresso)", fontFamily: "var(--font-body)" }}
                    >
                      {seller.specialty}
                    </span>
                  </div>
                  <p style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-xs mb-3">
                    {seller.location} · Member since {seller.memberSince}
                  </p>
                  <p style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-sm leading-relaxed mb-4">
                    {seller.bio.slice(0, 100)}...
                  </p>
                  <div className="flex gap-6">
                    <div>
                      <p style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)" }} className="text-xl">
                        {seller.totalSales}
                      </p>
                      <p style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-xs">
                        Sales
                      </p>
                    </div>
                    <div>
                      <p style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)" }} className="text-xl">
                        {seller.rating}
                      </p>
                      <p style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-xs">
                        Rating
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-20 text-center" style={{ backgroundColor: "var(--color-sage)" }}>
        <h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-linen)" }} className="text-4xl font-normal mb-4">
          Want to join them?
        </h2>
        <p style={{ color: "var(--color-linen)", fontFamily: "var(--font-body)", opacity: 0.85 }} className="text-base mb-8 max-w-md mx-auto leading-relaxed">
          Start your seller journey today and share your handcrafted creations with customers who truly appreciate them.
        </p>
        <Link
          href="/register"
          className="px-8 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "var(--color-linen)", color: "var(--color-sage)", fontFamily: "var(--font-body)" }}
        >
          Become a Seller
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