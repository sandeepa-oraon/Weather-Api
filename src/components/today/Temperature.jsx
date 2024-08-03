function Temperature({ forecastData }) {
	return (
		<>
			{
				<div className="temperature">
					<div className="temp1">
						<div className="temp1-1">
							<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-thermometer" viewBox="0 0 16 16">
								<path d="M8 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
								<path d="M8 0a2.5 2.5 0 0 0-2.5 2.5v7.55a3.5 3.5 0 1 0 5 0V2.5A2.5 2.5 0 0 0 8 0M6.5 2.5a1.5 1.5 0 1 1 3 0v7.987l.167.15a2.5 2.5 0 1 1-3.333 0l.166-.15z" />
							</svg>
							<h4>Temperature</h4>
						</div>
						<div className="temp1-2">
							<img src={forecastData.current.condition.icon} alt="" />
						</div>
					</div>
					<div className="temp2">
						<div className="celcius" >
							<p className="p3">in Celcius</p>
							<p className="">
								{forecastData.current.temp_c}
								<sup>o</sup>
							</p>
						</div>
						<div className="farenheit">
							<p className="p3">in fahrenheit</p>
							<p className="">{forecastData.current.temp_f}</p>
						</div>
					</div>
				</div>
			}
		</>
	)
}
export default Temperature
