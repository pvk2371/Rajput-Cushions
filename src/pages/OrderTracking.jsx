import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Package,
  Search,
  MapPin,
  Sparkles,
  User,
  ShieldCheck
} from "lucide-react";
import { mockOrders } from "../data/mockData";
import Breadcrumbs from "../components/common/Breadcrumbs";
export default function OrderTracking() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialId = searchParams.get("id") || "";
  const [orderQuery, setOrderQuery] = useState(initialId);
  const [activeOrder, setActiveOrder] = useState(null);
  const [searchAttempted, setSearchAttempted] = useState(false);
  useEffect(() => {
    if (initialId.trim()) {
      const match = mockOrders.find(
        (o) => o.id.toLowerCase() === initialId.toLowerCase().trim()
      );
      if (match) {
        setActiveOrder(match);
      } else {
        setActiveOrder({
          id: initialId.toUpperCase(),
          date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
          customerName: "Rahul Sharma",
          customerEmail: "rahul@gmail.com",
          customerPhone: "+91 98765 43210",
          address: "Flat 402, Lotus Height, Powai, Mumbai - 400076",
          items: [
            { productId: "prod-1", title: "Modern Luxury Sofa", price: 45999, quantity: 1, color: "Warm Cream" }
          ],
          subtotal: 45999,
          shipping: 0,
          total: 45999,
          status: "Processing"
        });
      }
      setSearchAttempted(true);
    } else {
      setActiveOrder(mockOrders[0]);
    }
  }, [initialId]);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (orderQuery.trim()) {
      setSearchParams({ id: orderQuery.trim() });
    }
  };
  const statusRanks = {
    "Processing": 1,
    "Shipped": 3,
    "Delivered": 5,
    "Cancelled": 0
  };
  const steps = [
    { title: "Order Placed", desc: "Recieved by our showroom planners", rank: 1 },
    { title: "Production & Confirmed", desc: "Bespoke alignment completed", rank: 2 },
    { title: "Shipped from Mumbai Hub", desc: "White-glove truck dispatched", rank: 3 },
    { title: "Out For Delivery", desc: "Entering local delivery corridor", rank: 4 },
    { title: "Delivered Lock", desc: "Unpacked & placed in your home space", rank: 5 }
  ];
  const currentRank = activeOrder ? statusRanks[activeOrder.status] : 1;
  return <div className="bg-cream min-h-screen pb-16">
      <Breadcrumbs items={[{ label: "Logistics Tracker" }]} />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        
        {
    /* Header Header */
  }
        <div className="text-center max-w-xl mx-auto flex flex-col items-center gap-2 mb-12">
          <div className="inline-flex items-center gap-1 bg-primary-gold/15 text-primary-gold px-3 py-1 rounded-full text-[10px] font-sans tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Showroom Dispatch Desk</span>
          </div>
          <h1 className="font-serif font-bold text-3xl md:text-4xl text-dark-brown">
            Trace Your Order Live
          </h1>
          <p className="text-xs md:text-sm text-text-gray font-sans font-light leading-relaxed">
            Verify shipment milestones and physical truck dispatch parameters. Enter your unique Rajput Cushion order tracker key below.
          </p>

          {
    /* Search Trigger form bar */
  }
          <form onSubmit={handleSearchSubmit} className="relative flex items-center mt-6 w-full max-w-md">
            <input
    type="text"
    required
    placeholder="e.g. FL-7324"
    value={orderQuery}
    onChange={(e) => setOrderQuery(e.target.value)}
    className="w-full bg-cream border border-border-custom rounded-lg px-4 py-3 text-xs md:text-sm text-dark-brown focus:outline-none focus:ring-1 focus:ring-primary-gold"
  />
            <button
    type="submit"
    className="absolute right-2 bg-dark-brown hover:bg-primary-gold text-cream hover:text-dark-brown p-2 rounded-md transition-colors flex items-center gap-1.5 text-xs font-serif font-bold"
  >
              <Search className="w-4 h-4 text-primary-gold" />
              Trace
            </button>
          </form>
          
          <p className="text-[10px] font-sans text-text-gray mt-2 font-light">
            Quick mock keys for testing: <span className="font-semibold text-primary-gold">FL-7324</span> (Delivered), <span className="font-semibold text-primary-gold">FL-6819</span> (Shipped).
          </p>
        </div>


        {
    /* MAIN RESULTS DISPLAY SCREEN */
  }
        {activeOrder ? <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {
    /* 1. Left Content Area: TIMELINE GRAPH */
  }
            <div className="lg:col-span-8 bg-cream border border-border-custom rounded-2xl p-6 md:p-8 shadow-sm space-y-10">
              
              {
    /* Order Meta details header card */
  }
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-border-custom/40">
                <div className="space-y-1">
                  <span className="text-[10px] font-sans text-text-gray uppercase tracking-wider font-light">Bespoke Shipment docket</span>
                  <div className="flex items-center gap-2">
                    <Package className="w-5 h-5 text-primary-gold" />
                    <h2 className="font-serif font-black text-lg text-dark-brown tracking-normal">
                      Order Serial {activeOrder.id}
                    </h2>
                  </div>
                </div>

                <div className="text-left sm:text-right text-xs font-sans">
                  <p className="text-[10px] text-text-gray uppercase tracking-wider font-light">Dispatched Date</p>
                  <p className="font-bold text-dark-brown mt-0.5">{activeOrder.date}</p>
                </div>
              </div>

              {
    /* TIMELINE VISUAL STAGE STRIP */
  }
              <div className="relative font-sans py-4">
                
                {
    /* Horizontal line (for desktop) */
  }
                <div className="absolute top-9 left-4 right-4 h-1 bg-light-beige/40 hidden md:block z-0" />
                {
    /* Desktop matching progress gold bar */
  }
                {activeOrder.status !== "Cancelled" && <div
    className="absolute top-9 left-4 h-1 bg-primary-gold hidden md:block z-0 transition-all duration-1000"
    style={{ width: `${Math.min(100, (currentRank - 1) / 4 * 100)}%` }}
  />}

                {
    /* Grid items */
  }
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
                  {steps.map((st, i) => {
    const isCompleted = currentRank >= st.rank;
    const isActive = currentRank === st.rank;
    const isCancelled = activeOrder.status === "Cancelled";
    return <div key={i} className="flex md:flex-col items-center gap-4 md:gap-3 text-center md:items-center">
                        
                        {
      /* Circle Bullet icon */
    }
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center border font-sans font-black text-xs shrink-0 shadow-sm transition-colors duration-500 ${isCancelled ? "bg-red-500 border-red-500 text-white" : isCompleted ? "bg-primary-gold border-primary-gold text-cream" : "bg-cream border-border-custom text-text-gray"}`}>
                          {isCancelled ? "\xD7" : isCompleted ? "\u2713" : i + 1}
                        </div>

                        {
      /* Text descriptions */
    }
                        <div className="text-left md:text-center space-y-0.5">
                          <h4 className={`text-xs md:text-sm font-serif font-bold ${isActive ? "text-primary-gold" : "text-dark-brown"}`}>
                            {st.title}
                          </h4>
                          <p className="text-[10px] text-text-gray leading-normal mt-0.5 font-light">
                            {st.desc}
                          </p>
                        </div>

                      </div>;
  })}
                </div>

              </div>

              {
    /* Cancelled disclaimer if cancelled */
  }
              {activeOrder.status === "Cancelled" && <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-xs font-sans">
                  <p className="font-semibold">Bespoke Order Cancelled</p>
                  <p className="mt-1 font-light">This request has been cancelled by customer operations and refund balances have been computed back into matching payment pathways. Reach our contact concierge with queries.</p>
                </div>}

            </div>


            {
    /* 2. Right Column: SHIPMENT DIRECTORY */
  }
            <div className="lg:col-span-4 space-y-6">
              
              <div className="bg-cream border border-border-custom p-6 rounded-2xl shadow-sm space-y-5 flex flex-col font-sans text-xs">
                <h3 className="font-serif font-bold text-base text-dark-brown pb-2 border-b border-border-custom/40">
                  Recipient Coordinates
                </h3>

                <div className="space-y-4">
                  
                  <div className="flex gap-2">
                    <User className="w-4 h-4 text-primary-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] text-text-gray font-light uppercase">Customer Registered</p>
                      <p className="font-semibold text-dark-brown text-[13px] leading-tight mt-0.5">{activeOrder.customerName}</p>
                    </div>
                  </div>

                  <div className="flex gap-2 border-t border-border-custom/30 pt-4">
                    <MapPin className="w-4 h-4 text-primary-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] text-text-gray font-light uppercase">Shipping Location</p>
                      <p className="font-medium text-text-dark text-[12px] leading-normal mt-0.5">{activeOrder.address}</p>
                    </div>
                  </div>

                  <div className="flex gap-2 border-t border-border-custom/30 pt-4">
                    <ShieldCheck className="w-4 h-4 text-primary-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] text-text-gray font-light uppercase">Logistics Operator</p>
                      <p className="font-medium text-[12px] text-dark-brown mt-0.5">Rajput Cushion White-Glove Cargo Service</p>
                    </div>
                  </div>

                </div>

                <div className="pt-4 border-t border-border-custom mt-2">
                  <span className="text-[10px] uppercase font-sans tracking-widest text-[#C28B2C] font-semibold">DELIVERY METHOD: INSURED ROAD CARGO</span>
                </div>

              </div>

              {
    /* Secondary Inline Map mockup */
  }
              <div className="h-48 border border-border-custom rounded-2xl overflow-hidden relative shadow-inner flex items-center justify-center bg-light-beige">
                <div className="absolute inset-0 opacity-10 pointer-events-none pr-10">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <line x1="50" y1="0" x2="50" y2="200" stroke="#000" strokeWidth="2" />
                    <line x1="0" y1="100" x2="400" y2="120" stroke="#000" strokeWidth="4" />
                    <circle cx="120" cy="110" r="30" fill="none" stroke="#000" strokeWidth="1" />
                  </svg>
                </div>
                <div className="bg-cream rounded p-2.5 shadow-xl border border-primary-gold/15 flex items-center gap-2 relative z-10 font-sans">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shrink-0" />
                  <p className="text-[10px] font-black text-dark-brown">Truck en-route through Powai Toll</p>
                </div>
              </div>

            </div>

          </div> : searchAttempted ? <div className="text-center py-20 bg-light-beige/25 border border-dashed border-border-custom rounded-2xl p-6">
            <Package className="w-12 h-12 mx-auto text-primary-gold/40 mb-3" />
            <h3 className="font-serif font-bold text-lg text-dark-brown">Order trace key "{orderQuery}" unlocated</h3>
            <p className="text-xs text-text-gray font-sans mt-1">Check for spelling coordinates, caps, or enter another active key.</p>
            <button
    onClick={() => {
      setSearchParams({ id: "FL-7324" });
      setOrderQuery("FL-7324");
    }}
    className="mt-6 inline-flex items-center gap-2 bg-dark-brown hover:bg-primary-gold text-cream hover:text-dark-brown font-serif font-semibold text-xs px-6 py-3 rounded transition-colors"
  >
              Demo Traces (FL-7324)
            </button>
          </div> : null}

      </main>
    </div>;
}
