function WeatherCard({ data }) {
    return (
      <div className="mt-8 bg-white/10 rounded-xl p-6 shadow-xl backdrop-blur-lg text-center text-white w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="Weather Icon"
          className="mx-auto"
        />
        <p className="text-lg">{data.weather[0].main}</p>
        <p className="text-xl font-semibold">{data.main.temp}°C</p>
        <div className="mt-4 flex justify-between text-sm text-white/80">
          <p>Humidity: {data.main.humidity}%</p>
          <p>Wind: {data.wind.speed} km/h</p>
        </div>
      </div>
    );
  }
  
  export default WeatherCard;
  