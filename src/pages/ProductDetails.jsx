import { useState, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  ShieldCheck,
  Truck,
  RotateCcw,
  Plus,
  Minus,
  ShoppingCart,
  Heart,
  ToggleLeft,
  ArrowLeft,
  Info
} from "lucide-react";
import { mockProducts } from "../data/mockData";
import { useCartStore, useWishlistStore, useCompareStore } from "../app/store/useStore";
import StarRating from "../components/common/StarRating";
import Breadcrumbs from "../components/common/Breadcrumbs";
export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = useMemo(() => {
    return mockProducts.find((p) => p.id === id);
  }, [id]);
  if (!product) {
    return <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="font-serif font-bold text-2xl text-dark-brown">Product Not Located</h2>
        <p className="text-sm text-text-gray font-sans mt-2">The bespoke item you requested could not be identified or is currently uncatalogued.</p>
        <Link
      to="/shop"
      className="mt-6 inline-flex items-center gap-2 bg-dark-brown hover:bg-primary-gold text-cream hover:text-dark-brown font-serif font-semibold text-xs px-6 py-3 rounded transition-colors"
    >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop Portal
        </Link>
      </div>;
  }
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(
    product.colors[0] || { name: "Teak", hex: "#B28A54" }
  );
  const [itemQuantity, setItemQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("Description");
  const addToCart = useCartStore((state) => state.addToCart);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlistStore();
  const { addToCompare, removeFromCompare, isInCompare } = useCompareStore();
  const isFavorited = isInWishlist(product.id);
  const isCompared = isInCompare(product.id);
  const handleQtyChange = (type) => {
    if (type === "dec") {
      setItemQuantity((p) => p > 1 ? p - 1 : 1);
    } else {
      setItemQuantity((p) => p + 1);
    }
  };
  const handleAddToCart = () => {
    addToCart(product, selectedColor, itemQuantity);
    alert(`"${product.title}" (${selectedColor.name}) successfully queued! Added ${itemQuantity} items to your cart.`);
  };
  const handleBuyNow = () => {
    addToCart(product, selectedColor, itemQuantity);
    navigate("/checkout");
  };
  const handleWishlistToggle = () => {
    if (isFavorited) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
      alert("Product added to your wishlist!");
    }
  };
  const handleCompareToggle = () => {
    if (isCompared) {
      removeFromCompare(product.id);
    } else {
      const res = addToCompare(product);
      alert(res.message);
    }
  };
  const breadcrumbItems = [
    { label: "Shop Portal", url: "/shop" },
    { label: product.category, url: `/shop?category=${encodeURIComponent(product.category)}` },
    { label: product.title }
  ];
  const mockReviews = [
    { name: "Aditya Sen", rating: 5, date: "May 12, 2026", comment: "Spectacular quality! The grain of the wood is gorgeous and the cushioning has excellent lower-back structural relief." },
    { name: "Priya Mehta", rating: 4.5, date: "April 28, 2026", comment: "Beautiful finish. Matches my living area theme perfectly. Took slightly longer than expected to assemble the legs, but customer care assisted immediately." },
    { name: "Kushal K", rating: 5, date: "March 14, 2026", comment: "Exceeded all expectations. Heavy base timber and lovely velvet tactile feedback. 10/10." }
  ];
  return <div className="bg-cream min-h-screen">
      <Breadcrumbs items={breadcrumbItems} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        
        {
    /* TOP INTERACTIVE SECTION (images + checkout configuration) */
  }
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-4">
          
          {
    /* 1. Left Gallery Frame */
  }
          <div className="lg:col-span-6 flex flex-col gap-4">
            
            {
    /* Display Screen */
  }
            <div className="aspect-4/3 overflow-hidden rounded-2xl border border-border-custom bg-light-beige/30 shadow-sm relative group">
              <img
    src={selectedImage}
    alt={product.title}
    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 cursor-zoom-in"
  />
              
              {product.isNew && <span className="absolute top-4 left-4 bg-primary-gold text-cream text-[10px] uppercase font-sans font-bold tracking-wider px-3 py-1 rounded">
                  In High Demand
                </span>}
            </div>

            {
    /* Thumbnail selector strip */
  }
            <div className="grid grid-cols-4 gap-3.5">
              {product.images.map((img, idx) => <button
    key={idx}
    onClick={() => setSelectedImage(img)}
    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all bg-light-beige/20 ${selectedImage === img ? "border-primary-gold p-0.5" : "border-border-custom hover:border-primary-gold/50"}`}
  >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>)}
            </div>

          </div>


          {
    /* 2. Right Meta Frame */
  }
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            <div>
              <span className="text-primary-gold font-sans font-medium text-xs tracking-widest uppercase">
                {product.category} Segment
              </span>
              <h1 className="font-serif font-bold text-3xl md:text-3.5xl text-dark-brown mt-1.5 leading-tight">
                {product.title}
              </h1>
              
              <div className="flex items-center gap-3.5 mt-2.5">
                <div className="flex items-center gap-1">
                  <StarRating rating={product.rating} size={14} />
                  <span className="text-xs font-sans font-medium text-dark-brown ml-1">{product.rating}</span>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-light-beige" />
                <span className="text-xs text-text-gray font-sans">{product.reviewsCount} verified showroom reviews</span>
              </div>
            </div>

            {
    /* Price section */
  }
            <div className="bg-light-beige/25 border border-border-custom/50 p-4 rounded-xl flex items-center justify-between">
              <div>
                <span className="text-xs text-text-gray font-sans block">Inaugural Price</span>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="font-sans font-black text-2xl text-dark-brown">
                    ₹{product.price.toLocaleString("en-IN")}
                  </span>
                  {product.originalPrice && <span className="font-sans text-xs text-text-gray line-through">
                      ₹{product.originalPrice.toLocaleString("en-IN")}
                    </span>}
                </div>
              </div>

              {product.isSale && <span className="bg-dark-brown text-primary-gold text-[11px] font-sans font-bold tracking-widest uppercase px-3 py-1.5 rounded-md border border-primary-gold/20">
                  Save {product.saleDiscount}% Limited
                </span>}
            </div>

            {
    /* Short Narrative */
  }
            <p className="text-xs md:text-sm text-text-dark font-sans leading-relaxed">
              {product.description}
            </p>

            {
    /* CUSTOMIZER CONTROLS */
  }
            <div className="space-y-4 pt-4 border-t border-border-custom/40">
              
              {
    /* Color swatches selector */
  }
              <div>
                <span className="text-xs font-serif font-bold text-dark-brown block mb-2">
                  Select Accent finish: <span className="text-primary-gold font-sans font-normal">{selectedColor.name}</span>
                </span>
                <div className="flex items-center gap-2.5">
                  {product.colors.map((col) => <button
    key={col.name}
    onClick={() => setSelectedColor(col)}
    className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center relative`}
    style={{
      backgroundColor: col.hex,
      borderColor: selectedColor.name === col.name ? "#C28B2C" : "#E5E5E5"
    }}
    title={col.name}
  >
                      {selectedColor.name === col.name && <span
    className="w-2.5 h-2.5 rounded-full"
    style={{ backgroundColor: col.hex === "#F7F4EF" ? "#2A211C" : "#F7F4EF" }}
  />}
                    </button>)}
                </div>
              </div>

              {
    /* Quantity selector / CTA buttons */
  }
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pt-2">
                
                {
    /* Quantity Control block */
  }
                <div className="flex items-center border border-border-custom rounded-lg bg-light-beige/25 max-w-[140px] justify-between p-1.5">
                  <button
    onClick={() => handleQtyChange("dec")}
    className="p-1 px-2 hover:bg-light-beige hover:text-primary-gold rounded transition-all"
    aria-label="Decrease quantity"
  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs font-sans font-black text-dark-brown px-3">
                    {itemQuantity}
                  </span>
                  <button
    onClick={() => handleQtyChange("inc")}
    className="p-1 px-2 hover:bg-light-beige hover:text-primary-gold rounded transition-all"
    aria-label="Increase quantity"
  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {
    /* CTAs */
  }
                <div className="flex-1 flex gap-3">
                  <button
    onClick={handleAddToCart}
    className="flex-1 bg-primary-gold hover:bg-dark-brown text-cream hover:text-primary-gold border border-primary-gold/20 font-serif font-bold text-xs uppercase tracking-wider py-3.5 rounded shadow transition-all flex items-center justify-center gap-2"
  >
                    <ShoppingCart className="w-4 h-4" />
                    Place In Bag
                  </button>
                  
                  <button
    onClick={handleBuyNow}
    className="flex-1 bg-dark-brown hover:bg-primary-gold text-cream hover:text-dark-brown font-serif font-bold text-xs uppercase tracking-wider py-3.5 rounded shadow transition-all flex items-center justify-center"
  >
                    Direct Checkout
                  </button>
                </div>

              </div>

            </div>

            {
    /* Quick helper action shortcuts (compare, favorite, stock check) */
  }
            <div className="flex items-center justify-between py-4 border-y border-border-custom/30 text-xs text-text-dark font-sans">
              <button
    onClick={handleWishlistToggle}
    className="flex items-center gap-1.5 hover:text-primary-gold transition-colors"
  >
                <Heart className={`w-4 h-4 ${isFavorited ? "fill-current text-primary-gold" : ""}`} />
                <span>{isFavorited ? "In Wishlist" : "Add to Wishlist"}</span>
              </button>

              <button
    onClick={handleCompareToggle}
    className="flex items-center gap-1.5 hover:text-primary-gold transition-colors"
  >
                <ToggleLeft className={`w-4 h-4 ${isCompared ? "text-primary-gold" : ""}`} />
                <span>{isCompared ? "Comparing Specs" : "Add to Compare"}</span>
              </button>

              <div className="flex items-center gap-1.5 text-text-gray">
                <span className={`w-2 h-2 rounded-full ${product.stock > 5 ? "bg-green-500" : "bg-amber-500"}`} />
                <span>{product.stock} units left in stock</span>
              </div>
            </div>

            {
    /* Small Trust details */
  }
            <div className="grid grid-cols-3 gap-2 py-2 text-[10px] text-text-gray font-sans font-light">
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-primary-gold shrink-0" />
                <span>Free Safe Shipping</span>
              </div>
              <div className="flex items-center gap-1.5 border-x border-border-custom/40 px-3">
                <ShieldCheck className="w-4 h-4 text-primary-gold shrink-0" />
                <span>100% Encrypted Pay</span>
              </div>
              <div className="flex items-center gap-1.5">
                <RotateCcw className="w-4 h-4 text-primary-gold shrink-0" />
                <span>7-Day Return Lock</span>
              </div>
            </div>

          </div>

        </div>


        {
    /* BOTTOM TABBED SPECIFICATIONS & REVIEWS SECTION */
  }
        <div className="mt-16 bg-cream border border-border-custom rounded-2xl p-6 md:p-8 shadow-sm">
          
          {
    /* Tab titles row */
  }
          <div className="flex items-center gap-8 border-b border-border-custom pb-3 mb-6">
            {["Description", "Specifications", "Reviews"].map((tab) => <button
    key={tab}
    onClick={() => setActiveTab(tab)}
    className={`font-serif font-bold text-sm md:text-base pb-3 relative transition-colors ${activeTab === tab ? "text-primary-gold" : "text-text-gray hover:text-dark-brown"}`}
  >
                {tab === "Reviews" ? `Reviews (${product.reviewsCount})` : tab}
                {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-gold rounded-full" />}
              </button>)}
          </div>

          {
    /* Tab content screens */
  }
          <div>
            
            {
    /* TAB A: DESCRIPTION */
  }
            {activeTab === "Description" && <div className="space-y-4 max-w-4xl text-xs md:text-sm text-text-dark font-sans leading-relaxed">
                <p>{product.details}</p>
                <div className="bg-light-beige/20 rounded-xl p-4 border border-border-custom/40 flex items-start gap-3.5 mt-4">
                  <Info className="w-5 h-5 text-primary-gold shrink-0" />
                  <div>
                    <h4 className="font-serif font-bold text-xs text-dark-brown">Artisan Wood Selection Mandate</h4>
                    <p className="text-[11px] text-text-gray leading-normal mt-0.5 font-light">
                      All lumber components undergo rigorous 6-month drying routines to prevent warping or checking. Natural oils are meticulously hand-rubbed over wood surfaces, guaranteeing a chemical-free living experience.
                    </p>
                  </div>
                </div>
              </div>}

            {
    /* TAB B: SPECIFICATIONS */
  }
            {activeTab === "Specifications" && <div className="max-w-2xl">
                <div className="divide-y divide-border-custom/50 border border-border-custom rounded-xl overflow-hidden text-xs md:text-sm">
                  {Object.entries(product.specifications).map(([key, value]) => <div key={key} className="grid grid-cols-3 p-3 font-sans">
                      <span className="font-serif font-bold text-dark-brown uppercase text-[11px] tracking-wider self-center col-span-1">
                        {key}
                      </span>
                      <span className="text-text-dark font-normal self-center col-span-2">
                        {value}
                      </span>
                    </div>)}
                  <div className="grid grid-cols-3 p-3 font-sans">
                    <span className="font-serif font-bold text-dark-brown uppercase text-[11px] tracking-wider self-center col-span-1">
                      SKU CODE
                    </span>
                    <span className="text-text-gray font-mono self-center col-span-2">
                      {product.sku}
                    </span>
                  </div>
                </div>
              </div>}

            {
    /* TAB C: REVIEWS */
  }
            {activeTab === "Reviews" && <div className="space-y-6 max-w-3xl">
                
                {
    /* Composite block */
  }
                <div className="flex flex-col md:flex-row gap-6 p-4 rounded-xl border border-border-custom bg-light-beige/10 items-center justify-around">
                  <div className="text-center">
                    <p className="text-4xl font-sans font-black text-dark-brown">{product.rating}</p>
                    <div className="flex justify-center my-1.5">
                      <StarRating rating={product.rating} size={16} />
                    </div>
                    <p className="text-[11px] text-text-gray font-sans uppercase">Overall validation score</p>
                  </div>
                  <div className="h-px md:h-12 w-12 md:w-px bg-border-custom" />
                  <div className="flex flex-col gap-1 text-[11px] font-sans text-text-gray">
                    <span>5 Star: 84% of readers</span>
                    <span>4 Star: 12% of readers</span>
                    <span>3 Star: 4% of readers</span>
                  </div>
                </div>

                <div className="divide-y divide-border-custom/40">
                  {mockReviews.map((rev, i) => <div key={i} className="py-4 font-sans first:pt-2">
                      <div className="flex items-center justify-between">
                        <p className="font-serif font-bold text-xs text-dark-brown">{rev.name}</p>
                        <span className="text-[10px] text-text-gray">{rev.date}</span>
                      </div>
                      <div className="my-1.5">
                        <StarRating rating={rev.rating} size={11} />
                      </div>
                      <p className="text-xs text-text-dark font-light italic leading-relaxed">
                        "{rev.comment}"
                      </p>
                    </div>)}
                </div>

              </div>}

          </div>

        </div>

      </div>
    </div>;
}
