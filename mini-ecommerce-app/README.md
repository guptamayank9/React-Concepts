# 🛒 Mini E-Commerce App (React)

A simple **Mini E-Commerce Application** built using **React**.
This project demonstrates product listing, category filtering, cart functionality, and data persistence using LocalStorage.

---

# 🚀 Features

* 🛍️ Product listing
* 🖼️ Product images
* 👕 Category filter (Men / Women / All)
* ➕ Add to Cart
* ❌ Remove from Cart
* 💾 Cart saved in LocalStorage
* 🔄 Data persists after refresh
* 🔗 Multi-page navigation (React Router)

---

# 🛠️ Tech Stack

* React (Vite)
* JavaScript (ES6)
* Tailwind CSS
* React Router DOM

---

# ⚙️ Installation & Setup

```bash id="setup1"
git clone https://github.com/your-username/mini-ecommerce.git
cd mini-ecommerce
npm install
npm run dev
```

---

# 🧠 How It Works

## 🔹 Product Data

```js id="setup2"
const products = [
  { id: 1, name: "Men Shoes", price: 1200, category: "men" },
];
```

---

## 🔹 Add to Cart

```js id="setup3"
const addToCart = (product) => {
  setCart([...cart, product]);
};
```

---

## 🔹 Remove from Cart

```js id="setup4"
const removeFromCart = (id) => {
  setCart(cart.filter((item) => item.id !== id));
};
```

---

## 🔹 Filtering

```js id="setup5"
const filteredProducts =
  filter === "all"
    ? products
    : products.filter((item) => item.category === filter);
```

---

## 🔹 LocalStorage

```js id="setup6"
useEffect(() => {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) setCart(JSON.parse(savedCart));
}, []);
```

---

# 🔄 App Flow

1. User views products
2. Filters by category
3. Adds product to cart
4. Cart stores items
5. Data saved in localStorage
6. Refresh → data still available

---

# 📚 Concepts Used

* useState
* useEffect
* React Router
* Props
* Array methods (map, filter)
* LocalStorage

---

# 🧠 What I Learned

* Building structured React apps
* Managing state and props
* Creating reusable components
* Implementing filtering logic
* Working with persistent data

---

# 🔮 Future Improvements

* Add quantity system
* Add total price calculation
* Add checkout page
* Add product detail page
* Improve UI design

---

# 👨‍💻 Author

Mayank Gupta

---

# ⭐ Notes

This project is built for learning React and understanding real-world e-commerce logic.
