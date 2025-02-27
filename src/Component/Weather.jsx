import "./Weather.css"
import axios from "axios"
import search_icon from "../Assets/search.png"
import clear_icon from "../Assets/clear.png"
import cloud_icon from "../Assets/cloud.png"
import drizzle_icon from "../Assets/drizzle.png"
import rain_icon from "../Assets/rain.png"
import snow_icon from "../Assets/snow.png"
import wind_icon from "../Assets/wind.png"
import humidity_icon from "../Assets/humidity.png"
import { useEffect, useRef, useState } from "react"

const backGrounds={
    Clear:'/assets/clearday.jpg',
    Clouds:'/assets/cloudyDay.jpg',
    Rain:'/assets/rainyday.jpg',
    Snow:'/assets/coldday.jpg',
    Hot:'/assets/HotDay.jpg',
    Fog:'/assets/fog.jpg'
};
function WeatherFunc(){
    const[weather,setWeather]=useState(null)
    const[background,setBackground]=useState(backGrounds.Clear)
    const InputRef=useRef()

    const allIcons={
        "01d":clear_icon,
        "01n":clear_icon,
        "02d":cloud_icon,
        "02n":cloud_icon,
        "03d":cloud_icon,        
        "03n":cloud_icon,
        "04d":drizzle_icon,
        "04n":drizzle_icon,
        "09d":rain_icon,
        "09n":rain_icon,
        "10d":rain_icon,
        "10n":rain_icon,
        "13d":snow_icon,
        "13n":snow_icon  
    }

  async function Search(city){
    if(city===""){
        alert("Enter City Name");
        return;
    }
    try{
    const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${'cbebac4ff4ba1d88e2cdf5fb6a5c058b' }`)
    const data=response.data
    if(!data.weather|| data.weather.length===0){
        return;
    }
    const weatherCondition=data.weather[0].main;
    setBackground(backGrounds[weatherCondition] ||backGrounds.Clear)
        const Icon=allIcons[data.weather[0].icon] || clear_icon;
        setWeather({
            humidity:data.main.humidity,
            windSpeed:data.wind.speed,
            temperature:Math.floor(data.main.temp),
            location:data.name,
            icon:Icon
        })
     }catch(error) {
        setWeather(null);
        alert(" Please enter a valid city name");
     }
     
    }
    useEffect(()=>{
        Search("America")
    },[])
    return(
        <>
        <div className="bgImg" style={{backgroundImage:`url("${background}")`}}>

            <div className="weather">

                <div className="search-bar">
                    <input type="text" placeholder="Search" ref={InputRef}/>
                    <img src={search_icon} onClick={()=>Search(InputRef.current.value)}/>
                </div>
            {weather?<>
              <img src={weather.icon}/>
              <p className='temp'>{weather.temperature}°c
              </p>
              <p className="locate">{weather.location}</p>

              <div className="weather-data">
                <div className="col">
                    <img src={humidity_icon}/>
                     <div>
                        <p>{weather.humidity}</p>
                        <span>Humidity</span>
                     </div>
                </div>
                <div className="col">
                    <img src={wind_icon}/>
                     <div>
                        <p>{weather.windSpeed}Km/h</p>
                        <span>Wind Speed</span>
                     </div>
                </div>
              </div>
              </>:<></>}
        
              </div>
            </div>  
        </>
    )
}
export default WeatherFunc