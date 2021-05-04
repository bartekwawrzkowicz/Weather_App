class UI {
    constructor() {
        this.location = document.getElementById('location');
        this.description = document.getElementById('description');
        this.icon = document.getElementById('icon');
        this.temperature = document.getElementById('temperature');
        this.feelsLike = document.getElementById('feels-like');
        this.sunrise = document.getElementById('sunrise');
        this.sunset = document.getElementById('sunset');
    }

    paint(weather) {
        this.location.textContent = weather.name;
        this.description.textContent = weather.weather[0].description;
        let iconCode = weather.weather[0].icon;
        let iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
        this.icon.setAttribute('src', iconUrl);

        this.temperature.textContent = `TEMPERATURA: ${weather.main.temp.toFixed(1)}°C`;
        this.feelsLike.textContent = `ODCZUWALNA: ${weather.main.feels_like.toFixed(1)}°C`;
        let sunriseVar = weather.sys.sunrise
        let sunsetVar = weather.sys.sunset

        const calculateSunrise = (timeStamp) => {
            let time = new Date(timeStamp * 1000);

            let hours = time.getUTCHours().toString().padStart(2, 0);
            let minutes = time.getUTCMinutes().toString().padStart(2, 0);
            let seconds = time.getUTCSeconds().toString().padStart(2, 0);

            this.sunrise.textContent = `WSCHÓD SŁOŃCA: ${hours}:${minutes}:${seconds}`
        }

        const calculateSunset = (timeStamp) => {
            let time = new Date(timeStamp * 1000);

            let hours = time.getUTCHours().toString().padStart(2, 0);
            let minutes = time.getUTCMinutes().toString().padStart(2, 0);
            let seconds = time.getUTCSeconds().toString().padStart(2, 0);

            this.sunset.textContent = `ZACHÓD SŁOŃCA: ${hours}:${minutes}:${seconds}`
        }

        calculateSunrise(sunriseVar);
        calculateSunset(sunsetVar);
    }

}

