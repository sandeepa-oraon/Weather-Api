import { useContext } from "react"
import { useParams } from "react-router-dom"
import { ForecastContext } from "./ForecastContext"

function HourlyDetail() {
    const { index }= useParams()
    const { forecastData }= useContext(ForecastContext)

    if (!forecastData) {
        return <div>Loading...</div>
    }
    const hourData= forecastData.forecast.forecastday[0].hour[index]
    return(
        <>
            <div className="hourlyDetail">
                {/* <h2>Hourly Detail</h2> */}
                <div>
                    <div className="hd hd-" style={{alignItems: 'center'}}>
                        <h3>{hourData.time}</h3>
                        <img src={hourData.condition.icon} alt={hourData.condition.text} />
                        <p>{hourData.condition.text}</p>
                    </div>
                    <div className="temp_hd hd">
                        <h4>Temperature </h4>
                        <div className="temp-hd hd-">
                            <p>Celcius: {hourData.temp_c}°C</p>
                            <p>Faherenheit: {hourData.temp_f}°F</p>
                        </div>
                    </div>
                    <div className="temp_hd hd">
                        <h4>Precipitation </h4>
                        <div className="temp-hd hd-">
                            <p> {hourData.temp_c} inch</p>
                            <p> {hourData.temp_f} mm</p>
                        </div>
                    </div>
                    <div className="wind hd">
                        <h4>Wind</h4>
                        <div className="wind-hd hd-">
                            <p>Wind Direction: {hourData.wind_dir}</p>
                            <p>Wind Degree: {hourData.wind_degree}°</p>
                        </div>
                        <div className="hd-">
                            <p>Wind Speed: </p>
                            <p>{hourData.wind_mph} m/h</p>
                            <p>{hourData.wind_kph} km/h</p>
                        </div>
                        <div className="hd-">
                            <p>Wind Chill: </p>
                            <p>{hourData.windchill_c}°C</p>
                            <p>{hourData.windchill_f}°F</p>
                        </div>
                        <div className="hd-">
                            <p>Gusts:</p>
                            <p> {hourData.gust_mph} m/h</p>
                            <p> {hourData.gust_kph} k/h</p>
                        </div>
                    </div>
                    <div className="temp_hd hd">
                        <h4>Dew Point </h4>
                        <div className="temp-hd hd-">
                            <p>Celcius: {hourData.dewpoint_c}°C</p>
                            <p>Faherenheit: {hourData.dewpoint_f}°F</p>
                        </div>
                    </div>
                    <div className="hd">
                        <div className="hd-">
                            <p>Feels Like: </p>
                            <p>{hourData.feelslike_c}°C</p>
                            <p>{hourData.feelslike_f} F</p>
                        </div>
                        <div className=" hd-">
                            <p>Visibility: </p>
                            <p>{hourData.vis_km}km</p>
                            <p>{hourData.vis_miles} miles</p>
                        </div>
                        <div className="hd-">
                            <p>Humidity: </p>
                            <p>{hourData.humidity}</p>
                        </div>
                        <div className="hd-">
                            <p>Cloud cover: </p>
                            <p>{hourData.cloud}</p>
                        </div>   
                        <div className="hd-">
                            <p>Ultraviolet intensity: </p>
                            <p>{hourData.uv}</p>
                        </div>
                        <div className="hd-">
                            <p>Pressure: </p>
                            <p>{hourData.pressure_in} inch</p>
                            <p>{hourData.pressure_mb} mb</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HourlyDetail