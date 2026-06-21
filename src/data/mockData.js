export const mockProducts = [
  {
    id: "prod-1",
    title: "Modern Luxury Sofa",
    sku: "FL-SOFA-001",
    price: 45999,
    originalPrice: 59999,
    rating: 4.8,
    reviewsCount: 128,
    category: "Living Room",
    description: "A perfect blend of comfort and elegance. Crafted with premium fabric and solid wood frame. This magnificent piece is built to elevate any room and turn heads with its sleek contours and organic texture.",
    details: "The Modern Luxury Sofa combines minimalist design principles with maximalist comfort. It features a solid kiln-dried hardwood frame, double-doweled joints, and high-density foam cushions wrapped in premium pet-and-child-friendly performance fabric.",
    specifications: {
      material: "Solid Birchwood, Premium Boucl\xE9 Fabric, High-Density Foam",
      dimensions: '94"W x 38"D x 34"H',
      weight: "142 lbs",
      assembly: "Light assembly required (legs only)",
      warranty: "5 Years Manufacturer Warranty"
    },
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800"
    ],
    colors: [
      { name: "Warm Cream", hex: "#F7F4EF" },
      { name: "Charcoal Grey", hex: "#444444" },
      { name: "Sage Green", hex: "#879883" },
      { name: "Forest Brown", hex: "#52433D" }
    ],
    stock: 12,
    isNew: true
  },
  {
    id: "prod-2",
    title: "Luxury Armchair",
    sku: "FL-ARM-002",
    price: 22999,
    originalPrice: 29999,
    rating: 4.7,
    reviewsCount: 84,
    category: "Living Room",
    description: "An elegant statement armchair that wraps you in pure comfort. The perfect focal point for a cozy reading corner, study, or living room setup.",
    details: "Sculpted with care, the Luxury Armchair features structural elements in solid oak, high-density resilience cushions, and is upholstered in luxurious velvet. Beautiful piping details and custom-finished legs.",
    specifications: {
      material: "Solid Oak, Ultra-Soft Velvet, Brass Accents",
      dimensions: '32"W x 34"D x 40"H',
      weight: "55 lbs",
      assembly: "Fully assembled",
      warranty: "3 Years Warranty"
    },
    images: [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=800"
    ],
    colors: [
      { name: "Royal Velvet Teal", hex: "#1E3E43" },
      { name: "Mustard Yellow", hex: "#D6A429" },
      { name: "Burnt Terracotta", hex: "#9E4E3A" },
      { name: "Warm Cream", hex: "#F7F4EF" }
    ],
    stock: 8,
    isSale: true,
    saleDiscount: 23
  },
  {
    id: "prod-3",
    title: "Wooden Dining Table",
    sku: "FL-TAB-003",
    price: 32999,
    originalPrice: 35999,
    rating: 4.9,
    reviewsCount: 96,
    category: "Dining Room",
    description: "Crafted from sustainable premium teak wood. Brings a rustic yet sophisticated dining experience to your home. Fits up to 8 guests comfortably.",
    details: "Featuring hand-finished live edges and heavy-duty timber supports, this dining table highlights the organic beauty of solid premium teak. The surface is sealed with a scratch-resistant matte clear coat.",
    specifications: {
      material: "100% Solid Teak Wood, Non-toxic Matte Polyurethane Sealer",
      dimensions: '84"W x 38"D x 30"H',
      weight: "180 lbs",
      assembly: "Requires two-person assembly",
      warranty: "10 Years Structural Warranty"
    },
    images: [
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80&w=800"
    ],
    colors: [
      { name: "Natural Teak", hex: "#B28A54" },
      { name: "Dark Oak", hex: "#4A3326" }
    ],
    stock: 5,
    isNew: false
  },
  {
    id: "prod-4",
    title: "King Size Bed",
    sku: "FL-BED-004",
    price: 65999,
    originalPrice: 79999,
    rating: 4.9,
    reviewsCount: 64,
    category: "Bedroom",
    description: "Envelop yourself in supreme comfort. This luxurious velvet upholstered bed frame boasts an architectural wingback headboard and discrete built-in storage drawers.",
    details: "Crafted with premium linen fabric cover over memory foam inserts. Integrated gas-lift storage drawers at the foot. Support slats included; no box spring required.",
    specifications: {
      material: "Linen upholstery, steel alloy support spars, pine timber frame",
      dimensions: '88"W x 86"D x 56"H',
      weight: "210 lbs",
      assembly: "Assembly toolkit included",
      warranty: "5 Years Warranty"
    },
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800"
    ],
    colors: [
      { name: "Warm Cream", hex: "#F7F4EF" },
      { name: "Slate Gray", hex: "#6D7175" },
      { name: "Dark Brown", hex: "#2A211C" }
    ],
    stock: 3,
    isNew: true
  },
  {
    id: "prod-5",
    title: "Coffee Table",
    sku: "FL-COF-005",
    price: 14999,
    originalPrice: 19999,
    rating: 4.6,
    reviewsCount: 110,
    category: "Living Room",
    description: "Sleek premium marble coffee table featuring golden steel supports. A geometric modern marvel that grounds your living area setup with luxurious utility.",
    details: "Genuine Calacatta gold-veined marble slab top, sealed against staining. High-grade stainless steel frame plated in an elegant semi-matte gold finish.",
    specifications: {
      material: "Genuine Calacatta Marble, Brushed Gold Plated Stainless Steel",
      dimensions: '36"W x 36"D x 16"H',
      weight: "82 lbs",
      assembly: "Fully assembled",
      warranty: "2 Years Warranty"
    },
    images: [
      "https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800"
    ],
    colors: [
      { name: "Carrara White", hex: "#EAEAEA" },
      { name: "Nero Portoro Black", hex: "#1C1C1C" }
    ],
    stock: 15,
    isSale: true,
    saleDiscount: 25
  },
  {
    id: "prod-6",
    title: "Premium Chair",
    sku: "FL-CHR-006",
    price: 18999,
    originalPrice: 22999,
    rating: 4.8,
    reviewsCount: 72,
    category: "Office",
    description: "An ergonomic accent chair with organic modern vibes, fine leather, and ash-wood wrapping. Elevates your study or dining setup instantly.",
    details: "Made with genuine top-grain aniline leather, structured high-density foam, and bentwood ash casing. Fitted with silent non-scuffing glide feet.",
    specifications: {
      material: "Bent Ashwood, Top-grain Aniline Leather, Steel core",
      dimensions: '26"W x 28"D x 32"H',
      weight: "24 lbs",
      assembly: "Light assembly (4 screws to mount legs)",
      warranty: "3 Years Warranty"
    },
    images: [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1580481072645-022f9a6dbf27?auto=format&fit=crop&q=80&w=800"
    ],
    colors: [
      { name: "Saddle Leather Brown", hex: "#6E473B" },
      { name: "Obsidian Leather", hex: "#111111" },
      { name: "Alabaster Leather", hex: "#F0EFEB" }
    ],
    stock: 20,
    isNew: false
  },
  {
    id: "prod-7",
    title: "Decor Lamp",
    sku: "FL-LMP-007",
    price: 4999,
    rating: 4.5,
    reviewsCount: 45,
    category: "Decor & Lighting",
    description: "Stunning premium ceramic table lamp with a natural pleated linen shade. Emits an ambient golden-warm glow ideal for desks or bedside tables.",
    details: "A sculptural ribbed ceramic base finished in a reactive matte white wash. Coupled with a standard warm-white dimmable smart LED bulb.",
    specifications: {
      material: "Ceramic Base, Natural Linen, Brass Accents",
      dimensions: '12"W x 12"D x 22"H',
      weight: "8 lbs",
      assembly: "Fully assembled",
      warranty: "1 Year Warranty"
    },
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?auto=format&fit=crop&q=80&w=800"
    ],
    colors: [
      { name: "Alabaster White", hex: "#FAF9F6" },
      { name: "Silt Grey", hex: "#8C857B" }
    ],
    stock: 25,
    isNew: true
  },
  {
    id: "prod-8",
    title: "Floor Lamp",
    sku: "FL-LMP-008",
    price: 6999,
    rating: 4.7,
    reviewsCount: 38,
    category: "Decor & Lighting",
    description: "An architectural minimalist black-coated steel floor lamp. Brings refined, warm illumination to dark corner layouts.",
    details: "Featuring an adjustable cantilever arm and double-muffled light diffuser. Foot-triggered floor control switch matching the contemporary style.",
    specifications: {
      material: "Powder-coated Carbon Steel, Opal Glass Diffuser",
      dimensions: '18"W x 10"D x 68"H',
      weight: "16 lbs",
      assembly: "Simple screw-in sections",
      warranty: "2 Years Warranty"
    },
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1542728929-14ab1c67e97f?auto=format&fit=crop&q=80&w=800"
    ],
    colors: [
      { name: "Midnight Charcoal", hex: "#1E1E1E" },
      { name: "Brushed Brass", hex: "#D4AF37" }
    ],
    stock: 14,
    isNew: false
  }
];
export const mockCollections = [
  {
    id: "col-1",
    name: "Living Room",
    description: "Elevated luxury sofas, bespoke modular seating, marble coffee tables, and elegant armchairs.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    itemsCount: 48
  },
  {
    id: "col-2",
    name: "Bedroom",
    description: "Sumptuous wingback headboard beds, luxury cotton linens, modular dressers, and storage.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=800",
    itemsCount: 32
  },
  {
    id: "col-3",
    name: "Dining Room",
    description: "Premium solid teak and oak dining tables, custom-stitched dining chairs, and bespoke credenzas.",
    image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80&w=800",
    itemsCount: 24
  },
  {
    id: "col-4",
    name: "Office",
    description: "Ergonomic leather chairs, solid timber work desks, smart shelving solutions, and accessories.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800",
    itemsCount: 18
  },
  {
    id: "col-5",
    name: "Outdoor",
    description: "Weather-beaten elegant teak tables, stylish all-season lounge sets, and custom shade setups.",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800",
    itemsCount: 15
  },
  {
    id: "col-6",
    name: "Decor & Lighting",
    description: "Bespoke hand-crafted ceramic desk lamps, standing light fixtures, wool rugs, and custom accent pieces.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800",
    itemsCount: 42
  }
];
export const mockProjects = [
  {
    id: "proj-1",
    title: "Luxury Residence in Beverly Hills",
    description: "An immersive mid-century warm modern residence utilizing custom solid-wood panels and expansive layout styling.",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    client: "The Henderson Family",
    year: "2025",
    location: "Beverly Hills, CA"
  },
  {
    id: "proj-2",
    title: "Minimalist High-Rise Office Penthouse",
    description: "A crisp commercial workplace outfitted with ergonomic Rajput Cushion seating modules, walnut tables, and premium leather accents.",
    category: "Office",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    client: "Apex Capital Inc.",
    year: "2024",
    location: "Manhattan, NY"
  },
  {
    id: "proj-3",
    title: "The Brass Peacock Fine Diner",
    description: "A dramatic, moody dining environment marrying deep emerald walls with custom-made brass base tables and velveteen armchairs.",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    client: "Gourmet Hospitality Group",
    year: "2025",
    location: "Chicago, IL"
  },
  {
    id: "proj-4",
    title: "Lakeside Wellness Resort Lodge",
    description: "Natural oak fixtures and custom waterproof outdoor lounge installations styled around panoramic waterfront vistas.",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
    client: "Solitude Resorts Group",
    year: "2023",
    location: "Lake Tahoe, NV"
  }
];
export const mockBlogPosts = [
  {
    id: "blog-1",
    title: "10 Tips to Choose the Perfect Sofa",
    excerpt: "Investing in a high-quality sofa can elevate your everyday living. Discover key aspects from spatial ratios to material textures that you should look for.",
    content: "Choosing a sofa is more than selecting a color. You must understand frame construction, the difference between pocketed coil and high-density foam filling, and the practical demands of your lifestyle. If you have pets or active children, standard velvet might degrade, making premium stain-locked performance boucl\xE9 or heavy-grade aniline leather far superior long-term investments. Ensure comfort metrics like pitch height and back support fit your height profiles. Spatial sizing rules suggest keeping the sofa width within 60% of your primary accent wall width.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800",
    date: "June 15, 2026",
    author: "Sophia Sterling",
    category: "Design Guide",
    readTime: "6 min read"
  },
  {
    id: "blog-2",
    title: "Modern Furniture Trends in 2026",
    excerpt: "This season is dominated by soft organic curves, raw natural stone elements, and multi-functional architectural formats.",
    content: "We are observing a massive transition away from hyper-stark metal minimalism. Modern interiors are embracing texture, warmth, and physical presence. Travertine, raw unpolished marble, and heavily grained oak are combining with soft, curving chairs and architectural lighting. Gold, cream, and warm forest tones are replacing cold greys. Smart integration\u2014such as built-in wireless charges inside matching nightstands and recessed power channels under premium conference counters\u2014is becoming a fundamental luxury requirement.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800",
    date: "May 28, 2026",
    author: "Marcus Vance",
    category: "Trends",
    readTime: "8 min read"
  },
  {
    id: "blog-3",
    title: "How to Style Your Living Room",
    excerpt: "Learn the secrets of visual weight distribution, focal-point layouts, and mixing textures like marble and boucl\xE9.",
    content: "A well-styled living room balances warm wooden grains, cold high-contrast marbles, and soft organic woven fibers. Start with an anchoring focus\u2014typically your premium lounge sofa or a grand marble fireplace. Arrange secondary visual assets like low-slung armchairs at conversational angles. Introduce sculptural elements such as table lamps and gold brass trays to catch warm rays of sunlight. Layer textures using hand-tasseled wool rugs and ribbed ceramic vases to complete the elegant, curated look.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    date: "April 12, 2026",
    author: "Elena Rostova",
    category: "Styling",
    readTime: "5 min read"
  },
  {
    id: "blog-4",
    title: "Sustainable Furniture Matters",
    excerpt: "Why investing in double-doweled kiln-dried hardwoods and non-toxic natural finishes is the responsible modern choice.",
    content: "Disposable furniture creates staggering environmental waste. Purchasing items made from premium FSC-certified sustainable timber, solid brass, and recyclable steel alloys ensures lifetime durability. Sustainable finishes like non-toxic vegetable oils, beeswax coatings, and low-VOC moisture barriers respect your home indoor air quality. Discover how Rajput Cushion integrates localized supply chains and replanting pledges into every crafted dining table and bedroom frame.",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800",
    date: "March 05, 2026",
    author: "Julian Thorne",
    category: "Sustainability",
    readTime: "10 min read"
  }
];
export const mockOrders = [
  {
    id: "FL-7324",
    date: "2026-06-18",
    customerName: "Rahul Sharma",
    customerEmail: "rahul.sharma@gmail.com",
    customerPhone: "+91 98765 43210",
    address: "Flat 402, Lotus Height, Powai, Mumbai - 400076",
    items: [
      { productId: "prod-1", title: "Modern Luxury Sofa", price: 45999, quantity: 1, color: "Warm Cream" }
    ],
    subtotal: 45999,
    shipping: 0,
    total: 45999,
    status: "Delivered"
  },
  {
    id: "FL-6819",
    date: "2026-06-15",
    customerName: "Pooja Verma",
    customerEmail: "pooja.verma@example.com",
    customerPhone: "+91 87654 32109",
    address: "B-12, Sector 15, Noida, UP - 201301",
    items: [
      { productId: "prod-2", title: "Luxury Armchair", price: 22999, quantity: 1, color: "Royal Velvet Teal" }
    ],
    subtotal: 22999,
    shipping: 0,
    total: 22999,
    status: "Shipped"
  },
  {
    id: "FL-5412",
    date: "2026-06-12",
    customerName: "Amit Patel",
    customerEmail: "amit.patel@hotmail.com",
    customerPhone: "+91 76543 21098",
    address: "32, Whitefield Boulevard, Bangalore, Karnataka - 560066",
    items: [
      { productId: "prod-5", title: "Coffee Table", price: 14999, quantity: 1, color: "Carrara White" }
    ],
    subtotal: 14999,
    shipping: 0,
    total: 14999,
    status: "Processing"
  },
  {
    id: "FL-4911",
    date: "2026-06-08",
    customerName: "Sneha Reddy",
    customerEmail: "sneha.reddy@gmail.com",
    customerPhone: "+91 91234 56789",
    address: "H.No. 4-43, Jubilee Hills, Hyderabad - 500033",
    items: [
      { productId: "prod-3", title: "Wooden Dining Table", price: 32999, quantity: 1, color: "Natural Teak" }
    ],
    subtotal: 32999,
    shipping: 0,
    total: 32999,
    status: "Cancelled"
  }
];
export const mockStats = {
  totalSales: 1245e3,
  ordersCount: 1254,
  customersCount: 8542,
  reviewsCount: 256,
  salesOverview: [
    { name: "Jan", sales: 45e3 },
    { name: "Feb", sales: 52e3 },
    { name: "Mar", sales: 68e3 },
    { name: "Apr", sales: 61e3 },
    { name: "May", sales: 85e3 },
    { name: "Jun", sales: 124e3 }
  ]
};
