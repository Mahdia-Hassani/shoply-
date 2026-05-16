import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Search, Sparkles } from "lucide-react";
import { products, categories } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shoply — Your Mini Online Shop" },
      { name: "description", content: "Browse curated products: shoes, bags, electronics and more at Shoply." },
      { property: "og:title", content: "Shoply — Your Mini Online Shop" },
      { property: "og:description", content: "Browse curated products at great prices." },
    ],
  }),
  component: Index,
});

function Index() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCat = category === "All" || p.category === category;
      const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase());
      return matchesCat && matchesQuery;
    });
  }, [query, category]);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/20 to-background">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            <Sparkles className="h-4 w-4" /> New arrivals every week
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
            Shop smart, live better.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Discover quality products handpicked for you. Free shipping on orders over $50.
          </p>
          <a href="#products" className="inline-block mt-6 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:opacity-90 transition-opacity">
            Shop Now
          </a>
        </div>
      </section>

      {/* Filter bar */}
      <section id="products" className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h2 className="text-2xl font-bold text-foreground">Our Products</h2>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                aria-label="Search products"
                className="w-full sm:w-64 rounded-md border bg-background pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              aria-label="Filter by category"
              className="rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
