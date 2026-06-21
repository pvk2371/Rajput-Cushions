import { Link } from "react-router-dom";
import { ToggleLeft, ShoppingCart, Trash2, ArrowLeft, HelpCircle } from "lucide-react";
import { useCompareStore, useCartStore } from "../app/store/useStore";
import StarRating from "../components/common/StarRating";
import Breadcrumbs from "../components/common/Breadcrumbs";
export default function CompareProducts() {
  const { compareList, removeFromCompare, clearCompare } = useCompareStore();
  const addToCart = useCartStore((state) => state.addToCart);
  const hasItems = compareList.length > 0;
  const handleAddToCart = (p) => {
    const defaultColor = p.colors[0] || { name: "Natural Teak", hex: "#B28A54" };
    addToCart(p, defaultColor, 1);
    alert(`"${p.title}" added to cart successfully!`);
  };
  return <div className="bg-cream min-h-screen pb-16">
      <Breadcrumbs items={[{ label: "Specification Comparer" }]} />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        
        {
    /* Title Header */
  }
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <h1 className="font-serif font-bold text-2.5xl md:text-3xl text-dark-brown flex items-center gap-2">
            <ToggleLeft className="w-7 h-7 text-primary-gold" />
            Compare Product Specs ({compareList.length}/3)
          </h1>
          
          {hasItems && <button
    onClick={() => {
      clearCompare();
      alert("Comparison list cleared.");
    }}
    className="text-xs font-sans text-text-gray hover:text-red-500 font-medium uppercase tracking-wider"
  >
              Reset Comparer Table
            </button>}
        </div>

        {hasItems ? <div className="bg-cream border border-border-custom rounded-2xl overflow-hidden shadow-sm">
            
            {
    /* Header Product Cards grid */
  }
            <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border-custom/50 bg-light-beige/10">
              
              {
    /* Box 1 (Info box) */
  }
              <div className="p-6 flex flex-col justify-center space-y-2">
                <span className="text-[#C28B2C] uppercase font-sans font-semibold text-[10px] tracking-wider">Side-By-Side Spec evaluation</span>
                <p className="font-serif font-black text-sm text-dark-brown leading-snug">Technical Parameters Analysis</p>
                <p className="text-[11px] text-text-gray font-sans leading-relaxed font-light">
                  Compare lumber qualities, weight loads, and size quotients to fit layouts.
                </p>
              </div>

              {compareList.map((p) => <div key={p.id} className="p-6 text-center space-y-4 flex flex-col items-center justify-between">
                  <div className="relative">
                    <img
    src={p.images[0]}
    alt={p.title}
    className="w-24 h-24 object-cover rounded-lg border border-border-custom shadow-inner mx-auto mb-2"
  />
                    <button
    onClick={() => removeFromCompare(p.id)}
    className="absolute -top-1 -right-1 p-1 bg-red-100 hover:bg-red-500 text-red-600 hover:text-white rounded-full transition-colors"
    title="Clear from comparisons"
  >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>

                  <div>
                    <span className="text-[9px] uppercase font-sans text-text-gray">{p.category}</span>
                    <Link
    to={`/product/${p.id}`}
    className="font-serif font-bold text-xs md:text-sm text-dark-brown hover:text-primary-gold leading-snug block line-clamp-1"
  >
                      {p.title}
                    </Link>
                    <p className="text-xs font-sans font-bold text-primary-gold mt-1">
                      ₹{p.price.toLocaleString("en-IN")}
                    </p>
                  </div>

                  <button
    onClick={() => handleAddToCart(p)}
    className="w-full bg-dark-brown hover:bg-primary-gold text-cream hover:text-dark-brown text-[10px] font-sans font-bold uppercase tracking-wider py-2 rounded shadow transition-all flex items-center justify-center gap-1.5"
  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    Add To Cart
                  </button>
                </div>)}

              {
    /* Fill remaining with empty mock boxes */
  }
              {Array.from({ length: 3 - compareList.length }).map((_, i) => <div key={i} className="p-6 text-center text-xs text-text-gray flex flex-col justify-center items-center bg-light-beige/5 border-dashed border-l border-border-custom/30 py-12">
                  <HelpCircle className="w-8 h-8 text-light-beige mb-2" />
                  <p className="font-serif font-bold">Empty Slot</p>
                  <p className="text-[10px] font-light mt-1">Browse catalog and queue products to compare side-by-side.</p>
                  <Link
    to="/shop"
    className="mt-4 inline-block font-sans font-semibold text-[10px] text-primary-gold uppercase tracking-wider border border-primary-gold/25 px-2.5 py-1 rounded"
  >
                    Add Product
                  </Link>
                </div>)}

            </div>

            {
    /* Matrix detailed Spec Rows */
  }
            <div className="divide-y divide-border-custom/50 font-sans text-xs text-text-dark">
              
              {
    /* Category */
  }
              <div className="grid grid-cols-1 md:grid-cols-4 p-4 divide-y md:divide-y-0 md:divide-x divide-border-custom/30">
                <span className="font-serif font-bold text-dark-brown uppercase text-[10px] tracking-wider self-center pb-2 md:pb-0">Segment Room</span>
                {compareList.map((p) => <span key={p.id} className="md:px-4 py-1.5 md:py-0 self-center">{p.category}</span>)}
                {Array.from({ length: 3 - compareList.length }).map((_, i) => <span key={i} className="text-text-gray/50 italic md:px-4 py-1.5 md:py-0 self-center">—</span>)}
              </div>

              {
    /* Material */
  }
              <div className="grid grid-cols-1 md:grid-cols-4 p-4 divide-y md:divide-y-0 md:divide-x divide-border-custom/30">
                <span className="font-serif font-bold text-dark-brown uppercase text-[10px] tracking-wider self-center pb-2 md:pb-0">Raw Materials</span>
                {compareList.map((p) => <span key={p.id} className="md:px-4 py-1.5 md:py-0 self-center font-light leading-normal">{p.specifications.material}</span>)}
                {Array.from({ length: 3 - compareList.length }).map((_, i) => <span key={i} className="text-text-gray/50 italic md:px-4 py-1.5 md:py-0 self-center">—</span>)}
              </div>

              {
    /* Dimensions */
  }
              <div className="grid grid-cols-1 md:grid-cols-4 p-4 divide-y md:divide-y-0 md:divide-x divide-border-custom/30">
                <span className="font-serif font-bold text-dark-brown uppercase text-[10px] tracking-wider self-center pb-2 md:pb-0">Surface Dimensions</span>
                {compareList.map((p) => <span key={p.id} className="md:px-4 py-1.5 md:py-0 self-center font-mono">{p.specifications.dimensions}</span>)}
                {Array.from({ length: 3 - compareList.length }).map((_, i) => <span key={i} className="text-text-gray/50 italic md:px-4 py-1.5 md:py-0 self-center">—</span>)}
              </div>

              {
    /* Net Weight */
  }
              <div className="grid grid-cols-1 md:grid-cols-4 p-4 divide-y md:divide-y-0 md:divide-x divide-border-custom/30">
                <span className="font-serif font-bold text-dark-brown uppercase text-[10px] tracking-wider self-center pb-2 md:pb-0">Net Structural Weight</span>
                {compareList.map((p) => <span key={p.id} className="md:px-4 py-1.5 md:py-0 self-center">{p.specifications.weight}</span>)}
                {Array.from({ length: 3 - compareList.length }).map((_, i) => <span key={i} className="text-text-gray/50 italic md:px-4 py-1.5 md:py-0 self-center">—</span>)}
              </div>

              {
    /* Color swatches */
  }
              <div className="grid grid-cols-1 md:grid-cols-4 p-4 divide-y md:divide-y-0 md:divide-x divide-border-custom/30">
                <span className="font-serif font-bold text-dark-brown uppercase text-[10px] tracking-wider self-center pb-2 md:pb-0">Color varieties</span>
                {compareList.map((p) => <div key={p.id} className="md:px-4 py-1.5 md:py-0 flex flex-wrap gap-1 items-center">
                    {p.colors.map((c) => <span
    key={c.name}
    className="w-3.5 h-3.5 rounded-full border border-border-custom inline-block shrink-0"
    style={{ backgroundColor: c.hex }}
    title={c.name}
  />)}
                  </div>)}
                {Array.from({ length: 3 - compareList.length }).map((_, i) => <span key={i} className="text-text-gray/50 italic md:px-4 py-1.5 md:py-0 self-center">—</span>)}
              </div>

              {
    /* Verified score */
  }
              <div className="grid grid-cols-1 md:grid-cols-4 p-4 divide-y md:divide-y-0 md:divide-x divide-border-custom/30">
                <span className="font-serif font-bold text-dark-brown uppercase text-[10px] tracking-wider self-center pb-2 md:pb-0">Validation ratings</span>
                {compareList.map((p) => <div key={p.id} className="md:px-4 py-1.5 md:py-0 flex items-center gap-1">
                    <StarRating rating={p.rating} size={11} />
                    <span className="text-[10px] font-black text-dark-brown">{p.rating}</span>
                  </div>)}
                {Array.from({ length: 3 - compareList.length }).map((_, i) => <span key={i} className="text-text-gray/50 italic md:px-4 py-1.5 md:py-0 self-center">—</span>)}
              </div>

            </div>

          </div> : <div className="text-center py-20 bg-light-beige/25 border border-dashed border-border-custom rounded-2xl p-6">
            <ToggleLeft className="w-12 h-12 mx-auto text-primary-gold/40 mb-3" />
            <h3 className="font-serif font-bold text-lg text-dark-brown">No products selected to compare</h3>
            <p className="text-xs text-text-gray font-sans mt-1">
              Select products from our catalog showroom and tap "Compare" to check specifications.
            </p>
            <Link
    to="/shop"
    className="mt-6 inline-flex items-center gap-2 bg-dark-brown hover:bg-primary-gold text-cream hover:text-dark-brown font-serif font-semibold text-xs px-6 py-3 rounded transition-colors shadow"
  >
              <ArrowLeft className="w-4 h-4" />
              Discover Products
            </Link>
          </div>}

      </main>
    </div>;
}
