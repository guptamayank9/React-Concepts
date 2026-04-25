# 🧮 Counter App (React + Tailwind CSS)

A simple Counter App built using **React (Vite)** and **Tailwind CSS**.
This project demonstrates basic React concepts like state management, event handling, and UI styling.

---

## 🚀 Features

* ➕ Increase count
* ➖ Decrease count
* 🔄 Reset count
* 🎨 Clean UI using Tailwind CSS

---

## 🛠️ Tech Stack

* React (Vite)
* Tailwind CSS
* JavaScript (ES6)

---

## ⚙️ Tailwind CSS Setup (Vite)

Follow these steps to install Tailwind in a Vite React project:

```bash
npm install tailwindcss @tailwindcss/vite
```

### Configure Vite

Update your `vite.config.js`:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### Add Tailwind to CSS

In `src/index.css`:

```css
@import "tailwindcss";
```

---

## 📸 Preview

(Add your project screenshot here)

---

## ⚙️ Installation & Run

```bash
git clone https://github.com/your-username/counter-app.git
cd counter-app
npm install
npm run dev
```

---

## 🧠 How It Works

### 🔹 State Management

```js
const [count, setCount] = useState(0);
```

* `count` → current value
* `setCount` → function to update value

---

### 🔹 Increase Function

```js
const handleIncrease = () => {
  setCount(prev => prev + 1);
}
```

👉 When button is clicked:

1. Function runs
2. `setCount` updates value
3. React re-renders UI

---

### 🔹 Decrease Function

```js
onClick={() => setCount(count - 1)}
```

👉 Decreases the value by 1

---

### 🔹 Reset Function

```js
onClick={() => setCount(0)}
```

👉 Resets value to 0

---

### 🔹 UI Styling (Tailwind)

Example:

```html
className="bg-blue-500 text-white px-4 py-2 rounded"
```

* `bg-blue-500` → background color
* `text-white` → text color
* `px-4 py-2` → padding
* `rounded` → border radius

---

## 📂 Project Structure

```
counter-app/
│── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│── package.json
```

---

## 🧠 What I Learned

* React useState hook
* Event handling
* Functional components
* Tailwind CSS basics
* UI layout and styling

---

## 🔮 Future Improvements

* Add step counter (+5, -5)
* Add min/max limit
* Add dark mode

---

## 👨‍💻 Author

**Mayank Gupta**

---

## ⭐ Give a Star

If you like this project, give it a ⭐ on GitHub!
