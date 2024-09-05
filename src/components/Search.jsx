import { useState, useRef, useContext } from "react"
import axios from 'axios'
import { useEffect } from "react"
import { ForecastContext } from '../pages/ForecastContext';

function Search(){
    const [data, setData]= useState(null)
    const locationInput= useRef('')
    const { setForecastData } = useContext(ForecastContext);
    // const [forecastData, setForecastData]= useState(null)

    const api= 'https://api.weatherapi.com/v1'
    const key= '1c091415b74446efaa6154754242907'
    const weatherMethod= '/current.json'
    const forecastMethod= '/forecast.json'

    const fetchForecastData= (location) =>{
        // const location= 'auto:ip'
        const apikeyforecast= `${api}${forecastMethod}?key=${key}&q=${location}&days=14&alerts=yes&aqi=yes`
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
        console.log(data)
    }, [data])


    return(
        <div className="">
            <input type="text" ref={locationInput} placeholder="search your place" name="" id="" />
            <button type="submit" onClick={()=> handleLocation(locationInput.current.value)}>Search</button>

        </div>
    )
}
export default Search