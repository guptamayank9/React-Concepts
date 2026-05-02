import React, { useState } from "react";


const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError("");
    setWeather(null);
    try {
      const apiKey = "5eb2a6a665564145bac61744252207";
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`,
      );

      const data = await res.json();

      console.log(data); // debug
      if (data.error) {
        setError(data.error.message);
      } else {
        setWeather(data);
      }
    } catch (err) {
      setError("Something went Wrong");
    }
    setLoading(false);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-6 rounded shadow w-80 text-center">
        <h1 className="text-xl mb-4">Weather App</h1>

        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border p-2 w-full mb-3"
        />

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          onClick={getWeather}
        >
          Get Weather
        </button>

        {loading && <p className="mt-3 text-blue-500">Loading....</p>}
        {error && <p className="mt-3 text-red-500">{error}</p>}

        {weather && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold">{weather.location.name}</h2>
            <p className="text-xl">{weather.current.temp_c}°C</p>
            <p className="text-gray-600">{weather.current.condition.text}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather
