import { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"d87db03a89a3f5f0e6fbe30b6f9abe2d"}&units=metric`
      );

      if (!response.ok) {
        throw new Error('City not found');
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[url('/background.jpg')] bg-cover bg-center text-white font-sans">
      {/* Navbar */}
      <nav className="w-full p-4 fixed top-0 left-0 bg-white/10 backdrop-blur-md z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-white drop-shadow-lg">Weather Dashboard</h1>
          <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
        </div>
      </nav>

      <main className="min-h-screen flex flex-col items-center justify-center pt-32 px-4 backdrop-blur-sm bg-black/30">
        <SearchBar onSearch={fetchWeather} />

        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}
        {weatherData && <WeatherCard data={weatherData} />}
      </main>

      {/* Footer */}
      <footer className="w-full mt-16 bg-white/10 text-sm text-center p-6 text-white backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/80">Weather data provided by OpenWeatherMap API.</p>
          <p className="mt-2 text-white/80">Built with ❤️ using React.js + Tailwind CSS</p>
          <p className="mt-1 text-white/70">&copy; 2025 Your Name. All rights reserved.</p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img src="/github.svg" alt="GitHub" className="w-6 h-6 hover:scale-110 transition-transform duration-200" />
            </a>
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
              <img src="/vercel.svg" alt="Vercel" className="w-6 h-6 hover:scale-110 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;


