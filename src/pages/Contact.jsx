import { useState } from "react";
import { Sparkles, Phone, MapPin, Clock, Send, ShieldAlert } from "lucide-react";
import Breadcrumbs from "../components/common/Breadcrumbs";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been routed to Rajput Cushion in Rahatani, Pune. Our sofa repair, manufacturing, or custom upholstery team will contact you shortly.`);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };
  return <div className="bg-cream min-h-screen pb-16">
      <Breadcrumbs items={[{ label: "Contact Us" }]} />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        
        {
    /* Page Header */
  }
        <div className="text-center max-w-xl mx-auto flex flex-col items-center gap-2 mb-12">
          <div className="inline-flex items-center gap-1 bg-primary-gold/15 text-primary-gold px-3 py-1 rounded-full text-[10px] font-sans tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pune & Rahatani Outlet</span>
          </div>
          <h1 className="font-serif font-bold text-3xl md:text-4xl text-dark-brown">
            Get In Touch
          </h1>
          <p className="text-xs md:text-sm text-text-gray font-sans font-light leading-relaxed">
            Need a new sofa, upholstery work, or furniture repair service? Contact Rajput Cushion today for a customized experience tailored specifically to your needs.
          </p>
        </div>

        {
    /* Core coordinates grids */
  }
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {
    /* LEFT COLUMN: CONTACT DETAILS */
  }
          <div className="lg:col-span-12 xl:col-span-5 space-y-6">
            
            <div className="bg-dark-brown text-cream p-8 rounded-2xl shadow-lg space-y-8 border border-primary-gold/15 relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-primary-gold/5 via-transparent to-transparent" />
              
              <div className="relative z-10 space-y-2">
                <h2 className="font-serif font-bold text-xl text-primary-gold">Rajput Cushion Showroom</h2>
                <div className="w-10 h-0.5 bg-primary-gold/30" />
                <p className="text-xs text-text-gray font-sans leading-relaxed font-light">
                  Visit us in Rahatani to choose your premium fabric, select premium foam and cushions, or request reliable sofa repair and rejuvenation services.
                </p>
              </div>

              <div className="space-y-5 relative z-10 font-sans text-xs sm:text-sm">
                
                <div className="flex gap-4 items-center">
                  <div className="p-3 bg-cream/10 border border-cream/15 text-primary-gold rounded-full shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-text-gray uppercase tracking-wider font-light">Phone Contact</p>
                    <a href="tel:9922000615" className="font-medium text-cream mt-0.5 hover:text-primary-gold transition-colors text-lg">99220 00615</a>
                  </div>
                </div>

                <div className="flex gap-4 items-center border-t border-cream/10 pt-5">
                  <div className="p-3 bg-cream/10 border border-cream/15 text-primary-gold rounded-full shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-text-gray uppercase tracking-wider font-light">Location Address</p>
                    <p className="font-medium text-cream mt-0.5 leading-snug">
                      Rahatani, Pune, Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-center border-t border-cream/10 pt-5">
                  <div className="p-3 bg-cream/10 border border-cream/15 text-primary-gold rounded-full shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-text-gray uppercase tracking-wider font-light">Working Hours</p>
                    <p className="font-medium text-cream mt-0.5 text-base">9:30 AM – 9:00 PM</p>
                    <p className="text-xs text-text-gray leading-none font-light mt-1">Open All Days (including Sundays)</p>
                  </div>
                </div>

              </div>
            </div>

            {
    /* Safety policy disclaimer */
  }
            <div className="bg-light-beige/25 rounded-xl p-4 border border-border-custom flex gap-3 items-start">
              <ShieldAlert className="w-5 h-5 text-primary-gold shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif font-bold text-xs text-dark-brown">Pune Service Areas</h4>
                <p className="text-[10px] text-text-gray font-sans leading-relaxed mt-0.5">
                  We proactively serve Rahatani, Pimpri-Chinchwad, Pune, and nearby areas, with complete door-to-door transit support, secure pickup, and repair deliveries.
                </p>
              </div>
            </div>

          </div>


          {
    /* RIGHT COLUMN: CONTACT FEEDBACK FORM */
  }
          <div className="lg:col-span-12 xl:col-span-7 bg-cream border border-border-custom rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="font-serif font-bold text-xl text-dark-brown mb-2">Request a Quote or Service</h2>
            <p className="text-xs text-text-gray font-sans mb-6 font-light">
              Are you looking for custom manufacturing, cushion foam upgrade, leather restoration, or modular sofa designs? Fill out your details below and we will contact you immediately.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs text-text-dark">
              
              <div className="space-y-1.5">
                <label className="font-serif font-bold text-dark-brown block">Your Name *</label>
                <input
    type="text"
    required
    value={formData.name}
    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
    className="w-full bg-light-beige/35 border border-border-custom rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary-gold text-sm text-dark-brown"
    placeholder=" राहुल शर्मा"
  />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-serif font-bold text-dark-brown block">Email Address</label>
                  <input
    type="email"
    value={formData.email}
    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
    className="w-full bg-light-beige/35 border border-border-custom rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary-gold text-sm text-dark-brown"
    placeholder="sharma.rahul@gmail.com"
  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-serif font-bold text-dark-brown block">Phone Contact Number *</label>
                  <input
    type="tel"
    required
    value={formData.phone}
    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
    className="w-full bg-light-beige/35 border border-border-custom rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary-gold text-sm text-dark-brown"
    placeholder="99220 00615"
  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-serif font-bold text-dark-brown block">Describe What Customer Needs (e.g., Sofa Repair, Cushion upgrade, Custom design) *</label>
                <textarea
    required
    value={formData.message}
    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
    rows={5}
    className="w-full bg-light-beige/35 border border-border-custom rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary-gold text-sm text-dark-brown"
    placeholder="Need memory foam replacement for my 3-seater sofa, or fabric replacement..."
  />
              </div>

              <button
    type="submit"
    className="w-full bg-dark-brown hover:bg-primary-gold text-cream hover:text-dark-brown font-serif font-bold text-xs uppercase tracking-wider py-4 rounded shadow transition-all flex items-center justify-center gap-2"
  >
                <Send className="w-4 h-4" />
                Submit Consultation Request
              </button>

            </form>
          </div>

        </div>


        {
    /* OFFLINE MAP GRAPHIC PLATFORM MOCKUP */
  }
        <section className="mt-16">
          <div className="h-[340px] rounded-2xl overflow-hidden border border-border-custom relative bg-[#EEE7DD] shadow-inner flex items-center justify-center">
            
            {
    /* Visual map outline simulation */
  }
            <div className="absolute inset-0 opacity-15 pointer-events-none pr-10">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="50" x2="1000" y2="50" stroke="#222" strokeWidth="4" />
                <line x1="100" y1="0" x2="100" y2="600" stroke="#222" strokeWidth="3" />
                <line x1="0" y1="200" x2="1000" y2="280" stroke="#222" strokeWidth="5" />
                <line x1="300" y1="0" x2="350" y2="600" stroke="#222" strokeWidth="3" />
                <line x1="0" y1="400" x2="1000" y2="350" stroke="#222" strokeWidth="4" />
                <circle cx="280" cy="180" r="140" fill="none" stroke="#222" strokeWidth="1" />
              </svg>
            </div>

            {
    /* Central Pin Callout block */
  }
            <div className="bg-cream border border-primary-gold/30 rounded-xl p-5 shadow-2xl relative z-10 max-w-sm text-center space-y-2.5 mx-4 border-t-4 border-t-primary-gold">
              <span className="inline-block p-2 bg-primary-gold/15 text-primary-gold rounded-full">
                <MapPin className="w-5 h-5 fill-current" />
              </span>
              <h3 className="font-serif font-black text-sm text-dark-brown font-bold">Rajput Cushion Showroom</h3>
              <p className="text-xs text-text-gray font-sans font-light">Rahatani, Pune, Maharashtra, India</p>
              <div className="pt-2">
                <span className="text-[10px] font-sans font-medium uppercase text-primary-gold tracking-widest border border-primary-gold/25 px-2 py-0.5 rounded">
                  SOFA & CUSHION EXPERTS
                </span>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>;
}
