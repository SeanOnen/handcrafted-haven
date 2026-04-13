import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/app/lib/data";

const allReviews = [
  { productId: "1", reviewer: "Sarah M.", rating: 5, comment: "Absolutely beautiful craftsmanship. Arrived well packaged and even better in person!" },
  { productId: "1", reviewer: "James K.", rating: 4, comment: "Great quality and unique piece. Shipping was fast and communication was excellent." },
  { productId: "2", reviewer: "Amelia T.", rating: 5, comment: "The tapestry is even more stunning in person. Perfect addition to my living room!" },
  { productId: "3", reviewer: "David R.", rating: 4, comment: "Solid craftsmanship. The wood grain is beautiful and it fits perfectly on my wall." },
  { productId: "4", reviewer: "Priya S.", rating: 5, comment: "Delicate and elegant. I get compliments every time I wear these earrings." },
  { productId: "5", reviewer: "Lena M.", rating: 5, comment: "Perfect for my plants! Great quality rope and easy to hang." },
  { productId: "6", reviewer: "Tom B.", rating: 4, comment: "Love this mug. The speckled glaze is gorgeous and it keeps my coffee warm." },
  { productId: "7", reviewer: "Nina W.", rating: 5, comment: "Beautiful serving board. The walnut grain is stunning and it's very well finished." },
  { productId: "8", reviewer: "Chris L.", rating: 4, comment: "Great bracelet. Fits perfectly and the copper finish is lovely." },
];

export default function ReviewsPage() {
  const averageRating = (allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length).toFixed(1);
  const fiveStars = allReviews.filter((r) => r.rating === 5).length;
  const fourStars = allReviews.filter((r) => r.rating === 4).length;

  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--color-linen)" }}>

      <Navbar />
     
      {/* Header */}
      <section className="px-8 py-14 text-center" style={{ backgroundColor: "var(--color-espresso)" }}>
        <h1 style={{ fontFamily: "var(--font-display)", color: "var(--color-linen)" }} className="text-5xl font-normal mb-4">
          Customer Reviews
        </h1>
        <p style={{ color: "var(--color-sand)", fontFamily: "var(--font-body)" }} className="text-base max-w-lg mx-auto">
          See what our customers are saying about their handcrafted purchases.
        </p>
      </section>

      {/* Stats */}
      <section className="px-8 py-12 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div
            className="p-6 rounded-2xl text-center"
            style={{ backgroundColor: "var(--color-sand)" }}
          >
            <p style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)" }} className="text-5xl font-normal mb-2">
              {averageRating}
            </p>
            <p style={{ color: "var(--color-terracotta)", fontFamily: "var(--font-body)" }} className="text-xl mb-1">
              ★★★★★
            </p>
            <p style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-sm">
              Average Rating
            </p>
          </div>
          <div
            className="p-6 rounded-2xl text-center"
            style={{ backgroundColor: "var(--color-sand)" }}
          >
            <p style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)" }} className="text-5xl font-normal mb-2">
              {allReviews.length}
            </p>
            <p style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-sm mt-7">
              Total Reviews
            </p>
          </div>
          <div
            className="p-6 rounded-2xl text-center"
            style={{ backgroundColor: "var(--color-sand)" }}
          >
            <p style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)" }} className="text-5xl font-normal mb-2">
              {fiveStars}
            </p>
            <p style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-sm mt-7">
              5-Star Reviews
            </p>
          </div>
        </div>

        {/* Rating Breakdown */}
        <div
          className="p-6 rounded-2xl mb-12"
          style={{ backgroundColor: "var(--color-sand)" }}
        >
          <h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)" }} className="text-xl font-normal mb-4">
            Rating Breakdown
          </h2>
          <div className="flex flex-col gap-3">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = allReviews.filter((r) => r.rating === star).length;
              const percentage = Math.round((count / allReviews.length) * 100);
              return (
                <div key={star} className="flex items-center gap-4">
                  <span style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-sm w-12">
                    {star} ★
                  </span>
                  <div className="flex-1 rounded-full h-2" style={{ backgroundColor: "var(--color-linen)" }}>
                    <div
                      className="h-2 rounded-full"
                      style={{ width: `${percentage}%`, backgroundColor: "var(--color-terracotta)" }}
                    />
                  </div>
                  <span style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-sm w-8">
                    {count}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Reviews List */}
        <h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-espresso)" }} className="text-2xl font-normal mb-6">
          All Reviews
        </h2>
        <div className="flex flex-col gap-6">
          {allReviews.map((review, index) => {
            const product = products.find((p) => p.id === review.productId);
            return (
              <div
                key={index}
                className="p-6 rounded-2xl flex gap-5 items-start"
                style={{ backgroundColor: "var(--color-sand)", border: "1px solid var(--color-sand)" }}
              >
                {/* Product Image */}
                {product && (
                  <Link href={`/shop/${product.id}`} className="flex-shrink-0">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>
                )}

                {/* Review Content */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <span style={{ fontFamily: "var(--font-body)", color: "var(--color-espresso)" }} className="font-medium text-sm">
                        {review.reviewer}
                      </span>
                      {product && (
                        <Link href={`/shop/${product.id}`}>
                          <p style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-xs hover:opacity-75">
                            on {product.name}
                          </p>
                        </Link>
                      )}
                    </div>
                    <span style={{ color: "var(--color-terracotta)", fontFamily: "var(--font-body)" }} className="text-sm">
                      {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                    </span>
                  </div>
                  <p style={{ color: "var(--color-walnut)", fontFamily: "var(--font-body)" }} className="text-sm leading-relaxed mt-2">
                    {review.comment}
                  </p>
                </div>
              </div>
            );
          })}
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