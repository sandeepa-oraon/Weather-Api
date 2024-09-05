
function Temperature({ forecastData, hourData }) {
    return (
        <>
            <div className="temperature box" style={{width:'95%'}}>
                <div className="temp1">
                    <div className="temp1-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-thermometer" viewBox="0 0 16 16">
                            <path d="M8 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                            <path d="M8 0a2.5 2.5 0 0 0-2.5 2.5v7.55a3.5 3.5 0 1 0 5 0V2.5A2.5 2.5 0 0 0 8 0M6.5 2.5a1.5 1.5 0 1 1 3 0v7.987l.167.15a2.5 2.5 0 1 1-3.333 0l.166-.15z" />
                        </svg>
                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>Temperature<p style={{ fontSize: '13px', marginBottom: '-10px' }}>({forecastData.current.condition.text})</p></h4>
                    </div>
                    <div className="temp1-2">
                        <img src={forecastData.current.condition.icon} alt="" />
                    </div>
                </div>
                <div className="temp3">
                    <div className="temp3_" style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 10px' }}>
                        <h5 style={{ color: '#c5c6c7ab' }}>minimum temperature</h5>
                        <div className="temp3-">
                            <p className="">{hourData.day.mintemp_c}°C</p>
                            <p className="">{hourData.day.mintemp_f}°F</p>
                        </div>
                    </div>
                    <div className=" temp3_" style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 10px' }}>
                        <h5 style={{ color: '#c5c6c7ab' }}>Average temperature</h5>
                        <div className="temp3-">
                            <p className="">{hourData.day.avgtemp_c}°C</p>
                            <p className="">{hourData.day.avgtemp_f}°F</p>
                        </div>
                    </div>
                    <div className="temp3_" style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 10px' }}>
                        <h5 style={{ color: '#c5c6c7ab' }}>Maximum temperature</h5>
                        <div className="temp3-">
                            <p className="">{hourData.day.maxtemp_c}°C</p>
                            <p className="">{hourData.day.maxtemp_f}°F</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Temperature