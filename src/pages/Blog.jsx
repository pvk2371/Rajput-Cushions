import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Calendar, User, Clock, ArrowRight } from "lucide-react";
import { mockBlogPosts } from "../data/mockData";
import Breadcrumbs from "../components/common/Breadcrumbs";
export default function Blog() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [selectedArticleId, setSelectedArticleId] = useState(null);
  const tags = ["All", "Design Guide", "Trends", "Styling", "Sustainability"];
  const featuredPost = mockBlogPosts[0];
  const filteredPosts = useMemo(() => {
    let posts = mockBlogPosts;
    if (selectedTag === "All") {
      posts = mockBlogPosts.slice(1);
    } else {
      posts = mockBlogPosts.filter((p) => p.category === selectedTag);
    }
    return posts;
  }, [selectedTag]);
  const activeArticle = useMemo(() => {
    return mockBlogPosts.find((p) => p.id === selectedArticleId);
  }, [selectedArticleId]);
  return <div className="bg-cream min-h-screen pb-16">
      <Breadcrumbs items={[{ label: "Bespoke Journals" }]} />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        
        {
    /* Title Header */
  }
        <div className="text-center max-w-xl mx-auto flex flex-col items-center gap-2 mb-12">
          <div className="inline-flex items-center gap-1 bg-primary-gold/15 text-primary-gold px-3 py-1 rounded-full text-[10px] font-sans tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Artisan Wisdom</span>
          </div>
          <h1 className="font-serif font-bold text-3xl md:text-4xl text-dark-brown">
            Rajput Cushion Blog & Insights
          </h1>
          <p className="text-xs md:text-sm text-text-gray font-sans font-light leading-relaxed">
            Tips, ideas, and handpicked philosophies on spatial arrangements, timber care, and luxury interior design styling.
          </p>

          {
    /* Filtering buttons */
  }
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none whitespace-nowrap mt-4">
            {tags.map((tag) => <button
    key={tag}
    onClick={() => setSelectedTag(tag)}
    className={`px-4 py-1.5 rounded-full text-xs font-sans tracking-wide transition-all ${selectedTag === tag ? "bg-primary-gold text-cream font-medium shadow-sm" : "bg-light-beige/50 hover:bg-light-beige text-text-dark border border-border-custom/35"}`}
  >
                {tag}
              </button>)}
          </div>
        </div>

        {
    /* 1. FEATURED ARTICLE BANNER (ONLY SHOWS ON 'ALL' FILTER) */
  }
        {selectedTag === "All" && featuredPost && <div className="bg-cream border border-border-custom rounded-2xl overflow-hidden shadow-sm mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-4">
            
            {
    /* Left featured visual */
  }
            <div className="lg:col-span-7 aspect-[16/10] w-full overflow-hidden rounded-xl relative bg-light-beige/25">
              <img
    src={featuredPost.image}
    alt={featuredPost.title}
    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
  />
              <span className="absolute top-4 left-4 bg-dark-brown text-primary-gold text-[10px] font-sans font-bold uppercase tracking-widest px-3 py-1 rounded">
                FEATURED JOURNAL
              </span>
            </div>

            {
    /* Right featured content */
  }
            <div className="lg:col-span-5 p-4 space-y-4">
              <div className="flex items-center gap-3 text-[10px] text-text-gray font-sans">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {featuredPost.date}
                </span>
                <span className="w-1 h-1 rounded-full bg-light-beige" />
                <span>By {featuredPost.author}</span>
              </div>

              <h2 className="font-serif font-bold text-2xl text-dark-brown leading-snug">
                {featuredPost.title}
              </h2>

              <p className="text-xs md:text-sm text-text-gray leading-relaxed font-sans font-light">
                {featuredPost.excerpt}
              </p>

              <button
    onClick={() => setSelectedArticleId(featuredPost.id)}
    className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold tracking-wider text-primary-gold hover:text-dark-brown uppercase transition-colors pt-2"
  >
                Read Full Entry
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>}

        {
    /* 2. MAIN BLOG GRID CARDS */
  }
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, idx) => <div
    key={post.id}
    className="bg-cream border border-border-custom rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col"
  >
              
              {
    /* Visual wrapper */
  }
              <div className="aspect-16/10 w-full overflow-hidden relative bg-light-beige/25">
                <img
    src={post.image}
    alt={post.title}
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
  />
                
                {
    /* Category tag */
  }
                <span className="absolute top-3 left-3 bg-primary-gold text-cream text-[9px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                  {post.category}
                </span>
              </div>

              {
    /* Text content details */
  }
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 text-[10px] text-text-gray font-sans">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-primary-gold" />
                      {post.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-light-beige" />
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-primary-gold" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-base text-dark-brown group-hover:text-primary-gold transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-text-gray font-sans font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-custom/35 flex items-center justify-between">
                  <span className="text-[10px] text-text-gray font-sans">
                    Author: {post.author}
                  </span>
                  
                  <button
    onClick={() => setSelectedArticleId(post.id)}
    className="inline-flex items-center gap-1 text-xs font-sans font-semibold text-primary-gold hover:text-dark-brown uppercase transition-colors"
  >
                    Read More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>)}
        </div>

      </main>

      {
    /*=========================================
       READING OVERLAY MODAL FOR JOURNAL DETAILS
      =========================================*/
  }
      <AnimatePresence>
        {activeArticle && <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-dark-brown/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
  >
            <motion.div
    initial={{ y: 50, scale: 0.95 }}
    animate={{ y: 0, scale: 1 }}
    exit={{ y: 50, scale: 0.95 }}
    className="bg-cream rounded-2xl max-w-2xl w-full p-6 md:p-8 max-h-[85vh] overflow-y-auto shadow-2xl space-y-6 border border-primary-gold/20"
  >
              
              {
    /* Top Row Close button */
  }
              <div className="flex items-center justify-between pb-3 border-b border-border-custom/40">
                <span className="text-primary-gold uppercase font-mono text-[10px] tracking-widest font-semibold">{activeArticle.category}</span>
                <button
    onClick={() => setSelectedArticleId(null)}
    className="p-1 rounded-full bg-light-beige hover:bg-primary-gold hover:text-cream text-dark-brown transition-colors font-bold font-sans text-xs"
  >
                  Close X
                </button>
              </div>

              {
    /* Title & Author */
  }
              <div className="space-y-2">
                <h2 className="font-serif font-bold text-2xl text-dark-brown leading-snug">
                  {activeArticle.title}
                </h2>
                
                <div className="flex items-center gap-4 text-xs text-text-gray font-sans">
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-primary-gold" />
                    {activeArticle.author}
                  </span>
                  <span className="w-1 h-1 bg-light-beige rounded-full" />
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-primary-gold" />
                    {activeArticle.date}
                  </span>
                </div>
              </div>

              {
    /* Cover Image */
  }
              <div className="aspect-[2/1] rounded-xl overflow-hidden border border-border-custom bg-light-beige/30">
                <img src={activeArticle.image} alt="" className="w-full h-full object-cover" />
              </div>

              {
    /* Content body text */
  }
              <div className="font-sans text-xs md:text-sm text-text-dark leading-relaxed space-y-4">
                <p className="font-semibold text-dark-brown italic">
                  {activeArticle.excerpt}
                </p>
                <p className="font-light">
                  {activeArticle.content}
                </p>
                <div className="p-4 bg-light-beige/30 rounded-xl border border-border-custom/45">
                  <h4 className="font-serif font-bold text-xs text-dark-brown">Rajput Cushion Editorial</h4>
                  <p className="text-[11px] text-text-gray font-sans leading-normal font-light mt-1 text-justify">
                    This article is published as part of Rajput Cushion’s quarterly artisan design research catalog. For dimensional custom blueprints matching styling templates, subscribe to our home delivery mailing lists.
                  </p>
                </div>
              </div>

            </motion.div>
          </motion.div>}
      </AnimatePresence>

    </div>;
}
