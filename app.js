// E-commerce Application JavaScript

// Application State
let currentUser = null;
let cart = [];
let filteredProducts = [];
let currentCategory = 'all';

// Sample Data
const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    category: "Electronics",
    price: 159900,
    originalPrice: 179900,
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
      "https://images.unsplash.com/photo-1631200459260-4ecdfb01a49d?w=500"
    ],
    description: "Latest iPhone with A17 Pro chip, titanium design, and advanced camera system",
    colors: ["Space Black", "White Titanium", "Blue Titanium"],
    sizes: ["128GB", "256GB", "512GB"],
    stock: 25,
    rating: 4.8,
    featured: true
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    category: "Electronics", 
    price: 124999,
    originalPrice: 139999,
    images: [
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500",
      "https://images.unsplash.com/photo-1571047399831-f0a6a1c8e9e6?w=500",
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500"
    ],
    description: "Premium Android flagship with S Pen, 200MP camera, and AI features",
    colors: ["Titanium Black", "Titanium Gray", "Titanium Violet"],
    sizes: ["256GB", "512GB", "1TB"],
    stock: 18,
    rating: 4.7,
    featured: true
  },
  {
    id: 3,
    name: "MacBook Air M3",
    category: "Electronics",
    price: 114900,
    originalPrice: 129900,
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500"
    ],
    description: "Ultra-thin laptop with M3 chip, 18-hour battery life, and stunning Retina display",
    colors: ["Space Gray", "Silver", "Starlight"],
    sizes: ["256GB", "512GB", "1TB"],
    stock: 12,
    rating: 4.9,
    featured: true
  },
  {
    id: 4,
    name: "Men's Royal Navy Blue Tuxedo",
    category: "Fashion",
    price: 7199,
    originalPrice: 13999,
    images: [
      "img/coat1.jpg",
      "img/coat2.jpg",
      "img/coat3.jpg"
    ],
    description: "Elevate your formal wardrobe with this luxurious navy blue tuxedo, featuring a sleek satin shawl lapel, intricate paisley inner lining, and a bold red pocket square for a pop of sophistication.",
    colors: ["Blue"],
    sizes: ["34", "36", "38", "40", "42"],
    stock: 23,
    rating: 4.9,
    featured: false
  },
  {
    id: 5,
    name: "Women's Kurti Set",
    category: "Fashion",
    price: 1899,
    originalPrice: 2599,
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
      "https://images.unsplash.com/photo-1506629905607-bb9fb4dcc38e?w=500"
    ],
    description: "Elegant ethnic wear with comfortable fabric and beautiful embroidery",
    colors: ["Pink", "Blue", "Green", "Yellow"],
    sizes: ["S", "M", "L", "XL"],
    stock: 30,
    rating: 4.5,
    featured: true
  },
  {
    id: 6,
    name: "Air Fryer 4.5L",
    category: "Home & Kitchen",
    price: 4999,
    originalPrice: 7999,
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500"
    ],
    description: "Healthy cooking made easy with 80% less oil, digital controls, and multiple presets",
    colors: ["Black", "White"],
    sizes: ["4.5L"],
    stock: 20,
    rating: 4.6,
    featured: false
  },
  {
    id: 7,
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 2999,
    originalPrice: 4999,
    images: [
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500",
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=500",
      "https://images.unsplash.com/photo-1583394838974-17c6b7b1e9b5?w=500"
    ],
    description: "True wireless earbuds with noise cancellation and 24-hour battery life",
    colors: ["Black", "White", "Blue"],
    sizes: ["Standard"],
    stock: 35,
    rating: 4.4,
    featured: true
  },
  {
    id: 8,
    name: "Programming Book Set",
    category: "Books & Media",
    price: 1299,
    originalPrice: 1899,
    images: [
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500",
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500"
    ],
    description: "Complete guide to modern programming languages and frameworks",
    colors: ["Multi"],
    sizes: ["Standard"],
    stock: 50,
    rating: 4.7,
    featured: false
  },
  {
    id: 9,
    name: "Yoga Mat Premium",
    category: "Sports & Fitness",
    price: 1599,
    originalPrice: 2299,
    images: [
      "https://images.unsplash.com/photo-1593810450967-f9c42742e326?w=500",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500",
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=500"
    ],
    description: "Non-slip yoga mat with excellent grip and cushioning for comfortable practice",
    colors: ["Purple", "Blue", "Green", "Pink"],
    sizes: ["6mm", "8mm"],
    stock: 40,
    rating: 4.5,
    featured: false
  },
  {
    id: 10,
    name: "Smart Watch",
    category: "Electronics",
    price: 8999,
    originalPrice: 12999,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500",
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500"
    ],
    description: "Feature-rich smartwatch with health monitoring, GPS, and 7-day battery life",
    colors: ["Black", "Silver", "Gold"],
    sizes: ["38mm", "42mm"],
    stock: 28,
    rating: 4.6,
    featured: true
  },
  {
    id: 11,
    name: "Coffee Maker",
    category: "Home & Kitchen",
    price: 6999,
    originalPrice: 9999,
    images: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500",
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=500",
      "https://images.unsplash.com/photo-1524256853666-2e5f7c2c4f7b?w=500"
    ],
    description: "Automatic coffee maker with programmable timer and thermal carafe",
    colors: ["Black", "Silver"],
    sizes: ["12-cup"],
    stock: 15,
    rating: 4.3,
    featured: false
  },
  {
    id: 12,
    name: "Denim Jeans",
    category: "Fashion",
    price: 2199,
    originalPrice: 2999,
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500",
      "https://images.unsplash.com/photo-1559563458-527698e74c21?w=500"
    ],
    description: "Classic fit denim jeans with comfortable stretch fabric",
    colors: ["Blue", "Black", "Light Blue"],
    sizes: ["28", "30", "32", "34", "36"],
    stock: 55,
    rating: 4.4,
    featured: false
  },
  {
    id: 13,
    name: "Apple iPhone 15",
    category: "Electronics",
    price: 69000,
    originalPrice: 79900,
    images: [
      "https://m.media-amazon.com/images/I/71v2jVh6nIL.jpg",
      "https://m.media-amazon.com/images/I/71v2jVh6nIL.jpg",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS4d_Xg_-L9Zy6aKuI7seeG9J-Iwqs_jDJTH0tiVpTnCEzA4HOP5RCxo1mF5yYpaIv3_rjo8yaA59lnr1IA7D7e1OL0zo_X8x8KNXFpZINq6py5U7ORV5SQ"
    ],
    description: "Latest iPhone with Front Cam Res:12 MP,Front Cam Video Res:3840 x 2160 (4K) at 60 fps,Front Cam Aperture:f/1.9",
    colors: ["White", "Pink", "Green"],
    sizes: ["128GB", "256GB", "512GB"],
    stock: 25,
    rating: 4.8,
    featured: true
  },{
    id: 14,
    name: "Elegant Wedding Gown",
    category: "Fashion",
    price: 7199,
    originalPrice: 10999,
    images: [
      "img/samantha-gades-JeEemtLSdjU-unsplash.jpg",
      "img/yves-monrique-EylmovMiPaY-unsplash.jpg"
    ],
    description: "Royal wedding gown crafted from luxurious stretch fabric, blending regal elegance with modern comfort for effortless movement and all-day wear.",
    colors: ["White", "Golden"],
    sizes: ["22", "24", "26", "28", "30"],
    stock: 55,
    rating: 4.4,
    featured: false
  },
  {
    id: 15,
    name: "The Psychology Of Money",
    category: "Books & Media",
    price: 299,
    originalPrice: 418,
    images: [
      "img/psycchology of money.jpg"
    ],
    description: "The Psychology of Money by Morgan Housel is a thought-provoking book that delves into the complex relationship people have with money.  ",
    colors: ["Standard"],
    sizes: ["Standard"],
    stock: 55,
    rating: 4.9,
    featured: false
  },
  {
    id: 16,
    name: "The Alchemist",
    category: "Books & Media",
    price: 199,
    originalPrice: 399,
    images: [
      "img/the alchemist.jpg"
    ],
    description: "The Alchemist is a modern classic about Santiago, a young shepherd who follows his dream of finding a hidden treasure near the Egyptian pyramids. ",
    colors: ["Standard"],
    sizes: ["Standard"],
    stock: 40,
    rating: 4.9,
    featured: false
  },
  {
    id: 17,
    name: "Basket Ball",
    category: "Sports & Fitness",
    price: 599,
    originalPrice: 999,
    images: [
      "img/basketball.jpg"
    ],
    description: "Premium Outdoor/Indoor Basketball, designed for both asphalt courts and hardwood floors",
    colors: ["Regular", "Black"],
    sizes: ["5","6", "7"],
    stock: 22,
    rating: 4.8,
    featured: false
  },
    {
    id: 18,
    name: "Tshirt Combo",
    category: "Fashion",
    price: 699,
    originalPrice: 1299,
    images: [
      "img/tshirt combo 3.jpg",
      "img/tshirts1.jpg","img/tshirtcombo4.jpg","img/t shirt combo6.jpg"
    ],
    description: "Classic fit Tshirt Combo, Pack of 3, Multi color available",
    colors: ["Black combo pack of 3", "light Combo pack of 3","Multicolor combo pack of 4","Multi color pack of 6"],
    sizes: ["28", "30", "32", "34", "36"],
    stock: 35,
    rating: 4.2,
    featured: false
  },
  {
    id: 19,
    name: "Samsung Galaxy Z Fold5 ",
    category: "Electronics",
    price: 159999 ,
    originalPrice: 106700 ,
    images: [
      "img/samsung p1.2.jpg",
      "img/samsung p1.1.jpg",
      "img/samsung p1.3.jpg"
    ],
    description: " phone is known for its dual display , premium build, and flagship specifications",
    colors: ["Dark Blue", "Pink", "Grey"],
    sizes: ["1TB", "256GB", "512GB"],
    stock: 15,
    rating: 4.8,
    featured: true
  },
  {
    id: 20,
    name: "HP Pavilion Plus Creator ",
    category: "Electronics",
    price: 83990 ,
    originalPrice: 96142 ,
    images: [
      "img/pav2.jpg",
      "img/pav2.jpg",
      "img/pav3.jpg"
    ],
    description: "HP Pavilion Plus Creator OLED Eyesafe H-Series Intel Core i7 12th Gen 12700H ",
    colors: ["Space Blue", "Warm Gold", "Natural Silver "],
    sizes: ["1TB", "256GB", "512GB"],
    stock: 10,
    rating: 4.9,
    featured: true
  },
  {
    id: 21,
    name: " REVlite Olive Green Sneakers",
    category: "Fashion",
    price: 3199,
    originalPrice: 6499 ,
    images: [
      "img/shoe nike3.jpg",
      "img/rev.webp"
    ],
    description: "Step up your streetwear game with the New Balance REVlite Sneakers in a sleek olive green colorway",
    colors: ["Olive Green","Blue"],
    sizes: ["US-7", "US-9", "US-10", "US-11"],
    stock: 35,
    rating: 4.6,
    featured: false
  },
  {
    id: 22,
    name: "Men's Cotton T-Shirt",
    category: "Fashion",
    price: 899,
    originalPrice: 1299,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
      "https://images.unsplash.com/photo-1583743814966-8936f37f4678?w=500",
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500"
    ],
    description: "Premium quality cotton t-shirt, comfortable fit, perfect for casual wear",
    colors: ["Black", "White", "Navy Blue", "Gray"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 45,
    rating: 4.3,
    featured: false
  },
  
  {
    id: 23,
    name: "Seiko 5 Automatic Black Dial Men's Watch",
    category: "Fashion",
    price: 5199,
    originalPrice: 13599,
    images: [
      "img/classic menswatch2.jpg",
    ],
    description: "Timeless elegance meets precision engineering with this Seiko 5 Automatic Men's Watch. Featuring a sleek black dial",
    colors: ["Black"],
    sizes: ["38mm", "40mm", "42mm"],
    stock: 13,
    rating: 4.9,
    featured: false
  },
  {
    id: 24,
    name: "Smart Fitness Watch",
    category: "Sports & Fitness",
    price: 1299,
    originalPrice: 4299,
    images: [
      "img/smartwaatch2.jpg"
    ],
    description: "Advanced smart fitness watch, featuring a vivid round AMOLED touch display, includes features like step tracking, calorie monitoring, heart rate detection, and multiple sport modes, ",
    colors: ["Regular", "Black"],
    sizes: ["38mm","40mm"],
    stock: 2,
    rating: 4.1,
    featured: false
  },
  {
    id: 25,
    name: "Elegant 2-Seater Leather Sofa",
    category: "Home & Kitchen",
    price: 120099,
    originalPrice: 180499,
    images: [
      "img/sofa1.jpg"
    ],
    description: "Add timeless sophistication and cozy comfort to your living room with this Elegant Beige 2-Seater Leather Sofa.",
    colors: ["Beige", "Red"],
    sizes: ["180 cm X 85 cm"],
    stock: 10,
    rating: 4.3,
    featured: false
  },
  {
    id: 26,
    name: "Round Daybed Sofa ",
    category: "Home & Kitchen",
    price: 77766,
    originalPrice: 100999 ,
    images: [
      "img/sofa2.jpg"
    ],
    description: "Designed for both indoor and outdoor use. Featuring a sturdy white rattan base and plush circular cushion, this sofa adds a touch of modern elegance.",
    colors: ["Beige", "White"],
    sizes: ["180 cm X 80 cm X 12 cm"],
    stock: 10,
    rating: 4.75,
    featured: false
  },
  {
    id: 27,
    name: "Modern Red Lounge Chair & Armchair Set  ",
    category: "Home & Kitchen",
    price: 25799,
    originalPrice: 35999  ,
    images: [
      "img/chair.jpg"
    ],
    description: "Modern Red Chair Set, Featuring two stylish cone-shaped lounge chairs and a matching square armchair, this set combines contemporary aesthetics with ultimate comfort",
    colors: ["Red", "White"],
    sizes: ["Lounge Chair: 60 cm (W) x 65 cm (D) x 85 cm (H), Armchair: 75 cm (W) x 70 cm (D) x 85 cm (H)"],
    stock: 10,
    rating: 4.75,
    featured: false
  },
  {
    id: 28,
    name: "Classic Twin Bell Alarm Clock ",
    category: "Home & Kitchen",
    price: 399,
    originalPrice: 799  ,
    images: [
      "img/alarmmain.jpg","img/alarm1.jpg","img/alarm2.jpg"
    ],
    description: "Start your day on time with this Classic Twin Bell Alarm Clock. Featuring a timeless black metal frame and loud twin-bell design, it’s perfect for heavy sleepers.",
    colors: ["Black", "Blue","Green"],
    sizes: ["12 cm (H) x 8 cm (W) x 4.5 cm (D)"],
    stock: 40,
    rating: 4.25,
    featured: false
  },
  {
    id: 29,
    name: "Smart Robotic Vacuum Cleaner",
    category: "Home & Kitchen",
    price: 7299,
    originalPrice: 12499 ,
    images: [
      "img/cleaner.jpg"
    ],
    description: "Featuring advanced auto-navigation and powerful suction, it easily glides under furniture and reaches tight spaces. Its sleek, low-profile design ensures no corner is missed, while intelligent sensors prevent collisions and falls.",
    colors: ["Black", "Blue","White"],
    sizes: ["32 cm (Diameter) x 7.5 cm (Height)"],
    stock: 5,
    rating: 4.91,
    featured: false
  },
  {
    id: 30,
    name: "SElegant Modern Lamp",
    category: "Home & Kitchen",
    price: 1299,
    originalPrice: 2499 ,
    images: [
      "img/lamp.jpg"
    ],
    description: "Illuminate your space with the Elegant Modern Lamp, designed to add a touch of sophistication to any room.",
    colors: ["Regular"],
    sizes: ["18” (Height) x 10” (Shade Diameter)"],
    stock: 34,
    rating: 3.91,
    featured: false
  },
  {
    id: 31,
    name: "How to calm your Mind",
    category: "Books & Media",
    price: 219,
    originalPrice: 499,
    images: [
      "img/howto calm urmind.jpg"
    ],
    description: "practical and inspiring guide that teaches you how to manage stress, overcome anxiety, and restore balance in your daily life.",
    colors: ["Standard"],
    sizes: ["Standard"],
    stock: 6,
    rating: 4.31,
    featured: false
  },
{
    id: 32,
    name: "Nike Sports Shoe",
    category: "Sports & Fitness",
    price: 2199,
    originalPrice: 5199 ,
    images: [
      "img/shoe nike1.jpg",
      "img/shoe nike2.jpg","img/shoe nikered.jpg"
    ],
    description: "Step up your sports game with the New Balance Nike Sports shoe in a attractive colorway",
    colors: ["White","Pink","Red"],
    sizes: ["US-7", "US-9", "US-10", "US-11"],
    stock: 30,
    rating: 4.4,
    featured: false
  },
  {
    id: 33,
    name: "Archery Bow ",
    category: "Sports & Fitness",
    price: 4199,
    originalPrice:7999 ,
    images: [
      "img/archery.jpg"
    ],
    description: "Experience unmatched accuracy and control with this high-performance archery bow. Designed with durable, lightweight materials, it delivers exceptional draw weight and smooth release for beginners and professionals alike",
    colors: ["White"],
    sizes: ["Regular"],
    stock: 3,
    rating: 4.93,
    featured: false
  },
{
    id: 34,
    name: "Men's Watch",
    category: "Fashion",
    price: 899,
    originalPrice: 2499,
    images: [
      "img/mens watch4.jpg",
      "img/menswatch3.jpg","img/classic mensswatch1.jpg"
    ],
    description: "Elevate your formal attire with this luxurious Watch, featuring a sleek dial",
    colors: ["Regular","Black","Wood"],
    sizes: ["34mm", "36mm", "38mm", "40mm", "42mm"],
    stock: 23,
    rating: 4.1,
    featured: false
  },
  {
    id: 35,
    name: "Men's Shirt",
    category: "Fashion",
    price: 999,
    originalPrice: 2199,
    images: [
      "img/formalchecked.jpg","img/mensshirt 3.jpg"
    ],
    description: "Elevate your formal attire with this luxurious men's Shirt, featuring a sleek fit and Made from premium-quality cotton/polyester blend ",
    colors: ["Grey","White","Red"],
    sizes: ["34", "36", "38", "40", "42"],
    stock: 13,
    rating: 4.3,
    featured: false
  },
];

const offers = [
  {
    id: 1,
    title: "Mega Sale - Up to 70% Off",
    subtitle: "On Electronics & Fashion",
    image: "https://blog.sngine.com/wp-content/uploads/2020/11/offers_3433-1.jpg",
    link: "#electronics"
  },
  {
    id: 2,
    title: "Free Delivery",
    subtitle: "On orders above ₹999",
    image: "https://img.freepik.com/free-vector/free-delivery-logo-with-bike-man-courier_1308-48827.jpg",
    link: "#delivery"
  },
  
  
];

// Utility Functions
function formatPrice(price) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0
  }).format(price);
}

function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let stars = '';
  
  for (let i = 0; i < fullStars; i++) {
    stars += '★';
  }
  if (hasHalfStar) {
    stars += '☆';
  }
  for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
    stars += '☆';
  }
  
  return stars;
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  toastMessage.textContent = message;
  toast.classList.add('active');
  
  setTimeout(() => {
    toast.classList.remove('active');
  }, 3000);
}

// Initialize Application
function initializeApp() {
  // Set initial filtered products
  filteredProducts = [...products];
  
  // Render initial content
  renderOffers();
  renderProducts();
  
  // Initialize cart
  updateCartUI();
  
  // Initialize event listeners
  initializeEventListeners();
  
  console.log('ShopZee application initialized successfully');
}

// Render Functions
function renderOffers() {
  const offersGrid = document.getElementById('offersGrid');
  offersGrid.innerHTML = offers.map(offer => `
    <div class="offer-card" onclick="handleOfferClick('${offer.link}')">
      <img src="${offer.image}" alt="${offer.title}" class="offer-image">
      <div class="offer-content">
        <h3 class="offer-title">${offer.title}</h3>
        <p class="offer-subtitle">${offer.subtitle}</p>
      </div>
    </div>
  `).join('');
}

function renderProducts() {
  const productsGrid = document.getElementById('productsGrid');
  
  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = '<div class="empty-state">No products found</div>';
    return;
  }
  
  productsGrid.innerHTML = filteredProducts.map(product => `
    <div class="product-card" onclick="showProductDetail(${product.id})">
      ${product.featured ? '<div class="featured-badge">Featured</div>' : ''}
      <div class="product-image-container">
        <img src="${product.images[0]}" alt="${product.name}" class="product-image">
      </div>
      <div class="product-info">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-rating">
          <span class="stars">${generateStars(product.rating)}</span>
          <span class="rating-text">(${product.rating})</span>
        </div>
        <div class="product-price-container">
          <span class="product-price">${formatPrice(product.price)}</span>
          ${product.originalPrice ? `<span class="product-original-price">${formatPrice(product.originalPrice)}</span>` : ''}
        </div>
        <button class="btn btn--primary add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
          Add to Cart
        </button>
      </div>
    </div>
  `).join('');
}

function renderCartItems() {
  const cartItems = document.getElementById('cartItems');
  
  if (cart.length === 0) {
    cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
    return;
  }
  
  cartItems.innerHTML = cart.map(item => {
    const product = products.find(p => p.id === item.productId);
    return `
      <div class="cart-item">
        <img src="${product.images[0]}" alt="${product.name}" class="cart-item-image">
        <div class="cart-item-info">
          <h4 class="cart-item-title">${product.name}</h4>
          <div class="cart-item-price">${formatPrice(product.price)}</div>
          ${item.selectedColor ? `<div class="cart-item-option">Color: ${item.selectedColor}</div>` : ''}
          ${item.selectedSize ? `<div class="cart-item-option">Size: ${item.selectedSize}</div>` : ''}
          <div class="cart-item-controls">
            <button class="quantity-btn" onclick="updateCartQuantity(${item.productId}, ${item.quantity - 1})">-</button>
            <span class="quantity-display">${item.quantity}</span>
            <button class="quantity-btn" onclick="updateCartQuantity(${item.productId}, ${item.quantity + 1})">+</button>
            <button class="remove-item" onclick="removeFromCart(${item.productId})">Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Cart Functions
function addToCart(productId, selectedColor = null, selectedSize = null) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = cart.find(item => 
    item.productId === productId && 
    item.selectedColor === selectedColor && 
    item.selectedSize === selectedSize
  );
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      productId,
      quantity: 1,
      selectedColor,
      selectedSize
    });
  }
  
  updateCartUI();
  showToast(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.productId !== productId);
  updateCartUI();
  showToast('Item removed from cart');
}

function updateCartQuantity(productId, newQuantity) {
  if (newQuantity <= 0) {
    removeFromCart(productId);
    return;
  }
  
  const item = cart.find(item => item.productId === productId);
  if (item) {
    item.quantity = newQuantity;
    updateCartUI();
  }
}

function updateCartUI() {
  const cartCount = document.getElementById('cartCount');
  const cartTotal = document.getElementById('cartTotal');
  
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.productId);
    return sum + (product.price * item.quantity);
  }, 0);
  
  cartCount.textContent = totalItems;
  cartTotal.textContent = totalPrice.toLocaleString('en-IN');
  
  renderCartItems();
}

// Product Detail Functions
function showProductDetail(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const modal = document.getElementById('productModal');
  const modalTitle = document.getElementById('productModalTitle');
  const productDetailContent = document.getElementById('productDetailContent');
  
  modalTitle.textContent = product.name;
  
  const stockStatus = product.stock > 10 ? 'in-stock' : product.stock > 0 ? 'low-stock' : 'out-of-stock';
  const stockText = product.stock > 10 ? 'In Stock' : product.stock > 0 ? `Only ${product.stock} left` : 'Out of Stock';
  
  productDetailContent.innerHTML = `
    <div class="product-images">
      <img src="${product.images[0]}" alt="${product.name}" class="main-image" id="mainImage">
      <div class="image-thumbnails">
        ${product.images.map((img, index) => `
          <img src="${img}" alt="${product.name}" class="thumbnail ${index === 0 ? 'active' : ''}" 
               onclick="changeMainImage('${img}', this)">
        `).join('')}
      </div>
    </div>
    <div class="product-details">
      <h2>${product.name}</h2>
      <div class="product-rating">
        <span class="stars">${generateStars(product.rating)}</span>
        <span class="rating-text">(${product.rating} rating)</span>
      </div>
      <div class="product-price-container">
        <span class="product-price">${formatPrice(product.price)}</span>
        ${product.originalPrice ? `<span class="product-original-price">${formatPrice(product.originalPrice)}</span>` : ''}
      </div>
      <p class="product-description">${product.description}</p>
      
      <div class="product-options">
        ${product.colors.length > 1 ? `
          <div class="option-group">
            <label>Color:</label>
            <div class="option-buttons">
              ${product.colors.map(color => `
                <button class="option-btn color-option" data-color="${color}">${color}</button>
              `).join('')}
            </div>
          </div>
        ` : ''}
        
        ${product.sizes.length > 1 ? `
          <div class="option-group">
            <label>Size:</label>
            <div class="option-buttons">
              ${product.sizes.map(size => `
                <button class="option-btn size-option" data-size="${size}">${size}</button>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
      
      <div class="stock-info">
        <span class="stock-status ${stockStatus}">${stockText}</span>
      </div>
      
      <button class="btn btn--primary btn--full-width" 
              onclick="addToCartFromModal(${product.id})"
              ${product.stock === 0 ? 'disabled' : ''}>
        ${product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
      </button>
    </div>
  `;
  
  showModal('productModal');
  
  // Add event listeners for options after rendering
  setTimeout(() => {
    document.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        this.parentNode.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
      });
    });
  }, 100);
}

function changeMainImage(src, thumbnail) {
  document.getElementById('mainImage').src = src;
  document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
  thumbnail.classList.add('active');
}

function addToCartFromModal(productId) {
  const selectedColor = document.querySelector('.color-option.active')?.dataset.color || null;
  const selectedSize = document.querySelector('.size-option.active')?.dataset.size || null;
  
  addToCart(productId, selectedColor, selectedSize);
  hideModal('productModal');
}

// Search and Filter Functions
function filterProducts(category = 'all', searchTerm = '') {
  filteredProducts = products.filter(product => {
    const matchesCategory = category === 'all' || product.category === category;
    const matchesSearch = searchTerm === '' || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  renderProducts();
}

// Authentication Functions
function login(email, password) {
  // Simple demo login - in real app this would be server-side
  if (email && password) {
    currentUser = {
      id: Date.now(),
      name: email.split('@')[0],
      email: email,
      phone: '',
      address: '',
      pincode: '',
      state: ''
    };
    updateUserUI();
    hideModal('loginModal');
    showToast(`Welcome, ${currentUser.name}!`);
    return true;
  } else {
    showToast('Please enter email and password');
    return false;
  }
}

function signup(name, email, phone, password) {
  if (name && email && phone && password) {
    currentUser = {
      id: Date.now(),
      name,
      email,
      phone,
      password,
      address: '',
      pincode: '',
      state: ''
    };
    
    updateUserUI();
    hideModal('signupModal');
    showToast(`Welcome to ShopZee, ${name}!`);
    return true;
  } else {
    showToast('Please fill all fields');
    return false;
  }
}

function logout() {
  currentUser = null;
  updateUserUI();
  showToast('Logged out successfully');
}

function updateUserProfile(profileData) {
  if (!currentUser) return false;
  
  Object.assign(currentUser, profileData);
  showToast('Profile updated successfully');
  return true;
}

function updateUserUI() {
  const userBtn = document.getElementById('userBtn');
  const loginBtn = document.getElementById('loginBtn');
  const signupBtn = document.getElementById('signupBtn');
  const profileBtn = document.getElementById('profileBtn');
  const logoutBtn = document.getElementById('logoutBtn');
  
  if (currentUser) {
    userBtn.innerHTML = `👤 ${currentUser.name}`;
    loginBtn.style.display = 'none';
    signupBtn.style.display = 'none';
    profileBtn.style.display = 'block';
    logoutBtn.style.display = 'block';
  } else {
    userBtn.innerHTML = '👤 User';
    loginBtn.style.display = 'block';
    signupBtn.style.display = 'block';
    profileBtn.style.display = 'none';
    logoutBtn.style.display = 'none';
  }
}

// Modal Functions
function showModal(modalId) {
  const modal = document.getElementById(modalId);
  const overlay = document.getElementById('modalOverlay');
  
  modal.classList.add('active');
  overlay.classList.add('active');
  
  // Add escape key listener
  document.addEventListener('keydown', handleEscapeKey);
}

function hideModal(modalId) {
  const modal = document.getElementById(modalId);
  const overlay = document.getElementById('modalOverlay');
  
  modal.classList.remove('active');
  overlay.classList.remove('active');
  
  // Remove escape key listener
  document.removeEventListener('keydown', handleEscapeKey);
}

function handleEscapeKey(e) {
  if (e.key === 'Escape') {
    // Close all active modals
    document.querySelectorAll('.modal.active').forEach(modal => {
      modal.classList.remove('active');
    });
    document.getElementById('modalOverlay').classList.remove('active');
    document.removeEventListener('keydown', handleEscapeKey);
  }
}

// Event Handlers
function handleOfferClick(link) {
  if (link === '#electronics') {
    currentCategory = 'Electronics';
    document.querySelector('.category-btn.active').classList.remove('active');
    document.querySelector('[data-category="Electronics"]').classList.add('active');
    filterProducts('Electronics');
  }
}

// Event Listeners
function initializeEventListeners() {
  // Home button
  document.getElementById('homeBtn').addEventListener('click', () => {
    currentCategory = 'all';
    document.querySelector('.category-btn.active')?.classList.remove('active');
    document.querySelector('[data-category="all"]').classList.add('active');
    filterProducts('all');
    document.getElementById('searchInput').value = '';
  });
  
  // Search functionality
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  
  function performSearch() {
    const searchTerm = searchInput.value.trim();
    filterProducts(currentCategory, searchTerm);
  }
  
  searchBtn.addEventListener('click', performSearch);
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
  });
  
  // User dropdown
  const userBtn = document.getElementById('userBtn');
  const userDropdown = document.getElementById('userDropdown');
  
  userBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    userDropdown.classList.toggle('active');
  });
  
  document.addEventListener('click', () => {
    userDropdown.classList.remove('active');
  });
  
  // Cart sidebar
  document.getElementById('cartBtn').addEventListener('click', () => {
    document.getElementById('cartSidebar').classList.add('active');
  });
  
  document.getElementById('closeCart').addEventListener('click', () => {
    document.getElementById('cartSidebar').classList.remove('active');
  });
  
  // Category filters
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelector('.category-btn.active')?.classList.remove('active');
      this.classList.add('active');
      
      currentCategory = this.dataset.category;
      const searchTerm = searchInput.value.trim();
      filterProducts(currentCategory, searchTerm);
    });
  });
  
  // Auth buttons
  document.getElementById('loginBtn').addEventListener('click', () => {
    showModal('loginModal');
  });
  
  document.getElementById('signupBtn').addEventListener('click', () => {
    showModal('signupModal');
  });
  
  document.getElementById('profileBtn').addEventListener('click', () => {
    if (currentUser) {
      // Populate profile form
      document.getElementById('profileName').value = currentUser.name || '';
      document.getElementById('profileEmail').value = currentUser.email || '';
      document.getElementById('profilePhone').value = currentUser.phone || '';
      document.getElementById('profileAddress').value = currentUser.address || '';
      document.getElementById('profilePincode').value = currentUser.pincode || '';
      document.getElementById('profileState').value = currentUser.state || '';
      
      showModal('profileModal');
    }
  });
  
  document.getElementById('logoutBtn').addEventListener('click', () => {
    logout();
  });
  
  // Show signup from login
  document.getElementById('showSignup').addEventListener('click', (e) => {
    e.preventDefault();
    hideModal('loginModal');
    showModal('signupModal');
  });
  
  // Show login from signup
  document.getElementById('showLogin').addEventListener('click', (e) => {
    e.preventDefault();
    hideModal('signupModal');
    showModal('loginModal');
  });
  
  // Form submissions
  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    login(email, password);
  });
  
  document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const phone = document.getElementById('signupPhone').value;
    const password = document.getElementById('signupPassword').value;
    signup(name, email, phone, password);
  });
  
  document.getElementById('profileForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const profileData = {
      name: document.getElementById('profileName').value,
      email: document.getElementById('profileEmail').value,
      phone: document.getElementById('profilePhone').value,
      address: document.getElementById('profileAddress').value,
      pincode: document.getElementById('profilePincode').value,
      state: document.getElementById('profileState').value
    };
    
    if (updateUserProfile(profileData)) {
      hideModal('profileModal');
    }
  });
  
  // Close modals
  document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', function() {
      const modalId = this.dataset.modal;
      if (modalId) {
        hideModal(modalId);
      } else {
        // Find parent modal and close it
        const modal = this.closest('.modal');
        if (modal) {
          modal.classList.remove('active');
          document.getElementById('modalOverlay').classList.remove('active');
        }
      }
    });
  });
  
  // Close modal on overlay click
  document.getElementById('modalOverlay').addEventListener('click', () => {
    document.querySelectorAll('.modal.active').forEach(modal => {
      modal.classList.remove('active');
    });
    document.getElementById('modalOverlay').classList.remove('active');
  });
  
  // Checkout button
  document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (cart.length === 0) {
      showToast('Your cart is empty');
      return;
    }
    
    if (!currentUser) {
      showToast('Please login to proceed with checkout');
      showModal('loginModal');
      return;
    }
    
    // Simple checkout simulation
    const total = cart.reduce((sum, item) => {
      const product = products.find(p => p.id === item.productId);
      return sum + (product.price * item.quantity);
    }, 0);
    
    showToast(`Order placed successfully! Total: ${formatPrice(total)}`);
    cart = [];
    updateCartUI();
    document.getElementById('cartSidebar').classList.remove('active');
  });
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);