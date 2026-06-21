import { motion } from "motion/react";
import Breadcrumbs from "../components/common/Breadcrumbs";
import { Shield, Eye, Lock, FileText, CheckCircle2 } from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = "June 20, 2026";

  const securityPoints = [
    {
      icon: Eye,
      title: "Transparency First",
      desc: "We clearly define exactly what information we collect to manage and deliver custom furniture orders."
    },
    {
      icon: Lock,
      title: "Bank-Grade Protection",
      desc: "Your transactions and design inputs are stored behind highly secure physical and digital encryption."
    },
    {
      icon: Shield,
      title: "No Data Trade-Offs",
      desc: "We never sell or distribute your contact, address, or payment records to advertising agencies."
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
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

        {/* Content Cover Header */}
        <section className="text-center max-w-2xl mx-auto mt-8 mb-16 space-y-4">
          <span className="text-primary-gold text-xs font-sans tracking-widest font-semibold uppercase">Security & Integrity</span>
          <h1 className="font-serif font-bold text-3.5xl md:text-4.5xl text-dark-brown leading-tight">
            Privacy Policy
          </h1>
          <p className="text-xs md:text-sm text-text-gray font-sans mt-2">
            Last updated & revised on <span className="font-medium text-dark-brown">{lastUpdated}</span>
          </p>
          <div className="w-12 h-1 bg-primary-gold mx-auto rounded mt-3" />
        </section>

        {/* Core Policy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Legal Sections (Spans 8 cols) */}
          <section className="lg:col-span-8 bg-cream border border-border-custom rounded-2xl p-6 md:p-10 shadow-sm space-y-10">
            
            <div className="space-y-4">
              <h2 className="font-serif font-bold text-xl md:text-2xl text-dark-brown flex items-center gap-3">
                <span className="text-primary-gold text-sm font-sans flex items-center justify-center w-7 h-7 rounded-full bg-light-beige font-bold">1</span>
                Information We Collect
              </h2>
              <div className="h-[1px] bg-border-custom/50 w-full" />
              <p className="text-xs md:text-sm text-text-dark font-sans font-light leading-relaxed">
                When you initiate a custom sofa project, request bespoke cushions, or fill out communication request forms on Rajput Cushion, we collect key identifying particulars to deliver superior service. This includes:
              </p>
              <ul className="list-none space-y-2.5 pl-1.5 pt-2">
                {[
                  "Personal identifier coordinates (e.g., name, phone number, physical Puneri delivery address, email coordinate).",
                  "Precise custom dimensional parameters, textile selections, and wood type requirements for bespoke orders.",
                  "Transactional parameters required for secure banking handshakes via validated payment protocols.",
                  "Usage metrics tracking visitor interactions with our premium web interface to optimize navigation latency."
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
                Purpose of Data Processing
              </h2>
              <div className="h-[1px] bg-border-custom/50 w-full" />
              <p className="text-xs md:text-sm text-text-dark font-sans font-light leading-relaxed">
                Your records are strictly leveraged to facilitate local crafting pipelines and residential logistics within Pune service circles. Specifically:
              </p>
              <ul className="list-none space-y-2.5 pl-1.5 pt-2">
                {[
                  "To build and manufacture furniture modules tailored strictly to the architectural specifications provided.",
                  "To organize expert upholstery delivery teams and on-site alignment mechanics securely.",
                  "To dispatch important modifications about ongoing work and subsequent logistics milestones.",
                  "To ensure compliance with local fiscal regulations under standard mercantile acts."
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
                Security Mechanisms & Safeguards
              </h2>
              <div className="h-[1px] bg-border-custom/50 w-full" />
              <p className="text-xs md:text-sm text-text-dark font-sans font-light leading-relaxed">
                We invoke rigorous operational defenses to shield files from compromise. Secure socket handshakes (HTTPS) shield browser sessions during item lookups. Backends are hardened against payload exploits. 
              </p>
              <p className="text-xs md:text-sm text-text-gray font-sans italic border-l-2 border-primary-gold pl-4 mt-3">
                Important note: While no virtual channel is absolutely invulnerable, Rajput Cushion works tirelessly to ensure your offline and online identity parameter datasets are rigorously shielded.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif font-bold text-xl md:text-2xl text-dark-brown flex items-center gap-3">
                <span className="text-primary-gold text-sm font-sans flex items-center justify-center w-7 h-7 rounded-full bg-light-beige font-bold">4</span>
                Your Authority Over Your Records
              </h2>
              <div className="h-[1px] bg-border-custom/50 w-full" />
              <p className="text-xs md:text-sm text-text-dark font-sans font-light leading-relaxed">
                At any point of your relationship with Rajput Cushion, you have full absolute authority to request a full extract of stored interaction records, mandate targeted modifications, or require instant purge coordinates across our database nodes. Call us or send email parameters, and we will execute the request in 48 hours.
              </p>
            </div>

          </section>

          {/* Right Sidebar - Fast Pointers (Spans 4 cols) */}
          <aside className="lg:col-span-4 space-y-8">
            
            <div className="bg-dark-brown text-cream rounded-2xl p-6 md:p-8 border border-primary-gold/15 space-y-6">
              <div className="flex items-center gap-2.5 text-primary-gold">
                <FileText className="w-5 h-5" />
                <h3 className="font-serif font-bold text-base">Key Pillars</h3>
              </div>
              <p className="text-xs text-text-gray font-sans leading-relaxed font-light">
                Our uncompromising commitment to securing user confidence keeps your customized lifestyle additions safe.
              </p>
              
              <div className="space-y-6 pt-4 border-t border-cream/10">
                {securityPoints.map((pt, i) => {
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
              <span className="text-primary-gold text-[10px] tracking-widest font-sans font-bold uppercase">Need clarifications?</span>
              <h4 className="font-serif font-bold text-sm text-dark-brown">Reach Our Security Desk</h4>
              <p className="text-xs text-text-gray font-sans leading-relaxed">
                If you have queries concerning our handling of layout coordinates, touch base with Rajput Cushion.
              </p>
              <a
                href="mailto:support@rajputcushion.com"
                className="inline-block text-xs font-serif font-bold text-dark-brown hover:text-primary-gold transition-colors break-all"
              >
                support@rajputcushion.com
              </a>
            </div>

          </aside>

        </div>
      </div>
    </motion.div>
  );
}
