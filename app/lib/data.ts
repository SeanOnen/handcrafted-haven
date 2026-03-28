export type Product = {
  id: string;
  name: string;
  seller: string;
  price: number;
  category: string;
  description: string;
  rating: number;
  reviews: number;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Hand-thrown Stoneware Vase",
    seller: "Amara",
    price: 48,
    category: "Ceramics",
    description: "A beautifully hand-thrown stoneware vase with a natural ash glaze. Each piece is unique and food safe.",
    rating: 4.8,
    reviews: 24,
  },
  {
    id: "2",
    name: "Woven Wall Tapestry",
    seller: "Leilani",
    price: 120,
    category: "Textiles",
    description: "Hand-woven wall tapestry using natural cotton and wool. Earthy tones inspired by the desert landscape.",
    rating: 4.9,
    reviews: 18,
  },
  {
    id: "3",
    name: "Reclaimed Wood Shelf",
    seller: "Marcus",
    price: 95,
    category: "Woodwork",
    description: "A rustic floating shelf crafted from reclaimed barn wood. Each shelf has its own unique grain and character.",
    rating: 4.7,
    reviews: 31,
  },
  {
    id: "4",
    name: "Silver Leaf Earrings",
    seller: "Priya",
    price: 35,
    category: "Jewelry",
    description: "Delicate hand-formed silver earrings inspired by autumn leaves. Lightweight and hypoallergenic.",
    rating: 5.0,
    reviews: 12,
  },
  {
    id: "5",
    name: "Macrame Plant Hanger",
    seller: "Leilani",
    price: 28,
    category: "Textiles",
    description: "Hand-knotted macrame plant hanger using natural cotton rope. Fits pots up to 6 inches in diameter.",
    rating: 4.6,
    reviews: 42,
  },
  {
    id: "6",
    name: "Speckled Ceramic Mug",
    seller: "Amara",
    price: 32,
    category: "Ceramics",
    description: "A chunky, hand-thrown ceramic mug with a speckled glaze. Holds 12oz and is dishwasher safe.",
    rating: 4.9,
    reviews: 56,
  },
  {
    id: "7",
    name: "Walnut Serving Board",
    seller: "Marcus",
    price: 65,
    category: "Woodwork",
    description: "A hand-finished walnut serving board with a juice groove. Food safe and treated with natural beeswax.",
    rating: 4.8,
    reviews: 29,
  },
  {
    id: "8",
    name: "Copper Bangle Bracelet",
    seller: "Priya",
    price: 42,
    category: "Jewelry",
    description: "Hand-hammered copper bangle bracelet with a brushed finish. Adjustable to fit most wrist sizes.",
    rating: 4.7,
    reviews: 15,
  },
];

export const categories = ["All", "Ceramics", "Textiles", "Jewelry", "Woodwork"];