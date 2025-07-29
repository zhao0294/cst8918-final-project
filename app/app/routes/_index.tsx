import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";

interface WeatherData {
  location: string;
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const city = url.searchParams.get("city") || "Toronto";

  // TODO: Replace with your OpenWeatherMap API key
  const API_KEY = process.env.OPENWEATHER_API_KEY || "your-api-key-here";
  const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379";

  try {
    // Check Redis cache first
    // TODO: Implement Redis caching when Redis is available
    // const cached = await redis.get(`weather:${city}`);
    // if (cached) {
    //   return json({ weatherData: JSON.parse(cached), city });
    // }

    // Fetch real weather data from OpenWeatherMap API
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }

    const data = await response.json();

    const weatherData: WeatherData = {
      location: data.name,
      temperature: Math.round(data.main.temp),
      description: data.weather[0].description,
      humidity: data.main.humidity,
      windSpeed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
      icon: data.weather[0].icon
    };

    // TODO: Cache in Redis
    // await redis.setex(`weather:${city}`, 300, JSON.stringify(weatherData));

    return json({ weatherData, city });
  } catch (error) {
    console.error("Weather API error:", error);

    // Fallback to mock data if API fails
    const weatherData: WeatherData = {
      location: city,
      temperature: Math.round(Math.random() * 30 + 10),
      description: "Partly Cloudy",
      humidity: Math.round(Math.random() * 40 + 40),
      windSpeed: Math.round(Math.random() * 20 + 5),
      icon: "02d"
    };

    return json({ weatherData, city, error: "Using mock data due to API error" });
  }
}

export default function Index() {
  const { weatherData, city, error } = useLoaderData<typeof loader>();
  const [searchCity, setSearchCity] = useState(city);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <form method="get" className="flex gap-2">
            <input
              type="text"
              name="city"
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
              placeholder="Enter city name..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Search
            </button>
          </form>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
            {error}
          </div>
        )}

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {weatherData.location}
          </h2>

          <div className="flex items-center justify-center mb-4">
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
              alt={weatherData.description}
              className="w-16 h-16"
            />
            <div className="text-6xl font-bold text-blue-600 ml-4">
              {weatherData.temperature}°C
            </div>
          </div>

          <p className="text-xl text-gray-600 mb-6 capitalize">
            {weatherData.description}
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Humidity</p>
              <p className="text-2xl font-semibold text-gray-800">
                {weatherData.humidity}%
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Wind Speed</p>
              <p className="text-2xl font-semibold text-gray-800">
                {weatherData.windSpeed} km/h
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>Powered by Azure AKS and Redis Cache</p>
        <p>CST8918 Final Project - Infrastructure as Code</p>
      </div>
    </div>
  );
} 