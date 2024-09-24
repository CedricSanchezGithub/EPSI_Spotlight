import DefaultLayout from "@/layouts/default.tsx";
import React, { useState, useEffect } from 'react';

interface WeatherData {
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
  wind: {
    speed: number;
  };
}

export default function Environnement() {
  const [city, setCity] = useState('Montpellier'); // Ville par défaut
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const API_KEY = 'bfc8484f410bd7ca0649acb045cf1131'; // Remplace par ta clé API OpenWeatherMap

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=fr`);
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Erreur lors du fetch des données météo:", error);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <DefaultLayout>
      {/* Suppression du fond fixe et utilisation du mode sombre */}
      <div className="w-full min-h-screen bg-white dark:bg-gray-900">
        <section className="flex flex-col items-center justify-center gap-6 py-8 md:py-10 min-h-screen max-w-full">
          <div className="inline-block max-w-lg text-center justify-center">
            <h1 className="text-6xl font-extrabold text-blue-600 dark:text-blue-400 mb-8 drop-shadow-lg">
              Environnement
            </h1>
          </div>

          {/* Menu déroulant avec style interactif */}
          <select 
            value={city} 
            onChange={(e) => setCity(e.target.value)} 
            className="mt-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white p-3 rounded-lg border border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-400 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            <option value="Montpellier">Montpellier</option>
            <option value="Paris">Paris</option>
            <option value="Lyon">Lyon</option>
            <option value="Marseille">Marseille</option>
          </select>

          {/* Informations météo */}
          {weather ? (
            <div className="weather-info mt-8 p-6 bg-gray-100 dark:bg-black bg-opacity-60 dark:bg-opacity-60 text-gray-900 dark:text-white rounded-xl shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-500 ease-in-out max-w-md w-full">
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-300 mb-4">Température: {weather.main.temp} °C</p>
              <p className="text-lg text-gray-700 dark:text-gray-300">Description: {weather.weather[0].description}</p>
              <p className="text-lg text-gray-700 dark:text-gray-300">Humidité: {weather.main.humidity} %</p>
              <p className="text-lg text-gray-700 dark:text-gray-300">Vent: {weather.wind.speed} m/s</p>
            </div>
          ) : (
            <p className="text-gray-900 dark:text-white">Chargement des données météo...</p>
          )}
        </section>
      </div>
    </DefaultLayout>
  );
}
