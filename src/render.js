  document.addEventListener('DOMContentLoaded', function(){
    const axios = require ('axios')

    async function fetchWeatherData (latitude, longitude, temperatureUnit = 'fahrenheit'){
    try{
      const params = {
        latitude: latitude,
        longitude: longitude,
        current_weather: true,
        unit: temperatureUnit,
      }
      const url = 'https://api.open-meteo.com/v1/forecast'
      const response = await axios.get(url, {params});
    }
    catch(error){
      console.error('Error in getting weather data', error);
      alert ('Failed to get weather data');
    }

    }
  }
)