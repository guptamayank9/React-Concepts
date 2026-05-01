# 🌦️ Weather App (React + API)

A simple and interactive **Weather App** built using **React**.
It fetches real-time weather data using an external API and displays it in a clean UI.

---

# 🚀 Features

* 🔍 Search weather by city
* 🌡️ Display temperature
* ☁️ Show weather condition
* ⏳ Loading indicator
* ❌ Error handling (invalid city)
* ⚡ Fast UI updates

---

# 🛠️ Tech Stack

* React (Vite)
* JavaScript (ES6)
* Tailwind CSS
* Weather API

---

# ⚙️ Installation & Setup

```bash id="qj8bq3"
git clone https://github.com/your-username/weather-app.git
cd weather-app
npm install
npm run dev
```

---

# 🌐 API Used

Weather data is fetched from:

```id="p8dczx"
https://api.weatherapi.com/v1/current.json
```

---

# 🧠 How It Works

## 🔹 State Management

```js id="u6gm90"
const [city, setCity] = useState("");
const [weather, setWeather] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
```

---

## 🔹 Fetch Weather Data

```js id="bsv9qp"
const getWeather = async () => {
  setLoading(true);
  setError("");

  const res = await fetch(url);
  const data = await res.json();

  if (data.error) {
    setError(data.error.message);
  } else {
    setWeather(data);
  }

  setLoading(false);
};
```

---

## 🔹 Display Data

```jsx id="pg1lg1"
{weather && (
  <div>
    <h2>{weather.location.name}</h2>
    <p>{weather.current.temp_c} °C</p>
    <p>{weather.current.condition.text}</p>
  </div>
)}
```

---

# 🔄 App Flow

1. User enters city
2. Clicks "Get Weather"
3. API call is made
4. Data stored in state
5. UI updates dynamically

---

# 📚 Concepts Used

* useState
* async/await
* API fetching
* Conditional rendering
* Error handling
* Tailwind CSS

---

# 🧠 What I Learned

* Working with APIs
* Handling async operations
* Managing UI states
* Building real-world apps

---

# 🔮 Future Improvements

* Add weather icons 🌤️
* Add background change (rain/sunny)
* Add search history
* Add forecast feature

---

# 👨‍💻 Author

Mayank Gupta

---

# ⭐ Notes

This project is built for learning API integration and real-world React concepts.
