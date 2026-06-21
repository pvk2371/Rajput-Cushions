import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Linkedin,
  MapPin,
  Phone,
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw
} from "lucide-react";
export default function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing to Rajput Cushion Newsletter!");
  };
  return <footer className="bg-dark-brown text-cream mt-16 border-t-2 border-primary-gold/30">
      
      {
    /* Brand values banner strip */
  }
      <div className="border-b border-cream/10 bg-black/10 py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4 px-4">
            <div className="p-3 rounded-full bg-primary-gold/10 text-primary-gold border border-primary-gold/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="font-serif font-bold text-sm tracking-wide text-cream">Premium Quality Assurance</p>
              <p className="text-xs text-text-gray mt-0.5">Finest certified sustainable hardwoods & textiles.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 px-4 border-y md:border-y-0 md:border-x border-cream/15 py-4 md:py-0">
            <div className="p-3 rounded-full bg-primary-gold/10 text-primary-gold border border-primary-gold/30">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <p className="font-serif font-bold text-sm tracking-wide text-cream">Insured Home Delivery</p>
              <p className="text-xs text-text-gray mt-0.5">Carefully boxed white-glove transport to your doorstep.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 px-4 font-sans justify-start">
            <div className="p-3 rounded-full bg-primary-gold/10 text-primary-gold border border-primary-gold/30">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <p className="font-serif font-bold text-sm tracking-wide text-cream">7-Day Return Guarantee</p>
              <p className="text-xs text-text-gray mt-0.5">Hassle-free, smooth change-of-mind support.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        
        {
    /* About Column */
  }
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-md bg-cream flex items-center justify-center border border-primary-gold text-dark-brown font-serif font-bold text-lg shadow relative overflow-hidden">
              <span className="absolute z-0">R</span>
              <img
    src="https://lh3.googleusercontent.com/d/1DYu-YGZEKQfK5hsegv-7wfbqEi8rDaZa"
    alt="Rajput Cushion Logo"
    className="w-full h-full object-cover relative z-10 bg-cream"
    referrerPolicy="no-referrer"
  />
            </div>
            <span className="font-serif font-bold text-xl tracking-tight text-cream">
              Rajput<span className="text-primary-gold font-sans font-light"> Cushion</span>
            </span>
          </Link>
          <p className="text-xs md:text-sm text-text-gray leading-relaxed font-light">
            Sofa & Upholstery Experts in Pune. Specializing in quality custom design sofas, cushion repair, foam upgrades, and leather sofa restoration.
          </p>
          
          {
    /* Socials */
  }
          <div className="flex items-center gap-3 mt-2">
            <a
    href="https://instagram.com"
    target="_blank"
    rel="noreferrer"
    className="p-1.5 rounded-full border border-cream/20 hover:border-primary-gold text-cream hover:text-primary-gold transition-colors"
    title="Follow us on Instagram"
  >
              <Instagram className="w-4 h-4" />
            </a>
            <a
    href="https://facebook.com"
    target="_blank"
    rel="noreferrer"
    className="p-1.5 rounded-full border border-cream/20 hover:border-primary-gold text-cream hover:text-primary-gold transition-colors"
    title="Follow us on Facebook"
  >
              <Facebook className="w-4 h-4" />
            </a>
            <a
    href="https://linkedin.com"
    target="_blank"
    rel="noreferrer"
    className="p-1.5 rounded-full border border-cream/20 hover:border-primary-gold text-cream hover:text-primary-gold transition-colors"
    title="Connect with us on LinkedIn"
  >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {
    /* Categories Grid Links */
  }
        <div>
          <h4 className="font-serif font-semibold text-sm tracking-widest text-primary-gold uppercase mb-4 border-b border-cream/10 pb-2">Collections</h4>
          <ul className="flex flex-col gap-2.5 text-xs text-text-gray font-sans">
            <li><Link to="/shop?category=Living%20Room" className="hover:text-primary-gold transition-colors">Living Room Luxury</Link></li>
            <li><Link to="/shop?category=Bedroom" className="hover:text-primary-gold transition-colors">Premium Bedroom Sets</Link></li>
            <li><Link to="/shop?category=Dining%20Room" className="hover:text-primary-gold transition-colors">Sophisticated Dining</Link></li>
            <li><Link to="/shop?category=Office" className="hover:text-primary-gold transition-colors">Executive Office Suites</Link></li>
            <li><Link to="/shop?category=Outdoor" className="hover:text-primary-gold transition-colors">All-Weather Outdoor Patio</Link></li>
            <li><Link to="/shop?category=Decor%20%26%20Lighting" className="hover:text-primary-gold transition-colors">Decor & Ambient Lighting</Link></li>
          </ul>
        </div>

        {
    /* Corporate Services */
  }
        <div>
          <h4 className="font-serif font-semibold text-sm tracking-widest text-primary-gold uppercase mb-4 border-b border-cream/10 pb-2">Information</h4>
          <ul className="flex flex-col gap-2.5 text-xs text-text-gray font-sans">
            <li><Link to="/about" className="hover:text-primary-gold transition-colors">Our Proud Heritage</Link></li>
            <li><Link to="/tracking" className="hover:text-primary-gold transition-colors">Trace Active Order</Link></li>
            <li><Link to="/custom-furniture" className="hover:text-primary-gold transition-colors">Bespoke Custom Furniture</Link></li>
            <li><Link to="/projects" className="hover:text-primary-gold transition-colors">Interior Portfolios</Link></li>
            <li><Link to="/contact" className="hover:text-primary-gold transition-colors">Showroom Outlets</Link></li>
            <li><Link to="/compare" className="hover:text-primary-gold transition-colors">Product Spec Comparison</Link></li>
          </ul>
        </div>

        {
    /* Contact/Newsletter */
  }
        <div className="flex flex-col gap-3">
          <h4 className="font-serif font-semibold text-sm tracking-widest text-primary-gold uppercase mb-2 border-b border-cream/10 pb-2">Subsequent News</h4>
          <p className="text-xs text-text-gray leading-relaxed font-sans font-light">
            Subscribe to receive priority preview keys for upcoming bespoke catalog collections.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="flex items-center mt-1">
            <input
    type="email"
    required
    placeholder="Your email address"
    className="bg-cream/10 border border-cream/20 text-cream px-3 py-2 text-xs rounded-l focus:outline-none focus:ring-1 focus:ring-primary-gold w-full"
  />
            <button
    type="submit"
    className="bg-primary-gold hover:bg-cream text-dark-brown font-serif font-medium text-xs px-3 py-2 rounded-r transition-colors flex items-center"
    aria-label="Subscribe"
  >
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {
    /* Direct Address */
  }
          <div className="flex flex-col gap-2 text-xs text-text-gray mt-3 pt-3 border-t border-cream/10">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-primary-gold shrink-0" />
              <span>Rahatani, Pune, Maharashtra</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-primary-gold shrink-0" />
              <span>99220 00615</span>
            </div>
          </div>
        </div>

      </div>

      {
    /* Copy info */
  }
      <div className="border-t border-cream/10 py-6 px-4 text-center text-[10px] md:text-xs text-text-gray/80 font-sans tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>&copy; {(/* @__PURE__ */ new Date()).getFullYear()} Rajput Cushion. All Rights Reserved.</span>
          <div className="flex items-center gap-6 sm:mr-16">
            <Link to="/privacy" className="hover:text-primary-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-gold transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-primary-gold transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>

    </footer>;
}
