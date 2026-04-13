"use client";

import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import { useState } from "react";
import { products as initialProducts, Product } from "@/app/lib/data";

type FormData = {
  name: string;
  price: string;
  category: string;
  description: string;
};

type FormErrors = Partial<FormData>;

const productCategories = ["Ceramics", "Textiles", "Jewelry", "Woodwork"];

export default function ManageListingsPage() {
  const [products, setProducts] = useState<Product[]>(
    initialProducts.filter((p) => p.sellerId === "amara")
  );
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deletedId, setDeletedId] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({ name: "", price: "", category: "", description: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [successMessage, setSuccessMessage] = useState("");

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

  const handleEdit = (product: Product) => {
    setEditingId(product.id);
    setFormData({
      name: product.name,
      price: String(product.price),
      category: product.category,
      description: product.description,
    });
    setErrors({});
    setSuccessMessage("");
  };

  const handleSave = () => {
    if (!validate()) return;
    setProducts((prev) =>
      prev.map((p) =>
        p.id === editingId
          ? { ...p, name: formData.name, price: Number(formData.price), category: formData.category, description: formData.description }
          : p
      )
    );
    setEditingId(null);
    setSuccessMessage("Listing updated successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const handleDelete = (id: string) => {
    setDeletedId(id);
  };

  const confirmDelete = () => {
    setProducts((prev) => prev.filter((p) => p.id !== deletedId));
    setDeletedId(null);
    setSuccessMessage("Listing deleted successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const cancelDelete = () => setDeletedId(null);

  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--color-linen)" }}>

      <Navbar />

      {/* Header */}
      <section className="px-8 py-14 text-center" style={{ backgroundColor: "var(--color-espresso)" }}>
        <h1 style={{ fontFamily: "var(--font-display)", color: "var(--color-linen)" }} className="text-5xl font-normal mb-4">
          Manage Listings
        </h1>
        <p style={{ color: "var(--color-sand)", fontFamily: "var(--font-body)" }} className="text-base max-w-lg mx-auto">
          Edit or remove your handcrafted listings from the marketplace.
        </p>
      </section>

      {/* Content */}
      <section className="px-8 py-12 max-w-4xl mx-auto">

        {/* Success Message */}
        {successMessage && (
          <div
            className="mb-6 px-6 py-3 rounded-xl text-sm"
            style={{ backgroundColor: "var(--color-sage)", color: "var(--color-linen)", fontFamily: "var(--font-body)" }}
          >
            ✓ {successMessage}
          </div>
        )}

        {/* Add New Listing Button */}
        <div className="flex justify-between items-center mb-8">
          <p style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-sm">
            {products.length} {products.length === 1 ? "listing" : "listings"} found
          </p>
          <Link
            href="/listings/create"
            className="px-6 py-2 rounded-full text-sm hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "var(--color-espresso)", color: "var(--color-linen)", fontFamily: "var(--font-body)" }}
          >
            + Add New Listing
          </Link>
        </div>

        {/* Empty State */}
        {products.length === 0 && (
          <div className="text-center py-20">
            <p style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)" }} className="text-2xl mb-4">
              No listings yet
            </p>
            <p style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-sm mb-6">
              You have not created any product listings yet.
            </p>
            <Link
              href="/listings/create"
              className="px-8 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "var(--color-espresso)", color: "var(--color-linen)", fontFamily: "var(--font-body)" }}
            >
              Create Your First Listing
            </Link>
          </div>
        )}

        {/* Listings */}
        <div className="flex flex-col gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid var(--color-sand)", backgroundColor: "var(--color-linen)" }}
            >
              {/* Product Row */}
              {editingId !== product.id && (
                <div className="flex gap-4 items-start p-6">
                  <div
                    className="w-20 h-20 rounded-xl flex-shrink-0"
                    style={{ backgroundColor: "var(--color-terracotta)", opacity: 0.6 }}
                  />
                  <div className="flex-1">
                    <span
                      className="text-xs px-3 py-1 rounded-full"
                      style={{ backgroundColor: "var(--color-sand)", color: "var(--color-walnut)", fontFamily: "var(--font-body)" }}
                    >
                      {product.category}
                    </span>
                    <h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)" }} className="text-lg mt-2 mb-1">
                      {product.name}
                    </h2>
                    <p style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-sm mb-2">
                      {product.description.slice(0, 80)}...
                    </p>
                    <span style={{ color: "var(--color-espresso)", fontFamily: "var(--font-body)" }} className="font-medium text-sm">
                      ${product.price}.00
                    </span>
                  </div>
                  <div className="flex gap-3 flex-shrink-0">
                    <button
                      onClick={() => handleEdit(product)}
                      className="px-5 py-2 rounded-full text-sm hover:opacity-80 transition-opacity"
                      style={{ border: "1px solid var(--color-espresso)", color: "var(--color-espresso)", fontFamily: "var(--font-body)" }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="px-5 py-2 rounded-full text-sm hover:opacity-80 transition-opacity"
                      style={{ border: "1px solid var(--color-terracotta)", color: "var(--color-terracotta)", fontFamily: "var(--font-body)" }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}

              {/* Edit Form */}
              {editingId === product.id && (
                <div className="p-6" style={{ backgroundColor: "var(--color-sand)" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)" }} className="text-xl mb-6">
                    Edit Listing
                  </h3>

                  {/* Name */}
                  <div className="mb-4">
                    <label style={{ fontFamily: "var(--font-body)", color: "var(--color-espresso)" }} className="text-sm font-medium block mb-1">
                      Product Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                      style={{
                        border: `1px solid ${errors.name ? "var(--color-terracotta)" : "var(--color-sand)"}`,
                        backgroundColor: "var(--color-linen)",
                        color: "var(--color-espresso)",
                        fontFamily: "var(--font-body)",
                      }}
                    />
                    {errors.name && <p style={{ color: "var(--color-terracotta)", fontFamily: "var(--font-body)" }} className="text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <label style={{ fontFamily: "var(--font-body)", color: "var(--color-espresso)" }} className="text-sm font-medium block mb-1">
                      Price (USD)
                    </label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      min="0"
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                      style={{
                        border: `1px solid ${errors.price ? "var(--color-terracotta)" : "var(--color-sand)"}`,
                        backgroundColor: "var(--color-linen)",
                        color: "var(--color-espresso)",
                        fontFamily: "var(--font-body)",
                      }}
                    />
                    {errors.price && <p style={{ color: "var(--color-terracotta)", fontFamily: "var(--font-body)" }} className="text-xs mt-1">{errors.price}</p>}
                  </div>

                  {/* Category */}
                  <div className="mb-4">
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
                      {productCategories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                    {errors.category && <p style={{ color: "var(--color-terracotta)", fontFamily: "var(--font-body)" }} className="text-xs mt-1">{errors.category}</p>}
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <label style={{ fontFamily: "var(--font-body)", color: "var(--color-espresso)" }} className="text-sm font-medium block mb-1">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none resize-none"
                      style={{
                        border: `1px solid ${errors.description ? "var(--color-terracotta)" : "var(--color-sand)"}`,
                        backgroundColor: "var(--color-linen)",
                        color: "var(--color-espresso)",
                        fontFamily: "var(--font-body)",
                      }}
                    />
                    {errors.description && <p style={{ color: "var(--color-terracotta)", fontFamily: "var(--font-body)" }} className="text-xs mt-1">{errors.description}</p>}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button
                      onClick={handleSave}
                      className="px-8 py-2.5 rounded-full text-sm hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: "var(--color-espresso)", color: "var(--color-linen)", fontFamily: "var(--font-body)" }}
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="px-8 py-2.5 rounded-full text-sm hover:opacity-80 transition-opacity"
                      style={{ border: "1px solid var(--color-espresso)", color: "var(--color-espresso)", fontFamily: "var(--font-body)" }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Delete Confirmation Modal */}
      {deletedId && (
        <div
          className="fixed inset-0 flex items-center justify-center px-8"
          style={{ backgroundColor: "rgba(44, 26, 14, 0.6)" }}
        >
          <div
            className="w-full max-w-md p-8 rounded-2xl text-center"
            style={{ backgroundColor: "var(--color-linen)" }}
          >
            <h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)" }} className="text-2xl font-normal mb-3">
              Delete Listing?
            </h2>
            <p style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-sm mb-6 leading-relaxed">
              This action cannot be undone. The listing will be permanently removed from the marketplace.
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={confirmDelete}
                className="px-8 py-2.5 rounded-full text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "var(--color-terracotta)", color: "var(--color-linen)", fontFamily: "var(--font-body)" }}
              >
                Yes, Delete
              </button>
              <button
                onClick={cancelDelete}
                className="px-8 py-2.5 rounded-full text-sm hover:opacity-80 transition-opacity"
                style={{ border: "1px solid var(--color-espresso)", color: "var(--color-espresso)", fontFamily: "var(--font-body)" }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
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