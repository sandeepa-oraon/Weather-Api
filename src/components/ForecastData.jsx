function ForecastData({forecastData}){
    console.log('forecast Data from component: ',forecastData);
    return(
        <>
            <div className="forecast-data home">
                {forecastData && forecastData.forecast && forecastData.forecast.forecastday && forecastData.forecast.forecastday[0] &&(
                    <div className="">
                        <p>sunrise: {forecastData.forecast.forecastday[0].astro.sunrise}</p>
                        <p>sunset: {forecastData.forecast.forecastday[0].astro.sunset}</p>
                        <p>moonrise: {forecastData.forecast.forecastday[0].astro.moonrise}</p>
                        <p>moonset: {forecastData.forecast.forecastday[0].astro.moonset}</p>
                        <p>Max Temp: </p>
                        <div className="">
                            {
                                forecastData.forecast.forecastday[0].astro.is_moon_up ? <p>Night</p>: <p>Morning</p>
                            }
                        </div>
                    </div>
                )}
            </div>
        
        </>
    )
}
export default ForecastData