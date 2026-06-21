import { motion } from "motion/react";
import Breadcrumbs from "../components/common/Breadcrumbs";
import { Scale, Milestone, HelpCircle, FileText, CheckCircle2 } from "lucide-react";

export default function TermsOfService() {
  const lastUpdated = "June 20, 2026";

  const standardRules = [
    {
      icon: Scale,
      title: "Legally Binding",
      desc: "By placing custom manufacturing, foam, or fabric repair orders, you adhere strictly to these terms."
    },
    {
      icon: Milestone,
      title: "Logitics Timelines",
      desc: "Pune service deliveries depend heavily on road clearances and local site dimensions."
    },
    {
      icon: HelpCircle,
      title: "Mutual Resolution",
      desc: "Disputes or customization adjustments are resolved amicably by the expert craftsman team."
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
        <Breadcrumbs items={[{ label: "Terms of Service" }]} />

        {/* Content Cover Header */}
        <section className="text-center max-w-2xl mx-auto mt-8 mb-16 space-y-4">
          <span className="text-primary-gold text-xs font-sans tracking-widest font-semibold uppercase">User Responsibility Guidelines</span>
          <h1 className="font-serif font-bold text-3.5xl md:text-4.5xl text-dark-brown leading-tight">
            Terms of Service
          </h1>
          <p className="text-xs md:text-sm text-text-gray font-sans mt-2">
            Last updated & revised on <span className="font-medium text-dark-brown">{lastUpdated}</span>
          </p>
          <div className="w-12 h-1 bg-primary-gold mx-auto rounded mt-3" />
        </section>

        {/* Core Terms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Legal Sections (Spans 8 cols) */}
          <section className="lg:col-span-8 bg-cream border border-border-custom rounded-2xl p-6 md:p-10 shadow-sm space-y-10">
            
            <div className="space-y-4">
              <h2 className="font-serif font-bold text-xl md:text-2xl text-dark-brown flex items-center gap-3">
                <span className="text-primary-gold text-sm font-sans flex items-center justify-center w-7 h-7 rounded-full bg-light-beige font-bold">1</span>
                Custom Crafting Contracts
              </h2>
              <div className="h-[1px] bg-border-custom/50 w-full" />
              <p className="text-xs md:text-sm text-text-dark font-sans font-light leading-relaxed">
                When you initiate custom requests (e.g. customized 5-seater L-shaped couches, density-graded padding), you validate that all uploaded configurations, width details, and structural dimensions are completely accurate. 
              </p>
              <ul className="list-none space-y-2.5 pl-1.5 pt-2">
                {[
                  "Measurements must account for hallway clearance, elevator entry parameters, and main door frames.",
                  "Textiles and cushion colors selected during consultation are finalized once stitching begins.",
                  "Rajput Cushion cannot accept accountability for dimension mismatch resulting from erroneous user input.",
                  "Customized orders cannot be cancelled mid-production once primary wood cutting has been executed."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-text-dark font-sans">
                    <CheckCircle2 className="w-4 h-4 text-primary-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif font-bold text-xl md:text-2xl text-dark-brown flex items-center gap-3">
                <span className="text-primary-gold text-sm font-sans flex items-center justify-center w-7 h-7 rounded-full bg-light-beige font-bold">2</span>
                Financial Terms & Remittance
              </h2>
              <div className="h-[1px] bg-border-custom/50 w-full" />
              <p className="text-xs md:text-sm text-text-dark font-sans font-light leading-relaxed">
                Prices and service estimates are outlined in Indian Rupees (INR) and are inclusive of standard local craftsmanship and consultation expenses unless designated otherwise.
              </p>
              <ul className="list-none space-y-2.5 pl-1.5 pt-2">
                {[
                  "An upfront retention deposit of up to 40% is mandatory for major bespoke custom manufacturing tasks.",
                  "Payments made via credit cards, online transfers, or secure payment portals must pass security verification.",
                  "Pending balances must be fully cleared upon successful delivery or installation at your doorstep.",
                  "Local taxes and logistics transit surcharges outside core Rahatani, Pune zones will be detailed clearly beforehand."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-text-dark font-sans">
                    <CheckCircle2 className="w-4 h-4 text-primary-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif font-bold text-xl md:text-2xl text-dark-brown flex items-center gap-3">
                <span className="text-primary-gold text-sm font-sans flex items-center justify-center w-7 h-7 rounded-full bg-light-beige font-bold">3</span>
                White-Glove Logistic Deliveries
              </h2>
              <div className="h-[1px] bg-border-custom/50 w-full" />
              <p className="text-xs md:text-sm text-text-dark font-sans font-light leading-relaxed">
                Our logistics personnel handle sofa and heavy upholstery delivery with utmost caution in the Pune region. However, customers must prepare the pathway properly.
              </p>
              <p className="text-xs md:text-sm text-text-gray font-sans italic border-l-2 border-primary-gold pl-4 mt-3">
                Please guarantee that heavy delivery loaders have permission to enter your premises or high-rise communities inside Pune. Extra crane and pulley setups are subject to customized quotes.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif font-bold text-xl md:text-2xl text-dark-brown flex items-center gap-3">
                <span className="text-primary-gold text-sm font-sans flex items-center justify-center w-7 h-7 rounded-full bg-light-beige font-bold">4</span>
                Warranty Commitments
              </h2>
              <div className="h-[1px] bg-border-custom/50 w-full" />
              <p className="text-xs md:text-sm text-text-dark font-sans font-light leading-relaxed">
                Rajput Cushion takes proud ownership of our craftsmanship. New customized luxury frameworks carry standard warranty guidelines regarding sag indices, structure stability, and stitch durability of cushions. These exclude damage caused by improper usage, liquid spillages, or pet scratches.
              </p>
            </div>

          </section>

          {/* Right Sidebar - Fast Pointers (Spans 4 cols) */}
          <aside className="lg:col-span-4 space-y-8">
            
            <div className="bg-dark-brown text-cream rounded-2xl p-6 md:p-8 border border-primary-gold/15 space-y-6">
              <div className="flex items-center gap-2.5 text-primary-gold">
                <FileText className="w-5 h-5" />
                <h3 className="font-serif font-bold text-base">Governance Rules</h3>
              </div>
              <p className="text-xs text-text-gray font-sans leading-relaxed font-light">
                These terms govern all transactions, order estimates, cushion upgrade tasks, and local deliveries made via our store system.
              </p>
              
              <div className="space-y-6 pt-4 border-t border-cream/10">
                {standardRules.map((pt, i) => {
                  const IconComp = pt.icon;
                  return (
                    <div key={i} className="flex gap-3.5">
                      <div className="p-2 bg-cream/5 rounded border border-primary-gold/20 text-primary-gold shrink-0 h-9 w-9 flex items-center justify-center">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-xs text-cream">{pt.title}</h4>
                        <p className="text-[11px] text-text-gray mt-1 leading-normal font-sans font-light">{pt.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-cream border border-border-custom rounded-2xl p-6 text-center space-y-4">
              <span className="text-primary-gold text-[10px] tracking-widest font-sans font-bold uppercase">Customer Support Desk</span>
              <h4 className="font-serif font-bold text-sm text-dark-brown">Require a custom printout?</h4>
              <p className="text-xs text-text-gray font-sans leading-relaxed">
                If you have custom institutional requisitions that require deviations from these terms, talk to our help desk.
              </p>
              <a
                href="tel:9922000615"
                className="inline-block text-xs font-serif font-bold text-dark-brown hover:text-primary-gold transition-colors"
              >
                +91 99220 00615
              </a>
            </div>

          </aside>

        </div>
      </div>
    </motion.div>
  );
}
