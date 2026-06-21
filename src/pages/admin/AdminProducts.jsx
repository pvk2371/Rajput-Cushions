import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Plus,
  Star
} from "lucide-react";
import { mockProducts } from "../../data/mockData";
export default function AdminProducts() {
  const [productList, setProductList] = useState(mockProducts);
  const [addProductModal, setAddProductModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    category: "Living Room",
    stock: "In Stock",
    material: "Natural Teak",
    dimensions: "75W x 35D x 30H inches",
    weight: "45 kg",
    sku: "",
    description: "Bespoke custom furniture designed to frame quiet luxury..."
  });
  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!newProduct.title || !newProduct.price) return;
    const generatedId = `prod-add-${productList.length + 1}`;
    const generatedSku = newProduct.sku || `FL-${Math.floor(1e3 + Math.random() * 9e3)}`;
    const productRecord = {
      id: generatedId,
      title: newProduct.title,
      description: newProduct.description,
      price: Number(newProduct.price),
      category: newProduct.category,
      images: ["https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=600"],
      sku: generatedSku,
      status: newProduct.stock,
      rating: 4.8,
      reviewsCount: 1,
      colors: [
        { name: "Natural Teak", hex: "#B28A54" },
        { name: "Dark Oak", hex: "#3B2F2F" }
      ],
      specifications: {
        material: newProduct.material,
        dimensions: newProduct.dimensions,
        weight: newProduct.weight
      }
    };
    setProductList([productRecord, ...productList]);
    setAddProductModal(false);
    setNewProduct({
      title: "",
      price: "",
      category: "Living Room",
      stock: "In Stock",
      material: "Natural Teak",
      dimensions: "75W x 35D x 30H inches",
      weight: "45 kg",
      sku: "",
      description: "Bespoke custom furniture designed to frame quiet luxury..."
    });
    alert("New furniture product record registered successfully!");
  };
  const handleDelete = (id) => {
    const matched = productList.find((p) => p.id === id);
    if (!matched) return;
    if (confirm(`Are you sure you want to delete "${matched.title}"?`)) {
      setProductList(productList.filter((p) => p.id !== id));
      alert(`Product deleted.`);
    }
  };
  return <div className="space-y-8 font-sans">
      
      {
    /* Top action row */
  }
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif font-bold text-2xl md:text-3.5xl text-dark-brown">
            Furniture Catalog Manager
          </h1>
          <p className="text-xs text-text-gray font-light mt-0.5">
            Maintain active wood assortments, structural specifications, pricing catalogs, and physical quantities.
          </p>
        </div>

        <button
    onClick={() => setAddProductModal(true)}
    className="bg-dark-brown hover:bg-primary-gold text-cream hover:text-dark-brown font-serif font-bold text-xs uppercase tracking-wider py-3 px-5 rounded shadow transition-all flex items-center gap-2"
  >
          <Plus className="w-4 h-4 text-primary-gold" />
          Add Furniture Record
        </button>
      </div>


      {
    /* Main product list view table */
  }
      <div className="bg-cream border border-border-custom rounded-2xl shadow-sm overflow-hidden p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-sans text-xs border-collapse">
            <thead>
              <tr className="border-b border-border-custom/40 text-[10px] text-text-gray uppercase tracking-wider">
                <th className="pb-3 font-semibold">SKU / ID</th>
                <th className="pb-3 font-semibold">Product Description</th>
                <th className="pb-3 font-semibold">Segment</th>
                <th className="pb-3 font-semibold text-center">Retail Rate</th>
                <th className="pb-3 font-semibold text-center">Satisfaction</th>
                <th className="pb-3 font-semibold text-center">Availability Status</th>
                <th className="pb-3 font-semibold text-right">Alter Records</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-custom/30 text-text-dark">
              {productList.map((p) => <tr key={p.id} className="hover:bg-light-beige/10">
                  <td className="py-4 font-mono font-bold text-text-gray">{p.sku}</td>
                  
                  <td className="py-4 font-sans font-medium text-dark-brown flex items-center gap-3">
                    <img
    src={p.images[0]}
    alt=""
    className="w-10 h-10 object-cover rounded border border-border-custom shrink-0"
  />
                    <div>
                      <p className="font-serif font-bold text-xs leading-none">{p.title}</p>
                      <p className="text-[10px] text-text-gray mt-1 leading-normal font-light max-w-xs truncate">{p.description}</p>
                    </div>
                  </td>

                  <td className="py-4 pr-3">{p.category}</td>
                  
                  <td className="py-4 font-bold text-center">₹{p.price.toLocaleString("en-IN")}</td>
                  
                  <td className="py-4 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-current text-primary-gold" />
                      <span>{p.rating}</span>
                    </div>
                  </td>

                  <td className="py-4 text-center">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${p.status === "In Stock" ? "bg-green-100 text-green-700" : p.status === "Low Stock" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-600"}`}>
                      {p.status}
                    </span>
                  </td>

                  <td className="py-4 text-right">
                    <button
    onClick={() => handleDelete(p.id)}
    className="p-1 px-2 border border-border-custom hover:border-red-500 rounded text-[10px] font-bold text-text-dark hover:bg-red-500 hover:text-white transition-colors"
  >
                      Delete
                    </button>
                  </td>

                </tr>)}
            </tbody>
          </table>
        </div>
      </div>


      {
    /*=========================================
       ADD PRODUCT MODAL DRAWER OVERLAY
      =========================================*/
  }
      <AnimatePresence>
        {addProductModal && <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-dark-brown/75 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
  >
            <motion.div
    initial={{ scale: 0.95, y: 30 }}
    animate={{ scale: 1, y: 0 }}
    exit={{ scale: 0.95, y: 30 }}
    className="bg-cream border border-primary-gold/15 rounded-2xl p-6 md:p-8 max-w-lg w-full shadow-2xl relative max-h-[90vh] overflow-y-auto"
  >
              
              {
    /* Header */
  }
              <div className="flex items-center justify-between pb-3 border-b border-border-custom/40">
                <h3 className="font-serif font-bold text-lg text-dark-brown">Catalog Registration Panel</h3>
                <button
    onClick={() => setAddProductModal(false)}
    className="p-1.5 rounded-full bg-light-beige hover:bg-primary-gold hover:text-cream text-dark-brown transition-colors text-xs font-serif font-extrabold"
  >
                  X
                </button>
              </div>

              {
    /* Form */
  }
              <form onSubmit={handleAddSubmit} className="space-y-4 font-sans text-xs text-text-dark mt-4">
                
                <div className="space-y-1.5">
                  <label className="font-bold text-dark-brown block">Furniture Article Title *</label>
                  <input
    type="text"
    required
    value={newProduct.title}
    onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
    className="w-full bg-light-beige/35 border border-border-custom px-3 py-2.5 text-xs rounded"
    placeholder="Premium Italian Leather Sofa"
  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-bold text-dark-brown block">Retail Price (INR) *</label>
                    <input
    type="number"
    required
    value={newProduct.price}
    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
    className="w-full bg-light-beige/35 border border-border-custom px-3 py-2.5 text-xs rounded"
    placeholder="85000"
  />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-dark-brown block">Stock Availability status</label>
                    <select
    value={newProduct.stock}
    onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
    className="w-full bg-light-beige/35 border border-border-custom px-3 py-2.5 text-xs rounded cursor-pointer"
  >
                      <option value="In Stock">In Stock</option>
                      <option value="Low Stock">Low Stock</option>
                      <option value="Out of Stock">Out of Stock</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-bold text-dark-brown block">Segment Room</label>
                    <select
    value={newProduct.category}
    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
    className="w-full bg-light-beige/35 border border-border-custom px-3 py-2.5 text-xs rounded cursor-pointer"
  >
                      <option value="Living Room">Living Room</option>
                      <option value="Bedroom">Bedroom Suite</option>
                      <option value="Dining Room">Dining Room Suite</option>
                      <option value="Office">Office Room Suite</option>
                      <option value="Outdoor">Outdoor Decking</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-dark-brown block">Primary Lumber</label>
                    <input
    type="text"
    value={newProduct.material}
    onChange={(e) => setNewProduct({ ...newProduct, material: e.target.value })}
    className="w-full bg-light-beige/35 border border-border-custom px-3 py-2.5 text-xs rounded"
    placeholder="FSC Teak Lumber"
  />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-bold text-dark-brown block">Target Size Dimensions</label>
                    <input
    type="text"
    value={newProduct.dimensions}
    onChange={(e) => setNewProduct({ ...newProduct, dimensions: e.target.value })}
    className="w-full bg-light-beige/35 border border-border-custom px-3 py-2.5 text-xs rounded"
    placeholder="80W x 38D x 31H inches"
  />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-dark-brown block">Furniture SKU Code Code</label>
                    <input
    type="text"
    value={newProduct.sku}
    onChange={(e) => setNewProduct({ ...newProduct, sku: e.target.value.toUpperCase() })}
    className="w-full bg-light-beige/35 border border-border-custom px-3 py-2.5 text-xs rounded"
    placeholder="e.g. FL-5284"
  />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-dark-brown block">Catalog Excerpt description</label>
                  <textarea
    rows={3}
    value={newProduct.description}
    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
    className="w-full bg-light-beige/35 border border-border-custom px-3 py-2.5 text-xs rounded"
  />
                </div>

                <button
    type="submit"
    className="w-full bg-dark-brown hover:bg-primary-gold text-cream hover:text-dark-brown font-serif font-bold text-xs uppercase tracking-wider py-3.5 rounded shadow transition-all"
  >
                  Verify Record Registry
                </button>

              </form>

            </motion.div>
          </motion.div>}
      </AnimatePresence>

    </div>;
}
