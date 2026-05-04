# ⚛️ React Hooks Dashboard App

A simple React application demonstrating the use of multiple **React Hooks** in a single project.

---

# 🚀 Features

* 🔢 Counter using useState
* ⚡ Side effect logging using useEffect
* 🎯 Input focus using useRef
* 🌐 Global data sharing using useContext

---

# 🛠️ Tech Stack

* React (Vite)
* JavaScript (ES6)
* Tailwind CSS

---

# ⚙️ Installation & Setup

```bash id="run11"
git clone https://github.com/your-username/hooks-app.git
cd hooks-app
npm install
npm run dev
```

---

# 🧠 Hooks Used

## 🔹 useState

```js id="run12"
const [count, setCount] = useState(0);
```

👉 Manages component state

---

## 🔹 useEffect

```js id="run13"
useEffect(() => {
  console.log("component loaded");
}, []);
```

👉 Runs on component mount

---

## 🔹 useRef

```js id="run14"
const inputRef = useRef();
```

👉 Access DOM element directly

---

## 🔹 useContext

```jsx id="run15"
<UserContext.Provider value={{ name: "Mayank" }}>
  <Child />
</UserContext.Provider>
```

👉 Shares data globally

---

# 🔄 App Flow

1. User clicks button → counter increases
2. Component loads → console logs message
3. Click focus button → input gets focus
4. Context passes user name → displayed in child component

---

# 📚 Concepts Covered

* React Hooks
* State management
* Side effects
* DOM manipulation
* Context API

---

# 🧠 What I Learned

* When to use each hook
* How hooks work together
* Building real-world React logic
* Managing component and global state

---

# 🔮 Future Improvements

* Add useReducer
* Create custom hooks
* Improve UI design
* Add API integration

---

# 👨‍💻 Author

Mayank Gupta

---

# ⭐ Notes

This project is built to understand and practice React Hooks in a practical way.
