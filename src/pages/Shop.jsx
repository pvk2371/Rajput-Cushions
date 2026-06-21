import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  SlidersHorizontal,
  ArrowUpDown,
  Search,
  RotateCcw
} from "lucide-react";
import { mockProducts } from "../data/mockData";
import ProductCard from "../components/common/ProductCard";
import Breadcrumbs from "../components/common/Breadcrumbs";
export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchFilter = searchParams.get("search") || "";
  const categoryFilter = searchParams.get("category") || "All";
  const [selectedCategory, setSelectedCategory] = useState(categoryFilter);
  const [priceRange, setPriceRange] = useState(1e5);
  const [selectedColors, setSelectedColors] = useState([]);
  const [sortBy, setSortBy] = useState("Featured");
  const [currentPage, setCurrentPage] = useState(1);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const availableColors = [
    { name: "Warm Cream", hex: "#F7F4EF" },
    { name: "Charcoal Grey", hex: "#444444" },
    { name: "Mustard Yellow", hex: "#D6A429" },
    { name: "Saddle Leather Brown", hex: "#6E473B" },
    { name: "Slate Gray", hex: "#6D7175" },
    { name: "Royal Velvet Teal", hex: "#1E3E43" }
  ];
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSearchParams({ category, search: searchFilter });
    setCurrentPage(1);
  };
  const handleColorToggle = (colorName) => {
    setSelectedColors(
      (prev) => prev.includes(colorName) ? prev.filter((c) => c !== colorName) : [...prev, colorName]
    );
    setCurrentPage(1);
  };
  const handleClearFilters = () => {
    setSelectedCategory("All");
    setPriceRange(1e5);
    setSelectedColors([]);
    setSortBy("Featured");
    setSearchParams({});
    setCurrentPage(1);
  };
  const filteredProducts = useMemo(() => {
    return mockProducts.filter((product) => {
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesPrice = product.price <= priceRange;
      const matchesSearch = !searchFilter.trim() || product.title.toLowerCase().includes(searchFilter.toLowerCase()) || product.category.toLowerCase().includes(searchFilter.toLowerCase()) || product.description.toLowerCase().includes(searchFilter.toLowerCase());
      const matchesColor = selectedColors.length === 0 || product.colors.some((col) => selectedColors.includes(col.name));
      return matchesCategory && matchesPrice && matchesSearch && matchesColor;
    });
  }, [selectedCategory, priceRange, searchFilter, selectedColors]);
  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    if (sortBy === "Price: Low to High") {
      return list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "Price: High to Low") {
      return list.sort((a, b) => b.price - a.price);
    } else if (sortBy === "Highly Rated") {
      return list.sort((a, b) => b.rating - a.rating);
    }
    return list;
  }, [filteredProducts, sortBy]);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return sortedProducts.slice(start, start + itemsPerPage);
  }, [sortedProducts, currentPage]);
  const breadcrumbItems = [
    { label: "Shop Portal", url: "/shop" },
    ...selectedCategory !== "All" ? [{ label: selectedCategory }] : []
  ];
  return <div className="bg-cream min-h-screen">
      <Breadcrumbs items={breadcrumbItems} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        
        {
    /* SHOP MAIN ROW */
  }
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {
    /*=========================================
       A. SIDEBAR FILTERS (DESKTOP)
      =========================================*/
  }
          <aside className="hidden lg:block lg:col-span-3 bg-cream border border-border-custom p-6 rounded-xl space-y-8 sticky top-28 shadow-sm">
            
            {
    /* Filter title */
  }
            <div className="flex items-center justify-between pb-3 border-b border-border-custom">
              <span className="font-serif font-bold text-base text-dark-brown flex items-center gap-2">
                <SlidersHorizontal className="w-4.5 h-4.5 text-primary-gold" />
                Refine Selection
              </span>
              {(selectedCategory !== "All" || priceRange !== 1e5 || selectedColors.length > 0) && <button
    onClick={handleClearFilters}
    className="text-[10px] text-primary-gold hover:text-dark-brown font-sans font-medium uppercase tracking-wider flex items-center gap-1 transition-colors"
  >
                  <RotateCcw className="w-3 h-3" />
                  Reset
                </button>}
            </div>

            {
    /* Categories */
  }
            <div className="space-y-3">
              <h4 className="font-serif font-bold text-sm text-dark-brown">Showroom Segments</h4>
              <div className="flex flex-col gap-2">
                {["All", "Living Room", "Bedroom", "Dining Room", "Office", "Decor & Lighting"].map((cat) => <button
    key={cat}
    onClick={() => handleCategorySelect(cat)}
    className={`text-left text-xs py-1.5 px-3 rounded font-sans transition-all flex items-center justify-between ${selectedCategory === cat ? "bg-primary-gold text-cream font-medium" : "hover:bg-light-beige text-text-dark"}`}
  >
                    <span>{cat}</span>
                    <span className="text-[10px] opacity-70">
                      ({cat === "All" ? mockProducts.length : mockProducts.filter((u) => u.category === cat).length})
                    </span>
                  </button>)}
              </div>
            </div>

            {
    /* Price slider */
  }
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <h4 className="font-serif font-bold text-sm text-dark-brown">Price Threshold</h4>
                <span className="text-xs font-sans font-semibold text-primary-gold">
                  ≤ ₹{priceRange.toLocaleString("en-IN")}
                </span>
              </div>
              <input
    type="range"
    min="1000"
    max="100000"
    step="5000"
    value={priceRange}
    onChange={(e) => setPriceRange(Number(e.target.value))}
    className="w-full accent-primary-gold bg-light-beige h-1.5 rounded-lg appearance-none cursor-pointer"
  />
              <div className="flex justify-between text-[10px] text-text-gray font-sans">
                <span>₹1,000</span>
                <span>₹1,00,000</span>
              </div>
            </div>

            {
    /* Color Filters */
  }
            <div className="space-y-3">
              <h4 className="font-serif font-bold text-sm text-dark-brown">Aesthetic Colors</h4>
              <div className="flex flex-wrap gap-2.5">
                {availableColors.map((col) => {
    const isSelected = selectedColors.includes(col.name);
    return <button
      key={col.name}
      onClick={() => handleColorToggle(col.name)}
      className={`w-7 h-7 rounded-full border-2 transition-all relative flex items-center justify-center`}
      style={{
        backgroundColor: col.hex,
        borderColor: isSelected ? "#C28B2C" : "#E5E5E5"
      }}
      title={col.name}
    >
                      {isSelected && <span
      className="w-2 h-2 rounded-full"
      style={{ backgroundColor: col.hex === "#F7F4EF" ? "#2A211C" : "#F7F4EF" }}
    />}
                    </button>;
  })}
              </div>
            </div>

          </aside>


          {
    /*=========================================
       B. PRODUCTS SHOWCASE AREA (MAIN)
      =========================================*/
  }
          <main className="lg:col-span-9 flex flex-col gap-6">
            
            {
    /* 1. Header with details, Search indicator, Sorting control */
  }
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between pb-4 border-b border-border-custom">
              
              <div className="text-center md:text-left">
                <h2 className="font-serif font-bold text-xl md:text-2xl text-dark-brown">
                  {selectedCategory === "All" ? "Complete Selection" : `${selectedCategory} Collection`}
                </h2>
                <p className="text-xs text-text-gray font-sans mt-1">
                  Showing {sortedProducts.length} Premium luxury bespoke pieces
                </p>
              </div>

              {
    /* Action tools row */
  }
              <div className="flex flex-wrap items-center justify-center gap-3">
                
                {
    /* Search prompt banner indicator */
  }
                {searchFilter && <div className="bg-primary-gold/15 border border-primary-gold/30 text-primary-gold rounded px-3 py-1.5 text-xs font-sans flex items-center gap-1.5">
                    <Search className="w-3.5 h-3.5" />
                    <span>Search: "{searchFilter}"</span>
                    <button
    onClick={() => setSearchParams({ category: selectedCategory })}
    className="hover:text-dark-brown font-bold"
  >
                      ×
                    </button>
                  </div>}

                {
    /* Mobile Filter trigger */
  }
                <button
    onClick={() => setShowMobileSidebar(true)}
    className="lg:hidden flex items-center gap-1.5 bg-light-beige hover:bg-primary-gold hover:text-cream px-4 py-2.5 rounded text-xs font-sans font-medium border border-border-custom/50 transition-all text-dark-brown"
  >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>

                {
    /* Sort Option dropdown */
  }
                <div className="relative flex items-center gap-1.5 bg-light-beige px-3 py-2 rounded border border-border-custom/50">
                  <ArrowUpDown className="w-3.5 h-3.5 text-text-gray" />
                  <select
    value={sortBy}
    onChange={(e) => setSortBy(e.target.value)}
    className="bg-transparent text-xs font-sans text-dark-brown focus:outline-none cursor-pointer"
  >
                    <option value="Featured">Sort: Featured</option>
                    <option value="Price: Low to High">Price: Low to High</option>
                    <option value="Price: High to Low">Price: High to Low</option>
                    <option value="Highly Rated">Highly Rated</option>
                  </select>
                </div>

              </div>

            </div>

            {
    /* 2. Products matching selection */
  }
            {paginatedProducts.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedProducts.map((p) => <ProductCard key={p.id} product={p} />)}
              </div> : <div className="text-center py-20 bg-light-beige/30 border border-dashed border-border-custom rounded-2xl p-6">
                <SlidersHorizontal className="w-12 h-12 mx-auto text-primary-gold/40 mb-3" />
                <h3 className="font-serif font-bold text-lg text-dark-brown">No products perfectly match filters</h3>
                <p className="text-xs text-text-gray font-sans mt-1 max-w-sm mx-auto">
                  Expand your pricing bracket threshold or toggle other active category selections inside parameters.
                </p>
                <button
    onClick={handleClearFilters}
    className="mt-6 bg-dark-brown hover:bg-primary-gold text-cream hover:text-dark-brown font-xs font-serif font-medium px-6 py-2.5 rounded transition-all"
  >
                  Restore Clear Parameters
                </button>
              </div>}

            {
    /* 3. Shop list indicators (Pagination) */
  }
            {totalPages > 1 && <div className="flex items-center justify-center gap-2.5 mt-8 border-t border-border-custom/50 pt-6">
                {Array.from({ length: totalPages }).map((_, i) => <button
    key={i}
    onClick={() => {
      setCurrentPage(i + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }}
    className={`w-9 h-9 rounded font-sans text-xs flex items-center justify-center transition-all ${currentPage === i + 1 ? "bg-primary-gold text-cream font-bold shadow" : "bg-light-beige/40 hover:bg-light-beige text-text-dark border border-border-custom/30"}`}
  >
                    {i + 1}
                  </button>)}
              </div>}

          </main>

        </div>

      </div>

      {
    /*=========================================
       C. MOBILE FILTER DRAWER OVERSET
      =========================================*/
  }
      <AnimatePresence>
        {showMobileSidebar && <>
            {
    /* Backdrop */
  }
            <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={() => setShowMobileSidebar(false)}
    className="fixed inset-0 bg-dark-brown/65 backdrop-blur-sm z-50 lg:hidden"
  />

            {
    /* Panel */
  }
            <motion.div
    initial={{ x: "100%" }}
    animate={{ x: 0 }}
    exit={{ x: "100%" }}
    transition={{ type: "tween", duration: 0.3 }}
    className="fixed inset-y-0 right-0 max-w-[320px] w-full bg-cream z-55 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto lg:hidden"
  >
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-border-custom">
                  <span className="font-serif font-bold text-base text-dark-brown">Filters & Refinements</span>
                  <button
    onClick={() => setShowMobileSidebar(false)}
    className="p-1 px-1.5 rounded-full bg-light-beige hover:bg-primary-gold hover:text-cream text-dark-brown font-bold"
  >
                    X
                  </button>
                </div>

                {
    /* Mobile categories filter checklist */
  }
                <div className="space-y-3">
                  <h4 className="font-serif font-bold text-sm text-dark-brown">Category Catalog</h4>
                  <div className="flex flex-col gap-1.5">
                    {["All", "Living Room", "Bedroom", "Dining Room", "Office", "Decor & Lighting"].map((cat) => <button
    key={cat}
    onClick={() => {
      handleCategorySelect(cat);
      setShowMobileSidebar(false);
    }}
    className={`text-left text-xs py-2 px-3 rounded font-sans transition-all flex items-center justify-between ${selectedCategory === cat ? "bg-primary-gold text-cream font-medium" : "hover:bg-light-beige text-text-dark"}`}
  >
                        <span>{cat}</span>
                        <span className="text-[10px]">
                          ({cat === "All" ? mockProducts.length : mockProducts.filter((u) => u.category === cat).length})
                        </span>
                      </button>)}
                  </div>
                </div>

                {
    /* Pricing slider option mobile */
  }
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h4 className="font-serif font-bold text-sm text-dark-brown">Cost Bound</h4>
                    <span className="text-xs font-sans font-semibold text-primary-gold">
                      ≤ ₹{priceRange.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <input
    type="range"
    min="1000"
    max="100000"
    step="5000"
    value={priceRange}
    onChange={(e) => setPriceRange(Number(e.target.value))}
    className="w-full accent-primary-gold bg-light-beige h-1.5 rounded-lg appearance-none cursor-pointer"
  />
                </div>

                {
    /* Color swatches mobile */
  }
                <div className="space-y-3">
                  <h4 className="font-serif font-bold text-sm text-dark-brown">Aesthetics</h4>
                  <div className="flex flex-wrap gap-2.5">
                    {availableColors.map((col) => {
    const isSelected = selectedColors.includes(col.name);
    return <button
      key={col.name}
      onClick={() => handleColorToggle(col.name)}
      className="w-7 h-7 rounded-full border-2 transition-all relative flex items-center justify-center"
      style={{
        backgroundColor: col.hex,
        borderColor: isSelected ? "#C28B2C" : "#E5E5E5"
      }}
    >
                          {isSelected && <span
      className="w-2 h-2 rounded-full"
      style={{ backgroundColor: col.hex === "#F7F4EF" ? "#2A211C" : "#F7F4EF" }}
    />}
                        </button>;
  })}
                  </div>
                </div>

              </div>

              {
    /* Action feet mobile */
  }
              <div className="pt-6 border-t border-border-custom bg-light-beige/30 -mx-6 -mb-6 p-6">
                <button
    onClick={handleClearFilters}
    className="w-full bg-light-beige text-dark-brown hover:bg-primary-gold hover:text-cream text-xs py-2.5 rounded font-sans font-medium uppercase tracking-wider mb-2"
  >
                  Reset Parameters
                </button>
                <button
    onClick={() => setShowMobileSidebar(false)}
    className="w-full bg-dark-brown text-cream hover:bg-primary-gold hover:text-dark-brown text-xs py-2.5 rounded font-serif font-bold"
  >
                  Apply Active Rules
                </button>
              </div>

            </motion.div>
          </>}
      </AnimatePresence>

    </div>;
}
