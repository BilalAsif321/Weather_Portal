document.getElementById('getWeather').addEventListener('click', async () => {
    const lat = document.getElementById('latitude').value;
    const lon = document.getElementById('longitude').value;
    document.getElementById('weatherResult').style.display = 'block'; // Show the result

    if (!lat || !lon) {
        alert('Please enter both latitude and longitude.');
        return;
    }

    const apiKey = '40dfa685d12465cbfafc66d3607a4bf0'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Weather data not found');

        const data = await response.json();
        const weatherInfo = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Condition: ${data.weather[0].description}</p>
        `;
        document.getElementById('weatherResult').innerHTML = weatherInfo;
    } catch (error) {
        document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
    }
});