const city = "Seoul"
const APIKey = '4ab37a8733a3c76357704f12157ae64b';

function updateWeatherDetails(weatherData) {
    const weatherElement = document.querySelector('.weather');
    const highTempElement = document.querySelector('.high_temp');
    const lowTempElement = document.querySelector('.low_temp');
    const cityElement = document.querySelector('.city');

    weatherElement.textContent = weatherData.weather[0].description;
    highTempElement.textContent = `${Math.round(weatherData.main.temp_max)}°C`;
    lowTempElement.textContent = `${Math.round(weatherData.main.temp_min)}°C`;
    cityElement.textContent = city;
}

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(json => {
        updateWeatherDetails(json);
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });