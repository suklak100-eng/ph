/**
 * NEXUS PHONE STUDIO - Showroom Inventory & Real-world Smartphone Catalog
 * Inspired by Flipkart & Meesho e-commerce specification standards.
 * Features realistic budget brackets, accurate MRP / selling prices,
 * real Indian retail specs, and store shelf tracking.
 */

window.PHONE_INVENTORY = [
  // --- FLAGSHIP TIER (₹60,000+) ---
  {
    id: "iphone-16",
    name: "Apple iPhone 16",
    fullName: "Apple iPhone 16 (Black, 128 GB)",
    brand: "Apple",
    category: "Flagship",
    badge: "Flagship Hot",
    rating: 4.8,
    ratingsCount: "4,820",
    reviewsCount: "386",
    currentPrice: 74999,
    originalPrice: 79900,
    discountPercent: 6,
    emiStartsAt: "₹6,250/mo",
    showroomStock: 5,
    shelfLocation: "Zone A • Shelf 01 (Apple Glass Counter)",
    demoAvailable: true,
    colors: [
      {
        name: "Black",
        hex: "#26282b",
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=700&q=80"
      },
      {
        name: "Ultramarine",
        hex: "#3b5898",
        image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=700&q=80"
      },
      {
        name: "Teal",
        hex: "#4f7d79",
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=700&q=80"
      },
      {
        name: "Pink",
        hex: "#e0b4b8",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=700&q=80"
      }
    ],
    storageOptions: [
      { size: "128 GB", priceOffset: 0 },
      { size: "256 GB", priceOffset: 10000 },
      { size: "512 GB", priceOffset: 30000 }
    ],
    highlights: [
      "128 GB ROM",
      "15.49 cm (6.1 inch) Super Retina XDR OLED Display",
      "48MP + 12MP Dual Rear Camera | 12MP Front Camera",
      "A18 Bionic Chip, 6 Core Processor with Apple Intelligence",
      "Camera Control button & Action Button",
      "Ceramic Shield front, Colour-infused glass back"
    ],
    warranty: "1 Year Official Brand Warranty for Device and 6 Months for In-Box Accessories"
  },
  {
    id: "samsung-s24-ultra",
    name: "Samsung Galaxy S24 Ultra 5G",
    fullName: "Samsung Galaxy S24 Ultra 5G (Titanium Gray, 256 GB)",
    brand: "Samsung",
    category: "Flagship",
    badge: "AI Flagship",
    rating: 4.8,
    ratingsCount: "7,310",
    reviewsCount: "820",
    currentPrice: 119999,
    originalPrice: 134999,
    discountPercent: 11,
    emiStartsAt: "₹10,000/mo",
    showroomStock: 4,
    shelfLocation: "Zone A • Shelf 03 (Samsung Experience Bar)",
    demoAvailable: true,
    colors: [
      {
        name: "Titanium Gray",
        hex: "#797b7e",
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=700&q=80"
      },
      {
        name: "Titanium Black",
        hex: "#222325",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=700&q=80"
      },
      {
        name: "Titanium Violet",
        hex: "#4b4458",
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=700&q=80"
      }
    ],
    storageOptions: [
      { size: "256 GB (12 GB RAM)", priceOffset: 0 },
      { size: "512 GB (12 GB RAM)", priceOffset: 12000 },
      { size: "1 TB (12 GB RAM)", priceOffset: 32000 }
    ],
    highlights: [
      "12 GB RAM | 256 GB ROM",
      "17.27 cm (6.8 inch) Quad HD+ Dynamic AMOLED 2X, 120Hz",
      "200MP + 50MP + 12MP + 10MP | 12MP Front Camera",
      "5000 mAh Battery | 45W Fast Charging",
      "Snapdragon 8 Gen 3 Processor with Galaxy AI Suite",
      "Built-in S-Pen Stylus & Titanium Frame"
    ],
    warranty: "1 Year Manufacturer Warranty for Phone and 6 Months for In-Box Accessories"
  },

  // --- PREMIUM MID-RANGE (₹30,000 - ₹55,000) ---
  {
    id: "oneplus-12r",
    name: "OnePlus 12R 5G",
    fullName: "OnePlus 12R 5G (Cool Blue, 128 GB)",
    brand: "OnePlus",
    category: "Mid-Range",
    badge: "Speed Champion",
    rating: 4.7,
    ratingsCount: "12,940",
    reviewsCount: "1,140",
    currentPrice: 37999,
    originalPrice: 39999,
    discountPercent: 5,
    emiStartsAt: "₹3,166/mo",
    showroomStock: 7,
    shelfLocation: "Zone B • Shelf 02 (OnePlus Performance Hub)",
    demoAvailable: true,
    colors: [
      {
        name: "Cool Blue",
        hex: "#87a5ba",
        image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=700&q=80"
      },
      {
        name: "Iron Gray",
        hex: "#34383c",
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=700&q=80"
      }
    ],
    storageOptions: [
      { size: "8 GB RAM | 128 GB ROM", priceOffset: 0 },
      { size: "16 GB RAM | 256 GB ROM", priceOffset: 4000 }
    ],
    highlights: [
      "8 GB RAM | 128 GB ROM",
      "17.22 cm (6.78 inch) 1.5K 120Hz ProXDR LTPO4 Display",
      "50MP Sony IMX890 (OIS) + 8MP + 2MP | 16MP Front",
      "5500 mAh Massive Battery | 100W SUPERVOOC in Box",
      "Snapdragon 8 Gen 2 Flagship Processor",
      "Dual Cryo-velocity Vapor Chamber Cooling"
    ],
    warranty: "1 Year Official Brand Warranty for Mobile and 6 Months for Accessories"
  },
  {
    id: "vivo-v40-pro",
    name: "Vivo V40 Pro 5G",
    fullName: "Vivo V40 Pro 5G (Ganges Blue, 256 GB)",
    brand: "Vivo",
    category: "Mid-Range",
    badge: "ZEISS Portrait",
    rating: 4.6,
    ratingsCount: "5,820",
    reviewsCount: "490",
    currentPrice: 49999,
    originalPrice: 54999,
    discountPercent: 9,
    emiStartsAt: "₹4,166/mo",
    showroomStock: 6,
    shelfLocation: "Zone C • Shelf 01 (Camera & Portrait Studio)",
    demoAvailable: true,
    colors: [
      {
        name: "Ganges Blue",
        hex: "#5c819a",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=80"
      },
      {
        name: "Titanium Grey",
        hex: "#6b7280",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=700&q=80"
      }
    ],
    storageOptions: [
      { size: "8 GB RAM | 256 GB ROM", priceOffset: 0 },
      { size: "12 GB RAM | 512 GB ROM", priceOffset: 6000 }
    ],
    highlights: [
      "8 GB RAM | 256 GB ROM",
      "17.22 cm (6.78 inch) 1.5K Curved AMOLED 120Hz, 4500 nits",
      "50MP ZEISS OIS + 50MP ZEISS Telephoto + 50MP Ultra Wide",
      "50MP ZEISS Group Selfie Camera with Eye-AF",
      "5500 mAh BlueVolt Battery | 80W FlashCharge",
      "MediaTek Dimensity 9200+ Flagship 4nm Processor"
    ],
    warranty: "1 Year Manufacturer Warranty for Phone & 6 Months for Charger"
  },

  // --- UPPER BUDGET / VALUE KINGS (₹18,000 - ₹28,000) ---
  {
    id: "nothing-phone-2a",
    name: "Nothing Phone (2a)",
    fullName: "Nothing Phone (2a) (Black, 128 GB)",
    brand: "Nothing",
    category: "Upper Budget",
    badge: "Iconic Glyph",
    rating: 4.6,
    ratingsCount: "34,810",
    reviewsCount: "4,120",
    currentPrice: 23999,
    originalPrice: 25999,
    discountPercent: 8,
    emiStartsAt: "₹2,000/mo",
    showroomStock: 9,
    shelfLocation: "Zone D • Shelf 02 (Nothing Experience Stand)",
    demoAvailable: true,
    colors: [
      {
        name: "Black",
        hex: "#1b1d22",
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=700&q=80"
      },
      {
        name: "White",
        hex: "#f3f4f6",
        image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=700&q=80"
      },
      {
        name: "Special Blue",
        hex: "#2563eb",
        image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=700&q=80"
      }
    ],
    storageOptions: [
      { size: "8 GB RAM | 128 GB ROM", priceOffset: 0 },
      { size: "8 GB RAM | 256 GB ROM", priceOffset: 2000 },
      { size: "12 GB RAM | 256 GB ROM", priceOffset: 4000 }
    ],
    highlights: [
      "8 GB RAM | 128 GB ROM",
      "17.02 cm (6.7 inch) Flexible AMOLED Display, 120Hz",
      "50MP (OIS) + 50MP Ultra-Wide | 32MP Front Camera",
      "5000 mAh High-capacity Battery | 45W Fast Charging",
      "Dimensity 7200 Pro 5G Processor (4nm)",
      "Custom Glyph Interface LED Lighting & Clean Nothing OS"
    ],
    warranty: "1 Year Manufacturer Warranty for Phone & 6 Months for Cable"
  },
  {
    id: "moto-edge-50-fusion",
    name: "Motorola Edge 50 Fusion 5G",
    fullName: "Motorola Edge 50 Fusion (Marshmallow Blue, 128 GB)",
    brand: "Motorola",
    category: "Upper Budget",
    badge: "IP68 Water Safe",
    rating: 4.5,
    ratingsCount: "48,220",
    reviewsCount: "5,340",
    currentPrice: 21999,
    originalPrice: 25999,
    discountPercent: 15,
    emiStartsAt: "₹1,833/mo",
    showroomStock: 8,
    shelfLocation: "Zone D • Shelf 04 (Motorola Display Desk)",
    demoAvailable: true,
    colors: [
      {
        name: "Marshmallow Blue (Vegan Leather)",
        hex: "#7da2bf",
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=700&q=80"
      },
      {
        name: "Hot Pink (Vegan Leather)",
        hex: "#d946ef",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=700&q=80"
      },
      {
        name: "Forest Blue",
        hex: "#1e3a5f",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=80"
      }
    ],
    storageOptions: [
      { size: "8 GB RAM | 128 GB ROM", priceOffset: 0 },
      { size: "12 GB RAM | 256 GB ROM", priceOffset: 3000 }
    ],
    highlights: [
      "8 GB RAM | 128 GB ROM",
      "16.94 cm (6.67 inch) Endless Edge pOLED, 144Hz Refresh Rate",
      "50MP Sony LYTIA 700C OIS + 13MP Ultrawide Macro | 32MP Front",
      "5000 mAh Battery | 68W TurboPower Charger in Box",
      "Snapdragon 7s Gen 2 Processor",
      "IP68 Underwater Protection & Smart Water Touch"
    ],
    warranty: "1 Year Official Brand Warranty for Handset and 6 Months for Charger"
  },
  {
    id: "realme-13-pro",
    name: "Realme 13 Pro 5G",
    fullName: "Realme 13 Pro 5G (Monet Gold, 128 GB)",
    brand: "Realme",
    category: "Upper Budget",
    badge: "Monet Design",
    rating: 4.5,
    ratingsCount: "16,400",
    reviewsCount: "1,210",
    currentPrice: 24999,
    originalPrice: 29999,
    discountPercent: 17,
    emiStartsAt: "₹2,083/mo",
    showroomStock: 6,
    shelfLocation: "Zone C • Shelf 03 (Design Showcase)",
    demoAvailable: true,
    colors: [
      {
        name: "Monet Gold",
        hex: "#d4af37",
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=700&q=80"
      },
      {
        name: "Emerald Green",
        hex: "#2e6f40",
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=700&q=80"
      }
    ],
    storageOptions: [
      { size: "8 GB RAM | 128 GB ROM", priceOffset: 0 },
      { size: "8 GB RAM | 256 GB ROM", priceOffset: 2000 },
      { size: "12 GB RAM | 512 GB ROM", priceOffset: 6000 }
    ],
    highlights: [
      "8 GB RAM | 128 GB ROM",
      "17.02 cm (6.7 inch) 120Hz Curved Vision AMOLED Display",
      "50MP Sony LYT-600 OIS + 8MP Ultra-Wide | 32MP Sony Selfie",
      "5200 mAh Long-Life Battery | 45W SUPERVOOC Charging",
      "Snapdragon 7s Gen 2 5G Processor",
      "Monet Artwork Glass Back with ArmorShield Glass"
    ],
    warranty: "1 Year Warranty for Mobile and 6 Months for Accessories"
  },

  // --- MASS BUDGET CHAMPIONS (₹10,000 - ₹16,000) ---
  {
    id: "redmi-note-13",
    name: "Redmi Note 13 5G",
    fullName: "Redmi Note 13 5G (Prism Gold, 128 GB)",
    brand: "Xiaomi",
    category: "Budget",
    badge: "Best Seller",
    rating: 4.4,
    ratingsCount: "62,100",
    reviewsCount: "7,840",
    currentPrice: 14999,
    originalPrice: 18999,
    discountPercent: 21,
    emiStartsAt: "₹1,250/mo",
    showroomStock: 12,
    shelfLocation: "Zone E • Shelf 01 (Value Segment Counter)",
    demoAvailable: true,
    colors: [
      {
        name: "Prism Gold",
        hex: "#d9c49a",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=80"
      },
      {
        name: "Stealth Black",
        hex: "#212429",
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=700&q=80"
      },
      {
        name: "Arctic White",
        hex: "#e5e7eb",
        image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=700&q=80"
      }
    ],
    storageOptions: [
      { size: "6 GB RAM | 128 GB ROM", priceOffset: 0 },
      { size: "8 GB RAM | 256 GB ROM", priceOffset: 2000 }
    ],
    highlights: [
      "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
      "16.94 cm (6.67 inch) Full HD+ AMOLED, 120Hz, Super-thin Bezels",
      "108MP Ultra-Clear 3x In-Sensor Zoom Camera + 8MP + 2MP | 16MP Front",
      "5000 mAh Battery | 33W Fast Charging in Box",
      "MediaTek Dimensity 6080 5G Processor",
      "Corning Gorilla Glass 5 & IP54 Splash Proof"
    ],
    warranty: "1 Year Official Manufacturer Warranty for Handset & 6 Months for Cable"
  },
  {
    id: "samsung-galaxy-m15",
    name: "Samsung Galaxy M15 5G",
    fullName: "Samsung Galaxy M15 5G (Celestial Blue, 128 GB)",
    brand: "Samsung",
    category: "Budget",
    badge: "6000mAh Battery",
    rating: 4.3,
    ratingsCount: "41,900",
    reviewsCount: "3,820",
    currentPrice: 12499,
    originalPrice: 15999,
    discountPercent: 22,
    emiStartsAt: "₹1,041/mo",
    showroomStock: 15,
    shelfLocation: "Zone E • Shelf 03 (Battery Champions Counter)",
    demoAvailable: true,
    colors: [
      {
        name: "Celestial Blue",
        hex: "#8fa9c4",
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=700&q=80"
      },
      {
        name: "Stone Grey",
        hex: "#4b5563",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=700&q=80"
      }
    ],
    storageOptions: [
      { size: "6 GB RAM | 128 GB ROM", priceOffset: 0 },
      { size: "8 GB RAM | 128 GB ROM", priceOffset: 1500 }
    ],
    highlights: [
      "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
      "16.51 cm (6.5 inch) Super AMOLED FHD+ Display, 90Hz",
      "50MP Main + 5MP Ultra-Wide + 2MP Macro | 13MP Front",
      "6000 mAh Monster Battery (Up to 2 Days Backup)",
      "MediaTek Dimensity 6100+ 5G Processor",
      "4 Generations of Android OS Updates & 5 Years Security"
    ],
    warranty: "1 Year Official Samsung Warranty for Handset & 6 Months for In-Box Items"
  },
  {
    id: "moto-g45",
    name: "Moto G45 5G",
    fullName: "Moto G45 5G (Brilliant Green, 128 GB)",
    brand: "Motorola",
    category: "Budget",
    badge: "Best Under 12K",
    rating: 4.4,
    ratingsCount: "28,340",
    reviewsCount: "2,980",
    currentPrice: 11999,
    originalPrice: 14999,
    discountPercent: 20,
    emiStartsAt: "₹999/mo",
    showroomStock: 10,
    shelfLocation: "Zone E • Shelf 04 (Entry 5G Counter)",
    demoAvailable: true,
    colors: [
      {
        name: "Brilliant Green (Vegan Leather)",
        hex: "#3d7353",
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=700&q=80"
      },
      {
        name: "Viva Magenta (Vegan Leather)",
        hex: "#be3455",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=700&q=80"
      },
      {
        name: "Brilliant Blue",
        hex: "#295384",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=80"
      }
    ],
    storageOptions: [
      { size: "8 GB RAM | 128 GB ROM", priceOffset: 0 }
    ],
    highlights: [
      "8 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
      "16.51 cm (6.5 inch) HD+ 120Hz IPS Display with Gorilla Glass 3",
      "50MP Quad Pixel Rear Camera + 2MP Macro | 16MP Selfie",
      "5000 mAh Battery | 20W TurboPower Charger Included",
      "Snapdragon 6s Gen 3 (6nm 5G Processor)",
      "Premium Vegan Leather Finish with Dolby Atmos Dual Stereo Speakers"
    ],
    warranty: "1 Year Manufacturer Warranty for Phone & 6 Months for Accessories"
  }
];

// Showroom Metadata (English)
window.SHOWROOM_METADATA = {
  name: "NEXUS PHONE STUDIO",
  location: "Shop #204, 2nd Floor, Apex Grand Arcade, MG Road",
  landmark: "Near Central Metro Station, Opposite City Plaza",
  openHours: "10:00 AM - 09:30 PM (All 7 Days Open)",
  contactPhone: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  pickupPolicy: "Free Online Reservation • No Advance Needed • 48-Hour Hold Guarantee"
};
