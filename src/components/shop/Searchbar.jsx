import { FiSearch, FiGrid, FiList } from "react-icons/fi";

export default function Searchbar({
  sortOptions,
  sortBy,
  onSortChange,
  search,
  onSearchChange,
  view,
  onViewChange,
}) {
  return (
    <div className="shop-toolbar">
      <select
        className="shop-sort"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
      >
        {sortOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <div className="shop-search">
        <FiSearch />
        <input
          type="search"
          placeholder="Search products..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="shop-view-toggle">
        <button
          type="button"
          className={view === "grid" ? "is-active" : ""}
          onClick={() => onViewChange("grid")}
          aria-label="Grid view"
        >
          <FiGrid />
        </button>
        <button
          type="button"
          className={view === "list" ? "is-active" : ""}
          onClick={() => onViewChange("list")}
          aria-label="List view"
        >
          <FiList />
        </button>
      </div>
    </div>
  );
}
