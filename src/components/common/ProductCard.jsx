import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Heart, ShoppingCart, Eye, ToggleLeft } from "lucide-react";
import StarRating from "./StarRating";
import { useCartStore, useWishlistStore, useCompareStore } from "../../app/store/useStore";
export default function ProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const { wishlist, addToWishlist, removeFromWishlist, isInWishlist } = useWishlistStore();
  const { compareList, addToCompare, removeFromCompare, isInCompare } = useCompareStore();
  const isFavorited = isInWishlist(product.id);
  const isCompared = isInCompare(product.id);
  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFavorited) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };
  const handleCompareToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isCompared) {
      removeFromCompare(product.id);
    } else {
      const res = addToCompare(product);
      if (!res.success) {
        alert(res.message);
      }
    }
  };
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultColor = product.colors[0] || { name: "Natural", hex: "#C28B2C" };
    addToCart(product, defaultColor, 1);
    alert(`"${product.title}" (${defaultColor.name}) added to your shopping cart!`);
  };
  return <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-cream group relative flex flex-col rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-border-custom/50 transition-all duration-300"
  >
      
      {
    /* Product Image Window */
  }
      <div className="relative aspect-4/3 overflow-hidden bg-light-beige/30">
        
        {
    /* Dynamic Image */
  }
        <img
    src={product.images[0]}
    alt={product.title}
    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
  />

        {
    /* Tags list */
  }
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isNew && <span className="bg-primary-gold text-cream text-[10px] font-sans font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded shadow-sm">
              New
            </span>}
          {product.isSale && <span className="bg-dark-brown text-primary-gold text-[10px] font-sans font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded shadow-sm border border-primary-gold/30">
              Sale -{product.saleDiscount}%
            </span>}
        </div>

        {
    /* Hover overlay controllers */
  }
        <div className="absolute inset-0 bg-dark-brown/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-10">
          
          <button
    onClick={handleWishlistToggle}
    className={`p-2.5 rounded-full transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 ${isFavorited ? "bg-primary-gold text-cream hover:bg-cream hover:text-primary-gold" : "bg-cream text-dark-brown hover:bg-primary-gold hover:text-cream"} shadow`}
    title={isFavorited ? "Remove from wishlist" : "Add to wishlist"}
  >
            <Heart className={`w-4 h-4 ${isFavorited ? "fill-current" : ""}`} />
          </button>

          <Link
    to={`/product/${product.id}`}
    className="p-2.5 rounded-full bg-cream text-dark-brown hover:bg-primary-gold hover:text-cream transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75 shadow"
    title="View Details"
  >
            <Eye className="w-4 h-4" />
          </Link>

          <button
    onClick={handleCompareToggle}
    className={`p-2.5 rounded-full transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-100 ${isCompared ? "bg-primary-gold text-cream hover:bg-cream hover:text-primary-gold" : "bg-cream text-dark-brown hover:bg-primary-gold hover:text-cream"} shadow`}
    title={isCompared ? "Remove from compare" : "Compare spec options"}
  >
            <ToggleLeft className="w-4 h-4" />
          </button>

        </div>
      </div>

      {
    /* Product Content Card */
  }
      <div className="p-4 flex flex-col flex-1">
        <span className="text-[10px] uppercase font-sans tracking-widest text-text-gray font-medium">
          {product.category}
        </span>
        
        <Link
    to={`/product/${product.id}`}
    className="font-serif font-bold text-sm md:text-base text-dark-brown hover:text-primary-gold transition-colors mt-1 block line-clamp-1"
  >
          {product.title}
        </Link>
        
        <div className="flex items-center gap-2 mt-1.5">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[10px] text-text-gray font-sans">({product.reviewsCount})</span>
        </div>

        {
    /* Pricing Rows & Floating Cart action button */
  }
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border-custom/40">
          <div className="flex flex-col">
            {product.originalPrice && <span className="text-[10px] font-sans text-text-gray line-through leading-none">
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>}
            <span className="text-sm md:text-base font-sans font-bold text-dark-brown mt-0.5">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
          </div>

          <button
    onClick={handleAddToCart}
    className="p-2 rounded bg-light-beige hover:bg-primary-gold text-dark-brown hover:text-cream transition-colors duration-200"
    title="Add to cart"
  >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>

      </div>

    </motion.div>;
}
