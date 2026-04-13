export type Product = {
  id: string;
  name: string;
  seller: string;
  sellerId: string;
  price: number;
  category: string;
  description: string;
  rating: number;
  reviews: number;
  image: string;
};

export type Seller = {
  id: string;
  name: string;
  bio: string;
  location: string;
  memberSince: string;
  specialty: string;
  totalSales: number;
  rating: number;
  image: string;
};

export const sellers: Seller[] = [
  {
    id: "amara",
    name: "Amara",
    bio: "I have been working with clay for over 10 years, drawing inspiration from nature and traditional African pottery techniques. Each piece I create is a reflection of my heritage and my love for the earth.",
    location: "Accra, Ghana",
    memberSince: "2022",
    specialty: "Ceramics",
    totalSales: 80,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&q=80",
  },
  {
    id: "leilani",
    name: "Leilani",
    bio: "Weaving is my meditation. Growing up in Hawaii, I was surrounded by the art of textile making. I use natural fibers and earthy dyes to create pieces that bring warmth and texture to any space.",
    location: "Honolulu, Hawaii",
    memberSince: "2021",
    specialty: "Textiles",
    totalSales: 60,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80",
  },
  {
    id: "marcus",
    name: "Marcus",
    bio: "Every piece of wood tells a story. I source reclaimed and sustainably harvested wood to craft functional pieces that honor the material's natural history. Based in the Pacific Northwest.",
    location: "Portland, Oregon",
    memberSince: "2020",
    specialty: "Woodwork",
    totalSales: 60,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    id: "priya",
    name: "Priya",
    bio: "Jewelry is wearable art. Trained as a goldsmith in Jaipur, I now create contemporary pieces that blend traditional Indian craftsmanship with modern minimalist design.",
    location: "Jaipur, India",
    memberSince: "2023",
    specialty: "Jewelry",
    totalSales: 27,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Hand-thrown Stoneware Vase",
    seller: "Amara",
    sellerId: "amara",
    price: 48,
    category: "Ceramics",
    description: "A beautifully hand-thrown stoneware vase with a natural ash glaze. Each piece is unique and food safe.",
    rating: 4.8,
    reviews: 24,
    image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&q=80",
  },
  {
    id: "2",
    name: "Woven Wall Tapestry",
    seller: "Leilani",
    sellerId: "leilani",
    price: 120,
    category: "Textiles",
    description: "Hand-woven wall tapestry using natural cotton and wool. Earthy tones inspired by the desert landscape.",
    rating: 4.9,
    reviews: 18,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: "3",
    name: "Reclaimed Wood Shelf",
    seller: "Marcus",
    sellerId: "marcus",
    price: 95,
    category: "Woodwork",
    description: "A rustic floating shelf crafted from reclaimed barn wood. Each shelf has its own unique grain and character.",
    rating: 4.7,
    reviews: 31,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80",
  },
  {
    id: "4",
    name: "Silver Leaf Earrings",
    seller: "Priya",
    sellerId: "priya",
    price: 35,
    category: "Jewelry",
    description: "Delicate hand-formed silver earrings inspired by autumn leaves. Lightweight and hypoallergenic.",
    rating: 5.0,
    reviews: 12,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
  },
  {
    id: "5",
    name: "Macrame Plant Hanger",
    seller: "Leilani",
    sellerId: "leilani",
    price: 28,
    category: "Textiles",
    description: "Hand-knotted macrame plant hanger using natural cotton rope. Fits pots up to 6 inches in diameter.",
    rating: 4.6,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?w=600&q=80",
  },
  {
    id: "6",
    name: "Speckled Ceramic Mug",
    seller: "Amara",
    sellerId: "amara",
    price: 32,
    category: "Ceramics",
    description: "A chunky, hand-thrown ceramic mug with a speckled glaze. Holds 12oz and is dishwasher safe.",
    rating: 4.9,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80",
  },
  {
    id: "7",
    name: "Walnut Serving Board",
    seller: "Marcus",
    sellerId: "marcus",
    price: 65,
    category: "Woodwork",
    description: "A hand-finished walnut serving board with a juice groove. Food safe and treated with natural beeswax.",
    rating: 4.8,
    reviews: 29,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
  },
  {
    id: "8",
    name: "Copper Bangle Bracelet",
    seller: "Priya",
    sellerId: "priya",
    price: 42,
    category: "Jewelry",
    description: "Hand-hammered copper bangle bracelet with a brushed finish. Adjustable to fit most wrist sizes.",
    rating: 4.7,
    reviews: 15,
    image: "https://images.unsplash.com/photo-1573408301185-9519f94815b1?w=600&q=80",
  },
];

export const categories = ["All", "Ceramics", "Textiles", "Jewelry", "Woodwork"];