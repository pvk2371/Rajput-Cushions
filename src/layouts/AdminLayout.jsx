import { Link, useLocation, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  Warehouse,
  ShoppingBag,
  Users,
  Settings as SettingsIcon,
  ShieldCheck,
  Layers,
  Tag,
  Star,
  LogOut
} from "lucide-react";
export default function AdminLayout() {
  const location = useLocation();
  const menuItems = [
    { name: "Dashboard", path: "/admin", icon: <LayoutDashboard className="w-4 h-4" /> },
    { name: "Products Manager", path: "/admin/products", icon: <Warehouse className="w-4 h-4" /> },
    { name: "Orders Queue", path: "/admin/orders", icon: <ShoppingBag className="w-4 h-4" /> },
    { name: "Customers Directory", path: "/admin/customers", icon: <Users className="w-4 h-4" /> },
    { name: "General Settings", path: "/admin/settings", icon: <SettingsIcon className="w-4 h-4" /> }
  ];
  const placeholderItems = [
    { name: "Categories Manager", icon: <Layers className="w-4 h-4" /> },
    { name: "Reviews Panel", icon: <Star className="w-4 h-4" /> },
    { name: "Discount Coupons", icon: <Tag className="w-4 h-4" /> }
  ];
  return <div className="min-h-screen bg-light-beige/30 grid grid-cols-1 lg:grid-cols-12">
      
      {
    /*=========================================
       1. LEFT SIDE NAVIGATION DRAWER (STICKY)
      =========================================*/
  }
      <aside className="lg:col-span-3 xl:col-span-2.5 bg-dark-brown text-cream border-r border-primary-gold/15 flex flex-col justify-between sticky top-0 h-screen z-10 p-5 font-sans">
        
        <div className="space-y-8">
          
          {
    /* Brand header */
  }
          <div className="flex items-center gap-2 pb-5 border-b border-cream/10">
            <div className="w-7 h-7 rounded bg-primary-gold text-dark-brown font-serif font-black flex items-center justify-center text-sm">
              A
            </div>
            <div>
              <p className="font-serif font-bold text-base leading-none text-cream">Rajput Cushion</p>
              <p className="text-[10px] text-primary-gold uppercase tracking-widest font-black mt-0.5">Admin Console</p>
            </div>
          </div>

          {
    /* Menu triggers */
  }
          <div className="space-y-5">
            <div>
              <p className="text-[9px] text-text-gray tracking-wider uppercase font-black mb-2 px-3">Primary consoles</p>
              <nav className="flex flex-col gap-1 text-xs">
                {menuItems.map((item) => {
    const isActive = location.pathname === item.path;
    return <Link
      key={item.name}
      to={item.path}
      className={`flex items-center gap-3 px-3 py-2.5 rounded transition-all ${isActive ? "bg-primary-gold text-cream font-bold shadow-sm" : "hover:bg-cream/5 text-text-gray hover:text-cream"}`}
    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>;
  })}
              </nav>
            </div>

            {
    /* Placeholder items */
  }
            <div>
              <p className="text-[9px] text-text-gray tracking-wider uppercase font-black mb-2 px-3">Under construction</p>
              <div className="flex flex-col gap-1 text-xs opacity-60">
                {placeholderItems.map((item) => <button
    key={item.name}
    onClick={() => alert(`"${item.name}" console interface is under design schema development for Rajput Cushion v2.0`)}
    className="flex items-center gap-3 px-3 py-2.5 text-text-gray hover:text-cream rounded text-left transition-colors"
  >
                    {item.icon}
                    <span>{item.name}</span>
                  </button>)}
              </div>
            </div>

          </div>

        </div>

        {
    /* Exit anchor / Footer info */
  }
        <div className="pt-4 border-t border-cream/10 space-y-3">
          <div className="flex items-center gap-2 px-2.5 py-1 text-xs text-text-gray font-light">
            <ShieldCheck className="w-4 h-4 text-primary-gold shrink-0" />
            <span>Root level access granted</span>
          </div>

          <Link
    to="/"
    className="flex items-center gap-2 px-3 py-2 text-xs hover:bg-cream/5 text-primary-gold hover:text-cream rounded transition-colors font-bold uppercase tracking-wider justify-center border border-primary-gold/15"
  >
            <LogOut className="w-3.5 h-3.5" />
            Exit Dashboard
          </Link>
        </div>

      </aside>


      {
    /*=========================================
       2. MAIN ADMINISTRATIVE CONTENT WRAPPER
      =========================================*/
  }
      <div className="lg:col-span-9 xl:col-span-9.5 flex flex-col min-h-screen">
        
        {
    /* TOP ADMINISTRATIVE HEADER BAR */
  }
        <header className="bg-cream border-b border-border-custom/50 py-4 px-6 md:px-8 flex items-center justify-between sticky top-0 bg-cream/90 backdrop-blur-md z-10 shadow-sm">
          
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            <p className="text-xs text-text-gray font-sans font-light">
              Server status: <span className="font-semibold text-dark-brown">Operational Live</span> • June 19, 2026
            </p>
          </div>

          {
    /* Quick exit links */
  }
          <div className="flex items-center gap-4 text-xs font-sans">
            <Link
    to="/"
    className="px-3.5 py-1.5 bg-light-beige hover:bg-dark-brown text-dark-brown hover:text-cream rounded border border-border-custom font-medium transition-colors"
  >
              Examine live outlet portal
            </Link>
            
            <div className="flex items-center gap-2 border-l border-border-custom pl-4 py-1">
              <span className="w-7 h-7 rounded-full bg-dark-brown text-primary-gold flex items-center justify-center font-bold text-xs select-none shadow">
                PK
              </span>
              <div className="hidden sm:block text-left text-[11px] leading-tight">
                <p className="font-semibold text-dark-brown">Prasad Khokale</p>
                <p className="text-text-gray font-light uppercase">Senior Administrator</p>
              </div>
            </div>
          </div>

        </header>

        {
    /* PAGE SCREEN CONTENT CANVAS */
  }
        <main className="p-6 md:p-8 flex-1">
          <Outlet />
        </main>

      </div>

    </div>;
}
