/**
 * TECHNOVA SMARTPHONE CATALOG & STORE DATABASE
 * Real smartphone models with authentic transparent photography, realistic showroom discounts, and official specs.
 */

window.TECHNOVA_DATA = {
  // Popular Smartphones (Row 1 from design)
  popularPhones: [
    {
      id: "iphone-16-pro",
      name: "iPhone 16 Pro Max",
      brand: "Apple",
      badge: "Best Seller",
      badgeType: "blue",
      storage: "256GB • Natural Titanium",
      price: 1149.00,
      originalPrice: 1299.00,
      rating: 4.9,
      reviewsCount: "2.5k",
      image: "https://pngimg.com/uploads/iphone16/iphone16_PNG38.png",
      fallbackImage: "assets/phones/iphone-16-pro.svg",
      colors: ["#9a958e", "#2b2a29", "#c5b49e", "#f2f1ed"],
      colorNames: ["Natural Titanium", "Black Titanium", "Desert Titanium", "White Titanium"],
      specs: {
        display: '6.9"',
        storage: "256GB",
        chip: "A18 Pro",
        network: "5G"
      },
      description: "The iPhone 16 Pro Max delivers exceptional performance with the powerful A18 Pro chip, 48MP Pro camera system with 5x optical telephoto, and stunning grade-5 titanium frame."
    },
    {
      id: "samsung-galaxy-s24",
      name: "Galaxy S24 Ultra",
      brand: "Samsung",
      badge: "Galaxy AI",
      badgeType: "blue",
      storage: "256GB • Titanium Black",
      price: 1099.00,
      originalPrice: 1299.00,
      rating: 4.8,
      reviewsCount: "1.8k",
      image: "https://pngimg.com/uploads/smartphone/smartphone_PNG8494.png",
      fallbackImage: "assets/phones/samsung-s24.svg",
      colors: ["#242528", "#8b8f97", "#50635c", "#7c6882"],
      colorNames: ["Titanium Black", "Titanium Gray", "Titanium Violet", "Titanium Yellow"],
      specs: {
        display: '6.8"',
        storage: "256GB",
        chip: "Snapdragon 8 Gen 3",
        network: "5G"
      },
      description: "Galaxy S24 Ultra with Galaxy AI transforms your phone experience with Circle to Search, Live Call Translate, Note Assist, integrated S Pen, and 200MP Quad-Telephoto zoom."
    },
    {
      id: "google-pixel-9",
      name: "Google Pixel 9 Pro",
      brand: "Google",
      badge: "Gemini AI",
      badgeType: "blue",
      storage: "128GB • Obsidian",
      price: 799.00,
      originalPrice: 949.00,
      rating: 4.7,
      reviewsCount: "1.2k",
      image: "https://www.pngarts.com/files/11/Google-Pixel-Phone-Front-PNG-High-Quality-Image.png",
      fallbackImage: "assets/phones/google-pixel-9.svg",
      colors: ["#2a2d32", "#ece7e2", "#8b948f", "#e8b8c8"],
      colorNames: ["Obsidian", "Porcelain", "Hazel", "Rose Quartz"],
      specs: {
        display: '6.3"',
        storage: "128GB",
        chip: "Tensor G4",
        network: "5G"
      },
      description: "Engineered by Google with Gemini Pro on-device AI, pro triple-lens camera system, Super Actua display, and 7 years of Pixel Feature Drops."
    },
    {
      id: "oneplus-12",
      name: "OnePlus 12 5G",
      brand: "OnePlus",
      badge: "Flagship Killer",
      badgeType: "blue",
      storage: "256GB • Emerald",
      price: 769.00,
      originalPrice: 899.00,
      rating: 4.6,
      reviewsCount: "940",
      image: "https://pngimg.com/uploads/iphone16/iphone16_PNG13.png",
      fallbackImage: "assets/phones/oneplus-12.svg",
      colors: ["#254b38", "#1c1c1f", "#e5e7eb"],
      colorNames: ["Flowy Emerald", "Silky Black", "Glacial White"],
      specs: {
        display: '6.82"',
        storage: "256GB",
        chip: "Snapdragon 8 Gen 3",
        network: "5G"
      },
      description: "Snapdragon 8 Gen 3 flagship with 5400mAh dual-cell battery, 100W SUPERVOOC charging, and 4th Gen Hasselblad Camera System."
    }
  ],

  // Best Deals (Row 2 from design with showroom discount percentages)
  bestDeals: [
    {
      id: "iphone-15",
      name: "iPhone 15",
      brand: "Apple",
      badge: "-16% OFF",
      badgeType: "discount",
      storage: "128GB • Blue",
      price: 699.00,
      originalPrice: 829.00,
      rating: 4.7,
      reviewsCount: "2.1k",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Apple_iPhone_15.png",
      fallbackImage: "assets/phones/iphone-15.svg",
      colors: ["#c3d3db", "#e8c6ce", "#e3e5aa", "#2f3136"],
      colorNames: ["Pastel Blue", "Pink", "Yellow", "Black"],
      specs: {
        display: '6.1"',
        storage: "128GB",
        chip: "A16 Bionic",
        network: "5G"
      },
      description: "Dynamic Island, 48MP Main camera with 2x optical-quality telephoto zoom, USB-C connector and durable color-infused glass back."
    },
    {
      id: "iphone-16-mint",
      name: "iPhone 16",
      brand: "Apple",
      badge: "-14% OFF",
      badgeType: "discount",
      storage: "128GB • Teal Mint",
      price: 769.00,
      originalPrice: 899.00,
      rating: 4.8,
      reviewsCount: "1.5k",
      image: "https://pngimg.com/uploads/iphone16/iphone16_PNG6.png",
      fallbackImage: "assets/phones/samsung-s23.svg",
      colors: ["#9ee4d9", "#242528", "#ebe7dd", "#435248"],
      colorNames: ["Teal Mint", "Ultramarine", "Pink", "Black"],
      specs: {
        display: '6.1"',
        storage: "128GB",
        chip: "A18 Chip",
        network: "5G"
      },
      description: "Equipped with the all-new Camera Control button, 48MP Fusion camera, Action button, and Apple Intelligence."
    },
    {
      id: "iphone-16-white",
      name: "iPhone 16 White",
      brand: "Apple",
      badge: "-14% OFF",
      badgeType: "discount",
      storage: "128GB • Bright White",
      price: 769.00,
      originalPrice: 899.00,
      rating: 4.7,
      reviewsCount: "1.1k",
      image: "https://pngimg.com/uploads/iphone16/iphone16_PNG29.png",
      fallbackImage: "assets/phones/google-pixel-8.svg",
      colors: ["#ffffff", "#242528", "#dfb8ab"],
      colorNames: ["Bright White", "Black", "Pink"],
      specs: {
        display: '6.1"',
        storage: "128GB",
        chip: "A18 Chip",
        network: "5G"
      },
      description: "Pure white ceramic shield front and aerospace-grade aluminum edges with Super Retina XDR OLED screen."
    },
    {
      id: "iphone-16-blue",
      name: "iPhone 16 Plus",
      brand: "Apple",
      badge: "-12% OFF",
      badgeType: "discount",
      storage: "256GB • Ultramarine",
      price: 789.00,
      originalPrice: 899.00,
      rating: 4.6,
      reviewsCount: "820",
      image: "https://pngimg.com/uploads/iphone16/iphone16_PNG34.png",
      fallbackImage: "assets/phones/oneplus-nord-3.svg",
      colors: ["#3b528b", "#1c1c1f"],
      colorNames: ["Ultramarine Blue", "Space Black"],
      specs: {
        display: '6.7"',
        storage: "256GB",
        chip: "A18 Chip",
        network: "5G"
      },
      description: "Big screen 6.7-inch display, class-leading battery life, dual camera system with spatial photo capture for Vision Pro."
    }
  ],

  // Cart initial items (matches the "Your Cart (3)" screen in the mockup!)
  initialCart: [
    {
      id: "iphone-16-pro",
      name: "iPhone 16 Pro Max",
      variant: "256GB • Titanium",
      price: 1149.00,
      quantity: 1,
      image: "https://pngimg.com/uploads/iphone16/iphone16_PNG38.png"
    },
    {
      id: "samsung-galaxy-s24",
      name: "Galaxy S24 Ultra",
      variant: "256GB • Black",
      price: 1099.00,
      quantity: 1,
      image: "https://pngimg.com/uploads/smartphone/smartphone_PNG8494.png"
    },
    {
      id: "airpods-pro-2",
      name: "AirPods Pro 2",
      variant: "MagSafe (USB-C)",
      price: 249.00,
      quantity: 1,
      image: "https://pngimg.com/uploads/airPods/airPods_PNG13.png"
    }
  ],

  // Brands (Matches the Shop by Brand row from the mockup)
  brands: [
    { name: "Apple", logoType: "apple" },
    { name: "Samsung", logoType: "samsung" },
    { name: "Google", logoType: "google" },
    { name: "OnePlus", logoType: "oneplus" },
    { name: "Xiaomi", logoType: "xiaomi" },
    { name: "realme", logoType: "realme" }
  ]
};
