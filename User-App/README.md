# 👤 User Profile App (React)

A simple **User Profile Application** built using **React**.
This project demonstrates how to use **props**, **routing**, and **dynamic URL parameters**.

---

# 🚀 Features

* 🏠 Home Page (list of users)
* 👤 Profile Page (user details)
* 🔗 Navigation using React Router
* 📦 Props for data passing
* 🔄 Dynamic routing using URL parameters

---

# 🛠️ Tech Stack

* React (Vite)
* JavaScript (ES6)
* React Router DOM
* Tailwind CSS (optional)

---

# ⚙️ Installation & Setup

```bash id="run1"
git clone https://github.com/your-username/user-profile-app.git
cd user-profile-app
npm install
npm run dev
```

---

# 🧠 How It Works

## 🔹 Data (users.js)

```js id="run2"
const users = [
  { id: 1, name: "Mayank", age: 21, city: "Delhi" },
];
```

---

## 🔹 Props Example

```jsx id="run3"
<UserCard user={user} />
```

👉 Data parent → child pass hota hai

---

## 🔹 Routing Setup

```jsx id="run4"
<Route path="/" element={<Home />} />
<Route path="/profile/:id" element={<Profile />} />
```

---

## 🔹 useParams

```jsx id="run5"
const { id } = useParams();
```

👉 URL se id nikalta hai

---

## 🔹 Find User

```jsx id="run6"
const user = users.find((u) => u.id === Number(id));
```

---

# 🔄 App Flow

1. Home page pe users list show hoti hai
2. "View Profile" button click
3. URL change hota hai (`/profile/:id`)
4. Profile page me correct user data show hota hai

---

# 📚 Concepts Used

* Props
* Component reuse
* React Router
* Dynamic routing
* useParams

---

# 🧠 What I Learned

* Data passing using props
* Building reusable components
* Creating multi-page React apps
* Handling dynamic routes
* Structuring React projects

---

# 🔮 Future Improvements

* Add edit profile feature
* Add search functionality
* Improve UI design
* Add API integration

---

# 👨‍💻 Author

Mayank Gupta

---

# ⭐ Notes

This project is built for learning props and routing in React.
