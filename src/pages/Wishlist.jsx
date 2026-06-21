import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Trash2, ArrowLeft } from "lucide-react";
import { useWishlistStore, useCartStore } from "../app/store/useStore";
import Breadcrumbs from "../components/common/Breadcrumbs";
export default function Wishlist() {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlistStore();
  const addToCart = useCartStore((state) => state.addToCart);
  const hasItems = wishlist.length > 0;
  const handleMoveToCart = (p) => {
    const defaultColor = p.colors[0] || { name: "Natural Teak", hex: "#B28A54" };
    addToCart(p, defaultColor, 1);
    removeFromWishlist(p.id);
    alert(`"${p.title}" (${defaultColor.name}) successfully moved to your shopping cart!`);
  };
  return <div className="bg-cream min-h-screen pb-16">
      <Breadcrumbs items={[{ label: "Saved Favorites" }]} />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        
        {
    /* Page Title Header */
  }
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <h1 className="font-serif font-bold text-2.5xl md:text-3xl text-dark-brown flex items-center gap-2">
            <Heart className="w-7 h-7 text-primary-gold fill-current" />
            My Wishlist ({wishlist.length})
          </h1>
          
          {hasItems && <button
    onClick={() => {
      clearWishlist();
      alert("Wishlist cleared.");
    }}
    className="text-xs font-sans text-text-gray hover:text-red-500 font-medium uppercase tracking-wider"
  >
              Clear Favorite Locker
            </button>}
        </div>

        {hasItems ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlist.map((p) => <div
    key={p.id}
    className="bg-cream border border-border-custom rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
  >
                
                {
    /* Product head image */
  }
                <div className="aspect-4/3 overflow-hidden relative bg-light-beige/35">
                  <img
    src={p.images[0]}
    alt={p.title}
    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
  />
                  
                  {
    /* Floating category */
  }
                  <span className="absolute top-3 left-3 bg-primary-gold text-cream text-[10px] uppercase font-sans tracking-widest px-2.5 py-0.5 rounded shadow">
                    {p.category}
                  </span>
                </div>

                {
    /* Body details */
  }
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <Link
    to={`/product/${p.id}`}
    className="font-serif font-bold text-base md:text-lg text-dark-brown hover:text-primary-gold transition-colors leading-tight block"
  >
                      {p.title}
                    </Link>
                    <p className="text-xs text-text-gray font-sans mt-2 font-light line-clamp-2">
                      {p.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border-custom/35 flex items-center justify-between">
                    <span className="font-sans font-bold text-dark-brown">
                      ₹{p.price.toLocaleString("en-IN")}
                    </span>
                    
                    <div className="flex items-center gap-2">
                      <button
    onClick={() => handleMoveToCart(p)}
    className="p-1 px-2 border border-border-custom hover:border-primary-gold bg-cream hover:bg-primary-gold text-text-dark hover:text-cream text-[11px] font-sans font-semibold uppercase tracking-wider rounded transition-all flex items-center gap-1.5"
    title="Move to Cart"
  >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>Move to Cart</span>
                      </button>

                      <button
    onClick={() => removeFromWishlist(p.id)}
    className="p-2 bg-light-beige hover:bg-red-500 text-text-dark hover:text-white rounded transition-colors"
    title="Remove Favorite"
  >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>

              </div>)}
          </div> : <div className="text-center py-20 bg-light-beige/25 border border-dashed border-border-custom rounded-2xl p-6">
            <Heart className="w-12 h-12 mx-auto text-primary-gold/40 mb-3" />
            <h3 className="font-serif font-bold text-lg text-dark-brown">Your Locker is Empty</h3>
            <p className="text-xs text-text-gray font-sans mt-1">
              Browse our artisan collections and save items you adore for later drafts.
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
