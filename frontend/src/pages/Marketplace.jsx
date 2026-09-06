import { Search, SlidersHorizontal } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { BottomNavigation } from "../components/shop/BottomNavigation";
import { ShopHero } from "../components/shop/ShopHero";
import { ShopTabs } from "../components/shop/ShopTabs";
import { ProductCard } from "../components/marketplace/ProductCard";
import { getProducts } from "../services/marketplaceApi";

export function Marketplace() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const categories = [
    "All",
    ...Array.from(
      new Set(products.map((product) => product.category))
    ),
  ];

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        category === "All" ||
        product.category === category;

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(query.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [products, query, category]);

  return (
    <div className="app-shell">

      <ShopHero />

      <main className="shop-content marketplace-content">

        <ShopTabs />

        {/* Search */}
        <div className="search-box">
          <Search size={24} />

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
          />

          <SlidersHorizontal size={21} />
        </div>

        {/* Heading */}
        <div className="marketplace-heading">
          <div>
            <h2>1Fi Marketplace</h2>

            <p>
              Shop now. Pay later with no-cost EMIs.
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="category-row">

          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={
                category === item
                  ? "category active"
                  : "category"
              }
            >
              {item}
            </button>
          ))}

        </div>

        {/* Products */}
        <div className="product-grid">

          {filtered.length > 0 ? (
            filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          ) : (
            <div className="empty-state">
              <h3>No products found</h3>

              <p>
                Try searching for something else.
              </p>
            </div>
          )}

        </div>

      </main>

      <BottomNavigation />

    </div>
  );
}