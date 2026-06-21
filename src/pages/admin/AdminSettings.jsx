import { useState } from "react";
import { Calculator, Globe, Server, Save } from "lucide-react";
export default function AdminSettings() {
  const [generalConfig, setGeneralConfig] = useState({
    showroomName: "Rajput Cushion Office Desk",
    registeredAddress: "Rahatani, Pune, Maharashtra",
    supportPhone: "99220 00615",
    supportEmail: "contact@rajputcushion.com",
    currency: "INR (\u20B9)",
    cgstPercentage: "9",
    freeShippingCutoff: "50000",
    lowStockThreshold: "3"
  });
  const handleSaveSettings = (e) => {
    e.preventDefault();
    alert("General Rajput Cushion core configurations saved successfully! Settings catalog updated across active servers.");
  };
  return <div className="space-y-8 font-sans">
      
      {
    /* Page Header */
  }
      <div>
        <h1 className="font-serif font-bold text-2xl md:text-3.5xl text-dark-brown">
          General Administrative Settings
        </h1>
        <p className="text-xs text-text-gray font-light mt-0.5">
          Modify brand metadata, financial metrics coordinates, tax percentages, logistics variables, and low-inventory triggers.
        </p>
      </div>


      {
    /* Form splitting splits columns inside card */
  }
      <form onSubmit={handleSaveSettings} className="bg-cream border border-border-custom rounded-2xl shadow-sm p-6 md:p-8 space-y-8 font-sans text-xs text-text-dark">
        
        {
    /* Section 1: Showroom Profile metadata */
  }
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-base text-dark-brown pb-2 border-b border-border-custom/40 flex items-center gap-2">
            <Globe className="w-5 h-5 text-primary-gold" />
            Showroom Corporate Profile
          </h2>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-bold text-dark-brown block">Registered Showroom Name *</label>
                <input
    type="text"
    required
    value={generalConfig.showroomName}
    onChange={(e) => setGeneralConfig({ ...generalConfig, showroomName: e.target.value })}
    className="w-full bg-light-beige/35 border border-border-custom px-3.5 py-2.5 rounded text-xs focus:ring-1 focus:ring-primary-gold"
  />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-dark-brown block">Official Support Contact Hotline *</label>
                <input
    type="text"
    required
    value={generalConfig.supportPhone}
    onChange={(e) => setGeneralConfig({ ...generalConfig, supportPhone: e.target.value })}
    className="w-full bg-light-beige/35 border border-border-custom px-3.5 py-2.5 rounded text-xs"
  />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-bold text-dark-brown block">Official Support Email Address *</label>
                <input
    type="email"
    required
    value={generalConfig.supportEmail}
    onChange={(e) => setGeneralConfig({ ...generalConfig, supportEmail: e.target.value })}
    className="w-full bg-light-beige/35 border border-border-custom px-3.5 py-2.5 rounded text-xs"
  />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-dark-brown block">Registered Physical Coordinates *</label>
                <input
    type="text"
    required
    value={generalConfig.registeredAddress}
    onChange={(e) => setGeneralConfig({ ...generalConfig, registeredAddress: e.target.value })}
    className="w-full bg-light-beige/35 border border-border-custom px-3.5 py-2.5 rounded text-xs focus:ring-1 focus:ring-primary-gold"
  />
              </div>
            </div>
          </div>
        </section>


        {
    /* Section 2: Financial metrics coordination */
  }
        <section className="space-y-4 pt-4 border-t border-border-custom/30">
          <h2 className="font-serif font-bold text-base text-dark-brown pb-2 border-b border-border-custom/40 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-primary-gold" />
            Financial & Tax Regulations
          </h2>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-bold text-dark-brown block">Primary Base Currency</label>
                <select
    value={generalConfig.currency}
    onChange={(e) => setGeneralConfig({ ...generalConfig, currency: e.target.value })}
    className="w-full bg-light-beige/35 border border-border-custom px-3.5 py-2.5 rounded text-xs cursor-pointer focus:ring-1 focus:ring-primary-gold"
  >
                  <option value="INR (₹)">Indian Rupee INR (₹)</option>
                  <option value="USD ($)">United States Dollar USD ($)</option>
                  <option value="EUR (€)">European Union Euro EUR (€)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-dark-brown block">Central GST Bracket percentage *</label>
                <input
    type="number"
    required
    value={generalConfig.cgstPercentage}
    onChange={(e) => setGeneralConfig({ ...generalConfig, cgstPercentage: e.target.value })}
    className="w-full bg-light-beige/35 border border-border-custom px-3.5 py-2.5 rounded text-xs"
    placeholder="9"
  />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-bold text-dark-brown block">Minimum Subtotal for Complimentary White-Glove Shipping (INR) *</label>
                <input
    type="number"
    required
    value={generalConfig.freeShippingCutoff}
    onChange={(e) => setGeneralConfig({ ...generalConfig, freeShippingCutoff: e.target.value })}
    className="w-full bg-light-beige/35 border border-border-custom px-3.5 py-2.5 rounded text-xs"
    placeholder="50000"
  />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-dark-brown block">Low Stock Level Alert Threshold *</label>
                <input
    type="number"
    required
    value={generalConfig.lowStockThreshold}
    onChange={(e) => setGeneralConfig({ ...generalConfig, lowStockThreshold: e.target.value })}
    className="w-full bg-light-beige/35 border border-border-custom px-3.5 py-2.5 rounded text-xs"
    placeholder="3"
  />
              </div>
            </div>
          </div>
        </section>


        {
    /* Saving action */
  }
        <div className="pt-6 border-t border-border-custom flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[11px] text-text-gray font-light">
            <Server className="w-4 h-4 text-primary-gold shrink-0" />
            <span>Settings saved write instantly to AWS databases</span>
          </div>

          <button
    type="submit"
    className="bg-dark-brown hover:bg-primary-gold text-cream hover:text-dark-brown font-serif font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded shadow transition-all flex items-center gap-2"
  >
            <Save className="w-4 h-4 text-primary-gold" />
            Save Server Settings
          </button>
        </div>

      </form>

    </div>;
}
