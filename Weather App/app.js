document.addEventListener("DOMContentLoaded", () => {
    const search = document.querySelector(".search-input");
    const searchBtn = document.querySelector(".search-btn");
    const toggleBtn = document.querySelector(".toggle-btn");
    const themeBtn = document.querySelector(".theme-btn");
    const card = document.querySelector(".card");
    const forecastDiv = document.querySelector(".forecast");
    const wrapper = document.querySelector(".wrapper");
    const loading = document.querySelector(".loading");
    const favoritesContainer = document.querySelector(".favorites-container");

    let isCelsius = true;
    let isDark = true;
    const key = "13d3557911484c69e8e4e29b09c4f1da";

    let currentWeatherData = null;
    let currentForecastData = null;

    // Load favorites from localStorage
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const showLoading = (show) => loading.style.display = show ? "block" : "none";

    const saveFavorites = () => localStorage.setItem("favorites", JSON.stringify(favorites));

    const renderFavorites = () => {
        favoritesContainer.innerHTML = "";
        if (favorites.length === 0) return;
        favorites.forEach(city => {
            const btn = document.createElement("button");
            btn.className = "fav-btn";
            btn.textContent = city;
            btn.addEventListener("click", () => getWeather(city));
            favoritesContainer.appendChild(btn);
        });
    };

    const formatTime = (timestamp, timezone) => {
        const date = new Date((timestamp + timezone) * 1000);
        return date.toUTCString().match(/(\d{2}:\d{2})/)[0];
    };

    const renderWeather = () => {
        if (!currentWeatherData || !currentForecastData) return;

        const data = currentWeatherData;
        const mainWeather = data.weather[0].main.toLowerCase();
        wrapper.className = `wrapper bg-${mainWeather} ${isDark ? "dark" : "light"}`;

        const temp = isCelsius ? Math.round(data.main.temp) : Math.round(data.main.temp * 9/5 + 32);
        const tempUnit = isCelsius ? "°C" : "°F";

        card.innerHTML = `
            <div class="today-card">
                <h2>${data.name}, ${data.sys.country}</h2>
                <h3>${temp}${tempUnit}</h3>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon">
                <p style="text-transform: capitalize;">${data.weather[0].description}</p>
                <div class="bottom-cards">
                    <div class="humidity">
                        <img src="images/humidity.svg" alt="Humidity">
                        <span>${data.main.humidity}% HUMIDITY</span>
                    </div>
                    <div class="divider"></div>
                    <div class="pressure">
                        <img src="images/pressure.svg" alt="Pressure">
                        <span>${data.main.pressure} hPa</span>
                    </div>
                    <div class="divider"></div>
                    <div class="sun">
                        <img src="images/sun.svg" alt="Sun">
                        <span>${formatTime(data.sys.sunrise, data.timezone)} | ${formatTime(data.sys.sunset, data.timezone)}</span>
                    </div>
                    <div class="divider"></div>
                    <div class="wind">
                        <img src="images/wind.svg" alt="Wind">
                        <span>${data.wind.speed} m/s</span>
                    </div>
                </div>
            </div>`;

        // Forecast
        const forecastByDate = {};
        currentForecastData.list.forEach(item => {
            const date = item.dt_txt.split(" ")[0];
            if (!forecastByDate[date]) forecastByDate[date] = [];
            forecastByDate[date].push(item);
        });

        const dates = Object.keys(forecastByDate).slice(1, 6);
        forecastDiv.innerHTML = "";

        dates.forEach((date, index) => {
    const dayItems = forecastByDate[date];
    const temps = dayItems.map(i => i.main.temp);
    const minTemp = isCelsius ? Math.round(Math.min(...temps)) : Math.round(Math.min(...temps) * 9/5 + 32);
    const maxTemp = isCelsius ? Math.round(Math.max(...temps)) : Math.round(Math.max(...temps) * 9/5 + 32);
    const iconItem = dayItems.find(i => i.dt_txt.includes("12:00:00")) || dayItems[0];
    const icon = iconItem.weather[0].icon;

    const forecastItem = document.createElement("div");
    forecastItem.className = "forecast-item";
    forecastItem.style.animationDelay = `${index * 0.1}s`; // stagger
    forecastItem.innerHTML = `
        <h5>${new Date(date).toLocaleDateString("en-US", { weekday: "short" })}</h5>
        <img src="https://openweathermap.org/img/wn/${icon}.png" alt="Weather icon">
        <p>${minTemp}°/${maxTemp}°</p>`;
    forecastDiv.appendChild(forecastItem);
});

    };

    const getWeather = async (city) => {
        if (!city) return;
        showLoading(true);

        try {
            const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
            const response = await fetch(URL);
            const data = await response.json();

            if (data.cod !== 200) {
                card.innerHTML = `<p style="text-align:center; color:red;">City not found!</p>`;
                forecastDiv.innerHTML = "";
                wrapper.className = `wrapper ${isDark ? "dark" : "light"}`;
                showLoading(false);
                return;
            }

            currentWeatherData = data;

            const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`;
            const forecastResponse = await fetch(forecastURL);
            const forecastData = await forecastResponse.json();

            currentForecastData = forecastData;

            // Save to favorites if not already
            if (!favorites.includes(data.name)) {
                favorites.push(data.name);
                saveFavorites();
                renderFavorites();
            }

            renderWeather();

        } catch (error) {
            console.error("Error fetching weather:", error);
            card.innerHTML = `<p style="text-align:center; color:red;">Failed to fetch data!</p>`;
            forecastDiv.innerHTML = "";
        } finally {
            showLoading(false);
        }
    };

    // Events
    searchBtn.addEventListener("click", () => getWeather(search.value));
    search.addEventListener("keypress", (e) => { if (e.key === "Enter") getWeather(search.value); });

    toggleBtn.addEventListener("click", () => {
        isCelsius = !isCelsius;
        renderWeather(); // Only update temperatures without fetching again
    });

    themeBtn.addEventListener("click", () => {
    isDark = !isDark;

    // Toggle wrapper theme
    wrapper.classList.toggle("dark", isDark);
    wrapper.classList.toggle("light", !isDark);

    // Toggle body theme
    document.body.classList.toggle("dark", isDark);
    document.body.classList.toggle("light", !isDark);

    // Toggle inputs & buttons theme
    const elements = document.querySelectorAll(".search-input, .search-btn, .toggle-btn, .theme-btn");
    elements.forEach(el => {
        el.classList.toggle("dark", isDark);
        el.classList.toggle("light", !isDark);
    });
     // Update emoji
      themeBtn.textContent = isDark ? "🌙" : "☀️";

});


    renderFavorites();
});
