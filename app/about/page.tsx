import Navbar from "@/app/components/Navbar";
import Link from "next/link";

const values = [
  {
    title: "Authenticity",
    description: "Every item on Handcrafted Haven is genuinely handmade. We verify our sellers and their craft to ensure customers always receive authentic handcrafted goods.",
  },
  {
    title: "Community",
    description: "We believe in the power of community. By connecting artisans with customers who appreciate their work, we help sustain traditional crafts and support local economies.",
  },
  {
    title: "Sustainability",
    description: "We encourage our sellers to use sustainable materials and ethical practices, helping reduce the environmental impact of consumption.",
  },
  {
    title: "Quality",
    description: "Handcrafted items are made with care and attention to detail that mass-produced goods simply cannot match. We celebrate that difference.",
  },
];

const team = [
  { name: "Sean", role: "Co-Founder & Developer" },
  { name: "Glory", role: "Co-Founder & Developer" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--color-linen)" }}>

      <Navbar />

      {/* Hero */}
      <section className="px-8 py-24 text-center" style={{ backgroundColor: "var(--color-espresso)" }}>
        <h1 style={{ fontFamily: "var(--font-display)", color: "var(--color-linen)" }} className="text-5xl font-normal mb-6 max-w-2xl mx-auto leading-tight">
          Connecting Artisans with the World
        </h1>
        <p style={{ color: "var(--color-sand)", fontFamily: "var(--font-body)" }} className="text-base max-w-xl mx-auto leading-relaxed">
          Handcrafted Haven was born from a simple belief — that handmade goods carry a story, a soul, and a connection between maker and owner that no factory can replicate.
        </p>
      </section>

      {/* Mission */}
      <section className="px-8 py-16 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)" }} className="text-3xl font-normal mb-4">
              Our Mission
            </h2>
            <p style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-base leading-relaxed mb-4">
              We exist to give talented artisans a platform to share their work with a global audience, while helping conscious consumers find unique, meaningful products.
            </p>
            <p style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-base leading-relaxed">
              From hand-thrown ceramics to woven textiles, reclaimed wood furniture to handcrafted jewelry — every item tells the story of the person who made it.
            </p>
          </div>
          <div
            className="rounded-2xl p-8 text-center"
            style={{ backgroundColor: "var(--color-sand)" }}
          >
            <p style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)" }} className="text-6xl font-normal mb-2">
              4
            </p>
            <p style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-sm mb-6">
              Artisans on the platform
            </p>
            <p style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)" }} className="text-6xl font-normal mb-2">
              8
            </p>
            <p style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-sm mb-6">
              Handcrafted products listed
            </p>
            <p style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)" }} className="text-6xl font-normal mb-2">
              9
            </p>
            <p style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-sm">
              Customer reviews
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-8 py-16" style={{ backgroundColor: "var(--color-sand)" }}>
        <h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)" }} className="text-3xl font-normal text-center mb-10">
          What We Stand For
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {values.map((value) => (
            <div
              key={value.title}
              className="p-6 rounded-2xl"
              style={{ backgroundColor: "var(--color-linen)", border: "1px solid var(--color-sand)" }}
            >
              <h3 style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)" }} className="text-xl font-normal mb-3">
                {value.title}
              </h3>
              <p style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="px-8 py-16 max-w-4xl mx-auto">
        <h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)" }} className="text-3xl font-normal text-center mb-10">
          The Team
        </h2>
        <div className="flex gap-6 justify-center flex-wrap">
          {team.map((member) => (
            <div
              key={member.name}
              className="p-8 rounded-2xl text-center min-w-48"
              style={{ backgroundColor: "var(--color-sand)" }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "var(--color-terracotta)" }}
              >
                <span style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)", fontSize: "1.5rem" }}>
                  {member.name.charAt(0)}
                </span>
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)" }} className="text-xl font-normal mb-1">
                {member.name}
              </h3>
              <p style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-sm">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-20 text-center" style={{ backgroundColor: "var(--color-espresso)" }}>
        <h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-linen)" }} className="text-4xl font-normal mb-4">
          Ready to explore?
        </h2>
        <p style={{ color: "var(--color-sand)", fontFamily: "var(--font-body)", opacity: 0.85 }} className="text-base mb-8 max-w-md mx-auto leading-relaxed">
          Browse our collection of handcrafted items or join as a seller and share your craft with the world.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/shop"
            className="px-8 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "var(--color-terracotta)", color: "var(--color-espresso)", fontFamily: "var(--font-body)" }}
          >
            Shop Now
          </Link>
          <Link
            href="/register"
            className="px-8 py-3 rounded-full text-sm hover:opacity-75 transition-opacity"
            style={{ border: "1px solid var(--color-sand)", color: "var(--color-sand)", fontFamily: "var(--font-body)" }}
          >
            Become a Seller
          </Link>
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