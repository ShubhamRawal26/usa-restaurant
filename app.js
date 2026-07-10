// Premium Luxury Restaurant Website - Logical Controller

// 1. Mock Menu Database
const MENU_DATA = [
  {
    id: 'b1',
    category: 'breakfast',
    title: 'Truffle Scrambled Eggs',
    description: 'Slow-cooked organic eggs, fresh black truffle shavings, toasted artisan sourdough, gold leaf garnish.',
    price: 32,
    calories: 420,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80',
    chefRecommendation: true,
    popular: true
  },
  {
    id: 'b2',
    category: 'breakfast',
    title: 'Caviar Benedict',
    description: 'Poached heritage eggs, imperial osetra caviar, toasted English muffin, citrus-infused hollandaise sauce.',
    price: 45,
    calories: 510,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=600&q=80',
    chefRecommendation: false,
    popular: true
  },
  {
    id: 'l1',
    category: 'lunch',
    title: 'Aged Wagyu Burger',
    description: 'Dry-aged A5 Wagyu beef patty, caramelized shallots, gruyère cheese, toasted brioche bun, truffle fries.',
    price: 38,
    calories: 820,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    chefRecommendation: true,
    popular: true
  },
  {
    id: 'l2',
    category: 'lunch',
    title: 'Lobster Roll Deluxe',
    description: 'Fresh Maine lobster claw meat, warm clarified butter, chopped chives, toasted split-top brioche bun.',
    price: 42,
    calories: 610,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80',
    chefRecommendation: false,
    popular: false
  },
  {
    id: 'd1',
    category: 'dinner',
    title: 'Tomahawk Ribeye',
    description: '45-day dry-aged USDA Prime Tomahawk steak, roasted bone marrow, rosemary compound butter.',
    price: 135,
    calories: 1250,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=600&q=80',
    chefRecommendation: true,
    popular: true
  },
  {
    id: 'd2',
    category: 'dinner',
    title: 'Pan-Seared Chilean Seabass',
    description: 'Wild Chilean seabass, saffron-infused lobster broth, butter-glazed baby bok choy, micro cilantro.',
    price: 58,
    calories: 580,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80',
    chefRecommendation: true,
    popular: false
  },
  {
    id: 'ds1',
    category: 'desserts',
    title: 'Deconstructed Golden Mille-Feuille',
    description: 'Crisp puff pastry layers, Madagascar vanilla bean paste, edible 24k gold leaf, salted caramel drizzle.',
    price: 24,
    calories: 380,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80',
    chefRecommendation: true,
    popular: true
  },
  {
    id: 'dr1',
    category: 'drinks',
    title: 'Royal Champagne Mojito',
    description: 'Dom Pérignon Champagne float, fresh mint, organic lime juice, Demerara sugar, white rum.',
    price: 28,
    calories: 180,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
    chefRecommendation: false,
    popular: true
  },
  {
    id: 'st1',
    category: 'steaks',
    title: 'A5 Miyazaki Wagyu Strip',
    description: 'Authentic Japanese A5 Wagyu strip loin, cooked on hot stone, served with pink Himalayan salt and wasabi root.',
    price: 180,
    calories: 980,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    chefRecommendation: true,
    popular: true
  },
  {
    id: 'sf1',
    category: 'seafood',
    title: 'Oysters On The Half Shell',
    description: 'Half dozen seasonal Kumamoto oysters, champagne mignonette, fresh grated horseradish, lemon pearls.',
    price: 36,
    calories: 120,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1553618551-fba689030290?auto=format&fit=crop&w=600&q=80',
    chefRecommendation: false,
    popular: false
  },
  {
    id: 'pz1',
    category: 'pizza',
    title: 'Black Truffle & Prosciutto Pizza',
    description: 'House-made thin crust, buffalo mozzarella, wild forest mushrooms, prosciutto di Parma, shaved black truffles.',
    price: 34,
    calories: 780,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    chefRecommendation: false,
    popular: true
  },
  {
    id: 'pt1',
    category: 'pasta',
    title: 'Handmade Lobster Ravioli',
    description: 'Lobster-filled pasta pockets, rich cognac cream reduction, cherry tomatoes, fresh tarragon.',
    price: 46,
    calories: 690,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80',
    chefRecommendation: true,
    popular: true
  },
  {
    id: 'bg1',
    category: 'burgers',
    title: 'The Truffle Bistro Burger',
    description: 'Premium short-rib blend, truffle aioli, melted fontina cheese, wild arugula, toasted potato bun.',
    price: 29,
    calories: 790,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80',
    chefRecommendation: false,
    popular: false
  },
  {
    id: 'sh1',
    category: 'sushi',
    title: 'Golden Dragon Roll',
    description: 'Spicy tuna, cucumber, topped with sliced avocado, broiled eel, gold flakes, and sweet unagi sauce.',
    price: 38,
    calories: 450,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80',
    chefRecommendation: true,
    popular: true
  },
  {
    id: 'vg1',
    category: 'vegetarian',
    title: 'Glazed Heirloom Carrots',
    description: 'Roasted rainbow carrots, honey miso glaze, whipped goat cheese, toasted pistachios, fresh dill.',
    price: 22,
    calories: 280,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
    chefRecommendation: false,
    popular: false
  }
];

// Document Loaded Handler
document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMenuFilters();
  initReservationForm();
  initCommandPalette();
  initLightbox();
  initTestimonials();
  initFAQ();
  initStatsCounter();
  initParallaxHero();
  initMap();
  setupKeyboardShortcuts();
});

// 2. Sticky Header Shrink
function initStickyHeader() {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('shrunk');
    } else {
      header.classList.remove('shrunk');
    }
  });

  // Scrollspy to set active nav menu indicators
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-item a');

  window.addEventListener('scroll', () => {
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 150) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
}

// 3. Dynamic Menu Grid + Search and Tab Filters
function initMenuFilters() {
  const menuGrid = document.getElementById('menu-grid');
  const searchInput = document.getElementById('menu-search');
  const tabButtons = document.querySelectorAll('.menu-tab-btn');

  let currentCategory = 'all';
  let searchQuery = '';

  // Initial load
  renderMenu();

  // Tab switching
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
      
      // Trigger macOS styled skeleton loading animation
      renderSkeletons();
      setTimeout(() => {
        renderMenu();
      }, 400);
    });
  });

  // Real-time text search
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase();
    renderMenu();
  });

  function renderSkeletons() {
    menuGrid.innerHTML = '';
    for (let i = 0; i < 4; i++) {
      const skeleton = document.createElement('div');
      skeleton.className = 'skeleton-card';
      menuGrid.appendChild(skeleton);
    }
  }

  function renderMenu() {
    menuGrid.innerHTML = '';
    
    const filtered = MENU_DATA.filter(item => {
      const matchCategory = currentCategory === 'all' || item.category === currentCategory;
      const matchSearch = item.title.toLowerCase().includes(searchQuery) || 
                          item.description.toLowerCase().includes(searchQuery);
      return matchCategory && matchSearch;
    });

    if (filtered.length === 0) {
      menuGrid.innerHTML = `
        <div class="form-group-full text-center" style="grid-column: 1 / -1; padding: 40px 0; color: var(--color-text-secondary);">
          <p>No culinary selections match your current search queries.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'menu-card';
      
      let badges = '';
      if (item.chefRecommendation) {
        badges += `<span class="badge-chef">Chef Selected</span>`;
      }
      if (item.popular) {
        badges += `<span class="badge-popular">Best Seller</span>`;
      }

      card.innerHTML = `
        <div class="menu-img-wrapper">
          <img class="menu-img" src="${item.image}" alt="${item.title}" loading="lazy">
          ${badges}
        </div>
        <div class="menu-details">
          <div class="menu-header-row">
            <h3 class="menu-item-title">${item.title}</h3>
            <span class="menu-price">$${item.price}</span>
          </div>
          <p class="menu-desc">${item.description}</p>
          <div class="menu-meta">
            <span class="menu-rating">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              ${item.rating}
            </span>
            <span>${item.calories} Calories</span>
          </div>
        </div>
      `;

      // Open Modal on card click (excluding badged anchors if clickable)
      card.addEventListener('click', () => {
        openDishDetails(item);
      });

      menuGrid.appendChild(card);
    });
  }
}

// 4. Detailed Modal Overlay for Dish Details
function openDishDetails(item) {
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-overlay active';
  modalOverlay.id = 'dish-details-modal';
  
  modalOverlay.innerHTML = `
    <div class="modal-box" style="text-align: left; max-width: 600px;">
      <div class="menu-img-wrapper" style="height: 250px; border-radius: var(--radius-md); margin-bottom: 24px;">
        <img class="menu-img" src="${item.image}" alt="${item.title}" style="width:100%; height:100%; object-fit:cover;">
      </div>
      <h2 style="font-size: 1.8rem; margin-bottom: 8px; font-family: var(--font-primary);">${item.title}</h2>
      <div style="display:flex; justify-content:space-between; margin-bottom: 16px; font-weight:600; color: var(--color-accent-gold);">
        <span>Category: ${item.category.toUpperCase()}</span>
        <span>Price: $${item.price}</span>
      </div>
      <p style="font-size: 0.95rem; color: var(--color-text-secondary); margin-bottom: 20px; line-height:1.6;">
        ${item.description}
      </p>
      <div style="background: rgba(16,16,16,0.03); padding: 16px; border-radius: var(--radius-md); font-size: 0.8rem; display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom: 24px;">
        <div><strong>Calories:</strong> ${item.calories} kcal</div>
        <div><strong>Rating:</strong> ${item.rating} / 5.0</div>
        <div><strong>Fine-dining Class:</strong> Michelin Premium</div>
        <div><strong>Allergens:</strong> Dairy & Gluten Free Available</div>
      </div>
      <div style="display:flex; gap:12px;">
        <button class="btn btn-primary" style="flex:1;" id="modal-reserve-btn">Reserve a Table for This Dish</button>
        <button class="btn btn-secondary" style="padding:12px;" id="modal-close-btn">Dismiss</button>
      </div>
    </div>
  `;

  document.body.appendChild(modalOverlay);

  // Bind close buttons
  modalOverlay.querySelector('#modal-close-btn').addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // Jump to reservations
  modalOverlay.querySelector('#modal-reserve-btn').addEventListener('click', () => {
    closeModal();
    const reservationSection = document.getElementById('reservations');
    if (reservationSection) {
      reservationSection.scrollIntoView({ behavior: 'smooth' });
    }
  });

  function closeModal() {
    modalOverlay.classList.remove('active');
    setTimeout(() => {
      modalOverlay.remove();
    }, 400);
  }
}

// 5. Reservation Booking Form Handling
function initReservationForm() {
  const form = document.getElementById('booking-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Extract input fields
    const name = document.getElementById('guest-name').value.trim();
    const phone = document.getElementById('guest-phone').value.trim();
    const email = document.getElementById('guest-email').value.trim();
    const guests = document.getElementById('guest-count').value;
    const date = document.getElementById('booking-date').value;
    const time = document.getElementById('booking-time').value;

    // Real-time validations
    if (!name || !phone || !email || !date || !time) {
      showToast('Error', 'Please fill out all reservation parameters.', 'info');
      return;
    }

    // Success Simulation
    showToast('Reservation Complete', `Thank you ${name}. Your table for ${guests} on ${date} at ${time} is secured.`, 'success');
    form.reset();

    // Success Dialog Box popup (macOS theme)
    const successOverlay = document.createElement('div');
    successOverlay.className = 'modal-overlay active';
    successOverlay.innerHTML = `
      <div class="modal-box">
        <div style="width:60px; height:60px; border-radius:50%; background:rgba(45,106,79,0.1); color:var(--color-accent-green); display:flex; align-items:center; justify-content:center; margin:0 auto 20px auto;">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <h2 style="font-size: 1.5rem; margin-bottom: 12px; font-family: var(--font-primary);">Reservation Confirmed</h2>
        <p style="font-size: 0.9rem; color: var(--color-text-secondary); margin-bottom: 24px;">
          An elegant digital invitation has been dispatched to <strong>${email}</strong>. We look forward to hosting you.
        </p>
        <button class="btn btn-primary" id="success-close-btn" style="width:100%;">Done</button>
      </div>
    `;

    document.body.appendChild(successOverlay);
    successOverlay.querySelector('#success-close-btn').addEventListener('click', () => {
      successOverlay.classList.remove('active');
      setTimeout(() => successOverlay.remove(), 400);
    });
  });
}

// 6. Command Palette (macOS spotlight overlay logic)
function initCommandPalette() {
  const palette = document.getElementById('cmd-palette');
  const searchInput = document.getElementById('cmd-search-input');
  const resultsContainer = document.getElementById('cmd-results');

  // Trigger elements
  const triggerBtns = document.querySelectorAll('.trigger-cmd');
  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openPalette();
    });
  });

  function openPalette() {
    palette.classList.add('active');
    searchInput.value = '';
    searchInput.focus();
    renderCommands('');
  }

  function closePalette() {
    palette.classList.remove('active');
  }

  palette.addEventListener('click', (e) => {
    if (e.target === palette) closePalette();
  });

  searchInput.addEventListener('input', (e) => {
    renderCommands(e.target.value.toLowerCase());
  });

  function renderCommands(query) {
    resultsContainer.innerHTML = '';
    
    // Command groups
    const items = [
      { name: 'Home Section', desc: 'Jump back to start', group: 'Navigation', action: () => jumpTo('home') },
      { name: 'Explore Culinary Menu', desc: 'Browse available courses', group: 'Navigation', action: () => jumpTo('menu') },
      { name: 'About & Chef Profile', desc: 'Learn about our heritage', group: 'Navigation', action: () => jumpTo('about') },
      { name: 'Book A Table', desc: 'Secure fine-dining spots', group: 'Reservation', action: () => jumpTo('reservations') },
      { name: 'View Catering Options', desc: 'Corporate & Wedding events', group: 'Services', action: () => jumpTo('catering') },
      { name: 'FAQ Support', desc: 'Common inquiries', group: 'Services', action: () => jumpTo('faq') },
      { name: 'Contact Details', desc: 'Phone, location, hours', group: 'Contact', action: () => jumpTo('contact') },
    ];

    // Filter items
    const filtered = items.filter(i => i.name.toLowerCase().includes(query) || i.desc.toLowerCase().includes(query));

    if (filtered.length === 0) {
      resultsContainer.innerHTML = `
        <div style="padding: 16px; text-align: center; color: var(--color-text-secondary); font-size: 0.85rem;">
          No matching menu shortcuts found.
        </div>
      `;
      return;
    }

    // Organize by groups
    const groups = {};
    filtered.forEach(item => {
      if (!groups[item.group]) groups[item.group] = [];
      groups[item.group].push(item);
    });

    for (const [groupName, groupItems] of Object.entries(groups)) {
      const groupHeader = document.createElement('div');
      groupHeader.className = 'cmd-result-group-title';
      groupHeader.innerText = groupName;
      resultsContainer.appendChild(groupHeader);

      groupItems.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'cmd-item';
        itemEl.innerHTML = `
          <div class="cmd-item-left">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <div>
              <div>${item.name}</div>
              <div class="cmd-item-desc">${item.desc}</div>
            </div>
          </div>
          <div class="cmd-item-right">Shortcut</div>
        `;

        itemEl.addEventListener('click', () => {
          item.action();
          closePalette();
        });

        resultsContainer.appendChild(itemEl);
      });
    }
  }

  function jumpTo(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// Keyboard shortcuts (Cmd+K) trigger
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // CMD+K or CTRL+K
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      const palette = document.getElementById('cmd-palette');
      if (palette.classList.contains('active')) {
        palette.classList.remove('active');
      } else {
        document.querySelector('.trigger-cmd').click();
      }
    }
    
    // Escape key closes modals/palettes
    if (e.key === 'Escape') {
      const activeOverlays = document.querySelectorAll('.modal-overlay, .cmd-palette, .lightbox');
      activeOverlays.forEach(overlay => overlay.classList.remove('active'));
    }
  });
}

// 7. Premium Gallery Lightbox Loader
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img && lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
      }
    });
  });

  const closeBtn = document.querySelector('.lightbox-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
      }
    });
  }
}

// 8. Custom Testimonials Sliding Carousel
function initTestimonials() {
  const track = document.querySelector('.testimonial-track');
  const slides = document.querySelectorAll('.testimonial-slide');
  const indicators = document.querySelectorAll('.carousel-dot');
  
  if (!track || slides.length === 0) return;

  let activeIndex = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${activeIndex * 100}%)`;
    indicators.forEach((dot, index) => {
      dot.classList.toggle('active', index === activeIndex);
    });
  }

  indicators.forEach(dot => {
    dot.addEventListener('click', () => {
      activeIndex = parseInt(dot.dataset.slide);
      updateCarousel();
    });
  });

  // Auto slide transition (Premium slow interval)
  setInterval(() => {
    activeIndex = (activeIndex + 1) % slides.length;
    updateCarousel();
  }, 8000);
}

// 9. FAQ Accordion Handler
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close other headers
      faqItems.forEach(i => i.classList.remove('active'));
      
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// 10. Intersection Count-up Animation for Statistics
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetVal = parseInt(target.dataset.target);
        animateCounter(target, targetVal);
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(num => observer.observe(num));

  function animateCounter(element, limit) {
    let current = 0;
    const duration = 2000; // ms
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameRate);
    const increment = limit / totalFrames;
    
    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      current += increment;
      if (frame >= totalFrames) {
        element.innerText = limit + (element.innerText.includes('+') ? '+' : '');
        clearInterval(interval);
      } else {
        element.innerText = Math.floor(current) + (element.innerText.includes('+') ? '+' : '');
      }
    }, frameRate);
  }
}

// 11. Subtle Mouse Parallax Hover Effect (Hero Section)
function initParallaxHero() {
  const heroVisual = document.querySelector('.hero-visual');
  const elementsToMove = document.querySelectorAll('.floating-glass-card, .hero-dish-img');
  
  if (!heroVisual) return;

  heroVisual.addEventListener('mousemove', (e) => {
    const rect = heroVisual.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    elementsToMove.forEach(el => {
      const factor = el.classList.contains('hero-dish-img') ? 0.03 : 0.08;
      el.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
    });
  });

  heroVisual.addEventListener('mouseleave', () => {
    elementsToMove.forEach(el => {
      el.style.transform = '';
    });
  });
}

// 12. Interactive Custom Vector Map Rendering on Canvas
function initMap() {
  const container = document.getElementById('luxury-map-canvas');
  if (!container) return;

  const canvas = document.createElement('canvas');
  canvas.width = container.clientWidth || 500;
  canvas.height = 380;
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  container.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  
  // Custom elegant blueprint color values
  const drawMap = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Background mesh grid
    ctx.strokeStyle = 'rgba(16, 16, 16, 0.03)';
    ctx.lineWidth = 1;
    const gridSize = 30;
    for (let x = 0; x < canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Mock elegant city streets/rivers coordinates
    ctx.strokeStyle = 'rgba(16, 16, 16, 0.05)';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(0, 100);
    ctx.lineTo(canvas.width, 180);
    ctx.moveTo(120, 0);
    ctx.lineTo(240, canvas.height);
    ctx.moveTo(0, 300);
    ctx.lineTo(canvas.width, 240);
    ctx.stroke();

    // Secondary streets
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgba(16, 16, 16, 0.03)';
    ctx.beginPath();
    ctx.moveTo(200, 0);
    ctx.lineTo(400, canvas.height);
    ctx.moveTo(0, 50);
    ctx.lineTo(canvas.width, 120);
    ctx.stroke();

    // Central Park-style elegant zone
    ctx.fillStyle = 'rgba(45, 106, 79, 0.04)';
    ctx.beginPath();
    ctx.roundRect(80, 40, 160, 100, 10);
    ctx.fill();

    // Map Pin - Luxury Restaurant location
    const pinX = canvas.width / 2;
    const pinY = canvas.height / 2;

    // Pin pulse ring
    const time = Date.now() * 0.003;
    const pulseRadius = 15 + Math.sin(time) * 5;
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.2)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(pinX, pinY, pulseRadius, 0, Math.PI * 2);
    ctx.stroke();

    // Map pin pinhead
    ctx.fillStyle = 'var(--color-accent-gold)';
    ctx.beginPath();
    ctx.arc(pinX, pinY, 6, 0, Math.PI * 2);
    ctx.fill();
    
    // Label
    ctx.fillStyle = 'var(--color-text)';
    ctx.font = 'bold 12px var(--font-secondary)';
    ctx.textAlign = 'center';
    ctx.fillText('L’Étoile Gastronomy', pinX, pinY - 14);
    
    ctx.fillStyle = 'var(--color-text-secondary)';
    ctx.font = '10px var(--font-secondary)';
    ctx.fillText('Fifth Avenue, NY', pinX, pinY - 2);
  };

  drawMap();
  window.addEventListener('resize', () => {
    canvas.width = container.clientWidth || 500;
    drawMap();
  });
  
  // Keep animating pin pulse
  function animate() {
    drawMap();
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}

// 13. Toast Notification Helper Trigger
function showToast(title, message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  let iconSVG = '';
  if (type === 'success') {
    iconSVG = `<svg class="toast-icon success" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
  } else {
    iconSVG = `<svg class="toast-icon info" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
  }

  toast.innerHTML = `
    ${iconSVG}
    <div class="toast-content">
      <h4>${title}</h4>
      <p>${message}</p>
    </div>
    <button class="toast-close">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
  `;

  container.appendChild(toast);

  // Trigger animation entry
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  // Close trigger
  toast.querySelector('.toast-close').addEventListener('click', () => {
    removeToast(toast);
  });

  // Auto close
  setTimeout(() => {
    removeToast(toast);
  }, 5000);

  function removeToast(el) {
    el.classList.remove('show');
    setTimeout(() => {
      el.remove();
    }, 500);
  }
}
