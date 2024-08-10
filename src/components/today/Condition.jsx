function Condition({forecastData}){
    return(
        <>
            <div className="box condition">
                <h4>{forecastData.current.condition.text}</h4>
                <img className="" src={forecastData.current.condition.icon} />
            </div>
        </>
    )
}
export default Condition