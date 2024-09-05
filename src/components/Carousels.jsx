
import { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import day from '../assets/day.png'
import night from '../assets/night.png'
import rain from '../assets/rain.png'
// import ExampleCarouselImage from 'react-bootstrap/ExampleCarouselImage';
// import CarouselItem from 'react-bootstrap/CarouselItem'

function Carousels({forecastData}) {
    useEffect(()=>{
        console.log("Forecast data in Carousels",forecastData)
    },[forecastData])

    return (
        <Carousel>
        <Carousel.Item>
            {/* <ExampleCarouselImage text="First slide" /> */}
            <img
                    className="d-block w-60" style={{opacity:'0.5', height:'400px', margin:'0 auto',alignItems:'center'}}
                    src={day}
                    alt=" Sunny Day"
                />
            <Carousel.Caption style={{color:'white'}}>
            {forecastData && forecastData.forecast && forecastData.forecast.forecastday && forecastData.forecast.forecastday[0] && (
                <h1>{forecastData.forecast.forecastday[0].date}</h1>
            )}
            <h3>SUNNY DAY</h3>
            <p>It's so hot🥵.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            {/* <ExampleCarouselImage text="Second slide" /> */}
            <img
                    className="d-block" style={{opacity:'0.6', width:'750px', height:'400px', margin:'0 auto',alignItems:'center'}}
                    src={night}
                    alt="night"
                />
            <Carousel.Caption>
            {forecastData && forecastData.forecast && forecastData.forecast.forecastday && forecastData.forecast.forecastday[0] && (
                <h1>{forecastData.forecast.forecastday[0].date}</h1>
            )}
            <h3>Night</h3>
            <p>Don't go out at night without any reason, it might be scary👻.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
                <img
                    className="d-block w-60" style={{ opacity:'0.5', width:'750px', height:'400px', margin:'0 auto',alignItems:'center'}}
                    src={rain}
                    alt="Third rain"
                />
            {/* <ExampleCarouselImage text="Third slide" /> */}
            <Carousel.Caption>
            {forecastData && forecastData.forecast && forecastData.forecast.forecastday && forecastData.forecast.forecastday[0] && (
                <h1>{forecastData.forecast.forecastday[0].date}</h1>
            )}
            <h3>RAINING</h3>
            <p>
                Always carry umbrela when it's raining outside☔.
            </p>
            
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
  

    )
}
export default Carousels