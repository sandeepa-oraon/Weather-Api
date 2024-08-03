import { useRef } from "react"
import { useState } from "react"
import axios from 'axios'
import { useEffect } from "react"
import Carousels from "./Carousels"

import ForecastData from "./ForecastData"
import Data from "./Data"


function Main() {
    
    const [data, setData]= useState(null)
    const locationInput= useRef('')
    const [forecastData, setForecastData]= useState(null)
    // const [timeZoneData, setTimeZoneData]= useState(null)

    const api= 'http://api.weatherapi.com/v1'
    const key= '1c091415b74446efaa6154754242907'
    const weatherMethod= '/current.json'
    const forecastMethod= '/forecast.json'


    const fetchForecastData= (location) =>{
        // const location= 'auto:ip'
        const apikeyforecast= `${api}${forecastMethod}?key=${key}&q=${location}`
        axios.get(apikeyforecast)
        .then((res)=>{
            setForecastData(res.data)
            console.log("Forecast data: ", res.data);
        })
    }
    useEffect(()=>{
        fetchForecastData('auto:ip')
    },[])
    

    const handleLocation = (location) => {
        const apiKeyWeather = `${api}${weatherMethod}?key=${key}&q=${location}`;
        fetchForecastData(location)
        axios.get(apiKeyWeather)
            .then((res) => {
                if (res.data) {
                    setData(res.data);
                }
            })
            .catch((error) => {
                console.error("Error fetching weather data:", error);
            });

        // Clear the input field if location is manually entered
        if (locationInput.current) {
            locationInput.current.value = '';
        }
    };
    useEffect(() =>{
        setData(data)
        console.log("data: ",data)
    }, [data])


   
    return(
        <div className="main" style={{ maxWidth: '1880px'}}>
            <div className="forecast-data home">
                {data && data.forecast && data.forecast.forecastday && forecast.forecastday[0] && (
                    <div className="">
                        <div className="" style={{display:'flex', alignItems:"center", gap:'30px'}}>
                            <img src={data.forecast.forecastday[0].day.condition.icon} />
                        
                            <h5>{data.forecast.forecastday[0].date}</h5>
                        </div>
                        
                    </div>
                )}
            </div>
            <Carousels forecastData={forecastData}/>

            <input type="text" ref={locationInput} placeholder="country" name="" id="" />
            <button type="submit" onClick={()=> handleLocation(locationInput.current.value)}>Search</button>



            <ForecastData forecastData={forecastData} setForecastData={setForecastData}/>           
            <Data data={data}/>
            


        </div>
    )
}
export default Main