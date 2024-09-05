import { useEffect } from "react";
import ShowMoreText from "react-show-more-text";

function Polutant({ forecastData }) {
    const executeOnClick = (isExpanded) => {
            console.log(isExpanded);
    }        
    return (
        <>
            <div className="">
                {forecastData && forecastData.current && forecastData.current.air_quality && (
                    <div className="">
                        <div className="" style={{marginTop:' 20px', border: '1px solid #454849', width: '60vw', color: '#cfe2ff', padding: '20px', borderRadius: '20px' }}>
                            <div className="air-" >
                                <div className="air" >
                                    <h3>CO</h3>
                                    <p>(Carbon Monoxide)</p>
                                </div>
                                <p>
                                    <ShowMoreText lines={3} more="Show more" less="Show less" className="content-css" anchorClass="show-more-less-clickable" onClick={executeOnClick} expanded={false} truncatedEndingComponent={".... "}>
                                    <b>0-1.7 ppm (0-2,000 µg/m³):</b> Good – No health impacts.
                                    <br></br><b>1.7-9 ppm (2,000-10,000 µg/m³):</b> Moderate – May cause discomfort for those with heart conditions.
                                    <br></br><b>9-15 ppm (10,000-17,000 µg/m³):</b> Unhealthy for Sensitive Groups – People with heart or lung disease may experience symptoms.
                                    <br></br><b>15-30 ppm (17,000-35,000 µg/m³):</b> Unhealthy – Increased likelihood of adverse effects for sensitive groups.
                                    <br></br><b>30+ ppm (&lt; 35,000 µg/m³):</b> Very Unhealthy to Hazardous – Serious health risks for everyone, particularly those with pre-existing conditions.
                                    </ShowMoreText>
                                </p>
                            </div>
                            <div className="air-" >
                                <div className="air">
                                    <h3>NO<sup>2</sup> & O<sup>3</sup></h3>
                                </div>
                                <p>
                                    <ShowMoreText lines={3} more="Show more" less="Show less" className="content-css" anchorClass="show-more-less-clickable" onClick={executeOnClick} expanded={false} truncatedEndingComponent={".... "}>
                                    <b>0-50 µg/m³ (Good):</b> Air quality is considered satisfactory, and air pollution poses little or no risk.
                                    <br></br><b>51-100 µg/m³ (Moderate):</b> Air quality is acceptable; however, there may be a moderate health concern for a very small number of people who are sensitive to air pollution.
                                    <br></br><b>101-200 µg/m³ (Unhealthy for Sensitive Groups):</b> Members of sensitive groups may experience health effects. The general public is not likely to be affected.
                                    <br></br><b>201-300 µg/m³ (Unhealthy):</b> Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.
                                    <br></br><b>300+ µg/m³ (Very Unhealthy to Hazardous):</b> Health alert: everyone may experience more serious health effects.
                                    </ShowMoreText>
                                </p>
                            </div>
                            
                            <div className="air-" >
                                <div className="air">
                                    <h3>PM2.5</h3>
                                    <p>(Particulate Matter &le; 2.5µm)</p>
                                </div>
                                <p>
                                    <ShowMoreText lines={3} more="Show more" less="Show less" className="content-css" anchorClass="show-more-less-clickable" onClick={executeOnClick} expanded={false} truncatedEndingComponent={".... "}>
                                    <b>0-50 µg/m³ (Good):</b> Low PM2.5 levels; air quality is satisfactory.
                                    <br></br><b>51-100 µg/m³ (Moderate):</b> PM2.5 levels are acceptable; some sensitive groups may experience minor health effects.
                                    <br></br><b>101-200 µg/m³ (Unhealthy for Sensitive Groups):</b> Sensitive groups may experience serious health effects.
                                    <br></br><b>201-300 µg/m³ (Unhealthy):</b> High PM2.5 levels; everyone may start to experience adverse health effects.
                                    <br></br><b>300+ µg/m³ (Very Unhealthy to Hazardous):</b> Very high PM2.5 levels; serious health warnings and risks for everyone.
                                    </ShowMoreText>
                                </p>
                            </div>
                            <div className="air-" >
                                <div className="air">
                                    <h3>PM10</h3>
                                    <p>(Particular matter &le; 10µm)</p>
                                </div>
                                <p>
                                    <ShowMoreText lines={3} more="Show more" less="Show less" className="content-css" anchorClass="show-more-less-clickable" onClick={executeOnClick} expanded={false} truncatedEndingComponent={".... "}>
                                    <b>0-50 µg/m³ (Good):</b> Low PM10 levels; air quality is good.
                                    <br></br><b>51-100 µg/m³ (Moderate):</b> PM10 levels are acceptable; some sensitive groups may experience slight health effects.
                                    <br></br><b>101-200 µg/m³ (Unhealthy for Sensitive Groups):</b> Sensitive groups may experience adverse health effects.
                                    <br></br><b>201-300 µg/m³ (Unhealthy):</b> High PM10 levels; everyone may start to experience health effects.
                                    <br></br><b>300+ µg/m³ (Very Unhealthy to Hazardous):</b> Very high PM10 levels; serious health risks for everyone.
                                    </ShowMoreText>
                                </p>
                            </div>
                            <div className="air-" style={{ borderBottom: 'none' }}>
                                <div className="air">
                                    <h3>SO<sup>2</sup></h3>
                                    <p>(Sulphur Dioxide)</p>
                                </div>
                                <p>
                                    <ShowMoreText lines={3} more="Show more" less="Show less" className="content-css" anchorClass="show-more-less-clickable" onClick={executeOnClick} expanded={false} truncatedEndingComponent={".... "}>
                                    <b>0-50 µg/m³ (Good):</b> Low PM10 levels; air quality is good.
                                    <br></br><b>51-100 µg/m³ (Moderate):</b> PM10 levels are acceptable; some sensitive groups may experience slight health effects.
                                    <br></br><b>101-200 µg/m³ (Unhealthy for Sensitive Groups):</b> Sensitive groups may experience adverse health effects.
                                    <br></br><b>201-300 µg/m³ (Unhealthy):</b> High PM10 levels; everyone may start to experience health effects.
                                    <br></br><b>300+ µg/m³ (Very Unhealthy to Hazardous):</b> Very high PM10 levels; serious health risks for everyone.
                                    </ShowMoreText>
                                </p>
                            </div>
                            <div className="air-" >
                                <div className="air">
                                    <h3>GB DEBRA Index</h3>
                                </div>
                                <p>
                                    <ShowMoreText lines={3} more="Show more" less="Show less" className="content-css" anchorClass="show-more-less-clickable" onClick={executeOnClick} expanded={false} truncatedEndingComponent={".... "}>
                                    <b>1-3 (Good):</b> Low pollution; little or no risk to health.
                                    <br></br><b>4-6 (Moderate):</b> Air quality is acceptable, but some sensitive individuals may experience slight health effects.
                                    <br></br><b>7-9 (Unhealthy for Sensitive Groups):</b> High pollution levels; sensitive groups may experience adverse health effects.
                                    <br></br><b>10 (Very Unhealthy to Hazardous):</b> Very high pollution levels; health warnings for everyone, and serious impacts for sensitive groups.
                                    </ShowMoreText>
                                </p>
                            </div>
                            <div className="air-" style={{borderBottom: '0px soild'}}>
                                <div className="air">
                                    <h3>US EPA Index</h3>
                                </div>
                                <p>
                                    <ShowMoreText lines={3} more="Show more" less="Show less" className="content-css" anchorClass="show-more-less-clickable" onClick={executeOnClick} expanded={false} truncatedEndingComponent={".... "}>
                                    <b>0-50 (Good):</b> Air quality is satisfactory and poses little or no health risk.
                                    <br></br><b>51-100 (Moderate):</b> Air quality is acceptable, but there may be moderate health concerns for sensitive individuals.
                                    <br></br><b>101-200 (Unhealthy for Sensitive Groups):</b> Sensitive groups, such as those with respiratory conditions, may experience health effects.
                                    <br></br><b>201-300 (Unhealthy):</b> Health effects may be experienced by everyone; sensitive groups may experience more serious effects.
                                    <br></br><b>300+ (Very Unhealthy to Hazardous):</b> Health warnings are issued for everyone; serious health effects are likely for the entire population.
                                    </ShowMoreText>
                                </p>
                            </div>
                        </div>
                    </div>
                )}
                    </div>
                
            {/* </div> */}
            
        </>
    )
}
export default Polutant