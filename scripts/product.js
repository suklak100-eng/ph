/**
 * TECHNOVA SMARTPHONE DETAILS & SHOWROOM RESERVATION LOGIC (product.js)
 * Interactive 3-photo gallery, storage/color variants with live price recalculation,
 * specifications table, package contents, and zero-upfront showroom booking pass generation.
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.TECHNOVA_DATA;
  if (!data) {
    console.error('TECHNOVA_DATA not found');
    return;
  }

  // Parse Query Parameters
  const urlParams = new URLSearchParams(window.location.search);
  const targetId = urlParams.get('id') || 'iphone-16-pro';
  const autoReserve = urlParams.get('reserve') === 'true';

  // Find Phone
  const allPhones = [...data.popularPhones, ...data.bestDeals];
  const currentPhone = allPhones.find(p => p.id === targetId) || data.popularPhones[0];

  // State
  let currentPhotoIdx = 0;
  let currentColorIdx = 0;
  let currentStorageIdx = 0;

  // Currency Formatter
  const formatUSD = (val) => '$' + Number(val).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  // DOM Elements
  const breadcrumbBrand = document.getElementById('breadcrumbBrand');
  const breadcrumbName = document.getElementById('breadcrumbName');
  const productBadgeTag = document.getElementById('productBadgeTag');
  const mainGalleryImage = document.getElementById('mainGalleryImage');
  const thumbnailsRow = document.getElementById('thumbnailsRow');
  const photoCounter = document.getElementById('photoCounter');
  const galleryCaption = document.getElementById('galleryCaption');

  const productBrandLabel = document.getElementById('productBrandLabel');
  const productTitle = document.getElementById('productTitle');
  const productRatingNum = document.getElementById('productRatingNum');
  const productReviewsCount = document.getElementById('productReviewsCount');
  const productStockPill = document.getElementById('productStockPill');

  const productCurrentPrice = document.getElementById('productCurrentPrice');
  const productOriginalPrice = document.getElementById('productOriginalPrice');
  const productSavePill = document.getElementById('productSavePill');
  const productEmiText = document.getElementById('productEmiText');

  const colorOptionsRow = document.getElementById('colorOptionsRow');
  const selectedColorName = document.getElementById('selectedColorName');
  const storageOptionsRow = document.getElementById('storageOptionsRow');
  const selectedStorageName = document.getElementById('selectedStorageName');

  const productHighlightsList = document.getElementById('productHighlightsList');
  const specsTable = document.getElementById('specsTable');
  const inboxList = document.getElementById('inboxList');
  const relatedPhonesGrid = document.getElementById('relatedPhonesGrid');

  // Modal Elements
  const bookingModal = document.getElementById('bookingModal');
  const modalPhoneThumb = document.getElementById('modalPhoneThumb');
  const modalPhoneName = document.getElementById('modalPhoneName');
  const modalPhoneVariant = document.getElementById('modalPhoneVariant');
  const modalPhonePrice = document.getElementById('modalPhonePrice');
  const bookingSuccessBox = document.getElementById('bookingSuccessBox');
  const showroomBookingForm = document.getElementById('showroomBookingForm');

  // =========================================================================
  // 1. POPULATE METADATA & TITLE
  // =========================================================================
  document.title = `${currentPhone.name} | TechNova Official Showroom`;
  if (breadcrumbBrand) breadcrumbBrand.textContent = currentPhone.brand;
  if (breadcrumbName) breadcrumbName.textContent = currentPhone.name;

  if (productBrandLabel) productBrandLabel.textContent = `${currentPhone.brand} Official Flagship`;
  if (productTitle) productTitle.textContent = currentPhone.name;
  if (productRatingNum) productRatingNum.textContent = currentPhone.rating;
  if (productReviewsCount) productReviewsCount.textContent = `(${currentPhone.reviewsCount} verified showroom buyers)`;

  if (productBadgeTag) {
    productBadgeTag.textContent = currentPhone.badge || 'Official Showroom Unit';
    if (currentPhone.badgeType === 'discount') {
      productBadgeTag.style.background = '#ef4444';
    }
  }

  // =========================================================================
  // 2. 3-PHOTO INTERACTIVE GALLERY
  // =========================================================================
  const photos = currentPhone.photos && currentPhone.photos.length >= 3 
    ? currentPhone.photos 
    : [currentPhone.image, currentPhone.image, currentPhone.image];

  const captions = currentPhone.photoCaptions && currentPhone.photoCaptions.length >= 3
    ? currentPhone.photoCaptions
    : [
        'Display & Hardware Finish',
        'Camera Module Array & Back Texture',
        'Showroom Display & Ergonomic Frame'
      ];

  const defaultThumbnailTitles = [
    'View 1 • Front / Screen',
    'View 2 • Rear / Camera',
    'View 3 • Profile / Angle'
  ];

  window.switchPhoto = (idx) => {
    currentPhotoIdx = idx;
    if (window.soundEngine) window.soundEngine.playTick();

    if (mainGalleryImage) {
      mainGalleryImage.style.opacity = '0';
      mainGalleryImage.style.transform = 'scale(0.96)';
      setTimeout(() => {
        mainGalleryImage.src = photos[currentPhotoIdx];
        mainGalleryImage.alt = `${currentPhone.name} - Photo ${currentPhotoIdx + 1}`;
        mainGalleryImage.style.opacity = '1';
        mainGalleryImage.style.transform = 'scale(1)';
      }, 150);
    }

    if (photoCounter) {
      photoCounter.textContent = `Photo ${currentPhotoIdx + 1} of 3`;
    }

    if (galleryCaption) {
      galleryCaption.textContent = captions[currentPhotoIdx] || 'Detailed hardware photo taken at TechNova showroom.';
    }

    // Update active thumb button
    document.querySelectorAll('.thumb-button-item').forEach((btn, i) => {
      btn.classList.toggle('active', i === currentPhotoIdx);
    });
  };

  // Render 3 Thumbnails
  if (thumbnailsRow) {
    thumbnailsRow.innerHTML = photos.slice(0, 3).map((photoUrl, idx) => `
      <div class="thumb-button-item ${idx === 0 ? 'active' : ''}" onclick="switchPhoto(${idx});">
        <div class="thumb-preview-wrap">
          <img class="thumb-preview-img" src="${photoUrl}" alt="Thumbnail ${idx + 1}" onerror="this.onerror=null; this.src='assets/phones/hero-iphone-16-pro.svg';">
        </div>
        <div class="thumb-caption-title">${defaultThumbnailTitles[idx]}</div>
      </div>
    `).join('');
  }

  // Initialize main photo
  window.switchPhoto(0);

  // =========================================================================
  // 3. COLOR & STORAGE FINISH SELECTORS
  // =========================================================================
  const colors = currentPhone.colors || ['#1e293b', '#cbd5e1'];
  const colorNames = currentPhone.colorNames || ['Standard Dark', 'Standard Light'];

  window.selectColor = (idx) => {
    currentColorIdx = idx;
    if (window.soundEngine) window.soundEngine.playClick();
    if (selectedColorName) {
      selectedColorName.textContent = colorNames[currentColorIdx];
    }
    document.querySelectorAll('.color-swatch-btn').forEach((btn, i) => {
      btn.classList.toggle('active', i === currentColorIdx);
    });
    updateModalSummary();
  };

  if (colorOptionsRow) {
    colorOptionsRow.innerHTML = colors.map((colHex, idx) => `
      <button 
        type="button"
        class="color-swatch-btn ${idx === 0 ? 'active' : ''}" 
        style="background-color: ${colHex};" 
        title="${colorNames[idx] || 'Color Option'}"
        onclick="selectColor(${idx});">
      </button>
    `).join('');
    if (selectedColorName) selectedColorName.textContent = colorNames[0];
  }

  // Storage Options
  const storageOptions = currentPhone.storageOptions || [
    { size: "128GB", price: currentPhone.price, originalPrice: currentPhone.originalPrice || currentPhone.price * 1.15 },
    { size: "256GB", price: currentPhone.price + 100, originalPrice: (currentPhone.originalPrice || currentPhone.price * 1.15) + 100 }
  ];

  window.selectStorage = (idx) => {
    currentStorageIdx = idx;
    if (window.soundEngine) window.soundEngine.playClick();
    const opt = storageOptions[currentStorageIdx];

    if (selectedStorageName) selectedStorageName.textContent = opt.size;
    if (productCurrentPrice) productCurrentPrice.textContent = formatUSD(opt.price);
    if (productOriginalPrice) productOriginalPrice.textContent = formatUSD(opt.originalPrice);

    const savings = opt.originalPrice - opt.price;
    const savePercent = Math.round((savings / opt.originalPrice) * 100);
    if (productSavePill) {
      productSavePill.textContent = `SAVE ${formatUSD(savings)} (${savePercent}% OFF)`;
    }

    const emi = (opt.price / 24).toFixed(2);
    if (productEmiText) {
      productEmiText.innerHTML = `Or from <strong>$${emi}/month</strong> with 0% interest on major credit cards`;
    }

    document.querySelectorAll('.storage-pill-btn').forEach((btn, i) => {
      btn.classList.toggle('active', i === currentStorageIdx);
    });
    updateModalSummary();
  };

  if (storageOptionsRow) {
    storageOptionsRow.innerHTML = storageOptions.map((opt, idx) => `
      <button 
        type="button"
        class="storage-pill-btn ${idx === 0 ? 'active' : ''}" 
        onclick="selectStorage(${idx});">
        <span class="storage-size">${opt.size}</span>
        <span class="storage-price">${formatUSD(opt.price)}</span>
      </button>
    `).join('');
    window.selectStorage(0);
  }

  // =========================================================================
  // 4. HIGHLIGHTS, SPECS TABLE, AND IN-BOX LIST
  // =========================================================================
  if (productHighlightsList && currentPhone.highlights) {
    productHighlightsList.innerHTML = currentPhone.highlights.map(item => `
      <li>${item}</li>
    `).join('');
  }

  if (specsTable && currentPhone.specs) {
    const specRows = [
      { key: "Display & Screen", val: currentPhone.specs.display },
      { key: "Processor & Chip", val: currentPhone.specs.processor },
      { key: "Camera System", val: currentPhone.specs.camera },
      { key: "Battery & Charging", val: currentPhone.specs.battery },
      { key: "Operating System", val: currentPhone.specs.os },
      { key: "Biometrics & Security", val: currentPhone.specs.security },
      { key: "Weight & Materials", val: currentPhone.specs.weight },
      { key: "Warranty Coverage", val: "1 Year Official Brand Warranty (Applicable Across All Service Centers)" },
      { key: "Store Service", val: "Complimentary Tempered Glass + Complete Phone Setup at Showroom" }
    ];

    specsTable.innerHTML = specRows.map(row => `
      <tr>
        <td>${row.key}</td>
        <td>${row.val || 'Official Factory Specifications'}</td>
      </tr>
    `).join('');
  }

  if (inboxList && currentPhone.inBox) {
    inboxList.innerHTML = currentPhone.inBox.map(item => `
      <li>${item}</li>
    `).join('');
  }

  // =========================================================================
  // 5. TABS SWITCHER
  // =========================================================================
  window.switchTab = (tabName, e) => {
    if (window.soundEngine) window.soundEngine.playTick();
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content-panel').forEach(panel => panel.classList.remove('active'));

    if (e && e.currentTarget) e.currentTarget.classList.add('active');
    const targetPanel = document.getElementById(`tab${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`);
    if (targetPanel) targetPanel.classList.add('active');
  };

  // =========================================================================
  // 6. RELATED SMARTPHONES QUAD GRID
  // =========================================================================
  if (relatedPhonesGrid) {
    const related = allPhones.filter(p => p.id !== currentPhone.id).slice(0, 4);
    relatedPhonesGrid.innerHTML = related.map(p => `
      <div class="product-item-card" onclick="window.location.href='product.html?id=${p.id}';">
        <div class="card-top-action-row">
          <span class="pill-badge-bestseller" style="background: ${p.badgeType === 'discount' ? '#ef4444' : '#2563eb'};">
            ${p.badge || 'Showroom Available'}
          </span>
          <span style="font-size: 0.72rem; color: #166534; font-weight: 700;">● In Stock</span>
        </div>

        <div class="card-photo-stage">
          <img class="card-phone-image" src="${p.image}" alt="${p.name}" onerror="this.onerror=null; this.src='assets/phones/hero-iphone-16-pro.svg';">
        </div>

        <div class="card-item-title">${p.name}</div>
        <div class="card-item-storage">${p.storage}</div>

        <div class="card-item-price-row">
          <span class="card-price-current">${formatUSD(p.price)}</span>
          ${p.originalPrice ? `<span class="card-price-struck">${formatUSD(p.originalPrice)}</span>` : ''}
        </div>

        <div class="card-item-rating">
          <span class="star-icons-wrap">★★★★★</span>
          <span>${p.rating} (${p.reviewsCount})</span>
        </div>

        <a href="product.html?id=${p.id}" class="btn-card-add-cart" style="text-decoration: none; text-align: center; margin-top: auto;">
          View 3 Photos & Reserve
        </a>
      </div>
    `).join('');
  }

  // =========================================================================
  // 7. SHOWROOM RESERVATION MODAL FLOW ($0 UPFRONT)
  // =========================================================================
  const updateModalSummary = () => {
    const opt = storageOptions[currentStorageIdx] || storageOptions[0];
    const cName = colorNames[currentColorIdx] || colorNames[0];

    if (modalPhoneThumb) modalPhoneThumb.src = photos[0];
    if (modalPhoneName) modalPhoneName.textContent = currentPhone.name;
    if (modalPhoneVariant) modalPhoneVariant.textContent = `${opt.size} • ${cName}`;
    if (modalPhonePrice) modalPhonePrice.textContent = formatUSD(opt.price);
  };

  window.openBookingModal = () => {
    if (window.soundEngine) window.soundEngine.playWhoosh();
    updateModalSummary();
    if (bookingSuccessBox) bookingSuccessBox.style.display = 'none';
    if (showroomBookingForm) showroomBookingForm.style.display = 'block';
    if (bookingModal) bookingModal.classList.add('active');
  };

  window.closeBookingModal = () => {
    if (bookingModal) bookingModal.classList.remove('active');
  };

  window.handleBookingSubmit = (e) => {
    e.preventDefault();
    if (window.soundEngine) window.soundEngine.playSuccess();

    const token = '#TN-' + Math.floor(100000 + Math.random() * 900000);
    const custName = document.getElementById('custName')?.value || 'Customer';
    const pickupDate = document.getElementById('pickupDate')?.value || 'Today';
    const pickupTime = document.getElementById('pickupTimeSlot')?.value || 'Afternoon';
    const opt = storageOptions[currentStorageIdx] || storageOptions[0];

    const resTokenEl = document.getElementById('resToken');
    const succDeviceEl = document.getElementById('succDevice');
    const succPriceEl = document.getElementById('succPrice');
    const succTimeEl = document.getElementById('succTime');

    if (resTokenEl) resTokenEl.textContent = token;
    if (succDeviceEl) succDeviceEl.textContent = `${currentPhone.name} (${opt.size})`;
    if (succPriceEl) succPriceEl.textContent = `${formatUSD(opt.price)} (Pay at Store)`;
    if (succTimeEl) succTimeEl.textContent = `${pickupDate} • ${pickupTime}`;

    if (showroomBookingForm) showroomBookingForm.style.display = 'none';
    if (bookingSuccessBox) bookingSuccessBox.style.display = 'block';
  };

  window.handleAddToCart = () => {
    if (window.soundEngine) window.soundEngine.playClick();
    const opt = storageOptions[currentStorageIdx] || storageOptions[0];
    const headerCartCount = document.getElementById('headerCartCount');
    if (headerCartCount) {
      const current = parseInt(headerCartCount.textContent) || 0;
      headerCartCount.textContent = current + 1;
      headerCartCount.classList.add('badge-pop');
      setTimeout(() => headerCartCount.classList.remove('badge-pop'), 400);
    }
    alert(`Added ${currentPhone.name} (${opt.size}) to your showroom bag!\nYou can reserve it now for in-store pickup.`);
  };

  // Close modal on click outside
  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) {
        closeBookingModal();
      }
    });
  }

  // Auto open modal if requested in URL
  if (autoReserve) {
    setTimeout(window.openBookingModal, 400);
  }
});
