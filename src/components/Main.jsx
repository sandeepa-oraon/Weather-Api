import { useRef } from "react"
import { useState } from "react"
import axios from 'axios'
import { useEffect, useContext } from "react"
import { ForecastContext} from '../pages/ForecastContext'

import Carousels from "./Carousels"
import Temperature from "./today/Temperature"
import Visibility from "./today/Visibility"
import Wind from "./today/Wind"

import ForecastData from "./ForecastData"
import Data from "./Data"

import Today from "../pages/Today"


function Main() {
    
    const {forecastData}= useContext(ForecastContext)
    const [data, setData]= useState(null)
    const locationInput= useRef('')
    const [forecastData1, setForecastData]= useState(null)
    // const [timeZoneData, setTimeZoneData]= useState(null)

    const api= 'http://api.weatherapi.com/v1'
    const key= '1c091415b74446efaa6154754242907'
    const weatherMethod= '/current.json'
    const forecastMethod= '/forecast.json'


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
            <Carousels forecastData={forecastData1}/>
            
            {/* <ForecastData forecastData={forecastData} setForecastData={setForecastData}/>  */}
            
            {/* <Temperature forecastData={forecastData}/> */}
            <div className="main-div">
                {forecastData && (
                    <div className="main-div-">
                        <div className="flex-item">
                            <Temperature forecastData={forecastData} />
                        </div>
                        <div className="flex-item">
                            <Visibility forecastData={forecastData} />
                        </div>
                        <div className="flex-item">
                            <Wind forecastData={forecastData} />
                        </div>
                        
                  </div>
                )}
            </div>
            <Data data={data}/>
            


        </div>
    )
}
export default Main