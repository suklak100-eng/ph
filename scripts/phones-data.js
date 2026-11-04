/**
 * TECHNOVA SMARTPHONE CATALOG & STORE DATABASE
 * Matches the exact products, pricing, discounts, and ratings from the TechNova design.
 */

window.TECHNOVA_DATA = {
  // Popular Smartphones (Row 1 from design)
  popularPhones: [
    {
      id: "iphone-16-pro",
      name: "iPhone 16 Pro",
      brand: "Apple",
      badge: "Best Seller",
      badgeType: "blue",
      storage: "256GB • Titanium",
      price: 1199.00,
      originalPrice: null,
      rating: 4.9,
      reviewsCount: "2.5k",
      image: "assets/phones/iphone-16-pro.svg",
      colors: ["#9a958e", "#2b2a29", "#c5b49e", "#f2f1ed"],
      colorNames: ["Natural Titanium", "Black Titanium", "Desert Titanium", "White Titanium"],
      specs: {
        display: '6.3"',
        storage: "256GB",
        chip: "A18 Pro",
        network: "5G"
      },
      description: "The iPhone 16 Pro delivers exceptional performance with a powerful A18 Pro chip, pro camera system and a stunning titanium design."
    },
    {
      id: "samsung-galaxy-s24",
      name: "Samsung Galaxy S24",
      brand: "Samsung",
      badge: null,
      storage: "256GB • Phantom Black",
      price: 999.00,
      originalPrice: null,
      rating: 4.8,
      reviewsCount: "1.8k",
      image: "assets/phones/samsung-s24.svg",
      colors: ["#242528", "#8b8f97", "#50635c", "#7c6882"],
      colorNames: ["Phantom Black", "Marble Gray", "Jade Green", "Cobalt Violet"],
      specs: {
        display: '6.2"',
        storage: "256GB",
        chip: "Snapdragon 8 Gen 3",
        network: "5G"
      },
      description: "Galaxy S24 with Galaxy AI transforms your mobile experience with Circle to Search, Live Translate, and ProVisual Engine."
    },
    {
      id: "google-pixel-9",
      name: "Google Pixel 9",
      brand: "Google",
      badge: null,
      storage: "128GB • Obsidian",
      price: 799.00,
      originalPrice: null,
      rating: 4.6,
      reviewsCount: "1.2k",
      image: "assets/phones/google-pixel-9.svg",
      colors: ["#2a2d32", "#ece7e2", "#8b948f", "#e8b8c8"],
      colorNames: ["Obsidian", "Porcelain", "Wintergreen", "Peony"],
      specs: {
        display: '6.3"',
        storage: "128GB",
        chip: "Tensor G4",
        network: "5G"
      },
      description: "Engineered by Google with Gemini on-device AI, advanced camera system, and 7 years of OS feature drops."
    },
    {
      id: "oneplus-12",
      name: "OnePlus 12",
      brand: "OnePlus",
      badge: null,
      storage: "256GB • Green",
      price: 899.00,
      originalPrice: null,
      rating: 4.5,
      reviewsCount: "940",
      image: "assets/phones/oneplus-12.svg",
      colors: ["#254b38", "#1c1c1f", "#e5e7eb"],
      colorNames: ["Flowy Emerald", "Silky Black", "Glacial White"],
      specs: {
        display: '6.82"',
        storage: "256GB",
        chip: "Snapdragon 8 Gen 3",
        network: "5G"
      },
      description: "Snapdragon 8 Gen 3 with 5400mAh battery, 100W SUPERVOOC charging, and 4th Gen Hasselblad Camera System."
    }
  ],

  // Best Deals (Row 2 from design with discount percentages)
  bestDeals: [
    {
      id: "iphone-15",
      name: "iPhone 15",
      brand: "Apple",
      badge: "-15%",
      badgeType: "discount",
      storage: "128GB • Blue",
      price: 849.00,
      originalPrice: 999.00,
      rating: 4.7,
      reviewsCount: "2.1k",
      image: "assets/phones/iphone-15.svg",
      colors: ["#c3d3db", "#e8c6ce", "#e3e5aa", "#2f3136"],
      colorNames: ["Pastel Blue", "Pink", "Yellow", "Black"],
      specs: {
        display: '6.1"',
        storage: "128GB",
        chip: "A16 Bionic",
        network: "5G"
      },
      description: "Dynamic Island, 48MP Main camera with 2x telephoto zoom, USB-C connector and durable color-infused glass."
    },
    {
      id: "samsung-galaxy-s23",
      name: "Samsung Galaxy S23",
      brand: "Samsung",
      badge: "-20%",
      badgeType: "discount",
      storage: "128GB • Lavender",
      price: 719.00,
      originalPrice: 899.00,
      rating: 4.6,
      reviewsCount: "1.5k",
      image: "assets/phones/samsung-s23.svg",
      colors: ["#dcd2e2", "#242528", "#ebe7dd", "#435248"],
      colorNames: ["Lavender", "Phantom Black", "Cream", "Green"],
      specs: {
        display: '6.1"',
        storage: "128GB",
        chip: "Snapdragon 8 Gen 2",
        network: "5G"
      },
      description: "Compact flagship with 50MP camera, Nightography sensor, and crystal clear Dynamic AMOLED 2X 120Hz display."
    },
    {
      id: "google-pixel-8",
      name: "Google Pixel 8",
      brand: "Google",
      badge: "-10%",
      badgeType: "discount",
      storage: "128GB • Hazel",
      price: 719.00,
      originalPrice: 799.00,
      rating: 4.6,
      reviewsCount: "1.1k",
      image: "assets/phones/google-pixel-8.svg",
      colors: ["#7d8680", "#242528", "#dfb8ab"],
      colorNames: ["Hazel", "Obsidian", "Rose"],
      specs: {
        display: '6.2"',
        storage: "128GB",
        chip: "Tensor G3",
        network: "5G"
      },
      description: "Pixel 8 is the helpful phone engineered by Google, with a sophisticated camera and Google AI to save you time."
    },
    {
      id: "oneplus-nord-3",
      name: "OnePlus Nord 3",
      brand: "OnePlus",
      badge: "-12%",
      badgeType: "discount",
      storage: "256GB • Black",
      price: 598.00,
      originalPrice: 679.00,
      rating: 4.4,
      reviewsCount: "820",
      image: "assets/phones/oneplus-nord-3.svg",
      colors: ["#1c1c1f", "#99b7a4"],
      colorNames: ["Tempest Gray", "Misty Green"],
      specs: {
        display: '6.74"',
        storage: "256GB",
        chip: "Dimensity 9000",
        network: "5G"
      },
      description: "Flagship 50MP Sony IMX890 sensor with OIS, 16GB LPDDR5X RAM, 80W SUPERVOOC and 120Hz Super Fluid AMOLED."
    }
  ],

  // Cart initial items (matches the "Your Cart (3)" screen in the mockup!)
  initialCart: [
    {
      id: "iphone-16-pro",
      name: "iPhone 16 Pro",
      variant: "256GB • Blue",
      price: 1199.00,
      quantity: 1,
      image: "assets/phones/iphone-16-pro.svg"
    },
    {
      id: "samsung-galaxy-s24",
      name: "Samsung Galaxy S24",
      variant: "256GB • Black",
      price: 999.00,
      quantity: 1,
      image: "assets/phones/samsung-s24.svg"
    },
    {
      id: "airpods-pro-2",
      name: "AirPods Pro 2",
      variant: "White",
      price: 249.00,
      quantity: 1,
      image: "assets/phones/airpods-pro-2.svg"
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
