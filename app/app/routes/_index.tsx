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
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const city = url.searchParams.get("city") || "Toronto";

  // Simulate weather API call with Redis caching
  const weatherData: WeatherData = {
    location: city,
    temperature: Math.round(Math.random() * 30 + 10),
    description: "Partly Cloudy",
    humidity: Math.round(Math.random() * 40 + 40),
    windSpeed: Math.round(Math.random() * 20 + 5)
  };

  return json({ weatherData, city });
}

export default function Index() {
  const { weatherData, city } = useLoaderData<typeof loader>();
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

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {weatherData.location}
          </h2>
          <div className="text-6xl font-bold text-blue-600 mb-4">
            {weatherData.temperature}°C
          </div>
          <p className="text-xl text-gray-600 mb-6">
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