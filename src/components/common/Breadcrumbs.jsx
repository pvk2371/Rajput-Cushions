import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
export default function Breadcrumbs({ items }) {
  return <nav className="flex items-center gap-1.5 py-4 px-4 md:px-8 max-w-7xl mx-auto text-xs text-text-gray font-sans overflow-x-auto whitespace-nowrap">
      <Link
    to="/"
    className="flex items-center gap-1 hover:text-primary-gold transition-colors text-dark-brown"
  >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>
      
      {items.map((item, index) => {
    const isLast = index === items.length - 1;
    return <div key={index} className="flex items-center gap-1.5">
            <ChevronRight className="w-3 h-3 text-light-beige" />
            {isLast || !item.url ? <span className="text-primary-gold font-medium truncate max-w-[200px]">
                {item.label}
              </span> : <Link
      to={item.url}
      className="hover:text-primary-gold transition-colors text-dark-brown"
    >
                {item.label}
              </Link>}
          </div>;
  })}
    </nav>;
}
