import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import PageTransitionLoader from "./components/common/PageTransitionLoader";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Collections from "./pages/Collections";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";
import CustomFurniture from "./pages/CustomFurniture";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import OrderTracking from "./pages/OrderTracking";
import CompareProducts from "./pages/CompareProducts";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Sitemap from "./pages/Sitemap";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminCustomers from "./pages/admin/AdminCustomers";
import AdminSettings from "./pages/admin/AdminSettings";
import { useSearchStore, useMobileMenuStore } from "./app/store/useStore";
import { mockProducts } from "./data/mockData";
import { Search, Compass } from "lucide-react";
import { motion } from "motion/react";
function PublicLayout() {
  const { isSearchOpen, setSearchOpen, setSearchQuery } = useSearchStore();
  const { isMobileMenuOpen, setMobileMenuOpen } = useMobileMenuStore();
  const [searchResults, setSearchResults] = useState([]);
  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (val.trim().length > 1) {
      const match = mockProducts.filter(
        (p) => p.title.toLowerCase().includes(val.toLowerCase()) || p.category.toLowerCase().includes(val.toLowerCase()) || p.description.toLowerCase().includes(val.toLowerCase())
      );
      setSearchResults(match);
    } else {
      setSearchResults([]);
    }
  };
  return <div className="flex flex-col min-h-screen bg-cream text-text-dark">
      <Header />
      
      {
    /* Primary Page Canvas */
  }
      <div className="flex-1">
        <Outlet />
      </div>

      <Footer />

      {
    /*=========================================
       GLOBAL FULL-SCREEN SEARCH OVERLAY MODAL
      =========================================*/
  }
      {isSearchOpen && <div className="fixed inset-0 bg-dark-brown/95 backdrop-blur-md z-50 flex flex-col p-6 font-sans">
          
          {
    /* Top Row bar */
  }
          <div className="flex items-center justify-between max-w-4xl mx-auto w-full pb-4">
            <span className="text-primary-gold text-[10px] tracking-widest font-bold uppercase">CATALOG SEARCH RADAR</span>
            <button
    onClick={() => setSearchOpen(false)}
    className="p-1 px-3 rounded-full bg-cream/10 hover:bg-primary-gold text-cream hover:text-dark-brown text-xs font-sans font-black transition-colors cursor-pointer"
  >
              Close [Esc]
            </button>
          </div>

          {
    /* Large Input Input Row */
  }
          <div className="max-w-4xl mx-auto w-full pt-12 space-y-6">
            <div className="relative">
              <input
    type="text"
    autoFocus
    placeholder="Search premium collections, sofas, velvet chairs..."
    onChange={handleSearchChange}
    className="w-full bg-transparent border-b border-primary-gold/45 focus:border-primary-gold py-4 text-xl md:text-3xl text-cream focus:outline-none placeholder-text-gray font-serif font-bold"
  />
              <Search className="w-8 h-8 text-primary-gold absolute right-2 top-4 pointer-events-none" />
            </div>

            {
    /* Results Grid List */
  }
            {searchResults.length > 0 ? <div className="space-y-4">
                <p className="text-xs text-text-gray font-medium uppercase font-sans tracking-wider">Located Items ({searchResults.length})</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[50vh] overflow-y-auto pr-1">
                  {searchResults.map((p) => <a
    key={p.id}
    href={`/product/${p.id}`}
    onClick={() => setSearchOpen(false)}
    className="bg-cream/5 border border-cream/10 rounded-xl p-3 flex gap-4 hover:bg-cream/10 transition-all items-center"
  >
                      <img src={p.images[0]} alt="" className="w-12 h-12 object-cover rounded border border-cream/10 shrink-0" />
                      <div>
                        <p className="font-serif font-bold text-sm text-cream leading-snug">{p.title}</p>
                        <p className="text-[10px] text-primary-gold font-sans font-medium mt-0.5">₹{p.price.toLocaleString("en-IN")}</p>
                      </div>
                    </a>)}
                </div>
              </div> : <div className="text-center py-12 text-text-gray/50">
                <Compass className="w-10 h-10 mx-auto text-primary-gold/30 mb-2" />
                <p className="text-xs font-serif italic">Begin typing wood/fabric names above (e.g. Sofa, Bed, Chair)...</p>
              </div>}
          </div>

        </div>}

      {/* WhatsApp Floating Contact Widget */}
      <motion.a
        href="https://wa.me/919922000615?text=Hello%20Rajput%20Cushion%2C%20I%20am%20interested%20in%20customizing%20a%20sofa%20/%20cushions."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-cream p-3 sm:p-3.5 rounded-full shadow-2xl flex items-center justify-center group overflow-hidden transition-all duration-300 pointer-events-auto border border-white/20 hover:scale-110 active:scale-95"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
        id="whatsapp-floater"
      >
        {/* Pulsing indicator background */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping opacity-75 -z-10 group-hover:hidden" />
        
        {/* WhatsApp Premium Inline Vector */}
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-white shrink-0 drop-shadow-md"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.1 1.449 4.6 1.45l.006.001c5.55 0 10.063-4.51 10.066-10.06A9.157 9.157 0 0 0 18.423 4.14a9.176 9.176 0 0 0-6.422-2.658c-5.553 0-10.064 4.51-10.068 10.061-.001 1.868.512 3.692 1.488 5.287L2.43 21.57l4.217-1.106-.11.085zM15.42 12.9c-.312-.156-1.848-.91-2.135-1.014-.287-.105-.497-.156-.706.156-.21.312-.81.104-.99.521c-.13.313-.26.21-.573.053-.31-.155-1.32-.486-2.512-1.55-.93-.83-1.555-1.855-1.737-2.17-.183-.312-.02-.48.137-.635.14-.14.312-.365.47-.547.16-.182.21-.312.313-.52.1-.208.05-.39-.026-.547-.078-.156-.706-1.7-.967-2.327-.253-.61-.512-.527-.706-.537-.183-.01-.392-.01-.6-.01-.21 0-.547.078-.835.39-.286.313-1.095 1.07-1.095 2.61s1.122 3.02 1.278 3.23c.157.21 2.21 3.374 5.354 4.73 1.02.44 1.81.7 2.43.896 1.05.334 2 .28 2.76.167.84-.125 1.85-.755 2.11-1.458.26-.703.26-1.3.18-1.43-.08-.13-.29-.21-.6-.366z"/>
        </svg>

        {/* Premium elegant tooltip label on hover */}
        <span className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300 ease-out text-xs font-sans font-semibold tracking-wide text-white whitespace-nowrap pl-0 group-hover:pl-2">
          Chat with Us
        </span>
      </motion.a>

    </div>;
}
export default function App() {
  return <Router basename="/Rajput-Cushions">
      <PageTransitionLoader />
      <Routes>
        
        {
    /* PUBLIC eCommerce FRONTEND PORTS */
  }
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="collections" element={<Collections />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="projects" element={<Projects />} />
          <Route path="custom-furniture" element={<CustomFurniture />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="tracking" element={<OrderTracking />} />
          <Route path="compare" element={<CompareProducts />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsOfService />} />
          <Route path="sitemap" element={<Sitemap />} />
        </Route>

        {
    /* SECURE ADMIN PANEL ROOT PATHS */
  }
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="customers" element={<AdminCustomers />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

      </Routes>
    </Router>;
}
