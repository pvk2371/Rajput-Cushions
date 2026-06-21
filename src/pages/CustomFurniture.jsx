import { useState } from "react";
import { Sparkles, Hammer, Ruler, Armchair, ChevronRight } from "lucide-react";
import Breadcrumbs from "../components/common/Breadcrumbs";
export default function CustomFurniture() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Sofa",
    wood: "Natural Teak",
    dimensions: "",
    comments: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your Bespoke Custom Furniture dossier has been compiled. Our Senior Craftsman will contact you within 24 hours with custom blueprints.`);
    setFormData({
      name: "",
      email: "",
      phone: "",
      type: "Sofa",
      wood: "Natural Teak",
      dimensions: "",
      comments: ""
    });
  };
  const benefits = [
    { icon: <Ruler className="w-5 h-5 text-primary-gold" />, title: "Millimeter Sizing Symmetrics", desc: "Custom size options matching exact floor plans down to a millimeter threshold." },
    { icon: <Hammer className="w-5 h-5 text-primary-gold" />, title: "Artisan handpicked log grades", desc: "Acquire your piece in premium Natural Walnut, Sustainable Teak, or Forest Oak." },
    { icon: <Armchair className="w-5 h-5 text-primary-gold" />, title: "Select padding density weight", desc: "Fine-tune cushions using ultra-plush cloud foam, high resilience support fiber, or organic wool wraps." },
    { icon: <Sparkles className="w-5 h-5 text-primary-gold" />, title: "Blueprints Drafting Approval", desc: "Receive dedicated engineering hand-sketches and 3D visualizers before production lines initialize." }
  ];
  return <div className="bg-cream min-h-screen pb-16">
      <Breadcrumbs items={[{ label: "Bespoke Custom Orders" }]} />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        
        {
    /* Main Split Row */
  }
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-4">
          
          {
    /* LEFT COLUMN: Dossier Request Form */
  }
          <div className="lg:col-span-6 bg-cream border border-border-custom rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
            
            <div>
              <span className="text-primary-gold font-sans font-semibold text-xs tracking-widest uppercase">The Artisan Bureau</span>
              <h1 className="font-serif font-bold text-2.5xl md:text-3.5xl text-dark-brown mt-1">
                Bespoke Order Dossier
              </h1>
              <p className="text-xs text-text-gray font-sans mt-2 font-light">
                Provide custom dimensional parameters. Our structural craftsmen will draft bespoke architectural sketches and guide material estimates directly.
              </p>
            </div>

            {
    /* Form */
  }
            <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs text-text-dark">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-serif font-bold text-dark-brown block">Full Patron Name *</label>
                  <input
    type="text"
    required
    value={formData.name}
    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
    className="w-full bg-light-beige/25 border border-border-custom rounded px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-primary-gold"
    placeholder="Aditya Sen"
  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-serif font-bold text-dark-brown block">Email Address *</label>
                  <input
    type="email"
    required
    value={formData.email}
    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
    className="w-full bg-light-beige/25 border border-border-custom rounded px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-primary-gold"
    placeholder="aditya@example.com"
  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-serif font-bold text-dark-brown block">Phone Contact *</label>
                  <input
    type="tel"
    required
    value={formData.phone}
    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
    className="w-full bg-light-beige/25 border border-border-custom rounded px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-primary-gold"
    placeholder="+91 98765 43210"
  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-serif font-bold text-dark-brown block">Lounge Piece Category</label>
                  <select
    value={formData.type}
    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
    className="w-full bg-light-beige/25 border border-border-custom rounded px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-primary-gold cursor-pointer"
  >
                    <option value="Sofa">Lounge Sofa Configurator</option>
                    <option value="Bed">King/Queen Bed Frame</option>
                    <option value="Coffee Table">Bespoke Coffee/Console Table</option>
                    <option value="Dining Table">Artisan Dining Credenza Set</option>
                    <option value="Office">Executive Work Desk</option>
                  </select>
                </div>
              </div>

              {
    /* Wood selection */
  }
              <div className="space-y-1.5">
                <label className="font-serif font-bold text-dark-brown block">Primary Lumber Selection</label>
                <div className="grid grid-cols-3 gap-2.5">
                  {["Natural Teak", "Dark Smoked Oak", "Premium Rosewood"].map((woodType) => <button
    key={woodType}
    type="button"
    onClick={() => setFormData({ ...formData, wood: woodType })}
    className={`py-2 px-3 border rounded font-sans text-xs transition-all ${formData.wood === woodType ? "bg-primary-gold text-cream border-primary-gold font-medium" : "border-border-custom hover:border-primary-gold/50 text-text-dark bg-cream"}`}
  >
                      {woodType}
                    </button>)}
                </div>
              </div>

              {
    /* Dimensions */
  }
              <div className="space-y-1.5">
                <label className="font-serif font-bold text-dark-brown block">Target Dimensional Caps *</label>
                <input
    type="text"
    required
    value={formData.dimensions}
    onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
    className="w-full bg-light-beige/25 border border-border-custom rounded px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-primary-gold"
    placeholder="e.g. 96 inches Width x 40 inches Depth x 32 inches Height"
  />
              </div>

              {
    /* Special specifications and details */
  }
              <div className="space-y-1.5">
                <label className="font-serif font-bold text-dark-brown block">Additional Cushion / Stitching notes</label>
                <textarea
    value={formData.comments}
    onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
    rows={4}
    className="w-full bg-light-beige/25 border border-border-custom rounded px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-primary-gold"
    placeholder="e.g. Prefer forest-green performance bouclé fabric, extra firm foam blocks, natural wax finishes..."
  />
              </div>

              <button
    type="submit"
    className="w-full bg-dark-brown hover:bg-primary-gold text-cream hover:text-dark-brown font-serif font-bold text-xs uppercase tracking-wider py-3.5 rounded shadow transition-all flex items-center justify-center gap-2"
  >
                Submit Customization Request
                <ChevronRight className="w-4 h-4" />
              </button>

            </form>

          </div>


          {
    /* RIGHT COLUMN: Benefits & Big styling image */
  }
          <div className="lg:col-span-6 space-y-8">
            
            {
    /* Visual crop */
  }
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border-custom shadow-xl relative bg-light-beige/20">
              <img
    src="https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&q=80&w=800"
    alt="Woodworking craftsmanship at its peak"
    className="w-full h-full object-cover"
  />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/40 to-transparent" />
            </div>

            {
    /* Checklist of values */
  }
            <div className="space-y-6">
              <h2 className="font-serif font-bold text-xl text-dark-brown pb-2 border-b border-border-custom/40">
                Pledge of Bespoke Perfection
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((ben, idx) => <div key={idx} className="flex gap-3">
                    <div className="p-2 bg-primary-gold/10 border border-primary-gold/25 rounded-md text-primary-gold h-fit self-start">
                      {ben.icon}
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-serif font-bold text-xs text-dark-brown leading-tight">{ben.title}</h3>
                      <p className="text-[11px] text-text-gray font-sans leading-relaxed font-light">{ben.desc}</p>
                    </div>
                  </div>)}
              </div>
            </div>

          </div>

        </div>

      </main>
    </div>;
}
