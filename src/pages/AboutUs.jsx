import { motion } from "motion/react";
import { Heart, CheckCircle, ShieldCheck } from "lucide-react";
import Breadcrumbs from "../components/common/Breadcrumbs";
export default function AboutUs() {
  const milestoneTimeline = [
    { year: "Established", title: "Roots in Pune", desc: "Rajput Cushion started with a single promise: to provide Rahatani and the greater Pune area with durable, comfortable, and beautifully finished sofa upholstery and restoration services." },
    { year: "Expansion", title: "Manufacturing & Custom Design", desc: "We expanded into custom-made sofa manufacturing, modular sofa designs, and heavy-duty foam upgrades for luxury homes and corporate office spaces." },
    { year: "Present Day", title: "Pune's Trusted Sofa Experts", desc: "Known for bespoke designs, meticulous cushion replacement, and premium leather sofa restoration with an unmatched commitment to customer service and after-sales support." }
  ];
  return <div className="bg-cream min-h-screen pb-16">
      <Breadcrumbs items={[{ label: "Our Story & Brand" }]} />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        
        {
    /* HERO HEADER SECTION */
  }
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-20 py-6">
          <motion.div 
            className="lg:col-span-6 flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-primary-gold text-xs font-sans tracking-widest font-semibold uppercase">About Us</span>
            <h1 className="font-serif font-bold text-3.5xl sm:text-4.5xl text-dark-brown leading-tight">
              Welcome to Rajput Cushion
            </h1>
            
            <p className="text-xs md:text-sm text-text-dark font-sans leading-relaxed font-light">
              Rajput Cushion is a trusted sofa and upholstery business based in Rahatani, Pune. We specialize in designing, repairing, and customizing sofas that combine comfort, durability, and style. Over the years, we have built a strong reputation for quality workmanship, customer satisfaction, and reliable service.
            </p>

            <p className="text-xs md:text-sm text-text-dark font-sans leading-relaxed font-light">
              Our experienced team is committed to delivering furniture solutions that meet the unique requirements of every customer, whether for homes, offices, or commercial spaces.
            </p>

            <p className="text-xs md:text-sm text-text-gray font-sans italic border-l-2 border-primary-gold pl-4 max-w-lg leading-relaxed">
              "At Rajput Cushion, customer satisfaction is our highest priority. We work closely with every client to understand their requirements and deliver furniture solutions that exceed expectations. Our goal is to provide durable, stylish, and comfortable products backed by exceptional service."
              <span className="block text-xs font-serif font-bold text-dark-brown mt-2">— The Rajput Cushion Team</span>
            </p>
          </motion.div>

          <motion.div 
            className="lg:col-span-6 relative flex justify-center items-stretch"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="w-full h-full min-h-[350px] lg:min-h-0 max-w-[480px] rounded-2xl overflow-hidden border border-border-custom shadow-2xl relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img
                src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=800"
                alt="Expert upholstery craftsmanship"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/40 to-transparent" />
            </motion.div>
          </motion.div>
        </section>


        {
    /* STATS STRIP CARD */
  }
        <section className="bg-dark-brown text-cream p-10 rounded-2xl shadow-xl text-center mb-20 border border-primary-gold/20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-1.5 p-2">
              <span className="font-serif font-black text-3xl md:text-4xl text-primary-gold">In Rahatani</span>
              <span className="text-[11px] font-sans text-text-gray tracking-wider uppercase">Our Central Showroom Location</span>
            </div>
            <div className="flex flex-col gap-1.5 p-2 border-y sm:border-y-0 sm:border-x border-cream/10">
              <span className="font-serif font-black text-3xl md:text-4xl text-primary-gold">9:30 AM – 9:00 PM</span>
              <span className="text-[11px] font-sans text-text-gray tracking-wider uppercase">Open All Days (Mon - Sun)</span>
            </div>
            <div className="flex flex-col gap-1.5 p-2">
              <span className="font-serif font-black text-3xl md:text-4xl text-primary-gold">100% Quality</span>
              <span className="text-[11px] font-sans text-text-gray tracking-wider uppercase">Workmanship Guarantee</span>
            </div>
          </div>
        </section>


        {
    /* VALUE BULLETS SECTION */
  }
        <section className="space-y-12 mb-20">
          <div className="text-center max-w-md mx-auto space-y-2">
            <span className="text-primary-gold text-xs font-sans tracking-widest uppercase font-bold">Why Patrons Choose Us</span>
            <h2 className="font-serif font-bold text-2.5xl text-dark-brown">Our Core Commitments</h2>
            <div className="w-10 h-0.5 bg-primary-gold mx-auto mt-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-cream border border-border-custom p-6 rounded-xl shadow-sm text-center space-y-4">
              <div className="w-12 h-12 bg-primary-gold/15 text-primary-gold rounded-full flex items-center justify-center mx-auto border border-primary-gold/30">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-base text-dark-brown">Skilled Craftsmanship</h3>
              <p className="text-xs text-text-gray font-sans leading-relaxed">
                We have a rigorous eye for detail, using premium doweled reinforcement, long-lasting high-density foam, and premium stitching techniques that endure generations.
              </p>
            </div>

            <div className="bg-cream border border-border-custom p-6 rounded-xl shadow-sm text-center space-y-4">
              <div className="w-12 h-12 bg-primary-gold/15 text-primary-gold rounded-full flex items-center justify-center mx-auto border border-primary-gold/30">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-base text-dark-brown font-sans">Custom Sofa Solutions</h3>
              <p className="text-xs text-text-gray font-sans leading-relaxed">
                Whether you have exact frame measurements, specific fabric textures, or a unique style layout pin-up, our custom designs are built explicitly around you.
              </p>
            </div>

            <div className="bg-cream border border-border-custom p-6 rounded-xl shadow-sm text-center space-y-4">
              <div className="w-12 h-12 bg-primary-gold/15 text-primary-gold rounded-full flex items-center justify-center mx-auto border border-primary-gold/30">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-base text-dark-brown font-sans">Reliable After-Sales</h3>
              <p className="text-xs text-text-gray font-sans leading-relaxed">
                We offer friendly expert guidance, timely door-to-door delivery inside Pune, and immediate after-sales assistance to give you complete peace of mind.
              </p>
            </div>

          </div>
        </section>


        {
    /* TIMELINE SECTION */
  }
        <section className="space-y-12">
          
          <div className="text-center max-w-sm mx-auto space-y-2">
            <span className="text-primary-gold text-xs font-sans tracking-widest uppercase font-bold">Historical Landmarks</span>
            <h2 className="font-serif font-bold text-2.5xl text-dark-brown">Our Journey</h2>
            <div className="w-10 h-0.5 bg-primary-gold mx-auto mt-1" />
          </div>

          <div className="max-w-4xl mx-auto relative border-l border-border-custom pl-6 md:pl-10 space-y-10">
            {milestoneTimeline.map((mil, idx) => <motion.div
    key={mil.year}
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: idx * 0.1 }}
    className="relative group space-y-1.5"
  >
                
                {
    /* Year Badge absolute position marker */
  }
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-cream border-2 border-primary-gold group-hover:bg-primary-gold transition-colors duration-200" />
                
                <span className="font-serif font-black text-lg md:text-xl text-primary-gold">
                  {mil.year}
                </span>

                <h3 className="font-serif font-bold text-sm md:text-base text-dark-brown">
                  {mil.title}
                </h3>
                
                <p className="text-xs md:text-sm text-text-gray font-sans leading-relaxed max-w-2xl font-light">
                  {mil.desc}
                </p>

              </motion.div>)}
          </div>

        </section>

      </main>
    </div>;
}
