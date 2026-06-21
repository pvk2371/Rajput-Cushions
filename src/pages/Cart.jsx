import { Link, useNavigate } from "react-router-dom";
import {
  Trash2,
  Heart,
  ShoppingBag,
  ArrowLeft,
  ChevronRight,
  Truck,
  RotateCcw
} from "lucide-react";
import { useCartStore, useWishlistStore } from "../app/store/useStore";
import { mockProducts } from "../data/mockData";
import Breadcrumbs from "../components/common/Breadcrumbs";
export default function Cart() {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart, getCartSubtotal, clearCart } = useCartStore();
  const { addToWishlist } = useWishlistStore();
  const subtotal = getCartSubtotal();
  const hasItems = cart.length > 0;
  const handleMoveToWishlist = (item) => {
    addToWishlist(item.product);
    removeFromCart(item.product.id, item.selectedColor.hex);
    alert(`"${item.product.title}" moved to your Wishlist!`);
  };
  const upsellProducts = mockProducts.slice(2, 5);
  return <div className="bg-cream min-h-screen pb-16">
      <Breadcrumbs items={[{ label: "My Bag Selection" }]} />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        
        {
    /* Shopping Cart Title header */
  }
        <h1 className="font-serif font-bold text-2.5xl md:text-3xl text-dark-brown mb-8 flex items-center gap-2">
          <ShoppingBag className="w-7 h-7 text-primary-gold" />
          Shopping Cart ({cart.reduce((sum, i) => sum + i.quantity, 0)})
        </h1>

        {hasItems ? <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {
    /* 1. Left List table of items */
  }
            <div className="lg:col-span-8 space-y-4">
              
              <div className="divide-y divide-border-custom bg-cream border border-border-custom rounded-2xl p-4 md:p-6 shadow-sm">
                {cart.map((item) => {
    const itemSubtotal = item.product.price * item.quantity;
    return <div
      key={`${item.product.id}-${item.selectedColor.hex}`}
      className="py-6 first:pt-2 last:pb-2 grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
    >
                      
                      {
      /* Product Thumbnail & Details */
    }
                      <div className="md:col-span-5 flex items-center gap-4">
                        <img
      src={item.product.images[0]}
      alt={item.product.title}
      className="w-16 h-16 object-cover rounded-lg border border-border-custom shrink-0"
    />
                        <div>
                          <Link
      to={`/product/${item.product.id}`}
      className="font-serif font-bold text-sm text-dark-brown hover:text-primary-gold transition-colors block leading-tight"
    >
                            {item.product.title}
                          </Link>
                          
                          <div className="flex items-center gap-2 mt-1.5 text-[11px] text-text-gray font-sans">
                            <span className="flex items-center gap-1">
                              <span
      className="w-3 h-3 rounded-full border border-border-custom/50 inline-block"
      style={{ backgroundColor: item.selectedColor.hex }}
    />
                              <span>{item.selectedColor.name}</span>
                            </span>
                            <span>•</span>
                            <span>SKU: {item.product.sku}</span>
                          </div>
                        </div>
                      </div>

                      {
      /* Pricing columns */
    }
                      <div className="md:col-span-2 text-left md:text-center font-sans">
                        <p className="text-[10px] text-text-gray block md:hidden">Unit price</p>
                        <p className="text-xs text-text-gray md:text-sm font-medium text-dark-brown">
                          ₹{item.product.price.toLocaleString("en-IN")}
                        </p>
                      </div>

                      {
      /* Quantity switcher */
    }
                      <div className="md:col-span-3 flex md:justify-center">
                        <div className="flex items-center border border-border-custom rounded bg-light-beige/30 p-1">
                          <button
      onClick={() => updateQuantity(item.product.id, item.selectedColor.hex, item.quantity - 1)}
      className="p-1 px-2.5 text-xs text-dark-brown hover:text-primary-gold transition-colors"
    >
                            -
                          </button>
                          <span className="text-xs font-sans font-bold text-dark-brown px-2">
                            {item.quantity}
                          </span>
                          <button
      onClick={() => updateQuantity(item.product.id, item.selectedColor.hex, item.quantity + 1)}
      className="p-1 px-2.5 text-xs text-dark-brown hover:text-primary-gold transition-colors"
    >
                            +
                          </button>
                        </div>
                      </div>

                      {
      /* Actions Remover */
    }
                      <div className="md:col-span-2 flex items-center justify-between md:justify-end gap-4 font-sans text-xs">
                        <div className="text-right">
                          <p className="text-[10px] text-text-gray block md:hidden">Item Subtotal</p>
                          <p className="font-semibold text-dark-brown text-sm">
                            ₹{itemSubtotal.toLocaleString("en-IN")}
                          </p>
                        </div>
                        
                        <div className="flex items-center gap-2.5 md:hidden lg:flex">
                          <button
      onClick={() => handleMoveToWishlist(item)}
      className="p-1.5 rounded bg-light-beige text-text-dark hover:bg-primary-gold hover:text-cream transition-colors"
      title="Move to Wishlist"
    >
                            <Heart className="w-3.5 h-3.5" />
                          </button>
                          <button
      onClick={() => removeFromCart(item.product.id, item.selectedColor.hex)}
      className="p-1.5 rounded bg-light-beige text-text-dark hover:bg-red-500 hover:text-white transition-colors animate-none"
      title="Remove item"
    >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                    </div>;
  })}
              </div>

              {
    /* Action buttons row */
  }
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <Link
    to="/shop"
    className="w-full sm:w-auto inline-flex items-center gap-2 text-xs font-serif font-black text-dark-brown hover:text-primary-gold"
  >
                  <ArrowLeft className="w-4 h-4 text-primary-gold" />
                  Continue Catalog Shopping
                </Link>

                <button
    onClick={() => {
      clearCart();
      alert("Cart cleared.");
    }}
    className="w-full sm:w-auto text-xs font-sans text-text-gray hover:text-red-500 font-medium uppercase tracking-wider"
  >
                  Empty Entire Bag
                </button>
              </div>

            </div>


            {
    /* 2. Right Sticky Invoice Summary Box */
  }
            <div className="lg:col-span-4 space-y-6 sticky top-28">
              
              <div className="bg-cream border border-border-custom p-6 rounded-2xl shadow-sm space-y-6">
                <h3 className="font-serif font-bold text-base text-dark-brown pb-2 border-b border-border-custom/40">
                  Receipt Summary
                </h3>

                <div className="space-y-3.5 font-sans text-xs">
                  
                  <div className="flex justify-between items-center text-text-dark">
                    <span>Subtotal</span>
                    <span className="font-semibold text-dark-brown">₹{subtotal.toLocaleString("en-IN")}</span>
                  </div>

                  <div className="flex justify-between items-center text-text-dark">
                    <span>Home Delivery Logistics</span>
                    <span className="text-green-600 font-medium font-sans uppercase">FREE PACKING</span>
                  </div>

                  <div className="flex justify-between items-center text-text-dark">
                    <span>Central GST (9%)</span>
                    <span className="text-text-gray font-light">Calculated next</span>
                  </div>

                  <div className="h-px bg-border-custom/50 my-2" />

                  <div className="flex justify-between items-center text-sm">
                    <span className="font-serif font-bold text-dark-brown">Grand Invoice Total</span>
                    <span className="font-sans font-black text-lg text-primary-gold">
                      ₹{subtotal.toLocaleString("en-IN")}
                    </span>
                  </div>

                </div>

                <Link
    to="/checkout"
    className="w-full bg-dark-brown hover:bg-primary-gold text-cream hover:text-dark-brown font-serif font-bold text-xs uppercase tracking-wider py-3.5 rounded shadow transition-all flex items-center justify-center gap-2"
  >
                  Proceed to Checkout
                  <ChevronRight className="w-4 h-4" />
                </Link>

              </div>

              {
    /* Small Security Pitch */
  }
              <div className="bg-light-beige/25 rounded-md p-4 border border-border-custom/50 flex flex-col gap-2.5 text-[11px] text-text-gray font-sans">
                <p className="font-semibold text-dark-brown">Secure Checkout Processing</p>
                <div className="flex items-center gap-2">
                  <Truck className="w-3.5 h-3.5 text-primary-gold" />
                  <span>Insured logistic cover included.</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw className="w-3.5 h-3.5 text-primary-gold" />
                  <span>7-Day Return Lock guaranteed.</span>
                </div>
              </div>

            </div>

          </div> : <div className="text-center py-20 bg-light-beige/20 border border-dashed border-border-custom rounded-2xl p-6">
            <ShoppingBag className="w-12 h-12 mx-auto text-primary-gold/40 mb-3" />
            <h3 className="font-serif font-bold text-lg text-dark-brown">Your Bag is Empty</h3>
            <p className="text-xs text-text-gray font-sans mt-1">
              Browse our artisan portfolios and shop catalogs to add bespoke fixtures.
            </p>
            <Link
    to="/shop"
    className="mt-6 inline-flex items-center gap-2 bg-dark-brown hover:bg-primary-gold text-cream hover:text-dark-brown font-serif font-semibold text-xs px-6 py-3 rounded transition-colors shadow"
  >
              Start Shopping Now
            </Link>
          </div>}


        {
    /* 3. UPSELL SUGGESTED ITEMS */
  }
        <section className="mt-20 space-y-8">
          <div className="text-center md:text-left space-y-1">
            <span className="text-primary-gold text-[11px] font-sans tracking-widest uppercase">Patrons Also Preferred</span>
            <h2 className="font-serif font-bold text-xl md:text-2xl text-dark-brown">You May Also Like</h2>
            <div className="w-8 h-0.5 bg-primary-gold mt-1.5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {upsellProducts.map((p) => <div
    key={p.id}
    className="bg-cream border border-border-custom rounded-xl p-3 shadow-none hover:shadow hover:border-primary-gold/40 transition-all flex gap-3"
  >
                <img
    src={p.images[0]}
    alt={p.title}
    className="w-16 h-16 object-cover rounded-md border border-border-custom shrink-0 self-center"
  />
                
                <div className="flex flex-col justify-center flex-1">
                  <span className="text-[9px] uppercase font-sans text-text-gray">{p.category}</span>
                  <Link
    to={`/product/${p.id}`}
    className="font-serif font-bold text-xs text-dark-brown hover:text-primary-gold transition-colors line-clamp-1"
  >
                    {p.title}
                  </Link>
                  <span className="text-xs font-sans font-semibold text-primary-gold mt-1">
                    ₹{p.price.toLocaleString("en-IN")}
                  </span>
                </div>

                <Link
    to={`/product/${p.id}`}
    className="p-1 px-2 border border-border-custom hover:border-primary-gold rounded text-[10px] font-sans font-bold uppercase text-text-dark bg-cream hover:bg-primary-gold hover:text-cream transition-colors self-center shrink-0"
  >
                  View
                </Link>
              </div>)}
          </div>
        </section>

      </main>
    </div>;
}
