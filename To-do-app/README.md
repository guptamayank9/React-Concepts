# 📝 Todo App with LocalStorage (React)

A simple **Todo App** built using **React** that allows users to add and delete tasks.
This version includes **LocalStorage**, so data is saved even after page refresh.

---

# 🚀 Features

* ➕ Add tasks
* ❌ Delete tasks
* 💾 Data saved in LocalStorage
* 🔄 Data persists after refresh
* ⚡ Instant UI updates

---

# 🛠️ Tech Stack

* React (Vite)
* JavaScript (ES6)
* Tailwind CSS

---

# ⚙️ Installation & Setup

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
npm install
npm run dev
```

---

# 🧠 How It Works

## 🔹 State Management

```js
const [todos, setTodos] = useState([]);
const [input, setInput] = useState("");
```

---

## 🔹 Add Todo

```js
const addTodo = () => {
  const newTodos = [...todos, input];
  setTodos(newTodos);
  localStorage.setItem("todos", JSON.stringify(newTodos));
};
```

---

## 🔹 Delete Todo

```js
const deleteTodo = (index) => {
  const newTodos = todos.filter((_, i) => i !== index);
  setTodos(newTodos);
  localStorage.setItem("todos", JSON.stringify(newTodos));
};
```

---

## 🔹 Load Data (useEffect)

```js
useEffect(() => {
  const saved = JSON.parse(localStorage.getItem("todos"));
  if (saved) setTodos(saved);
}, []);
```

---

# 🔄 App Flow

1. User enters task
2. Clicks Add
3. Task saved in state + localStorage
4. UI updates
5. Refresh → data still available

---

# 📚 Concepts Used

* useState
* useEffect
* Event handling
* Array methods (map, filter)
* LocalStorage

---

# 🧠 What I Learned

* Managing multiple states
* Persisting data
* Real-world React logic
* Building dynamic UI

---

# 🔮 Future Improvements

* Edit task
* Mark complete
* Add filters
* Add animations

---

# 👨‍💻 Author

Mayank Gupta

---

# ⭐ Notes

This project is built for learning React and understanding real-world application behavior.
