const apiKey="4bb60f958f1de983e4273b4f6ddf75d8";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// const city=document.getElementById("city");       //it is for city.innerHTML=data.name; 


const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data=await response.json();
    console.log(data);
    // city.innerHTML=data.name;               //it also working
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp+"&deg;C";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
    const icon = data.weather[0].icon;
    const location=document.querySelector(".weather-icon");
    location.src="http://openweathermap.org/img/w/"+icon+".png";
    

}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

