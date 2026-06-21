import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/common/Breadcrumbs";
import { 
  Compass, 
  ShoppingBag, 
  ShieldCheck, 
  UserCheck, 
  Map, 
  ArrowRight,
  Anchor,
  FileText,
  Bookmark,
  Layers,
  Wrench,
  Sparkles,
  BookOpen,
  Mail,
  Truck,
  RotateCcw
} from "lucide-react";

export default function Sitemap() {
  const categories = [
    {
      title: "Core Brand Navigation",
      description: "Primary brand pages, design galleries, and custom consulting.",
      icon: Compass,
      links: [
        { name: "Home Portfolio", path: "/", desc: "Welcome portal, restorative value statement, and reviews.", icon: Anchor },
        { name: "Our Story & Brand", path: "/about", desc: "Craftsmanship heritage, local milestone timelines, and workshop standards.", icon: Bookmark },
        { name: "Bespoke Custom Orders", path: "/custom-furniture", desc: "Tailored sofa setups, customized cushion configuration wizard.", icon: Wrench },
        { name: "Pune Logistics & Design Projects", path: "/projects", desc: "Exquisite case study showcases completed across Rahatani & Baner.", icon: Layers },
        { name: "Bespoke Journals & Guides", path: "/blog", desc: "Expert leather maintenance advice, foam resilience updates.", icon: BookOpen },
        { name: "Talk to Sofa Experts", path: "/contact", desc: "Instant consultation hotline and on-site visits coordinates.", icon: Mail }
      ]
    },
    {
      title: "Store & Shopping Services",
      description: "Direct transactional portals, specification filters, and customer utilities.",
      icon: ShoppingBag,
      links: [
        { name: "Complete Sofa Catalog", path: "/shop", desc: "Premium sectionals, Chesterfield couches, and upholstery products.", icon: ShoppingBag },
        { name: "Premium Design Series", path: "/collections", desc: "Themed groupings including teakwood foundations and luxury textiles.", icon: Sparkles },
        { name: "Specification Comparer", path: "/compare", desc: "Side-by-side dimension, foam density, and material weight matcher.", icon: RotateCcw },
        { name: "Logistics Tracker", path: "/tracking", desc: "Real-time Pune shipping coordinates and fabrication progress status.", icon: Truck },
        { name: "My Bag Selection", path: "/cart", desc: "Selected custom designs awaiting final order deployment.", icon: ShoppingBag }
      ]
    },
    {
      title: "Corporate Governance & Privacy",
      description: "Transparency guidelines, terms of purchase, and data encryption policies.",
      icon: ShieldCheck,
      links: [
        { name: "Privacy Policy", path: "/privacy", desc: "Data protection standards, contact records treatment, and secure hosting.", icon: ShieldCheck },
        { name: "Terms of Service", path: "/terms", desc: "Terms of purchase, custom-crafted warranty rules, and local shipping protocols.", icon: FileText },
        { name: "Website Sitemap Index", path: "/sitemap", desc: "Complete visual structure and navigation roadmap of Rajput Cushion.", icon: Map }
      ]
    },
    {
      title: "Administrative Control Center",
      description: "Expert backend systems for active product catalogs and client queues.",
      icon: UserCheck,
      links: [
        { name: "Admin Dashboard", path: "/admin", desc: "Operational indicators, Pune order density, and gross revenue metrics.", icon: UserCheck },
        { name: "Active Catalog Manager", path: "/admin/products", desc: "Insert or update available custom couch models and fabric prices.", icon: Layers },
        { name: "Transactional Order Log", path: "/admin/orders", desc: "Tracking active fabrication pipelines and dispatching logistic teams.", icon: Truck }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-cream min-h-screen py-8 md:py-12"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Breadcrumbs Navigation */}
        <Breadcrumbs items={[{ label: "Sitemap Index" }]} />

        {/* Header Cover */}
        <section className="text-center max-w-2xl mx-auto mt-8 mb-16 space-y-4">
          <span className="text-primary-gold text-xs font-sans tracking-widest font-semibold uppercase">Directory Atlas</span>
          <h1 className="font-serif font-bold text-3.5xl md:text-4.5xl text-dark-brown leading-tight">
            Sitemap Index
          </h1>
          <p className="text-xs md:text-sm text-text-gray font-sans mt-2">
            A comprehensive visual index of resources, restoration request workflows, catalogs, and secure terminals.
          </p>
          <div className="w-12 h-1 bg-primary-gold mx-auto rounded mt-3" />
        </section>

        {/* Main Hierarchy Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {categories.map((cat, idx) => {
            const CategoryIcon = cat.icon;
            return (
              <motion.div
                key={idx}
                className="bg-cream border border-border-custom rounded-2xl p-6 md:p-8 shadow-sm flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              >
                {/* Visual Category Header */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-light-beige/50 border border-primary-gold/25 rounded-xl text-primary-gold shrink-0">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="font-serif font-bold text-base md:text-lg text-dark-brown">
                        {cat.title}
                      </h2>
                      <p className="text-[11px] text-text-gray font-sans font-light leading-normal mt-0.5">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                  <div className="h-[1px] bg-border-custom/40 w-full" />
                </div>

                {/* Sub-links Stack */}
                <div className="space-y-4 flex-1">
                  {cat.links.map((link, linkIdx) => {
                    const LinkIcon = link.icon;
                    return (
                      <Link
                        key={linkIdx}
                        to={link.path}
                        className="group flex gap-4 p-3 rounded-xl border border-transparent hover:border-border-custom hover:bg-light-beige/20 transition-all duration-300"
                      >
                        <div className="p-2 bg-light-beige/30 rounded-lg text-dark-brown/70 group-hover:bg-primary-gold/15 group-hover:text-primary-gold transition-all shrink-0 h-9 w-9 flex items-center justify-center">
                          <LinkIcon className="w-4 h-4" />
                        </div>
                        <div className="space-y-1 min-w-0 flex-1">
                          <div className="flex items-center gap-1.5">
                            <span className="font-serif font-bold text-xs sm:text-sm text-dark-brown group-hover:text-primary-gold transition-colors truncate">
                              {link.name}
                            </span>
                            <ArrowRight className="w-3 h-3 text-text-gray/40 opacity-0 group-hover:opacity-100 group-hover:transform group-hover:translate-x-1 transition-all" />
                          </div>
                          <p className="text-[11px] text-text-gray font-sans font-light leading-snug truncate">
                            {link.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Footer Notes on Sitemap */}
        <section className="mt-16 border-t border-border-custom/50 pt-8 text-center max-w-xl mx-auto space-y-3">
          <p className="text-xs text-text-gray font-sans leading-relaxed">
            Need localized support? We serve Rahatani, Wakad, Baner, Hinjawadi, Ravet, and other surrounding nodes in Pune. 
          </p>
          <div className="flex items-center justify-center gap-4 text-[11px] font-serif font-bold text-dark-brown">
            <a href="tel:9922000615" className="hover:text-primary-gold transition-colors">
              +91 99220 00615
            </a>
            <span>•</span>
            <Link to="/contact" className="hover:text-primary-gold transition-colors">
              Ask For Custom Visit
            </Link>
          </div>
        </section>

      </div>
    </motion.div>
  );
}
