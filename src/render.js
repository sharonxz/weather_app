document.addEventListener('DOMContentLoaded', function () {
  async function fetchWeatherData(latitude, longitude, temperatureUnit = 'fahrenheit') {
    try {
      const params = {
        latitude: latitude,
        longitude: longitude,
        current_weather: true,
        temperature_unit: temperatureUnit,
      };

      const url = 'https://api.open-meteo.com/v1/forecast';
      const response = await axios.get(url, { params });

      const weatherContainer = document.getElementById('weather-container');
      const weather = response.data.current_weather;

      // Map of weather codes to condition text
      const weatherConditions = {
        0: 'clear sky',
        1: 'mainly clear',
        2: 'partly cloudy',
        3: 'overcast',
        45: 'fog',
        51: 'light drizzle',
        53: 'moderate drizzle',
        55: 'dense drizzle',
        61: 'slight rain',
        63: 'moderate rain',
        65: 'heavy rain',
        71: 'slight snow',
        73: 'moderate snow',
        75: 'heavy snow',
        95: 'thunderstorm'
      };

      const condition = weatherConditions[weather.weathercode] || 'Unknown';

      weatherContainer.innerHTML = `
        <h2>Temperature: ${weather.temperature}°F</h2>
        <h2> Today there will be ${condition}</h2>
      `;
    } catch (error) {
      console.error('Error fetching weather data', error);
      alert('Failed to get weather data');
    }
  }

  // Call with example coordinates (New York)
  fetchWeatherData(40.7128, -74.0060);
});