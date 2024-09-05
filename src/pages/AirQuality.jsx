import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Polutant from '../components/AirQuality/Polutant';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import { useContext } from "react"

import ForecastData from "../components/ForecastData"
import { ForecastContext } from "./ForecastContext"

function AirQuality() {
    const { forecastData } = useContext(ForecastContext)
    return (
        <>
            {forecastData && forecastData.current && forecastData.current.air_quality && (


    

                <div className="air-quality" style={{ border: '1px solid #454849', width: '60vw', color: '#cfe2ff', padding: '20px', borderRadius: '20px' }}>
                    
                    
                    <div className="air-" >
                        <div className="air">
                            <h3>CO</h3>
                            <p>(Carbon Monoxide)</p>
                        </div>
                        <h3>{forecastData.current.air_quality.co} µg/m³</h3>
                    </div>
                    <div className="air-" >
                        <div className="air">
                            <h3>NO<sup>2</sup></h3>
                            <p>(Nitrogen Dioxide)</p>
                        </div>
                        <h3>{forecastData.current.air_quality.no2} µg/m³</h3>
                    </div>
                    <div className="air-" >
                        <div className="air">
                            <h3>O<sup>3</sup></h3>
                            <p>(Ozone)</p>
                        </div>
                        <h3>{forecastData.current.air_quality.o3} µg/m³</h3>
                    </div>
                    <div className="air-" >
                        <div className="air">
                            <h3>PM2.5</h3>
                            <p>(Particulate Matter &le; 2.5µm)</p>
                        </div>
                        <h3>{forecastData.current.air_quality.pm2_5} µg/m³</h3>
                    </div>
                    <div className="air-" >
                        <div className="air">
                            <h3>PM10</h3>
                            <p>(Particular matter &le; 10µm)</p>
                        </div>
                        <h3>{forecastData.current.air_quality.pm10} µg/m³</h3>
                    </div>
                    <div className="air-" style={{ borderBottom: 'none' }}>
                        <div className="air">
                            <h3>SO<sup>2</sup></h3>
                            <p>(Sulphur Dioxide)</p>
                        </div>
                        <h3>{forecastData.current.air_quality.so2} µg/m³</h3>
                    </div>
                    

                </div>
            )}
            <Polutant forecastData={forecastData}/>
        </>
    )
}
export default AirQuality