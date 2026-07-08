import { useMemo, useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Sidebar from "../components/shop/Sidebar";
import Searchbar from "../components/shop/Searchbar";
import Product from "../components/shop/Product";
import ProductImg1 from "../assets/images/product/product2.webp";
import ProductImg2 from "../assets/images/product/product3.webp";
import ProductImg3 from "../assets/images/product/product4.webp";
import ProductImg4 from "../assets/images/product/product5.webp";
import ProductImg5 from "../assets/images/product/slide1.webp";
import ProductImg6 from "../assets/images/product/slide2.webp";

const allProducts = [
  { name: "Black Organic Tea", image: ProductImg1, oldPrice: 499, price: 349, category: "Tea", badge: "Sale", badgeType: "sale" },
  { name: "Loose Leaf Tea", image: ProductImg2, oldPrice: 599, price: 419, category: "Tea", badge: "30% Off", badgeType: "off" },
  { name: "Oolong Tea", image: ProductImg3, oldPrice: 450, price: 399, category: "Tea" },
  { name: "Ashwagandha Capsules", image: ProductImg4, oldPrice: 699, price: 549, category: "Supplements", badge: "Sale", badgeType: "sale" },
  { name: "Turmeric Powder", image: ProductImg5, oldPrice: 299, price: 249, category: "Powder", badge: "30% Off", badgeType: "off" },
  { name: "Triphala Churna", image: ProductImg6, oldPrice: 399, price: 329, category: "Powder" },
  { name: "Neem Oil", image: ProductImg1, oldPrice: 349, price: 279, category: "Oils" },
  { name: "Brahmi Capsules", image: ProductImg4, oldPrice: 599, price: 469, category: "Supplements" },
  { name: "Green Herbal Tea", image: ProductImg2, oldPrice: 449, price: 359, category: "Tea" },
  { name: "Shatavari Powder", image: ProductImg5, oldPrice: 379, price: 299, category: "Powder", badge: "Sale", badgeType: "sale" },
  { name: "Sesame Oil", image: ProductImg3, oldPrice: 329, price: 259, category: "Oils" },
  { name: "Giloy Capsules", image: ProductImg4, oldPrice: 549, price: 429, category: "Supplements" },
  { name: "Tulsi Tea", image: ProductImg1, oldPrice: 299, price: 229, category: "Tea", badge: "30% Off", badgeType: "off" },
  { name: "Amla Powder", image: ProductImg6, oldPrice: 259, price: 199, category: "Powder" },
  { name: "Coconut Oil", image: ProductImg2, oldPrice: 399, price: 319, category: "Oils" },
  { name: "Moringa Capsules", image: ProductImg4, oldPrice: 649, price: 499, category: "Supplements", badge: "Sale", badgeType: "sale" },
];

const categories = ["Tea", "Supplements", "Powder", "Oils"];
const PRICE_MIN = 0;
const PRICE_MAX = 700;
const PAGE_SIZE = 12;

const sortOptions = [
  { value: "default", label: "Default" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name", label: "Name: A to Z" },
];

export default function Shop() {
  const [selectedCats, setSelectedCats] = useState([]);
  const [maxPrice, setMaxPrice] = useState(PRICE_MAX);
  const [search, setSearch] = useState("");
  const [view, setView] = useState("grid");
  const [sortBy, setSortBy] = useState("default");
  const [page, setPage] = useState(1);

  const toggleCategory = (cat) => {
    setPage(1);
    setSelectedCats((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const filtered = useMemo(() => {
    const list = allProducts.filter((item) => {
      const matchCat = selectedCats.length === 0 || selectedCats.includes(item.category);
      const matchPrice = item.price <= maxPrice;
      const matchSearch = item.name.toLowerCase().includes(search.trim().toLowerCase());
      return matchCat && matchPrice && matchSearch;
    });

    if (sortBy === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") list.sort((a, b) => b.price - a.price);
    else if (sortBy === "name") list.sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [selectedCats, maxPrice, search, sortBy]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE) || 1;
  const currentPage = Math.min(page, totalPages);
  const products = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    <main className="shop-page">
      <Breadcrumb page="shop" />

      <div className="container py-5">
        <div className="row g-4 g-lg-5">
          <Sidebar
            categories={categories}
            selectedCats={selectedCats}
            onToggleCategory={toggleCategory}
            priceMin={PRICE_MIN}
            priceMax={PRICE_MAX}
            maxPrice={maxPrice}
            onPriceChange={(value) => {
              setMaxPrice(value);
              setPage(1);
            }}
          />

          <div className="col-lg-9">
            <Searchbar
              sortOptions={sortOptions}
              sortBy={sortBy}
              onSortChange={(value) => {
                setSortBy(value);
                setPage(1);
              }}
              search={search}
              onSearchChange={(value) => {
                setSearch(value);
                setPage(1);
              }}
              view={view}
              onViewChange={setView}
            />

            <div className={`row g-3 g-md-4 shop-grid shop-grid--${view}`}>
              {products.map((item) => (
                <div className={view === "grid" ? "col-6 col-lg-4" : "col-12"} key={item.name}>
                  <Product item={item} />
                </div>
              ))}

              {products.length === 0 && (
                <p className="shop-empty text-center py-5">
                  No products match your filters.
                </p>
              )}
            </div>

            <div className="shop-footer d-flex flex-wrap align-items-center justify-content-between gap-3 mt-4">
              <p className="shop-result-count mb-0">
                Showing {products.length} of {filtered.length} products
              </p>

              {totalPages > 1 && (
                <nav className="shop-pagination d-flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                    <button
                      type="button"
                      key={num}
                      className={num === currentPage ? "is-active" : ""}
                      onClick={() => setPage(num)}
                    >
                      {num}
                    </button>
                  ))}
                </nav>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
