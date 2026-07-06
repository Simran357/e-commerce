const FilterPanel = () => {
  return (
    <div className="mb-6 rounded-xl bg-white p-5 shadow">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {/* Category */}
        <select className="rounded-lg border p-2">
          <option>All Categories</option>
          <option>Electronics</option>
          <option>Books</option>
          <option>Clothing</option>
          <option>Home</option>
        </select>

        {/* Min Price */}
        <input
          type="number"
          placeholder="Min Price"
          className="rounded-lg border p-2"
        />

        {/* Max Price */}
        <input
          type="number"
          placeholder="Max Price"
          className="rounded-lg border p-2"
        />

        {/* Sort */}
        <select className="rounded-lg border p-2">
          <option>Sort By</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Name (A-Z)</option>
        </select>
      </div>
    </div>
  );
};

export default FilterPanel;