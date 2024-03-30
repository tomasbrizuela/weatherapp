let apiKey = "2f60190d87e69fa4e3e7b32c09d8a70e";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let city = document.getElementById('input');
let go = document.getElementById('lupa');


async function checkWeather (city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector('.tempTomorrow').innerHTML = Math.round(data.main.feels_like) + "°c";
    console.log(data);
};


go.addEventListener('click', function(){
    checkWeather(city.value);
});

