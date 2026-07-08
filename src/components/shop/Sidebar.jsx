export default function Sidebar({
  categories,
  selectedCats,
  onToggleCategory,
  priceMin,
  priceMax,
  maxPrice,
  onPriceChange,
}) {
  return (
    <aside className="col-lg-3">
      <div className="shop-filter">
        <h3 className="shop-filter-title">Categories</h3>
        <ul className="shop-filter-list list-unstyled mb-0">
          {categories.map((cat) => (
            <li key={cat}>
              <label className="shop-filter-check">
                <input
                  type="checkbox"
                  checked={selectedCats.includes(cat)}
                  onChange={() => onToggleCategory(cat)}
                />
                <span>{cat}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="shop-filter">
        <h3 className="shop-filter-title">Filter by Price</h3>
        <input
          type="range"
          className="shop-price-range"
          min={priceMin}
          max={priceMax}
          value={maxPrice}
          onChange={(e) => onPriceChange(Number(e.target.value))}
        />
        <div className="shop-price-values d-flex justify-content-between">
          <span>₹{priceMin}</span>
          <span>₹{maxPrice}</span>
        </div>
      </div>
    </aside>
  );
}
