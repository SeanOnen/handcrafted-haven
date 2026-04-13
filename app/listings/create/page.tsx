"use client";

import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import { useState } from "react";
import { categories } from "@/app/lib/data";

type FormData = {
  name: string;
  price: string;
  category: string;
  description: string;
};

type FormErrors = Partial<FormData>;

export default function CreateListingPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    price: "",
    category: "",
    description: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Product name is required.";
    if (!formData.price.trim()) {
      newErrors.price = "Price is required.";
    } else if (isNaN(Number(formData.price)) || Number(formData.price) <= 0) {
      newErrors.price = "Please enter a valid price.";
    }
    if (!formData.category) newErrors.category = "Please select a category.";
    if (!formData.description.trim()) {
      newErrors.description = "Description is required.";
    } else if (formData.description.trim().length < 20) {
      newErrors.description = "Description must be at least 20 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = () => {
    if (validate()) {
      setSubmitted(true);
    }
  };

  const productCategories = categories.filter((c) => c !== "All");

  if (submitted) {
    return (
      <main className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--color-linen)" }}>

        <Navbar />

        {/* Success State */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 py-20 text-center">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
            style={{ backgroundColor: "var(--color-sage)" }}
          >
            <span style={{ color: "var(--color-linen)", fontSize: "2rem" }}>✓</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)" }} className="text-4xl font-normal mb-4">
            Listing Created!
          </h1>
          <p style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-base max-w-md mb-2 leading-relaxed">
            <strong>{formData.name}</strong> has been listed successfully in the <strong>{formData.category}</strong> category at <strong>${Number(formData.price).toFixed(2)}</strong>.
          </p>
          <p style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-base max-w-md mb-8 leading-relaxed">
            Your product is now visible to customers on Handcrafted Haven.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => { setSubmitted(false); setFormData({ name: "", price: "", category: "", description: "" }); }}
              className="px-8 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "var(--color-espresso)", color: "var(--color-linen)", fontFamily: "var(--font-body)" }}
            >
              Add Another Listing
            </button>
            <Link
              href="/shop"
              className="px-8 py-3 rounded-full text-sm hover:opacity-75 transition-opacity"
              style={{ border: "1px solid var(--color-espresso)", color: "var(--color-espresso)", fontFamily: "var(--font-body)" }}
            >
              Browse Shop
            </Link>
          </div>
        </div>

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

      {/* Header */}
      <section className="px-8 py-14 text-center" style={{ backgroundColor: "var(--color-espresso)" }}>
        <h1 style={{ fontFamily: "var(--font-display)", color: "var(--color-linen)" }} className="text-5xl font-normal mb-4">
          Create a Listing
        </h1>
        <p style={{ color: "var(--color-sand)", fontFamily: "var(--font-body)" }} className="text-base max-w-lg mx-auto">
          Fill in the details below to list your handcrafted item on Handcrafted Haven.
        </p>
      </section>

      {/* Form */}
      <section className="px-8 py-12 max-w-2xl mx-auto">
        <div className="p-8 rounded-2xl" style={{ backgroundColor: "var(--color-sand)" }}>

          {/* Product Name */}
          <div className="mb-5">
            <label style={{ fontFamily: "var(--font-body)", color: "var(--color-espresso)" }} className="text-sm font-medium block mb-1">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Hand-thrown Stoneware Vase"
              className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
              style={{
                border: `1px solid ${errors.name ? "var(--color-terracotta)" : "var(--color-sand)"}`,
                backgroundColor: "var(--color-linen)",
                color: "var(--color-espresso)",
                fontFamily: "var(--font-body)",
              }}
            />
            {errors.name && (
              <p style={{ color: "var(--color-terracotta)", fontFamily: "var(--font-body)" }} className="text-xs mt-1">
                {errors.name}
              </p>
            )}
          </div>

          {/* Price */}
          <div className="mb-5">
            <label style={{ fontFamily: "var(--font-body)", color: "var(--color-espresso)" }} className="text-sm font-medium block mb-1">
              Price (USD)
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="e.g. 48"
              min="0"
              className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
              style={{
                border: `1px solid ${errors.price ? "var(--color-terracotta)" : "var(--color-sand)"}`,
                backgroundColor: "var(--color-linen)",
                color: "var(--color-espresso)",
                fontFamily: "var(--font-body)",
              }}
            />
            {errors.price && (
              <p style={{ color: "var(--color-terracotta)", fontFamily: "var(--font-body)" }} className="text-xs mt-1">
                {errors.price}
              </p>
            )}
          </div>

          {/* Category */}
          <div className="mb-5">
            <label style={{ fontFamily: "var(--font-body)", color: "var(--color-espresso)" }} className="text-sm font-medium block mb-1">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
              style={{
                border: `1px solid ${errors.category ? "var(--color-terracotta)" : "var(--color-sand)"}`,
                backgroundColor: "var(--color-linen)",
                color: "var(--color-espresso)",
                fontFamily: "var(--font-body)",
              }}
            >
              <option value="">Select a category...</option>
              {productCategories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            {errors.category && (
              <p style={{ color: "var(--color-terracotta)", fontFamily: "var(--font-body)" }} className="text-xs mt-1">
                {errors.category}
              </p>
            )}
          </div>

          {/* Description */}
          <div className="mb-8">
            <label style={{ fontFamily: "var(--font-body)", color: "var(--color-espresso)" }} className="text-sm font-medium block mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your product — materials, dimensions, care instructions..."
              rows={5}
              className="w-full px-4 py-2.5 rounded-xl text-sm outline-none resize-none"
              style={{
                border: `1px solid ${errors.description ? "var(--color-terracotta)" : "var(--color-sand)"}`,
                backgroundColor: "var(--color-linen)",
                color: "var(--color-espresso)",
                fontFamily: "var(--font-body)",
              }}
            />
            {errors.description && (
              <p style={{ color: "var(--color-terracotta)", fontFamily: "var(--font-body)" }} className="text-xs mt-1">
                {errors.description}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="w-full py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
            style={{
              backgroundColor: "var(--color-espresso)",
              color: "var(--color-linen)",
              fontFamily: "var(--font-body)",
            }}
          >
            Publish Listing
          </button>

          <p style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-xs text-center mt-4">
            Want to see your existing listings?{" "}
            <Link href="/shop" style={{ color: "var(--color-espresso)" }} className="underline">
              Browse the shop
            </Link>
          </p>

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