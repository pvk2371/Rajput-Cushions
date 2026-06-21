import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { mockCollections } from "../data/mockData";
import Breadcrumbs from "../components/common/Breadcrumbs";
export default function Collections() {
  const breadcrumbItems = [{ label: "Our room collections" }];
  return <div className="bg-cream min-h-screen pb-12">
      <Breadcrumbs items={breadcrumbItems} />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        
        {
    /* Header Hero Title */
  }
        <div className="text-center max-w-xl mx-auto flex flex-col items-center gap-3 mb-12">
          <div className="inline-flex items-center gap-1.5 bg-primary-gold/15 text-primary-gold px-3 py-1 rounded-full text-[10px] font-sans tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Arrangements</span>
          </div>
          <h1 className="font-serif font-bold text-3xl md:text-4xl text-dark-brown">
            Bespoke Room Arrangements
          </h1>
          <p className="text-xs md:text-sm text-text-gray font-sans font-light leading-relaxed">
            Explore meticulously curated spatial setups crafted by our internal interior designers. Select a room to browse coordinating pieces.
          </p>
        </div>

        {
    /* Collections Grid */
  }
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockCollections.map((col, idx) => <motion.div
    key={col.id}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: idx * 0.1 }}
    className="bg-cream border border-border-custom hover:border-primary-gold/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
  >
              
              {
    /* Image box with overlay */
  }
              <div className="aspect-4/3 overflow-hidden relative bg-light-beige/25">
                <img
    src={col.image}
    alt={col.name}
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-750 ease-out"
  />
                
                {
    /* Floating pill with count */
  }
                <span className="absolute top-4 right-4 bg-dark-brown/90 text-primary-gold font-sans font-bold text-[10px] tracking-wider uppercase px-3 py-1 rounded border border-primary-gold/25 shadow">
                  {col.itemsCount}+ Coordinated Pieces
                </span>
                
                <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/50 to-transparent" />
              </div>

              {
    /* Text contents */
  }
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="font-serif font-bold text-xl text-dark-brown group-hover:text-primary-gold transition-colors">
                    {col.name} Collection
                  </h2>
                  <p className="text-xs text-text-gray leading-relaxed font-sans mt-2.5 font-light">
                    {col.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-border-custom/40 mt-6 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-sans tracking-widest text-primary-gold font-bold">
                    Rajput Cushion Exclusive
                  </span>
                  
                  <Link
    to={`/shop?category=${encodeURIComponent(col.name)}`}
    className="inline-flex items-center gap-1 text-xs font-sans font-semibold tracking-wider text-dark-brown hover:text-primary-gold uppercase group-hover:translate-x-1 transition-transform"
  >
                    Browse Pieces
                    <ArrowRight className="w-3.5 h-3.5 text-primary-gold" />
                  </Link>
                </div>
              </div>

            </motion.div>)}
        </div>

      </main>
    </div>;
}
