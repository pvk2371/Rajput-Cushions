import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  Heart,
  User,
  ShoppingBag,
  Menu,
  X,
  Sparkles,
  ChevronRight,
  ArrowRight,
  HelpCircle
} from "lucide-react";
import {
  useCartStore,
  useWishlistStore,
  useSearchStore,
  useMobileMenuStore
} from "../../app/store/useStore";
import { mockProducts } from "../../data/mockData";
export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const cartCount = useCartStore((state) => state.getCartCount());
  const wishlistCount = useWishlistStore((state) => state.wishlist.length);
  const { isSearchOpen, setSearchOpen, searchQuery, setSearchQuery } = useSearchStore();
  const { isMobileMenuOpen, setMobileMenuOpen } = useMobileMenuStore();
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Shop", path: "/shop" },
    { name: "Collections", path: "/collections" },
    { name: "Projects", path: "/projects" },
    { name: "Custom Furniture", path: "/custom-furniture" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];
  const filteredSearchProducts = searchQuery.trim() ? mockProducts.filter(
    (product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()) || product.category.toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchOpen(false);
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
    }
  };
  return <>
      {
    /* Main Sticky Header */
  }
      <header className="sticky top-0 bg-cream/90 backdrop-blur-md border-b border-border-custom/50 py-4 px-4 md:px-8 z-40 transition-all duration-300 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {
    /* Elegant Logo / Brand */
  }
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-md bg-dark-brown flex items-center justify-center border border-primary-gold text-primary-gold font-serif font-bold text-lg shadow-md relative overflow-hidden group-hover:bg-primary-gold group-hover:text-dark-brown transition-all duration-300">
              <span className="absolute z-0">R</span>
              <img
    src="https://lh3.googleusercontent.com/d/1DYu-YGZEKQfK5hsegv-7wfbqEi8rDaZa"
    alt="Rajput Cushion Logo"
    className="w-full h-full object-cover relative z-10 bg-dark-brown"
    referrerPolicy="no-referrer"
  />
            </div>
            <span className="font-serif font-bold text-2xl tracking-tight text-dark-brown group-hover:text-primary-gold transition-colors duration-300">
              Rajput<span className="text-primary-gold font-sans font-light"> Cushion</span>
            </span>
          </Link>

          {
    /* Desktop Navigation Link Array */
  }
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
    const isActive = location.pathname === link.path;
    return <Link
      key={link.path}
      to={link.path}
      className={`px-3 py-1.5 text-xs xl:text-sm font-sans tracking-wider hover:text-primary-gold transition-all duration-200 relative ${isActive ? "text-primary-gold font-medium" : "text-text-dark font-normal"}`}
    >
                  {link.name}
                  {isActive && <motion.div
      layoutId="navUnderline"
      className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary-gold rounded-full"
      transition={{ type: "spring", stiffness: 380, damping: 30 }}
    />}
                </Link>;
  })}
          </nav>

          {
    /* Header Action Tools */
  }
          <div className="flex items-center gap-4">
            
            {
    /* Search Toggle */
  }
            <button
    id="search-toggle-btn"
    onClick={() => setSearchOpen(true)}
    className="p-1.5 text-dark-brown hover:text-primary-gold transition-colors relative"
    title="Search Products"
  >
              <Search className="w-5 h-5" />
            </button>

            {
    /* Compare Shortcut Link */
  }
            <Link
    to="/compare"
    className="p-1.5 text-dark-brown hover:text-primary-gold transition-colors hidden sm:block relative"
    title="Compare Products"
  >
              <HelpCircle className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary-gold animate-ping" />
            </Link>

            {
    /* Wishlist Link with Badging */
  }
            <Link
    to="/wishlist"
    className="p-1.5 text-dark-brown hover:text-primary-gold transition-colors relative"
    title="View Wishlist"
  >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && <span className="absolute -top-1.5 -right-1.5 bg-primary-gold text-cream text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold font-sans border border-cream shadow-sm">
                  {wishlistCount}
                </span>}
            </Link>

            {
    /* Shopping Cart Slide-out trigger/Link with count */
  }
            <Link
    to="/cart"
    className="p-1.5 text-dark-brown hover:text-primary-gold transition-colors relative"
    title="View Cart"
  >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && <span className="absolute -top-1.5 -right-1.5 bg-dark-brown text-primary-gold text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold font-sans border border-primary-gold shadow-sm">
                  {cartCount}
                </span>}
            </Link>

            {
    /* Admin/User Profile Dropdown Container */
  }
            <div className="relative">
              <button
    id="user-profile-menu"
    onClick={() => setShowUserDropdown(!showUserDropdown)}
    className="p-1.5 text-dark-brown hover:text-primary-gold transition-all"
    title="Account Menu"
  >
                <User className="w-5 h-5" />
              </button>

              <AnimatePresence>
                {showUserDropdown && <>
                    {
    /* Click outside shield */
  }
                    <div
    className="fixed inset-0 z-30"
    onClick={() => setShowUserDropdown(false)}
  />
                    <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    className="absolute right-0 mt-3 w-56 bg-cream border border-border-custom rounded-lg shadow-xl py-2 z-40"
  >
                      <div className="px-4 py-2 border-b border-border-custom">
                        <p className="text-xs text-text-gray font-sans">Signed in as</p>
                        <p className="text-sm font-sans font-medium text-dark-brown truncate">prasadkhokale@gmail.com</p>
                      </div>
                      <Link
    to="/admin"
    onClick={() => setShowUserDropdown(false)}
    className="flex items-center gap-2 px-4 py-2 text-sm text-text-dark hover:bg-light-beige hover:text-primary-gold font-sans transition-colors"
  >
                        <span className="w-2 h-2 rounded-full bg-primary-gold" />
                        Admin Dashboard
                      </Link>
                      <Link
    to="/tracking"
    onClick={() => setShowUserDropdown(false)}
    className="flex items-center gap-2 px-4 py-2 text-sm text-text-dark hover:bg-light-beige hover:text-primary-gold font-sans transition-colors"
  >
                        Track Active Order
                      </Link>
                      <Link
    to="/compare"
    onClick={() => setShowUserDropdown(false)}
    className="flex items-center gap-2 px-4 py-2 text-sm text-text-dark hover:bg-light-beige hover:text-primary-gold font-sans transition-colors"
  >
                        Compare Tool
                      </Link>
                    </motion.div>
                  </>}
              </AnimatePresence>
            </div>

            {
    /* Mobile Shell Menu Trigger */
  }
            <button
    id="mobile-menu-trigger"
    onClick={() => setMobileMenuOpen(true)}
    className="p-1.5 text-dark-brown hover:text-primary-gold lg:hidden transition-colors"
    aria-label="Open Mobile Menu"
  >
              <Menu className="w-6 h-6" />
            </button>

            {
    /* Elegant Header Action consult CTA */
  }
            

          </div>
        </div>
      </header>

      {
    /* SEARCH OVERLAY SCREEN modal drawer */
  }
      <AnimatePresence>
        {isSearchOpen && <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-dark-brown/60 backdrop-blur-sm z-50 flex flex-col justify-start pt-[10vh] px-4"
  >
            <div className="max-w-2xl mx-auto w-full bg-cream rounded-xl p-6 shadow-2xl border border-primary-gold/20">
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif font-bold text-lg text-dark-brown flex items-center gap-1.5">
                  <Search className="w-5 h-5 text-primary-gold" />
                  Search Rajput Cushion Services
                </span>
                <button
    onClick={() => setSearchOpen(false)}
    className="p-1 rounded-full bg-light-beige hover:bg-primary-gold hover:text-cream transition-colors text-dark-brown"
  >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSearchSubmit} className="relative flex items-center mb-4">
                <input
    type="text"
    placeholder="Sofa, bed, marble coffee table, teak..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className="w-full bg-light-beige/50 border border-border-custom rounded-lg px-4 py-3 text-sm text-dark-brown focus:outline-none focus:ring-1 focus:ring-primary-gold focus:border-primary-gold"
    autoFocus
  />
                <button
    type="submit"
    className="absolute right-3 bg-dark-brown hover:bg-primary-gold text-cream hover:text-dark-brown p-1.5 rounded-md transition-colors"
  >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {
    /* Instant Search Results */
  }
              <div className="max-h-60 overflow-y-auto divide-y divide-border-custom">
                {searchQuery.trim() === "" ? <div className="py-6 text-center text-xs text-text-gray font-sans">
                    Type something to search our premium luxury collection.
                  </div> : filteredSearchProducts.length > 0 ? filteredSearchProducts.map((p) => <Link
    key={p.id}
    to={`/product/${p.id}`}
    onClick={() => setSearchOpen(false)}
    className="flex items-center gap-3 py-2.5 hover:bg-light-beige/30 transition-colors px-2 rounded-lg"
  >
                      <img
    src={p.images[0]}
    alt={p.title}
    className="w-10 h-10 object-cover rounded border border-border-custom"
  />
                      <div className="flex-1">
                        <p className="text-xs font-sans font-medium text-dark-brown">{p.title}</p>
                        <p className="text-[10px] text-text-gray font-sans leading-none">{p.category}</p>
                      </div>
                      <span className="text-xs font-sans font-semibold text-primary-gold">
                        ₹{p.price.toLocaleString("en-IN")}
                      </span>
                    </Link>) : <div className="py-6 text-center text-xs text-text-gray font-sans">
                    No items match "{searchQuery}". Try searching for others.
                  </div>}
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>

      {
    /* MOBILE DRAWER NAVIGATION MENU */
  }
      <AnimatePresence>
        {isMobileMenuOpen && <>
            {
    /* Backdrop */
  }
            <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={() => setMobileMenuOpen(false)}
    className="fixed inset-0 bg-dark-brown/50 backdrop-blur-xs z-50 lg:hidden"
  />

            {
    /* Sidebar drawer content */
  }
            <motion.div
    initial={{ x: "100%" }}
    animate={{ x: 0 }}
    exit={{ x: "100%" }}
    transition={{ type: "tween", duration: 0.3 }}
    className="fixed inset-y-0 right-0 max-w-[280px] w-full bg-cream z-55 shadow-2xl flex flex-col justify-between overflow-y-auto lg:hidden"
  >
              <div className="p-5">
                <div className="flex items-center justify-between pb-4 border-b border-border-custom font-serif">
                  <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-md bg-dark-brown flex items-center justify-center border border-primary-gold text-primary-gold font-serif font-bold text-sm relative overflow-hidden">
                      <span className="absolute z-0">R</span>
                      <img
    src="https://lh3.googleusercontent.com/d/1DYu-YGZEKQfK5hsegv-7wfbqEi8rDaZa"
    alt="Rajput Cushion Logo"
    className="w-full h-full object-cover relative z-10 bg-dark-brown"
    referrerPolicy="no-referrer"
  />
                    </div>
                    <span className="font-bold text-lg text-dark-brown tracking-tight">
                      Rajput<span className="text-primary-gold font-sans font-light"> Cushion</span>
                    </span>
                  </Link>
                  <button
    onClick={() => setMobileMenuOpen(false)}
    className="p-1.5 rounded-full bg-light-beige hover:bg-primary-gold text-dark-brown transition-colors"
  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col gap-1.5 mt-6">
                  {navLinks.map((link) => {
    const isActive = location.pathname === link.path;
    return <Link
      key={link.path}
      to={link.path}
      onClick={() => setMobileMenuOpen(false)}
      className={`px-4 py-2.5 rounded-lg text-sm font-sans tracking-wide transition-all ${isActive ? "bg-primary-gold text-cream font-medium" : "text-text-dark hover:bg-light-beige"}`}
    >
                        {link.name}
                      </Link>;
  })}
                </div>
              </div>

              {
    /* Mobile Drawer Footer Info */
  }
              <div className="p-5 border-t border-border-custom bg-light-beige/30">
                <p className="text-[10px] font-sans tracking-widest text-text-gray uppercase mb-2">HAVE QUESTIONS?</p>
                <p className="text-xs font-sans text-dark-brown font-medium">99220 00615</p>
                <p className="text-[11px] font-sans text-text-gray break-all">Rahatani, Pune, Maharashtra</p>
                
                <Link
    to="/admin"
    onClick={() => setMobileMenuOpen(false)}
    className="mt-4 flex items-center justify-center gap-2 bg-dark-brown text-cream hover:bg-primary-gold hover:text-dark-brown text-xs py-2 rounded-md transition-all font-sans font-medium uppercase tracking-wider shadow"
  >
                  Admin Console
                </Link>
              </div>
            </motion.div>
          </>}
      </AnimatePresence>
    </>;
}
