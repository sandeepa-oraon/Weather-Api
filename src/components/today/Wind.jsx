function Wind({ forecastData }) {
	return (
		<>
			{
				<div className="temperature box">
					<div className="temp1">
						<div className="temp1-1">
							<h4 style={{display: 'flex', alignItems:'center', gap:'10px'}}>Wind</h4>
						</div>
					</div>
					<div className="temp2">
						<div className="celcius" >
							<p className="p3">in kilometers</p>
							<p className="">{forecastData.forecast.forecastday[0].day.maxwind_kph} km/h</p>
						</div>
						<div className="farenheit">
							<p className="p3">in meter</p>
							<p className="">{forecastData.forecast.forecastday[0].day.maxwind_mph} m/h</p>
						</div>
					</div>
				</div>
			}
		</>
	)
}
export default Wind
