import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { CreditCard, ShieldCheck, MapPin, CheckCircle, ChevronRight } from "lucide-react";
import { useCartStore } from "../app/store/useStore";
import Breadcrumbs from "../components/common/Breadcrumbs";
export default function Checkout() {
  const navigate = useNavigate();
  const { cart, getCartSubtotal, clearCart } = useCartStore();
  const subtotal = getCartSubtotal();
  const hasItems = cart.length > 0;
  const steps = [
    { label: "Cart Bag", status: "completed" },
    { label: "Shipping Details", status: "active" },
    { label: "Payment Protocols", status: "upcoming" },
    { label: "Confirm Transfer", status: "upcoming" }
  ];
  const [billingDetails, setBillingDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    paymentMethod: "COD"
  });
  const [checkoutCompleteModal, setCheckoutCompleteModal] = useState(false);
  const [generatedOrderId, setGeneratedOrderId] = useState("");
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!hasItems) return;
    const randomHex = Math.floor(1e3 + Math.random() * 9e3);
    const orderKey = `FL-${randomHex}`;
    setGeneratedOrderId(orderKey);
    setCheckoutCompleteModal(true);
  };
  const handleModalClose = () => {
    setCheckoutCompleteModal(false);
    clearCart();
    navigate(`/tracking?id=${generatedOrderId}`);
  };
  if (!hasItems && !checkoutCompleteModal) {
    return <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="font-serif font-bold text-2xl text-dark-brown">No items in Checkout</h2>
        <p className="text-sm text-text-gray font-sans mt-2">Add items to your cart before proceeding to validation checkout.</p>
        <Link
      to="/shop"
      className="mt-6 inline-flex items-center gap-2 bg-dark-brown hover:bg-primary-gold text-cream hover:text-dark-brown font-serif font-semibold text-xs px-6 py-3 rounded transition-colors"
    >
          View Shop Products
        </Link>
      </div>;
  }
  return <div className="bg-cream min-h-screen pb-16">
      <Breadcrumbs items={[{ label: "Secure Checkout" }]} />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-2">
        
        {
    /* STEPPER PROGRESS ROW */
  }
        <div className="flex items-center justify-between max-w-2xl mx-auto mb-10 overflow-x-auto pb-4 gap-4 font-sans text-[11px] uppercase tracking-wider text-text-gray">
          {steps.map((st, i) => <div key={i} className="flex items-center gap-2 shrink-0">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px] border ${st.status === "completed" ? "bg-primary-gold border-primary-gold text-cream" : st.status === "active" ? "border-primary-gold text-primary-gold font-black bg-cream shadow-sm" : "border-border-custom text-text-gray"}`}>
                {i + 1}
              </span>
              <span className={st.status === "active" ? "text-primary-gold font-bold" : ""}>
                {st.label}
              </span>
              {i < steps.length - 1 && <ChevronRight className="w-3.5 h-3.5 text-light-beige" />}
            </div>)}
        </div>


        {
    /* MAIN SPLIT ROW */
  }
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {
    /* LEFT COLUMN: Shipping & Payment Address Forms */
  }
          <div className="lg:col-span-7 bg-cream border border-border-custom rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
            <h2 className="font-serif font-bold text-xl text-dark-brown flex items-center gap-2 pb-2 border-b border-border-custom/40">
              <MapPin className="w-5 h-5 text-primary-gold" />
              Delivery Shipping Coordinates
            </h2>

            <form onSubmit={handlePlaceOrder} className="space-y-4 font-sans text-xs text-text-dark">
              
              <div className="space-y-1.5">
                <label className="font-serif font-bold text-dark-brown block">Full Patron Name *</label>
                <input
    type="text"
    required
    value={billingDetails.name}
    onChange={(e) => setBillingDetails({ ...billingDetails, name: e.target.value })}
    className="w-full bg-light-beige/25 border border-border-custom rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary-gold focus:border-primary-gold"
    placeholder="Rahul Sharma"
  />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-serif font-bold text-dark-brown block">Email Address *</label>
                  <input
    type="email"
    required
    value={billingDetails.email}
    onChange={(e) => setBillingDetails({ ...billingDetails, email: e.target.value })}
    className="w-full bg-light-beige/25 border border-border-custom rounded px-4 py-3 focus:outline-none"
    placeholder="sharma.rahul@gmail.com"
  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-serif font-bold text-dark-brown block">Phone Contact *</label>
                  <input
    type="tel"
    required
    value={billingDetails.phone}
    onChange={(e) => setBillingDetails({ ...billingDetails, phone: e.target.value })}
    className="w-full bg-light-beige/25 border border-border-custom rounded px-4 py-3 focus:outline-none"
    placeholder="+91 91234 56789"
  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-serif font-bold text-dark-brown block">Detailed Shipping Destination *</label>
                <input
    type="text"
    required
    value={billingDetails.address}
    onChange={(e) => setBillingDetails({ ...billingDetails, address: e.target.value })}
    className="w-full bg-light-beige/25 border border-border-custom rounded px-4 py-3 focus:outline-none"
    placeholder="Flat 402, Lotus Height, Powai Complex..."
  />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-serif font-bold text-dark-brown block">City *</label>
                  <input
    type="text"
    required
    value={billingDetails.city}
    onChange={(e) => setBillingDetails({ ...billingDetails, city: e.target.value })}
    className="w-full bg-light-beige/25 border border-border-custom rounded px-4 py-3 focus:outline-none"
    placeholder="Mumbai"
  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-serif font-bold text-dark-brown block">Pincode Coordinate *</label>
                  <input
    type="text"
    required
    maxLength={6}
    value={billingDetails.pincode}
    onChange={(e) => setBillingDetails({ ...billingDetails, pincode: e.target.value })}
    className="w-full bg-light-beige/25 border border-border-custom rounded px-4 py-3 focus:outline-none"
    placeholder="400076"
  />
                </div>
              </div>

              {
    /* Payment selection */
  }
              <div className="pt-4 border-t border-border-custom/40 space-y-3">
                <h3 className="font-serif font-bold text-sm text-dark-brown flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4 text-primary-gold" />
                  Select Payment Mechanism
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-2">
                  <button
    type="button"
    onClick={() => setBillingDetails({ ...billingDetails, paymentMethod: "COD" })}
    className={`p-4 border rounded-xl text-left flex items-start gap-3 transition-all bg-cream ${billingDetails.paymentMethod === "COD" ? "border-primary-gold ring-1 ring-primary-gold shadow-sm" : "border-border-custom hover:border-primary-gold/40"}`}
  >
                    <span className={`w-3.5 h-3.5 rounded-full border-2 mt-0.5 flex items-center justify-center ${billingDetails.paymentMethod === "COD" ? "border-primary-gold text-primary-gold" : "border-border-custom"}`}>
                      {billingDetails.paymentMethod === "COD" && <span className="w-1.5 h-1.5 rounded-full bg-primary-gold" />}
                    </span>
                    <div>
                      <p className="font-serif font-bold text-xs text-dark-brown">Cash/Pay On Delivery</p>
                      <p className="text-[10px] text-text-gray mt-0.5 leading-normal">Liquidate cash or scan QR upon safe home furniture placement.</p>
                    </div>
                  </button>

                  <button
    type="button"
    onClick={() => setBillingDetails({ ...billingDetails, paymentMethod: "CARD" })}
    className={`p-4 border rounded-xl text-left flex items-start gap-3 transition-all bg-cream ${billingDetails.paymentMethod === "CARD" ? "border-primary-gold ring-1 ring-primary-gold shadow-sm" : "border-border-custom hover:border-primary-gold/40"}`}
  >
                    <span className={`w-3.5 h-3.5 rounded-full border-2 mt-0.5 flex items-center justify-center ${billingDetails.paymentMethod === "CARD" ? "border-primary-gold text-primary-gold" : "border-border-custom"}`}>
                      {billingDetails.paymentMethod === "CARD" && <span className="w-1.5 h-1.5 rounded-full bg-primary-gold" />}
                    </span>
                    <div>
                      <p className="font-serif font-bold text-xs text-dark-brown">Debit/Credit Cards</p>
                      <p className="text-[10px] text-text-gray mt-0.5 leading-normal">Settle securely with 100% encrypted online payments platform.</p>
                    </div>
                  </button>
                </div>

                {billingDetails.paymentMethod === "CARD" && <div className="bg-light-beige/35 border border-border-custom rounded-xl p-4 space-y-3">
                    <p className="text-[10px] font-sans text-text-gray tracking-wider uppercase mb-1">MOCK ENCRYPTED TRANSFER PROTOCOL</p>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-dark-brown">Card Number</label>
                      <input
    type="text"
    required
    maxLength={16}
    placeholder="4123 4567 8901 2345"
    className="w-full bg-cream border border-border-custom rounded px-3 py-2 text-xs"
  />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] font-bold block mb-1">Expiration MM/YY</label>
                        <input type="text" maxLength={5} placeholder="08/29" className="w-full bg-cream border border-border-custom rounded px-3 py-2 text-xs" />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold block mb-1">CVV Pin</label>
                        <input type="password" maxLength={3} placeholder="•••" className="w-full bg-cream border border-border-custom rounded px-3 py-2 text-xs" />
                      </div>
                    </div>
                  </div>}
              </div>

              <button
    type="submit"
    className="w-full bg-primary-gold hover:bg-dark-brown text-cream hover:text-primary-gold font-serif font-bold text-sm uppercase tracking-wider py-4 rounded shadow transition-all flex items-center justify-center gap-2"
  >
                Place Safe Furniture Order
                <ShieldCheck className="w-4.5 h-4.5" />
              </button>

            </form>

          </div>


          {
    /* RIGHT COLUMN: ORDER SUMMARY SIDE PANEL */
  }
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-cream border border-border-custom p-6 rounded-2xl shadow-sm space-y-6">
              <h3 className="font-serif font-bold text-base text-dark-brown pb-2 border-b border-border-custom/40">
                Purchase Catalog Invoice
              </h3>

              {
    /* Items listing */
  }
              <div className="divide-y divide-border-custom/40 max-h-60 overflow-y-auto pr-1">
                {cart.map((item) => <div key={`${item.product.id}-${item.selectedColor.hex}`} className="py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-3 text-xs">
                    <img
    src={item.product.images[0]}
    alt=""
    className="w-10 h-10 object-cover rounded border border-border-custom shrink-0"
  />
                    <div className="flex-1">
                      <p className="font-serif font-bold text-dark-brown line-clamp-1">{item.product.title}</p>
                      <p className="text-[10px] text-text-gray font-sans mt-0.5">
                        Color: {item.selectedColor.name} • Qty: {item.quantity}
                      </p>
                    </div>
                    <span className="font-sans font-semibold text-text-dark">
                      ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                    </span>
                  </div>)}
              </div>

              {
    /* Aggregates */
  }
              <div className="space-y-3 pt-4 border-t border-border-custom font-sans text-xs">
                
                <div className="flex justify-between items-center text-text-dark">
                  <span>Cart Subtotal</span>
                  <span className="font-semibold">₹{subtotal.toLocaleString("en-IN")}</span>
                </div>

                <div className="flex justify-between items-center text-text-dark">
                  <span>Showroom delivery</span>
                  <span className="text-green-600 font-semibold font-sans uppercase">FREE</span>
                </div>

                <div className="h-px bg-border-custom/50 my-2" />

                <div className="flex justify-between items-center text-sm">
                  <span className="font-serif font-bold text-dark-brown">Final Invoice total</span>
                  <span className="font-sans font-black text-base text-primary-gold">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </main>

      {
    /*=========================================
       CONGRATULATIONS MODAL ON COMPILING ORDER
      =========================================*/
  }
      <AnimatePresence>
        {checkoutCompleteModal && <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-dark-brown/75 backdrop-blur-sm z-50 flex items-center justify-center p-4"
  >
            <motion.div
    initial={{ scale: 0.95, y: 30 }}
    animate={{ scale: 1, y: 0 }}
    exit={{ scale: 0.95, y: 30 }}
    className="bg-cream border border-primary-gold/15 rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl text-center space-y-6 border-t-8 border-t-primary-gold"
  >
              
              <div className="w-14 h-14 bg-primary-gold/15 text-primary-gold rounded-full flex items-center justify-center mx-auto border border-primary-gold/30">
                <CheckCircle className="w-8 h-8 fill-current" />
              </div>

              <div className="space-y-2">
                <span className="text-primary-gold font-sans font-bold text-[10px] tracking-widest uppercase">TRANSACTION SECURED AUTHORIZED</span>
                <h2 className="font-serif font-black text-xl md:text-2xl text-dark-brown leading-snug">
                  Purchase Completed!
                </h2>
                <p className="text-xs text-text-gray font-sans font-light leading-relaxed">
                  Your luxury furnishing order has been logged into our artisan supply schedules. A receipt copy is dispatched to <span className="font-semibold text-text-dark">{billingDetails.email}</span>.
                </p>
              </div>

              {
    /* Order key pill */
  }
              <div className="bg-light-beige/30 rounded-xl p-3 border border-border-custom/50 font-sans">
                <span className="text-[10px] text-text-gray uppercase block font-medium">YOUR UNIQUE TRACE ID</span>
                <span className="text-base font-bold font-mono text-dark-brown tracking-wider mt-0.5 block">{generatedOrderId}</span>
              </div>

              <button
    onClick={handleModalClose}
    className="w-full bg-dark-brown hover:bg-primary-gold text-cream hover:text-dark-brown font-serif font-bold text-xs uppercase tracking-wider py-3.5 rounded shadow transition-all"
  >
                Trace Order Live
              </button>

            </motion.div>
          </motion.div>}
      </AnimatePresence>

    </div>;
}
