import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Award,
  Sparkles,
  Wrench,
  Truck,
  RotateCcw,
  ArrowRight,
  ArrowUpRight,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Check,
  Heart,
  Hammer,
  Star
} from "lucide-react";
import { mockProducts } from "../data/mockData";
import ProductCard from "../components/common/ProductCard";
export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const categories = ["All", "Living Room", "Bedroom", "Office", "Decor & Lighting"];
  const filteredProducts = selectedCategory === "All" ? mockProducts.slice(0, 6) : mockProducts.filter((p) => p.category === selectedCategory);
  const stats = [
    { value: "Pune's Best", label: "Rahatani Location" },
    { value: "9:30 AM", label: "To 9:00 PM All Days" },
    { value: "100%", label: "Custom Tailored" },
    { value: "99220 00615", label: "Call Expert Desk" }
  ];
  const services = [
    {
      title: "Sofa Manufacturing",
      desc: "Custom-designed sofas crafted to match your space, style, and comfort preferences.",
      icon: <Hammer className="w-6 h-6" />
    },
    {
      title: "Sofa Repair & Restoration",
      desc: "Professional repair services to restore your existing sofas and furniture to brand-new conditions.",
      icon: <Wrench className="w-6 h-6" />
    },
    {
      title: "Cushion Replacement",
      desc: "High-quality cushion replacement and foam upgrades for improved longevity and ergonomic comfort.",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Upholstery Services",
      desc: "Fabric and leather upholstery solutions for sofas, chairs, and other living room furniture.",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Leather Sofa Services",
      desc: "Meticulous repair, complete leather restoration, and customization of luxury leather sofas.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Modular Sofa Solutions",
      desc: "Modern modular sofa designs tailored to contemporary living rooms and smart spaces.",
      icon: <RotateCcw className="w-6 h-6" />
    },
    {
      title: "Living Room Furniture Solutions",
      desc: "Customized furniture options to enhance your living room aesthetics, space conservation, and functionality.",
      icon: <Heart className="w-6 h-6" />
    }
  ];
  const valueProps = [
    "Skilled craftsmanship and attention to detail",
    "High-quality materials and finishing",
    "Customized furniture solutions",
    "Timely delivery and professional service",
    "Customer-focused approach",
    "Affordable pricing",
    "Reliable after-sales support"
  ];
  const businessHighlights = [
    { item: "Custom Sofas", category: "Furniture Category" },
    { item: "Sofa Repair Services", category: "Service Areas" },
    { item: "Cushion Manufacturing", category: "Furniture Category" },
    { item: "Upholstery Solutions", category: "Service Areas" },
    { item: "Fabric Sofa Services", category: "Furniture Category" },
    { item: "Leather Sofa Services", category: "Service Areas" },
    { item: "Modular Sofa Designs", category: "Furniture Category" },
    { item: "Living Room Furniture Solutions", category: "Service Areas" }
  ];
  const testimonials = [
    {
      name: "Abhishek Deshmukh",
      role: "Homeowner",
      location: "Wakad, Pune",
      rating: 5,
      text: "Rajput Cushion did a flawless job repairing our 7-seater sectional leather sofa. The high-resilience foam feels extremely premium, and their color suggestion was spot on. Highly recommended standard in Rahatani, Pune!",
      initials: "AD"
    },
    {
      name: "Priya Kulkarni",
      role: "Architect & Interior Designer",
      location: "Rahatani, Pune",
      rating: 5,
      text: "We ordered a bespoke custom-built chesterfield sofa for our client's living room. From selecting the density of the cushion padding to choosing the velvet fabric, their guidance and execution were meticulous. Brilliant attention to detail!",
      initials: "PK"
    },
    {
      name: "Rajan Nair",
      role: "Business Owner",
      location: "Baner, Pune",
      rating: 5,
      text: "Highly impressed with their super quick cushion replacement service. Our old, saggy dining chairs are now incredibly comfortable and sturdy. Genuine materials, timely delivery, and professional support.",
      initials: "RN"
    }
  ];
  return <div className="flex flex-col gap-16 md:gap-24 overflow-hidden">
      
      {
    /* 1. HERO SECTION */
  }
      <section className="relative min-h-[90vh] bg-dark-brown text-cream flex items-center pt-8 overflow-hidden border-b border-primary-gold/15">
        {
    /* Abstract background graphics */
  }
        <div className="absolute inset-0 bg-radial-gradient from-dark-brown/40 to-dark-brown z-0" />
        <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-primary-gold/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full py-12">
          
          {
    /* Hero Left Content */
  }
          <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary-gold/15 text-primary-gold border border-primary-gold/30 px-3.5 py-1 rounded-full text-xs font-sans tracking-widest uppercase self-center lg:self-start">
              <span>Sofa & Upholstery Experts since day one</span>
            </div>
            
            <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight text-cream">
              Rajput Cushion – <br />
              <span className="text-primary-gold ">Sofa & Upholstery Experts</span> in Pune
            </h1>
            
            <p className="text-sm md:text-base text-text-gray/90 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans font-light">
              Quality sofas, custom cushions, sofa repair, upholstery services, and premium furniture solutions tailored to your unique home and office needs.
            </p>

            {
    /* Quick Location & Hrs Pills */
  }
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-1 font-mono text-[11px] text-primary-gold/90">
              <span className="px-3 py-1 bg-cream/5 border border-primary-gold/25 rounded-md flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                Rahatani, Pune
              </span>
              <span className="px-3 py-1 bg-cream/5 border border-primary-gold/25 rounded-md flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                9:30 AM – 9:00 PM (All Days)
              </span>
              <span className="px-3 py-1 bg-cream/5 border border-primary-gold/25 rounded-md flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 shrink-0" />
                99220 00615
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-3">
              <Link
    to="/contact"
    className="w-full sm:w-auto bg-primary-gold hover:bg-cream text-dark-brown font-serif font-semibold text-sm px-8 py-3.5 rounded shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
  >
                Inquire & Get Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link
    to="/custom-furniture"
    className="w-full sm:w-auto border border-cream/30 hover:border-primary-gold text-cream hover:text-primary-gold font-sans text-xs tracking-wider uppercase font-semibold py-3.5 px-6 rounded transition-all text-center"
  >
                Custom Design Lab
              </Link>
            </div>
          </div>

          {
    /* Hero Right Visuals */
  }
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[430px]">
              
              {
    /* Main Image */
  }
              <div className="aspect-4/3 rounded-2xl overflow-hidden border border-primary-gold/20 shadow-2xl relative">
                <img
    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800"
    alt="Rajput Cushion Custom Sofa Workmanship"
    className="w-full h-full object-cover"
  />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/40 to-transparent" />
              </div>

              {
    /* Float Card 1 */
  }
              <div className="absolute -bottom-6 -left-6 bg-cream border border-border-custom rounded-xl p-4 shadow-xl hidden sm:flex items-center gap-3 text-dark-brown">
                <div className="w-10 h-10 rounded-full bg-primary-gold/15 flex items-center justify-center text-primary-gold shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-text-gray font-sans uppercase">Quality Work</p>
                  <p className="text-xs font-serif font-bold text-dark-brown">Expert Finishing</p>
                </div>
              </div>

              {
    /* Float Card 2 */
  }
              <div className="absolute -top-6 -right-6 bg-dark-brown border border-primary-gold/30 rounded-xl p-3 shadow-xl hidden sm:flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-sans tracking-widest text-primary-gold uppercase">Sofa & Repair Experts</span>
              </div>

              {
    /* Decorative behind grid */
  }
              <div className="absolute -z-10 -right-8 -bottom-8 w-48 h-48 border-2 border-dashed border-primary-gold/15 rounded-2xl" />

            </div>
          </div>

        </div>

      </section>


      {
    /* 2. VALUE PROPOSITIONS BAR */
  }
      <section className="max-w-7xl mx-auto w-full px-4 md:px-8">
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 border-y border-border-custom bg-cream/30 py-8 px-4 rounded-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
                duration: 0.7,
                ease: "easeOut"
              }
            }
          }}
        >
          
          <motion.div 
            className="flex flex-col items-center text-center gap-2.5 p-3 rounded-lg hover:bg-light-beige/20 transition-colors cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
            whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
          >
            <div className="p-3 bg-light-beige/40 rounded-full text-primary-gold">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="font-serif font-bold text-sm text-dark-brown">Custom Manufacturing</p>
              <p className="text-[11px] text-text-gray mt-0.5">Sofa layouts crafted to size</p>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col items-center text-center gap-2.5 p-3 rounded-lg hover:bg-light-beige/20 transition-colors cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
            whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
          >
            <div className="p-3 bg-light-beige/40 rounded-full text-primary-gold">
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <p className="font-serif font-bold text-sm text-dark-brown">Professional Repair</p>
              <p className="text-[11px] text-text-gray mt-0.5">Sag-free restoration & leather fix</p>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col items-center text-center gap-2.5 p-3 rounded-lg hover:bg-light-beige/20 transition-colors cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
            whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
          >
            <div className="p-3 bg-light-beige/40 rounded-full text-primary-gold">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <p className="font-serif font-bold text-sm text-dark-brown">Cushion Upgrades</p>
              <p className="text-[11px] text-text-gray mt-0.5">High-resilience foam replacement</p>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col items-center text-center gap-2.5 p-3 col-span-2 lg:col-span-1 rounded-lg hover:bg-light-beige/20 transition-colors cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
            whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
          >
            <div className="p-3 bg-light-beige/40 rounded-full text-primary-gold">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <p className="font-serif font-bold text-sm text-dark-brown">Pune Delivery</p>
              <p className="text-[11px] text-text-gray mt-0.5">Safe logistics inside service areas</p>
            </div>
          </motion.div>

        </motion.div>
      </section>


      {
    /* 3. ABOUT US SECTION: Welcome to Rajput Cushion */
  }
      <section className="bg-light-beige/20 py-16 md:py-20 border-y border-border-custom/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {
    /* Visual Canvas Left */
  }
          <div className="lg:col-span-6 relative">
            <div className="aspect-4/3 rounded-2xl overflow-hidden border border-border-custom shadow-xl">
              <img
    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800"
    alt="Rajput Cushion showroom display"
    className="w-full h-full object-cover"
  />
            </div>
            
            {
    /* Overlay spec */
  }
            <div className="absolute -bottom-6 -right-6 bg-dark-brown text-cream p-5 rounded-xl border border-primary-gold/20 shadow-2xl max-w-xs hidden sm:block">
              <p className="font-serif font-bold text-sm text-primary-gold">"Durable. Stylish. Comfort."</p>
              <p className="text-[11px] text-text-gray mt-1 leading-normal">Our experienced Pune team is committed to delivering quality furniture solutions that meet homes and workspaces requirements perfectly.</p>
            </div>
          </div>

          {
    /* Descriptive Right */
  }
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-primary-gold text-xs font-sans tracking-widest font-semibold uppercase">Get to know us</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-dark-brown leading-tight">
              Welcome to Rajput Cushion
            </h2>
            
            <p className="text-sm text-text-dark leading-relaxed font-sans font-light">
              Rajput Cushion is a trusted sofa and upholstery business based in Rahatani, Pune. We specialize in designing, repairing, and customizing sofas that combine comfort, durability, and style. Over the years, we have built a strong reputation for caliber workmanship, prompt delivery, and reliable service.
            </p>

            <p className="text-sm text-text-dark leading-relaxed font-sans font-light">
              Whether customized from architectural specifications or restored from years of reliable family usage, we ensure every finished design meets high-caliber thresholds.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <Link
    to="/about"
    className="bg-dark-brown hover:bg-primary-gold text-cream hover:text-dark-brown font-serif font-semibold text-xs px-6 py-3 rounded transition-colors"
  >
                Read Full Story
              </Link>
              <Link
    to="/contact"
    className="text-dark-brown hover:text-primary-gold font-sans font-semibold text-xs tracking-wider uppercase flex items-center gap-1"
  >
                Get Consultation Free
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>


      {
    /* 4. OUR SERVICES Bento Layout */
  }
      <section className="max-w-7xl mx-auto w-full px-4 md:px-8">
        
        {
    /* Section Header */
  }
        <div className="text-center flex flex-col items-center gap-3 mb-12">
          <span className="text-primary-gold text-xs font-sans tracking-widest font-semibold uppercase">Our Specialities</span>
          <h2 className="font-serif font-bold text-2xl md:text-3.5xl text-dark-brown">
            Comprehensive Sofa & Upholstery Services
          </h2>
          <div className="w-12 h-1 bg-primary-gold rounded mt-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((ser, i) => <div
    key={i}
    className="bg-cream border border-border-custom rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group flex flex-col gap-4"
  >
              <div className="w-12 h-12 bg-primary-gold/10 text-primary-gold rounded-full flex items-center justify-center border border-primary-gold/30 group-hover:bg-primary-gold group-hover:text-dark-brown transition-colors">
                {ser.icon}
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="font-serif font-bold text-lg text-dark-brown group-hover:text-primary-gold transition-colors">
                  {ser.title}
                </h3>
                <p className="text-xs text-text-gray font-sans leading-relaxed">
                  {ser.desc}
                </p>
              </div>
            </div>)}
        </div>

      </section>


      {
    /* 5. WHY CHOOSE US & BUSINESS HIGHLIGHTS */
  }
      <section className="max-w-7xl mx-auto w-full px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {
    /* Left Side: Why Choose Us list */
  }
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <span className="text-primary-gold text-xs font-sans tracking-widest font-semibold uppercase">The Rajput Promise</span>
            <h2 className="font-serif font-bold text-2.5xl md:text-3.5xl text-dark-brown">
              Why Choose Rajput Cushion?
            </h2>
            <p className="text-xs text-text-gray leading-relaxed font-sans">
              Customers frequently appreciate our workmanship, finishing quality, and overall stellar service experience. Here is why Pune residents trust our handiwork:
            </p>
          </div>

          <div className="space-y-3.5 font-sans text-xs sm:text-sm text-text-dark">
            {valueProps.map((prop, index) => <div key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 bg-primary-gold/15 rounded-full flex items-center justify-center text-primary-gold shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>{prop}</span>
              </div>)}
          </div>

          {
    /* Customer Quote backdrop card */
  }
          <div className="bg-light-beige/30 border border-primary-gold/15 p-5 rounded-xl font-serif text-xs text-dark-brown italic italic-quote relative">
            "At Rajput Cushion, customer satisfaction is our highest priority. We work closely with every client to understand their requirements and deliver furniture solutions that exceed expectations. Our goal is to provide durable, stylish, and comfortable products backed by exceptional service."
            <span className="block text-[10px] font-sans font-bold text-primary-gold uppercase mt-2.5 not-italic tracking-wider">— Rajput Customer Commitment</span>
          </div>
        </div>

        {
    /* Right Side: Business Highlights bento block */
  }
        <div className="lg:col-span-6 bg-dark-brown text-cream p-8 rounded-2xl shadow-xl border border-primary-gold/15">
          <h3 className="font-serif font-bold text-xl text-primary-gold mb-1">Our Core Highlights</h3>
          <p className="text-[11px] font-sans text-text-gray tracking-wider uppercase mb-6 border-b border-cream/10 pb-2">What We Offer & Where We Serve</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {businessHighlights.map((bh, idx) => <div key={idx} className="bg-cream/5 border border-cream/10 rounded-lg p-3 flex flex-col justify-between">
                <span className="text-cream text-xs font-medium font-sans leading-snug">{bh.item}</span>
                <span className="text-[9px] font-mono tracking-wider text-primary-gold uppercase mt-1.5">{bh.category}</span>
              </div>)}
          </div>

          <div className="mt-6 pt-5 grid grid-cols-2 gap-4 border-t border-cream/10 text-xs text-text-gray font-mono">
            <div>
              <p className="text-[9px] text-primary-gold uppercase font-bold tracking-wider mb-1">Furniture Category</p>
              <p className="text-xs text-cream uppercase font-sans">Sofas, Cushions, Upholstered Furniture</p>
            </div>
            <div>
              <p className="text-[9px] text-primary-gold uppercase font-bold tracking-wider mb-1">Service Area</p>
              <p className="text-xs text-cream uppercase font-sans">Rahatani, Pimpri-Chinchwad, Pune & Nearby Areas</p>
            </div>
          </div>
        </div>

      </section>


      {
    /* 6. HISTORIC METRIC GRID */
  }
      <section className="max-w-7xl mx-auto w-full px-4 md:px-8 text-center bg-dark-brown text-cream py-12 rounded-2xl shadow-xl relative overflow-hidden border border-primary-gold/15">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-gold/5 via-transparent to-primary-gold/5" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-cream/10 relative z-10">
          {stats.map((stat, i) => <div key={i} className="flex flex-col gap-1.5 p-4 justify-center">
              <span className="font-serif font-bold text-xl sm:text-2xl lg:text-3xl text-primary-gold uppercase tracking-tight">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-[11px] text-text-gray font-sans tracking-wide uppercase">
                {stat.label}
              </span>
            </div>)}
        </div>
      </section>


      {
    /* 7. SHOWCASE EXPLORATION BY CATEGORY */
  }
      <section className="max-w-7xl mx-auto w-full px-4 md:px-8">
        
        {
    /* Section Header */
  }
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="flex flex-col gap-2">
            <span className="text-primary-gold text-xs font-sans tracking-widest font-semibold uppercase">Our Store Catalog</span>
            <h2 className="font-serif font-bold text-2xl md:text-3.5xl text-dark-brown">
              Finished Catalog Masterpieces
            </h2>
          </div>

          {
    /* Action pills menu */
  }
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none whitespace-nowrap">
            {categories.map((cat) => <button
    key={cat}
    onClick={() => setSelectedCategory(cat)}
    className={`px-4 py-1.5 rounded-full text-xs font-sans tracking-wide transition-all ${selectedCategory === cat ? "bg-primary-gold text-cream font-medium shadow-sm" : "bg-light-beige/40 hover:bg-light-beige text-text-dark"}`}
  >
                {cat}
              </button>)}
          </div>
        </div>

        {
    /* Catalog items grid */
  }
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 border border-dark-brown hover:bg-dark-brown text-dark-brown hover:text-cream font-serif text-sm font-semibold rounded transition-all duration-300"
          >
            Explore Complete Cushion & Sofa Catalog
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </section>


      {
    /* 7.5 CUSTOMER TESTIMONIALS SECTION */
  }
      <section className="bg-light-beige/20 py-16 md:py-20 border-y border-border-custom/50">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
          
          {/* Section Header */}
          <div className="text-center flex flex-col items-center gap-3 mb-16">
            <span className="text-primary-gold text-xs font-sans tracking-widest font-semibold uppercase">Voices of Trust</span>
            <h2 className="font-serif font-bold text-2.5xl md:text-3.5xl text-dark-brown">
              What Our Customers Say
            </h2>
            <p className="text-xs md:text-sm text-text-gray font-sans max-w-lg mt-1">
              With years of quality restorations and custom sofa construction in Pune, hear directly from our happy homeowners.
            </p>
            <div className="w-12 h-1 bg-primary-gold rounded mt-2" />
          </div>

          {/* Testimonials Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                className="bg-cream border border-border-custom rounded-2xl p-8 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-primary-gold/30 hover:shadow-md transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                {/* Decorative minimal quote graphic in the card background */}
                <span className="absolute right-6 top-4 font-serif text-8xl text-light-beige/40 select-none pointer-events-none group-hover:text-primary-gold/10 transition-colors">
                  “
                </span>

                <div className="space-y-4 relative z-10">
                  {/* Star Rating Row */}
                  <div className="flex items-center gap-1.5 text-primary-gold">
                    {Array.from({ length: t.rating }).map((_, starIdx) => (
                      <Star key={starIdx} className="w-4 h-4 fill-current text-primary-gold" />
                    ))}
                  </div>

                  {/* Testimonial Quote Text */}
                  <p className="text-xs md:text-[13px] text-text-dark font-sans leading-relaxed font-light">
                    "{t.text}"
                  </p>
                </div>

                {/* Profile Footer */}
                <div className="flex items-center gap-3.5 mt-8 pt-4 border-t border-border-custom/40 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-light-beige/60 border border-primary-gold/25 flex items-center justify-center font-serif text-xs font-bold text-dark-brown shrink-0 group-hover:bg-primary-gold/15 transition-colors">
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="font-serif font-bold text-xs sm:text-sm text-dark-brown truncate">
                      {t.name}
                    </p>
                    <p className="text-[10px] text-text-gray font-sans mt-0.5 flex items-center gap-1.5">
                      <span className="inline-block w-1.5 h-1.5 bg-primary-gold/60 rounded-full"></span>
                      {t.role} • <span className="font-medium text-primary-gold">{t.location}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {
    /* 8. INSTITUTIONAL CONSULTATION BOOKING BLOCK */
  }
      <section className="max-w-7xl mx-auto w-full px-4 md:px-8">
        <div className="bg-cream border border-border-custom rounded-2xl p-8 md:p-12 text-center shadow-md relative overflow-hidden">
          {
      /* Subtle decorative circles */
    }
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-light-beige/30 rounded-full" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary-gold/5 rounded-full" />
          
          <div className="max-w-xl mx-auto flex flex-col gap-4 relative z-10">
            <span className="text-primary-gold text-xs font-sans tracking-widest font-semibold uppercase">Get in touch instantly</span>
            <h2 className="font-serif font-bold text-2.5xl md:text-3.5xl text-dark-brown">
              Consult Our Sofa Experts
            </h2>
            
            <p className="text-xs md:text-sm text-text-gray font-sans leading-relaxed">
              Need a tailored couch, cushion density evaluation, or restoration services across Pune? Talk directly with our team.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
              <a
                href="tel:9922000615"
                className="w-full sm:w-auto bg-dark-brown hover:bg-primary-gold text-cream hover:text-dark-brown font-serif font-bold text-xs tracking-wider uppercase px-8 py-4 rounded transition-all flex items-center justify-center gap-2.5"
              >
                <Phone className="w-4 h-4" />
                Call 99220 00615
              </a>
              <Link
                to="/contact"
                className="w-full sm:w-auto border border-dark-brown hover:bg-dark-brown hover:text-cream text-dark-brown font-serif font-bold text-xs tracking-wider uppercase px-8 py-4 rounded transition-all flex items-center justify-center gap-2"
              >
                Request Custom Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>;
}
