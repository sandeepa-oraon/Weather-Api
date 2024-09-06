import { useContext, useEffect, useState } from "react"
import { ForecastContext } from "./ForecastContext"
import Accordion from 'react-bootstrap/Accordion'
import { useNavigate } from "react-router-dom"

function Hourly() {

	const navigate= useNavigate()
    const {forecastData} = useContext(ForecastContext)
	
	const [filteredForecast, setFilteredForecast] = useState([]);
    const [originalIndexes, setOriginalIndexes] = useState([]);

    useEffect(() => {
        if (forecastData) {
            // const currentTime = new Date();
            // console.log(currentTime);
            
            // currentTime.setHours(currentTime.getHours() - 1); // Subtract 1 hour from current time
            const filterForecast = [];
            const indexes = [];
            
            forecastData.forecast.forecastday[0].hour.forEach((hourData, index) => {
                // const forecastTime = new Date(hourData.time);
                // if (forecastTime >= currentTime) {
                    filterForecast.push(hourData);
                    indexes.push(index); // Store the original index. the index will we orginal array which not the one which start form 0
                // }
            });
            
            setFilteredForecast(filterForecast);
            setOriginalIndexes(indexes);
        }
    }, [forecastData]);

	const handleHourlyDetail = (originalIndex) => {
        console.log(originalIndex);
        navigate(`/hourlyDetail/${originalIndex}`);
    };

	return (
			<>
				<div className="hourly-">
				{filteredForecast.map((hourData, index) => (
					<div className="hour" key={index} >
						<Accordion defaultActiveKey="0">
							<Accordion.Item eventKey={index.toString()}>
								<Accordion.Header >
									<div className="accordian-">
										<div className="time-icon-temp">
											<h5 className="time-h">{hourData.time.split(" ")[1]}</h5>
											<img className="icon-h" src={hourData.condition.icon} alt={hourData.condition.text} />
											<h3 className="temp-h">{hourData.temp_c}<sup>o</sup></h3>
										</div>
										<div className="humidity-h">
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-droplet" viewBox="0 0 16 16">
												<path fillRule="evenodd" d="M7.21.8C7.69.295 8 0 8 0q.164.544.371 1.038c.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8m.413 1.021A31 31 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z" />
												<path fillRule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87z" />
											</svg>
											<h4 className="humid-h">{hourData.humidity}%</h4>{" "}
										</div>
									</div>
									<div className="acc1 ">
										<div className="condn-h-">{hourData.condition.text}</div>
										<div className="condn-h-"><p>Cloud Cover</p><div> {hourData.cloud}</div></div>
									</div>
									<div className="acc2">	
										<div className="condn-h"><p>RealFeel<sup>®</sup></p> <div> {hourData.feelslike_c}<sup>o</sup></div></div>	
										<div className="condn-h"><p>Heat Index</p> <div> {hourData.heatindex_c}<sup>o</sup></div></div>
									</div>
									<div className="acc2 acc2-">	
										<div className="condn-h"><p>Wind</p> <div> {hourData.wind_dir} {hourData.wind_mph} m/h</div></div>	
										<div className="condn-h"><p>Wind Gusts</p> <div> {hourData.gust_mph} m/h</div></div>
									</div>
								</Accordion.Header>
								<Accordion.Body>
									<div className="acc3 ">	
										<div className="condn-h con"><p>Wind Degree</p> <div> {hourData.wind_degree}</div></div>	
										<div className="condn-h con"><p>Wind Chill</p> <div> {hourData.windchill_c}<sup>o</sup></div></div>
									</div>
									<div className="">
										<button className="" onClick={() => handleHourlyDetail(originalIndexes[index])}>Details</button>
									</div>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</div>
				))}					
				</div>
			</>
		)
}
export default Hourly