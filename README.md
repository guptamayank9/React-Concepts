# ⚛️ React Learning Repository

This repository contains my React practice projects and notes for revision and understanding core concepts.

---

# 📚 What is React?

React is a **JavaScript library** used to build **user interfaces (UI)**.

* Developed by Facebook
* Component-based architecture
* Uses Virtual DOM for fast performance

---

# 🧠 Core Concepts

## 🔹 Components

Reusable pieces of UI.

```jsx
function App() {
  return <h1>Hello React</h1>;
}
```

---

## 🔹 JSX

JavaScript + HTML syntax.

```jsx
const element = <h1>Hello</h1>;
```

---

## 🔹 Props

Used to pass data from parent to child.

```jsx
function Card(props) {
  return <h1>{props.name}</h1>;
}
```

---

## 🔹 State

State is used to store dynamic data.

```jsx
const [count, setCount] = useState(0);
```

---

## 🔹 Event Handling

```jsx
<button onClick={() => setCount(count + 1)}>
  Click
</button>
```

---

# ⚛️ React Hooks

Hooks are functions that let you use React features in functional components.

---

## 🔹 useState

Used to manage state.

```jsx
const [count, setCount] = useState(0);
```

👉 Updates UI when state changes

---

## 🔹 useEffect

Used for side effects (API calls, lifecycle events)

```jsx
useEffect(() => {
  console.log("Component Mounted");
}, []);
```

👉 Runs once when component loads

---

## 🔹 useRef

Used to access DOM elements or store mutable values.

```jsx
const inputRef = useRef();

<input ref={inputRef} />
```

---

## 🔹 useMemo

Used to optimize performance by memoizing values.

```jsx
const result = useMemo(() => expensiveFunction(), []);
```

---

## 🔹 useCallback

Used to memoize functions.

```jsx
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
```

---

## 🔹 useContext

Used for global state management.

```jsx
const value = useContext(MyContext);
```

---

# 🌐 API Fetch Example

```jsx
useEffect(() => {
  fetch("https://api.example.com")
    .then(res => res.json())
    .then(data => console.log(data));
}, []);
```

---

# 🎨 Tailwind CSS in React

npm install tailwindcss @tailwindcss/vite


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
@import "tailwindcss" in index.css
Used for styling UI quickly.

```html
className="bg-blue-500 text-white px-4 py-2 rounded"
```

---

# 📂 Projects Covered

* Counter App
* Todo App
* Weather App

---

# 🧠 What I Learned

* React fundamentals
* Hooks (useState, useEffect, etc.)
* Event handling
* API integration
* Tailwind CSS

---

# 🔥 Future Goals

* Learn React Router
* Learn Context API deeply
* Build full MERN projects

---

# 👨‍💻 Author

**Mayank Gupta**

---

# ⭐ Notes

This repository is for learning and revision purposes.
