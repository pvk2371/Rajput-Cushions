import { useState, useMemo } from "react";
import { Search, Star, Mail, MapPin } from "lucide-react";
export default function AdminCustomers() {
  const [customerSearch, setCustomerSearch] = useState("");
  const [customers, setCustomers] = useState([
    { id: "cust-1", name: "Rahul Sharma", email: "sharma.rahul@gmail.com", phone: "+91 91234 56789", address: "Powai Boulevard-Complex, Mumbai", totalSpends: 92e3, ordersCount: 2, vip: true },
    { id: "cust-2", name: "Aditya Sen", email: "aditya.sen@corp.in", phone: "+91 98765 43210", address: "Bandra Hill-Road, Mumbai", totalSpends: 128e3, ordersCount: 3, vip: true },
    { id: "cust-3", name: "Neha Varma", email: "neha.varma@outlook.com", phone: "+91 99887 76655", address: "Saltlake Main Road, Kolkata", totalSpends: 24e3, ordersCount: 1, vip: false },
    { id: "cust-4", name: "Kabir Mehta", email: "mehta.kabir@gmail.com", phone: "+91 97654 32109", address: "GK-2 Complex Corridor, Delhi", totalSpends: 68e3, ordersCount: 2, vip: false },
    { id: "cust-5", name: "Ananya Pillai", email: "ananya.p@designstudio.ca", phone: "+91 94433 22110", address: "Jayanagar Landmark, Bangalore", totalSpends: 154e3, ordersCount: 4, vip: true }
  ]);
  const handleToggleVip = (id) => {
    setCustomers(
      customers.map((c) => {
        if (c.id === id) {
          const updated = !c.vip;
          alert(`VIP Status for ${c.name} ${updated ? "Activated!" : "Revoked."}`);
          return { ...c, vip: updated };
        }
        return c;
      })
    );
  };
  const filteredCustomers = useMemo(() => {
    return customers.filter(
      (c) => c.name.toLowerCase().includes(customerSearch.toLowerCase()) || c.email.toLowerCase().includes(customerSearch.toLowerCase())
    );
  }, [customerSearch, customers]);
  return <div className="space-y-8 font-sans">
      
      {
    /* Page Header */
  }
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif font-bold text-2xl md:text-3.5xl text-dark-brown">
            Registered Patrons Directory
          </h1>
          <p className="text-xs text-text-gray font-light mt-0.5">
            Audit patron loyalty directories, monitor total spends, filter profiles, and toggle premium lounge honors.
          </p>
        </div>

        {
    /* Search Input filter bar */
  }
        <div className="relative flex items-center w-full sm:w-72">
          <input
    type="text"
    placeholder="Search name or index..."
    value={customerSearch}
    onChange={(e) => setCustomerSearch(e.target.value)}
    className="w-full bg-cream border border-border-custom px-4 py-2 text-xs rounded focus:outline-none focus:ring-1 focus:ring-primary-gold"
  />
          <Search className="w-4 h-4 text-primary-gold absolute right-3 pointer-events-none" />
        </div>
      </div>


      {
    /* Tabular details list dashboard */
  }
      <div className="bg-cream border border-border-custom rounded-2xl shadow-sm overflow-hidden p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-sans text-xs border-collapse">
            <thead>
              <tr className="border-b border-border-custom/40 text-[10px] text-text-gray uppercase tracking-wider">
                <th className="pb-3 font-semibold">Coordinate ID</th>
                <th className="pb-3 font-semibold">User Profile Detail</th>
                <th className="pb-3 font-semibold">Physical Coordinates</th>
                <th className="pb-3 font-semibold text-center">Bespoke Orders count</th>
                <th className="pb-3 font-semibold text-center">Cumulative Spends</th>
                <th className="pb-3 font-semibold text-center">Membership Honors</th>
                <th className="pb-3 font-semibold text-right">Coordinate Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-custom/30 text-text-dark">
              {filteredCustomers.map((c) => <tr key={c.id} className="hover:bg-light-beige/10">
                  <td className="py-4 font-mono font-bold text-text-gray">{c.id}</td>
                  
                  <td className="py-4">
                    <p className="font-serif font-bold text-sm text-dark-brown">{c.name}</p>
                    <div className="flex items-center gap-1.5 text-text-gray text-[10px] mt-1 font-light">
                      <Mail className="w-3 h-3 text-primary-gold" />
                      <span>{c.email}</span>
                      <span>•</span>
                      <span>{c.phone}</span>
                    </div>
                  </td>

                  <td className="py-4 max-w-xs truncate text-text-gray font-sans">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-primary-gold shrink-0" />
                      {c.address}
                    </span>
                  </td>

                  <td className="py-4 font-bold text-center">{c.ordersCount} Invoices</td>
                  
                  <td className="py-4 font-bold text-center text-primary-gold">₹{c.totalSpends.toLocaleString("en-IN")}</td>
                  
                  <td className="py-4 text-center">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold ${c.vip ? "bg-yellow-105 border border-primary-gold bg-primary-gold/15 text-primary-gold" : "bg-light-beige text-text-gray border border-border-custom/40"}`}>
                      <Star className={`w-3 h-3 fill-current ${c.vip ? "text-primary-gold" : "text-text-gray"}`} />
                      {c.vip ? "VIP Member" : "Standard"}
                    </span>
                  </td>

                  <td className="py-4 text-right">
                    <button
    onClick={() => handleToggleVip(c.id)}
    className="p-1 px-2 border border-border-custom hover:border-primary-gold rounded text-[10px] font-bold text-text-dark hover:bg-primary-gold hover:text-cream transition-colors"
  >
                      Toggle VIP Access
                    </button>
                  </td>

                </tr>)}
            </tbody>
          </table>
        </div>
      </div>

    </div>;
}
