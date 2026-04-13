"use client";

import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  location: string;
  specialty: string;
  bio: string;
};

type FormErrors = Partial<FormData>;

const specialties = ["Ceramics", "Textiles", "Jewelry", "Woodwork", "Painting", "Leather", "Glass", "Other"];

export default function RegisterPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    location: "",
    specialty: "",
    bio: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    if (!formData.location.trim()) newErrors.location = "Location is required.";
    if (!formData.specialty) newErrors.specialty = "Please select a specialty.";
    if (!formData.bio.trim()) {
      newErrors.bio = "Bio is required.";
    } else if (formData.bio.trim().length < 20) {
      newErrors.bio = "Bio must be at least 20 characters.";
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
            Welcome, {formData.name}!
          </h1>
          <p style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-base max-w-md mb-8 leading-relaxed">
            Your seller account has been created successfully. You can now set up your profile and start listing your handcrafted items.
          </p>
          <div className="flex gap-4">
            <Link
              href="/"
              className="px-8 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "var(--color-espresso)", color: "var(--color-linen)", fontFamily: "var(--font-body)" }}
            >
              Go to Homepage
            </Link>
            <Link
              href="/shop"
              className="px-8 py-3 rounded-full text-sm hover:opacity-75 transition-opacity"
              style={{ border: "1px solid var(--color-espresso)", color: "var(--color-espresso)", fontFamily: "var(--font-body)" }}
            >
              Browse Shop
            </Link>
          </div>
        </div>

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
          Become a Seller
        </h1>
        <p style={{ color: "var(--color-sand)", fontFamily: "var(--font-body)" }} className="text-base max-w-lg mx-auto">
          Join our community of artisans and start sharing your handcrafted creations with the world.
        </p>
      </section>

      {/* Form */}
      <section className="px-8 py-12 max-w-2xl mx-auto">
        <div
          className="p-8 rounded-2xl"
          style={{ backgroundColor: "var(--color-sand)" }}
        >

          {/* Name */}
          <div className="mb-5">
            <label style={{ fontFamily: "var(--font-body)", color: "var(--color-espresso)" }} className="text-sm font-medium block mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Amara Nwosu"
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

          {/* Email */}
          <div className="mb-5">
            <label style={{ fontFamily: "var(--font-body)", color: "var(--color-espresso)" }} className="text-sm font-medium block mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. amara@example.com"
              className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
              style={{
                border: `1px solid ${errors.email ? "var(--color-terracotta)" : "var(--color-sand)"}`,
                backgroundColor: "var(--color-linen)",
                color: "var(--color-espresso)",
                fontFamily: "var(--font-body)",
              }}
            />
            {errors.email && (
              <p style={{ color: "var(--color-terracotta)", fontFamily: "var(--font-body)" }} className="text-xs mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-5">
            <label style={{ fontFamily: "var(--font-body)", color: "var(--color-espresso)" }} className="text-sm font-medium block mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="At least 8 characters"
              className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
              style={{
                border: `1px solid ${errors.password ? "var(--color-terracotta)" : "var(--color-sand)"}`,
                backgroundColor: "var(--color-linen)",
                color: "var(--color-espresso)",
                fontFamily: "var(--font-body)",
              }}
            />
            {errors.password && (
              <p style={{ color: "var(--color-terracotta)", fontFamily: "var(--font-body)" }} className="text-xs mt-1">
                {errors.password}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-5">
            <label style={{ fontFamily: "var(--font-body)", color: "var(--color-espresso)" }} className="text-sm font-medium block mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Repeat your password"
              className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
              style={{
                border: `1px solid ${errors.confirmPassword ? "var(--color-terracotta)" : "var(--color-sand)"}`,
                backgroundColor: "var(--color-linen)",
                color: "var(--color-espresso)",
                fontFamily: "var(--font-body)",
              }}
            />
            {errors.confirmPassword && (
              <p style={{ color: "var(--color-terracotta)", fontFamily: "var(--font-body)" }} className="text-xs mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Location */}
          <div className="mb-5">
            <label style={{ fontFamily: "var(--font-body)", color: "var(--color-espresso)" }} className="text-sm font-medium block mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Nairobi, Kenya"
              className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
              style={{
                border: `1px solid ${errors.location ? "var(--color-terracotta)" : "var(--color-sand)"}`,
                backgroundColor: "var(--color-linen)",
                color: "var(--color-espresso)",
                fontFamily: "var(--font-body)",
              }}
            />
            {errors.location && (
              <p style={{ color: "var(--color-terracotta)", fontFamily: "var(--font-body)" }} className="text-xs mt-1">
                {errors.location}
              </p>
            )}
          </div>

          {/* Specialty */}
          <div className="mb-5">
            <label style={{ fontFamily: "var(--font-body)", color: "var(--color-espresso)" }} className="text-sm font-medium block mb-1">
              Specialty
            </label>
            <select
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
              style={{
                border: `1px solid ${errors.specialty ? "var(--color-terracotta)" : "var(--color-sand)"}`,
                backgroundColor: "var(--color-linen)",
                color: "var(--color-espresso)",
                fontFamily: "var(--font-body)",
              }}
            >
              <option value="">Select your craft...</option>
              {specialties.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            {errors.specialty && (
              <p style={{ color: "var(--color-terracotta)", fontFamily: "var(--font-body)" }} className="text-xs mt-1">
                {errors.specialty}
              </p>
            )}
          </div>

          {/* Bio */}
          <div className="mb-8">
            <label style={{ fontFamily: "var(--font-body)", color: "var(--color-espresso)" }} className="text-sm font-medium block mb-1">
              Bio
            </label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Tell customers about yourself and your craft..."
              rows={4}
              className="w-full px-4 py-2.5 rounded-xl text-sm outline-none resize-none"
              style={{
                border: `1px solid ${errors.bio ? "var(--color-terracotta)" : "var(--color-sand)"}`,
                backgroundColor: "var(--color-linen)",
                color: "var(--color-espresso)",
                fontFamily: "var(--font-body)",
              }}
            />
            {errors.bio && (
              <p style={{ color: "var(--color-terracotta)", fontFamily: "var(--font-body)" }} className="text-xs mt-1">
                {errors.bio}
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
            Create Seller Account
          </button>

          <p style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-xs text-center mt-4">
            Already have an account?{" "}
            <Link href="#" style={{ color: "var(--color-espresso)" }} className="underline">
              Sign in
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