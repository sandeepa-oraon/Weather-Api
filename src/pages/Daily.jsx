import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ForecastContext } from "./ForecastContext"

function Daily() {
    const navigate = useNavigate();
    const { forecastData } = useContext(ForecastContext);
    const [forecastDaily, setForecastDaily] = useState([]);
    const [originalIndexes, setOriginalIndexes] = useState([]);
    
    useEffect(() => {
        if (forecastData  && forecastData.forecast && forecastData.forecast.forecastday) {
            const dailyDataArray = [];
            const indexes = [];
            forecastData.forecast.forecastday.forEach((dailyData, index) => {
                dailyDataArray.push(dailyData);
                indexes.push(index);
            });
            setForecastDaily(dailyDataArray);
            setOriginalIndexes(indexes);
        }
    }, [forecastData]);
 
    const getTimeForLocation = (dateString, timeZone) => {
        const options = {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'};
        const date = new Date(dateString.replace(/-/g, '/'));
        return new Intl.DateTimeFormat('en-US', options).format(date);
    };
    
    const handleDaily = (originalIndex) => {
        navigate(`/dailyAccordian/${originalIndex}`);
    };
            
    return(
        <>
            <div className="home">

                {forecastData && (
                    <div className="date-time-daily">
                        <h3>{getTimeForLocation(forecastData.location.localtime, forecastData.location.tz_id)}</h3>
                        <h3>{forecastData.location.country}</h3>
                    </div>
                )}

                {forecastDaily && (
                    forecastDaily.map((hourData, index)=> (
                        <div className="Daily" key={index} onClick={()=>handleDaily(originalIndexes[index])} style={{cursor: 'pointer', backgroundColor:'#232D3F' }}>
                            <div style={{display: 'flex', alignItems:'center', justifyContent:'space-between'}}>
                                <img src={hourData.day.condition.icon}></img>
                                <h5>{hourData.date}</h5>
                            </div>
                            <h5 style={{display:'flex', justifyContent:'space-between', borderBottom:'1px solid #454849'}}><p>Temperature: </p><p>{hourData.day.avgtemp_c}<sup>o</sup>C</p></h5>
                            <h5 style={{display:'flex', justifyContent:'space-between', borderBottom:'1px solid #454849'}}><p>condition: </p><p>{hourData.day.condition.text}</p></h5>
                            <h5 style={{display:'flex', justifyContent:'space-between', borderBottom:'1px solid #454849'}}><p>Wind: </p><p>{hourData.day.maxwind_kph} km/h</p></h5>
                            <h5 style={{display:'flex', justifyContent:'space-between'}}><p>Precipetation: </p><p>{hourData.day.totalprecip_mm} mm</p></h5>
                                   
                        </div>
                    ))
                )}
                
            </div>
        </>
    )
}
export default Daily