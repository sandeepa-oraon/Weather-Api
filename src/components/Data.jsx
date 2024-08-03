function Data({data}){
    return(
        <>
            <div className="main-data home">
                {data  && (
                    
                    <div className="">
                        <div className="">
                            <h3>{data.location.name}</h3>
                        </div>
                        <p>Cloud: {data.current.cloud}</p>
                        <p>Day: {data.current.is_day}</p>
                        <p>Humidity: {data.current.humidity}</p>
                        <p>Temperature in celcius: {data.current.temp_c}</p>
                    </div>
                )}
            </div>
        </>
    )
}
export default Data