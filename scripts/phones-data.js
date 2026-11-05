/**
 * TECHNOVA SMARTPHONE CATALOG & STORE DATABASE
 * Real showroom smartphone inventory with authentic photography, multiple device photos,
 * official specifications, showroom discounts, and in-store booking options.
 */

window.TECHNOVA_DATA = {
  // Store Showroom Details
  showroom: {
    name: "TechNova Flagship Mobile Showroom",
    address: "45 Tech Plaza, Ground Floor, Central Commercial Avenue",
    landmark: "Opposite Metro Station Gate 3",
    phone: "+91 98765 43210",
    whatsapp: "+91 98765 43210",
    hours: "10:00 AM – 9:30 PM (Open All 7 Days)",
    services: [
      "0% Down Payment Booking Online",
      "Pay Only After Device Inspection at Showroom",
      "Instant Old Phone Exchange / Trade-In",
      "Free 15-Minute Data Transfer & Glass Installation",
      "100% Genuine Sealed Handsets with Official Brand Warranty"
    ]
  },

  // Popular Flagships (Row 1)
  popularPhones: [
    {
      id: "iphone-16-pro",
      name: "Apple iPhone 16 Pro Max",
      brand: "Apple",
      badge: "Best Seller",
      badgeType: "blue",
      storage: "256GB • Natural Titanium",
      price: 1149.00,
      originalPrice: 1299.00,
      rating: 4.9,
      reviewsCount: "2,540",
      inStock: true,
      stockCount: 14,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Back_view_of_iPhone_16_Pro_Max_Natural_Titanium.jpg/960px-Back_view_of_iPhone_16_Pro_Max_Natural_Titanium.jpg",
      photos: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Back_view_of_iPhone_16_Pro_Max_Natural_Titanium.jpg/960px-Back_view_of_iPhone_16_Pro_Max_Natural_Titanium.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/e/e2/IPhone_15.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Right_view_of_iPhone_16_Pro_Max_Natural_Titanium.jpg/960px-Right_view_of_iPhone_16_Pro_Max_Natural_Titanium.jpg"
      ],
      photoCaptions: [
        "Rear Natural Titanium Finish & 48MP Pro Triple Camera Array",
        "Front Super Retina XDR OLED Display with Dynamic Island",
        "Right Titanium Profile showing Camera Control Button"
      ],
      colors: ["#9a958e", "#2b2a29", "#c5b49e", "#f2f1ed"],
      colorNames: ["Natural Titanium", "Black Titanium", "Desert Titanium", "White Titanium"],
      storageOptions: [
        { size: "256GB", price: 1149.00, originalPrice: 1299.00 },
        { size: "512GB", price: 1349.00, originalPrice: 1499.00 },
        { size: "1TB", price: 1549.00, originalPrice: 1699.00 }
      ],
      specs: {
        display: '6.9" Super Retina XDR OLED 120Hz ProMotion',
        processor: 'Apple A18 Pro (3nm 2nd Gen) with 6-core GPU',
        camera: '48MP Fusion + 48MP Ultra Wide + 12MP 5x Telephoto',
        battery: 'Up to 33 hours video playback • 25W MagSafe',
        os: 'iOS 18 with Apple Intelligence',
        security: 'Face ID • Emergency SOS • Crash Detection',
        weight: '227g (Grade 5 Titanium Frame)'
      },
      highlights: [
        "Brand-new Camera Control button with tactile haptics & zoom slider",
        "Grade 5 Titanium frame with micro-blasted satin texture",
        "4K 120 fps Dolby Vision video recording capability",
        "Official 1-Year Apple India / International Warranty included"
      ],
      inBox: ["iPhone 16 Pro Max", "USB-C to USB-C Braided Cable (1m)", "Documentation & SIM Tool"],
      description: "The iPhone 16 Pro Max features a larger 6.9-inch display, thinner borders, and a lightweight Grade 5 Titanium design. Powered by the groundbreaking A18 Pro chip with Apple Intelligence, it delivers studio-quality 4K 120 fps Dolby Vision capture and class-leading battery life."
    },
    {
      id: "samsung-galaxy-s24",
      name: "Samsung Galaxy S24 Ultra",
      brand: "Samsung",
      badge: "Galaxy AI",
      badgeType: "blue",
      storage: "256GB • Titanium Black",
      price: 1099.00,
      originalPrice: 1299.00,
      rating: 4.8,
      reviewsCount: "1,890",
      inStock: true,
      stockCount: 11,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Samsung_Galaxy_S24_Ultra_2024.jpg/800px-Samsung_Galaxy_S24_Ultra_2024.jpg",
      photos: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Samsung_Galaxy_S24_Ultra_2024.jpg/800px-Samsung_Galaxy_S24_Ultra_2024.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Samsung_Galaxy_S24_Ultra_with_retail_box%2C_rear.jpg/800px-Samsung_Galaxy_S24_Ultra_with_retail_box%2C_rear.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Samsung_Galaxy_S24.jpg/800px-Samsung_Galaxy_S24.jpg"
      ],
      photoCaptions: [
        "Showroom Unit with Flat Dynamic AMOLED 2X Display",
        "Rear Quad-Camera Array with 200MP Main & Retail Packaging",
        "Side Profile with Titanium Frame & Built-in S-Pen"
      ],
      colors: ["#242528", "#8b8f97", "#50635c", "#7c6882"],
      colorNames: ["Titanium Black", "Titanium Gray", "Titanium Green", "Titanium Violet"],
      storageOptions: [
        { size: "256GB", price: 1099.00, originalPrice: 1299.00 },
        { size: "512GB", price: 1249.00, originalPrice: 1449.00 },
        { size: "1TB", price: 1449.00, originalPrice: 1649.00 }
      ],
      specs: {
        display: '6.8" Dynamic AMOLED 2X, 120Hz, 2600 nits peak',
        processor: 'Qualcomm Snapdragon 8 Gen 3 for Galaxy (4nm)',
        camera: '200MP Main + 50MP 5x Periscope + 10MP 3x + 12MP Ultra Wide',
        battery: '5000 mAh • 45W Super Fast Charging 2.0',
        os: 'One UI 6.1 with Galaxy AI (7 Years of OS Updates)',
        security: 'Ultrasonic In-Display Fingerprint • Knox Vault',
        weight: '232g with integrated S-Pen stylus'
      },
      highlights: [
        "Circle to Search with Google, Live Call Translation & Note Assist",
        "Corning Gorilla Armor anti-reflective glass reduces glare by 75%",
        "Built-in S-Pen stylus for precision sketching and remote capture",
        "Official 1-Year Samsung Brand Warranty & Service Coverage"
      ],
      inBox: ["Galaxy S24 Ultra", "Integrated S-Pen", "USB-C Data Cable", "Ejection Pin"],
      description: "Galaxy S24 Ultra brings the power of Galaxy AI to your fingertips. Equipped with a 200MP camera with ProVisual Engine, flat titanium design, and Snapdragon 8 Gen 3, this is the ultimate productivity and photography powerhouse."
    },
    {
      id: "google-pixel-9",
      name: "Google Pixel 9 Pro XL",
      brand: "Google",
      badge: "Gemini AI",
      badgeType: "blue",
      storage: "128GB • Obsidian Black",
      price: 799.00,
      originalPrice: 949.00,
      rating: 4.7,
      reviewsCount: "1,240",
      inStock: true,
      stockCount: 8,
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Google_Pixel_9_Pro_XL_%28front%29.jpg",
      photos: [
        "https://upload.wikimedia.org/wikipedia/commons/f/f7/Google_Pixel_9_Pro_XL_%28front%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/e/e5/Google_Pixel_9_Pro_XL_%28back%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/2/21/Google_Pixel_8_Pro.jpg"
      ],
      photoCaptions: [
        "Super Actua 120Hz LTPO OLED Front Display",
        "Iconic Pill Camera Visor in Satin Matte Finish",
        "Polished Aerospace Aluminum Rails in Hand"
      ],
      colors: ["#2a2d32", "#ece7e2", "#8b948f", "#e8b8c8"],
      colorNames: ["Obsidian Black", "Porcelain White", "Hazel Green", "Rose Quartz"],
      storageOptions: [
        { size: "128GB", price: 799.00, originalPrice: 949.00 },
        { size: "256GB", price: 899.00, originalPrice: 1049.00 },
        { size: "512GB", price: 1049.00, originalPrice: 1199.00 }
      ],
      specs: {
        display: '6.8" Super Actua OLED (1-120Hz), 3000 nits peak',
        processor: 'Google Tensor G4 with Titan M2 security coprocessor',
        camera: '50MP Main + 48MP Ultra Wide with Macro + 48MP 5x Telephoto',
        battery: '5060 mAh with 37W Fast Wired Charging',
        os: 'Android 15 (7 years of OS & Feature Drops)',
        security: 'Ultrasonic In-Display Fingerprint + Face Unlock',
        weight: '221g'
      },
      highlights: [
        "Built-in Gemini Nano on-device AI with Pixel Screenshots & Add Me",
        "Best Take, Magic Editor and Audio Magic Eraser studio suite",
        "Super Actua display visible even under scorching direct sunlight",
        "Official 1-Year Google Store Showroom Warranty"
      ],
      inBox: ["Pixel 9 Pro XL Handset", "1m USB-C to USB-C cable (USB 2.0)", "SIM tool"],
      description: "Engineered by Google, the Pixel 9 Pro XL is designed with an iconic camera bar, 16GB RAM for on-device Gemini AI, pro-grade camera sensors, and seven years of guaranteed software drops."
    },
    {
      id: "oneplus-12",
      name: "OnePlus 12 5G",
      brand: "OnePlus",
      badge: "Flagship Killer",
      badgeType: "blue",
      storage: "256GB • Flowy Emerald",
      price: 769.00,
      originalPrice: 899.00,
      rating: 4.6,
      reviewsCount: "940",
      inStock: true,
      stockCount: 16,
      image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/OnePlus_9_Pro_back.jpg",
      photos: [
        "https://upload.wikimedia.org/wikipedia/commons/8/8e/OnePlus_9_Pro_back.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/b/b3/OnePlus_9_Pro_Camera_Module_with_Hasselblad_logo.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/9/91/OnePlus_8_Pro.jpg"
      ],
      photoCaptions: [
        "4th Gen Hasselblad Camera System on Ceramic Finish",
        "Detailed View of Sony LYT-808 Sensor Optics",
        "Comfortable Curved Ergonomics with 2K Display"
      ],
      colors: ["#254b38", "#1c1c1f", "#e5e7eb"],
      colorNames: ["Flowy Emerald", "Silky Black", "Glacial White"],
      storageOptions: [
        { size: "256GB", price: 769.00, originalPrice: 899.00 },
        { size: "512GB", price: 849.00, originalPrice: 999.00 }
      ],
      specs: {
        display: '6.82" 2K 120Hz ProXDR LTPO AMOLED, 4500 nits',
        processor: 'Snapdragon 8 Gen 3 with Pixelworks X7 processor',
        camera: '50MP Sony LYT-808 + 64MP 3x Periscope + 48MP Ultra Wide',
        battery: '5400 mAh dual-cell • 100W SUPERVOOC Charger in Box',
        os: 'OxygenOS 14 based on Android 14',
        security: 'In-Display Optical Fingerprint • Alert Slider',
        weight: '220g'
      },
      highlights: [
        "100W SUPERVOOC charges 1% to 100% in just 26 minutes",
        "4th Gen Hasselblad Camera System for lifelike portrait skin tones",
        "Dual Cryo-velocity VC cooling system for lag-free gaming",
        "Official 1-Year OnePlus India / International Warranty"
      ],
      inBox: ["OnePlus 12 Handset", "100W SUPERVOOC Power Adapter", "Type-C Cable", "Protective Case"],
      description: "OnePlus 12 pairs Snapdragon 8 Gen 3 with a 5,400mAh battery and blazing 100W charging. The 4th Gen Hasselblad camera system with 64MP 3x periscope captures breathtaking photos in any light."
    }
  ],

  // Best Showroom Deals (Row 2)
  bestDeals: [
    {
      id: "iphone-15",
      name: "Apple iPhone 15",
      brand: "Apple",
      badge: "-16% OFF",
      badgeType: "discount",
      storage: "128GB • Pastel Blue",
      price: 699.00,
      originalPrice: 829.00,
      rating: 4.7,
      reviewsCount: "2,180",
      inStock: true,
      stockCount: 19,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Apple_iPhone_15.png/800px-Apple_iPhone_15.png",
      photos: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Apple_iPhone_15.png/800px-Apple_iPhone_15.png",
        "https://upload.wikimedia.org/wikipedia/commons/2/2b/IPhone_15.jpeg",
        "https://upload.wikimedia.org/wikipedia/commons/1/1a/IPhone15.jpg"
      ],
      photoCaptions: [
        "Front Dynamic Island & Super Retina XDR Display",
        "Color-Infused Matte Glass Back with Dual 48MP Camera",
        "Showroom Retail Display in Pastel Blue"
      ],
      colors: ["#c3d3db", "#e8c6ce", "#e3e5aa", "#2f3136"],
      colorNames: ["Pastel Blue", "Soft Pink", "Pale Yellow", "Midnight Black"],
      storageOptions: [
        { size: "128GB", price: 699.00, originalPrice: 829.00 },
        { size: "256GB", price: 799.00, originalPrice: 929.00 }
      ],
      specs: {
        display: '6.1" Super Retina XDR OLED with Dynamic Island',
        processor: 'Apple A16 Bionic (4nm) 6-core CPU',
        camera: '48MP Main with 2x Telephoto + 12MP Ultra Wide',
        battery: 'All-day battery • USB-C Universal Port',
        os: 'iOS 18',
        security: 'Face ID • Crash Detection',
        weight: '171g (Aerospace Aluminum)'
      },
      highlights: [
        "Dynamic Island bubbles up alerts and Live Activities seamlessly",
        "48MP main camera with 2x optical-quality telephoto zoom",
        "Universal USB-C connector for charging and data transfer",
        "Official 1-Year Apple Store Warranty"
      ],
      inBox: ["iPhone 15 Handset", "USB-C Charge Cable", "Documentation"],
      description: "iPhone 15 brings you the Dynamic Island, 48MP camera with 2x optical telephoto, durable color-infused back glass, and USB-C connectivity."
    },
    {
      id: "google-pixel-8",
      name: "Google Pixel 8",
      brand: "Google",
      badge: "-21% OFF",
      badgeType: "discount",
      storage: "128GB • Rose",
      price: 549.00,
      originalPrice: 699.00,
      rating: 4.6,
      reviewsCount: "1,120",
      inStock: true,
      stockCount: 10,
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Google_Pixel_8_Rose_front.jpg",
      photos: [
        "https://upload.wikimedia.org/wikipedia/commons/5/5c/Google_Pixel_8_Rose_front.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/3/34/Google_Pixel_8_Rose_rear_bottom-left.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/2/21/Google_Pixel_8_Pro.jpg"
      ],
      photoCaptions: [
        "Compact 6.2\" Actua 120Hz OLED Front Display",
        "Iconic Rose Visor with 50MP Main + 12MP Ultra Wide",
        "Ergonomic Satin Aluminum Handset Profile"
      ],
      colors: ["#dfb8ab", "#242528", "#7d8680"],
      colorNames: ["Rose", "Obsidian", "Hazel"],
      storageOptions: [
        { size: "128GB", price: 549.00, originalPrice: 699.00 },
        { size: "256GB", price: 629.00, originalPrice: 779.00 }
      ],
      specs: {
        display: '6.2" Actua OLED 60-120Hz, 2000 nits',
        processor: 'Google Tensor G3 with Titan M2 security',
        camera: '50MP Octa PD Main + 12MP Ultra Wide with Macro Focus',
        battery: '4575 mAh with Extreme Battery Saver up to 72 hours',
        os: 'Android 15 with 7 Years of Updates',
        security: 'In-Display Fingerprint + Class 3 Face Unlock',
        weight: '187g'
      },
      highlights: [
        "Tensor G3 powers Google AI for crystal-clear calls and magic photo edits",
        "Best Take automatically fixes group shots so everyone looks great",
        "Audio Magic Eraser cleans up background wind and traffic noise",
        "Official 1-Year Google Brand Warranty"
      ],
      inBox: ["Pixel 8 Handset", "1m USB-C to USB-C Cable", "Quick Switch Adapter", "SIM Tool"],
      description: "Google Pixel 8 is the helpful phone engineered by Google. Powered by Google Tensor G3, it brings advanced photo editing, 7 years of software support, and all-day battery life."
    },
    {
      id: "samsung-galaxy-s23",
      name: "Samsung Galaxy S23 5G",
      brand: "Samsung",
      badge: "-20% OFF",
      badgeType: "discount",
      storage: "128GB • Lavender",
      price: 599.00,
      originalPrice: 749.00,
      rating: 4.6,
      reviewsCount: "1,550",
      inStock: true,
      stockCount: 12,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Samsung_Galaxy_S24.jpg/800px-Samsung_Galaxy_S24.jpg",
      photos: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Samsung_Galaxy_S24.jpg/800px-Samsung_Galaxy_S24.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Samsung_Galaxy_S24_Ultra_with_retail_box%2C_rear.jpg/800px-Samsung_Galaxy_S24_Ultra_with_retail_box%2C_rear.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Samsung_Galaxy_S24_Ultra_2024.jpg/800px-Samsung_Galaxy_S24_Ultra_2024.jpg"
      ],
      photoCaptions: [
        "Compact 6.1\" Dynamic AMOLED 2X 120Hz Screen",
        "Floating Triple Camera with Nightography 50MP Sensor",
        "Armor Aluminum Edge Finish in Showroom"
      ],
      colors: ["#dcd2e2", "#242528", "#ebe7dd", "#435248"],
      colorNames: ["Lavender", "Phantom Black", "Cream", "Green"],
      storageOptions: [
        { size: "128GB", price: 599.00, originalPrice: 749.00 },
        { size: "256GB", price: 679.00, originalPrice: 829.00 }
      ],
      specs: {
        display: '6.1" Dynamic AMOLED 2X, 120Hz, HDR10+, 1750 nits',
        processor: 'Snapdragon 8 Gen 2 for Galaxy (4nm)',
        camera: '50MP Main OIS + 10MP 3x Telephoto + 12MP Ultra Wide',
        battery: '3900 mAh • 25W Fast Charging',
        os: 'One UI 6.1 with Galaxy AI Features',
        security: 'Ultrasonic In-Display Fingerprint',
        weight: '168g (Super Compact & Lightweight)'
      },
      highlights: [
        "Nightography sensor captures vivid details even in low light",
        "Snapdragon 8 Gen 2 for Galaxy delivers smooth console-grade gaming",
        "Compact form factor fits comfortably in one hand and every pocket",
        "Official 1-Year Samsung Brand Warranty"
      ],
      inBox: ["Galaxy S23 Handset", "USB-C Cable", "Ejection Pin"],
      description: "Galaxy S23 is the ultimate compact flagship. Designed with durable Corning Gorilla Glass Victus 2 and Armor Aluminum frame, it offers high-end performance in a lightweight package."
    },
    {
      id: "oneplus-nord-3",
      name: "OnePlus Nord 3 5G",
      brand: "OnePlus",
      badge: "-18% OFF",
      badgeType: "discount",
      storage: "128GB • Tempest Gray",
      price: 449.00,
      originalPrice: 549.00,
      rating: 4.5,
      reviewsCount: "820",
      inStock: true,
      stockCount: 15,
      image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/OnePlus_9_Pro_back.jpg",
      photos: [
        "https://upload.wikimedia.org/wikipedia/commons/8/8e/OnePlus_9_Pro_back.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/c/cc/OnePlus_9_Pro_Camera_Module.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/9/91/OnePlus_8_Pro.jpg"
      ],
      photoCaptions: [
        "Tempest Gray Matte Anti-Glare Finish",
        "Sony IMX890 Flagship 50MP Sensor with OIS",
        "120Hz Super Fluid AMOLED Display"
      ],
      colors: ["#1c1c1f", "#99b7a4"],
      colorNames: ["Tempest Gray", "Misty Green"],
      storageOptions: [
        { size: "128GB", price: 449.00, originalPrice: 549.00 },
        { size: "256GB", price: 499.00, originalPrice: 599.00 }
      ],
      specs: {
        display: '6.74" Super Fluid AMOLED 120Hz, 1440 nits peak',
        processor: 'MediaTek Dimensity 9000 (4nm 5G Flagship Chip)',
        camera: '50MP Sony IMX890 with OIS + 8MP Ultra Wide + 2MP Macro',
        battery: '5000 mAh • 80W SUPERVOOC Charger in Box',
        os: 'OxygenOS 14 based on Android 14',
        security: 'In-Display Fingerprint • Iconic Alert Slider',
        weight: '193g'
      },
      highlights: [
        "Flagship Sony IMX890 camera sensor with OIS from OnePlus 11",
        "80W SUPERVOOC charges to 100% in just 32 minutes",
        "Dimensity 9000 flagship octa-core processor with up to 16GB RAM",
        "Official 1-Year OnePlus Warranty"
      ],
      inBox: ["OnePlus Nord 3 Handset", "80W SUPERVOOC Power Adapter", "Type-C Cable", "SIM Ejector"],
      description: "OnePlus Nord 3 5G packs pure flagship features: the same 50MP Sony IMX890 sensor found on top flagships, super-fast 80W charging, and a gorgeous 120Hz Super Fluid AMOLED display."
    }
  ],

  // Cart initial items
  initialCart: [
    {
      id: "iphone-16-pro",
      name: "Apple iPhone 16 Pro Max",
      variant: "256GB • Natural Titanium",
      price: 1149.00,
      quantity: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Back_view_of_iPhone_16_Pro_Max_Natural_Titanium.jpg/960px-Back_view_of_iPhone_16_Pro_Max_Natural_Titanium.jpg"
    },
    {
      id: "samsung-galaxy-s24",
      name: "Samsung Galaxy S24 Ultra",
      variant: "256GB • Titanium Black",
      price: 1099.00,
      quantity: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Samsung_Galaxy_S24_Ultra_2024.jpg/800px-Samsung_Galaxy_S24_Ultra_2024.jpg"
    }
  ],

  // Brands
  brands: [
    { name: "Apple", logoType: "apple" },
    { name: "Samsung", logoType: "samsung" },
    { name: "Google", logoType: "google" },
    { name: "OnePlus", logoType: "oneplus" },
    { name: "Xiaomi", logoType: "xiaomi" },
    { name: "realme", logoType: "realme" }
  ]
};
