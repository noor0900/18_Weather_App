const btn = document.querySelector(".btn");
const cityName = document.querySelector(".city");
const time = document.querySelector(".time");
const datee = document.querySelector(".date");
const temp = document.querySelector(".temp");
const des = document.querySelector(".des");
const Feels_like = document.querySelector(".Feels_like");
const rain = document.querySelector(".rain");
const wind = document.querySelector(".wind");
const max_min = document.querySelector(".max_min");


const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const dayNames = [
    "Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Satur"
];

const apiKey = "2a2b6cb019c8b313a870e3b2ae408592";
let city = "Lahore";

setInterval(() => {
    let sec = new Date().getSeconds();
    let minutes = new Date().getMinutes();
    let hours = new Date().getHours();
    let date = new Date().getDate();
    let month = new Date().getMonth(); 
    let FullYear = new Date().getFullYear();+1
    let day = new Date().getDay();  
   
    if (sec < 10) {
        sec = `0${sec}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (hours < 10) {
        hours = `0${hours}`;
    }
    
    if (hours > 12) {
        hours = `0${hours - 12}`;
    }

    if (date < 10) {
        date = `0${date}`;
    }

    time.innerText = `${hours}:${minutes}:${sec}`;
    datee.innerText = `${dayNames[day]}, ${date} ${monthNames[month]} ${FullYear}`;
    
}, 1000);

fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
)
.then((res) => res.json())
.then((data) => {
    cityName.innerHTML = data.name;
     temp.innerHTML = `${parseInt(data.main.temp)}°c`;
     des.innerHTML = `humidity: ${data.weather[0].description}`;
    Feels_like.innerHTML = `Feels_like: ${parseInt(data.main.feels_like)}°c`;
    rain.innerHTML = `Rain: ${parseInt(data.main.humidity)}%`;
    wind.innerHTML = `Wind: ${parseInt(data.wind.speed)}km/h`;
    max_min.innerHTML = `Temp_Max: ${parseInt(data.main.temp_max)}°c | Temp_ Min: ${parseInt(data.main.temp_min)}°c`;
    
});

btn.onclick = () => {
    city = search.value;
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
    .then((res) => res.json())
    .then((data) => {
        
        console.log(data.main.temp_max);
        cityName.innerHTML = data.name;
        temp.innerHTML = `${parseInt(data.main.temp)}°c`;
        des.innerHTML = `humidity: ${data.weather[0].description}`;
        Feels_like.innerHTML = `Feels_like: ${parseInt(data.main.feels_like)}°c`;
        rain.innerHTML = `Rain: ${parseInt(data.main.humidity)}%`;
        wind.innerHTML = `Wind: ${parseInt(data.wind.speed)}km/h`;
        max_min.innerHTML = `Temp_Max: ${parseInt(data.main.temp_max)}°c | Temp_Min: ${parseInt(data.main.temp_min)}°c`;

    });
};
