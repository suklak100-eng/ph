/**
 * NEXUS PHONE STUDIO - Core Application Engine
 * Minimalist luxury craft, Flipkart-inspired specifications,
 * brand & budget filtering, in-store pickup reservations with QR passes.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    selectedBrand: 'all',
    selectedBudgetTier: 'all',
    searchQuery: '',
    sortBy: 'featured',
    viewMode: 'list', // 'list' (Flipkart style) or 'grid'
    activeSelections: {}, // phoneId -> { colorIdx, storageIdx }
    cartReservation: null
  };

  // Initialize Default Phone Selections
  window.PHONE_INVENTORY.forEach(phone => {
    state.activeSelections[phone.id] = {
      colorIdx: 0,
      storageIdx: 0
    };
  });

  // DOM Elements
  const phoneContainerEl = document.getElementById('phoneContainer');
  const searchInputEl = document.getElementById('navSearchInput');
  const sortSelectEl = document.getElementById('sortSelect');
  const budgetFilterButtons = document.querySelectorAll('.budget-filter-btn');
  const brandButtons = document.querySelectorAll('.brand-btn');
  const exploreMenuBtn = document.getElementById('exploreMenuBtn');
  const exploreDrawerOverlay = document.getElementById('exploreDrawerOverlay');
  const closeExploreDrawerBtn = document.getElementById('closeExploreDrawer');
  const soundToggleBtn = document.getElementById('soundToggleBtn');
  const reservationModalEl = document.getElementById('reservationModal');
  const reservationsCountBadge = document.getElementById('reservationsCountBadge');
  const viewModeListBtn = document.getElementById('viewModeList');
  const viewModeGridBtn = document.getElementById('viewModeGrid');

  // Hero Showcase Elements
  const heroFeaturedImg = document.getElementById('heroFeaturedImg');
  const heroTagText = document.getElementById('heroTagText');
  const heroTagPrice = document.getElementById('heroTagPrice');
  const heroColorDots = document.querySelectorAll('.hero-color-dot');

  // Currency Formatter
  const formatINR = (num) => '₹' + Number(num).toLocaleString('en-IN');

  // =========================================================================
  // HERO PHONE COLOR SWATCHES (INTERACTIVE ZERO-CLUTTER SPOTLIGHT)
  // =========================================================================
  heroColorDots.forEach(dot => {
    dot.addEventListener('click', () => {
      window.soundEngine.playTick();
      heroColorDots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');

      const imgUrl = dot.dataset.heroImg;
      const title = dot.dataset.heroTitle;
      const price = dot.dataset.heroPrice;

      if (heroFeaturedImg && imgUrl) {
        heroFeaturedImg.style.opacity = '0.3';
        heroFeaturedImg.style.transform = 'scale(0.97)';
        setTimeout(() => {
          heroFeaturedImg.src = imgUrl;
          heroFeaturedImg.style.opacity = '1';
          heroFeaturedImg.style.transform = 'scale(1)';
        }, 150);
      }

      if (heroTagText && title) heroTagText.textContent = title;
      if (heroTagPrice && price) heroTagPrice.textContent = price;
    });
  });

  // =========================================================================
  // AUDIO TOGGLE
  // =========================================================================
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      const isEnabled = window.soundEngine.toggle();
      soundToggleBtn.classList.toggle('active', isEnabled);
    });
  }

  // =========================================================================
  // UNIFIED EXPLORE MENU DRAWER
  // =========================================================================
  const toggleExploreDrawer = (open) => {
    if (open) {
      window.soundEngine.playWhoosh();
      exploreDrawerOverlay.classList.add('active');
      exploreMenuBtn.classList.add('active');
    } else {
      window.soundEngine.playClick();
      exploreDrawerOverlay.classList.remove('active');
      exploreMenuBtn.classList.remove('active');
    }
  };

  if (exploreMenuBtn) {
    exploreMenuBtn.addEventListener('click', () => {
      const isOpen = exploreDrawerOverlay.classList.contains('active');
      toggleExploreDrawer(!isOpen);
    });
  }

  if (closeExploreDrawerBtn) {
    closeExploreDrawerBtn.addEventListener('click', () => toggleExploreDrawer(false));
  }

  if (exploreDrawerOverlay) {
    exploreDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === exploreDrawerOverlay) toggleExploreDrawer(false);
    });
  }

  document.querySelectorAll('.drawer-nav-item a').forEach(link => {
    link.addEventListener('click', () => toggleExploreDrawer(false));
  });

  // =========================================================================
  // BRAND & BUDGET FILTERS
  // =========================================================================
  window.selectBudget = (budgetTier) => {
    state.selectedBudgetTier = budgetTier;
    budgetFilterButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.budget === budgetTier);
    });
    renderCatalog();
  };

  budgetFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      window.soundEngine.playTick();
      window.selectBudget(btn.dataset.budget);
    });
  });

  brandButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      window.soundEngine.playTick();
      brandButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.selectedBrand = btn.dataset.brand;
      renderCatalog();
    });
  });

  // =========================================================================
  // VIEW MODE SWITCHER (LIST vs GRID)
  // =========================================================================
  if (viewModeListBtn && viewModeGridBtn) {
    viewModeListBtn.addEventListener('click', () => {
      window.soundEngine.playTick();
      state.viewMode = 'list';
      viewModeListBtn.classList.add('active');
      viewModeGridBtn.classList.remove('active');
      renderCatalog();
    });

    viewModeGridBtn.addEventListener('click', () => {
      window.soundEngine.playTick();
      state.viewMode = 'grid';
      viewModeGridBtn.classList.add('active');
      viewModeListBtn.classList.remove('active');
      renderCatalog();
    });
  }

  // Search & Sort Controls
  if (searchInputEl) {
    searchInputEl.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      renderCatalog();
    });
  }

  if (sortSelectEl) {
    sortSelectEl.addEventListener('change', (e) => {
      window.soundEngine.playTick();
      state.sortBy = e.target.value;
      renderCatalog();
    });
  }

  // =========================================================================
  // CATALOG RENDERING (FLIPKART / MEESHO SPECIFICATION STANDARD)
  // =========================================================================
  const renderCatalog = () => {
    if (!phoneContainerEl) return;

    // Filter Logic
    let filtered = window.PHONE_INVENTORY.filter(phone => {
      // Brand filter
      const matchBrand = state.selectedBrand === 'all' || phone.brand.toLowerCase() === state.selectedBrand.toLowerCase();

      // Budget filter
      let matchBudget = true;
      if (state.selectedBudgetTier === 'under-15k') {
        matchBudget = phone.currentPrice <= 15000;
      } else if (state.selectedBudgetTier === '15k-30k') {
        matchBudget = phone.currentPrice > 15000 && phone.currentPrice <= 30000;
      } else if (state.selectedBudgetTier === '30k-60k') {
        matchBudget = phone.currentPrice > 30000 && phone.currentPrice <= 60000;
      } else if (state.selectedBudgetTier === 'flagship') {
        matchBudget = phone.currentPrice > 60000;
      }

      // Search filter
      const matchSearch = 
        phone.fullName.toLowerCase().includes(state.searchQuery) ||
        phone.brand.toLowerCase().includes(state.searchQuery) ||
        phone.highlights.some(h => h.toLowerCase().includes(state.searchQuery));

      return matchBrand && matchBudget && matchSearch;
    });

    // Sorting
    if (state.sortBy === 'price-low') {
      filtered.sort((a, b) => a.currentPrice - b.currentPrice);
    } else if (state.sortBy === 'price-high') {
      filtered.sort((a, b) => b.currentPrice - a.currentPrice);
    } else if (state.sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    if (filtered.length === 0) {
      phoneContainerEl.innerHTML = `
        <div style="text-align: center; padding: 4rem 1rem; color: var(--text-muted); width: 100%;">
          <svg style="margin: 0 auto 1rem; color: var(--text-muted);" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <h3 style="color: #ffffff; font-size: 1.2rem; font-weight: 700; margin-bottom: 0.3rem;">No Phones Match Current Filters</h3>
          <p style="font-size: 0.9rem;">Try selecting 'All Brands' or resetting your budget filter.</p>
        </div>
      `;
      return;
    }

    // Set container class based on view mode
    phoneContainerEl.className = state.viewMode === 'list' ? 'phone-list-container' : 'phone-grid-container';

    if (state.viewMode === 'list') {
      // Flipkart-style Comprehensive List View
      phoneContainerEl.innerHTML = filtered.map(phone => {
        const sel = state.activeSelections[phone.id];
        const activeColor = phone.colors[sel.colorIdx];
        const activeStorage = phone.storageOptions[sel.storageIdx];
        const calculatedPrice = phone.currentPrice + activeStorage.priceOffset;
        const calculatedMrp = phone.originalPrice + activeStorage.priceOffset;

        return `
          <div class="phone-list-card" data-phone-id="${phone.id}">
            
            <!-- Col 1: Product Photo & Color Swatches -->
            <div class="card-image-col">
              <img class="card-product-img" id="img-${phone.id}" src="${activeColor.image}" alt="${phone.fullName}" loading="lazy">
              
              <!-- Color Swatch Dots -->
              <div class="color-dots-strip">
                ${phone.colors.map((c, idx) => `
                  <button 
                    class="color-dot-btn ${sel.colorIdx === idx ? 'active' : ''}" 
                    style="background-color: ${c.hex};" 
                    title="${c.name}"
                    data-phone="${phone.id}"
                    data-color-idx="${idx}"
                  ></button>
                `).join('')}
              </div>
            </div>

            <!-- Col 2: Specifications & Highlights (Flipkart Inspired) -->
            <div class="card-details-col">
              <a href="javascript:void(0)" class="card-title-link" onclick="openReservationModal('${phone.id}')">
                ${phone.brand} ${phone.name} (${activeColor.name}, ${activeStorage.size.split('|')[0].trim()})
              </a>

              <div class="rating-badge-row">
                <span class="green-rating-pill">
                  ${phone.rating} ★
                </span>
                <span class="rating-counts-text">${phone.ratingsCount} Ratings & ${phone.reviewsCount} Reviews</span>
              </div>

              <!-- Storage Switcher Pills -->
              <div style="display: flex; gap: 0.4rem; margin: 0.4rem 0;">
                ${phone.storageOptions.map((opt, sIdx) => `
                  <button 
                    class="budget-filter-btn ${sel.storageIdx === sIdx ? 'active' : ''}" 
                    style="padding: 0.2rem 0.55rem; font-size: 0.75rem;"
                    data-phone="${phone.id}"
                    data-storage-idx="${sIdx}"
                  >
                    ${opt.size.split('(')[0]}
                  </button>
                `).join('')}
              </div>

              <!-- Bullet Specifications List -->
              <ul class="specs-bullet-list">
                ${phone.highlights.slice(0, 4).map(hl => `<li>${hl}</li>`).join('')}
                <li style="color: var(--accent-cyan); font-weight: 500;">${phone.warranty}</li>
              </ul>

              <!-- Live Showroom Location Tag -->
              <div class="showroom-shelf-status">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>In-Store: <strong>${phone.showroomStock} Units Ready</strong> • ${phone.shelfLocation}</span>
              </div>
            </div>

            <!-- Col 3: Pricing & Action -->
            <div class="card-price-col">
              <div class="price-main-row">
                <span class="current-price-val" id="price-${phone.id}">${formatINR(calculatedPrice)}</span>
                <span class="original-mrp-val" id="mrp-${phone.id}">${formatINR(calculatedMrp)}</span>
                <span class="discount-badge-green">${phone.discountPercent}% off</span>
              </div>

              <span class="emi-note">No Cost EMI starts from <strong>${phone.emiStartsAt}</strong></span>
              <span style="font-size: 0.78rem; color: #38bdf8; font-weight: 600; margin-bottom: 0.6rem;">Up to ₹18,000 Off on Exchange in Store</span>

              <button class="btn-primary-reserve" onclick="openReservationModal('${phone.id}')">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                <span>Reserve for Store Pickup</span>
              </button>
            </div>

          </div>
        `;
      }).join('');
    } else {
      // Grid View
      phoneContainerEl.innerHTML = filtered.map(phone => {
        const sel = state.activeSelections[phone.id];
        const activeColor = phone.colors[sel.colorIdx];
        const activeStorage = phone.storageOptions[sel.storageIdx];
        const calculatedPrice = phone.currentPrice + activeStorage.priceOffset;

        return `
          <div class="phone-grid-card">
            <div style="height: 180px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
              <img src="${activeColor.image}" style="max-height: 150px; max-width: 80%; object-fit: contain;" alt="${phone.name}">
            </div>
            
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
              <span style="font-size: 0.75rem; color: var(--accent-cyan); font-weight: 700; text-transform: uppercase;">${phone.brand}</span>
              <span class="green-rating-pill">${phone.rating} ★</span>
            </div>

            <h3 style="font-size: 1.05rem; font-weight: 700; color: #fff; margin-bottom: 0.3rem;">${phone.name}</h3>
            <p style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 1rem;">${phone.highlights[0]} • ${phone.highlights[1]}</p>

            <div style="margin-top: auto; display: flex; justify-content: space-between; align-items: center; padding-top: 1rem; border-top: 1px solid var(--border-subtle);">
              <div>
                <div style="font-size: 1.35rem; font-weight: 800; color: #fff;">${formatINR(calculatedPrice)}</div>
                <div style="font-size: 0.72rem; color: var(--accent-green); font-weight: 600;">Shelf ${phone.shelfLocation.split('•')[1] || 'Main'}</div>
              </div>
              <button class="btn-primary-reserve" style="width: auto; padding: 0.5rem 0.9rem;" onclick="openReservationModal('${phone.id}')">
                <span>Reserve</span>
              </button>
            </div>
          </div>
        `;
      }).join('');
    }

    // Color Swatch Listeners
    phoneContainerEl.querySelectorAll('.color-dot-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.soundEngine.playTick();
        const pId = btn.dataset.phone;
        const cIdx = parseInt(btn.dataset.colorIdx, 10);
        state.activeSelections[pId].colorIdx = cIdx;

        const phone = window.PHONE_INVENTORY.find(p => p.id === pId);
        const img = document.getElementById(`img-${pId}`);
        if (img && phone) {
          img.style.opacity = '0.3';
          setTimeout(() => {
            img.src = phone.colors[cIdx].image;
            img.style.opacity = '1';
          }, 150);
        }

        const parentStrip = btn.closest('.color-dots-strip');
        if (parentStrip) {
          parentStrip.querySelectorAll('.color-dot-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        }
      });
    });

    // Storage Switch Listeners
    phoneContainerEl.querySelectorAll('[data-storage-idx]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.soundEngine.playClick();
        const pId = btn.dataset.phone;
        const sIdx = parseInt(btn.dataset.storageIdx, 10);
        state.activeSelections[pId].storageIdx = sIdx;

        const phone = window.PHONE_INVENTORY.find(p => p.id === pId);
        const storageOpt = phone.storageOptions[sIdx];
        const newPrice = phone.currentPrice + storageOpt.priceOffset;
        const newMrp = phone.originalPrice + storageOpt.priceOffset;

        const priceEl = document.getElementById(`price-${pId}`);
        const mrpEl = document.getElementById(`mrp-${pId}`);
        if (priceEl) priceEl.textContent = formatINR(newPrice);
        if (mrpEl) mrpEl.textContent = formatINR(newMrp);

        const parentRow = btn.parentElement;
        if (parentRow) {
          parentRow.querySelectorAll('[data-storage-idx]').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        }
      });
    });
  };

  // =========================================================================
  // IN-STORE PICKUP RESERVATION MODAL
  // =========================================================================
  window.openReservationModal = (phoneId) => {
    window.soundEngine.playWhoosh();
    const phone = window.PHONE_INVENTORY.find(p => p.id === phoneId);
    if (!phone) return;

    state.cartReservation = {
      phone,
      selection: state.activeSelections[phoneId]
    };

    const modalBodyEl = document.getElementById('reservationModalContent');
    if (!modalBodyEl) return;

    const sel = state.activeSelections[phoneId];
    const activeColor = phone.colors[sel.colorIdx];
    const activeStorage = phone.storageOptions[sel.storageIdx];
    const finalPrice = phone.currentPrice + activeStorage.priceOffset;

    modalBodyEl.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <span style="font-size: 0.78rem; color: var(--accent-green); font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.3rem;">
          ● Showroom Pickup Desk
        </span>
        <h3 style="font-size: 1.5rem; font-weight: 800; color: #fff; margin-bottom: 0.3rem;">Reserve for In-Store Pickup</h3>
        <p style="font-size: 0.88rem; color: var(--text-secondary);">
          No advance payment required. We will hold the device at our MG Road showroom for 48 hours. Test drive it before you pay.
        </p>
      </div>

      <!-- Device Summary -->
      <div style="display: flex; gap: 1rem; align-items: center; background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.5rem;">
        <img src="${activeColor.image}" style="width: 55px; height: 55px; object-fit: contain;" />
        <div>
          <div style="font-weight: 700; color: #fff; font-size: 1rem;">${phone.name}</div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">${activeColor.name} • ${activeStorage.size}</div>
          <div style="font-size: 1.15rem; font-weight: 800; color: var(--accent-cyan); margin-top: 0.2rem;">${formatINR(finalPrice)}</div>
        </div>
      </div>

      <!-- Form -->
      <form id="storePickupForm">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
          <div>
            <label style="display: block; font-size: 0.82rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 0.35rem;">Full Name *</label>
            <input type="text" id="resCustomerName" required placeholder="e.g. Rahul Sharma" style="width: 100%; background: rgba(255,255,255,0.05); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 0.65rem 0.9rem; color: #fff; outline: none;" />
          </div>
          <div>
            <label style="display: block; font-size: 0.82rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 0.35rem;">Mobile Number (For Pass SMS) *</label>
            <input type="tel" id="resCustomerPhone" required placeholder="9876543210" style="width: 100%; background: rgba(255,255,255,0.05); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 0.65rem 0.9rem; color: #fff; outline: none;" />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
          <div>
            <label style="display: block; font-size: 0.82rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 0.35rem;">Pickup Day *</label>
            <select id="resPickupDay" style="width: 100%; background: #1a202c; border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 0.65rem 0.9rem; color: #fff; outline: none;">
              <option value="Today">Today (Within 30 Mins)</option>
              <option value="Tomorrow">Tomorrow</option>
              <option value="Day After Tomorrow">Day After Tomorrow</option>
            </select>
          </div>
          <div>
            <label style="display: block; font-size: 0.82rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 0.35rem;">Preferred Time Slot *</label>
            <select id="resPickupSlot" style="width: 100%; background: #1a202c; border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 0.65rem 0.9rem; color: #fff; outline: none;">
              <option value="11:00 AM - 02:00 PM">Morning (11 AM - 2 PM)</option>
              <option value="03:00 PM - 06:00 PM">Afternoon (3 PM - 6 PM)</option>
              <option value="06:30 PM - 09:30 PM">Evening (6:30 PM - 9:30 PM)</option>
            </select>
          </div>
        </div>

        <button type="submit" class="btn-primary-reserve" style="width: 100%; padding: 0.85rem; font-size: 1rem;">
          <span>Generate Digital Store Pass</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </button>
      </form>
    `;

    const form = document.getElementById('storePickupForm');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      generateDigitalStorePass();
    });

    if (reservationModalEl) reservationModalEl.classList.add('active');
  };

  const generateDigitalStorePass = () => {
    window.soundEngine.playSuccess();

    const name = document.getElementById('resCustomerName').value;
    const phone = document.getElementById('resCustomerPhone').value;
    const day = document.getElementById('resPickupDay').value;
    const slot = document.getElementById('resPickupSlot').value;

    const res = state.cartReservation;
    const phoneObj = res.phone;
    const sel = res.selection;
    const activeColor = phoneObj.colors[sel.colorIdx];
    const activeStorage = phoneObj.storageOptions[sel.storageIdx];
    const finalPrice = phoneObj.currentPrice + activeStorage.priceOffset;

    const token = 'NEXUS-' + Math.floor(1000 + Math.random() * 9000);
    const bookingRecord = {
      token,
      name,
      phone,
      day,
      slot,
      phoneName: phoneObj.name,
      color: activeColor.name,
      storage: activeStorage.size,
      shelf: phoneObj.shelfLocation,
      price: finalPrice,
      timestamp: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
    };

    // Save to LocalStorage
    try {
      const stored = JSON.parse(localStorage.getItem('nexus_store_bookings') || '[]');
      stored.unshift(bookingRecord);
      localStorage.setItem('nexus_store_bookings', JSON.stringify(stored));
      updateBookingsBadge();
    } catch (e) {
      console.warn("Storage err", e);
    }

    const modalBodyEl = document.getElementById('reservationModalContent');
    modalBodyEl.innerHTML = `
      <div style="text-align: center; margin-bottom: 1.2rem;">
        <div style="width: 52px; height: 52px; border-radius: 50%; background: var(--accent-green-bg); color: var(--accent-green); display: flex; align-items: center; justify-content: center; margin: 0 auto 0.75rem;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <h3 style="font-size: 1.5rem; font-weight: 800; color: #fff;">Pickup Pass Confirmed</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary);">Your device is reserved at our showroom counter for 48 hours.</p>
      </div>

      <!-- The Digital Boarding Pass Ticket -->
      <div class="pass-ticket-card">
        <div class="pass-header">
          <div>
            <span style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase;">Pass Code</span>
            <div class="pass-token-id">#${token}</div>
          </div>
          <span style="font-size: 0.75rem; background: var(--accent-green-bg); color: var(--accent-green); padding: 0.2rem 0.6rem; border-radius: 4px; font-weight: 700;">
            ✓ VERIFIED HOLD
          </span>
        </div>

        <div class="pass-grid-fields">
          <div class="pass-field-item">
            <span>Customer</span>
            <strong>${name}</strong>
          </div>
          <div class="pass-field-item">
            <span>Mobile</span>
            <strong>${phone}</strong>
          </div>
          <div class="pass-field-item">
            <span>Device</span>
            <strong>${phoneObj.name} (${activeColor.name})</strong>
          </div>
          <div class="pass-field-item">
            <span>Payable at Counter</span>
            <strong style="color: var(--accent-cyan);">${formatINR(finalPrice)}</strong>
          </div>
          <div class="pass-field-item">
            <span>Pickup Timing</span>
            <strong>${day} (${slot})</strong>
          </div>
          <div class="pass-field-item">
            <span>Showroom Shelf</span>
            <strong style="color: var(--accent-green);">${phoneObj.shelfLocation.split('(')[0]}</strong>
          </div>
        </div>

        <div class="pass-codes-center">
          <canvas id="modalQrCanvas" class="pass-qr-canvas" width="140" height="140"></canvas>
          <canvas id="modalBarcodeCanvas" class="pass-barcode-canvas" width="240" height="44"></canvas>
          <p style="font-size: 0.75rem; color: var(--text-muted); text-align: center;">
            Present this pass or QR code at Cash Counter #01 for instant verification.
          </p>
        </div>
      </div>

      <div style="display: flex; gap: 0.75rem; margin-top: 1.5rem;">
        <button class="btn-primary-reserve" style="flex: 1;" onclick="window.print();">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
          <span>Print / Save Pass</span>
        </button>
        <button class="budget-filter-btn" style="flex: 1; padding: 0.7rem;" onclick="closeReservationModal();">
          Done
        </button>
      </div>
    `;

    setTimeout(() => {
      const qr = document.getElementById('modalQrCanvas');
      const bar = document.getElementById('modalBarcodeCanvas');
      if (qr && window.NexusPassGenerator) window.NexusPassGenerator.drawQRCode(qr, `${token}-${phone}`);
      if (bar && window.NexusPassGenerator) window.NexusPassGenerator.drawBarcode(bar, token);
    }, 100);
  };

  window.closeReservationModal = () => {
    window.soundEngine.playClick();
    if (reservationModalEl) reservationModalEl.classList.remove('active');
  };

  document.getElementById('modalCloseBtn')?.addEventListener('click', closeReservationModal);
  if (reservationModalEl) {
    reservationModalEl.addEventListener('click', (e) => {
      if (e.target === reservationModalEl) closeReservationModal();
    });
  }

  // =========================================================================
  // MY BOOKINGS / RESERVATIONS VIEWER
  // =========================================================================
  const updateBookingsBadge = () => {
    try {
      const bookings = JSON.parse(localStorage.getItem('nexus_store_bookings') || '[]');
      if (reservationsCountBadge) {
        reservationsCountBadge.textContent = bookings.length;
        reservationsCountBadge.style.display = bookings.length > 0 ? 'inline-block' : 'none';
      }
    } catch (e) {}
  };

  window.openMyBookingsModal = () => {
    window.soundEngine.playWhoosh();
    const modal = document.getElementById('myBookingsModal');
    const listEl = document.getElementById('myBookingsList');
    if (!modal || !listEl) return;

    let bookings = [];
    try {
      bookings = JSON.parse(localStorage.getItem('nexus_store_bookings') || '[]');
    } catch (e) {}

    if (bookings.length === 0) {
      listEl.innerHTML = `
        <div style="text-align: center; padding: 2.5rem 1rem; color: var(--text-muted);">
          <svg style="margin: 0 auto 0.8rem; color: var(--text-muted);" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          <h4 style="color: #fff; font-size: 1.1rem; margin-bottom: 0.3rem;">No Active Reservations</h4>
          <p style="font-size: 0.85rem;">Browse phones and click "Reserve for Store Pickup" to generate a free hold pass.</p>
        </div>
      `;
    } else {
      listEl.innerHTML = bookings.map(b => `
        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.2rem; margin-bottom: 0.8rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
            <span style="font-family: var(--font-mono); font-weight: 800; color: var(--accent-cyan);">#${b.token}</span>
            <span style="font-size: 0.75rem; color: var(--accent-green); font-weight: 700;">● Ready for Pickup</span>
          </div>
          <div style="font-size: 1.05rem; font-weight: 700; color: #fff;">${b.phoneName}</div>
          <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.5rem;">${b.color} • ${b.storage} • Payable: ${formatINR(b.price)}</div>
          <div style="font-size: 0.8rem; color: var(--text-secondary);">Pickup: <strong>${b.day} (${b.slot})</strong></div>
          <div style="font-size: 0.75rem; color: var(--accent-cyan); margin-top: 0.3rem;">Showroom Shelf: ${b.shelf}</div>
        </div>
      `).join('');
    }

    modal.classList.add('active');
  };

  window.closeMyBookingsModal = () => {
    window.soundEngine.playClick();
    document.getElementById('myBookingsModal')?.classList.remove('active');
  };

  // =========================================================================
  // TRADE-IN SPOT EXCHANGE ESTIMATOR
  // =========================================================================
  const tradeBrandSelect = document.getElementById('tradeDeviceSelect');
  const condButtons = document.querySelectorAll('.cond-btn');
  const tradeOutputEl = document.getElementById('tradeOutputValue');

  let activeCondFactor = 1.0;

  const updateTradeCalculation = () => {
    if (!tradeBrandSelect || !tradeOutputEl) return;
    const selected = tradeBrandSelect.options[tradeBrandSelect.selectedIndex];
    const maxVal = parseInt(selected.dataset.max || '0', 10);
    const finalVal = Math.round(maxVal * activeCondFactor);
    tradeOutputEl.textContent = formatINR(finalVal);
  };

  if (tradeBrandSelect) {
    tradeBrandSelect.addEventListener('change', () => {
      window.soundEngine.playTick();
      updateTradeCalculation();
    });
  }

  condButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      window.soundEngine.playTick();
      condButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCondFactor = parseFloat(btn.dataset.factor || '1.0');
      updateTradeCalculation();
    });
  });

  // Initial Run
  renderCatalog();
  updateTradeCalculation();
  updateBookingsBadge();
});
