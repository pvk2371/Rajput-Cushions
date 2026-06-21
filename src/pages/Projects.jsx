import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Calendar, MapPin, ClipboardList } from "lucide-react";
import { mockProjects } from "../data/mockData";
import Breadcrumbs from "../components/common/Breadcrumbs";
export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Residential", "Commercial", "Office", "Hospitality"];
  const filteredProjects = selectedCategory === "All" ? mockProjects : mockProjects.filter((p) => p.category === selectedCategory);
  const breadcrumbItems = [{ label: "Work Portfolios" }];
  return <div className="bg-cream min-h-screen pb-16">
      <Breadcrumbs items={breadcrumbItems} />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        
        {
    /* Page title header */
  }
        <div className="text-center max-w-xl mx-auto flex flex-col items-center gap-3 mb-12">
          <div className="inline-flex items-center gap-1 bg-primary-gold/15 text-primary-gold px-3 py-1 rounded-full text-[10px] font-sans tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Masterful Spaces</span>
          </div>
          <h1 className="font-serif font-bold text-3xl md:text-4xl text-dark-brown">
            Our Architectural Portfolios
          </h1>
          <p className="text-xs md:text-sm text-text-gray font-sans font-light leading-relaxed">
            Witness how Rajput Cushion custom designs, sofa repair expertise, and upholstery masterpieces have transformed premium corporate offices, luxury lounges, and cozy estates nationwide.
          </p>

          {
    /* Filtering buttons */
  }
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none whitespace-nowrap mt-4">
            {categories.map((cat) => <button
    key={cat}
    onClick={() => setSelectedCategory(cat)}
    className={`px-4 py-1.5 rounded-full text-xs font-sans tracking-wide transition-all ${selectedCategory === cat ? "bg-primary-gold text-cream font-medium shadow-sm" : "bg-light-beige/50 hover:bg-light-beige text-text-dark border border-border-custom/35"}`}
  >
                {cat}
              </button>)}
          </div>
        </div>

        {
    /* Portfolios grid list */
  }
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, idx) => <motion.div
    key={proj.id}
    layout
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.3 }}
    className="bg-cream border border-border-custom hover:border-primary-gold/45 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
  >
                
                {
    /* Visual crop */
  }
                <div className="aspect-[3/2] w-full overflow-hidden relative bg-light-beige/25">
                  <img
    src={proj.image}
    alt={proj.title}
    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/70 via-dark-brown/15 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  {
    /* Floating category */
  }
                  <span className="absolute top-4 left-4 bg-primary-gold text-cream text-[10px] font-sans font-medium uppercase tracking-wider px-2.5 py-1 rounded">
                    {proj.category}
                  </span>
                </div>

                {
    /* Details layout */
  }
                <div className="p-6 space-y-4">
                  <h2 className="font-serif font-bold text-xl text-dark-brown leading-snug group-hover:text-primary-gold transition-colors duration-200">
                    {proj.title}
                  </h2>
                  
                  <p className="text-xs md:text-sm text-text-gray font-sans font-light leading-relaxed">
                    {proj.description}
                  </p>

                  {
    /* Specification meta grid */
  }
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border-custom/40 text-[10px] sm:text-xs text-text-dark font-sans font-medium">
                    <div className="flex items-center gap-1.5">
                      <ClipboardList className="w-3.5 h-3.5 text-primary-gold shrink-0" />
                      <div>
                        <p className="text-[9px] text-text-gray font-light uppercase">Patron Client</p>
                        <p className="truncate text-[11px] leading-tight text-dark-brown">{proj.client}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 border-x border-border-custom/30 px-3">
                      <Calendar className="w-3.5 h-3.5 text-primary-gold shrink-0" />
                      <div>
                        <p className="text-[9px] text-text-gray font-light uppercase">Year of build</p>
                        <p className="text-[11px] leading-tight text-dark-brown">{proj.year}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-primary-gold shrink-0" />
                      <div>
                        <p className="text-[9px] text-text-gray font-light uppercase">Site Location</p>
                        <p className="truncate text-[11px] leading-tight text-dark-brown">{proj.location}</p>
                      </div>
                    </div>
                  </div>

                </div>

              </motion.div>)}
          </AnimatePresence>
        </div>

      </main>
    </div>;
}
