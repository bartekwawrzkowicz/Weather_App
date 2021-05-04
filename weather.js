class Weather {
    constructor(city) {
        this.apiKey = '5e0f3ae4d36904370285515e713265f6';
        this.city = city;
    }

    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&lang=pl&APPID=${this.apiKey}`);


        const responseData = await response.json();

        return responseData;

    }

    changeLocation(city) {
        this.city = city;
    }
}

