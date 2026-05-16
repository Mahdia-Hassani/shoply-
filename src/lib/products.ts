export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

export const products: Product[] = [
  {
    id: "p1",
    name: "Classic Sneakers",
    description: "Comfortable everyday sneakers with cushioned soles.",
    price: 59,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    category: "Shoes",
  },
  {
    id: "p2",
    name: "Leather Backpack",
    description: "Stylish and durable backpack for daily use.",
    price: 89,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    category: "Bags",
  },
  {
    id: "p3",
    name: "Wireless Headphones",
    description: "Premium sound with noise cancellation.",
    price: 129,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    category: "Electronics",
  },
  {
    id: "p4",
    name: "Smart Watch",
    description: "Track fitness, notifications, and more.",
    price: 199,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    category: "Electronics",
  },
  {
    id: "p5",
    name: "Sunglasses",
    description: "UV-protected stylish sunglasses.",
    price: 35,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    category: "Accessories",
  },
  {
    id: "p6",
    name: "Denim Jacket",
    description: "Classic denim jacket for all seasons.",
    price: 75,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
    category: "Clothing",
  },
  {
    id: "p7",
    name: "Coffee Mug",
    description: "Ceramic mug perfect for your morning coffee.",
    price: 12,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80",
    category: "Accessories",
  },
  {
    id: "p8",
    name: "Running Shoes",
    description: "Lightweight running shoes with great grip.",
    price: 89,
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&q=80",
    category: "Shoes",
  },
];

export const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];