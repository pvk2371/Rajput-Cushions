import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ShoppingBag,
  Trash2,
  User
} from "lucide-react";
import { mockOrders } from "../../data/mockData";
export default function AdminOrders() {
  const [orders, setOrders] = useState(mockOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const handleStatusChange = (orderId, newStatus) => {
    setOrders(
      orders.map((o) => o.id === orderId ? { ...o, status: newStatus } : o)
    );
    alert(`Order ${orderId} status changed to "${newStatus}"!`);
  };
  const handleDeleteOrder = (orderId) => {
    if (confirm(`Are you sure you want to delete order record ${orderId}?`)) {
      setOrders(orders.filter((o) => o.id !== orderId));
      alert(`Order ${orderId} removed from supply databases.`);
    }
  };
  return <div className="space-y-8 font-sans">
      
      {
    /* Page Header */
  }
      <div>
        <h1 className="font-serif font-bold text-2xl md:text-3.5xl text-dark-brown">
          Dispatch Orders Queue
        </h1>
        <p className="text-xs text-text-gray font-light mt-0.5">
          Process showroom invoices, coordinate logistics schedules, and track home placement parameters.
        </p>
      </div>


      {
    /* Tabular summary dashboard list */
  }
      <div className="bg-cream border border-border-custom rounded-2xl shadow-sm overflow-hidden p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-sans text-xs border-collapse">
            <thead>
              <tr className="border-b border-border-custom/40 text-[10px] text-text-gray uppercase tracking-wider">
                <th className="pb-3 font-semibold">Order ID</th>
                <th className="pb-3 font-semibold">Patron Details</th>
                <th className="pb-3 font-semibold">Date of Purchase</th>
                <th className="pb-3 font-semibold text-center">Invoice Amount</th>
                <th className="pb-3 font-semibold text-center">Logistic Milestones</th>
                <th className="pb-3 font-semibold text-center">Alter Timeline</th>
                <th className="pb-3 font-semibold text-right">Perform Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-custom/30 text-text-dark">
              {orders.map((ord) => <tr key={ord.id} className="hover:bg-light-beige/10">
                  <td className="py-4 font-mono font-bold text-dark-brown text-[13px]">{ord.id}</td>
                  
                  <td className="py-4 font-medium">
                    <p className="text-[12px]">{ord.customerName}</p>
                    <p className="text-[10px] text-text-gray font-light mt-0.5">{ord.customerEmail}</p>
                  </td>

                  <td className="py-4 text-text-gray">{ord.date}</td>
                  
                  <td className="py-4 font-bold text-center">₹{ord.total.toLocaleString("en-IN")}</td>
                  
                  <td className="py-4 text-center">
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${ord.status === "Delivered" ? "bg-green-100 text-green-700" : ord.status === "Shipped" ? "bg-yellow-100 text-yellow-700" : ord.status === "Cancelled" ? "bg-red-100 text-red-600" : "bg-blue-100 text-blue-700"}`}>
                      {ord.status}
                    </span>
                  </td>

                  {
    /* Dropdown switch */
  }
                  <td className="py-4 text-center">
                    <select
    value={ord.status}
    onChange={(e) => handleStatusChange(ord.id, e.target.value)}
    className="bg-cream border border-border-custom text-[11px] font-sans rounded p-1 focus:outline-none cursor-pointer"
  >
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>

                  <td className="py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
    onClick={() => setSelectedOrder(ord)}
    className="p-1 px-2 border border-border-custom hover:border-primary-gold rounded text-[10px] font-bold text-text-dark hover:bg-primary-gold hover:text-cream transition-colors"
    title="Inspect Order Details"
  >
                        Inspect
                      </button>
                      
                      <button
    onClick={() => handleDeleteOrder(ord.id)}
    className="p-1.5 text-text-gray hover:text-red-500 rounded hover:bg-red-50 transition-colors"
    title="Remove records"
  >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>

                </tr>)}
            </tbody>
          </table>
        </div>
      </div>


      {
    /*=========================================
       INSPECT ORDER DETAILS POPOVER SCREEN
      =========================================*/
  }
      <AnimatePresence>
        {selectedOrder && <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-dark-brown/75 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
  >
            <motion.div
    initial={{ scale: 0.95, y: 30 }}
    animate={{ scale: 1, y: 0 }}
    exit={{ scale: 0.95, y: 30 }}
    className="bg-cream border border-primary-gold/15 rounded-2xl p-6 md:p-8 max-w-xl w-full shadow-2xl space-y-6 relative max-h-[85vh] overflow-y-auto"
  >
              
              <div className="flex items-center justify-between pb-3 border-b border-border-custom/40">
                <h3 className="font-serif font-bold text-base text-dark-brown">Invoice Docket Inspector</h3>
                <button
    onClick={() => setSelectedOrder(null)}
    className="p-1.5 rounded-full bg-light-beige hover:bg-primary-gold hover:text-cream text-dark-brown transition-colors text-xs font-serif font-black"
  >
                  Close X
                </button>
              </div>

              {
    /* Order specifications details */
  }
              <div className="grid grid-cols-2 gap-4 font-sans text-xs pb-4 border-b border-border-custom/30">
                <div>
                  <p className="text-[10px] text-text-gray uppercase tracking-wider font-light">Order Serial Key</p>
                  <p className="font-bold text-dark-brown text-[14px] font-mono mt-0.5">{selectedOrder.id}</p>
                </div>
                <div>
                  <p className="text-[10px] text-text-gray uppercase tracking-wider font-light">Date of Log</p>
                  <p className="font-bold text-[14px] text-dark-brown mt-0.5">{selectedOrder.date}</p>
                </div>
              </div>

              {
    /* Address details */
  }
              <div className="space-y-3 font-sans text-xs pb-4 border-b border-border-custom/30">
                <h4 className="font-serif font-bold text-sm text-dark-brown flex items-center gap-1.5">
                  <User className="w-4 h-4 text-primary-gold" />
                  Patron Coordination Coordinates
                </h4>
                <div className="space-y-1.5 bg-light-beige/20 p-3.5 rounded-lg border border-border-custom/40">
                  <p><span className="font-semibold text-dark-brown">Full Name:</span> {selectedOrder.customerName}</p>
                  <p><span className="font-semibold text-dark-brown">Email Destination:</span> {selectedOrder.customerEmail}</p>
                  <p><span className="font-semibold text-dark-brown">Target Delivery Point:</span> {selectedOrder.address}</p>
                  <p><span className="font-semibold text-dark-brown font-sans">Phone Coordinate:</span> {selectedOrder.customerPhone || "+91 91234 56789"}</p>
                </div>
              </div>

              {
    /* Line items details */
  }
              <div className="space-y-3 font-sans text-xs">
                <h4 className="font-serif font-bold text-sm text-dark-brown flex items-center gap-1.5">
                  <ShoppingBag className="w-4 h-4 text-primary-gold" />
                  Cart Line Items
                </h4>

                <div className="divide-y divide-border-custom/30 bg-cream border border-border-custom/45 rounded-lg p-3.5">
                  {selectedOrder.items.map((item, idx) => <div key={idx} className="py-2.5 first:pt-0 last:pb-0 flex items-center justify-between gap-3">
                      <div>
                        <p className="font-serif font-semibold text-dark-brown leading-tight">{item.title}</p>
                        <p className="text-[10px] text-text-gray font-sans mt-0.5">
                          Color selection: {item.color || "Natural Walnut"} • Quantity: {item.quantity}
                        </p>
                      </div>
                      <span className="font-bold text-dark-brown">₹{(item.price * item.quantity).toLocaleString("en-IN")}</span>
                    </div>)}
                </div>

                <div className="flex justify-between items-center font-bold text-dark-brown text-sm pt-2">
                  <span>Grand total invoice bill</span>
                  <span className="text-primary-gold text-base">₹{selectedOrder.total.toLocaleString("en-IN")}</span>
                </div>
              </div>

            </motion.div>
          </motion.div>}
      </AnimatePresence>

    </div>;
}
