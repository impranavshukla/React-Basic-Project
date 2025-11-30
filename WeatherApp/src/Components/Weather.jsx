import React, { useEffect, useState } from 'react'
import './Weather.css'
import clearIcon from '../assets/clear.png'
import cloudIcon from '../assets/cloud.png'
import drizzleIcon from '../assets/drizzle.png'
import humidityIcon from '../assets/humidity.png'
import rainIcon from '../assets/rain.png'
import searchIcon from '../assets/search.png'
import snowIcon from '../assets/snow.png'
import windIcon from '../assets/wind.png'
import { useRef } from 'react'

const Weather = () => {
    const inputRef=useRef();

    const [weatherData,setWeatherData]=useState(false);

    const allIcons = {
"01d": clearIcon,
"01n": clearIcon,
"02d": cloudIcon,
"02n": cloudIcon,
"03d": cloudIcon,
"03n": cloudIcon,
"04d": drizzleIcon,
"04n": drizzleIcon,
"09d": rainIcon,
"09n": rainIcon,
"10d": rainIcon,
"10n": rainIcon,
"13d": snowIcon,
"13n": snowIcon,

}

  const search= async (city)=>{
    if(city===""){
        alert("Please enter a city name");
        return;
    }
     try{
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_KEY}`;
const response=await fetch(url);
const data=await response.json();
if(!response.ok){
alert(data.message);
return;

}
console.log(data)
const icon=allIcons[data.weather[0].icon] || clearIcon;
setWeatherData({
    humidity:data.main.humidity,
    temprature:Math.floor(data.main.temp),
    windSpeed:data.wind.speed,
    location:data.name,
    icon:icon,
})
     }
     catch(error){
        setWeatherData(false);
        console.log(error);
     }
  }

  useEffect(()=>{
   search("Allahabad");
  },[])


  return (
    <div className='weather'>
      <div className='search-bar'>
        <input ref={inputRef} type="text" placeholder='Search...' />
        <img src={searchIcon} alt="" onClick={()=> search(inputRef.current.value)}/>
      </div>
      {setWeatherData?<>  
           <img src={weatherData.icon} alt="" className='weather-icon'/>
      <p className='temprature'>{weatherData.temprature} °C</p>
      <p className='location'>{weatherData.location}</p>
      <div className="weather-data">
        <div className="col">
            <img src={humidityIcon} alt="" />
            <div>
                <p>{weatherData.humidity}</p>
                <span>Humidity</span>
            </div>
        </div>
        <div className="col">
            <img src={windIcon} alt="" />
            <div>
                <p>{weatherData.windSpeed} km/h</p>
                <span>Wind Speed</span>
            </div>
        </div>
      </div>
        </>:<></>}
      
    </div>
  )
}

export default Weather
