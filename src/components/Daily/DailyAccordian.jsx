import { useContext } from "react"
import { useParams } from "react-router-dom"
import { ForecastContext } from "../../pages/ForecastContext"

import Astro from "./Astro"
import Temperature from './Temperature'
import Visibility from "./Visibility"
import Wind from './Wind'
import HourlyWeather from "./HourlyWeather"

function DailyAccordian() {
    const { index }= useParams()
    const { forecastData }= useContext(ForecastContext)

    if (!forecastData) {
        return <div>Loading...</div>
    }
    
    const hourData= forecastData.forecast.forecastday[index]
    const timeData= forecastData.forecast.forecastday[index].hour[index]
    
    return(
        <>
            <div className="hourlyDetail">
                {/* <h2>Hourly Detail</h2> */}
                <div className="" style={{height:'450px' ,display:'flex', gap:'0px'}}>
                    <div className="" style={{width:'60%'}}>
                        <Astro forecastData={forecastData} hourData={hourData}/>
                        <Temperature forecastData={forecastData} hourData={hourData}/>
                    </div>
                    <div className="hourlyWeather-Daily" style={{backgroundColor:'#232D3f', padding:'10px', margin:'0px 0px 10px 0px', overflowY:'scroll', overflowX:'hidden', border:'1px solid #454849', borderRadius:'12px'}}>
                        <HourlyWeather forecastData={forecastData} index={index}/>    
                    </div>
                </div>
                <div className="" style={{display:'flex', gap:'20px', alignItems:'center'}}>
                    <Wind hourData={hourData}/>
                    <Visibility hourData={hourData}/>
                </div>
                
            </div>
        </>
    )
}
export default DailyAccordian