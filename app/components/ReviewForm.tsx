"use client";

import { useState } from "react";

type Review = {
  name: string;
  rating: number;
  comment: string;
};

const initialReviews: Review[] = [
  { name: "Sarah M.", rating: 5, comment: "Absolutely beautiful craftsmanship. Arrived well packaged and even better in person!" },
  { name: "James K.", rating: 4, comment: "Great quality and unique piece. Shipping was fast and communication was excellent." },
];

export default function ReviewForm() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!name.trim() || !comment.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    setReviews([...reviews, { name, rating, comment }]);
    setName("");
    setRating(5);
    setComment("");
    setSubmitted(true);
    setError("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  const averageRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section className="px-8 py-12 max-w-5xl mx-auto">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)" }} className="text-2xl font-normal">
          Customer Reviews
        </h2>
        <span style={{ fontFamily: "var(--font-body)", color: "var(--color-walnut)" }} className="text-sm">
          ★ {averageRating} · {reviews.length} reviews
        </span>
      </div>

      {/* Existing Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl"
            style={{ backgroundColor: "var(--color-sand)" }}
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

      {/* Review Form */}
      <div
        className="p-8 rounded-2xl"
        style={{ backgroundColor: "var(--color-sand)" }}
      >
        <h3 style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)" }} className="text-xl font-normal mb-6">
          Leave a Review
        </h3>

        {/* Name */}
        <div className="mb-4">
          <label style={{ fontFamily: "var(--font-body)", color: "var(--color-walnut)" }} className="text-sm block mb-1">
            Your Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Jane D."
            className="w-full px-4 py-2 rounded-xl text-sm outline-none"
            style={{
              border: "1px solid var(--color-sand)",
              backgroundColor: "var(--color-linen)",
              color: "var(--color-espresso)",
              fontFamily: "var(--font-body)",
            }}
          />
        </div>

        {/* Rating */}
        <div className="mb-4">
          <label style={{ fontFamily: "var(--font-body)", color: "var(--color-walnut)" }} className="text-sm block mb-2">
            Rating
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                style={{
                  color: star <= rating ? "var(--color-terracotta)" : "var(--color-sand)",
                  fontSize: "1.5rem",
                }}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        {/* Comment */}
        <div className="mb-6">
          <label style={{ fontFamily: "var(--font-body)", color: "var(--color-walnut)" }} className="text-sm block mb-1">
            Your Review
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your experience with this product..."
            rows={4}
            className="w-full px-4 py-2 rounded-xl text-sm outline-none resize-none"
            style={{
              border: "1px solid var(--color-sand)",
              backgroundColor: "var(--color-linen)",
              color: "var(--color-espresso)",
              fontFamily: "var(--font-body)",
            }}
          />
        </div>

        {/* Error */}
        {error && (
          <p style={{ color: "var(--color-terracotta)", fontFamily: "var(--font-body)" }} className="text-sm mb-4">
            {error}
          </p>
        )}

        {/* Success */}
        {submitted && (
          <p style={{ color: "var(--color-sage)", fontFamily: "var(--font-body)" }} className="text-sm mb-4">
            ✓ Your review has been submitted. Thank you!
          </p>
        )}

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="px-8 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
          style={{
            backgroundColor: "var(--color-espresso)",
            color: "var(--color-linen)",
            fontFamily: "var(--font-body)",
          }}
        >
          Submit Review
        </button>
      </div>
    </section>
  );
}