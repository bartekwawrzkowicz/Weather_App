const storage = new Storage();
const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city);
const ui = new UI();

const changeBtn = document.getElementById('change-btn');

function getWeather() {
    weather.getWeather()
        .then(response => {
            ui.paint(response);
        })
        .catch(err => console.log(err));
}


changeBtn.addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    weather.changeLocation(city);
    storage.setLocationData(city)
    getWeather();
    $('#locModal').modal('hide');

})

document.addEventListener('DOMContentLoaded', getWeather);