# 🌐 Multi-Page App (React Router)

A simple **multi-page React application** built using **React Router**.
This project demonstrates how to create multiple pages and navigate between them without reloading the page.

---

# 🚀 Features

* 🏠 Home Page
* 🌦️ Weather Page
* ℹ️ About Page
* 🔗 Navigation using React Router
* ⚡ Fast page switching (no reload)
* ❌ 404 Not Found page

---

# 🛠️ Tech Stack

* React (Vite)
* React Router DOM
* JavaScript (ES6)
* Tailwind CSS

---

# ⚙️ Installation & Setup

```bash id="h7az9t"
git clone https://github.com/your-username/multi-page-app.git
cd multi-page-app
npm install
npm run dev
```

---

# 🧠 How It Works

## 🔹 BrowserRouter

```jsx id="v9l7ke"
<BrowserRouter>
  <App />
</BrowserRouter>
```

👉 Enables routing in the app

---

## 🔹 Routes & Route

```jsx id="t4y3bn"
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/weather" element={<Weather />} />
  <Route path="/about" element={<About />} />
</Routes>
```

👉 Defines different pages

---

## 🔹 Navigation (Link)

```jsx id="x2rm4c"
<Link to="/">Home</Link>
<Link to="/about">About</Link>
```

👉 Used for navigation without reload

---

## 🔹 Active Link (NavLink)

```jsx id="y6j1pc"
<NavLink to="/" className={({isActive}) => isActive ? "text-yellow-400" : ""}>
  Home
</NavLink>
```

👉 Highlights active page

---

## 🔹 404 Page

```jsx id="g8k2fz"
<Route path="*" element={<NotFound />} />
```

👉 Shows page not found if route doesn't exist

---

# 🔄 App Flow

1. User clicks link
2. URL changes
3. React Router renders component
4. Page updates without reload

---

# 📚 Concepts Used

* React Router
* BrowserRouter
* Routes & Route
* Link & NavLink
* Component structure

---

# 🧠 What I Learned

* Multi-page app creation
* Routing in React
* Navigation handling
* Clean project structure

---

# 🔮 Future Improvements

* Add authentication pages
* Add protected routes
* Improve UI design
* Add animations

---

# 👨‍💻 Author

Mayank Gupta

---

# ⭐ Notes

This project is built for learning React routing and navigation.
