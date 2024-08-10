import { useEffect, useState, useContext } from "react"
import axios from "axios"
import { ForecastContext } from '../pages/ForecastContext';

import Temperature from "../components/today/Temperature"
import Visibility from "../components/today/Visibility";
import Wind from "../components/today/Wind";
import Condition from "../components/today/Condition";
// import ForecastData from "../components/ForecastData"

function Today() {
    const { forecastData } = useContext(ForecastContext);

    useEffect(()=>{
        // forecastToday('auto:ip')
        console.log('forecast Data in today: ', forecastData);
        
    },[forecastData])
    // console.log('hello')
    return(
        <>
            <div className="home">
                {forecastData && forecastData.forecast && forecastData.forecast.forecastday && forecastData.forecast.forecastday[0] &&(
                    <div className="Thisday ">
                        <div className="sunmoon ">
                            <div className="today">
                                <div className="today-" style={{display:'flex', alignItem: 'center', justifyContent:'space-between'}}>
                                    <h4>Sun & Moon</h4>
                                    <h4>{forecastData.location.name}</h4>
                                </div>
                                <div className="sunrise">
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-brightness-high" viewBox="0 0 16 16">
                                            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
                                        </svg>
                                    </div>
                                    <div className="rise-set">
                                        <div className="sun">
                                            <div className="riseSet">
                                                <p className="p1" style={{color:'#c5c6c7ab'}}>Rise</p>
                                                <p className="p1">{forecastData.forecast.forecastday[0].astro.sunrise}</p>
                                            </div>
                                            <div className="riseSet">
                                                <p className="p2" style={{color:'#c5c6c7ab'}}>Set</p>
                                                <p className="p2">{forecastData.forecast.forecastday[0].astro.sunset}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="moonset">
                                    <div className="moon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" fill="currentColor" className="bi bi-moon" viewBox="0 0 16 16">
                                            <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
                                        </svg>
                                        <div className="">{forecastData.forecast.forecastday[0].astro.moon_phase}</div>
                                    </div>
                                    <div className="rise-set">
                                        <div className="sun">
                                            <div className="riseSet">
                                                <p className="p1" style={{color:'#c5c6c7ab'}}>Rise</p>
                                                <p className="p1">{forecastData.forecast.forecastday[0].astro.moonrise}</p>
                                            </div>
                                            <div className="riseSet">
                                                <p className="p2" style={{color:'#c5c6c7ab'}}>Set</p>
                                                <p className="p2">{forecastData.forecast.forecastday[0].astro.moonset}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <Condition forecastData={forecastData}></Condition> */}
                        <Temperature forecastData={forecastData}/>
                        <Visibility forecastData={forecastData}/>
                        <Wind forecastData={forecastData}/>

                        <div className="Hourly-weather ">
                        {forecastData.forecast.forecastday[0].hour.map((hourData, index) => (
                                <div key={index} className={`${index} hourly`}>
                                    <h3 className="time">{hourData.time.split(" ")[1]}</h3>
                                    <img className="icon" src={hourData.condition.icon} alt={hourData.condition.text} />
                                    <h3 className="temp">{hourData.temp_c}<sup>o</sup></h3>
                                    <div className="humidity">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-droplet" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M7.21.8C7.69.295 8 0 8 0q.164.544.371 1.038c.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8m.413 1.021A31 31 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
                                            <path fillRule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87z"/>
                                        </svg>
                                        <h4 className="humid">{hourData.humidity}%</h4>
                                    </div>
                                </div>
                            ))}
                        </div>

                       
                        
                    </div>
                )}
                
            </div>
        </>
    )
}
export default Today