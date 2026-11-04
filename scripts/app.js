/**
 * TECHNOVA - Application Engine & Interactive Mobile Mockup Flow
 * Matches the TechNova UI Mockup sheet with 100% fidelity.
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.TECHNOVA_DATA;

  // State
  let cartItems = [...data.initialCart];
  let favorites = new Set();
  let currentMobilePhone = data.popularPhones[0]; // iPhone 16 Pro by default
  let mobileQuantity = 1;
  let selectedColorIdx = 0;

  // DOM Elements
  const popularGrid = document.getElementById('popularPhonesGrid');
  const bestDealsGrid = document.getElementById('bestDealsGrid');
  const headerCartCount = document.getElementById('headerCartCount');
  const mobileAppModal = document.getElementById('mobileAppModal');
  const mobileScreenContent = document.getElementById('mobileScreenContent');

  // Currency Formatter
  const formatUSD = (val) => '$' + Number(val).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  // Update header cart count with dynamic bounce animation
  const updateCartBadge = () => {
    const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    if (headerCartCount) {
      headerCartCount.textContent = totalCount;
      headerCartCount.classList.remove('badge-pop');
      void headerCartCount.offsetWidth; // trigger reflow
      headerCartCount.classList.add('badge-pop');
    }
  };

  // =========================================================================
  // HERO CAROUSEL CONTROLLER
  // =========================================================================
  const heroSlides = [
    {
      id: "iphone-16-pro",
      tag: "New Arrival",
      title: "iPhone 16 Pro",
      subheading: "More Power. More Possibilities.",
      desc: "Discover the latest iPhone with advanced camera, longer battery life and a stunning titanium design.",
      img: "assets/phones/hero-iphone-16-pro.svg"
    },
    {
      id: "samsung-galaxy-s24",
      tag: "Galaxy AI Era",
      title: "Galaxy S24",
      subheading: "Epic, Just Like That.",
      desc: "Search like never before with Circle to Search, get real-time voice translation, and take studio-grade night shots.",
      img: "assets/phones/samsung-s24.svg"
    },
    {
      id: "oneplus-12",
      tag: "Flagship Killer",
      title: "OnePlus 12",
      subheading: "Smooth Beyond Belief.",
      desc: "Snapdragon 8 Gen 3 with 5400mAh battery, 100W SUPERVOOC charging, and 4th Gen Hasselblad Camera System.",
      img: "assets/phones/oneplus-12.svg"
    },
    {
      id: "google-pixel-9",
      tag: "Built by Google",
      title: "Pixel 9",
      subheading: "Engineered with Gemini AI.",
      desc: "Super fast Google Tensor G4 chip, pro-level photos, and magical AI editing features right in your hands.",
      img: "assets/phones/google-pixel-9.svg"
    }
  ];

  let currentHeroIdx = 0;
  let heroTimer = null;

  window.switchHeroSlide = (idx) => {
    currentHeroIdx = (idx + heroSlides.length) % heroSlides.length;
    const slide = heroSlides[currentHeroIdx];
    
    const tagEl = document.getElementById('heroTag');
    const titleEl = document.getElementById('heroTitle');
    const subEl = document.getElementById('heroSubheading');
    const descEl = document.getElementById('heroDesc');
    const imgEl = document.getElementById('heroPhoneImg');
    const shopBtn = document.getElementById('heroShopBtn');
    
    if (imgEl) {
      imgEl.classList.add('slide-fade-out');
      setTimeout(() => {
        imgEl.src = slide.img;
        imgEl.alt = slide.title;
        imgEl.classList.remove('slide-fade-out');
        imgEl.classList.add('slide-fade-in');
        setTimeout(() => imgEl.classList.remove('slide-fade-in'), 350);
      }, 200);
    }
    
    if (tagEl) tagEl.textContent = slide.tag;
    if (titleEl) titleEl.textContent = slide.title;
    if (subEl) subEl.textContent = slide.subheading;
    if (descEl) descEl.textContent = slide.desc;
    if (shopBtn) {
      shopBtn.setAttribute('onclick', `openProductDetail('${slide.id}')`);
    }

    // Update dots
    document.querySelectorAll('#heroDots .carousel-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === currentHeroIdx);
    });

    resetHeroAutoPlay();
  };

  window.nextHeroSlide = () => window.switchHeroSlide(currentHeroIdx + 1);
  window.prevHeroSlide = () => window.switchHeroSlide(currentHeroIdx - 1);

  const resetHeroAutoPlay = () => {
    if (heroTimer) clearInterval(heroTimer);
    heroTimer = setInterval(window.nextHeroSlide, 5500);
  };
  resetHeroAutoPlay();

  // =========================================================================
  // RENDER POPULAR SMARTPHONES (Row 1 from TechNova Mockup)
  // =========================================================================
  const renderPopularPhones = () => {
    if (!popularGrid) return;
    popularGrid.innerHTML = data.popularPhones.map(phone => {
      const isFav = favorites.has(phone.id);
      return `
        <div class="product-item-card">
          <div class="card-top-action-row">
            ${phone.badge ? `<span class="pill-badge-bestseller">${phone.badge}</span>` : '<div></div>'}
            <button class="card-fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite('${phone.id}', event)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </button>
          </div>

          <div class="card-photo-stage" onclick="openProductDetail('${phone.id}')">
            <img class="card-phone-image" src="${phone.image}" alt="${phone.name}">
          </div>

          <div class="card-item-title" onclick="openProductDetail('${phone.id}')">${phone.name}</div>
          <div class="card-item-storage">${phone.storage}</div>

          <div class="card-item-price-row">
            <span class="card-price-current">${formatUSD(phone.price)}</span>
          </div>

          <div class="card-item-rating">
            <span class="star-icons-wrap">★★★★☆</span>
            <span>${phone.rating} (${phone.reviewsCount})</span>
          </div>

          <button class="btn-card-add-cart" onclick="addToCart('${phone.id}')">
            Add to Cart
          </button>
        </div>
      `;
    }).join('');
  };

  // =========================================================================
  // RENDER BEST DEALS (Row 2 from TechNova Mockup)
  // =========================================================================
  const renderBestDeals = () => {
    if (!bestDealsGrid) return;
    bestDealsGrid.innerHTML = data.bestDeals.map(phone => {
      const isFav = favorites.has(phone.id);
      return `
        <div class="product-item-card">
          <div class="card-top-action-row">
            <span class="pill-badge-discount">${phone.badge}</span>
            <button class="card-fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite('${phone.id}', event)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </button>
          </div>

          <div class="card-photo-stage" onclick="openProductDetail('${phone.id}')">
            <img class="card-phone-image" src="${phone.image}" alt="${phone.name}">
          </div>

          <div class="card-item-title" onclick="openProductDetail('${phone.id}')">${phone.name}</div>
          <div class="card-item-storage">${phone.storage}</div>

          <div class="card-item-price-row">
            <span class="card-price-current">${formatUSD(phone.price)}</span>
            <span class="card-price-struck">${formatUSD(phone.originalPrice)}</span>
          </div>

          <div class="card-item-rating">
            <span class="star-icons-wrap">★★★★☆</span>
            <span>${phone.rating} (${phone.reviewsCount})</span>
          </div>

          <button class="btn-card-add-cart" onclick="addToCart('${phone.id}')">
            Add to Cart
          </button>
        </div>
      `;
    }).join('');
  };

  // Toggle favorite
  window.toggleFavorite = (id, e) => {
    e.stopPropagation();
    if (window.soundEngine) window.soundEngine.playTick();
    if (favorites.has(id)) {
      favorites.delete(id);
    } else {
      favorites.add(id);
    }
    renderPopularPhones();
    renderBestDeals();
  };

  // Add to cart action
  window.addToCart = (id) => {
    if (window.soundEngine) window.soundEngine.playClick();
    const allPhones = [...data.popularPhones, ...data.bestDeals];
    const phone = allPhones.find(p => p.id === id);
    if (!phone) return;

    const existing = cartItems.find(item => item.id === id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cartItems.push({
        id: phone.id,
        name: phone.name,
        variant: phone.storage,
        price: phone.price,
        quantity: 1,
        image: phone.image
      });
    }

    updateCartBadge();
    openMobileAppScreen('cart');
  };

  // Open detail
  window.openProductDetail = (id) => {
    const allPhones = [...data.popularPhones, ...data.bestDeals];
    const phone = allPhones.find(p => p.id === id);
    if (phone) {
      currentMobilePhone = phone;
      selectedColorIdx = 0;
      mobileQuantity = 1;
      openMobileAppScreen('detail');
    }
  };

  // =========================================================================
  // THE 6 MOBILE APP SCREENS (MATCHES THE 6 COLUMNS ON THE RIGHT OF MOCKUP)
  // =========================================================================
  window.openMobileAppScreen = (screenName) => {
    if (window.soundEngine) window.soundEngine.playWhoosh();
    if (!mobileScreenContent || !mobileAppModal) return;

    mobileAppModal.classList.add('active');

    // 1. PRODUCT DETAIL VIEW SCREEN (Screen 1 from mockup)
    if (screenName === 'detail') {
      const p = currentMobilePhone;
      mobileScreenContent.innerHTML = `
        <div class="screen-header-nav">
          <button onclick="closeMobileAppModal();">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <div style="display: flex; gap: 0.8rem;">
            <button title="Share">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
            </button>
            <button title="Wishlist">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </button>
          </div>
        </div>

        <!-- Split Gallery & Main Image -->
        <div class="mobile-gallery-split">
          <div class="mobile-thumb-col">
            <div class="mobile-thumb-box active"><img src="${p.image}"></div>
            <div class="mobile-thumb-box"><img src="${p.image}"></div>
            <div class="mobile-thumb-box"><img src="${p.image}"></div>
          </div>
          <div class="mobile-main-photo-stage">
            <img src="${p.image}" alt="${p.name}">
          </div>
        </div>

        <!-- Phone Title & Price -->
        <h2 style="font-size: 1.35rem; font-weight: 800; color: #0f172a; margin-bottom: 0.2rem;">${p.name}</h2>
        <div style="font-size: 0.85rem; color: #64748b; margin-bottom: 0.4rem;">${p.storage}</div>
        
        <div style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.8rem; margin-bottom: 0.6rem;">
          <span style="color: #f59e0b;">★★★★★</span>
          <span style="font-weight: 700; color: #0f172a;">${p.rating}</span>
          <span style="color: #94a3b8;">(${p.reviewsCount} reviews)</span>
        </div>

        <div style="font-size: 1.45rem; font-weight: 800; color: #0f172a; margin-bottom: 0.8rem;">${formatUSD(p.price)}</div>
        <p style="font-size: 0.8rem; color: #64748b; line-height: 1.5; margin-bottom: 0.8rem;">${p.description}</p>

        <!-- 4-Grid Specs Box -->
        <div class="mobile-specs-grid">
          <div class="mobile-spec-pill">
            <strong>${p.specs.display}</strong>
            <span>Display</span>
          </div>
          <div class="mobile-spec-pill">
            <strong>${p.specs.storage}</strong>
            <span>Storage</span>
          </div>
          <div class="mobile-spec-pill">
            <strong>${p.specs.chip}</strong>
            <span>Pro Chip</span>
          </div>
          <div class="mobile-spec-pill">
            <strong>${p.specs.network}</strong>
            <span>5G Ready</span>
          </div>
        </div>

        <!-- Color Circle Selector -->
        <div style="font-size: 0.8rem; font-weight: 700; color: #0f172a;">Color</div>
        <div class="color-circles-row">
          ${p.colors.map((hex, idx) => `
            <div class="color-choice-circle ${selectedColorIdx === idx ? 'active' : ''}" style="background-color: ${hex};" onclick="selectMobileColor(${idx})"></div>
          `).join('')}
        </div>

        <!-- Bottom Action Bar (Quantity + Add to Cart) -->
        <div class="mobile-action-bar-bottom">
          <div class="qty-counter-box">
            <button onclick="changeMobileQty(-1)">-</button>
            <span id="mobileQtyDisplay">${mobileQuantity}</span>
            <button onclick="changeMobileQty(1)">+</button>
          </div>
          <button class="btn-blue-block" style="flex: 1;" onclick="addToCart('${p.id}')">
            Add to Cart
          </button>
        </div>
      `;
    }

    // 2. YOUR CART (3) SCREEN (Screen 2 from mockup)
    else if (screenName === 'cart') {
      const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
      const total = subtotal;

      mobileScreenContent.innerHTML = `
        <div class="screen-header-nav">
          <button onclick="closeMobileAppModal();">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <div class="screen-header-title">Your Cart (${cartItems.length})</div>
          <div style="width: 20px;"></div>
        </div>

        <!-- Items List -->
        <div style="flex: 1; overflow-y: auto;">
          ${cartItems.map((item, idx) => `
            <div class="cart-list-item-row">
              <img src="${item.image}" alt="${item.name}">
              <div>
                <div style="font-weight: 700; font-size: 0.9rem; color: #0f172a;">${item.name}</div>
                <div style="font-size: 0.75rem; color: #94a3b8; margin-bottom: 0.2rem;">${item.variant}</div>
                <div style="font-weight: 800; font-size: 0.92rem; color: #0f172a;">${formatUSD(item.price)}</div>
              </div>
              <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 0.5rem;">
                <button onclick="removeCartItem(${idx})" style="background: transparent; border: none; color: #94a3b8; cursor: pointer;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </button>
                <div class="qty-counter-box" style="padding: 0.1rem 0.4rem;">
                  <button onclick="changeItemQty(${idx}, -1)">-</button>
                  <span style="font-size: 0.85rem;">${item.quantity}</span>
                  <button onclick="changeItemQty(${idx}, 1)">+</button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Totals & Checkout -->
        <div style="border-top: 1px solid var(--border-color); padding-top: 1rem; margin-top: auto;">
          <div style="display: flex; justify-content: space-between; font-size: 0.85rem; color: #64748b; margin-bottom: 0.3rem;">
            <span>Subtotal</span>
            <span style="font-weight: 700; color: #0f172a;">${formatUSD(subtotal)}</span>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 0.85rem; color: #64748b; margin-bottom: 0.8rem;">
            <span>Shipping</span>
            <span style="font-weight: 700; color: #0f172a;">$0.00</span>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 1.1rem; font-weight: 800; color: #0f172a; margin-bottom: 1.2rem;">
            <span>Total</span>
            <span>${formatUSD(total)}</span>
          </div>

          <button class="btn-blue-block" onclick="openMobileAppScreen('checkout')">
            <span>Proceed to Checkout</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      `;
    }

    // 3. CHECKOUT SHIPPING SCREEN (Screen 3 from mockup)
    else if (screenName === 'checkout') {
      mobileScreenContent.innerHTML = `
        <div class="screen-header-nav">
          <button onclick="openMobileAppScreen('cart');">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <div class="screen-header-title">Checkout</div>
          <div style="width: 20px;"></div>
        </div>

        <!-- 3-Step Wizard Indicator -->
        <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 1.5rem; padding: 0 1rem;">
          <div style="display: flex; align-items: center; gap: 0.3rem; color: #2563eb; font-weight: 700;">
            <span style="width: 18px; height: 18px; border-radius: 50%; background: #2563eb; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 0.7rem;">1</span>
            Shipping
          </div>
          <div style="display: flex; align-items: center; gap: 0.3rem; color: #94a3b8;">
            <span style="width: 18px; height: 18px; border-radius: 50%; background: #e2e8f0; color: #64748b; display: flex; align-items: center; justify-content: center; font-size: 0.7rem;">2</span>
            Payment
          </div>
          <div style="display: flex; align-items: center; gap: 0.3rem; color: #94a3b8;">
            <span style="width: 18px; height: 18px; border-radius: 50%; background: #e2e8f0; color: #64748b; display: flex; align-items: center; justify-content: center; font-size: 0.7rem;">3</span>
            Confirmation
          </div>
        </div>

        <h4 style="font-size: 0.95rem; font-weight: 700; color: #0f172a; margin-bottom: 0.8rem;">Shipping Address</h4>

        <form onsubmit="event.preventDefault(); openMobileAppScreen('payment');" style="display: flex; flex-direction: column; gap: 0.8rem; flex: 1;">
          <div>
            <label style="font-size: 0.72rem; color: #64748b; display: block; margin-bottom: 0.2rem;">Full Name</label>
            <input type="text" value="Sarah Ahmed" required style="width: 100%; border: 1px solid var(--border-color); border-radius: 8px; padding: 0.6rem 0.8rem; font-size: 0.88rem; outline: none;">
          </div>
          <div>
            <label style="font-size: 0.72rem; color: #64748b; display: block; margin-bottom: 0.2rem;">Address</label>
            <input type="text" value="12 Rue des Fleurs" required style="width: 100%; border: 1px solid var(--border-color); border-radius: 8px; padding: 0.6rem 0.8rem; font-size: 0.88rem; outline: none;">
          </div>
          <div>
            <label style="font-size: 0.72rem; color: #64748b; display: block; margin-bottom: 0.2rem;">City</label>
            <input type="text" value="Algiers" required style="width: 100%; border: 1px solid var(--border-color); border-radius: 8px; padding: 0.6rem 0.8rem; font-size: 0.88rem; outline: none;">
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem;">
            <div>
              <label style="font-size: 0.72rem; color: #64748b; display: block; margin-bottom: 0.2rem;">Phone number</label>
              <input type="tel" value="+213 555 123 456" required style="width: 100%; border: 1px solid var(--border-color); border-radius: 8px; padding: 0.6rem 0.8rem; font-size: 0.88rem; outline: none;">
            </div>
            <div>
              <label style="font-size: 0.72rem; color: #64748b; display: block; margin-bottom: 0.2rem;">Postal Code</label>
              <input type="text" value="16000" required style="width: 100%; border: 1px solid var(--border-color); border-radius: 8px; padding: 0.6rem 0.8rem; font-size: 0.88rem; outline: none;">
            </div>
          </div>

          <button type="submit" class="btn-blue-block" style="margin-top: 1.5rem;">
            <span>Continue to Payment</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </form>
      `;
    }

    // 4. PAYMENT METHOD SCREEN (Screen 4 from mockup)
    else if (screenName === 'payment') {
      mobileScreenContent.innerHTML = `
        <div class="screen-header-nav">
          <button onclick="openMobileAppScreen('checkout');">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <div class="screen-header-title">Payment Method</div>
          <div style="width: 20px;"></div>
        </div>

        <form onsubmit="event.preventDefault(); openMobileAppScreen('success');" style="display: flex; flex-direction: column; gap: 0.8rem; flex: 1;">
          <!-- Payment Radios -->
          <div style="border: 1px solid #2563eb; background: #eff6ff; border-radius: 10px; padding: 0.8rem; display: flex; align-items: center; justify-content: space-between;">
            <label style="display: flex; align-items: center; gap: 0.6rem; font-weight: 700; font-size: 0.85rem; color: #0f172a; cursor: pointer;">
              <input type="radio" name="paymentMethod" checked>
              Credit / Debit Card
            </label>
            <span style="font-size: 0.72rem; color: #2563eb; font-weight: 700;">VISA • MC</span>
          </div>

          <div style="border: 1px solid var(--border-color); border-radius: 10px; padding: 0.8rem; display: flex; align-items: center; justify-content: space-between;">
            <label style="display: flex; align-items: center; gap: 0.6rem; font-size: 0.85rem; color: #0f172a; cursor: pointer;">
              <input type="radio" name="paymentMethod">
              PayPal
            </label>
            <span style="font-size: 0.72rem; color: #003087; font-weight: 700;">PayPal</span>
          </div>

          <div style="border: 1px solid var(--border-color); border-radius: 10px; padding: 0.8rem; display: flex; align-items: center; justify-content: space-between;">
            <label style="display: flex; align-items: center; gap: 0.6rem; font-size: 0.85rem; color: #0f172a; cursor: pointer;">
              <input type="radio" name="paymentMethod">
              Apple Pay
            </label>
            <span style="font-size: 0.72rem; color: #000; font-weight: 700;">Pay</span>
          </div>

          <div style="border: 1px solid var(--border-color); border-radius: 10px; padding: 0.8rem; display: flex; align-items: center; justify-content: space-between;">
            <label style="display: flex; align-items: center; gap: 0.6rem; font-size: 0.85rem; color: #0f172a; cursor: pointer;">
              <input type="radio" name="paymentMethod">
              Cash on Delivery
            </label>
            <span style="font-size: 0.72rem; color: #64748b;">COD</span>
          </div>

          <!-- Card Details Input -->
          <div style="margin-top: 1rem;">
            <label style="font-size: 0.72rem; color: #64748b; display: block; margin-bottom: 0.2rem;">Card Number</label>
            <input type="text" value="1234 5678 9012 3456" required style="width: 100%; border: 1px solid var(--border-color); border-radius: 8px; padding: 0.6rem 0.8rem; font-size: 0.88rem; outline: none;">
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem;">
            <div>
              <label style="font-size: 0.72rem; color: #64748b; display: block; margin-bottom: 0.2rem;">Expiry Date</label>
              <input type="text" value="04/28" required style="width: 100%; border: 1px solid var(--border-color); border-radius: 8px; padding: 0.6rem 0.8rem; font-size: 0.88rem; outline: none;">
            </div>
            <div>
              <label style="font-size: 0.72rem; color: #64748b; display: block; margin-bottom: 0.2rem;">CVV</label>
              <input type="password" value="123" required style="width: 100%; border: 1px solid var(--border-color); border-radius: 8px; padding: 0.6rem 0.8rem; font-size: 0.88rem; outline: none;">
            </div>
          </div>

          <button type="submit" class="btn-blue-block" style="margin-top: auto;">
            Confirm Payment
          </button>
        </form>
      `;
    }

    // 5. ORDER PLACED SUCCESSFULLY (Screen 5 from mockup)
    else if (screenName === 'success') {
      if (window.soundEngine) window.soundEngine.playSuccess();
      mobileScreenContent.innerHTML = `
        <div style="text-align: center; padding: 2rem 1rem; display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1;">
          <div style="width: 64px; height: 64px; border-radius: 50%; background: #2563eb; color: #fff; display: flex; align-items: center; justify-content: center; margin-bottom: 1.2rem; box-shadow: 0 10px 25px rgba(37, 99, 235, 0.4);">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>

          <h2 style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-bottom: 0.4rem;">Order Placed Successfully!</h2>
          <p style="font-size: 0.85rem; color: #64748b; margin-bottom: 1.8rem; line-height: 1.5;">
            Thank you for your order.<br>Your order number is <strong style="color: #2563eb;">#TN784512</strong>
          </p>

          <button class="btn-blue-block" style="margin-bottom: 0.6rem;" onclick="openMobileAppScreen('track');">
            View Order Details
          </button>
          
          <button style="background: transparent; border: none; color: #64748b; font-size: 0.85rem; font-weight: 600; cursor: pointer; padding: 0.5rem;" onclick="closeMobileAppModal();">
            Continue Shopping
          </button>

          <!-- Gift Box Graphic from Mockup -->
          <div style="margin-top: 2rem; position: relative; text-align: center;">
            <img src="assets/phones/iphone-15.svg" style="height: 140px; object-fit: contain; filter: drop-shadow(0 15px 25px rgba(0,0,0,0.15));">
            <div style="font-family: 'Caveat', cursive; font-size: 1.8rem; color: #2563eb; margin-top: 0.5rem;">
              Enjoy your new phone! ♡
            </div>
          </div>
        </div>
      `;
    }

    // 6. TRACK YOUR ORDER (Screen 6 from mockup)
    else if (screenName === 'track') {
      mobileScreenContent.innerHTML = `
        <div class="screen-header-nav">
          <button onclick="closeMobileAppModal();">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <div class="screen-header-title">Track Your Order</div>
          <div style="width: 20px;"></div>
        </div>

        <div style="font-size: 0.8rem; color: #94a3b8; margin-bottom: 1.2rem;">Order #TN784512</div>

        <!-- Stepper Timeline -->
        <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem;">
          <div style="display: flex; gap: 0.8rem; align-items: flex-start;">
            <div style="width: 20px; height: 20px; border-radius: 50%; background: #2563eb; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 0.65rem; margin-top: 2px;">✓</div>
            <div>
              <div style="font-weight: 700; font-size: 0.85rem; color: #0f172a;">Order Placed</div>
              <div style="font-size: 0.72rem; color: #94a3b8;">Apr 25, 10:30 AM</div>
            </div>
          </div>

          <div style="display: flex; gap: 0.8rem; align-items: flex-start;">
            <div style="width: 20px; height: 20px; border-radius: 50%; background: #2563eb; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 0.65rem; margin-top: 2px;">✓</div>
            <div>
              <div style="font-weight: 700; font-size: 0.85rem; color: #0f172a;">Processing</div>
              <div style="font-size: 0.72rem; color: #94a3b8;">Apr 25, 02:15 PM</div>
            </div>
          </div>

          <div style="display: flex; gap: 0.8rem; align-items: flex-start;">
            <div style="width: 20px; height: 20px; border-radius: 50%; background: #2563eb; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 0.65rem; margin-top: 2px;">✓</div>
            <div>
              <div style="font-weight: 700; font-size: 0.85rem; color: #0f172a;">Shipped</div>
              <div style="font-size: 0.72rem; color: #94a3b8;">Apr 26, 09:30 AM</div>
            </div>
          </div>

          <div style="display: flex; gap: 0.8rem; align-items: flex-start;">
            <div style="width: 20px; height: 20px; border-radius: 50%; border: 2px solid #2563eb; color: #2563eb; display: flex; align-items: center; justify-content: center; font-size: 0.65rem; margin-top: 2px;">○</div>
            <div>
              <div style="font-weight: 700; font-size: 0.85rem; color: #2563eb;">Out for Delivery</div>
              <div style="font-size: 0.72rem; color: #94a3b8;">Expected Apr 28</div>
            </div>
          </div>

          <div style="display: flex; gap: 0.8rem; align-items: flex-start;">
            <div style="width: 20px; height: 20px; border-radius: 50%; border: 2px solid #cbd5e1; color: #cbd5e1; display: flex; align-items: center; justify-content: center; font-size: 0.65rem; margin-top: 2px;">○</div>
            <div>
              <div style="font-weight: 700; font-size: 0.85rem; color: #94a3b8;">Delivered</div>
            </div>
          </div>
        </div>

        <!-- Estimated Delivery -->
        <div style="background: #f1f5f9; border-radius: 10px; padding: 0.8rem; margin-bottom: 1rem; font-size: 0.8rem; color: #0f172a;">
          <div style="color: #64748b; font-size: 0.72rem;">Estimated Delivery</div>
          <strong>Apr 28, 2026</strong>
        </div>

        <!-- Address -->
        <div style="font-size: 0.8rem; color: #0f172a; margin-bottom: 1rem;">
          <div style="color: #64748b; font-size: 0.72rem;">Shipping Address</div>
          <div>12 Rue des Fleurs, Algiers, 16000</div>
        </div>

        <!-- Simulated Map Box with Delivery Pin -->
        <div style="height: 120px; border-radius: 12px; background: #e0f2fe; border: 1px solid #bae6fd; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
          <div style="position: absolute; width: 100%; height: 2px; background: #38bdf8; transform: rotate(15deg);"></div>
          <div style="background: #2563eb; color: #fff; padding: 0.4rem 0.6rem; border-radius: 20px; font-size: 0.75rem; font-weight: 700; display: flex; align-items: center; gap: 0.3rem; z-index: 2;">
            🚚 Delivery in Transit
          </div>
        </div>
      `;
    }
  };

  window.closeMobileAppModal = () => {
    if (window.soundEngine) window.soundEngine.playClick();
    if (mobileAppModal) mobileAppModal.classList.remove('active');
  };

  if (mobileAppModal) {
    mobileAppModal.addEventListener('click', (e) => {
      if (e.target === mobileAppModal) closeMobileAppModal();
    });
  }

  // Mobile quantity adjust
  window.changeMobileQty = (delta) => {
    mobileQuantity = Math.max(1, mobileQuantity + delta);
    const qtyEl = document.getElementById('mobileQtyDisplay');
    if (qtyEl) qtyEl.textContent = mobileQuantity;
  };

  // Mobile color choice
  window.selectMobileColor = (idx) => {
    selectedColorIdx = idx;
    document.querySelectorAll('.color-choice-circle').forEach((c, i) => {
      c.classList.toggle('active', i === idx);
    });
  };

  // Cart quantity adjust
  window.changeItemQty = (idx, delta) => {
    cartItems[idx].quantity = Math.max(1, cartItems[idx].quantity + delta);
    updateCartBadge();
    openMobileAppScreen('cart');
  };

  window.removeCartItem = (idx) => {
    cartItems.splice(idx, 1);
    updateCartBadge();
    openMobileAppScreen('cart');
  };

  // Initial Run
  renderPopularPhones();
  renderBestDeals();
  updateCartBadge();
});
