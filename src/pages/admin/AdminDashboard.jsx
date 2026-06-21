import { Link } from "react-router-dom";
import {
  TrendingUp,
  ShoppingBag,
  Users,
  Warehouse,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles
} from "lucide-react";
import { mockOrders, mockProducts } from "../../data/mockData";
export default function AdminDashboard() {
  const metrics = [
    { label: "Cumulative Gross Revenues", value: "\u20B912,48,500", trend: "+14.2%", note: "Past 30 days", up: true, icon: <TrendingUp className="w-5 h-5 text-primary-gold" /> },
    { label: "Dispatch Orders Queue", value: "14 Active", trend: "+4.8%", note: "Pending scheduling", up: true, icon: <ShoppingBag className="w-5 h-5 text-primary-gold" /> },
    { label: "Registered Patrons", value: "1,280 Members", trend: "+18%", note: "White-list members", up: true, icon: <Users className="w-5 h-5 text-primary-gold" /> },
    { label: "Furniture Catalog items", value: `${mockProducts.length} Premium`, trend: "Stable", note: "Active lines", up: true, icon: <Warehouse className="w-5 h-5 text-primary-gold" /> }
  ];
  const performanceCategories = [
    { title: "Living Room", percentage: 78, value: "\u20B99,73,830" },
    { title: "Bedroom Suite", percentage: 54, value: "\u20B94,12,040" },
    { title: "Dining Credenzas", percentage: 38, value: "\u20B91,62,400" }
  ];
  return <div className="space-y-8 font-sans">
      
      {
    /* 1. Header Banner */
  }
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif font-bold text-2xl md:text-3.5xl text-dark-brown">
            Dashboard Telemetry
          </h1>
          <p className="text-xs text-text-gray font-light mt-0.5">
            Real-time business indicators, sales aggregates, and customer coordination maps.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-primary-gold/15 text-primary-gold px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border border-primary-gold/20">
          <Sparkles className="w-4 h-4" />
          <span>FY 2026 AUDIT COMPLIANT</span>
        </div>
      </div>


      {
    /* 2. Metrics Rows */
  }
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((met, idx) => <div key={idx} className="bg-cream border border-border-custom rounded-2xl p-5 shadow-sm space-y-4 hover:border-primary-gold/25 hover:shadow-md transition-all">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-text-gray uppercase tracking-widest font-black leading-none">{met.label}</span>
              <div className="p-2 bg-primary-gold/10 rounded-md">
                {met.icon}
              </div>
            </div>

            <div className="space-y-1">
              <p className="font-serif font-black text-xl md:text-2xl text-dark-brown">{met.value}</p>
              <div className="flex items-center gap-1.5 text-[11px]">
                {met.up ? <span className="text-green-600 font-bold flex items-center">
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                    {met.trend}
                  </span> : <span className="text-red-500 font-bold flex items-center">
                    <ArrowDownRight className="w-3.5 h-3.5 shrink-0" />
                    {met.trend}
                  </span>}
                <span className="text-text-gray font-light">• {met.note}</span>
              </div>
            </div>
          </div>)}
      </div>


      {
    /* 3. Charts split row */
  }
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {
    /* Sales trend custom vector */
  }
        <div className="lg:col-span-8 bg-cream border border-border-custom p-6 rounded-2xl shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-border-custom/40">
            <div>
              <h3 className="font-serif font-bold text-base text-dark-brown">Weekly Revenue Trend</h3>
              <p className="text-[10px] text-text-gray font-light">Custom financial transaction aggregates tracked weekly</p>
            </div>
            <span className="text-[10px] uppercase font-sans tracking-widest font-bold text-primary-gold">NET REVENUE STREAMS</span>
          </div>

          {
    /* Interactive Custom SVG Line chart */
  }
          <div className="h-64 relative bg-light-beige/10 rounded-xl border border-border-custom/50 flex flex-col justify-end p-4">
            
            {
    /* Horizontal lines representing units */
  }
            <div className="absolute inset-x-0 top-10 border-t border-border-custom/25" />
            <div className="absolute inset-x-0 top-28 border-t border-border-custom/25" />
            <div className="absolute inset-x-0 top-44 border-t border-border-custom/25" />

            {
    /* SVG Plot coordinate layout */
  }
            <svg viewBox="0 0 600 200" className="w-full h-full z-10 overflow-visible">
              {
    /* Plot line */
  }
              <polyline
    fill="none"
    stroke="#C28B2C"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
    points="50,140 150,160 250,90 350,110 450,40 550,60"
    className="stroke-primary-gold shadow-2xl"
  />
              
              {
    /* Circles mapping checkpoints */
  }
              <circle cx="50" cy="140" r="5" fill="#2A211C" stroke="#C28B2C" strokeWidth="2" />
              <circle cx="150" cy="160" r="5" fill="#2A211C" stroke="#C28B2C" strokeWidth="2" />
              <circle cx="250" cy="90" r="5" fill="#2A211C" stroke="#C28B2C" strokeWidth="2" />
              <circle cx="350" cy="110" r="5" fill="#2A211C" stroke="#C28B2C" strokeWidth="2" />
              <circle cx="450" cy="40" r="5" fill="#2A211C" stroke="#C28B2C" strokeWidth="2" />
              <circle cx="550" cy="60" r="5" fill="#2A211C" stroke="#C28B2C" strokeWidth="2" />

              {
    /* Data labels text markers */
  }
              <text x="35" y="125" fill="#222" fontSize="9" fontWeight="bold">₹1.2L</text>
              <text x="135" y="145" fill="#222" fontSize="9" fontWeight="bold">₹1.0L</text>
              <text x="235" y="75" fill="#222" fontSize="9" fontWeight="bold">₹2.4L</text>
              <text x="335" y="95" fill="#222" fontSize="9" fontWeight="bold">₹2.0L</text>
              <text x="435" y="25" fill="#222" fontSize="9" fontWeight="bold">₹3.8L</text>
              <text x="535" y="45" fill="#222" fontSize="9" fontWeight="bold">₹3.2L</text>
            </svg>

            {
    /* Bottom X labels */
  }
            <div className="grid grid-cols-6 text-center text-[10px] text-text-gray font-mono mt-4 border-t border-border-custom/50 pt-2 z-10">
              <span>Week 1</span>
              <span>Week 2</span>
              <span>Week 3</span>
              <span>Week 4</span>
              <span>Week 5</span>
              <span>Week 6</span>
            </div>

          </div>

        </div>


        {
    /* Category progress meters */
  }
        <div className="lg:col-span-4 bg-cream border border-border-custom p-6 rounded-2xl shadow-sm space-y-6">
          <div>
            <h3 className="font-serif font-bold text-base text-dark-brown">Segment Breakout</h3>
            <p className="text-[10px] text-text-gray font-light">Performance of major categories</p>
          </div>

          <div className="space-y-5 font-sans text-xs text-text-dark">
            {performanceCategories.map((p, idx) => <div key={idx} className="space-y-1.5">
                <div className="flex justify-between items-center text-[11px]">
                  <span className="font-serif font-semibold">{p.title}</span>
                  <span className="font-mono font-bold text-text-gray">{p.value} ({p.percentage}%)</span>
                </div>
                
                {
    /* Visual bar graph track */
  }
                <div className="h-2 bg-light-beige/50 rounded-full overflow-hidden border border-border-custom/25">
                  <div
    className="h-full bg-primary-gold rounded-full transition-all duration-1000"
    style={{ width: `${p.percentage}%` }}
  />
                </div>
              </div>)}
          </div>

          <div className="p-4 bg-light-beige/35 rounded-xl border border-border-custom/40 text-[10px] text-text-gray leading-normal font-light">
            <span className="font-semibold text-dark-brown block mb-1">Stock Optimization Note:</span>
            Premium Teak Sofa orders are tracking 30% higher than inventory schedules. Procure more raw blocks from FSC forests.
          </div>

        </div>

      </div>


      {
    /* 4. Recent Transactions tracker list */
  }
      <div className="bg-cream border border-border-custom rounded-2xl shadow-sm p-6 overflow-hidden">
        <div className="flex items-center justify-between pb-4 border-b border-border-custom/40 mb-4">
          <div>
            <h3 className="font-serif font-bold text-base text-dark-brown">Active Showroom Dispatches</h3>
            <p className="text-[10px] text-text-gray font-light">Direct order tracking logs</p>
          </div>
          <Link
    to="/admin/orders"
    className="text-xs text-primary-gold hover:text-dark-brown font-semibold uppercase tracking-wider pr-1 flex items-center gap-1"
  >
            Manage Order Log
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {
    /* Dispatch Orders Table layout */
  }
        <div className="overflow-x-auto">
          <table className="w-full text-left font-sans text-xs border-collapse">
            <thead>
              <tr className="border-b border-border-custom/40 text-[10px] text-text-gray uppercase tracking-wider">
                <th className="pb-3 font-semibold">Order ID</th>
                <th className="pb-3 font-semibold">Patron Name</th>
                <th className="pb-3 font-semibold">Dispatch Date</th>
                <th className="pb-3 font-semibold">Order Total</th>
                <th className="pb-3 font-semibold">Delivery Status</th>
                <th className="pb-3 font-semibold text-right">Coordinate Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-custom/30 text-text-dark">
              {mockOrders.slice(0, 3).map((ord) => <tr key={ord.id} className="hover:bg-light-beige/10">
                  <td className="py-3.5 font-bold text-dark-brown font-mono">{ord.id}</td>
                  <td className="py-3.5">{ord.customerName}</td>
                  <td className="py-3.5 text-text-gray">{ord.date}</td>
                  <td className="py-3.5 font-bold">₹{ord.total.toLocaleString("en-IN")}</td>
                  <td className="py-3.5">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${ord.status === "Delivered" ? "bg-green-100 text-green-700" : ord.status === "Shipped" ? "bg-yellow-100 text-yellow-700" : "bg-blue-100 text-blue-700"}`}>
                      {ord.status}
                    </span>
                  </td>
                  <td className="py-3.5 text-right">
                    <Link
    to={`/tracking?id=${ord.id}`}
    className="p-1 px-2.5 border border-border-custom hover:border-primary-gold rounded text-[10px] font-bold text-text-dark hover:bg-primary-gold hover:text-cream transition-colors"
  >
                      Examine Tracking
                    </Link>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>

      </div>

    </div>;
}
