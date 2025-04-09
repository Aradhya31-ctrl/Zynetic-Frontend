import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-center">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
